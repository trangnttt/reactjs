import request from '../utils/request'


const getAll = () => {
    return request({
        method: 'get',
        url: '/users/',
    })
}

const getId = (id) => {
    return request({
        method: 'get',
        url: '/users/' + id,
    })
}

export default { getAll, getId }
