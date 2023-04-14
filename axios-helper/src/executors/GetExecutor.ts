"use strict";
import Executor from "./Executor";
import {AxiosInstance, AxiosRequestConfig} from "axios";
import {Result} from "../interface/types";
import {merge} from "@bianmaba/utils";

export default class GetExecutor extends Executor {
    constructor(instance: AxiosInstance, url?: string) {
        super(instance, url);
    }

    // @ts-ignore
    public execute(params: any = {}, options: AxiosRequestConfig<any> | any = {}): Promise<Result> {
        this.loading = true;
        this.params = merge(this.params || {}, options.params || {}, params || {});
        options.params = this.params;
        return new Promise((resolve, reject) => {
            this.instance.get(options.url || this.url, options).then((resp) => {
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
            });
        })
    }
}

