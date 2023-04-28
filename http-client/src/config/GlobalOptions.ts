import {AxiosResponse, InternalAxiosRequestConfig, Method} from "axios";
import {HttpContentType, HttpMethod} from "../executors/request/Request";

export type GlobalOptions = IGlobalOptions | any;

export interface IGlobalOptions {
    baseUrl?: string
    method?: Method
    headers: any
    xRequestedWith?: string
    requestSuccessHandler?: ((value: InternalAxiosRequestConfig<any>) => (InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>)) | null | undefined
    requestFailHandler?: ((error: any) => any) | null
    responseSuccessHandler?: ((value: AxiosResponse<any, any>) => (AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>)) | null | undefined
    responseFailHandler?: ((error: any) => any) | null
}

class DefaultGlobalOptions implements IGlobalOptions {
    method = HttpMethod.POST
    headers = {'Content-Type': HttpContentType["application/json"]}
    xRequestedWith = 'XMLHttpRequest'
}

const defaultGlobalOptions = new DefaultGlobalOptions();

export default defaultGlobalOptions