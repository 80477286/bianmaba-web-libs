var U = Object.defineProperty;
var j = (s, e, t) => e in s ? U(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var n = (s, e, t) => (j(s, typeof e != "symbol" ? e + "" : e, t), t);
import g from "axios";
import { reactive as h } from "vue";
class k {
  constructor(e = {}) {
    n(this, "defaultAxiosInstance");
    this.defaultAxiosInstance = g.create(e || {}), console.log("create axios:", this.defaultAxiosInstance), this.defaultAxiosInstance.interceptors.response = g.interceptors.response, this.defaultAxiosInstance.interceptors.request = g.interceptors.request;
  }
  /**
   * 初始化默认能数
   * @param options
   */
  static defaults(e) {
    e(g);
  }
}
const L = Object.prototype.toString, N = ((s) => (e) => {
  let t = L.call(e);
  return s[t] || (s[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), c = (s) => (s = s.toLowerCase(), function(e) {
  return N(e) === s;
}), w = (s) => Array.isArray(s);
c("ArrayBuffer");
const F = (s) => s != null && typeof s == "object" && Array.isArray(s) === !1, x = (s) => {
  if (N(s) !== "object")
    return !1;
  let e = Object.getPrototypeOf(s);
  return e === null || e === Object.prototype;
};
c("Date");
c("File");
c("Blob");
c("FileList");
c("URLSearchParams");
const E = (s, e) => {
  if (!(s === null || typeof s > "u"))
    if (typeof s != "object" && (s = [s]), w(s))
      for (let t = 0, a = s.length; t < a; t++)
        e.call(null, s[t], t, s);
    else
      for (let t in s)
        Object.prototype.hasOwnProperty.call(s, t) && e.call(null, s[t], t, s);
}, y = function(...s) {
  let e = arguments[0], t = (a, r) => {
    x(e[r]) && x(a) ? e[r] = y(e[r], a) : x(a) ? e[r] = y({}, a) : w(a) ? e[r] = a.slice() : e[r] = a;
  };
  for (let a = 0, r = arguments.length; a < r; a++)
    E(arguments[a], t);
  return e;
}, i = y, P = F, O = w;
class T {
  constructor() {
    n(this, "order", new q("id", "ascending"));
    n(this, "queryProperties", ["id"]);
  }
}
class v extends T {
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
class q {
  constructor(e, t) {
    n(this, "prop", null);
    n(this, "order", "ascending");
    this.prop = e, this.order = t;
  }
  of(e, t = "asc") {
    return new q(e, t);
  }
}
class Y {
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
var G = /* @__PURE__ */ ((s) => (s.Asc = "asc", s.Desc = "desc", s))(G || {}), Q = /* @__PURE__ */ ((s) => (s.equals = "equals", s.eq = "eq", s.ge = "ge", s.gt = "gt", s.lt = "lt", s.le = "le", s.ne = "ne", s.notlike = "notlike", s.like = "like", s["like:"] = "like:", s[":like"] = ":like", s[":like:"] = ":like:", s.lk = "like", s["lk:"] = "like:", s[":lk"] = ":like", s[":lk:"] = ":like:", s.between = "between", s.btw = "btw", s.isnull = "isnull", s.isnotnull = "isnotnull", s.isempty = "isempty", s.isnotempty = "isnotempty", s.in = "in", s.notin = "notin", s))(Q || {}), o = /* @__PURE__ */ ((s) => (s["application/atom+xml"] = "application/atom+xml", s["application/json"] = "application/json", s["application/x-www-form-urlencoded"] = "application/x-www-form-urlencoded", s["application/xml"] = "application/xml", s["multipart/form-data"] = "multipart/form-data", s["text/html"] = "text/html", s["text/plain"] = "text/plain", s))(o || {}), f = /* @__PURE__ */ ((s) => (s.POST = "POST", s.GET = "GET", s.DELETE = "DELETE", s.HEAD = "HEAD", s.OPTIONS = "OPTIONS", s.PUT = "PUT", s.PATCH = "PATCH", s.PURGE = "PURGE", s.LINK = "LINK", s.UNLINK = "UNLINK", s))(f || {});
class D {
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
class A extends D {
  constructor() {
    super(...arguments);
    n(this, "data", []);
  }
}
class z extends A {
  constructor() {
    super(...arguments);
    n(this, "status", null);
    n(this, "total", 0);
  }
}
const B = (s) => s instanceof FormData ? new FormData() : s instanceof URLSearchParams ? new URLSearchParams() : O(s) ? [] : P(s) ? {} : s, p = (...s) => {
  if (s.length <= 0)
    return null;
  if (O(s[s.length - 1]))
    return s[s.length - 1];
  let e = B(s[s.length - 1]);
  for (let t = 0; t < s.length; t++) {
    let a = s[t] || {};
    if (e instanceof FormData || e instanceof URLSearchParams || P(e)) {
      if (a instanceof FormData)
        a.forEach((r, l) => {
          e instanceof FormData || e instanceof URLSearchParams ? e.append(l, r) : e[l] = r;
        });
      else if (a instanceof URLSearchParams)
        a.forEach((r, l) => {
          e instanceof FormData || e instanceof URLSearchParams ? e.append(l, r) : e[l] = r;
        });
      else if (P(a)) {
        let r = Object.keys(a);
        if (e instanceof FormData || e instanceof URLSearchParams)
          r.forEach((l) => {
            e.append(l, a[l]);
          });
        else {
          let l = JSON.parse(JSON.stringify(a));
          r.forEach((d) => {
            e[d] = l[d];
          });
        }
      }
    }
  }
  return e;
};
class S {
  constructor(e, t, a = {}) {
    n(this, "controller", new AbortController());
    n(this, "instance");
    n(this, "options", {});
    n(this, "url", "");
    n(this, "loading", !1);
    n(this, "data", {});
    n(this, "params", {});
    n(this, "response", new D());
    n(this, "defaultResponse", new D());
    n(this, "defaultRequestParams", {});
    n(this, "defaultRequestData", {});
    this.instance = e, this.url = t || this.url, this.options = a;
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
      this.loading = !0, e = i({}, this.options || {}, e || {}), e.data = p(this.defaultRequestData, this.data, e.data), e.params = e.params = p(this.defaultRequestParams, this.params, e.params), e.url = e.url ? e.url : this.url, this.initOptions(e), this.response = JSON.parse(JSON.stringify(this.defaultResponse)), this.instance.request(e).then((r) => {
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
    return i(this.options, { headers: { "Content-Type": o["application/json"] } }), this;
  }
  /**
   * 将执行器请求方式设置为：application/x-www-form-urlencoded
   */
  toFormRequest() {
    return i(this.options, { headers: { "Content-Type": o["application/x-www-form-urlencoded"] } }), this;
  }
  /**
   * 将执行器请求方式设置为：multipart/form-data
   */
  toFormDataRequest() {
    return i(this.options, { headers: { "Content-Type": o["multipart/form-data"] } }), this;
  }
  setDefaultResponse(e = {}) {
    return this.defaultResponse = e, this.response = JSON.parse(JSON.stringify(this.defaultResponse)), this;
  }
  mergeDefaultResponse(e = {}) {
    return i(this.defaultResponse, e || {}, {}), this.response = JSON.parse(JSON.stringify(this.defaultResponse)), this;
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
    var r;
    this.response = i({}, this.defaultResponse, t.data);
    let a = Object.keys(this.response);
    a.indexOf("total") > -1 && (this.data.total = this.response.total), a.indexOf("page") > -1 && (this.data.page = ((r = this.response) == null ? void 0 : r.page) - (this.data.pageOffset || 0)), a.indexOf("size") > -1 && (this.data.size = this.response.size), e(this.response);
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
class K extends S {
  constructor(e, t, a = {}) {
    super(e, t, a);
  }
  execute(e = {}, t = {}) {
    return this.loading = !0, t = i({}, this.options || {}, t || {}), t.params = p(this.defaultRequestParams, this.params, t.params, e), this.initOptions(t), this.response = JSON.parse(JSON.stringify(this.defaultResponse)), new Promise((a, r) => {
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
class I extends S {
  constructor(e, t, a = {}) {
    super(e, t, a);
  }
  execute(e = {}, t = {}, a = {}) {
    this.loading = !0, a = i({}, this.options || {}, a || {});
    let r = p(this.defaultRequestData, this.data, a.data, e);
    return a.params = p(this.defaultRequestParams, this.params, a.params, t), this.initOptions(a), this.response = JSON.parse(JSON.stringify(this.defaultResponse)), new Promise((l, d) => {
      this.instance.post(a.url || this.url, r, a).then((m) => {
        try {
          this.handleThenResponse(l, m), l(m.data);
        } finally {
          this.loading = !1;
        }
      }).catch((m) => {
        try {
          this.handleCatchResponse(d, m);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
}
class J extends I {
  constructor(e, t, a = {}) {
    super(e, t, a), this.setDefaultResponse(new A()), this.setDefaultRequestData(new T());
  }
}
class $ extends J {
  constructor(e, t, a = {}) {
    super(e, t, a), this.setDefaultResponse(new z()), this.setDefaultRequestData(new v());
  }
}
const u = class extends k {
  constructor(e = {}) {
    super(e);
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createRequestExecutor(e = "", t = {}) {
    return h(new S(this.defaultAxiosInstance, e, t));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createGetExecutor(e = "", t = {}) {
    let a = i({
      method: f.GET,
      headers: { "Content-Type": o["application/x-www-form-urlencoded"] }
    }, t);
    return h(new K(this.defaultAxiosInstance, e, a));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createQueryExecutor(e = "", t = {}) {
    let a = i({
      method: f.POST,
      headers: { "Content-Type": o["application/json"] }
    }, t);
    return h(new J(this.defaultAxiosInstance, e, a));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPageableQueryExecutor(e = "", t = {}) {
    let a = i({
      method: f.POST,
      headers: { "Content-Type": o["application/json"] }
    }, t);
    return h(new $(this.defaultAxiosInstance, e, a));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPostExecutor(e = "", t = {}) {
    let a = i({
      method: f.POST,
      headers: { "Content-Type": o["multipart/form-data"] }
    }, t);
    return h(new I(this.defaultAxiosInstance, e, a));
  }
  /**
   * 获取HttpClient实例（单例模式），首将获取时会根据参数初始化实例，后续再获取时参数将不会生效，而是直接返回已经存在的实例
   * @param options
   */
  static getInstance(e) {
    return this.instance ? e && console.error("实例已经存在，重获取实例时，配置选项将不会生效！") : this.instance = new u(e), this.instance;
  }
  static post() {
    return {
      do(e, t = {}, a = {}, r = {}) {
        return u.getInstance().createPostExecutor(e, r).execute(t, a);
      },
      multipartFormData(e, t = {}, a = {}, r = {}) {
        return u.getInstance().createPostExecutor(e, r).toFormDataRequest().execute(t, a);
      },
      form(e, t = {}, a = {}, r = {}) {
        return u.getInstance().createPostExecutor(e, r).toFormRequest().execute(t, a);
      },
      json(e, t = {}, a = {}, r = {}) {
        return u.getInstance().createPostExecutor(e, r).toJsonRequest().execute(t, a);
      }
    };
  }
  static get() {
    return {
      do(e, t = {}, a = {}) {
        return u.getInstance().createGetExecutor(e, a).execute(t);
      }
    };
  }
};
let R = u;
n(R, "instance");
export {
  Y as Condition,
  v as DefaultPageableQueryRequestData,
  z as DefaultPageableQueryResponse,
  T as DefaultQueryRequestData,
  D as DefaultResponse,
  Q as EConditionOpt,
  G as EOrderDirection,
  S as Executor,
  K as GetExecutor,
  R as HttpClient,
  o as HttpContentType,
  f as HttpMethod,
  b as Join,
  q as Order,
  $ as PageableQueryExecutor,
  I as PostExecutor,
  J as QueryExecutor,
  p as mergeDataOrParams
};
//# sourceMappingURL=index.js.map
