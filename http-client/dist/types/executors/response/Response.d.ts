export type Response = (IResponse | IPageableQueryResponse | any);
export interface IResponse {
    success: boolean;
    result?: string | null;
    data?: Array<any> | any;
    errors?: Array<any>;
    messages?: Array<any>;
    extendedData?: any;
    status?: any;
    exception?: any;
    progressEvent?: {
        total?: number;
        loaded?: number;
        progress: number;
        uploaded?: number;
    } | any;
}
export interface IPageableQueryResponse extends IResponse {
    page?: number;
    size?: number;
    total?: number;
    pageOffset?: number;
}
export declare class DefaultResponse implements IResponse {
    success: boolean;
    data: null;
    errors: never[];
    exception: null;
    extendedData: null;
    messages: never[];
    result: null;
    status: null;
    progressEvent: {
        progress: number;
    };
}
export declare class DefaultPageableQueryResponse extends DefaultResponse implements IPageableQueryResponse {
    status: null;
    total: number;
    progressEvent: {
        progress: number;
    };
}
