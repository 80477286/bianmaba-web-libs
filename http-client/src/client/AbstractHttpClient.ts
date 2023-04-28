import {AxiosInstance, AxiosResponse, CreateAxiosDefaults, default as axios, InternalAxiosRequestConfig} from "axios";
import {merge} from "@bianmaba/utils";
import defaultGlobalOptions, {GlobalOptions} from "../config/GlobalOptions";


export default class AbstractHttpClient {
    public static default: GlobalOptions = defaultGlobalOptions;

    constructor(options: GlobalOptions = {}) {
        AbstractHttpClient.default = merge(AbstractHttpClient.default || {}, options);
        console.debug("初始化全局配置...")
        axios.defaults.baseURL = AbstractHttpClient.default.baseUrl;
        axios.defaults.method = AbstractHttpClient.default.method || axios.defaults.method;
        axios.defaults.headers.common['X-Requested-With'] = AbstractHttpClient.default.xRequestedWith;
        // // 请求拦截器
        axios.interceptors.request.use(AbstractHttpClient.default.requestSuccessHandler || this.defaultRequestSuccessHandler, AbstractHttpClient.default.requestFailHandler || this.defaultRequestFailHandler);

        axios.interceptors.response.use(AbstractHttpClient.default.responseSuccessHandler || this.defaultResponseSuccessHandler, AbstractHttpClient.default.responseFailHandler || this.defaultResponseFailHandler);
        console.debug("全局配置初始化完成。")
    }

    private defaultRequestSuccessHandler(config: InternalAxiosRequestConfig<any>) {
        return config;
    }

    private defaultRequestFailHandler(error: any) {
        console.error('远程请求出现错误!')
        return Promise.reject(error);
    }


    private defaultResponseSuccessHandler(response: AxiosResponse<any, any>) {
        return response;
    }

    private defaultResponseFailHandler(error: any) {
        console.log(error.response?.data?.result || '远程请求出现错误(code=' + error.response.status + ')')
        return Promise.reject(error);
    }

    public createAxiosInstance(options: CreateAxiosDefaults): AxiosInstance {
        let instance = axios.create(options);
        console.log("axios instance created")
        // // 请求拦截器
        instance.interceptors.request.use(AbstractHttpClient.default.requestSuccessHandler, AbstractHttpClient.default.requestFailHandler);
        instance.interceptors.response.use(AbstractHttpClient.default.responseSuccessHandler, AbstractHttpClient.default.responseFailHandler);
        return instance;
    }
}