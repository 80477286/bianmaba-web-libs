import Executor from "./Executor";
import { AxiosInstance, AxiosRequestConfig } from "axios";
import { RequestData, RequestParams } from "./request/Request";
import { Response } from "./response/Response";
export default class PostExecutor extends Executor {
    constructor(instance: AxiosInstance, url?: string);
    execute(data?: RequestData | null, params?: RequestParams, options?: AxiosRequestConfig<any> | any): Promise<Response>;
}
