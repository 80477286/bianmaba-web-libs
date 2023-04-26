import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ExecutorType, Result } from "../interface/types";
import { PageableRequestData, RequestData } from "./request/Request";
export default class Executor {
    instance: AxiosInstance;
    url: string;
    loading: boolean;
    response: Result;
    data: RequestData | PageableRequestData | any | null;
    params: any | null;
    constructor(instance: AxiosInstance, url?: string);
    execute(options?: AxiosRequestConfig<any> | any): Promise<Result>;
    /**
     * 将执行器请求方式设置为：application/json
     */
    toAjaxRequest(): ExecutorType;
    /**
     * 将执行器请求方式设置为：application/x-www-form-urlencoded
     */
    toFormRequest(): ExecutorType;
    /**
     * 将执行器请求方式设置为：multipart/form-data
     */
    toFormDataRequest(): ExecutorType;
    setDefaultResponse(defaultResponse?: any): ExecutorType;
    setDefaultRequestData(defaultRequestData?: any): ExecutorType;
    setDefaultResultParams(defaultResultParams?: any): ExecutorType;
    handleThenResponse(resolve: (value: any) => void, resp: AxiosResponse<any> | any): void;
    handleCatchResponse(reject: (reason?: any) => void, e: any): void;
}
