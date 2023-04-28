var F = Object.defineProperty;
var G = (s, e, t) => e in s ? F(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var l = (s, e, t) => (G(s, typeof e != "symbol" ? e + "" : e, t), t);
import i from "axios";
import { reactive as p } from "vue";
const L = Object.prototype.toString, b = ((s) => (e) => {
  let t = L.call(e);
  return s[t] || (s[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), h = (s) => (s = s.toLowerCase(), function(e) {
  return b(e) === s;
}), I = (s) => Array.isArray(s);
h("ArrayBuffer");
const U = (s) => s != null && typeof s == "object" && Array.isArray(s) === !1, w = (s) => {
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
const v = (s, e) => {
  if (!(s === null || typeof s > "u"))
    if (typeof s != "object" && (s = [s]), I(s))
      for (let t = 0, a = s.length; t < a; t++)
        e.call(null, s[t], t, s);
    else
      for (let t in s)
        Object.prototype.hasOwnProperty.call(s, t) && e.call(null, s[t], t, s);
}, R = function(...s) {
  let e = arguments[0], t = (a, r) => {
    w(e[r]) && w(a) ? e[r] = R(e[r], a) : w(a) ? e[r] = R({}, a) : I(a) ? e[r] = a.slice() : e[r] = a;
  };
  for (let a = 0, r = arguments.length; a < r; a++)
    v(arguments[a], t);
  return e;
}, n = R, j = U;
class k {
  constructor() {
    l(this, "order", new T("id", "asc"));
    l(this, "queryProperties", ["id"]);
  }
}
class N extends k {
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
class S {
  constructor(e, t, a) {
    l(this, "property", null);
    l(this, "joinType", null);
    l(this, "on", null);
    this.property = e || this.property, this.joinType = t || this.joinType, this.on = a || this.on;
  }
  of(e, t, a) {
    return new S(e, t, a);
  }
}
class T {
  constructor(e, t) {
    l(this, "property", null);
    l(this, "direction", "asc");
    this.property = e, this.direction = t;
  }
  of(e, t = "asc") {
    return new T(e, t);
  }
}
class $ {
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
var Q = /* @__PURE__ */ ((s) => (s.Asc = "asc", s.Desc = "desc", s))(Q || {}), z = /* @__PURE__ */ ((s) => (s.equals = "equals", s.eq = "eq", s.ge = "ge", s.gt = "gt", s.lt = "lt", s.le = "le", s.ne = "ne", s.notlike = "notlike", s.like = "like", s["like:"] = "like:", s[":like"] = ":like", s[":like:"] = ":like:", s.lk = "like", s["lk:"] = "like:", s[":lk"] = ":like", s[":lk:"] = ":like:", s.between = "between", s.btw = "btw", s.isnull = "isnull", s.isnotnull = "isnotnull", s.isempty = "isempty", s.isnotempty = "isnotempty", s.in = "in", s.notin = "notin", s))(z || {}), c = /* @__PURE__ */ ((s) => (s["application/atom+xml"] = "application/atom+xml", s["application/json"] = "application/json", s["application/x-www-form-urlencoded"] = "application/x-www-form-urlencoded", s["application/xml"] = "application/xml", s["multipart/form-data"] = "multipart/form-data", s["text/html"] = "text/html", s["text/plain"] = "text/plain", s))(c || {}), o = /* @__PURE__ */ ((s) => (s.POST = "POST", s.GET = "GET", s.DELETE = "DELETE", s.HEAD = "HEAD", s.OPTIONS = "OPTIONS", s.PUT = "PUT", s.PATCH = "PATCH", s.PURGE = "PURGE", s.LINK = "LINK", s.UNLINK = "UNLINK", s))(o || {});
class K {
  constructor() {
    l(this, "method", o.POST);
    l(this, "headers", { "Content-Type": c["application/json"] });
    l(this, "xRequestedWith", "XMLHttpRequest");
  }
}
const P = new K(), u = class {
  constructor(e = P) {
    u.default = n(u.default || {}, e), console.debug("初始化全局配置..."), i.defaults.baseURL = u.default.baseUrl, i.defaults.method = u.default.method, i.defaults.headers.common["X-Requested-With"] = u.default.xRequestedWith, i.interceptors.request.use(u.default.requestSuccessHandler || this.defaultRequestSuccessHandler, u.default.requestFailHandler || this.defaultRequestFailHandler), i.interceptors.response.use(u.default.responseSuccessHandler || this.defaultResponseSuccessHandler, u.default.responseFailHandler || this.defaultResponseFailHandler), console.debug("全局配置初始化完成。");
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
    let t = i.create(e);
    return console.log("axios instance created"), t.interceptors.request.use(u.default.requestSuccessHandler, u.default.requestFailHandler), t.interceptors.response.use(u.default.responseSuccessHandler, u.default.responseFailHandler), t;
  }
};
let x = u;
l(x, "default", P);
class f {
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
class E extends f {
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
    l(this, "response", new f());
    l(this, "data", {});
    l(this, "params", {});
    l(this, "defaultResponse", new f());
    this.instance = e, this.url = t || this.url;
  }
  execute(e = {}) {
    return new Promise((t, a) => {
      this.loading = !0, j(e.data) ? this.data = n(this.data || {}, e.data || {}) : this.data = e.data, this.params = n(this.params || {}, e.params || {}), e.url = e.url ? e.url : this.url, this.instance.request(e).then((r) => {
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
  toAjaxRequest() {
    return this.instance.defaults.headers["Content-Type"] = c["application/json"], this;
  }
  /**
   * 将执行器请求方式设置为：application/x-www-form-urlencoded
   */
  toFormRequest() {
    return this.instance.defaults.headers["Content-Type"] = c["application/x-www-form-urlencoded"], this;
  }
  /**
   * 将执行器请求方式设置为：multipart/form-data
   */
  toFormDataRequest() {
    return this.instance.defaults.headers["Content-Type"] = c["multipart/form-data"], this;
  }
  setDefaultResponse(e = new f()) {
    return this.response = e, this.defaultResponse = n(this.response, {}), this;
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
class W extends D {
  constructor(e, t) {
    super(e, t);
  }
  execute(e = {}, t = {}) {
    return this.loading = !0, this.params = n(this.params || {}, t.params || {}, e || {}), t.params = this.params, new Promise((a, r) => {
      this.instance.get(t.url || this.url, t).then((d) => {
        try {
          this.handleThenResponse(a, d);
        } finally {
          this.loading = !1;
        }
      }).catch((d) => {
        try {
          this.handleCatchResponse(r, d);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
}
class A extends D {
  constructor(e, t) {
    super(e, t);
  }
  execute(e = {}, t = {}, a = {}) {
    return this.loading = !0, j(e) ? this.data = n(this.data || {}, a.data || {}, e || {}) : this.data = e, this.params = n(this.params || {}, a.params || {}, t || {}), a.params = this.params, new Promise((r, d) => {
      this.instance.post(a.url || this.url, this.data, a).then((y) => {
        try {
          this.handleThenResponse(r, y);
        } finally {
          this.loading = !1;
        }
      }).catch((y) => {
        try {
          this.handleCatchResponse(d, y);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
}
class q extends A {
  constructor(e, t) {
    super(e, t), this.setDefaultResponse(new f());
  }
}
const m = class extends x {
  constructor(e = P) {
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
    let a = n({
      method: o.GET,
      data: null,
      params: null,
      headers: { "Content-Type": c["application/x-www-form-urlencoded"] }
    }, t), r = this.createAxiosInstance(a);
    return p(new W(r, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createQueryExecutor(e = "", t = {}) {
    let a = n({
      method: o.GET,
      data: null,
      params: null,
      headers: { "Content-Type": c["application/x-www-form-urlencoded"] }
    }, t), r = this.createAxiosInstance(a);
    return p(new q(r, e).setDefaultResponse({ data: [] }).setDefaultRequestData(new k()));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPageableQueryExecutor(e = "", t = {}) {
    let a = n({
      method: o.GET,
      data: null,
      params: null,
      headers: { "Content-Type": c["application/x-www-form-urlencoded"] }
    }, t), r = this.createAxiosInstance(a);
    return p(new q(r, e).setDefaultResponse({ data: [] }).setDefaultRequestData(new N()));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPostExecutor(e = "", t = {}) {
    let a = n({
      method: o.POST,
      data: null,
      params: null,
      headers: { "Content-Type": c["multipart/form-data"] }
    }, t), r = this.createAxiosInstance(a);
    return p(new A(r, e));
  }
  /**
   * 获取HttpClient实例（单例模式），首将获取时会根据参数初始化实例，后续再获取时参数将不会生效，而是直接返回已经存在的实例
   * @param options
   */
  static getInstance(e) {
    return this.instance ? e && console.error("实例已经存在，重获取实例时，配置选项将不会生效！") : this.instance = new m(e), this.instance;
  }
  static post() {
    return {
      do(e, t = {}, a = {}, r = {}) {
        return m.getInstance().createPostExecutor(e, r).execute(t, a, r);
      },
      multipartFormData(e, t = {}, a = {}, r = {}) {
        return r = n(r, { headers: { "Content-Type": c["multipart/form-data"] } }), this.do(e, t, a, r);
      },
      form(e, t = {}, a = {}, r = {}) {
        return r = n(r, { headers: { "Content-Type": c["application/x-www-form-urlencoded"] } }), this.do(e, t, a, r);
      },
      json(e, t = {}, a = {}, r = {}) {
        return r = n(r, { headers: { "Content-Type": c["application/json"] } }), this.do(e, t, a, r);
      }
    };
  }
  static get() {
    return {
      do(e, t = {}, a = {}) {
        return m.getInstance().createGetExecutor(e, a).execute(t, a);
      }
    };
  }
};
let g = m;
l(g, "instance");
class J extends q {
  constructor(e, t) {
    super(e, t), this.setDefaultResponse(new E());
  }
}
export {
  x as AbstractHttpClient,
  $ as Condition,
  N as DefaultPageableQueryRequestData,
  E as DefaultPageableQueryResponse,
  k as DefaultQueryRequestData,
  f as DefaultResponse,
  z as EConditionOpt,
  Q as EOrderDirection,
  D as Executor,
  W as GetExecutor,
  g as HttpClient,
  c as HttpContentType,
  o as HttpMethod,
  S as Join,
  T as Order,
  J as PageableQueryExecutor,
  A as PostExecutor,
  q as QueryExecutor
};
