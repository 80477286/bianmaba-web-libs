export type RequestData = (DefaultQueryRequestData | DefaultPageableQueryRequestData | any);
export type RequestParams = any;
export interface IQueryRequestData {
    query?: string | null;
    idProperty?: string | null;
    order?: Order;
    condition?: Condition;
    sorts?: Array<Order>;
    queryProperties?: Array<string>;
    excludeIds?: Array<string>;
    joins?: Array<Join> | Array<any>;
    fetches?: Array<Join> | Array<any>;
}
export interface IPageableQueryRequestData extends IQueryRequestData {
    size: number;
    page: number;
    pageOffset?: number;
}
export declare class DefaultQueryRequestData implements IQueryRequestData {
    order: Order;
    queryProperties: string[];
}
export declare class DefaultPageableQueryRequestData extends DefaultQueryRequestData implements IPageableQueryRequestData {
    size: number;
    page: number;
    pageOffset: number;
    constructor(page?: number, size?: number, pageOffset?: number);
    setSize(size: number): void;
    setPage(page: number): void;
    setPageOffset(pageOffset: number): void;
}
export declare class Join {
    constructor(property?: string, joinType?: string, on?: Array<Condition>);
    property: string | null;
    joinType: string | null;
    on: Array<Condition> | null;
    of(property: string, joinType: string, on: Array<Condition>): Join;
}
export declare class Order {
    prop?: string | null;
    order?: OrderDirection;
    constructor(prop?: string, order?: OrderDirection);
    of(prop: string, order?: OrderDirection): Order;
}
export declare class Condition {
    property?: string | null;
    value?: number | boolean | string | null | '' | Array<number | boolean | string>;
    opt: ConditionOpt;
    and: Array<Condition>;
    or: Array<Condition>;
    constructor(property?: string | null, value?: number | boolean | string | null | '' | Array<number | boolean | string>, opt?: ConditionOpt | null);
    addAnd(condition: Condition): void;
    addOr(condition: Condition): void;
}
export type ConditionOpt = EConditionOpt | 'equals' | 'eq' | 'ge' | 'gt' | 'lt' | 'le' | 'ne' | 'notlike' | 'like' | 'like:' | ':like' | ':like:' | 'lk' | 'lk:' | ':lk' | ':lk:' | 'between' | 'btw' | 'isnull' | 'isnotnull' | 'isempty' | 'isnotempty' | 'in' | 'notin';
export type OrderDirection = EOrderDirection | 'asc' | 'desc' | 'descending' | 'ascending';
export declare enum EOrderDirection {
    Asc = "asc",
    Desc = "desc"
}
export declare enum EConditionOpt {
    equals = "equals",
    eq = "eq",
    ge = "ge",
    gt = "gt",
    lt = "lt",
    le = "le",
    ne = "ne",
    notlike = "notlike",
    like = "like",
    'like:' = "like:",
    ':like' = ":like",
    ':like:' = ":like:",
    'lk' = "like",
    'lk:' = "like:",
    ':lk' = ":like",
    ':lk:' = ":like:",
    between = "between",
    btw = "btw",
    isnull = "isnull",
    isnotnull = "isnotnull",
    isempty = "isempty",
    isnotempty = "isnotempty",
    in = "in",
    notin = "notin"
}
export declare enum HttpContentType {
    'application/atom+xml' = "application/atom+xml",
    'application/json' = "application/json",
    'application/x-www-form-urlencoded' = "application/x-www-form-urlencoded",
    'application/xml' = "application/xml",
    'multipart/form-data' = "multipart/form-data",
    'text/html' = "text/html",
    'text/plain' = "text/plain"
}
export declare enum HttpMethod {
    POST = "POST",
    GET = "GET",
    DELETE = "DELETE",
    HEAD = "HEAD",
    OPTIONS = "OPTIONS",
    PUT = "PUT",
    PATCH = "PATCH",
    PURGE = "PURGE",
    LINK = "LINK",
    UNLINK = "UNLINK"
}
