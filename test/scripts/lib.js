const Freenom = require('../../src');
const utils = require('corifeus-utils');

module.exports.start = async() => {
    const freenom = await Freenom({
        email: 'alabard@gmail.com',
        password: process.argv[2],
        debug: true,
    });
    return freenom
}

module.exports.test = async(func, options) => {
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

