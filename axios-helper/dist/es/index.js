var w = Object.defineProperty;
var T = (s, e, t) => e in s ? w(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var r = (s, e, t) => (T(s, typeof e != "symbol" ? e + "" : e, t), t);
import u from "axios";
import { reactive as m } from "vue";
const E = Object.prototype.toString, b = ((s) => (e) => {
  let t = E.call(e);
  return s[t] || (s[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), c = (s) => (s = s.toLowerCase(), function(e) {
  return b(e) === s;
}), q = (s) => Array.isArray(s);
c("ArrayBuffer");
const g = (s) => {
  if (b(s) !== "object")
    return !1;
  let e = Object.getPrototypeOf(s);
  return e === null || e === Object.prototype;
};
c("Date");
c("File");
c("Blob");
c("FileList");
c("URLSearchParams");
const j = (s, e) => {
  if (!(s === null || typeof s > "u"))
    if (typeof s != "object" && (s = [s]), q(s))
      for (let t = 0, a = s.length; t < a; t++)
        e.call(null, s[t], t, s);
    else
      for (let t in s)
        Object.prototype.hasOwnProperty.call(s, t) && e.call(null, s[t], t, s);
}, x = function(...s) {
  let e = arguments[0], t = (a, l) => {
    g(e[l]) && g(a) ? e[l] = x(e[l], a) : g(a) ? e[l] = x({}, a) : q(a) ? e[l] = a.slice() : e[l] = a;
  };
  for (let a = 0, l = arguments.length; a < l; a++)
    j(arguments[a], t);
  return e;
}, n = x;
var i = /* @__PURE__ */ ((s) => (s["application/atom+xml"] = "application/atom+xml", s["application/json"] = "application/json", s["application/x-www-form-urlencoded"] = "application/x-www-form-urlencoded", s["application/xml"] = "application/xml", s["multipart/form-data"] = "multipart/form-data", s["text/html"] = "text/html", s["text/plain"] = "text/plain", s))(i || {}), d = /* @__PURE__ */ ((s) => (s.POST = "POST", s.GET = "GET", s.DELETE = "DELETE", s.HEAD = "HEAD", s.OPTIONS = "OPTIONS", s.PUT = "PUT", s.PATCH = "PATCH", s.PURGE = "PURGE", s.LINK = "LINK", s.UNLINK = "UNLINK", s))(d || {});
const p = {
  method: d.POST,
  headers: { "Content-Type": i["application/json"] },
  xRequestedWith: "XMLHttpRequest"
};
class I {
  constructor(e = p) {
    r(this, "globalOptions", p);
    this.globalOptions = n(this.globalOptions || {}, e), console.debug("初始化全局配置..."), u.defaults.baseURL = this.globalOptions.baseUrl, u.defaults.method = this.globalOptions.method, u.defaults.headers.common["X-Requested-With"] = this.globalOptions.xRequestedWith, u.interceptors.request.use(this.globalOptions.requestSuccessHandler || this.defaultRequestSuccessHandler, this.globalOptions.requestFailHandler || this.defaultRequestFailHandler), u.interceptors.response.use(this.globalOptions.responseSuccessHandler || this.defaultResponseSuccessHandler, this.globalOptions.responseFailHandler || this.defaultResponseFailHandler), console.debug("全局配置初始化完成。");
  }
  defaultRequestSuccessHandler(e) {
    return e;
  }
  defaultRequestFailHandler(e) {
    return console.error("远程请求出现错误!"), Promise.reject(e);
  }
  defaultResponseSuccessHandler(e) {
    return e;
  }
  defaultResponseFailHandler(e) {
    var t, a;
    return console.log(((a = (t = e.response) == null ? void 0 : t.data) == null ? void 0 : a.result) || "远程请求出现错误(code=" + e.response.status + ")"), Promise.reject(e);
  }
  createAxiosInstance(e) {
    let t = u.create(e);
    return console.log("axios instance created"), t.interceptors.request.use(this.globalOptions.requestSuccessHandler, this.globalOptions.requestFailHandler), t.interceptors.response.use(this.globalOptions.responseSuccessHandler, this.globalOptions.responseFailHandler), t;
  }
}
class R {
  constructor(e, t) {
    r(this, "instance");
    r(this, "url", "");
    r(this, "loading", !1);
    r(this, "response", { success: !1 });
    r(this, "data", {});
    r(this, "params", {});
    this.instance = e, this.url = t || "";
  }
  execute(e = {}) {
    return this.loading = !0, this.data = n(this.data || {}, e.data || {}), this.params = n(this.params || {}, e.params || {}), e.url = e.url ? e.url : this.url, new Promise((t, a) => {
      this.instance.request(e).then((l) => {
        try {
          this.handleThenResponse(t, l);
        } finally {
          this.loading = !1;
        }
      }).catch((l) => {
        try {
          this.handleCatchResponse(a, l);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
  /**
   * 将执行器请求方式设置为：application/json
   */
  toAjaxRequest() {
    return this.instance.defaults.headers["Content-Type"] = i["application/json"], this;
  }
  /**
   * 将执行器请求方式设置为：application/x-www-form-urlencoded
   */
  toFormRequest() {
    return this.instance.defaults.headers["Content-Type"] = i["application/x-www-form-urlencoded"], this;
  }
  /**
   * 将执行器请求方式设置为：multipart/form-data
   */
  toFormDataRequest() {
    return this.instance.defaults.headers["Content-Type"] = i["multipart/form-data"], this;
  }
  setDefaultResponse(e = {}) {
    return this.response = n(this.response, e), this;
  }
  setDefaultRequestData(e = {}) {
    return this.data = n(this.data, e), this;
  }
  setDefaultResultParams(e = {}) {
    return this.params = n(this.params, e), this;
  }
  handleThenResponse(e, t) {
    this.response = t.data, e(t.data);
  }
  handleCatchResponse(e, t) {
    if (console.error("远程请求发生异常：", t), t.response)
      this.response = t.response.data, e(t.response.data);
    else {
      let a = { success: !1, result: "远程请求发生异常！", data: null };
      this.response = a, e(a);
    }
  }
}
class S extends R {
  constructor(e, t) {
    super(e, t);
  }
  execute(e = {}, t = {}) {
    return this.loading = !0, this.params = n(this.params || {}, t.params || {}, e || {}), t.params = this.params, new Promise((a, l) => {
      this.instance.get(t.url || this.url, t).then((h) => {
        try {
          this.handleThenResponse(a, h);
        } finally {
          this.loading = !1;
        }
      }).catch((h) => {
        try {
          this.handleCatchResponse(l, h);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
}
class k extends R {
  constructor(e, t) {
    super(e, t);
  }
  execute(e = {}, t = {}, a = {}) {
    return this.loading = !0, this.data = n(this.data || {}, a.data || {}, e || {}), this.params = n(this.params || {}, a.params || {}, t || {}), this.setDefaultResponse({ total: 0, page: 1, size: 10 }), a.params = this.params, new Promise((l, h) => {
      this.instance.post(a.url || this.url, this.data, a).then((f) => {
        try {
          this.handleThenResponse(l, f);
        } finally {
          this.loading = !1;
        }
      }).catch((f) => {
        try {
          this.handleCatchResponse(h, f);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
}
const P = class extends I {
  constructor(e = p) {
    super(e);
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createRequestExecutor(e = "", t = {}) {
    let a = this.createAxiosInstance(t);
    return m(new R(a, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createGetExecutor(e = "", t = {}) {
    let a = n({
      method: d.GET,
      data: null,
      params: null,
      headers: { "Content-Type": i["application/x-www-form-urlencoded"] }
    }, t), l = this.createAxiosInstance(a);
    return m(new S(l, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPostExecutor(e = "", t = {}) {
    let a = n({
      method: d.POST,
      data: null,
      params: null,
      headers: { "Content-Type": i["multipart/form-data"] }
    }, t), l = this.createAxiosInstance(a);
    return m(new k(l, e));
  }
  /**
   * 获取AxiosHelper实例（单例模式），首将获取时会根据参数初始化实例，后续再获取时参数将不会生效，而是直接返回已经存在的实例
   * @param options
   */
  static getInstance(e) {
    return this.instance ? e && console.error("实例已经存在，重获取实例时，配置选项将不会生效！") : this.instance = new P(n(p, e || {})), this.instance;
  }
};
let y = P;
r(y, "instance");
class A {
  constructor() {
    r(this, "query", null);
    r(this, "order", null);
    r(this, "condition", null);
    r(this, "sorts", null);
    r(this, "queryProperties", null);
    r(this, "idProperty", null);
    r(this, "excludeIds", null);
    r(this, "joins", []);
    r(this, "fetches", []);
  }
  setQuery(e) {
    return this.query = e, this;
  }
  setOrder(e) {
    return this.order = e, this;
  }
  setCondition(e) {
    return this.condition = e, this;
  }
  setSorts(e) {
    return this.sorts = e, this;
  }
  setQueryProperties(e) {
    return this.queryProperties = e, this;
  }
  setIdProperty(e) {
    return this.idProperty = e, this;
  }
  setExcludeIds(e) {
    return this.excludeIds = e, this;
  }
  setFetches(e) {
    return this.fetches = e, this;
  }
  setJoins(e) {
    return this.joins = e, this;
  }
  addFetch(e, t, a) {
    return e instanceof o ? this.fetches.push(e) : this.fetches.push(new o(e, t, a));
  }
  addJoin(e, t, a) {
    return e instanceof o ? this.joins.push(e) : this.joins.push(new o(e, t, a));
  }
}
class N extends A {
  constructor(t = 1, a = 10, l = -1) {
    super();
    r(this, "size", 10);
    r(this, "page", 1);
    r(this, "pageOffset", -1);
    this.page = t, this.size = a, this.pageOffset = l;
  }
  setSize(t) {
    this.size = t;
  }
  setPage(t) {
    this.page = t;
  }
  setPageOffset(t) {
    this.pageOffset = t;
  }
}
class o {
  constructor(e, t, a) {
    r(this, "property", null);
    r(this, "joinType", null);
    r(this, "on", null);
    this.property = e || this.property, this.joinType = t || this.joinType, this.on = a || this.on;
  }
  of(e, t, a) {
    return new o(e, t, a);
  }
}
class v {
  constructor() {
    r(this, "property", null);
    r(this, "direction", null);
  }
}
class G {
  constructor(e, t, a) {
    r(this, "property", null);
    r(this, "value", null);
    r(this, "opt", "eq");
    r(this, "and", []);
    r(this, "or", []);
    this.property = e || this.property, this.value = t || this.value, this.opt = a || this.opt;
  }
  addAnd(e) {
    this.and.push(e);
  }
  addOr(e) {
    this.or.push(e);
  }
}
var D = /* @__PURE__ */ ((s) => (s.Asc = "asc", s.Desc = "desc", s))(D || {}), F = /* @__PURE__ */ ((s) => (s.equals = "equals", s.eq = "eq", s.ge = "ge", s.gt = "gt", s.lt = "lt", s.le = "le", s.ne = "ne", s.notlike = "notlike", s.like = "like", s["like:"] = "like:", s[":like"] = ":like", s[":like:"] = ":like:", s.lk = "like", s["lk:"] = "like:", s[":lk"] = ":like", s[":lk:"] = ":like:", s.between = "between", s.btw = "btw", s.isnull = "isnull", s.isnotnull = "isnotnull", s.isempty = "isempty", s.isnotempty = "isnotempty", s.in = "in", s.notin = "notin", s))(F || {});
export {
  I as AbstractAxiosHelper,
  y as AxiosHelper,
  G as Condition,
  F as ConditionOpt,
  R as Executor,
  S as GetExecutor,
  i as HttpContentType,
  d as HttpMethod,
  o as Join,
  v as Order,
  D as OrderType,
  N as PageableRequestData,
  k as PostExecutor,
  A as RequestData
};
