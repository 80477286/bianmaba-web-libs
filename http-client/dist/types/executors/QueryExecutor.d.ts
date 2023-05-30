import { AxiosInstance, AxiosRequestConfig } from "axios";
import PostExecutor from "./PostExecutor";
export default class QueryExecutor extends PostExecutor {
    constructor(instance: AxiosInstance, url?: string, options?: AxiosRequestConfig);
}
