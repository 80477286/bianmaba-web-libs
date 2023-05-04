var A = Object.defineProperty;
var G = (s, e, t) => e in s ? A(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var l = (s, e, t) => (G(s, typeof e != "symbol" ? e + "" : e, t), t);
import c from "axios";
import { reactive as p } from "vue";
const L = Object.prototype.toString, T = ((s) => (e) => {
  let t = L.call(e);
  return s[t] || (s[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), d = (s) => (s = s.toLowerCase(), function(e) {
  return T(e) === s;
}), I = (s) => Array.isArray(s);
d("ArrayBuffer");
const U = (s) => s != null && typeof s == "object" && Array.isArray(s) === !1, R = (s) => {
  if (T(s) !== "object")
    return !1;
  let e = Object.getPrototypeOf(s);
  return e === null || e === Object.prototype;
};
d("Date");
d("File");
d("Blob");
d("FileList");
d("URLSearchParams");
const v = (s, e) => {
  if (!(s === null || typeof s > "u"))
    if (typeof s != "object" && (s = [s]), I(s))
      for (let t = 0, a = s.length; t < a; t++)
        e.call(null, s[t], t, s);
    else
      for (let t in s)
        Object.prototype.hasOwnProperty.call(s, t) && e.call(null, s[t], t, s);
}, w = function(...s) {
  let e = arguments[0], t = (a, r) => {
    R(e[r]) && R(a) ? e[r] = w(e[r], a) : R(a) ? e[r] = w({}, a) : I(a) ? e[r] = a.slice() : e[r] = a;
  };
  for (let a = 0, r = arguments.length; a < r; a++)
    v(arguments[a], t);
  return e;
}, u = w, b = U;
class S {
  constructor() {
    l(this, "order", new P("id", "asc"));
    l(this, "queryProperties", ["id"]);
  }
}
class N extends S {
  constructor(t = 1, a = 10, r = -1) {
    super();
    l(this, "size", 10);
    l(this, "page", 1);
    l(this, "pageOffset", -1);
    this.page = t, this.size = a, this.pageOffset = r;
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
class k {
  constructor(e, t, a) {
    l(this, "property", null);
    l(this, "joinType", null);
    l(this, "on", null);
    this.property = e || this.property, this.joinType = t || this.joinType, this.on = a || this.on;
  }
  of(e, t, a) {
    return new k(e, t, a);
  }
}
class P {
  constructor(e, t) {
    l(this, "property", null);
    l(this, "direction", "asc");
    this.property = e, this.direction = t;
  }
  of(e, t = "asc") {
    return new P(e, t);
  }
}
class X {
  constructor(e, t, a) {
    l(this, "property", null);
    l(this, "value", null);
    l(this, "opt", "eq");
    l(this, "and", []);
    l(this, "or", []);
    this.property = e || this.property, this.value = t || this.value, this.opt = a || this.opt;
  }
  addAnd(e) {
    this.and.push(e);
  }
  addOr(e) {
    this.or.push(e);
  }
}
var Q = /* @__PURE__ */ ((s) => (s.Asc = "asc", s.Desc = "desc", s))(Q || {}), E = /* @__PURE__ */ ((s) => (s.equals = "equals", s.eq = "eq", s.ge = "ge", s.gt = "gt", s.lt = "lt", s.le = "le", s.ne = "ne", s.notlike = "notlike", s.like = "like", s["like:"] = "like:", s[":like"] = ":like", s[":like:"] = ":like:", s.lk = "like", s["lk:"] = "like:", s[":lk"] = ":like", s[":lk:"] = ":like:", s.between = "between", s.btw = "btw", s.isnull = "isnull", s.isnotnull = "isnotnull", s.isempty = "isempty", s.isnotempty = "isnotempty", s.in = "in", s.notin = "notin", s))(E || {}), i = /* @__PURE__ */ ((s) => (s["application/atom+xml"] = "application/atom+xml", s["application/json"] = "application/json", s["application/x-www-form-urlencoded"] = "application/x-www-form-urlencoded", s["application/xml"] = "application/xml", s["multipart/form-data"] = "multipart/form-data", s["text/html"] = "text/html", s["text/plain"] = "text/plain", s))(i || {}), h = /* @__PURE__ */ ((s) => (s.POST = "POST", s.GET = "GET", s.DELETE = "DELETE", s.HEAD = "HEAD", s.OPTIONS = "OPTIONS", s.PUT = "PUT", s.PATCH = "PATCH", s.PURGE = "PURGE", s.LINK = "LINK", s.UNLINK = "UNLINK", s))(h || {});
class H {
  constructor() {
    l(this, "method", h.POST);
    l(this, "headers", { "Content-Type": i["application/json"] });
    l(this, "xRequestedWith", "XMLHttpRequest");
  }
}
const j = new H(), n = class {
  constructor(e = {}) {
    n.default = u(n.default || {}, e), console.debug("初始化全局配置..."), c.defaults.baseURL = n.default.baseUrl, c.defaults.method = n.default.method || c.defaults.method, c.defaults.headers.common["X-Requested-With"] = n.default.xRequestedWith, c.interceptors.request.use(n.default.requestSuccessHandler || this.defaultRequestSuccessHandler, n.default.requestFailHandler || this.defaultRequestFailHandler), c.interceptors.response.use(n.default.responseSuccessHandler || this.defaultResponseSuccessHandler, n.default.responseFailHandler || this.defaultResponseFailHandler), console.debug("全局配置初始化完成。");
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
    let t = c.create(u(n.default || {}, e));
    return console.log("axios instance created"), c.interceptors.request.use(n.default.requestSuccessHandler || this.defaultRequestSuccessHandler, n.default.requestFailHandler || this.defaultRequestFailHandler), c.interceptors.response.use(n.default.responseSuccessHandler || this.defaultResponseSuccessHandler, n.default.responseFailHandler || this.defaultResponseFailHandler), t;
  }
};
let x = n;
l(x, "default", j);
class m {
  constructor() {
    l(this, "success", !1);
    l(this, "data", null);
    l(this, "errors", []);
    l(this, "exception", null);
    l(this, "extendedData", null);
    l(this, "messages", []);
    l(this, "result", null);
    l(this, "status", null);
  }
}
class z extends m {
  constructor() {
    super(...arguments);
    l(this, "status", null);
    l(this, "total", 0);
  }
}
class D {
  constructor(e, t) {
    l(this, "instance");
    l(this, "url", "");
    l(this, "loading", !1);
    l(this, "response", new m());
    l(this, "data", {});
    l(this, "params", {});
    l(this, "defaultResponse", new m());
    this.instance = e, this.url = t || this.url;
  }
  execute(e = {}) {
    return new Promise((t, a) => {
      this.loading = !0, b(e.data) ? this.data = u(this.data || {}, e.data || {}) : this.data = e.data, this.params = u(this.params || {}, e.params || {}), e.url = e.url ? e.url : this.url, this.instance.request(e).then((r) => {
        try {
          this.handleThenResponse(t, r);
        } finally {
          this.loading = !1;
        }
      }).catch((r) => {
        try {
          this.handleCatchResponse(a, r);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
  /**
   * 将执行器请求方式设置为：application/json
   */
  toJsonRequest() {
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
  setDefaultResponse(e = new m()) {
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
    return this.loading = !0, this.params = u(this.params || {}, t.params || {}, e || {}), t.params = this.params, new Promise((a, r) => {
      this.instance.get(t.url || this.url, t).then((f) => {
        try {
          this.handleThenResponse(a, f);
        } finally {
          this.loading = !1;
        }
      }).catch((f) => {
        try {
          this.handleCatchResponse(r, f);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
}
class F extends D {
  constructor(e, t) {
    super(e, t);
  }
  execute(e = {}, t = {}, a = {}) {
    return this.loading = !0, b(e) ? this.data = u(this.data || {}, a.data || {}, e || {}) : this.data = e, this.params = u(this.params || {}, a.params || {}, t || {}), a.params = this.params, new Promise((r, f) => {
      this.instance.post(a.url || this.url, this.data, a).then((y) => {
        try {
          this.handleThenResponse(r, y);
        } finally {
          this.loading = !1;
        }
      }).catch((y) => {
        try {
          this.handleCatchResponse(f, y);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
}
class q extends F {
  constructor(e, t) {
    super(e, t), this.setDefaultResponse(new m());
  }
}
const o = class extends x {
  constructor(e = j) {
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
      method: h.GET,
      data: null,
      params: null,
      headers: { "Content-Type": i["application/x-www-form-urlencoded"] }
    }, t), r = this.createAxiosInstance(a);
    return p(new K(r, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createQueryExecutor(e = "", t = {}) {
    let a = u({
      method: h.GET,
      data: null,
      params: null,
      headers: { "Content-Type": i["application/x-www-form-urlencoded"] }
    }, t), r = this.createAxiosInstance(a);
    return p(new q(r, e).setDefaultResponse({ data: [] }).setDefaultRequestData(new S()));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPageableQueryExecutor(e = "", t = {}) {
    let a = u({
      method: h.GET,
      data: null,
      params: null,
      headers: { "Content-Type": i["application/x-www-form-urlencoded"] }
    }, t), r = this.createAxiosInstance(a);
    return p(new q(r, e).setDefaultResponse({ data: [] }).setDefaultRequestData(new N()));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPostExecutor(e = "", t = {}) {
    let a = u({
      method: h.POST,
      data: null,
      params: null,
      headers: { "Content-Type": i["multipart/form-data"] }
    }, t), r = this.createAxiosInstance(a);
    return p(new F(r, e));
  }
  /**
   * 获取HttpClient实例（单例模式），首将获取时会根据参数初始化实例，后续再获取时参数将不会生效，而是直接返回已经存在的实例
   * @param options
   */
  static getInstance(e) {
    return this.instance ? e && console.error("实例已经存在，重获取实例时，配置选项将不会生效！") : this.instance = new o(e), this.instance;
  }
  static post() {
    return {
      do(e, t = {}, a = {}, r = {}) {
        return o.getInstance().createPostExecutor(e, r).execute(t, a, r);
      },
      multipartFormData(e, t = {}, a = {}, r = {}) {
        return o.getInstance().createPostExecutor(e, r).toFormDataRequest().execute(t, a, r);
      },
      form(e, t = {}, a = {}, r = {}) {
        return o.getInstance().createPostExecutor(e, r).toFormRequest().execute(t, a, r);
      },
      json(e, t = {}, a = {}, r = {}) {
        return o.getInstance().createPostExecutor(e, r).toJsonRequest().execute(t, a, r);
      }
    };
  }
  static get() {
    return {
      do(e, t = {}, a = {}) {
        return o.getInstance().createGetExecutor(e, a).execute(t, a);
      }
    };
  }
};
let g = o;
l(g, "instance");
class $ extends q {
  constructor(e, t) {
    super(e, t), this.setDefaultResponse(new z());
  }
}
export {
  x as AbstractHttpClient,
  X as Condition,
  N as DefaultPageableQueryRequestData,
  z as DefaultPageableQueryResponse,
  S as DefaultQueryRequestData,
  m as DefaultResponse,
  E as EConditionOpt,
  Q as EOrderDirection,
  D as Executor,
  K as GetExecutor,
  g as HttpClient,
  i as HttpContentType,
  h as HttpMethod,
  k as Join,
  P as Order,
  $ as PageableQueryExecutor,
  F as PostExecutor,
  q as QueryExecutor
};
