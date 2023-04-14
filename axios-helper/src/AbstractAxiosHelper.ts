import {AxiosInstance, AxiosResponse, CreateAxiosDefaults, default as axios, InternalAxiosRequestConfig} from "axios";
import {merge} from "@bianmaba/utils";
import {DEFAULT_GLOBAL_OPTIONS} from "./interface/DefaultGlobalOptions";
import {DefaultGlobalOptions} from "./interface/types";


export default class AbstractAxiosHelper {
    protected globalOptions: DefaultGlobalOptions = DEFAULT_GLOBAL_OPTIONS;

    constructor(options: DefaultGlobalOptions = DEFAULT_GLOBAL_OPTIONS) {
        this.globalOptions = merge(this.globalOptions || {}, options);
        console.debug("初始化全局配置...")
        axios.defaults.baseURL = this.globalOptions.baseUrl;
        axios.defaults.method = this.globalOptions.method;
        axios.defaults.headers.common['X-Requested-With'] = this.globalOptions.xRequestedWith;
        // // 请求拦截器
        axios.interceptors.request.use(this.globalOptions.requestSuccessHandler || this.defaultRequestSuccessHandler, this.globalOptions.requestFailHandler || this.defaultRequestFailHandler);

        axios.interceptors.response.use(this.globalOptions.responseSuccessHandler || this.defaultResponseSuccessHandler, this.globalOptions.responseFailHandler || this.defaultResponseFailHandler);
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
        instance.interceptors.request.use(this.globalOptions.requestSuccessHandler, this.globalOptions.requestFailHandler);
        instance.interceptors.response.use(this.globalOptions.responseSuccessHandler, this.globalOptions.responseFailHandler);
        return instance;
    }
}