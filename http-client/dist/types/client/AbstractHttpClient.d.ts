import { AxiosInstance, CreateAxiosDefaults } from "axios";
import { GlobalOptions } from "../config/GlobalOptions";
export default class AbstractHttpClient {
    static default: GlobalOptions;
    constructor(options?: GlobalOptions);
    private defaultRequestSuccessHandler;
    private defaultRequestFailHandler;
    private defaultResponseSuccessHandler;
    private defaultResponseFailHandler;
    createAxiosInstance(options: CreateAxiosDefaults): AxiosInstance;
}
