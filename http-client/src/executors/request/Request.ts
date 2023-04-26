export type RequestData = (QueryRequestData | PageableQueryRequestData | any);
export type RequestParams = any;

export class QueryRequestData {
    query: string | null = null
    order: Order | null = null
    condition: Condition | null = null
    sorts: Array<Order> | null = null
    queryProperties: Array<string> | null = null
    idProperty: string | null = null
    excludeIds: Array<string> | null = null
    joins: Array<Join> = []
    fetches: Array<Join> = []

    setQuery(query: string) {
        this.query = query;
        return this;
    }

    setOrder(order: Order) {
        this.order = order;
        return this;
    }

    setCondition(condition: Condition) {
        this.condition = condition;
        return this;
    }

    setSorts(sorts: Array<Order>) {
        this.sorts = sorts;
        return this;
    }

    setQueryProperties(queryProperties: Array<string>) {
        this.queryProperties = queryProperties;
        return this;
    }

    setIdProperty(idProperty: string) {
        this.idProperty = idProperty;
        return this;
    }

    setExcludeIds(ids: Array<string>) {
        this.excludeIds = ids;
        return this;
    }

    setFetches(fetches: Array<Join>) {
        this.fetches = fetches;
        return this;
    }

    setJoins(joins: Array<Join>) {
        this.joins = joins;
        return this;
    }

    addFetch(property: string | Join, joinType?: string, on?: Array<Condition>) {
        if (property instanceof Join) {
            return this.fetches.push(property);
        } else {
            return this.fetches.push(new Join(property, joinType, on));
        }
    }

    addJoin(property: string | Join, joinType: string, on: Array<Condition>) {
        if (property instanceof Join) {
            return this.joins.push(property);
        } else {
            return this.joins.push(new Join(property, joinType, on));
        }
    }
}

export class PageableQueryRequestData extends QueryRequestData {
    constructor(page: number = 1, size: number = 10, pageOffset: number = -1) {
        super();
        this.page = page;
        this.size = size;
        this.pageOffset = pageOffset;
    }

    size: number = 10
    page: number = 1
    pageOffset: number = -1

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
    property: string | null = null
    direction: OrderDirection = 'asc'

    constructor(property: string, direction: OrderDirection) {
        this.property = property
        this.direction = direction;
    }

    of(property: string, direction: OrderDirection = EOrderDirection.Asc) {
        return new Order(property, direction);
    }
}


export class Condition {
    property: string | null = null
    value: number | boolean | string | null | '' | Array<number | boolean | string> = null
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