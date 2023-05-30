var U = Object.defineProperty;
var j = (s, e, t) => e in s ? U(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var r = (s, e, t) => (j(s, typeof e != "symbol" ? e + "" : e, t), t);
import g from "axios";
import { reactive as h } from "vue";
class L {
  constructor(e = {}) {
    r(this, "defaultAxiosInstance", g.create());
    this.defaultAxiosInstance = g.create(e || {}), this.defaultAxiosInstance.interceptors.response = g.interceptors.response, this.defaultAxiosInstance.interceptors.request = g.interceptors.request;
  }
}
const k = Object.prototype.toString, N = ((s) => (e) => {
  let t = k.call(e);
  return s[t] || (s[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), c = (s) => (s = s.toLowerCase(), function(e) {
  return N(e) === s;
}), w = (s) => Array.isArray(s);
c("ArrayBuffer");
const F = (s) => s != null && typeof s == "object" && Array.isArray(s) === !1, R = (s) => {
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
}, P = function(...s) {
  let e = arguments[0], t = (a, n) => {
    R(e[n]) && R(a) ? e[n] = P(e[n], a) : R(a) ? e[n] = P({}, a) : w(a) ? e[n] = a.slice() : e[n] = a;
  };
  for (let a = 0, n = arguments.length; a < n; a++)
    E(arguments[a], t);
  return e;
}, i = P, x = F, T = w;
class b {
  constructor() {
    r(this, "order", new q("id", "ascending"));
    r(this, "queryProperties", ["id"]);
  }
}
class v extends b {
  constructor(t = 1, a = 10, n = -1) {
    super();
    r(this, "size", 10);
    r(this, "page", 1);
    r(this, "pageOffset", -1);
    this.page = t, this.size = a, this.pageOffset = n;
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
class A {
  constructor(e, t, a) {
    r(this, "property", null);
    r(this, "joinType", null);
    r(this, "on", null);
    this.property = e || this.property, this.joinType = t || this.joinType, this.on = a || this.on;
  }
  of(e, t, a) {
    return new A(e, t, a);
  }
}
class q {
  constructor(e, t) {
    r(this, "prop", null);
    r(this, "order", "ascending");
    this.prop = e, this.order = t;
  }
  of(e, t = "asc") {
    return new q(e, t);
  }
}
class Y {
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
var G = /* @__PURE__ */ ((s) => (s.Asc = "asc", s.Desc = "desc", s))(G || {}), Q = /* @__PURE__ */ ((s) => (s.equals = "equals", s.eq = "eq", s.ge = "ge", s.gt = "gt", s.lt = "lt", s.le = "le", s.ne = "ne", s.notlike = "notlike", s.like = "like", s["like:"] = "like:", s[":like"] = ":like", s[":like:"] = ":like:", s.lk = "like", s["lk:"] = "like:", s[":lk"] = ":like", s[":lk:"] = ":like:", s.between = "between", s.btw = "btw", s.isnull = "isnull", s.isnotnull = "isnotnull", s.isempty = "isempty", s.isnotempty = "isnotempty", s.in = "in", s.notin = "notin", s))(Q || {}), o = /* @__PURE__ */ ((s) => (s["application/atom+xml"] = "application/atom+xml", s["application/json"] = "application/json", s["application/x-www-form-urlencoded"] = "application/x-www-form-urlencoded", s["application/xml"] = "application/xml", s["multipart/form-data"] = "multipart/form-data", s["text/html"] = "text/html", s["text/plain"] = "text/plain", s))(o || {}), f = /* @__PURE__ */ ((s) => (s.POST = "POST", s.GET = "GET", s.DELETE = "DELETE", s.HEAD = "HEAD", s.OPTIONS = "OPTIONS", s.PUT = "PUT", s.PATCH = "PATCH", s.PURGE = "PURGE", s.LINK = "LINK", s.UNLINK = "UNLINK", s))(f || {});
class D {
  constructor() {
    r(this, "success", !1);
    r(this, "data", null);
    r(this, "errors", []);
    r(this, "exception", null);
    r(this, "extendedData", null);
    r(this, "messages", []);
    r(this, "result", null);
    r(this, "status", null);
    r(this, "progressEvent", { progress: 0 });
  }
}
class I extends D {
  constructor() {
    super(...arguments);
    r(this, "data", []);
  }
}
class z extends I {
  constructor() {
    super(...arguments);
    r(this, "status", null);
    r(this, "total", 0);
  }
}
const K = (s) => s instanceof FormData ? new FormData() : s instanceof URLSearchParams ? new URLSearchParams() : T(s) ? [] : x(s) ? {} : s, p = (...s) => {
  if (s.length <= 0)
    return null;
  if (T(s[s.length - 1]))
    return s[s.length - 1];
  let e = K(s[s.length - 1]);
  for (let t = 0; t < s.length; t++) {
    let a = s[t] || {};
    if (e instanceof FormData || e instanceof URLSearchParams || x(e)) {
      if (a instanceof FormData)
        a.forEach((n, l) => {
          e instanceof FormData || e instanceof URLSearchParams ? e.append(l, n) : e[l] = n;
        });
      else if (a instanceof URLSearchParams)
        a.forEach((n, l) => {
          e instanceof FormData || e instanceof URLSearchParams ? e.append(l, n) : e[l] = n;
        });
      else if (x(a)) {
        let n = Object.keys(a);
        if (e instanceof FormData || e instanceof URLSearchParams)
          n.forEach((l) => {
            e.append(l, a[l]);
          });
        else {
          let l = JSON.parse(JSON.stringify(a));
          n.forEach((d) => {
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
    r(this, "controller", new AbortController());
    r(this, "instance");
    r(this, "options", {});
    r(this, "url", "");
    r(this, "loading", !1);
    r(this, "data", {});
    r(this, "params", {});
    r(this, "response", new D());
    r(this, "defaultResponse", new D());
    r(this, "defaultRequestParams", {});
    r(this, "defaultRequestData", {});
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
      this.loading = !0, e = i({}, this.options || {}, e || {}), e.data = p(this.defaultRequestData, this.data, e.data), e.params = e.params = p(this.defaultRequestParams, this.params, e.params), e.url = e.url ? e.url : this.url, this.initOptions(e), this.response = JSON.parse(JSON.stringify(this.defaultResponse)), this.instance.request(e).then((n) => {
        try {
          this.handleThenResponse(t, n);
        } finally {
          this.loading = !1;
        }
      }).catch((n) => {
        try {
          this.handleCatchResponse(a, n);
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
class B extends S {
  constructor(e, t, a = {}) {
    super(e, t, a);
  }
  execute(e = {}, t = {}) {
    return this.loading = !0, t = i({}, this.options || {}, t || {}), t.params = p(this.defaultRequestParams, this.params, t.params, e), this.initOptions(t), this.response = JSON.parse(JSON.stringify(this.defaultResponse)), new Promise((a, n) => {
      this.instance.get(t.url || this.url, t).then((l) => {
        try {
          this.handleThenResponse(a, l);
        } finally {
          this.loading = !1;
        }
      }).catch((l) => {
        try {
          this.handleCatchResponse(n, l);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
}
class O extends S {
  constructor(e, t, a = {}) {
    super(e, t, a);
  }
  execute(e = {}, t = {}, a = {}) {
    this.loading = !0, a = i({}, this.options || {}, a || {});
    let n = p(this.defaultRequestData, this.data, a.data, e);
    return a.params = p(this.defaultRequestParams, this.params, a.params, t), this.initOptions(a), this.response = JSON.parse(JSON.stringify(this.defaultResponse)), new Promise((l, d) => {
      this.instance.post(a.url || this.url, n, a).then((m) => {
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
class J extends O {
  constructor(e, t, a = {}) {
    super(e, t, a), this.setDefaultResponse(new I()), this.setDefaultRequestData(new b());
  }
}
class $ extends J {
  constructor(e, t, a = {}) {
    super(e, t, a), this.setDefaultResponse(new z()), this.setDefaultRequestData(new v());
  }
}
const u = class extends L {
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
    return h(new B(this.defaultAxiosInstance, e, a));
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
    return h(new O(this.defaultAxiosInstance, e, a));
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
      do(e, t = {}, a = {}, n = {}) {
        return u.getInstance().createPostExecutor(e, n).execute(t, a);
      },
      multipartFormData(e, t = {}, a = {}, n = {}) {
        return u.getInstance().createPostExecutor(e, n).toFormDataRequest().execute(t, a);
      },
      form(e, t = {}, a = {}, n = {}) {
        return u.getInstance().createPostExecutor(e, n).toFormRequest().execute(t, a);
      },
      json(e, t = {}, a = {}, n = {}) {
        return u.getInstance().createPostExecutor(e, n).toJsonRequest().execute(t, a);
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
let y = u;
r(y, "instance");
export {
  Y as Condition,
  v as DefaultPageableQueryRequestData,
  z as DefaultPageableQueryResponse,
  b as DefaultQueryRequestData,
  D as DefaultResponse,
  Q as EConditionOpt,
  G as EOrderDirection,
  S as Executor,
  B as GetExecutor,
  y as HttpClient,
  o as HttpContentType,
  f as HttpMethod,
  A as Join,
  q as Order,
  $ as PageableQueryExecutor,
  O as PostExecutor,
  J as QueryExecutor,
  p as mergeDataOrParams
};
//# sourceMappingURL=index.js.map
