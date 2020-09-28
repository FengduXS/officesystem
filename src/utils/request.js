import axios from 'axios'
const service = axios.create({
    baseURL: 'http://36.152.9.51:18900/sys/permission/',
    timeout: 3 * 1000
})
const $axios ={
    get(url,params){
        const config = {
            method: 'get',
            url:url
        }
        if(params) config.params = params
        console.log(service)
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