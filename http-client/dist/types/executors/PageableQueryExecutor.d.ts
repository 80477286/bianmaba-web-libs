import { AxiosInstance } from "axios";
import QueryExecutor from "./QueryExecutor";
import { Response } from "./response/Response";
export default class PageableQueryExecutor extends QueryExecutor {
    constructor(instance: AxiosInstance, url?: string);
    pageSizeChange(size: number): Promise<Response>;
    pageChange(page: number): Promise<Response>;
}
