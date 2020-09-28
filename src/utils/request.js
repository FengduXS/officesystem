import axios from 'axios'
const service = axios.create({
    // 公共接口--这里注意后面会讲
    baseURL: 'http://36.152.9.51:18900/sys/permission/',
    // 超时时间 单位是ms，这里设置了3s的超时时间
    timeout: 3 * 1000
})
const $axios ={
    get(url,params){
        const config = {
            method: 'get',
            url:url
        }
        if(params) config.params = params
        return service(config)
    },
    post(url,params){
        const config = {
            method: 'post',
            url:url
        }
        if(params) config.data = params
        return service(config)
    },
    put(url,params){
        const config = {
            method: 'put',
            url:url
        }
        if(params) config.params = params
        return service(config)
    },
    delete(url,params){
        const config = {
            method: 'delete',
            url:url
        }
        if(params) config.params = params
        return service(config)
    }
}
export default $axios