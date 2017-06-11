#!/usr/bin/env node
const Freenom = require('../../src');
const utils = require('corifeus-utils');

const start = async() => {

    const freenom = await Freenom({
        email: 'alabard@gmail.com',
        password: process.argv[2],
        debug: true,
    });

    const test = async(func, options) => {
        console.log('------------------------------------------');
        if (options !== undefined) {
            console.log('Request', options)
            console.log();
        }
        const result  = await func(options);
        if (result.hasOwnProperty('body')) {
            console.log('Response', result.body);
            console.log();
        } else {
            console.log(result);
        }
        return result;
    }

//    await test(freenom.service.ping)

    /*
    await test(freenom.domain.search, {
        domainname: 'patrikx3.tk',
        domaintype: 'FREE'
    });
    */

//    await test(freenom.domain.delete, { domainname: 'p3x-ns.tk' })

/*
    const prefix = 'patrikx3-';
    const domains = [
//        prefix + await utils.random.lower(6) + '.tk',
//        prefix + await utils.random.lower(6) + '.tk',
        prefix + await utils.random.lower(6) + '.tk',
    ];
    const domaintype = 'FREE';
    const period = '1Y';

    await test(freenom.domain.search, {
        domainname: domains,
        domaintype: domaintype,
    })

    await test(freenom.domain.register, {
        domainname: domains,
        domaintype: domaintype,
        period: '1Y',
        nameserver: [
            'ns1.namesystem.tk',
            'ns2.namesystem.tk',
        ]
    })

    await test(freenom.domain.delete, {
        domainname: domains
    })
*/

//    await test(freenom.domain.delete, { domainname: 'p3x-ns.tk', test_mode: undefined })
/*
    await test(freenom.domain.active, {
        test_mode: undefined
    });
*/


    await test(freenom.domain.expiringRenew, {
        expiry: '60 days',
//        test_mode: undefined,
        //period: '1Y',
    })

    /*
    const renewable = await test(freenom.domain.expiring, {
        expiry: '60 days',
        test_mode: undefined
    });

    const result = {};
    await renewable.forEachAsync(async (domain) => {
        const response = await test(freenom.domain.renew, {
            domainname: domain.domainname,
            test_mode: undefined,
            period: '1Y'
        });
        result[domain.domainname] = response.body;
    })

    console.log(result);
     */
}
start();