[//]: #@corifeus-header
  
[![NPM](https://nodei.co/npm/p3x-freenom.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/p3x-freenom/)

  

[![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://paypal.me/patrikx3) [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Corifeus @ Facebook](https://img.shields.io/badge/Facebook-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)  [![Build Status](https://api.travis-ci.com/patrikx3/freenom.svg?branch=master)](https://travis-ci.com/patrikx3/freenom) 
[![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m780749701-41bcade28c1ea8154eda7cca.svg)](https://uptimerobot.patrikx3.com/)

 


 
# 🌐 Freenom API - Promise and auto renew expiring domains v2019.3.3-2  

  
🙏 This is an open-source project. Star this repository, if you like it, or even donate to maintain the servers and the development. Thank you so much!

Possible, this mini server, rarely, is down, please hang on for 15-30 minutes and the server will be back up.

All my domains ([patrikx3.com](https://patrikx3.com) and [corifeus.com](https://corifeus.com)) could have minor errors, since I am developing in my free time. However, it is usually stable.

**Bugs are evident™ - MATRIX️**  
    

### Node Version Requirement 
``` 
>=10.13.0 
```  
   
### Built on Node 
``` 
v11.10.1
```   
   
The ```async``` and ```await``` keywords are required.

Install NodeJs:    
https://nodejs.org/en/download/package-manager/    



# Description  

                        
[//]: #@corifeus-header:end

## To be able to register and renew FREE DOMAINS

Before, we were able to register and renew with free domains, but by now, these functions are allowed and working ONLY with PAID domains.

### Some links
http://www.freenom.com/en/resellers.html  
http://www.freenom.com/en/termsandconditions.html  
  
## API

http://www.freenom.com/en/freenom-api.html

I am using these only right now. So no other functions but very easy to add in and Promise based.

```js
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

// if you have no domain in the list, instead of
// giving an empty list, it shows and error!!!
// so make sure you have one in the domain list
// because freenom.domain.expiringRenew will of course
// throw an error as well!!!
await freenom.domain.list()
```

# The good extra functions 

It automatically renew the free domains (it checks if it is within 14 days expiry and then does it).

```js
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

[**P3X-FREENOM**](https://pages.corifeus.com/freenom) Build v2019.3.3-2 

[![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software) 


## P3X Sponsors

[IntelliJ - The most intelligent Java IDE](https://www.jetbrains.com/?from=patrikx3)
  
[![JetBrains](https://cdn.corifeus.com/assets/svg/jetbrains-logo.svg)](https://www.jetbrains.com/?from=patrikx3) [![NoSQLBooster](https://cdn.corifeus.com/assets/png/nosqlbooster-70x70.png)](https://www.nosqlbooster.com/)

[The Smartest IDE for MongoDB](https://www.nosqlbooster.com)
  
  
 

[//]: #@corifeus-footer:end
