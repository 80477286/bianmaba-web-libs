var A = Object.defineProperty;
var j = (t, e, s) => e in t ? A(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var l = (t, e, s) => (j(t, typeof e != "symbol" ? e + "" : e, s), s);
import h from "axios";
import { reactive as p } from "vue";
const G = Object.prototype.toString, P = ((t) => (e) => {
  let s = G.call(e);
  return t[s] || (t[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), i = (t) => (t = t.toLowerCase(), function(e) {
  return P(e) === t;
}), D = (t) => Array.isArray(t);
i("ArrayBuffer");
const L = (t) => t != null && typeof t == "object" && Array.isArray(t) === !1, x = (t) => {
  if (P(t) !== "object")
    return !1;
  let e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
};
i("Date");
i("File");
i("Blob");
i("FileList");
i("URLSearchParams");
const v = (t, e) => {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), D(t))
      for (let s = 0, a = t.length; s < a; s++)
        e.call(null, t[s], s, t);
    else
      for (let s in t)
        Object.prototype.hasOwnProperty.call(t, s) && e.call(null, t[s], s, t);
}, g = function(...t) {
  let e = arguments[0], s = (a, r) => {
    x(e[r]) && x(a) ? e[r] = g(e[r], a) : x(a) ? e[r] = g({}, a) : D(a) ? e[r] = a.slice() : e[r] = a;
  };
  for (let a = 0, r = arguments.length; a < r; a++)
    v(arguments[a], s);
  return e;
}, n = g, T = L;
class N {
  constructor(e = {}) {
    h.defaults = n(h.defaults || {}, e), console.debug("初始化全局配置..."), console.debug("全局配置初始化完成。");
  }
  createAxiosInstance(e) {
    let s = h.create(e);
    return s.interceptors.response = h.interceptors.response, s.interceptors.request = h.interceptors.request, console.log("axios instance created"), s;
  }
}
class I {
  constructor() {
    l(this, "order", new w("id", "asc"));
    l(this, "queryProperties", ["id"]);
  }
}
class S extends I {
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
class q {
  constructor(e, s, a) {
    l(this, "property", null);
    l(this, "joinType", null);
    l(this, "on", null);
    this.property = e || this.property, this.joinType = s || this.joinType, this.on = a || this.on;
  }
  of(e, s, a) {
    return new q(e, s, a);
  }
}
class w {
  constructor(e, s) {
    l(this, "property", null);
    l(this, "direction", "asc");
    this.property = e, this.direction = s;
  }
  of(e, s = "asc") {
    return new w(e, s);
  }
}
class $ {
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
var F = /* @__PURE__ */ ((t) => (t.Asc = "asc", t.Desc = "desc", t))(F || {}), Q = /* @__PURE__ */ ((t) => (t.equals = "equals", t.eq = "eq", t.ge = "ge", t.gt = "gt", t.lt = "lt", t.le = "le", t.ne = "ne", t.notlike = "notlike", t.like = "like", t["like:"] = "like:", t[":like"] = ":like", t[":like:"] = ":like:", t.lk = "like", t["lk:"] = "like:", t[":lk"] = ":like", t[":lk:"] = ":like:", t.between = "between", t.btw = "btw", t.isnull = "isnull", t.isnotnull = "isnotnull", t.isempty = "isempty", t.isnotempty = "isnotempty", t.in = "in", t.notin = "notin", t))(Q || {}), c = /* @__PURE__ */ ((t) => (t["application/atom+xml"] = "application/atom+xml", t["application/json"] = "application/json", t["application/x-www-form-urlencoded"] = "application/x-www-form-urlencoded", t["application/xml"] = "application/xml", t["multipart/form-data"] = "multipart/form-data", t["text/html"] = "text/html", t["text/plain"] = "text/plain", t))(c || {}), f = /* @__PURE__ */ ((t) => (t.POST = "POST", t.GET = "GET", t.DELETE = "DELETE", t.HEAD = "HEAD", t.OPTIONS = "OPTIONS", t.PUT = "PUT", t.PATCH = "PATCH", t.PURGE = "PURGE", t.LINK = "LINK", t.UNLINK = "UNLINK", t))(f || {});
class d {
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
class U extends d {
  constructor() {
    super(...arguments);
    l(this, "status", null);
    l(this, "total", 0);
  }
}
class R {
  constructor(e, s) {
    l(this, "instance");
    l(this, "url", "");
    l(this, "loading", !1);
    l(this, "response", new d());
    l(this, "data", {});
    l(this, "params", {});
    l(this, "defaultResponse", new d());
    this.instance = e, this.url = s || this.url;
  }
  execute(e = {}) {
    return new Promise((s, a) => {
      this.loading = !0, T(e.data) ? this.data = n(this.data || {}, e.data || {}) : this.data = e.data, this.params = n(this.params || {}, e.params || {}), e.url = e.url ? e.url : this.url, this.instance.request(e).then((r) => {
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
  setDefaultResponse(e = new d()) {
    return this.response = e, this.defaultResponse = n(this.response, {}), this;
  }
  setDefaultRequestData(e = {}) {
    return this.data = n(this.data, e), this;
  }
  setDefaultResultParams(e = {}) {
    return this.params = n(this.params, e), this;
  }
  handleThenResponse(e, s) {
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
class E extends R {
  constructor(e, s) {
    super(e, s);
  }
  execute(e = {}, s = {}) {
    return this.loading = !0, this.params = n(this.params || {}, s.params || {}, e || {}), s.params = this.params, new Promise((a, r) => {
      this.instance.get(s.url || this.url, s).then((o) => {
        try {
          this.handleThenResponse(a, o);
        } finally {
          this.loading = !1;
        }
      }).catch((o) => {
        try {
          this.handleCatchResponse(r, o);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
}
class b extends R {
  constructor(e, s) {
    super(e, s);
  }
  execute(e = {}, s = {}, a = {}) {
    return this.loading = !0, T(e) ? this.data = n(this.data || {}, a.data || {}, e || {}) : this.data = e, this.params = n(this.params || {}, a.params || {}, s || {}), a.params = this.params, new Promise((r, o) => {
      this.instance.post(a.url || this.url, this.data, a).then((m) => {
        try {
          this.handleThenResponse(r, m);
        } finally {
          this.loading = !1;
        }
      }).catch((m) => {
        try {
          this.handleCatchResponse(o, m);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
}
class k extends b {
  constructor(e, s) {
    super(e, s), this.setDefaultResponse(new d());
  }
}
class z extends k {
  constructor(e, s) {
    super(e, s), this.setDefaultResponse(new U());
  }
}
const u = class extends N {
  constructor(e = {}) {
    super(e);
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createRequestExecutor(e = "", s = {}) {
    let a = this.createAxiosInstance(s);
    return p(new R(a, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createGetExecutor(e = "", s = {}) {
    let a = n({
      method: f.GET,
      data: null,
      params: null,
      headers: { "Content-Type": c["application/x-www-form-urlencoded"] }
    }, s), r = this.createAxiosInstance(a);
    return p(new E(r, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createQueryExecutor(e = "", s = {}) {
    let a = n({
      method: f.GET,
      data: null,
      params: null,
      headers: { "Content-Type": c["application/x-www-form-urlencoded"] }
    }, s), r = this.createAxiosInstance(a);
    return p(new k(r, e).setDefaultResponse({ data: [] }).setDefaultRequestData(new I()));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPageableQueryExecutor(e = "", s = {}) {
    let a = n({
      method: f.GET,
      data: null,
      params: null,
      headers: { "Content-Type": c["application/x-www-form-urlencoded"] }
    }, s), r = this.createAxiosInstance(a);
    return p(new z(r, e).setDefaultResponse({ data: [] }).setDefaultRequestData(new S()));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPostExecutor(e = "", s = {}) {
    let a = n({
      method: f.POST,
      data: null,
      params: null,
      headers: { "Content-Type": c["multipart/form-data"] }
    }, s), r = this.createAxiosInstance(a);
    return p(new b(r, e));
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
      do(e, s = {}, a = {}, r = {}) {
        return u.getInstance().createPostExecutor(e, r).execute(s, a, r);
      },
      multipartFormData(e, s = {}, a = {}, r = {}) {
        return u.getInstance().createPostExecutor(e, r).toFormDataRequest().execute(s, a, r);
      },
      form(e, s = {}, a = {}, r = {}) {
        return u.getInstance().createPostExecutor(e, r).toFormRequest().execute(s, a, r);
      },
      json(e, s = {}, a = {}, r = {}) {
        return u.getInstance().createPostExecutor(e, r).toJsonRequest().execute(s, a, r);
      }
    };
  }
  static get() {
    return {
      do(e, s = {}, a = {}) {
        return u.getInstance().createGetExecutor(e, a).execute(s, a);
      }
    };
  }
};
let y = u;
l(y, "instance");
export {
  $ as Condition,
  S as DefaultPageableQueryRequestData,
  U as DefaultPageableQueryResponse,
  I as DefaultQueryRequestData,
  d as DefaultResponse,
  Q as EConditionOpt,
  F as EOrderDirection,
  R as Executor,
  E as GetExecutor,
  y as HttpClient,
  c as HttpContentType,
  f as HttpMethod,
  q as Join,
  w as Order,
  z as PageableQueryExecutor,
  b as PostExecutor,
  k as QueryExecutor
};
