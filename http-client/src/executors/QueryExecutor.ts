"use strict";
import {AxiosInstance} from "axios";
import PostExecutor from "./PostExecutor";
import {DefaultResponse} from "./response/Response";
import {DefaultQueryRequestData} from "./request/Request";

export default class QueryExecutor extends PostExecutor {
    constructor(instance: AxiosInstance, url?: string) {
        super(instance, url);
        this.setDefaultResponse(new DefaultQueryRequestData())
        this.setDefaultRequestData(new DefaultQueryRequestData())
    }
}