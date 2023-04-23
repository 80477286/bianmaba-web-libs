import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ExecutorType, Result } from "../interface/types";
export default class Executor {
    instance: AxiosInstance;
    url: string;
    loading: boolean;
    response: Result;
    data: any;
    params: any;
    constructor(instance: AxiosInstance, url?: string);
    execute(options?: AxiosRequestConfig<any> | any): Promise<Result>;
    setDefaultResponse(defaultResponse?: any): ExecutorType;
    setDefaultRequestData(defaultRequestData?: any): ExecutorType;
    setDefaultResultParams(defaultResultParams?: any): ExecutorType;
    handleThenResponse(resolve: (value: any) => void, resp: AxiosResponse<any> | any): void;
    handleCatchResponse(reject: (reason?: any) => void, e: any): void;
}
