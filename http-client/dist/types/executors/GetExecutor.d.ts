import Executor from "./Executor";
import { AxiosInstance, AxiosRequestConfig } from "axios";
import { Response } from "./response/Response";
export default class GetExecutor extends Executor {
    constructor(instance: AxiosInstance, url?: string);
    execute(params?: any, options?: AxiosRequestConfig<any> | any): Promise<Response>;
}
