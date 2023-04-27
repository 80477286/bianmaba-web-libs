"use strict";
import {AxiosInstance} from "axios";
import QueryExecutor from "./QueryExecutor";
import {DefaultPageableQueryResponse, Response} from "./response/Response";

export default class PageableQueryExecutor extends QueryExecutor {
    constructor(instance: AxiosInstance, url?: string) {
        super(instance, url);
        this.setDefaultResponse(new DefaultPageableQueryResponse())
    }
}