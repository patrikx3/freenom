const utils = require('corifeus-utils');
const lib = require('./lib');

const service = {
    domain: {},
};

service.domain.active = async (options) => {

    const response = await service.domain.list(options);
//    console.log(response.body.domain.length)
    /*
     { status: 'ACTIVE',
     expirationdate: '20170729',
     registrationdate: '20160729',
     domaintype: 'PAID',
     domainname: 'corifeus.tk' },

     */
    const domains = {};
    const generateDate = (string) => {
        const year = parseInt(string.substring(0, 4));
        const month = parseInt(string.substr(4, 2));
        const day = parseInt(string.substr(6, 2));
        //console.log(string, year, month, day);
        return new Date(Date.UTC( year, month -1, day ))
    }
    response.body.domain.forEach((domain) => {
        if (domain.status !== 'ACTIVE') {
            return;
        }
        domain.registration = lib.stringEightNumbersToDate(domain.registrationdate);
        domain.expiration = lib.stringEightNumbersToDate(domain.expirationdate);

        delete domain.registrationdate;
        delete domain.expirationdate;

        if (!domains.hasOwnProperty(domain.domainname)) {
            domains[domain.domainname] = domain;
        }
    })

    return Object.values(domains);
}

service.domain.expiring = async(options) => {
    let expiry = '14 days';
    if (options.hasOwnProperty('expiry')) {
        expiry = options.expiry;
        delete options.expiry;
    }
    const maxExpiry = utils.time.span(expiry);

    let active = await service.domain.active(options);
    active = active.map((domain) => {
        domain.expiry = utils.time.verbose(
            domain.expiration.getTime(),
            domain.registration.getTime()
        )
        return domain;
    })
    return active.filter((domain) => {
//        console.log(maxExpiry, domain.expiry.leftMs);
//        console.log(utils.time.msParse(maxExpiry), utils.time.msParse(domain.expiry.leftMs));
        return domain.expiry.leftMs < maxExpiry;
    }).map((domain) => {
        const expiry = domain.expiry;
        delete domain.expiry;
        domain.left = expiry.left;
        domain.leftMs = expiry.leftMs;
        return domain;
    });
}

service.domain.expiringRenew = async(options) => {
    const renewable = await service.domain.expiring(options);

    const result = {};
    await renewable.forEachAsync(async (domain) => {
        const response = await service.domain.renew(Object.assign({
            domainname: domain.domainname,
        }, options));
        result[domain.domainname] = response.body;
    })

    return result;
}

module.exports = service;