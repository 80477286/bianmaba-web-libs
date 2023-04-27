export type RequestData = (DefaultQueryRequestData | DefaultPageableQueryRequestData | any);
export type RequestParams = any;

export interface IQueryRequestData {
    query?: string | null
    idProperty?: string | null
    order?: Order
    condition?: Condition
    sorts?: Array<Order>
    queryProperties?: Array<string>
    excludeIds?: Array<string>
    joins?: Array<Join> | Array<any>
    fetches?: Array<Join> | Array<any>
}

export interface IPageableQueryRequestData extends IQueryRequestData {
    size: number
    page: number
    pageOffset?: number
}

export class DefaultQueryRequestData implements IQueryRequestData {
    order = new Order("id", 'asc')
    queryProperties = ['id']
}

export class DefaultPageableQueryRequestData extends DefaultQueryRequestData implements IPageableQueryRequestData {
    size: number = 10
    page: number = 1
    pageOffset: number = -1

    constructor(page: number = 1, size: number = 10, pageOffset: number = -1) {
        super();
        this.page = page;
        this.size = size;
        this.pageOffset = pageOffset;
    }

    setSize(size: number) {
        this.size = size;
    }

    setPage(page: number) {
        this.page = page;
    }

    setPageOffset(pageOffset: number) {
        this.pageOffset = pageOffset;
    }
}

export class Join {
    constructor(property?: string, joinType?: string, on?: Array<Condition>) {
        this.property = property || this.property;
        this.joinType = joinType || this.joinType;
        this.on = on || this.on;
    }

    property: string | null = null
    joinType: string | null = null
    on: Array<Condition> | null = null

    of(property: string, joinType: string, on: Array<Condition>) {
        return new Join(property, joinType, on);
    }
}


export class Order {
    property?: string | null = null
    direction?: OrderDirection = 'asc'

    constructor(property?: string, direction?: OrderDirection) {
        this.property = property
        this.direction = direction;
    }

    of(property: string, direction: OrderDirection = EOrderDirection.Asc) {
        return new Order(property, direction);
    }
}


export class Condition {
    property?: string | null = null
    value?: number | boolean | string | null | '' | Array<number | boolean | string> = null
    opt: ConditionOpt = 'eq'
    and: Array<Condition> = []
    or: Array<Condition> = []

    constructor(property?: string | null, value?: number | boolean | string | null | '' | Array<number | boolean | string>, opt?: ConditionOpt | null) {
        this.property = property || this.property;
        this.value = value || this.value;
        this.opt = opt || this.opt;
    }

    addAnd(condition: Condition) {
        this.and.push(condition);
    }

    addOr(condition: Condition) {
        this.or.push(condition);
    }
}

export type ConditionOpt =
    EConditionOpt
    | 'equals'
    | 'eq'
    | 'ge'
    | 'gt'
    | 'lt'
    | 'le'
    | 'ne'
    | 'notlike'
    | 'like'
    | 'like:'
    | ':like'
    | ':like:'
    | 'lk'
    | 'lk:'
    | ':lk'
    | ':lk:'
    | 'between'
    | 'btw'
    | 'isnull'
    | 'isnotnull'
    | 'isempty'
    | 'isnotempty'
    | 'in'
    | 'notin';
export type OrderDirection = EOrderDirection | 'asc' | 'desc';

export enum EOrderDirection {
    Asc = 'asc',
    Desc = 'desc'
}

export enum EConditionOpt {
    equals = 'equals',
    eq = 'eq',
    ge = 'ge',
    gt = 'gt',
    lt = 'lt',
    le = 'le',
    ne = 'ne',
    notlike = 'notlike',
    like = 'like',
    'like:' = 'like:',
    ':like' = ':like',
    ':like:' = ':like:',
    'lk' = 'like',
    'lk:' = 'like:',
    ':lk' = ':like',
    ':lk:' = ':like:',
    between = 'between',
    btw = 'btw',
    isnull = 'isnull',
    isnotnull = 'isnotnull',
    isempty = 'isempty',
    isnotempty = 'isnotempty',
    in = 'in',
    notin = 'notin'
}

export enum HttpContentType {
    'application/atom+xml' = 'application/atom+xml',
    'application/json' = 'application/json',
    'application/x-www-form-urlencoded' = 'application/x-www-form-urlencoded',
    'application/xml' = 'application/xml',
    'multipart/form-data' = 'multipart/form-data',
    'text/html' = 'text/html',
    'text/plain' = 'text/plain'
}

export enum HttpMethod {
    POST = 'POST',
    GET = 'GET',
    DELETE = 'DELETE',
    HEAD = 'HEAD',
    OPTIONS = 'OPTIONS',
    PUT = 'PUT',
    PATCH = 'PATCH',
    PURGE = 'PURGE',
    LINK = 'LINK',
    UNLINK = 'UNLINK'
}