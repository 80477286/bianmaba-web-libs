import { AxiosInstance, CreateAxiosDefaults } from "axios";
export default class AbstractHttpClient {
    defaultAxiosInstance: AxiosInstance;
    constructor(options?: CreateAxiosDefaults | any);
}
