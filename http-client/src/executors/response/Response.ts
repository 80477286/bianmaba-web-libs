export type Response = (IResponse | IPageableQueryResponse | any);

export interface IResponse {
    success: boolean
    result?: string | null
    data?: Array<any> | any | null
    errors?: Array<any>
    messages?: Array<any>
    extendedData?: any
    status?: any
    exception?: any
    progressEvent?: { total?: number, loaded?: number, progress: number, uploaded?: number } | any
}

export interface IPageableQueryResponse extends IResponse {
    page?: number;
    size?: number;
    total?: number;
    pageOffset?: number;
}

export class DefaultResponse implements IResponse {
    success: boolean = false;
    data = null;
    errors = [];
    exception = null;
    extendedData = null;
    messages = [];
    result = null;
    status = null;
    progressEvent = {progress: 0};
}

export class DefaultQueryResponse extends DefaultResponse {
    data = [] as any;
}


export class DefaultPageableQueryResponse extends DefaultQueryResponse implements IPageableQueryResponse {
    status = null;
    total = 0;
}
