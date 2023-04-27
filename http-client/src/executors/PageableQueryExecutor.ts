"use strict";
import {AxiosInstance} from "axios";
import QueryExecutor from "./QueryExecutor";
import {DefaultPageableQueryResponse, Response} from "./response/Response";

export default class PageableQueryExecutor extends QueryExecutor {
    constructor(instance: AxiosInstance, url?: string) {
        super(instance, url);
        this.setDefaultResponse(new DefaultPageableQueryResponse())
    }

    public pageSizeChange(size: number): Promise<Response> {
        this.data.size = size;
        return this.execute();
    }

    public pageChange(page: number): Promise<Response> {
        this.data.page = page;
        return this.execute();
    }
}