import AbstractHttpClient from "./AbstractHttpClient";
import {CreateAxiosDefaults, default as axios} from "axios";
import Executor from "../executors/Executor";
import GetExecutor from "../executors/GetExecutor";
import PostExecutor from "../executors/PostExecutor";

import {reactive} from "vue";
import {merge} from "@bianmaba/utils";
import {HttpContentType, HttpMethod, RequestData, RequestParams} from "../executors/request/Request";
import QueryExecutor from "../executors/QueryExecutor";
import PageableQueryExecutor from "../executors/PageableQueryExecutor";
import {AxiosStatic} from "axios/index";

export default class HttpClient extends AbstractHttpClient {
    private static instance: HttpClient | any;

    constructor(options: CreateAxiosDefaults | any = {}) {
        super(options)
    }

    /**
     *
     * @param options  axios实例配置选项，此选项中的data及params不会生效
     */
    public createRequestExecutor(url: string = '', options: CreateAxiosDefaults<any> | any = {}): Executor {
        return reactive(new Executor(this.defaultAxiosInstance, url, options)) as Executor;
    }

    /**
     *
     * @param options  axios实例配置选项，此选项中的data及params不会生效
     */
    public createGetExecutor(url: string = '', options: CreateAxiosDefaults<any> | any = {}): GetExecutor {
        let _options = merge({
            method: HttpMethod.GET,
            headers: {'Content-Type': HttpContentType["application/x-www-form-urlencoded"]}
        }, options);
        let executor = reactive(new GetExecutor(this.defaultAxiosInstance, url, _options)) as GetExecutor;
        return executor;
    }

    /**
     *
     * @param options  axios实例配置选项，此选项中的data及params不会生效
     */
    public createQueryExecutor(url: string = '', options: CreateAxiosDefaults<any> | any = {}): QueryExecutor {
        let _options = merge({
            method: HttpMethod.POST,
            headers: {'Content-Type': HttpContentType["application/json"]}
        }, options);
        let executor = reactive(new QueryExecutor(this.defaultAxiosInstance, url, _options)) as QueryExecutor;
        return executor;
    }

    /**
     *
     * @param options  axios实例配置选项，此选项中的data及params不会生效
     */
    public createPageableQueryExecutor(url: string = '', options: CreateAxiosDefaults<any> | any = {}): PageableQueryExecutor {
        let _options = merge({
            method: HttpMethod.POST,
            headers: {'Content-Type': HttpContentType["application/json"]}
        }, options);
        let executor = reactive(new PageableQueryExecutor(this.defaultAxiosInstance, url, _options)) as PageableQueryExecutor;
        return executor;
    }

    /**
     *
     * @param options  axios实例配置选项，此选项中的data及params不会生效
     */
    public createPostExecutor(url: string = '', options: CreateAxiosDefaults<any> | any = {}): PostExecutor {
        let _options = merge({
            method: HttpMethod.POST,
            headers: {'Content-Type': HttpContentType["multipart/form-data"]}
        }, options);
        let executor = reactive(new PostExecutor(this.defaultAxiosInstance, url, _options)) as PostExecutor;
        return executor;
    }

    /**
     * 获取HttpClient实例（单例模式），首将获取时会根据参数初始化实例，后续再获取时参数将不会生效，而是直接返回已经存在的实例
     * @param options
     */
    public static getInstance(options?: CreateAxiosDefaults | any): HttpClient {
        if (!this.instance) {
            this.instance = new HttpClient(options);
        } else {
            if (options) {
                console.error('实例已经存在，重获取实例时，配置选项将不会生效！')
            }
        }
        return this.instance;
    }

    public static post(): PostMethod {
        return {
            do(url: string, data: RequestData = {}, params: RequestParams = {}, options: CreateAxiosDefaults = {}) {
                return HttpClient.getInstance().createPostExecutor(url, options).execute(data, params)
            },
            multipartFormData(url: string, data: RequestData = {}, params: RequestParams = {}, options: CreateAxiosDefaults = {}) {
                return HttpClient.getInstance().createPostExecutor(url, options).toFormDataRequest().execute(data, params)
            },
            form(url: string, data: RequestData = {}, params: RequestParams = {}, options: CreateAxiosDefaults = {}) {
                return HttpClient.getInstance().createPostExecutor(url, options).toFormRequest().execute(data, params)
            },
            json(url: string, data: RequestData = {}, params: RequestParams = {}, options: CreateAxiosDefaults = {}) {
                return HttpClient.getInstance().createPostExecutor(url, options).toJsonRequest().execute(data, params)
            }
        } as PostMethod
    }


    public static get(): GetMethods {
        return {
            do(url: string, params: RequestParams = {}, options: CreateAxiosDefaults = {}) {
                return HttpClient.getInstance().createGetExecutor(url, options).execute(params)
            }
        } as GetMethods
    }
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