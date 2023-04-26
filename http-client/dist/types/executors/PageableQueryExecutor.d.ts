import { AxiosInstance } from "axios";
import QueryExecutor from "./QueryExecutor";
export default class PageableQueryExecutor extends QueryExecutor {
    constructor(instance: AxiosInstance, url?: string);
}
