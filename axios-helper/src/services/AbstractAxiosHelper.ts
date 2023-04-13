import {AxiosResponse, CreateAxiosDefaults, default as axios, InternalAxiosRequestConfig} from "axios";
import {ElNotification} from "element-plus";
import GlobalOptions from "./interface/GlobalOptions";
import {merge} from "../libs/utils";
import {DEFAULT_GLOBAL_OPTIONS} from "@/services/interface/DefaultGlobalOptions";


export default class AbstractAxiosHelper {
    protected globalOptions: GlobalOptions = DEFAULT_GLOBAL_OPTIONS;

    constructor(options: GlobalOptions = DEFAULT_GLOBAL_OPTIONS) {
        this.globalOptions = merge(this.globalOptions, options);
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
        ElNotification.error({
            title: '错误', message: '远程请求出现错误：', offset: 120, duration: 2000
        });
        return Promise.reject(error);
    }


    private defaultResponseSuccessHandler(response: AxiosResponse<any, any>) {
        return response;
    }

    private defaultResponseFailHandler(error: any) {
        ElNotification.error({
            title: '错误',
            dangerouslyUseHTMLString: true,
            message: (error.response?.data?.result || '远程请求出现错误(code=' + error.response.status + ')'),
            offset: 120,
            duration: 2000
        });
        return Promise.reject(error);
    }

    public createAxiosInstance(options: CreateAxiosDefaults) {
        let instance = axios.create(options);
        // // 请求拦截器
        instance.interceptors.request.use(this.globalOptions.requestSuccessHandler, this.globalOptions.requestFailHandler);
        instance.interceptors.response.use(this.globalOptions.responseSuccessHandler, this.globalOptions.responseFailHandler);
        return instance;
    }
}