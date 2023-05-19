var L = Object.defineProperty;
var S = (s, e, t) => e in s ? L(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var n = (s, e, t) => (S(s, typeof e != "symbol" ? e + "" : e, t), t);
import f from "axios";
import { reactive as p } from "vue";
const j = Object.prototype.toString, b = ((s) => (e) => {
  let t = j.call(e);
  return s[t] || (s[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), h = (s) => (s = s.toLowerCase(), function(e) {
  return b(e) === s;
}), D = (s) => Array.isArray(s);
h("ArrayBuffer");
const k = (s) => s != null && typeof s == "object" && Array.isArray(s) === !1, x = (s) => {
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
const E = (s, e) => {
  if (!(s === null || typeof s > "u"))
    if (typeof s != "object" && (s = [s]), D(s))
      for (let t = 0, a = s.length; t < a; t++)
        e.call(null, s[t], t, s);
    else
      for (let t in s)
        Object.prototype.hasOwnProperty.call(s, t) && e.call(null, s[t], t, s);
}, P = function(...s) {
  let e = arguments[0], t = (a, r) => {
    x(e[r]) && x(a) ? e[r] = P(e[r], a) : x(a) ? e[r] = P({}, a) : D(a) ? e[r] = a.slice() : e[r] = a;
  };
  for (let a = 0, r = arguments.length; a < r; a++)
    E(arguments[a], t);
  return e;
}, u = P, w = k, F = D;
class y {
  constructor() {
    n(this, "order", new q("id", "asc"));
    n(this, "queryProperties", ["id"]);
  }
}
class G extends y {
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
class I {
  constructor(e, t, a) {
    n(this, "property", null);
    n(this, "joinType", null);
    n(this, "on", null);
    this.property = e || this.property, this.joinType = t || this.joinType, this.on = a || this.on;
  }
  of(e, t, a) {
    return new I(e, t, a);
  }
}
class q {
  constructor(e, t) {
    n(this, "property", null);
    n(this, "direction", "asc");
    this.property = e, this.direction = t;
  }
  of(e, t = "asc") {
    return new q(e, t);
  }
}
class $ {
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
var N = /* @__PURE__ */ ((s) => (s.Asc = "asc", s.Desc = "desc", s))(N || {}), v = /* @__PURE__ */ ((s) => (s.equals = "equals", s.eq = "eq", s.ge = "ge", s.gt = "gt", s.lt = "lt", s.le = "le", s.ne = "ne", s.notlike = "notlike", s.like = "like", s["like:"] = "like:", s[":like"] = ":like", s[":like:"] = ":like:", s.lk = "like", s["lk:"] = "like:", s[":lk"] = ":like", s[":lk:"] = ":like:", s.between = "between", s.btw = "btw", s.isnull = "isnull", s.isnotnull = "isnotnull", s.isempty = "isempty", s.isnotempty = "isnotempty", s.in = "in", s.notin = "notin", s))(v || {}), i = /* @__PURE__ */ ((s) => (s["application/atom+xml"] = "application/atom+xml", s["application/json"] = "application/json", s["application/x-www-form-urlencoded"] = "application/x-www-form-urlencoded", s["application/xml"] = "application/xml", s["multipart/form-data"] = "multipart/form-data", s["text/html"] = "text/html", s["text/plain"] = "text/plain", s))(i || {}), d = /* @__PURE__ */ ((s) => (s.POST = "POST", s.GET = "GET", s.DELETE = "DELETE", s.HEAD = "HEAD", s.OPTIONS = "OPTIONS", s.PUT = "PUT", s.PATCH = "PATCH", s.PURGE = "PURGE", s.LINK = "LINK", s.UNLINK = "UNLINK", s))(d || {});
class z {
  constructor(e = {}) {
    f.defaults = u(f.defaults || {}, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": i["application/json"]
      }
    }, e), console.debug("初始化全局配置..."), console.debug("全局配置初始化完成。");
  }
  createAxiosInstance(e) {
    let t = f.create(e);
    return t.interceptors.response = f.interceptors.response, t.interceptors.request = f.interceptors.request, console.log("axios instance created"), t;
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
const J = (s) => s instanceof FormData ? new FormData() : s instanceof URLSearchParams ? new URLSearchParams() : F(s) ? [] : w(s) ? {} : s, g = (...s) => {
  if (s.length <= 0)
    return null;
  let e = J(s[s.length - 1]);
  for (let t = 0; t < s.length; t++) {
    let a = s[t] || {};
    if (e instanceof FormData || e instanceof URLSearchParams || w(e)) {
      if (a instanceof FormData)
        a.forEach((r, l) => {
          e instanceof FormData || e instanceof URLSearchParams ? e.append(l, r) : e[l] = r;
        });
      else if (a instanceof URLSearchParams)
        a.forEach((r, l) => {
          e instanceof FormData || e instanceof URLSearchParams ? e.append(l, r) : e[l] = r;
        });
      else if (w(a)) {
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
class T {
  constructor(e, t) {
    n(this, "controller", new AbortController());
    n(this, "instance");
    n(this, "url", "");
    n(this, "loading", !1);
    n(this, "data", {});
    n(this, "params", {});
    n(this, "response", new m());
    n(this, "defaultResponse", new m());
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
      this.loading = !0, e.data = this.data = g(this.defaultRequestData, this.data, e.data), e.params = this.params = e.params = g(this.defaultRequestParams, this.params, e.params), e.url = e.url ? e.url : this.url, this.initOptions(e), this.instance.request(e).then((r) => {
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
    return this.defaultResponse = e, this;
  }
  mergeDefaultResponse(e = new m()) {
    return this.defaultResponse = u(this.defaultResponse, e, {}), this;
  }
  setDefaultRequestData(e = {}) {
    return this.defaultRequestData = e, this;
  }
  mergeDefaultRequestData(e = {}) {
    return u(this.defaultRequestData, e), this;
  }
  setDefaultResultParams(e = {}) {
    return this.defaultRequestParams = e, this;
  }
  handleThenResponse(e, t) {
    this.response = u({}, this.defaultResponse, t.data), this.response.total && (this.data.total = this.response.total), this.response.page && (this.data.page = this.response.page - (this.data.pageOffset || 0)), this.response.size && (this.data.size = this.response.size), e(this.response);
  }
  handleCatchResponse(e, t) {
    if (console.error("远程请求发生异常：", t), t.response)
      this.response = u({}, this.defaultResponse, t.response.data), e(this.response);
    else {
      let a = { success: !1, result: "远程请求发生异常！" };
      this.response = u({}, this.defaultResponse, a), e(this.response);
    }
  }
}
class K extends T {
  constructor(e, t) {
    super(e, t);
  }
  execute(e = {}, t = {}) {
    return this.loading = !0, this.params = t.params = g(this.defaultRequestParams, this.params, t.params, e), this.initOptions(t), new Promise((a, r) => {
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
class A extends T {
  constructor(e, t) {
    super(e, t);
  }
  execute(e = {}, t = {}, a = {}) {
    return this.loading = !0, this.data = g(this.defaultRequestData, this.data, a.data, e), this.params = a.params = g(this.defaultRequestParams, this.params, a.params, t), this.initOptions(a), new Promise((r, l) => {
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
class U extends A {
  constructor(e, t) {
    super(e, t), this.setDefaultResponse(new y()), this.setDefaultRequestData(new y());
  }
}
class O extends U {
  constructor(e, t) {
    super(e, t), this.setDefaultResponse(new Q()), this.setDefaultRequestData(new G());
  }
}
const o = class extends z {
  constructor(e = {}) {
    super(e);
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createRequestExecutor(e = "", t = {}) {
    let a = this.createAxiosInstance(t);
    return p(new T(a, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createGetExecutor(e = "", t = {}) {
    let a = u({
      method: d.GET,
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
      method: d.GET,
      data: null,
      params: null,
      headers: { "Content-Type": i["application/x-www-form-urlencoded"] }
    }, t), r = this.createAxiosInstance(a);
    return p(new U(r, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPageableQueryExecutor(e = "", t = {}) {
    let a = u({
      method: d.GET,
      data: null,
      params: null,
      headers: { "Content-Type": i["application/x-www-form-urlencoded"] }
    }, t), r = this.createAxiosInstance(a);
    return p(new O(r, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPostExecutor(e = "", t = {}) {
    let a = u({
      method: d.POST,
      data: null,
      params: null,
      headers: { "Content-Type": i["multipart/form-data"] }
    }, t), r = this.createAxiosInstance(a);
    return p(new A(r, e));
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
  $ as Condition,
  G as DefaultPageableQueryRequestData,
  Q as DefaultPageableQueryResponse,
  y as DefaultQueryRequestData,
  m as DefaultResponse,
  v as EConditionOpt,
  N as EOrderDirection,
  T as Executor,
  K as GetExecutor,
  R as HttpClient,
  i as HttpContentType,
  d as HttpMethod,
  I as Join,
  q as Order,
  O as PageableQueryExecutor,
  A as PostExecutor,
  U as QueryExecutor,
  g as mergeDataOrParams
};
//# sourceMappingURL=index.js.map
