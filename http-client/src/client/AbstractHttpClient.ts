import {AxiosInstance, CreateAxiosDefaults, default as axios} from "axios";
import {merge} from "@bianmaba/utils";
import {HttpContentType} from "../executors/request/Request";


export default class AbstractHttpClient {

    constructor(options: CreateAxiosDefaults = {}) {
        axios.defaults = merge(axios.defaults || {}, {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': HttpContentType["application/json"]
        }, options);
        console.debug("初始化全局配置...")
        console.debug("全局配置初始化完成。")
    }

    public createAxiosInstance(options: CreateAxiosDefaults): AxiosInstance {
        let instance = axios.create(options);
        instance.interceptors.response = axios.interceptors.response;
        instance.interceptors.request = axios.interceptors.request;
        console.log("axios instance created")
        return instance;
    }
}