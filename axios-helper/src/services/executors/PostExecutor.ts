import Executor from "./Executor";
import {Axios, AxiosRequestConfig} from "axios";
import {merge} from "@bianmaba/utils/src/utils";

export default class PostExecutor extends Executor {
    constructor(instance: Axios, url?: string) {
        super(instance, url);
    }

    // @ts-ignore
    public execute(data: any = {}, params: any = {}, options: AxiosRequestConfig<any> = {}): Promise<Result> {
        this.loading = true;
        this.data = merge(this.data || {}, options.data || {}, data || {});
        this.params = merge(this.params || {}, options.params || {}, params || {});
        this.setDefaultResponse({total: 0, page: 1, size: 10})
        options.params = this.params;
        return new Promise((resolve, reject) => {
            this.instance.post(options.url || this.url, this.data, options).then((resp) => {
                this.handleThenResponse(resolve, resp);
            }).catch(e => {
                this.handleCatchResponse(reject, e);
            }).finally(() => {
                this.loading = false;
            });
        })
    }
}