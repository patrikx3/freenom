[//]: #@corifeus-header

  [![Build Status](https://travis-ci.org/patrikx3/freenom.svg?branch=master)](https://travis-ci.org/patrikx3/freenom)  [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/patrikx3/freenom/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/freenom/?branch=master)  [![Code Coverage](https://scrutinizer-ci.com/g/patrikx3/freenom/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/freenom/?branch=master) 

  
[![NPM](https://nodei.co/npm/p3x-freenom.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/p3x-freenom/)
---

 
# Freenom API - Promise and auto renew expiring domains

## Issues / Support
This is an open source project. Time is a precious thing, so I have rarely time to give support and fix issues for someone else. I fix a bug, when I have an error that I need. If you got an issue, error or bug, I hope someone will have time to do it for you, otherwise, you are on your own.

Though, if I know the solution, I will tell you. Besides, core errors will be fixed by me.

***If you want to extend, fix bugs or add in new features, I promptly merge pull requests or you can become a ```patrikx3``` member.***

Besides, when I can support, please note, I cannot support old versions, only the current/latest version.

### Node Version Requirement 
``` 
>=7.8.0 
```  
   
### Built on Node 
``` 
v8.1.0
```   
   
The ```async``` and ```await``` keywords are required.

Install NodeJs:    
https://nodejs.org/en/download/package-manager/    
  
### Updating
Since, I work full time, I can work only on weekends. Github updates are released only Sundays. Minor errors can be released any time, but reflects will be shown only in NPM.     
  
# Description  

                        
[//]: #@corifeus-header:end


# Freemon API

http://www.freenom.com/en/freenom-api.html

I am using these only right now. So no other functions but very easy to add in and Promise based.

```javascript
const Freenom = require('p3x-freemon');
const freenom = await Freenom({
    email: 'p3x@corifeus',
    password: 'password',
});

await freenom.service.ping();

await freenom.domain.search({
    domainname: 'patrikx3.tk',
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
    period: '1Y',
})
```
    
[//]: #@corifeus-footer

---
[**P3X-FREENOM**](https://pages.corifeus.tk/freenom) Build v1.0.3-10

[Corifeus](http://www.corifeus.tk) by [Patrik Laszlo](http://patrikx3.tk)


[//]: #@corifeus-footer:end

