"use strict";
import Executor from "./Executor";
import {AxiosInstance, AxiosRequestConfig} from "axios";
import {merge} from "@bianmaba/utils";

export default class PostExecutor extends Executor {
    constructor(instance: AxiosInstance, url?: string) {
        super(instance, url);
    }

    // @ts-ignore
    public execute(data: any = {}, params: any = {}, options: AxiosRequestConfig<any> | any = {}): Promise<Result> {
        this.loading = true;
        this.data = merge(this.data || {}, options.data || {}, data || {});
        this.params = merge(this.params || {}, options.params || {}, params || {});
        this.setDefaultResponse({total: 0, page: 1, size: 10})
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