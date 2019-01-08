const utils = require('corifeus-utils');
const querystring = require('querystring');
const mz = require('mz');
const path = require('path');


// http://www.freenom.com/en/freenom-api.html
module.exports = async function (options) {

    let { email, password, debug, version } = options;
    if (!version) {
        version = 'v2';
    }


    const baseUrl = 'https://api.freenom.com/v2';

    const endpointDir = `${__dirname}/endpoint/${version}`;
    const endpoints = await mz.fs.readdir(endpointDir)

    const endpointServices = {};
    endpoints.forEach((endpoint) => {
        const requireName = path.basename(endpoint, '.js');
//        console.log(requireName);
        endpointServices[requireName] = require(`${endpointDir}/${endpoint}`);
    })

    if (debug) {
        console.log('----------------------------')
        console.log('endpointService')
        console.log(endpointServices)
        console.log();
    }

    return new function(options) {

        if (debug) {
            console.log('----------------------------')
            console.log('Settings')
            console.log(this)
            console.log();
        }


        const exec = async (options) => {
            if (typeof options === 'string') {
                options = {
                    func: options,
                }
            }
            let { service, func, method, body }  = options;

            service = service || 'service';
            method = method || "GET";
            body = body || {};

            body.email = email;
            body.password = password;

            if (debug && !body.hasOwnProperty('test_mode')) {
               body.test_mode = 1;
            }

            let url = `${baseUrl}/${service}/${func}`;

            Object.keys(body).forEach(key => {
                if (body[key] === undefined) {
                    delete body[key];
                }
            })

            url += '?' + querystring.stringify(body);

            if (debug) {
                console.log('----------------------------');
                console.log('Request')
                console.log(method, url, body)
            }

            const response = await utils.http.request({
                url: url,
                method: method,
            })
            return response;
        };

        const service = require('./service');;
        Object.keys(endpointServices).forEach((endpointService) => {
            service[endpointService] = service[endpointService] || {};
            Object.keys(endpointServices[endpointService]).forEach(endpointServiceMethod => {
                service[endpointService][endpointServiceMethod] = endpointServices[endpointService][endpointServiceMethod](exec);
            })
        })

        if (debug) {
            console.log('----------------------------');
            console.log('service')
            console.log(service)
        }


        return service;
    }
}