[//]: #@corifeus-header

  [![Build Status](https://travis-ci.org/patrikx3/freenom.svg?branch=master)](https://travis-ci.org/patrikx3/freenom)  [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/patrikx3/freenom/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/freenom/?branch=master)  [![Code Coverage](https://scrutinizer-ci.com/g/patrikx3/freenom/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/freenom/?branch=master) 

  
[![NPM](https://nodei.co/npm/p3x-freenom.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/p3x-freenom/)
---

 
# Freenom API - Promise and auto renew expiring domains

This is an open source project. Just code.

### Node Version Requirement 
``` 
>=7.8.0 
```  
   
### Built on Node 
``` 
v8.7.0
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

[**P3X-FREENOM**](https://pages.corifeus.com/freenom) Build v1.0.196-170 

[![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software) 
 

[//]: #@corifeus-footer:end
