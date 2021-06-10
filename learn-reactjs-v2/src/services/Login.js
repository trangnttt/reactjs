import request from '../utils/request'


const getAll = () => {
    return request({
        method: 'get',
        url: '/login/',
    })
}

const getId = (id) => {
    return request({
        method: 'get',
        url: '/login/' + id,
    })
}


export default { getAll, getId }
