var k = Object.defineProperty;
var j = (s, e, t) => e in s ? k(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var l = (s, e, t) => (j(s, typeof e != "symbol" ? e + "" : e, t), t);
import h from "axios";
import { reactive as p } from "vue";
const v = Object.prototype.toString, R = ((s) => (e) => {
  let t = v.call(e);
  return s[t] || (s[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), c = (s) => (s = s.toLowerCase(), function(e) {
  return R(e) === s;
}), D = (s) => Array.isArray(s);
c("ArrayBuffer");
const U = (s) => s != null && typeof s == "object" && Array.isArray(s) === !1, g = (s) => {
  if (R(s) !== "object")
    return !1;
  let e = Object.getPrototypeOf(s);
  return e === null || e === Object.prototype;
};
c("Date");
c("File");
c("Blob");
c("FileList");
c("URLSearchParams");
const L = (s, e) => {
  if (!(s === null || typeof s > "u"))
    if (typeof s != "object" && (s = [s]), D(s))
      for (let t = 0, a = s.length; t < a; t++)
        e.call(null, s[t], t, s);
    else
      for (let t in s)
        Object.prototype.hasOwnProperty.call(s, t) && e.call(null, s[t], t, s);
}, y = function(...s) {
  let e = arguments[0], t = (a, r) => {
    g(e[r]) && g(a) ? e[r] = y(e[r], a) : g(a) ? e[r] = y({}, a) : D(a) ? e[r] = a.slice() : e[r] = a;
  };
  for (let a = 0, r = arguments.length; a < r; a++)
    L(arguments[a], t);
  return e;
}, n = y, T = U;
class I {
  constructor() {
    l(this, "order", new w("id", "asc"));
    l(this, "queryProperties", ["id"]);
  }
}
class E extends I {
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
class b {
  constructor(e, t, a) {
    l(this, "property", null);
    l(this, "joinType", null);
    l(this, "on", null);
    this.property = e || this.property, this.joinType = t || this.joinType, this.on = a || this.on;
  }
  of(e, t, a) {
    return new b(e, t, a);
  }
}
class w {
  constructor(e, t) {
    l(this, "property", null);
    l(this, "direction", "asc");
    this.property = e, this.direction = t;
  }
  of(e, t = "asc") {
    return new w(e, t);
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
var G = /* @__PURE__ */ ((s) => (s.Asc = "asc", s.Desc = "desc", s))(G || {}), N = /* @__PURE__ */ ((s) => (s.equals = "equals", s.eq = "eq", s.ge = "ge", s.gt = "gt", s.lt = "lt", s.le = "le", s.ne = "ne", s.notlike = "notlike", s.like = "like", s["like:"] = "like:", s[":like"] = ":like", s[":like:"] = ":like:", s.lk = "like", s["lk:"] = "like:", s[":lk"] = ":like", s[":lk:"] = ":like:", s.between = "between", s.btw = "btw", s.isnull = "isnull", s.isnotnull = "isnotnull", s.isempty = "isempty", s.isnotempty = "isnotempty", s.in = "in", s.notin = "notin", s))(N || {}), u = /* @__PURE__ */ ((s) => (s["application/atom+xml"] = "application/atom+xml", s["application/json"] = "application/json", s["application/x-www-form-urlencoded"] = "application/x-www-form-urlencoded", s["application/xml"] = "application/xml", s["multipart/form-data"] = "multipart/form-data", s["text/html"] = "text/html", s["text/plain"] = "text/plain", s))(u || {}), d = /* @__PURE__ */ ((s) => (s.POST = "POST", s.GET = "GET", s.DELETE = "DELETE", s.HEAD = "HEAD", s.OPTIONS = "OPTIONS", s.PUT = "PUT", s.PATCH = "PATCH", s.PURGE = "PURGE", s.LINK = "LINK", s.UNLINK = "UNLINK", s))(d || {});
class S {
  constructor(e = {}) {
    h.defaults = n(h.defaults || {}, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": u["application/json"]
      }
    }, e), console.debug("初始化全局配置..."), console.debug("全局配置初始化完成。");
  }
  createAxiosInstance(e) {
    let t = h.create(e);
    return t.interceptors.response = h.interceptors.response, t.interceptors.request = h.interceptors.request, console.log("axios instance created"), t;
  }
}
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
    l(this, "progressEvent", { progress: 0 });
  }
}
class F extends f {
  constructor() {
    super(...arguments);
    l(this, "status", null);
    l(this, "total", 0);
    l(this, "progressEvent", { progress: 0 });
  }
}
class P {
  constructor(e, t) {
    l(this, "controller", new AbortController());
    l(this, "instance");
    l(this, "url", "");
    l(this, "loading", !1);
    l(this, "response", new f());
    l(this, "data", {});
    l(this, "params", {});
    l(this, "defaultResponse", new f());
    this.instance = e, this.url = t || this.url;
  }
  abort() {
    this.controller.abort({ success: !1, result: "请求操作已被用户取消！" });
  }
  initOptions(e = {}) {
    e.signal = this.controller.signal, e.onDownloadProgress && (e._onDownloadProgress = e.onDownloadProgress, e.onDownloadProgress = (t) => {
      this.data.progressEvent = t, e._onDownloadProgress(t);
    }), e.onUploadProgress && (e._onUploadProgress = e.onUploadProgress, e.onUploadProgress = (t) => {
      this.data.progressEvent = t, e._onUploadProgress(t);
    });
  }
  execute(e = {}) {
    return new Promise((t, a) => {
      this.loading = !0, T(e.data) ? this.data = n(this.data || {}, e.data || {}) : this.data = e.data, this.params = n(this.params || {}, e.params || {}), e.url = e.url ? e.url : this.url, this.initOptions(e), this.setDefaultResponse(this.defaultResponse), this.instance.request(e).then((r) => {
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
    return this.instance.defaults.headers["Content-Type"] = u["application/json"], this;
  }
  /**
   * 将执行器请求方式设置为：application/x-www-form-urlencoded
   */
  toFormRequest() {
    return this.instance.defaults.headers["Content-Type"] = u["application/x-www-form-urlencoded"], this;
  }
  /**
   * 将执行器请求方式设置为：multipart/form-data
   */
  toFormDataRequest() {
    return this.instance.defaults.headers["Content-Type"] = u["multipart/form-data"], this;
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
class Q extends P {
  constructor(e, t) {
    super(e, t);
  }
  execute(e = {}, t = {}) {
    return this.loading = !0, this.params = n(this.params || {}, t.params || {}, e || {}), t.params = this.params, this.initOptions(t), this.setDefaultResponse(this.defaultResponse), new Promise((a, r) => {
      this.instance.get(t.url || this.url, t).then((i) => {
        try {
          this.handleThenResponse(a, i);
        } finally {
          this.loading = !1;
        }
      }).catch((i) => {
        try {
          this.handleCatchResponse(r, i);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
}
class q extends P {
  constructor(e, t) {
    super(e, t);
  }
  execute(e = {}, t = {}, a = {}) {
    return this.loading = !0, T(e) ? this.data = n(this.data || {}, a.data || {}, e || {}) : this.data = e, this.params = n(this.params || {}, a.params || {}, t || {}), a.params = this.params, this.initOptions(a), this.setDefaultResponse(this.defaultResponse), new Promise((r, i) => {
      this.instance.post(a.url || this.url, this.data, a).then((m) => {
        try {
          this.handleThenResponse(r, m);
        } finally {
          this.loading = !1;
        }
      }).catch((m) => {
        try {
          this.handleCatchResponse(i, m);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
}
class A extends q {
  constructor(e, t) {
    super(e, t), this.setDefaultResponse(new f());
  }
}
class z extends A {
  constructor(e, t) {
    super(e, t), this.setDefaultResponse(new F());
  }
}
const o = class extends S {
  constructor(e = {}) {
    super(e);
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createRequestExecutor(e = "", t = {}) {
    let a = this.createAxiosInstance(t);
    return p(new P(a, e));
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
      headers: { "Content-Type": u["application/x-www-form-urlencoded"] }
    }, t), r = this.createAxiosInstance(a);
    return p(new Q(r, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createQueryExecutor(e = "", t = {}) {
    let a = n({
      method: d.GET,
      data: null,
      params: null,
      headers: { "Content-Type": u["application/x-www-form-urlencoded"] }
    }, t), r = this.createAxiosInstance(a);
    return p(new A(r, e).setDefaultResponse({ data: [] }).setDefaultRequestData(new I()));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPageableQueryExecutor(e = "", t = {}) {
    let a = n({
      method: d.GET,
      data: null,
      params: null,
      headers: { "Content-Type": u["application/x-www-form-urlencoded"] }
    }, t), r = this.createAxiosInstance(a);
    return p(new z(r, e).setDefaultResponse({ data: [] }).setDefaultRequestData(new E()));
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
      headers: { "Content-Type": u["multipart/form-data"] }
    }, t), r = this.createAxiosInstance(a);
    return p(new q(r, e));
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
let x = o;
l(x, "instance");
export {
  X as Condition,
  E as DefaultPageableQueryRequestData,
  F as DefaultPageableQueryResponse,
  I as DefaultQueryRequestData,
  f as DefaultResponse,
  N as EConditionOpt,
  G as EOrderDirection,
  P as Executor,
  Q as GetExecutor,
  x as HttpClient,
  u as HttpContentType,
  d as HttpMethod,
  b as Join,
  w as Order,
  z as PageableQueryExecutor,
  q as PostExecutor,
  A as QueryExecutor
};
