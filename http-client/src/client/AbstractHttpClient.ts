import {AxiosInstance, CreateAxiosDefaults, default as axios} from "axios";
import {merge} from "@bianmaba/utils";


export default class AbstractHttpClient {
    public defaultAxiosInstance: AxiosInstance;

    constructor(options: CreateAxiosDefaults | any = {}) {
        this.defaultAxiosInstance = axios.create(merge({}, axios.defaults, options || {}))
        this.defaultAxiosInstance.interceptors.response = axios.interceptors.response;
        this.defaultAxiosInstance.interceptors.request = axios.interceptors.request;
    }
}