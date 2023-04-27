var A = Object.defineProperty;
var F = (s, e, t) => e in s ? A(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var r = (s, e, t) => (F(s, typeof e != "symbol" ? e + "" : e, t), t);
import c from "axios";
import { reactive as p } from "vue";
const L = Object.prototype.toString, b = ((s) => (e) => {
  let t = L.call(e);
  return s[t] || (s[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), h = (s) => (s = s.toLowerCase(), function(e) {
  return b(e) === s;
}), k = (s) => Array.isArray(s);
h("ArrayBuffer");
const y = (s) => {
  if (b(s) !== "object")
    return !1;
  let e = Object.getPrototypeOf(s);
  return e === null || e === Object.prototype;
};
h("Date");
h("File");
h("Blob");
h("FileList");
h("URLSearchParams");
const G = (s, e) => {
  if (!(s === null || typeof s > "u"))
    if (typeof s != "object" && (s = [s]), k(s))
      for (let t = 0, a = s.length; t < a; t++)
        e.call(null, s[t], t, s);
    else
      for (let t in s)
        Object.prototype.hasOwnProperty.call(s, t) && e.call(null, s[t], t, s);
}, R = function(...s) {
  let e = arguments[0], t = (a, l) => {
    y(e[l]) && y(a) ? e[l] = R(e[l], a) : y(a) ? e[l] = R({}, a) : k(a) ? e[l] = a.slice() : e[l] = a;
  };
  for (let a = 0, l = arguments.length; a < l; a++)
    G(arguments[a], t);
  return e;
}, u = R;
class I {
  constructor() {
    r(this, "order", new P("id", "asc"));
    r(this, "queryProperties", ["id"]);
  }
}
class U extends I {
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
class S {
  constructor(e, t, a) {
    r(this, "property", null);
    r(this, "joinType", null);
    r(this, "on", null);
    this.property = e || this.property, this.joinType = t || this.joinType, this.on = a || this.on;
  }
  of(e, t, a) {
    return new S(e, t, a);
  }
}
class P {
  constructor(e, t) {
    r(this, "property", null);
    r(this, "direction", "asc");
    this.property = e, this.direction = t;
  }
  of(e, t = "asc") {
    return new P(e, t);
  }
}
class X {
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
var v = /* @__PURE__ */ ((s) => (s.Asc = "asc", s.Desc = "desc", s))(v || {}), N = /* @__PURE__ */ ((s) => (s.equals = "equals", s.eq = "eq", s.ge = "ge", s.gt = "gt", s.lt = "lt", s.le = "le", s.ne = "ne", s.notlike = "notlike", s.like = "like", s["like:"] = "like:", s[":like"] = ":like", s[":like:"] = ":like:", s.lk = "like", s["lk:"] = "like:", s[":lk"] = ":like", s[":lk:"] = ":like:", s.between = "between", s.btw = "btw", s.isnull = "isnull", s.isnotnull = "isnotnull", s.isempty = "isempty", s.isnotempty = "isnotempty", s.in = "in", s.notin = "notin", s))(N || {}), i = /* @__PURE__ */ ((s) => (s["application/atom+xml"] = "application/atom+xml", s["application/json"] = "application/json", s["application/x-www-form-urlencoded"] = "application/x-www-form-urlencoded", s["application/xml"] = "application/xml", s["multipart/form-data"] = "multipart/form-data", s["text/html"] = "text/html", s["text/plain"] = "text/plain", s))(i || {}), o = /* @__PURE__ */ ((s) => (s.POST = "POST", s.GET = "GET", s.DELETE = "DELETE", s.HEAD = "HEAD", s.OPTIONS = "OPTIONS", s.PUT = "PUT", s.PATCH = "PATCH", s.PURGE = "PURGE", s.LINK = "LINK", s.UNLINK = "UNLINK", s))(o || {});
class Q {
  constructor() {
    r(this, "method", o.POST);
    r(this, "headers", { "Content-Type": i["application/json"] });
    r(this, "xRequestedWith", "XMLHttpRequest");
  }
}
const g = new Q(), n = class {
  constructor(e = g) {
    n.default = u(n.default || {}, e), console.debug("初始化全局配置..."), c.defaults.baseURL = n.default.baseUrl, c.defaults.method = n.default.method, c.defaults.headers.common["X-Requested-With"] = n.default.xRequestedWith, c.interceptors.request.use(n.default.requestSuccessHandler || this.defaultRequestSuccessHandler, n.default.requestFailHandler || this.defaultRequestFailHandler), c.interceptors.response.use(n.default.responseSuccessHandler || this.defaultResponseSuccessHandler, n.default.responseFailHandler || this.defaultResponseFailHandler), console.debug("全局配置初始化完成。");
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
    let t = c.create(e);
    return console.log("axios instance created"), t.interceptors.request.use(n.default.requestSuccessHandler, n.default.requestFailHandler), t.interceptors.response.use(n.default.responseSuccessHandler, n.default.responseFailHandler), t;
  }
};
let m = n;
r(m, "default", g);
class f {
  constructor() {
    r(this, "success", !1);
    r(this, "data", null);
    r(this, "errors", []);
    r(this, "exception", null);
    r(this, "extendedData", null);
    r(this, "messages", []);
    r(this, "result", null);
    r(this, "status", null);
  }
}
class z extends f {
  constructor() {
    super(...arguments);
    r(this, "status", null);
    r(this, "total", 0);
  }
}
class D {
  constructor(e, t) {
    r(this, "instance");
    r(this, "url", "");
    r(this, "loading", !1);
    r(this, "response", new f());
    r(this, "data", {});
    r(this, "params", {});
    r(this, "defaultResponse", new f());
    this.instance = e, this.url = t || this.url;
  }
  execute(e = {}) {
    return new Promise((t, a) => {
      this.loading = !0, this.data = u(this.data || {}, e.data || {}), this.params = u(this.params || {}, e.params || {}), e.url = e.url ? e.url : this.url, this.instance.request(e).then((l) => {
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
  setDefaultResponse(e = new f()) {
    return this.response = e, this.defaultResponse = u(this.response, {}), this;
  }
  setDefaultRequestData(e = {}) {
    return this.data = u(this.data, e), this;
  }
  setDefaultResultParams(e = {}) {
    return this.params = u(this.params, e), this;
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
class K extends D {
  constructor(e, t) {
    super(e, t);
  }
  execute(e = {}, t = {}) {
    return this.loading = !0, this.params = u(this.params || {}, t.params || {}, e || {}), t.params = this.params, new Promise((a, l) => {
      this.instance.get(t.url || this.url, t).then((d) => {
        try {
          this.handleThenResponse(a, d);
        } finally {
          this.loading = !1;
        }
      }).catch((d) => {
        try {
          this.handleCatchResponse(l, d);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
}
class j extends D {
  constructor(e, t) {
    super(e, t);
  }
  execute(e = {}, t = {}, a = {}) {
    return this.loading = !0, this.data = u(this.data || {}, a.data || {}, e || {}), this.params = u(this.params || {}, a.params || {}, t || {}), a.params = this.params, new Promise((l, d) => {
      this.instance.post(a.url || this.url, this.data, a).then((x) => {
        try {
          this.handleThenResponse(l, x);
        } finally {
          this.loading = !1;
        }
      }).catch((x) => {
        try {
          this.handleCatchResponse(d, x);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
}
class q extends j {
  constructor(e, t) {
    super(e, t), this.setDefaultResponse(new f());
  }
}
const T = class extends m {
  constructor(e = g) {
    super(e);
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createRequestExecutor(e = "", t = {}) {
    let a = this.createAxiosInstance(t);
    return p(new D(a, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createGetExecutor(e = "", t = {}) {
    let a = u({
      method: o.GET,
      data: null,
      params: null,
      headers: { "Content-Type": i["application/x-www-form-urlencoded"] }
    }, t), l = this.createAxiosInstance(a);
    return p(new K(l, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createQueryExecutor(e = "", t = {}) {
    let a = u({
      method: o.GET,
      data: null,
      params: null,
      headers: { "Content-Type": i["application/x-www-form-urlencoded"] }
    }, t), l = this.createAxiosInstance(a);
    return p(new q(l, e).setDefaultResponse({ data: [] }).setDefaultRequestData(new I()));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPageableQueryExecutor(e = "", t = {}) {
    let a = u({
      method: o.GET,
      data: null,
      params: null,
      headers: { "Content-Type": i["application/x-www-form-urlencoded"] }
    }, t), l = this.createAxiosInstance(a);
    return p(new q(l, e).setDefaultResponse({ data: [] }).setDefaultRequestData(new U()));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPostExecutor(e = "", t = {}) {
    let a = u({
      method: o.POST,
      data: null,
      params: null,
      headers: { "Content-Type": i["multipart/form-data"] }
    }, t), l = this.createAxiosInstance(a);
    return p(new j(l, e));
  }
  /**
   * 获取AxiosHelper实例（单例模式），首将获取时会根据参数初始化实例，后续再获取时参数将不会生效，而是直接返回已经存在的实例
   * @param options
   */
  static getInstance(e) {
    return this.instance ? e && console.error("实例已经存在，重获取实例时，配置选项将不会生效！") : this.instance = new T(e), this.instance;
  }
};
let w = T;
r(w, "instance");
class E extends q {
  constructor(e, t) {
    super(e, t), this.setDefaultResponse(new z());
  }
}
export {
  m as AbstractHttpClient,
  X as Condition,
  U as DefaultPageableQueryRequestData,
  z as DefaultPageableQueryResponse,
  I as DefaultQueryRequestData,
  f as DefaultResponse,
  N as EConditionOpt,
  v as EOrderDirection,
  D as Executor,
  K as GetExecutor,
  w as HttpClient,
  i as HttpContentType,
  o as HttpMethod,
  S as Join,
  P as Order,
  E as PageableQueryExecutor,
  j as PostExecutor,
  q as QueryExecutor
};
