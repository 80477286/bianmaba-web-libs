import Executor from "./Executor";
import { AxiosInstance, AxiosRequestConfig } from "axios";
import { PageableRequestData, RequestData } from "./request/Request";
import { Result } from "../interface/types";
export default class PostExecutor extends Executor {
    constructor(instance: AxiosInstance, url?: string);
    execute(data?: RequestData | PageableRequestData | any | null, params?: any, options?: AxiosRequestConfig<any> | any): Promise<Result>;
}
