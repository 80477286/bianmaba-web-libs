var S = Object.defineProperty;
var j = (t, e, s) => e in t ? S(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var n = (t, e, s) => (j(t, typeof e != "symbol" ? e + "" : e, s), s);
import d from "axios";
import { reactive as m } from "vue";
const k = Object.prototype.toString, T = ((t) => (e) => {
  let s = k.call(e);
  return t[s] || (t[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), p = (t) => (t = t.toLowerCase(), function(e) {
  return T(e) === t;
}), D = (t) => Array.isArray(t);
p("ArrayBuffer");
const E = (t) => t != null && typeof t == "object" && Array.isArray(t) === !1, x = (t) => {
  if (T(t) !== "object")
    return !1;
  let e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
};
p("Date");
p("File");
p("Blob");
p("FileList");
p("URLSearchParams");
const F = (t, e) => {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), D(t))
      for (let s = 0, a = t.length; s < a; s++)
        e.call(null, t[s], s, t);
    else
      for (let s in t)
        Object.prototype.hasOwnProperty.call(t, s) && e.call(null, t[s], s, t);
}, R = function(...t) {
  let e = arguments[0], s = (a, r) => {
    x(e[r]) && x(a) ? e[r] = R(e[r], a) : x(a) ? e[r] = R({}, a) : D(a) ? e[r] = a.slice() : e[r] = a;
  };
  for (let a = 0, r = arguments.length; a < r; a++)
    F(arguments[a], s);
  return e;
}, u = R, w = E, G = D;
class b {
  constructor() {
    n(this, "order", new y("id", "asc"));
    n(this, "queryProperties", ["id"]);
  }
}
class N extends b {
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
class y {
  constructor(e, s) {
    n(this, "property", null);
    n(this, "direction", "asc");
    this.property = e, this.direction = s;
  }
  of(e, s = "asc") {
    return new y(e, s);
  }
}
class $ {
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
var v = /* @__PURE__ */ ((t) => (t.Asc = "asc", t.Desc = "desc", t))(v || {}), Q = /* @__PURE__ */ ((t) => (t.equals = "equals", t.eq = "eq", t.ge = "ge", t.gt = "gt", t.lt = "lt", t.le = "le", t.ne = "ne", t.notlike = "notlike", t.like = "like", t["like:"] = "like:", t[":like"] = ":like", t[":like:"] = ":like:", t.lk = "like", t["lk:"] = "like:", t[":lk"] = ":like", t[":lk:"] = ":like:", t.between = "between", t.btw = "btw", t.isnull = "isnull", t.isnotnull = "isnotnull", t.isempty = "isempty", t.isnotempty = "isnotempty", t.in = "in", t.notin = "notin", t))(Q || {}), c = /* @__PURE__ */ ((t) => (t["application/atom+xml"] = "application/atom+xml", t["application/json"] = "application/json", t["application/x-www-form-urlencoded"] = "application/x-www-form-urlencoded", t["application/xml"] = "application/xml", t["multipart/form-data"] = "multipart/form-data", t["text/html"] = "text/html", t["text/plain"] = "text/plain", t))(c || {}), g = /* @__PURE__ */ ((t) => (t.POST = "POST", t.GET = "GET", t.DELETE = "DELETE", t.HEAD = "HEAD", t.OPTIONS = "OPTIONS", t.PUT = "PUT", t.PATCH = "PATCH", t.PURGE = "PURGE", t.LINK = "LINK", t.UNLINK = "UNLINK", t))(g || {});
class z {
  constructor(e = {}) {
    d.defaults = u(d.defaults || {}, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": c["application/json"]
      }
    }, e), console.debug("初始化全局配置..."), console.debug("全局配置初始化完成。");
  }
  createAxiosInstance(e) {
    let s = d.create(e);
    return s.interceptors.response = d.interceptors.response, s.interceptors.request = d.interceptors.request, console.log("axios instance created"), s;
  }
}
class h {
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
class A extends h {
  constructor() {
    super(...arguments);
    n(this, "status", null);
    n(this, "total", 0);
    n(this, "progressEvent", { progress: 0 });
  }
}
const J = (t) => t instanceof FormData ? new FormData() : t instanceof URLSearchParams ? new URLSearchParams() : G(t) ? [] : w(t) ? {} : t, f = (...t) => {
  if (t.length <= 0)
    return null;
  let e = J(t[t.length - 1]);
  for (let s = 0; s < t.length; s++) {
    let a = t[s] || {};
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
          r.forEach((i) => {
            e[i] = l[i];
          });
        }
      }
    }
  }
  return e;
};
class q {
  constructor(e, s) {
    n(this, "controller", new AbortController());
    n(this, "instance");
    n(this, "url", "");
    n(this, "loading", !1);
    n(this, "requestData", {});
    n(this, "requestParams", {});
    n(this, "response", new h());
    n(this, "defaultResponse", new h());
    n(this, "defaultRequestParams", {});
    n(this, "defaultRequestData", {});
    this.instance = e, this.url = s || this.url;
  }
  abort() {
    this.controller.abort({ success: !1, result: "请求操作已被用户取消！" });
  }
  initOptions(e = {}) {
    e.signal = this.controller.signal, e.onDownloadProgress && (e._onDownloadProgress = e.onDownloadProgress, e.onDownloadProgress = (s) => {
      this.requestData.progressEvent = s, e._onDownloadProgress(s);
    }), e.onUploadProgress && (e._onUploadProgress = e.onUploadProgress, e.onUploadProgress = (s) => {
      this.requestData.progressEvent = s, e._onUploadProgress(s);
    });
  }
  execute(e = {}) {
    return new Promise((s, a) => {
      this.loading = !0, e.data = this.requestData = f(this.defaultRequestData, e.data), e.params = this.requestParams = f(this.defaultRequestParams, e.params), e.url = e.url ? e.url : this.url, this.initOptions(e), this.instance.request(e).then((r) => {
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
  setDefaultResponse(e = new h()) {
    return this.defaultResponse = e, this;
  }
  mergeDefaultResponse(e = new h()) {
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
  mergeDefaultResultParams(e = {}) {
    return u(this.defaultRequestParams, e), this;
  }
  handleThenResponse(e, s) {
    this.response = u({}, this.defaultResponse, s.data), e(s.data);
  }
  handleCatchResponse(e, s) {
    if (console.error("远程请求发生异常：", s), s.response)
      this.response = u({}, this.defaultResponse, s.response.data), e(s.response.data);
    else {
      let a = { success: !1, result: "远程请求发生异常！" };
      this.response = u({}, this.defaultResponse, a), e(a);
    }
  }
}
class K extends q {
  constructor(e, s) {
    super(e, s);
  }
  execute(e = {}, s = {}) {
    return this.loading = !0, this.requestParams = s.params = f(this.defaultRequestParams, s.params, e), this.initOptions(s), new Promise((a, r) => {
      this.instance.get(s.url || this.url, s).then((l) => {
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
class U extends q {
  constructor(e, s) {
    super(e, s);
  }
  execute(e = {}, s = {}, a = {}) {
    return this.loading = !0, this.requestData = f(this.defaultRequestData, a.data, e), this.requestParams = a.params = f(this.defaultRequestParams, a.params, s), this.initOptions(a), new Promise((r, l) => {
      setTimeout(() => {
        this.instance.post(a.url || this.url, f({}, this.requestData), a).then((i) => {
          try {
            this.handleThenResponse(r, i), r(i.data);
          } finally {
            this.loading = !1;
          }
        }).catch((i) => {
          try {
            this.handleCatchResponse(l, i);
          } finally {
            this.loading = !1;
          }
        });
      }, 500);
    });
  }
}
class L extends U {
  constructor(e, s) {
    super(e, s), this.setDefaultResponse(new h());
  }
}
class B extends L {
  constructor(e, s) {
    super(e, s), this.setDefaultResponse(new A());
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
  createRequestExecutor(e = "", s = {}) {
    let a = this.createAxiosInstance(s);
    return m(new q(a, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createGetExecutor(e = "", s = {}) {
    let a = u({
      method: g.GET,
      data: null,
      params: null,
      headers: { "Content-Type": c["application/x-www-form-urlencoded"] }
    }, s), r = this.createAxiosInstance(a);
    return m(new K(r, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createQueryExecutor(e = "", s = {}) {
    let a = u({
      method: g.GET,
      data: null,
      params: null,
      headers: { "Content-Type": c["application/x-www-form-urlencoded"] }
    }, s), r = this.createAxiosInstance(a);
    return m(new L(r, e).setDefaultRequestData(new b()));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPageableQueryExecutor(e = "", s = {}) {
    let a = u({
      method: g.GET,
      data: null,
      params: null,
      headers: { "Content-Type": c["application/x-www-form-urlencoded"] }
    }, s), r = this.createAxiosInstance(a);
    return m(new B(r, e).setDefaultResponse(new A()).setDefaultRequestData(new N()));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPostExecutor(e = "", s = {}) {
    let a = u({
      method: g.POST,
      data: null,
      params: null,
      headers: { "Content-Type": c["multipart/form-data"] }
    }, s), r = this.createAxiosInstance(a);
    return m(new U(r, e));
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
      do(e, s = {}, a = {}, r = {}) {
        return o.getInstance().createPostExecutor(e, r).execute(s, a, r);
      },
      multipartFormData(e, s = {}, a = {}, r = {}) {
        return o.getInstance().createPostExecutor(e, r).toFormDataRequest().execute(s, a, r);
      },
      form(e, s = {}, a = {}, r = {}) {
        return o.getInstance().createPostExecutor(e, r).toFormRequest().execute(s, a, r);
      },
      json(e, s = {}, a = {}, r = {}) {
        return o.getInstance().createPostExecutor(e, r).toJsonRequest().execute(s, a, r);
      }
    };
  }
  static get() {
    return {
      do(e, s = {}, a = {}) {
        return o.getInstance().createGetExecutor(e, a).execute(s, a);
      }
    };
  }
};
let P = o;
n(P, "instance");
export {
  $ as Condition,
  N as DefaultPageableQueryRequestData,
  A as DefaultPageableQueryResponse,
  b as DefaultQueryRequestData,
  h as DefaultResponse,
  Q as EConditionOpt,
  v as EOrderDirection,
  q as Executor,
  K as GetExecutor,
  P as HttpClient,
  c as HttpContentType,
  g as HttpMethod,
  I as Join,
  y as Order,
  B as PageableQueryExecutor,
  U as PostExecutor,
  L as QueryExecutor,
  f as mergeDataOrParams
};
//# sourceMappingURL=index.js.map
