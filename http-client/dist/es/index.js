var S = Object.defineProperty;
var U = (t, e, s) => e in t ? S(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var n = (t, e, s) => (U(t, typeof e != "symbol" ? e + "" : e, s), s);
import f from "axios";
import { reactive as p } from "vue";
const L = Object.prototype.toString, T = ((t) => (e) => {
  let s = L.call(e);
  return t[s] || (t[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), i = (t) => (t = t.toLowerCase(), function(e) {
  return T(e) === t;
}), E = (t) => Array.isArray(t);
i("ArrayBuffer");
const k = (t) => t != null && typeof t == "object" && Array.isArray(t) === !1, g = (t) => {
  if (T(t) !== "object")
    return !1;
  let e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
};
i("Date");
i("File");
i("Blob");
i("FileList");
i("URLSearchParams");
const j = (t, e) => {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), E(t))
      for (let s = 0, a = t.length; s < a; s++)
        e.call(null, t[s], s, t);
    else
      for (let s in t)
        Object.prototype.hasOwnProperty.call(t, s) && e.call(null, t[s], s, t);
}, y = function(...t) {
  let e = arguments[0], s = (a, r) => {
    g(e[r]) && g(a) ? e[r] = y(e[r], a) : g(a) ? e[r] = y({}, a) : E(a) ? e[r] = a.slice() : e[r] = a;
  };
  for (let a = 0, r = arguments.length; a < r; a++)
    j(arguments[a], s);
  return e;
}, l = y, P = k;
class b {
  constructor() {
    n(this, "order", new R("id", "asc"));
    n(this, "queryProperties", ["id"]);
  }
}
class F extends b {
  constructor(s = 1, a = 10, r = -1) {
    super();
    n(this, "size", 10);
    n(this, "page", 1);
    n(this, "pageOffset", -1);
    this.page = s, this.size = a, this.pageOffset = r;
  }
  setSize(s) {
    this.size = s;
  }
  setPage(s) {
    this.page = s;
  }
  setPageOffset(s) {
    this.pageOffset = s;
  }
}
class I {
  constructor(e, s, a) {
    n(this, "property", null);
    n(this, "joinType", null);
    n(this, "on", null);
    this.property = e || this.property, this.joinType = s || this.joinType, this.on = a || this.on;
  }
  of(e, s, a) {
    return new I(e, s, a);
  }
}
class R {
  constructor(e, s) {
    n(this, "property", null);
    n(this, "direction", "asc");
    this.property = e, this.direction = s;
  }
  of(e, s = "asc") {
    return new R(e, s);
  }
}
class X {
  constructor(e, s, a) {
    n(this, "property", null);
    n(this, "value", null);
    n(this, "opt", "eq");
    n(this, "and", []);
    n(this, "or", []);
    this.property = e || this.property, this.value = s || this.value, this.opt = a || this.opt;
  }
  addAnd(e) {
    this.and.push(e);
  }
  addOr(e) {
    this.or.push(e);
  }
}
var N = /* @__PURE__ */ ((t) => (t.Asc = "asc", t.Desc = "desc", t))(N || {}), v = /* @__PURE__ */ ((t) => (t.equals = "equals", t.eq = "eq", t.ge = "ge", t.gt = "gt", t.lt = "lt", t.le = "le", t.ne = "ne", t.notlike = "notlike", t.like = "like", t["like:"] = "like:", t[":like"] = ":like", t[":like:"] = ":like:", t.lk = "like", t["lk:"] = "like:", t[":lk"] = ":like", t[":lk:"] = ":like:", t.between = "between", t.btw = "btw", t.isnull = "isnull", t.isnotnull = "isnotnull", t.isempty = "isempty", t.isnotempty = "isnotempty", t.in = "in", t.notin = "notin", t))(v || {}), o = /* @__PURE__ */ ((t) => (t["application/atom+xml"] = "application/atom+xml", t["application/json"] = "application/json", t["application/x-www-form-urlencoded"] = "application/x-www-form-urlencoded", t["application/xml"] = "application/xml", t["multipart/form-data"] = "multipart/form-data", t["text/html"] = "text/html", t["text/plain"] = "text/plain", t))(o || {}), d = /* @__PURE__ */ ((t) => (t.POST = "POST", t.GET = "GET", t.DELETE = "DELETE", t.HEAD = "HEAD", t.OPTIONS = "OPTIONS", t.PUT = "PUT", t.PATCH = "PATCH", t.PURGE = "PURGE", t.LINK = "LINK", t.UNLINK = "UNLINK", t))(d || {});
class G {
  constructor(e = {}) {
    f.defaults = l(f.defaults || {}, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": o["application/json"]
      }
    }, e), console.debug("初始化全局配置..."), console.debug("全局配置初始化完成。");
  }
  createAxiosInstance(e) {
    let s = f.create(e);
    return s.interceptors.response = f.interceptors.response, s.interceptors.request = f.interceptors.request, console.log("axios instance created"), s;
  }
}
class m {
  constructor() {
    n(this, "success", !1);
    n(this, "data", null);
    n(this, "errors", []);
    n(this, "exception", null);
    n(this, "extendedData", null);
    n(this, "messages", []);
    n(this, "result", null);
    n(this, "status", null);
    n(this, "progressEvent", { progress: 0 });
  }
}
class Q extends m {
  constructor() {
    super(...arguments);
    n(this, "status", null);
    n(this, "total", 0);
    n(this, "progressEvent", { progress: 0 });
  }
}
const u = (t, e) => {
  e = e || {}, t = t || {};
  let s = e;
  if (e instanceof FormData ? (e = e, s = new FormData(), e.forEach((a, r) => {
    s.append(r, a);
  })) : e instanceof URLSearchParams ? (e = e, s = new URLSearchParams(), e.forEach((a, r) => {
    s.append(r, a);
  })) : P(e) && (s = l(e, {})), s instanceof FormData || s instanceof URLSearchParams || P(s)) {
    if (t instanceof FormData)
      t.forEach((a, r) => {
        s instanceof FormData || s instanceof URLSearchParams ? s.append(r, a) : s[r] = a;
      });
    else if (t instanceof URLSearchParams)
      t.forEach((a, r) => {
        s instanceof FormData || s instanceof URLSearchParams ? s.append(r, a) : s[r] = a;
      });
    else if (P(t)) {
      let a = Object.keys(t);
      if (s instanceof FormData || s instanceof URLSearchParams)
        a.forEach((r) => {
          s.append(r, t[r]);
        });
      else
        return l(s, t);
    }
  }
  return s;
};
class D {
  constructor(e, s) {
    n(this, "controller", new AbortController());
    n(this, "instance");
    n(this, "url", "");
    n(this, "loading", !1);
    n(this, "response", new m());
    n(this, "data", {});
    n(this, "params", {});
    n(this, "defaultResponse", new m());
    this.instance = e, this.url = s || this.url;
  }
  abort() {
    this.controller.abort({ success: !1, result: "请求操作已被用户取消！" });
  }
  initOptions(e = {}) {
    e.signal = this.controller.signal, e.onDownloadProgress && (e._onDownloadProgress = e.onDownloadProgress, e.onDownloadProgress = (s) => {
      this.data.progressEvent = s, e._onDownloadProgress(s);
    }), e.onUploadProgress && (e._onUploadProgress = e.onUploadProgress, e.onUploadProgress = (s) => {
      this.data.progressEvent = s, e._onUploadProgress(s);
    });
  }
  execute(e = {}) {
    return new Promise((s, a) => {
      console.log("Executor", this.data), console.log("Executor", this.response), this.loading = !0, e.data = u(this.data, e.data), e.params = u(this.params, e.params), e.url = e.url ? e.url : this.url, this.initOptions(e), this.setDefaultResponse(this.defaultResponse), this.instance.request(e).then((r) => {
        try {
          this.handleThenResponse(s, r);
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
    return this.instance.defaults.headers["Content-Type"] = o["application/json"], this;
  }
  /**
   * 将执行器请求方式设置为：application/x-www-form-urlencoded
   */
  toFormRequest() {
    return this.instance.defaults.headers["Content-Type"] = o["application/x-www-form-urlencoded"], this;
  }
  /**
   * 将执行器请求方式设置为：multipart/form-data
   */
  toFormDataRequest() {
    return this.instance.defaults.headers["Content-Type"] = o["multipart/form-data"], this;
  }
  setDefaultResponse(e = new m()) {
    return this.response = e, this.defaultResponse = JSON.parse(JSON.stringify(e)), this;
  }
  setDefaultRequestData(e = {}) {
    return this.data = l(this.data, e), this;
  }
  setDefaultResultParams(e = {}) {
    return this.params = l(this.params, e), this;
  }
  handleThenResponse(e, s) {
    console.log("PostExecutor", this.data), console.log("PostExecutor", this.response), this.response = s.data, e(s.data);
  }
  handleCatchResponse(e, s) {
    if (console.error("远程请求发生异常：", s), s.response)
      this.response = s.response.data, e(s.response.data);
    else {
      let a = { success: !1, result: "远程请求发生异常！", data: null };
      this.response = a, e(a);
    }
  }
}
class J extends D {
  constructor(e, s) {
    super(e, s);
  }
  execute(e = {}, s = {}) {
    return this.loading = !0, s.params = u(this.params, u(s.params, e)), this.initOptions(s), this.setDefaultResponse(this.defaultResponse), new Promise((a, r) => {
      this.instance.get(s.url || this.url, s).then((h) => {
        try {
          this.handleThenResponse(a, h);
        } finally {
          this.loading = !1;
        }
      }).catch((h) => {
        try {
          this.handleCatchResponse(r, h);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
}
class q extends D {
  constructor(e, s) {
    super(e, s);
  }
  execute(e = {}, s = {}, a = {}) {
    return this.loading = !1, e = l(JSON.parse(JSON.stringify(this.data)), a.data, e), console.log("st PostExecutor", e), console.log("st PostExecutor", this.data), a.params = u(this.params, u(a.params, s)), this.initOptions(a), this.setDefaultResponse(this.defaultResponse), new Promise((r, h) => {
      this.instance.post(a.url || this.url, e, a).then((x) => {
        try {
          console.log("PostExecutor", this.data), console.log("PostExecutor", this.response), this.handleThenResponse(r, x);
        } finally {
          this.loading = !1;
        }
      }).catch((x) => {
        try {
          this.handleCatchResponse(h, x);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
  handleThenResponse(e, s) {
    console.log("PostExecutor", this.data), console.log("PostExecutor", this.response), this.response = s.data, e(s.data);
  }
}
class A extends q {
  constructor(e, s) {
    super(e, s), this.setDefaultResponse(new m());
  }
}
class O extends A {
  constructor(e, s) {
    super(e, s), this.setDefaultResponse(new Q());
  }
}
const c = class extends G {
  constructor(e = {}) {
    super(e);
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createRequestExecutor(e = "", s = {}) {
    let a = this.createAxiosInstance(s);
    return p(new D(a, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createGetExecutor(e = "", s = {}) {
    let a = l({
      method: d.GET,
      data: null,
      params: null,
      headers: { "Content-Type": o["application/x-www-form-urlencoded"] }
    }, s), r = this.createAxiosInstance(a);
    return p(new J(r, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createQueryExecutor(e = "", s = {}) {
    let a = l({
      method: d.GET,
      data: null,
      params: null,
      headers: { "Content-Type": o["application/x-www-form-urlencoded"] }
    }, s), r = this.createAxiosInstance(a);
    return p(new A(r, e).setDefaultResponse({ data: [] }).setDefaultRequestData(new b()));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPageableQueryExecutor(e = "", s = {}) {
    let a = l({
      method: d.GET,
      data: null,
      params: null,
      headers: { "Content-Type": o["application/x-www-form-urlencoded"] }
    }, s), r = this.createAxiosInstance(a);
    return p(new O(r, e).setDefaultResponse({ data: [] }).setDefaultRequestData(new F()));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPostExecutor(e = "", s = {}) {
    let a = l({
      method: d.POST,
      data: null,
      params: null,
      headers: { "Content-Type": o["multipart/form-data"] }
    }, s), r = this.createAxiosInstance(a);
    return p(new q(r, e));
  }
  /**
   * 获取HttpClient实例（单例模式），首将获取时会根据参数初始化实例，后续再获取时参数将不会生效，而是直接返回已经存在的实例
   * @param options
   */
  static getInstance(e) {
    return this.instance ? e && console.error("实例已经存在，重获取实例时，配置选项将不会生效！") : this.instance = new c(e), this.instance;
  }
  static post() {
    return {
      do(e, s = {}, a = {}, r = {}) {
        return c.getInstance().createPostExecutor(e, r).execute(s, a, r);
      },
      multipartFormData(e, s = {}, a = {}, r = {}) {
        return c.getInstance().createPostExecutor(e, r).toFormDataRequest().execute(s, a, r);
      },
      form(e, s = {}, a = {}, r = {}) {
        return c.getInstance().createPostExecutor(e, r).toFormRequest().execute(s, a, r);
      },
      json(e, s = {}, a = {}, r = {}) {
        return c.getInstance().createPostExecutor(e, r).toJsonRequest().execute(s, a, r);
      }
    };
  }
  static get() {
    return {
      do(e, s = {}, a = {}) {
        return c.getInstance().createGetExecutor(e, a).execute(s, a);
      }
    };
  }
};
let w = c;
n(w, "instance");
export {
  X as Condition,
  F as DefaultPageableQueryRequestData,
  Q as DefaultPageableQueryResponse,
  b as DefaultQueryRequestData,
  m as DefaultResponse,
  v as EConditionOpt,
  N as EOrderDirection,
  D as Executor,
  J as GetExecutor,
  w as HttpClient,
  o as HttpContentType,
  d as HttpMethod,
  I as Join,
  R as Order,
  O as PageableQueryExecutor,
  q as PostExecutor,
  A as QueryExecutor,
  u as mergeDataOrParams
};
//# sourceMappingURL=index.js.map
