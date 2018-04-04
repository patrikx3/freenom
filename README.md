[//]: #@corifeus-header
  
[![NPM](https://nodei.co/npm/p3x-freenom.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/p3x-freenom/)

  [![Build Status](https://travis-ci.org/patrikx3/freenom.svg?branch=master)](https://travis-ci.org/patrikx3/freenom)  [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/patrikx3/freenom/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/freenom/?branch=master)  [![Code Coverage](https://scrutinizer-ci.com/g/patrikx3/freenom/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/freenom/?branch=master) 


 
# Freenom API - Promise and auto renew expiring domains v1.0.482-280  

This is an open-source project. Star this repository if you like it, or even donate!  Thank you so much! :)

I run my own server with dynamic IP address so it may happen that the server can not be reachable for about max 5 minutes due to the dynamic DNS. The server may also be unreachable when I backup the SSD with Clonzilla (very rarely) or an electrical issue (but this should not happen again). When the server is down, please hang on for 5-30 minutes and the server will be back up.

All my domains (patrikx3.com and corifeus.com) could have errors since I am developing in my free time. However, it is usually stable.


### Node Version Requirement 
``` 
>=8.9.0 
```  
   
### Built on Node 
``` 
v9.10.1
```   
   
The ```async``` and ```await``` keywords are required.

Install NodeJs:    
https://nodejs.org/en/download/package-manager/    



# Description  

                        
[//]: #@corifeus-header:end


# Freenom API

http://www.freenom.com/en/freenom-api.html

I am using these only right now. So no other functions but very easy to add in and Promise based.

```javascript
const Freenom = require('p3x-freenom');
const freenom = await Freenom({
    email: 'p3x@corifeus',
    password: 'password',
});

await freenom.service.ping();

await freenom.domain.search({
    domainname: 'patrikx3.com',
    domaintype: 'FREE'
})

await freenom.domain.delete({ domainname: 'random.tk'));

await freenom.domain.register({
        domainname: [
            'random.tk',
            'random1.tk',
            'random2.tk',
        ],
        domaintype: 'FREE',
        period: '1Y',
        nameserver: [
            'ns1.ns.tk',
            'ns2.ns.tk',
        ]
})

await freenom.domain.delete, {  domainname: domains })

await freenom.domain.list()
```

# The good extra functions 

It automatically renew the free domains (it checks if it is within 14 days expiry and the do it).

```javascript
// just a helper, you don't relly need it
const renewable = await freenom.domain.expiring({
    expiry: '60 days',
});

// the magic
await freenom.domain.expiringRenew({
    period: '12M',
})
```
    
[//]: #@corifeus-footer

---

[**P3X-FREENOM**](https://pages.corifeus.com/freenom) Build v1.0.482-280 

[![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software) [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) 


## Sponsor

[![JetBrains](https://www.patrikx3.com/images/jetbrains-logo.svg)](https://www.jetbrains.com/)
  
 

[//]: #@corifeus-footer:end
