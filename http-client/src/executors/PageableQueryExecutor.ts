"use strict";
import {AxiosInstance, AxiosRequestConfig} from "axios";
import QueryExecutor from "./QueryExecutor";
import {DefaultPageableQueryResponse, Response} from "./response/Response";
import {AxiosResponse} from "axios/index";
import {merge} from "@bianmaba/utils";
import {DefaultPageableQueryRequestData} from "./request/Request";

export default class PageableQueryExecutor extends QueryExecutor {
    constructor(instance: AxiosInstance, url?: string, options: AxiosRequestConfig = {}) {
        super(instance, url, options);
        this.setDefaultResponse(new DefaultPageableQueryResponse())
        this.setDefaultRequestData(new DefaultPageableQueryRequestData())
    }
}