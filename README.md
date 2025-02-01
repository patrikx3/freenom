[//]: #@corifeus-header

  [![NPM](https://img.shields.io/npm/v/p3x-freenom.svg)](https://www.npmjs.com/package/p3x-freenom)  [![Donate for PatrikX3 / P3X](https://img.shields.io/badge/Donate-PatrikX3-003087.svg)](https://paypal.me/patrikx3) [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Corifeus @ Facebook](https://img.shields.io/badge/Facebook-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)  [![Uptime ratio (90 days)](https://network.corifeus.com/public/api/uptime-shield/31ad7a5c194347c33e5445dbaf8.svg)](https://network.corifeus.com/status/31ad7a5c194347c33e5445dbaf8)





# 🌐 Freenom API - Promise and auto renew expiring domains v2025.4.122


  
🌌 **Bugs are evident™ - MATRIX️**  
🚧 **This project is under active development!**  
📢 **We welcome your feedback and contributions.**  
    



### NodeJS LTS is supported

### 🛠️ Built on NodeJs version

```txt
v22.13.1
```





# 📝 Description

                        
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

## 🚀 Quick and Affordable Web Development Services

If you want to quickly and affordably develop your next digital project, visit [corifeus.eu](https://corifeus.eu) for expert solutions tailored to your needs.

---

## 🌐 Powerful Online Networking Tool  

Discover the powerful and free online networking tool at [network.corifeus.com](https://network.corifeus.com).  

**🆓 Free**  
Designed for professionals and enthusiasts, this tool provides essential features for network analysis, troubleshooting, and management.  
Additionally, it offers tools for:  
- 📡 Monitoring TCP, HTTP, and Ping to ensure optimal network performance and reliability.  
- 📊 Status page management to track uptime, performance, and incidents in real time with customizable dashboards.  

All these features are completely free to use.  

---

## ❤️ Support Our Open-Source Project  
If you appreciate our work, consider ⭐ starring this repository or 💰 making a donation to support server maintenance and ongoing development. Your support means the world to us—thank you!  

---

### 🌍 About My Domains  
All my domains, including [patrikx3.com](https://patrikx3.com), [corifeus.eu](https://corifeus.eu), and [corifeus.com](https://corifeus.com), are developed in my spare time. While you may encounter minor errors, the sites are generally stable and fully functional.  

---

### 📈 Versioning Policy  
**Version Structure:** We follow a **Major.Minor.Patch** versioning scheme:  
- **Major:** 📅 Corresponds to the current year.  
- **Minor:** 🌓 Set as 4 for releases from January to June, and 10 for July to December.  
- **Patch:** 🔧 Incremental, updated with each build.  

**🚨 Important Changes:** Any breaking changes are prominently noted in the readme to keep you informed.

---


[**P3X-FREENOM**](https://corifeus.com/freenom) Build v2025.4.122

 [![NPM](https://img.shields.io/npm/v/p3x-freenom.svg)](https://www.npmjs.com/package/p3x-freenom)  [![Donate for PatrikX3 / P3X](https://img.shields.io/badge/Donate-PatrikX3-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)





[//]: #@corifeus-footer:end
