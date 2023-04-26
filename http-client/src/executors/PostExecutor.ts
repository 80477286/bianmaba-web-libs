"use strict";
import Executor from "./Executor";
import {AxiosInstance, AxiosRequestConfig} from "axios";
import {merge} from "@bianmaba/utils";
import {RequestData, RequestParams} from "./request/Request";
import {Response} from "./response/Response";

export default class PostExecutor extends Executor {
    constructor(instance: AxiosInstance, url?: string) {
        super(instance, url);
    }

    public execute(data: RequestData | null = {}, params: RequestParams = {}, options: AxiosRequestConfig<any> | any = {}): Promise<Response> {
        this.loading = true;
        this.data = merge(this.data || {}, options.data || {}, data || {});
        this.params = merge(this.params || {}, options.params || {}, params || {});
        options.params = this.params;
        return new Promise((resolve, reject) => {
            this.instance.post(options.url || this.url, this.data, options).then((resp) => {
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