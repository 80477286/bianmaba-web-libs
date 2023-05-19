var A = Object.defineProperty;
var U = (s, e, t) => e in s ? A(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var n = (s, e, t) => (U(s, typeof e != "symbol" ? e + "" : e, t), t);
import f from "axios";
import { reactive as p } from "vue";
const L = Object.prototype.toString, S = ((s) => (e) => {
  let t = L.call(e);
  return s[t] || (s[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), h = (s) => (s = s.toLowerCase(), function(e) {
  return S(e) === s;
}), w = (s) => Array.isArray(s);
h("ArrayBuffer");
const j = (s) => s != null && typeof s == "object" && Array.isArray(s) === !1, g = (s) => {
  if (S(s) !== "object")
    return !1;
  let e = Object.getPrototypeOf(s);
  return e === null || e === Object.prototype;
};
h("Date");
h("File");
h("Blob");
h("FileList");
h("URLSearchParams");
const k = (s, e) => {
  if (!(s === null || typeof s > "u"))
    if (typeof s != "object" && (s = [s]), w(s))
      for (let t = 0, a = s.length; t < a; t++)
        e.call(null, s[t], t, s);
    else
      for (let t in s)
        Object.prototype.hasOwnProperty.call(s, t) && e.call(null, s[t], t, s);
}, x = function(...s) {
  let e = arguments[0], t = (a, r) => {
    g(e[r]) && g(a) ? e[r] = x(e[r], a) : g(a) ? e[r] = x({}, a) : w(a) ? e[r] = a.slice() : e[r] = a;
  };
  for (let a = 0, r = arguments.length; a < r; a++)
    k(arguments[a], t);
  return e;
}, i = x, y = j, T = w;
class N {
  constructor() {
    n(this, "order", new D("id", "ascending"));
    n(this, "queryProperties", ["id"]);
  }
}
class F extends N {
  constructor(t = 1, a = 10, r = -1) {
    super();
    n(this, "size", 10);
    n(this, "page", 1);
    n(this, "pageOffset", -1);
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
    n(this, "property", null);
    n(this, "joinType", null);
    n(this, "on", null);
    this.property = e || this.property, this.joinType = t || this.joinType, this.on = a || this.on;
  }
  of(e, t, a) {
    return new b(e, t, a);
  }
}
class D {
  constructor(e, t) {
    n(this, "prop", null);
    n(this, "order", "ascending");
    this.prop = e, this.order = t;
  }
  of(e, t = "asc") {
    return new D(e, t);
  }
}
class V {
  constructor(e, t, a) {
    n(this, "property", null);
    n(this, "value", null);
    n(this, "opt", "eq");
    n(this, "and", []);
    n(this, "or", []);
    this.property = e || this.property, this.value = t || this.value, this.opt = a || this.opt;
  }
  addAnd(e) {
    this.and.push(e);
  }
  addOr(e) {
    this.or.push(e);
  }
}
var E = /* @__PURE__ */ ((s) => (s.Asc = "asc", s.Desc = "desc", s))(E || {}), G = /* @__PURE__ */ ((s) => (s.equals = "equals", s.eq = "eq", s.ge = "ge", s.gt = "gt", s.lt = "lt", s.le = "le", s.ne = "ne", s.notlike = "notlike", s.like = "like", s["like:"] = "like:", s[":like"] = ":like", s[":like:"] = ":like:", s.lk = "like", s["lk:"] = "like:", s[":lk"] = ":like", s[":lk:"] = ":like:", s.between = "between", s.btw = "btw", s.isnull = "isnull", s.isnotnull = "isnotnull", s.isempty = "isempty", s.isnotempty = "isnotempty", s.in = "in", s.notin = "notin", s))(G || {}), u = /* @__PURE__ */ ((s) => (s["application/atom+xml"] = "application/atom+xml", s["application/json"] = "application/json", s["application/x-www-form-urlencoded"] = "application/x-www-form-urlencoded", s["application/xml"] = "application/xml", s["multipart/form-data"] = "multipart/form-data", s["text/html"] = "text/html", s["text/plain"] = "text/plain", s))(u || {}), d = /* @__PURE__ */ ((s) => (s.POST = "POST", s.GET = "GET", s.DELETE = "DELETE", s.HEAD = "HEAD", s.OPTIONS = "OPTIONS", s.PUT = "PUT", s.PATCH = "PATCH", s.PURGE = "PURGE", s.LINK = "LINK", s.UNLINK = "UNLINK", s))(d || {});
class v {
  constructor(e = {}) {
    f.defaults = i(f.defaults || {}, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": u["application/json"]
      }
    }, e), console.debug("初始化全局配置..."), console.debug("全局配置初始化完成。");
  }
  createAxiosInstance(e) {
    let t = f.create(e);
    return t.interceptors.response = f.interceptors.response, t.interceptors.request = f.interceptors.request, console.log("axios instance created"), t;
  }
}
class P {
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
class I extends P {
  constructor() {
    super(...arguments);
    n(this, "data", []);
  }
}
class Q extends I {
  constructor() {
    super(...arguments);
    n(this, "status", null);
    n(this, "total", 0);
  }
}
const z = (s) => s instanceof FormData ? new FormData() : s instanceof URLSearchParams ? new URLSearchParams() : T(s) ? [] : y(s) ? {} : s, m = (...s) => {
  if (s.length <= 0)
    return null;
  if (T(s[s.length - 1]))
    return s[s.length - 1];
  let e = z(s[s.length - 1]);
  for (let t = 0; t < s.length; t++) {
    let a = s[t] || {};
    if (e instanceof FormData || e instanceof URLSearchParams || y(e)) {
      if (a instanceof FormData)
        a.forEach((r, l) => {
          e instanceof FormData || e instanceof URLSearchParams ? e.append(l, r) : e[l] = r;
        });
      else if (a instanceof URLSearchParams)
        a.forEach((r, l) => {
          e instanceof FormData || e instanceof URLSearchParams ? e.append(l, r) : e[l] = r;
        });
      else if (y(a)) {
        let r = Object.keys(a);
        if (e instanceof FormData || e instanceof URLSearchParams)
          r.forEach((l) => {
            e.append(l, a[l]);
          });
        else {
          let l = JSON.parse(JSON.stringify(a));
          r.forEach((c) => {
            e[c] = l[c];
          });
        }
      }
    }
  }
  return e;
};
class q {
  constructor(e, t) {
    n(this, "controller", new AbortController());
    n(this, "instance");
    n(this, "url", "");
    n(this, "loading", !1);
    n(this, "data", {});
    n(this, "params", {});
    n(this, "response", new P());
    n(this, "defaultResponse", new P());
    n(this, "defaultRequestParams", {});
    n(this, "defaultRequestData", {});
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
      this.loading = !0, e.data = this.data = m(this.defaultRequestData, this.data, e.data), e.params = this.params = e.params = m(this.defaultRequestParams, this.params, e.params), e.url = e.url ? e.url : this.url, this.initOptions(e), this.response = JSON.parse(JSON.stringify(this.defaultResponse)), this.instance.request(e).then((r) => {
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
  setDefaultResponse(e = {}) {
    return this.defaultResponse = e, this.response = JSON.parse(JSON.stringify(this.defaultResponse)), this;
  }
  mergeDefaultResponse(e = {}) {
    return this.defaultResponse = i(this.defaultResponse, e || {}, {}), this.response = JSON.parse(JSON.stringify(this.defaultResponse)), this;
  }
  setDefaultRequestData(e = {}) {
    return this.defaultRequestData = e, this.data = JSON.parse(JSON.stringify(this.defaultRequestData)), this;
  }
  mergeDefaultRequestData(e = {}) {
    return i(this.defaultRequestData, e || {}), this.data = JSON.parse(JSON.stringify(this.defaultRequestData)), this;
  }
  setDefaultResultParams(e = {}) {
    return this.defaultRequestParams = e, this.params = JSON.parse(JSON.stringify(this.defaultRequestParams)), this;
  }
  handleThenResponse(e, t) {
    var a;
    this.response = i({}, this.defaultResponse, t.data), this.response.total && (this.data.total = this.response.total), this.response.page && (this.data.page = ((a = this.response) == null ? void 0 : a.page) - (this.data.pageOffset || 0)), this.response.size && (this.data.size = this.response.size), e(this.response);
  }
  handleCatchResponse(e, t) {
    if (console.error("远程请求发生异常：", t), t.response)
      this.response = i({}, this.defaultResponse, t.response.data), e(this.response);
    else {
      let a = { success: !1, result: "远程请求发生异常！" };
      this.response = i({}, this.defaultResponse, a), e(this.response);
    }
  }
}
class K extends q {
  constructor(e, t) {
    super(e, t);
  }
  execute(e = {}, t = {}) {
    return this.loading = !0, this.params = t.params = m(this.defaultRequestParams, this.params, t.params, e), this.initOptions(t), this.response = JSON.parse(JSON.stringify(this.defaultResponse)), new Promise((a, r) => {
      this.instance.get(t.url || this.url, t).then((l) => {
        try {
          this.handleThenResponse(a, l);
        } finally {
          this.loading = !1;
        }
      }).catch((l) => {
        try {
          this.handleCatchResponse(r, l);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
}
class J extends q {
  constructor(e, t) {
    super(e, t);
  }
  execute(e = {}, t = {}, a = {}) {
    return this.loading = !0, this.data = m(this.defaultRequestData, this.data, a.data, e), this.params = a.params = m(this.defaultRequestParams, this.params, a.params, t), this.initOptions(a), this.response = JSON.parse(JSON.stringify(this.defaultResponse)), new Promise((r, l) => {
      this.instance.post(a.url || this.url, this.data, a).then((c) => {
        try {
          this.handleThenResponse(r, c), r(c.data);
        } finally {
          this.loading = !1;
        }
      }).catch((c) => {
        try {
          this.handleCatchResponse(l, c);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
}
class O extends J {
  constructor(e, t) {
    super(e, t), this.setDefaultResponse(new I()), this.setDefaultRequestData(new N());
  }
}
class B extends O {
  constructor(e, t) {
    super(e, t), this.setDefaultResponse(new Q()), this.setDefaultRequestData(new F());
  }
}
const o = class extends v {
  constructor(e = {}) {
    super(e);
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createRequestExecutor(e = "", t = {}) {
    let a = this.createAxiosInstance(t);
    return p(new q(a, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createGetExecutor(e = "", t = {}) {
    let a = i({
      method: d.GET,
      data: null,
      params: null,
      headers: { "Content-Type": u["application/x-www-form-urlencoded"] }
    }, t), r = this.createAxiosInstance(a);
    return p(new K(r, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createQueryExecutor(e = "", t = {}) {
    let a = i({
      method: d.GET,
      data: null,
      params: null,
      headers: { "Content-Type": u["application/x-www-form-urlencoded"] }
    }, t), r = this.createAxiosInstance(a);
    return p(new O(r, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPageableQueryExecutor(e = "", t = {}) {
    let a = i({
      method: d.GET,
      data: null,
      params: null,
      headers: { "Content-Type": u["application/x-www-form-urlencoded"] }
    }, t), r = this.createAxiosInstance(a);
    return p(new B(r, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPostExecutor(e = "", t = {}) {
    let a = i({
      method: d.POST,
      data: null,
      params: null,
      headers: { "Content-Type": u["multipart/form-data"] }
    }, t), r = this.createAxiosInstance(a);
    return p(new J(r, e));
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
let R = o;
n(R, "instance");
export {
  V as Condition,
  F as DefaultPageableQueryRequestData,
  Q as DefaultPageableQueryResponse,
  N as DefaultQueryRequestData,
  P as DefaultResponse,
  G as EConditionOpt,
  E as EOrderDirection,
  q as Executor,
  K as GetExecutor,
  R as HttpClient,
  u as HttpContentType,
  d as HttpMethod,
  b as Join,
  D as Order,
  B as PageableQueryExecutor,
  J as PostExecutor,
  O as QueryExecutor,
  m as mergeDataOrParams
};
//# sourceMappingURL=index.js.map
