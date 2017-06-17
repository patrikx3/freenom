const list = (exec) => {
    return async (body) => {
        return await exec({
            service: 'nameserver',
            func: 'list',
            body: body
        });
    }
}

const _delete = (exec) => {
    return async (body) => {
        return await exec({
            service: 'nameserver',
            func: 'delete',
            method: 'DELETE',
            body: body
        })
    }
}

const register = (exec) => {
    return async (body) => {
        return await exec({
            service: 'nameserver',
            func: 'register',
            method: 'PUT',
            body: body
        })
    }
}

module.exports.list = list;
module.exports.delete = _delete;
module.exports.register = register;