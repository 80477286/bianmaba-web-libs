import {AxiosInstance, AxiosStatic, CreateAxiosDefaults, default as axios} from "axios";


export default class AbstractHttpClient {
    public defaultAxiosInstance: AxiosInstance;

    constructor(options: CreateAxiosDefaults | any = {}) {
        this.defaultAxiosInstance = axios.create(options || {})
        console.log("create axios:", this.defaultAxiosInstance)
        this.defaultAxiosInstance.interceptors.response = axios.interceptors.response;
        this.defaultAxiosInstance.interceptors.request = axios.interceptors.request;
    }

    /**
     * 初始化默认能数
     * @param options
     */
    public static defaults(setup: (axios: AxiosStatic) => any): void {
        setup(axios);
    }
}