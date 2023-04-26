import { AxiosResponse, InternalAxiosRequestConfig, Method } from "axios";
import { HttpContentType, HttpMethod } from "../executors/request/Request";
export type GlobalOptions = IGlobalOptions | any;
export interface IGlobalOptions {
    baseUrl?: string;
    method?: Method;
    headers: any;
    xRequestedWith?: string;
    requestSuccessHandler?: ((value: InternalAxiosRequestConfig<any>) => (InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>)) | null | undefined;
    requestFailHandler?: ((error: any) => any) | null;
    responseSuccessHandler?: ((value: AxiosResponse<any, any>) => (AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>)) | null | undefined;
    responseFailHandler?: ((error: any) => any) | null;
}
declare class DefaultGlobalOptions implements IGlobalOptions {
    method: HttpMethod;
    headers: {
        'Content-Type': HttpContentType;
    };
    xRequestedWith: string;
}
declare const defaultGlobalOptions: DefaultGlobalOptions;
export default defaultGlobalOptions;
