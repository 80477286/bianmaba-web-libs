import Executor from "./Executor";
import { AxiosInstance, AxiosRequestConfig } from "axios";
import { Response } from "./response/Response";
export default class GetExecutor extends Executor {
    constructor(instance: AxiosInstance, url?: string, options?: AxiosRequestConfig);
    execute(params?: any, options?: AxiosRequestConfig<any> | any): Promise<Response>;
}
