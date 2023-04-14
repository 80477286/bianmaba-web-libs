import Executor from "./Executor";
import { AxiosInstance, AxiosRequestConfig } from "axios";
import { Result } from "../interface/types";
export default class GetExecutor extends Executor {
    constructor(instance: AxiosInstance, url?: string);
    execute(params?: any, options?: AxiosRequestConfig<any>): Promise<Result>;
}
