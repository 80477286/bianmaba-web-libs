export type RequestData = (QueryRequestData | PageableQueryRequestData | any);
export type RequestParams = any;
export declare class QueryRequestData {
    query: string | null;
    order: Order | null;
    condition: Condition | null;
    sorts: Array<Order> | null;
    queryProperties: Array<string> | null;
    idProperty: string | null;
    excludeIds: Array<string> | null;
    joins: Array<Join>;
    fetches: Array<Join>;
    setQuery(query: string): this;
    setOrder(order: Order): this;
    setCondition(condition: Condition): this;
    setSorts(sorts: Array<Order>): this;
    setQueryProperties(queryProperties: Array<string>): this;
    setIdProperty(idProperty: string): this;
    setExcludeIds(ids: Array<string>): this;
    setFetches(fetches: Array<Join>): this;
    setJoins(joins: Array<Join>): this;
    addFetch(property: string | Join, joinType?: string, on?: Array<Condition>): number;
    addJoin(property: string | Join, joinType: string, on: Array<Condition>): number;
}
export declare class PageableQueryRequestData extends QueryRequestData {
    constructor(page?: number, size?: number, pageOffset?: number);
    size: number;
    page: number;
    pageOffset: number;
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
    property: string | null;
    direction: OrderDirection;
    constructor(property: string, direction: OrderDirection);
    of(property: string, direction?: OrderDirection): Order;
}
export declare class Condition {
    property: string | null;
    value: number | boolean | string | null | '' | Array<number | boolean | string>;
    opt: ConditionOpt;
    and: Array<Condition>;
    or: Array<Condition>;
    constructor(property?: string | null, value?: number | boolean | string | null | '' | Array<number | boolean | string>, opt?: ConditionOpt | null);
    addAnd(condition: Condition): void;
    addOr(condition: Condition): void;
}
export type ConditionOpt = EConditionOpt | 'equals' | 'eq' | 'ge' | 'gt' | 'lt' | 'le' | 'ne' | 'notlike' | 'like' | 'like:' | ':like' | ':like:' | 'lk' | 'lk:' | ':lk' | ':lk:' | 'between' | 'btw' | 'isnull' | 'isnotnull' | 'isempty' | 'isnotempty' | 'in' | 'notin';
export type OrderDirection = EOrderDirection | 'asc' | 'desc';
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
