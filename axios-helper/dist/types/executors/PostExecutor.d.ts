import Executor from "./Executor";
import { AxiosInstance, AxiosRequestConfig } from "axios";
import { Result } from '../interface/types';
export default class PostExecutor extends Executor {
    constructor(instance: AxiosInstance, url?: string);
    execute(data?: any, params?: any, options?: AxiosRequestConfig<any>): Promise<Result>;
}
