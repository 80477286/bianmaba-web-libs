"use strict";
import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {ExecutorType, Result} from "../interface/types";
import {merge} from "@bianmaba/utils";

export default class Executor {
    public instance: AxiosInstance;
    public url: string = '';
    public loading: boolean = false;
    public response: Result = {success: false};
    public data: any = {}
    public params: any = {}

    constructor(instance: AxiosInstance, url?: string) {
        this.instance = instance;
        this.url = url || '';
    }

    public execute(options: AxiosRequestConfig<any> = {}): Promise<Result> {
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

    public handleThenResponse(resolve: (value: any) => void, resp: AxiosResponse<any> | any) {
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