import {AxiosInstance, CreateAxiosDefaults, default as axios} from "axios";


export default class AbstractHttpClient {
    public defaultAxiosInstance: AxiosInstance;

    constructor(options: CreateAxiosDefaults | any = {}) {
        this.defaultAxiosInstance = axios.create(options || {})
        this.defaultAxiosInstance.interceptors.response = axios.interceptors.response;
        this.defaultAxiosInstance.interceptors.request = axios.interceptors.request;
    }
}