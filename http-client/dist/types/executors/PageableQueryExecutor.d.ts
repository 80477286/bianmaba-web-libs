import { AxiosInstance, AxiosRequestConfig } from "axios";
import QueryExecutor from "./QueryExecutor";
export default class PageableQueryExecutor extends QueryExecutor {
    constructor(instance: AxiosInstance, url?: string, options?: AxiosRequestConfig);
}
