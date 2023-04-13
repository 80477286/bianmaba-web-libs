import Executor from "./Executor";
import {AxiosRequestConfig} from "axios";
import {Axios} from "axios";
import {merge} from "../../libs/utils";

export default class GetExecutor extends Executor {
    constructor(instance: Axios, url?: string) {
        super(instance, url);
    }

    // @ts-ignore
    public execute(params: any = {}, options: AxiosRequestConfig<any> = {}): Promise<Result> {
        this.loading = true;
        this.params = merge(this.params || {}, options.params || {}, params || {});
        options.params = this.params;
        return new Promise((resolve, reject) => {
            this.instance.get(options.url || this.url, options).then((resp) => {
                this.handleThenResponse(resolve, resp);
            }).catch(e => {
                this.handleCatchResponse(reject, e);
            }).finally(() => {
                this.loading = false;
            });
        })
    }
}

