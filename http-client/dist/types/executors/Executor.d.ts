import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { RequestData, RequestParams } from "./request/Request";
import { Response } from "./response/Response";
import GetExecutor from "./GetExecutor";
import PostExecutor from "./PostExecutor";
export type ExecutorType = (Executor | GetExecutor | PostExecutor | any);
export default class Executor {
    controller: AbortController;
    instance: AxiosInstance;
    options: AxiosRequestConfig;
    url: string;
    loading: boolean;
    data: RequestData;
    params: RequestParams;
    response: Response;
    defaultResponse: Response;
    defaultRequestParams: Response;
    defaultRequestData: Response;
    constructor(instance: AxiosInstance, url?: string, options?: AxiosRequestConfig);
    abort(): void;
    initOptions(options?: AxiosRequestConfig<any> | any): void;
    execute(options?: AxiosRequestConfig<any> | any): Promise<Response>;
    /**
     * 将执行器请求方式设置为：application/json
     */
    toJsonRequest(): ExecutorType;
    /**
     * 将执行器请求方式设置为：application/x-www-form-urlencoded
     */
    toFormRequest(): ExecutorType;
    /**
     * 将执行器请求方式设置为：multipart/form-data
     */
    toFormDataRequest(): ExecutorType;
    setDefaultResponse(defaultResponse?: Response): ExecutorType;
    mergeDefaultResponse(defaultResponse?: Response): ExecutorType;
    setDefaultRequestData(defaultRequestData?: RequestData): ExecutorType;
    mergeDefaultRequestData(defaultRequestData?: RequestData): ExecutorType;
    setDefaultResultParams(defaultResultParams?: RequestParams): ExecutorType;
    handleThenResponse(resolve: (value: any) => void, resp: AxiosResponse<any>): void;
    handleCatchResponse(reject: (reason?: any) => void, e: any): void;
}
