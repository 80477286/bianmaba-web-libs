import { AxiosInstance, CreateAxiosDefaults } from "axios";
export default class AbstractHttpClient {
    constructor(options?: CreateAxiosDefaults);
    createAxiosInstance(options: CreateAxiosDefaults): AxiosInstance;
}
