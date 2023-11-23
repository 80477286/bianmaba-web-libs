import { AxiosInstance, AxiosStatic, CreateAxiosDefaults } from "axios";
export default class AbstractHttpClient {
    defaultAxiosInstance: AxiosInstance;
    constructor(options?: CreateAxiosDefaults | any);
    /**
     * 初始化默认能数
     * @param options
     */
    static defaults(setup: (axios: AxiosStatic) => any): void;
}
