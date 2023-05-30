"use strict";
import {AxiosInstance, AxiosRequestConfig} from "axios";
import PostExecutor from "./PostExecutor";
import {DefaultQueryResponse, DefaultResponse} from "./response/Response";
import {DefaultQueryRequestData} from "./request/Request";

export default class QueryExecutor extends PostExecutor {
    constructor(instance: AxiosInstance, url?: string, options: AxiosRequestConfig = {}) {
        super(instance, url, options);
        this.setDefaultResponse(new DefaultQueryResponse())
        this.setDefaultRequestData(new DefaultQueryRequestData())
    }
}