import axios from 'axios'

class Http {
    constructor () {
        let config = {
            baseURL: "http://localhost:3000",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            timeout: 300000
        };
        this.axios = axios.create(config);
        this.configInterceptors();
    }

    get(resource, params) {
        return this.axios.get(resource, params);
    }

    post(resource, params) {
        return this.axios.post(resource, params);
    }

    delete(resource, params) {
        return this.axios.delete(resource, {data: params});
    }

    put(resource, params) {
        return this.axios.put(resource, params);
    }

    configInterceptors = () => {
        this.axios.interceptors.request.use(this.reqConfig);
        this.axios.interceptors.response.use(res => res, this.resErrorHandler);
    }

    reqConfig = (config) => {
        // const token = window.localStorage.token;
        // if (token) {
        //     config.headers.authorization = `Bearer ${token}`;
        // }
        return Promise.resolve(config);
    }

    resHandle = (response) => {
        if (response.data) {
            let data = response.data;
            if (data.erro) throw (data.message + " : " + JSON.stringify(data.result)).toString()
            return data.result
        }
    }

    resErrorHandler = (error) => {
        if (!error.response) {
            throw error;
        }
        return Promise.reject(error);
    }

}

export default new Http();