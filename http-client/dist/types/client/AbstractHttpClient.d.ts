import { AxiosInstance, CreateAxiosDefaults } from "axios";
export default class AbstractHttpClient {
    constructor(options?: any);
    private defaultRequestSuccessHandler;
    private defaultRequestFailHandler;
    private defaultResponseSuccessHandler;
    private defaultResponseFailHandler;
    createAxiosInstance(options: CreateAxiosDefaults): AxiosInstance;
}
