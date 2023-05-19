"use strict";
import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {isArray, isObject, merge} from "@bianmaba/utils";
import {DefaultQueryRequestData, HttpContentType, RequestData, RequestParams} from "./request/Request";
import {DefaultResponse, Response} from "./response/Response";
import GetExecutor from "./GetExecutor";
import PostExecutor from "./PostExecutor";
import {mergeDataOrParams} from "../utils/utils";

export type ExecutorType = (Executor | GetExecutor | PostExecutor | any)

export default class Executor {
    public controller: AbortController = new AbortController()
    public instance: AxiosInstance;
    public url: string = '';
    public loading: boolean = false;
    public data: RequestData = {}
    public params: RequestParams = {}
    public response: Response = new DefaultResponse();
    public defaultResponse: Response = new DefaultResponse();
    public defaultRequestParams: Response = {} as RequestData;
    public defaultRequestData: Response = {} as RequestData;

    constructor(instance: AxiosInstance, url?: string) {

        this.instance = instance;
        this.url = url || this.url;
    }

    public abort() {
        this.controller.abort({success: false, result: '请求操作已被用户取消！'})
    }

    public initOptions(options: AxiosRequestConfig<any> | any = {}) {
        options.signal = this.controller.signal;
        if (options.onDownloadProgress) {
            options._onDownloadProgress = options.onDownloadProgress
            options.onDownloadProgress = (e: any) => {
                this.data.progressEvent = e;
                options._onDownloadProgress(e)
            };
        }
        if (options.onUploadProgress) {
            options._onUploadProgress = options.onUploadProgress
            options.onUploadProgress = (e: any) => {
                this.data.progressEvent = e;
                options._onUploadProgress(e)
            };
        }
    }

    public execute(options: AxiosRequestConfig<any> | any = {}): Promise<Response> {
        return new Promise((resolve, reject) => {
            this.loading = true;
            options.data = this.data = mergeDataOrParams(this.defaultRequestData, options.data);
            options.params = this.data = mergeDataOrParams(this.defaultRequestParams, options.params);
            options.url = options.url ? options.url : this.url;
            this.initOptions(options)
            this.instance.request(options).then((resp: AxiosResponse<any>) => {
                try {
                    this.handleThenResponse(resolve, resp);
                } finally {
                    this.loading = false;
                }
            }).catch((e) => {
                try {
                    this.handleCatchResponse(reject, e);
                } finally {
                    this.loading = false;
                }
            });
        })
    }


    /**
     * 将执行器请求方式设置为：application/json
     */
    public toJsonRequest(): ExecutorType {
        this.instance.defaults.headers['Content-Type'] = HttpContentType["application/json"]
        return this;
    }

    /**
     * 将执行器请求方式设置为：application/x-www-form-urlencoded
     */
    public toFormRequest(): ExecutorType {
        this.instance.defaults.headers['Content-Type'] = HttpContentType["application/x-www-form-urlencoded"]
        return this;
    }

    /**
     * 将执行器请求方式设置为：multipart/form-data
     */
    public toFormDataRequest(): ExecutorType {
        this.instance.defaults.headers['Content-Type'] = HttpContentType["multipart/form-data"]
        return this;
    }

    public setDefaultResponse(defaultResponse: Response = new DefaultResponse()): ExecutorType {
        this.defaultResponse = defaultResponse;
        return this;
    }

    public mergeDefaultResponse(defaultResponse: Response = new DefaultResponse()): ExecutorType {
        this.defaultResponse = merge(this.defaultResponse, defaultResponse, {});
        return this;
    }

    public setDefaultRequestData(defaultRequestData: RequestData = {}): ExecutorType {
        this.defaultRequestData = defaultRequestData;
        return this;
    }

    public mergeDefaultRequestData(defaultRequestData: RequestData = {}): ExecutorType {
        merge(this.defaultRequestData, defaultRequestData);
        return this;
    }

    public setDefaultResultParams(defaultResultParams: RequestParams = {}): ExecutorType {
        this.defaultRequestParams = defaultResultParams;
        return this;
    }

    public mergeDefaultResultParams(defaultResultParams: RequestParams = {}): ExecutorType {
        merge(this.defaultRequestParams, defaultResultParams);
        return this;
    }

    public handleThenResponse(resolve: (value: any) => void, resp: AxiosResponse<any>) {
        this.response = merge({}, this.defaultResponse, resp.data);
        resolve(resp.data)
    }

    public handleCatchResponse(reject: (reason?: any) => void, e: any) {
        console.error('远程请求发生异常：', e)
        if (e.response) {
            this.response = merge({}, this.defaultResponse, e.response.data);
            reject(e.response.data)
        } else {
            let result = {success: false, result: '远程请求发生异常！'};
            this.response = merge({}, this.defaultResponse, result);
            reject(result)
        }
    }
}