import {AxiosResponse, InternalAxiosRequestConfig, Method} from "axios";

export default interface GlobalOptions {
    baseUrl?: string,
    method?: Method,
    headers: any,
    xRequestedWith?: 'XMLHttpRequest',
    requestSuccessHandler?: ((value: InternalAxiosRequestConfig<any>) => (InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>)) | null | undefined
    requestFailHandler?: ((error: any) => any) | null,
    responseSuccessHandler?: ((value: AxiosResponse<any, any>) => (AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>)) | null | undefined,
    responseFailHandler?: ((error: any) => any) | null
}