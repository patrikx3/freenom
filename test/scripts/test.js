#!/usr/bin/env node
const Freenom = require('../../src');
const utils = require('corifeus-utils');
const lib = require('./lib');

const start = async() => {

    try {
        const domainTest = 'p3x-' + await utils.random.lower(6) + '.tk'

        const freenom = await lib.start();

        await lib.test(freenom.service.ping)

        await lib.test(freenom.domain.search, {
            domainname: domainTest,
            domaintype: 'FREE'
        });

        try {
            await lib.test(freenom.domain.delete, { domainname: domainTest })
        } catch(e) {
            console.error('delete domain', e)
        }

        const domains = [
//        prefix + await utils.random.lower(6) + '.tk',
//        prefix + await utils.random.lower(6) + '.tk',
//        prefix + await utils.random.lower(6) + '.tk',
            domainTest
        ];
        const domaintype = 'FREE';
        const period = '1Y';

        await lib.test(freenom.domain.search, {
            domainname: domains,
            domaintype: domaintype,
        })

        await lib.test(freenom.domain.register, {
            domainname: domains,
            domaintype: domaintype,
            period: '1Y',
            nameserver: [
                'ns1.he.net',
                'ns2.he.net',
                'ns3.he.net',
                'ns4.he.net',
                'ns5.he.net',
            ]
        })

        await lib.test(freenom.domain.delete, {
            domainname: domains
        })

//    await lib.test(freenom.domain.delete, { domainname: 'p3x-ns.tk', test_mode: undefined })


        await lib.test(freenom.domain.active, {
            test_mode: undefined
        });


        await lib.test(freenom.domain.expiringRenew, {
            expiry: '60 days',
//        test_mode: undefined,
            //period: '1Y',
        })

        const ns = await lib.test(freenom.nameserver.list, {
            domainname: domainTest
        });


        /*
            const response = await utils.http.request({
                url: 'https://v4.ident.me/.json',
                localAddress: '192.168.81.2',
            })
            let ip = response.body.address;
            ip = '86.101.220.140';

            const ns = await lib.test(freenom.nameserver.list, {
                domainname: 'namesystem.tk'
            });

            await ns.body.nameserver.forEachAsync(async(ns) => {
                if (ns.ipaddress !== ip) {
                    await lib.test(freenom.nameserver.register, {
                        domainname: ns.domainname,
                        hostname: ns.hostname,
                        ipaddress: ip,
                        test_mode: undefined,
                    })
                }
            })
        */

        /*
        const renewable = await lib.test(freenom.domain.expiring, {
            expiry: '60 days',
            test_mode: undefined
        });

        const result = {};
        await renewable.forEachAsync(async (domain) => {
            const response = await lib.test(freenom.domain.renew, {
                domainname: domain.domainname,
                test_mode: undefined,
                period: '1Y'
            });
            result[domain.domainname] = response.body;
        })

        console.log(result);
         */
    } catch(e) {
        console.error(e)
    }

}
start();