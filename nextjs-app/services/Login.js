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

const postLogin = (bodyFormData) => {
    return request({
        method: 'post',
        url: 'login',
        data: bodyFormData,
    })
}



export default { getAll, getId, postLogin }
