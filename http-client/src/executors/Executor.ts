"use strict";
import {AxiosInstance, AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults} from "axios";
import {merge} from "@bianmaba/utils";
import {HttpContentType, RequestData, RequestParams} from "./request/Request";
import {DefaultResponse, Response} from "./response/Response";
import GetExecutor from "./GetExecutor";
import PostExecutor from "./PostExecutor";
import {mergeDataOrParams} from "../utils/utils";

export type ExecutorType = (Executor | GetExecutor | PostExecutor | any)

export default class Executor {
    public controller: AbortController = new AbortController()
    public instance: AxiosInstance;
    public options: AxiosRequestConfig = {};
    public url: string = '';
    public loading: boolean = false;
    public data: RequestData = {}
    public params: RequestParams = {}
    public response: Response = new DefaultResponse();
    public defaultResponse: Response = new DefaultResponse();
    public defaultRequestParams: Response = {} as RequestData;
    public defaultRequestData: Response = {} as RequestData;

    constructor(instance: AxiosInstance, url?: string, options: AxiosRequestConfig = {}) {
        this.instance = instance;
        this.url = url || this.url;
        this.options = options;
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
            options = merge({}, this.options || {}, options || {})
            options.data = mergeDataOrParams(this.defaultRequestData, this.data, options.data);
            options.params = options.params = mergeDataOrParams(this.defaultRequestParams, this.params, options.params);
            options.url = options.url ? options.url : this.url;
            this.initOptions(options)
            this.response = JSON.parse(JSON.stringify(this.defaultResponse))
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
        merge(this.options, {headers: {'Content-Type': HttpContentType["application/json"]}})
        return this;
    }

    /**
     * 将执行器请求方式设置为：application/x-www-form-urlencoded
     */
    public toFormRequest(): ExecutorType {
        merge(this.options, {headers: {'Content-Type': HttpContentType["application/x-www-form-urlencoded"]}})
        return this;
    }

    /**
     * 将执行器请求方式设置为：multipart/form-data
     */
    public toFormDataRequest(): ExecutorType {
        merge(this.options, {headers: {'Content-Type': HttpContentType["multipart/form-data"]}})
        return this;
    }

    public setDefaultResponse(defaultResponse: Response = {}): ExecutorType {
        this.defaultResponse = defaultResponse;
        this.response = JSON.parse(JSON.stringify(this.defaultResponse));
        return this;
    }

    public mergeDefaultResponse(defaultResponse: Response = {}): ExecutorType {
        merge(this.defaultResponse, defaultResponse || {}, {});
        this.response = JSON.parse(JSON.stringify(this.defaultResponse));
        return this;
    }

    public setDefaultRequestData(defaultRequestData: RequestData = {}): ExecutorType {
        this.defaultRequestData = defaultRequestData;
        this.data = JSON.parse(JSON.stringify(this.defaultRequestData));
        return this;
    }

    public mergeDefaultRequestData(defaultRequestData: RequestData = {}): ExecutorType {
        merge(this.defaultRequestData, defaultRequestData || {});
        this.data = JSON.parse(JSON.stringify(this.defaultRequestData));
        return this;
    }

    public setDefaultResultParams(defaultResultParams: RequestParams = {}): ExecutorType {
        this.defaultRequestParams = defaultResultParams;
        this.params = JSON.parse(JSON.stringify(this.defaultRequestParams));
        return this;
    }

    public handleThenResponse(resolve: (value: any) => void, resp: AxiosResponse<any>) {
        this.response = merge({}, this.defaultResponse, resp.data);
        if (this.response.total != undefined && this.response.total != null) {
            this.data.total = this.response.total;
        }
        if (this.response.page != undefined && this.response.page != null) {
            this.data.page = this.response?.page - (this.data.pageOffset || 0);
        }
        if (this.response.size != undefined && this.response.size != null) {
            this.data.size = this.response.size;
        }
        resolve(this.response)
    }


    public handleCatchResponse(reject: (reason?: any) => void, e: any) {
        console.error('远程请求发生异常：', e)
        if (e.response) {
            this.response = merge({}, this.defaultResponse, e.response.data);
            reject(this.response)
        } else {
            let result = {success: false, result: '远程请求发生异常！'};
            this.response = merge({}, this.defaultResponse, result);
            reject(this.response)
        }
    }
}