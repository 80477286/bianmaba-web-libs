import AbstractHttpClient from "./AbstractHttpClient";
import {CreateAxiosDefaults} from "axios";
import Executor from "../executors/Executor";
import GetExecutor from "../executors/GetExecutor";
import PostExecutor from "../executors/PostExecutor";

import {reactive} from "vue";
import defaultGlobalOptions, {GlobalOptions} from "../config/GlobalOptions";
import {merge} from "@bianmaba/utils";
import {HttpContentType, HttpMethod, PageableQueryRequestData, QueryRequestData} from "../executors/request/Request";
import QueryExecutor from "../executors/QueryExecutor";

export default class HttpClient extends AbstractHttpClient {
    private static instance: HttpClient | any;

    constructor(options: GlobalOptions = defaultGlobalOptions) {
        super(options)
    }

    /**
     *
     * @param options  axios实例配置选项，此选项中的data及params不会生效
     */
    public createRequestExecutor(url: string = '', options: CreateAxiosDefaults<any> | any = {},): Executor {
        let axiosInstance = this.createAxiosInstance(options);
        return reactive(new Executor(axiosInstance, url));
    }

    /**
     *
     * @param options  axios实例配置选项，此选项中的data及params不会生效
     */
    public createGetExecutor(url: string = '', options: CreateAxiosDefaults<any> | any = {}): GetExecutor {
        let _options = merge({
            method: HttpMethod.GET,
            data: null,
            params: null,
            headers: {'Content-Type': HttpContentType["application/x-www-form-urlencoded"]}
        }, options);
        let axiosInstance = this.createAxiosInstance(_options);
        return reactive(new GetExecutor(axiosInstance, url));
    }

    /**
     *
     * @param options  axios实例配置选项，此选项中的data及params不会生效
     */
    public createQueryExecutor(url: string = '', options: CreateAxiosDefaults<any> | any = {}): GetExecutor {
        let _options = merge({
            method: HttpMethod.GET,
            data: null,
            params: null,
            headers: {'Content-Type': HttpContentType["application/x-www-form-urlencoded"]}
        }, options);
        let axiosInstance = this.createAxiosInstance(_options);
        return reactive(new QueryExecutor(axiosInstance, url).setDefaultResponse({data: []}).setDefaultRequestData(new QueryRequestData()));
    }

    /**
     *
     * @param options  axios实例配置选项，此选项中的data及params不会生效
     */
    public createPageableQueryExecutor(url: string = '', options: CreateAxiosDefaults<any> | any = {}): GetExecutor {
        let _options = merge({
            method: HttpMethod.GET,
            data: null,
            params: null,
            headers: {'Content-Type': HttpContentType["application/x-www-form-urlencoded"]}
        }, options);
        let axiosInstance = this.createAxiosInstance(_options);
        return reactive(new QueryExecutor(axiosInstance, url).setDefaultResponse({data: []}).setDefaultRequestData(new PageableQueryRequestData()));
    }

    /**
     *
     * @param options  axios实例配置选项，此选项中的data及params不会生效
     */
    public createPostExecutor(url: string = '', options: CreateAxiosDefaults<any> | any = {}): PostExecutor {
        let _options = merge({
            method: HttpMethod.POST,
            data: null,
            params: null,
            headers: {'Content-Type': HttpContentType["multipart/form-data"]}
        }, options);
        let axiosInstance = this.createAxiosInstance(_options);
        return reactive(new PostExecutor(axiosInstance, url));
    }

    /**
     * 获取AxiosHelper实例（单例模式），首将获取时会根据参数初始化实例，后续再获取时参数将不会生效，而是直接返回已经存在的实例
     * @param options
     */
    public static getInstance(options?: GlobalOptions | any): HttpClient {
        if (!this.instance) {
            this.instance = new HttpClient(options);
        } else {
            if (options) {
                console.error('实例已经存在，重获取实例时，配置选项将不会生效！')
            }
        }
        return this.instance;
    }
}