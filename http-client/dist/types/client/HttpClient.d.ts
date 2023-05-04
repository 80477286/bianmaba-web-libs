import AbstractHttpClient from "./AbstractHttpClient";
import { CreateAxiosDefaults } from "axios";
import Executor from "../executors/Executor";
import GetExecutor from "../executors/GetExecutor";
import PostExecutor from "../executors/PostExecutor";
export default class HttpClient extends AbstractHttpClient {
    private static instance;
    constructor(options?: CreateAxiosDefaults);
    /**
     *
     * @param options  axios实例配置选项，此选项中的data及params不会生效
     */
    createRequestExecutor(url?: string, options?: CreateAxiosDefaults<any> | any): Executor;
    /**
     *
     * @param options  axios实例配置选项，此选项中的data及params不会生效
     */
    createGetExecutor(url?: string, options?: CreateAxiosDefaults<any> | any): GetExecutor;
    /**
     *
     * @param options  axios实例配置选项，此选项中的data及params不会生效
     */
    createQueryExecutor(url?: string, options?: CreateAxiosDefaults<any> | any): GetExecutor;
    /**
     *
     * @param options  axios实例配置选项，此选项中的data及params不会生效
     */
    createPageableQueryExecutor(url?: string, options?: CreateAxiosDefaults<any> | any): GetExecutor;
    /**
     *
     * @param options  axios实例配置选项，此选项中的data及params不会生效
     */
    createPostExecutor(url?: string, options?: CreateAxiosDefaults<any> | any): PostExecutor;
    /**
     * 获取HttpClient实例（单例模式），首将获取时会根据参数初始化实例，后续再获取时参数将不会生效，而是直接返回已经存在的实例
     * @param options
     */
    static getInstance(options?: CreateAxiosDefaults | any): HttpClient;
    static post(): PostMethod;
    static get(): GetMethods;
}
export interface GetMethods {
    do: Function;
}
export interface PostMethod {
    do: Function;
    multipartFormData: Function;
    form: Function;
    json: Function;
}
