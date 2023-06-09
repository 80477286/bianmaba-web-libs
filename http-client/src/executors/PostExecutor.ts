"use strict";
import Executor from "./Executor";
import {AxiosInstance, AxiosRequestConfig} from "axios";
import {isArray, isObject, merge} from "@bianmaba/utils";
import {DefaultQueryRequestData, RequestData, RequestParams} from "./request/Request";
import {DefaultPageableQueryResponse, Response} from "./response/Response";
import {mergeDataOrParams} from "../utils/utils";

export default class PostExecutor extends Executor {
    constructor(instance: AxiosInstance, url?: string, options: AxiosRequestConfig = {}) {
        super(instance, url, options);
    }

    public execute(data: RequestData | null = {}, params: RequestParams = {}, options: AxiosRequestConfig<any> | any = {}): Promise<Response> {
        this.loading = true;
        options = merge({},this.options || {}, options || {})
        let rd = mergeDataOrParams(this.defaultRequestData, this.data, options.data, data);
        options.params = mergeDataOrParams(this.defaultRequestParams, this.params, options.params, params);
        this.initOptions(options)
        this.response = JSON.parse(JSON.stringify(this.defaultResponse))
        return new Promise((resolve, reject) => {
            this.instance.post(options.url || this.url, rd, options).then((resp) => {
                try {
                    this.handleThenResponse(resolve, resp);
                    resolve(resp.data)
                } finally {
                    this.loading = false;
                }
            }).catch(e => {
                try {
                    this.handleCatchResponse(reject, e);
                } finally {
                    this.loading = false;
                }
            })
        })
    }
}