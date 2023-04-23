import { AxiosInstance, CreateAxiosDefaults } from "axios";
import { DefaultGlobalOptions } from "./interface/types";
export default class AbstractAxiosHelper {
    protected globalOptions: DefaultGlobalOptions;
    constructor(options?: DefaultGlobalOptions);
    private defaultRequestSuccessHandler;
    private defaultRequestFailHandler;
    private defaultResponseSuccessHandler;
    private defaultResponseFailHandler;
    createAxiosInstance(options: CreateAxiosDefaults): AxiosInstance;
}
