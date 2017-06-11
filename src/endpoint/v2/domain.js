const search = (exec) => {
    return async (body) => {
        return await exec({
            service: 'domain',
            func: 'search',
            body: body
        });
    }
}

const register = (exec) => {
    return async (body) => {
        return await exec({
            service: 'domain',
            func: 'register',
            method: 'POST',
            body: body
        })
    }
}


const _delete = (exec) => {
    return async (body) => {
        return await exec({
            service: 'domain',
            func: 'delete',
            method: 'DELETE',
            body: body
        })
    }
}

const list  = (exec) => {
    return async (body) => {
        return await exec({
            service: 'domain',
            func: 'list',
            method: 'GET',
            body: body,
        })
    }
}

const renew = (exec) => {
    return async (body) => {
        return await exec({
            service: 'domain',
            func: 'renew',
            method: 'POST',
            body: body,
        })
    }
}

module.exports.list = list;
module.exports.search  = search;
module.exports.register = register;
module.exports.delete = _delete
module.exports.renew = renew