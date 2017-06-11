module.exports.ping = (exec) => {
    return async () => {
        return await exec('ping');
    }
}