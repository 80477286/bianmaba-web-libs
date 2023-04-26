import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { RequestData, RequestParams } from "./request/Request";
import { Response } from "./response/Response";
import GetExecutor from "./GetExecutor";
import PostExecutor from "./PostExecutor";
export type ExecutorType = (Executor | GetExecutor | PostExecutor | any);
export default class Executor {
    instance: AxiosInstance;
    url: string;
    loading: boolean;
    response: Response;
    data: RequestData;
    params: RequestParams;
    constructor(instance: AxiosInstance, url?: string);
    execute(options?: AxiosRequestConfig<any> | any): Promise<Response>;
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
    handleThenResponse(resolve: (value: Response) => void, resp: AxiosResponse<any>): void;
    handleCatchResponse(reject: (reason?: any) => void, e: any): void;
}
