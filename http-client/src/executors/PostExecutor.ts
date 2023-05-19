"use strict";
import Executor from "./Executor";
import {AxiosInstance, AxiosRequestConfig} from "axios";
import {isArray, isObject, merge} from "@bianmaba/utils";
import {RequestData, RequestParams} from "./request/Request";
import {Response} from "./response/Response";
import {mergeDataOrParams} from "../utils/utils";

export default class PostExecutor extends Executor {
    constructor(instance: AxiosInstance, url?: string) {
        super(instance, url);
    }

    public execute(data: RequestData | null = {}, params: RequestParams = {}, options: AxiosRequestConfig<any> | any = {}): Promise<Response> {

        this.loading = true;
        data = merge(this.data, options.data, data);
        options.params = mergeDataOrParams(this.params, mergeDataOrParams(options.params, params));
        this.initOptions(options)
        this.setDefaultResponse(this.defaultResponse)
        return new Promise((resolve, reject) => {
            this.instance.post(options.url || this.url, data, options).then((resp) => {
                try {
                    this.handleThenResponse(resolve, resp);
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