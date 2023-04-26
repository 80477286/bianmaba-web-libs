"use strict";
import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {merge} from "@bianmaba/utils";
import {HttpContentType, RequestData, RequestParams} from "./request/Request";
import {DefaultResponse, Response} from "./response/Response";
import GetExecutor from "./GetExecutor";
import PostExecutor from "./PostExecutor";

export type ExecutorType = (Executor | GetExecutor | PostExecutor | any)

export default class Executor {
    public instance: AxiosInstance;
    public url: string = '';
    public loading: boolean = false;
    public response: Response = new DefaultResponse();
    public data: RequestData = {}
    public params: RequestParams = {}

    constructor(instance: AxiosInstance, url?: string) {
        this.instance = instance;
        this.url = url || this.url;
    }

    public execute(options: AxiosRequestConfig<any> | any = {}): Promise<Response> {
        this.loading = true;
        this.data = merge(this.data || {}, options.data || {});
        this.params = merge(this.params || {}, options.params || {});
        options.url = options.url ? options.url : this.url;
        return new Promise((resolve, reject) => {
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
    public toAjaxRequest(): ExecutorType {
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

    public setDefaultResponse(defaultResponse: any = {}): ExecutorType {
        this.response = merge(this.response, defaultResponse);
        return this;
    }

    public setDefaultRequestData(defaultRequestData: any = {}): ExecutorType {
        this.data = merge(this.data, defaultRequestData);
        return this;
    }

    public setDefaultResultParams(defaultResultParams: any = {}): ExecutorType {
        this.params = merge(this.params, defaultResultParams);
        return this;
    }

    public handleThenResponse(resolve: (value: Response) => void, resp: AxiosResponse<any>) {
        this.response = resp.data;
        resolve(resp.data)
    }

    public handleCatchResponse(reject: (reason?: any) => void, e: any) {
        console.error('远程请求发生异常：', e)
        if (e.response) {
            this.response = e.response.data;
            reject(e.response.data)
        } else {
            let result = {success: false, result: '远程请求发生异常！', data: null};
            this.response = result;
            reject(result)
        }
    }
}