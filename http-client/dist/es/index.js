var A = Object.defineProperty;
var j = (t, e, s) => e in t ? A(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var l = (t, e, s) => (j(t, typeof e != "symbol" ? e + "" : e, s), s);
import h from "axios";
import { reactive as d } from "vue";
const v = Object.prototype.toString, T = ((t) => (e) => {
  let s = v.call(e);
  return t[s] || (t[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), o = (t) => (t = t.toLowerCase(), function(e) {
  return T(e) === t;
}), R = (t) => Array.isArray(t);
o("ArrayBuffer");
const U = (t) => t != null && typeof t == "object" && Array.isArray(t) === !1, g = (t) => {
  if (T(t) !== "object")
    return !1;
  let e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
};
o("Date");
o("File");
o("Blob");
o("FileList");
o("URLSearchParams");
const L = (t, e) => {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), R(t))
      for (let s = 0, a = t.length; s < a; s++)
        e.call(null, t[s], s, t);
    else
      for (let s in t)
        Object.prototype.hasOwnProperty.call(t, s) && e.call(null, t[s], s, t);
}, y = function(...t) {
  let e = arguments[0], s = (a, r) => {
    g(e[r]) && g(a) ? e[r] = y(e[r], a) : g(a) ? e[r] = y({}, a) : R(a) ? e[r] = a.slice() : e[r] = a;
  };
  for (let a = 0, r = arguments.length; a < r; a++)
    L(arguments[a], s);
  return e;
}, n = y, w = U, E = R;
class I {
  constructor() {
    l(this, "order", new P("id", "asc"));
    l(this, "queryProperties", ["id"]);
  }
}
class G extends I {
  constructor(s = 1, a = 10, r = -1) {
    super();
    l(this, "size", 10);
    l(this, "page", 1);
    l(this, "pageOffset", -1);
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
class b {
  constructor(e, s, a) {
    l(this, "property", null);
    l(this, "joinType", null);
    l(this, "on", null);
    this.property = e || this.property, this.joinType = s || this.joinType, this.on = a || this.on;
  }
  of(e, s, a) {
    return new b(e, s, a);
  }
}
class P {
  constructor(e, s) {
    l(this, "property", null);
    l(this, "direction", "asc");
    this.property = e, this.direction = s;
  }
  of(e, s = "asc") {
    return new P(e, s);
  }
}
class W {
  constructor(e, s, a) {
    l(this, "property", null);
    l(this, "value", null);
    l(this, "opt", "eq");
    l(this, "and", []);
    l(this, "or", []);
    this.property = e || this.property, this.value = s || this.value, this.opt = a || this.opt;
  }
  addAnd(e) {
    this.and.push(e);
  }
  addOr(e) {
    this.or.push(e);
  }
}
var N = /* @__PURE__ */ ((t) => (t.Asc = "asc", t.Desc = "desc", t))(N || {}), S = /* @__PURE__ */ ((t) => (t.equals = "equals", t.eq = "eq", t.ge = "ge", t.gt = "gt", t.lt = "lt", t.le = "le", t.ne = "ne", t.notlike = "notlike", t.like = "like", t["like:"] = "like:", t[":like"] = ":like", t[":like:"] = ":like:", t.lk = "like", t["lk:"] = "like:", t[":lk"] = ":like", t[":lk:"] = ":like:", t.between = "between", t.btw = "btw", t.isnull = "isnull", t.isnotnull = "isnotnull", t.isempty = "isempty", t.isnotempty = "isnotempty", t.in = "in", t.notin = "notin", t))(S || {}), u = /* @__PURE__ */ ((t) => (t["application/atom+xml"] = "application/atom+xml", t["application/json"] = "application/json", t["application/x-www-form-urlencoded"] = "application/x-www-form-urlencoded", t["application/xml"] = "application/xml", t["multipart/form-data"] = "multipart/form-data", t["text/html"] = "text/html", t["text/plain"] = "text/plain", t))(u || {}), p = /* @__PURE__ */ ((t) => (t.POST = "POST", t.GET = "GET", t.DELETE = "DELETE", t.HEAD = "HEAD", t.OPTIONS = "OPTIONS", t.PUT = "PUT", t.PATCH = "PATCH", t.PURGE = "PURGE", t.LINK = "LINK", t.UNLINK = "UNLINK", t))(p || {});
class F {
  constructor(e = {}) {
    h.defaults = n(h.defaults || {}, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": u["application/json"]
      }
    }, e), console.debug("初始化全局配置..."), console.debug("全局配置初始化完成。");
  }
  createAxiosInstance(e) {
    let s = h.create(e);
    return s.interceptors.response = h.interceptors.response, s.interceptors.request = h.interceptors.request, console.log("axios instance created"), s;
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
class Q extends f {
  constructor() {
    super(...arguments);
    l(this, "status", null);
    l(this, "total", 0);
    l(this, "progressEvent", { progress: 0 });
  }
}
class D {
  constructor(e, s) {
    l(this, "controller", new AbortController());
    l(this, "instance");
    l(this, "url", "");
    l(this, "loading", !1);
    l(this, "response", new f());
    l(this, "data", {});
    l(this, "params", {});
    l(this, "defaultResponse", new f());
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
      this.loading = !0, w(e.data) ? this.data = n(this.data || {}, e.data || {}) : this.data = e.data, this.params = n(this.params || {}, e.params || {}), e.url = e.url ? e.url : this.url, this.initOptions(e), this.setDefaultResponse(this.defaultResponse), this.instance.request(e).then((r) => {
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
  handleThenResponse(e, s) {
    for (let a in this.defaultResponse)
      w(this.defaultResponse.data) ? (s.data[a] == null || s.data[a] == null) && (s.data[a] = this.defaultResponse.data[a]) : E(this.defaultResponse.data) && (s.data == null || s.data == null) && (s.data = this.defaultResponse.data);
    this.response = s.data, e(s.data);
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
class z extends D {
  constructor(e, s) {
    super(e, s);
  }
  execute(e = {}, s = {}) {
    return this.loading = !0, this.params = n(this.params || {}, s.params || {}, e || {}), s.params = this.params, this.initOptions(s), this.setDefaultResponse(this.defaultResponse), new Promise((a, r) => {
      this.instance.get(s.url || this.url, s).then((c) => {
        try {
          this.handleThenResponse(a, c);
        } finally {
          this.loading = !1;
        }
      }).catch((c) => {
        try {
          this.handleCatchResponse(r, c);
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
    return this.loading = !0, w(e) ? this.data = n(this.data || {}, a.data || {}, e || {}) : this.data = e, this.params = n(this.params || {}, a.params || {}, s || {}), a.params = this.params, this.initOptions(a), this.setDefaultResponse(this.defaultResponse), new Promise((r, c) => {
      this.instance.post(a.url || this.url, this.data, a).then((m) => {
        try {
          this.handleThenResponse(r, m);
        } finally {
          this.loading = !1;
        }
      }).catch((m) => {
        try {
          this.handleCatchResponse(c, m);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
}
class k extends q {
  constructor(e, s) {
    super(e, s), this.setDefaultResponse(new f());
  }
}
class K extends k {
  constructor(e, s) {
    super(e, s), this.setDefaultResponse(new Q());
  }
}
const i = class extends F {
  constructor(e = {}) {
    super(e);
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createRequestExecutor(e = "", s = {}) {
    let a = this.createAxiosInstance(s);
    return d(new D(a, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createGetExecutor(e = "", s = {}) {
    let a = n({
      method: p.GET,
      data: null,
      params: null,
      headers: { "Content-Type": u["application/x-www-form-urlencoded"] }
    }, s), r = this.createAxiosInstance(a);
    return d(new z(r, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createQueryExecutor(e = "", s = {}) {
    let a = n({
      method: p.GET,
      data: null,
      params: null,
      headers: { "Content-Type": u["application/x-www-form-urlencoded"] }
    }, s), r = this.createAxiosInstance(a);
    return d(new k(r, e).setDefaultResponse({ data: [] }).setDefaultRequestData(new I()));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPageableQueryExecutor(e = "", s = {}) {
    let a = n({
      method: p.GET,
      data: null,
      params: null,
      headers: { "Content-Type": u["application/x-www-form-urlencoded"] }
    }, s), r = this.createAxiosInstance(a);
    return d(new K(r, e).setDefaultResponse({ data: [] }).setDefaultRequestData(new G()));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPostExecutor(e = "", s = {}) {
    let a = n({
      method: p.POST,
      data: null,
      params: null,
      headers: { "Content-Type": u["multipart/form-data"] }
    }, s), r = this.createAxiosInstance(a);
    return d(new q(r, e));
  }
  /**
   * 获取HttpClient实例（单例模式），首将获取时会根据参数初始化实例，后续再获取时参数将不会生效，而是直接返回已经存在的实例
   * @param options
   */
  static getInstance(e) {
    return this.instance ? e && console.error("实例已经存在，重获取实例时，配置选项将不会生效！") : this.instance = new i(e), this.instance;
  }
  static post() {
    return {
      do(e, s = {}, a = {}, r = {}) {
        return i.getInstance().createPostExecutor(e, r).execute(s, a, r);
      },
      multipartFormData(e, s = {}, a = {}, r = {}) {
        return i.getInstance().createPostExecutor(e, r).toFormDataRequest().execute(s, a, r);
      },
      form(e, s = {}, a = {}, r = {}) {
        return i.getInstance().createPostExecutor(e, r).toFormRequest().execute(s, a, r);
      },
      json(e, s = {}, a = {}, r = {}) {
        return i.getInstance().createPostExecutor(e, r).toJsonRequest().execute(s, a, r);
      }
    };
  }
  static get() {
    return {
      do(e, s = {}, a = {}) {
        return i.getInstance().createGetExecutor(e, a).execute(s, a);
      }
    };
  }
};
let x = i;
l(x, "instance");
export {
  W as Condition,
  G as DefaultPageableQueryRequestData,
  Q as DefaultPageableQueryResponse,
  I as DefaultQueryRequestData,
  f as DefaultResponse,
  S as EConditionOpt,
  N as EOrderDirection,
  D as Executor,
  z as GetExecutor,
  x as HttpClient,
  u as HttpContentType,
  p as HttpMethod,
  b as Join,
  P as Order,
  K as PageableQueryExecutor,
  q as PostExecutor,
  k as QueryExecutor
};
