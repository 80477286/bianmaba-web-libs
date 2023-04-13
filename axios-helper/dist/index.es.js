var E = Object.defineProperty;
var w = (t, e, s) => e in t ? E(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var l = (t, e, s) => (w(t, typeof e != "symbol" ? e + "" : e, s), s);
import i from "axios";
import { reactive as f } from "vue";
const T = Object.prototype.toString, R = ((t) => (e) => {
  let s = T.call(e);
  return t[s] || (t[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), o = (t) => (t = t.toLowerCase(), function(s) {
  return R(s) === t;
}), P = (t) => Array.isArray(t);
o("ArrayBuffer");
const m = (t) => {
  if (R(t) !== "object")
    return !1;
  let e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
};
o("Date");
o("File");
o("Blob");
o("FileList");
o("URLSearchParams");
const S = (t, e) => {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), P(t))
      for (let s = 0, a = t.length; s < a; s++)
        e.call(null, t[s], s, t);
    else
      for (let s in t)
        Object.prototype.hasOwnProperty.call(t, s) && e.call(null, t[s], s, t);
}, n = function(...t) {
  let e = arguments[0], s = (a, r) => {
    m(e[r]) && m(a) ? e[r] = n(e[r], a) : m(a) ? e[r] = n({}, a) : P(a) ? e[r] = a.slice() : e[r] = a;
  };
  for (let a = 0, r = arguments.length; a < r; a++)
    S(arguments[a], s);
  return e;
};
var u = /* @__PURE__ */ ((t) => (t["application/atom+xml"] = "application/atom+xml", t["application/json"] = "application/json", t["application/x-www-form-urlencoded"] = "application/x-www-form-urlencoded", t["application/xml"] = "application/xml", t["multipart/form-data"] = "multipart/form-data", t["text/html"] = "text/html", t["text/plain"] = "text/plain", t))(u || {}), h = /* @__PURE__ */ ((t) => (t.POST = "POST", t.GET = "GET", t.DELETE = "DELETE", t.HEAD = "HEAD", t.OPTIONS = "OPTIONS", t.PUT = "PUT", t.PATCH = "PATCH", t.PURGE = "PURGE", t.LINK = "LINK", t.UNLINK = "UNLINK", t))(h || {});
const d = {
  method: h.POST,
  headers: { "Content-Type": u["application/json"] },
  xRequestedWith: "XMLHttpRequest"
};
class q {
  constructor(e = d) {
    l(this, "globalOptions", d);
    this.globalOptions = n(this.globalOptions || {}, e), console.debug("初始化全局配置..."), i.defaults.baseURL = this.globalOptions.baseUrl, i.defaults.method = this.globalOptions.method, i.defaults.headers.common["X-Requested-With"] = this.globalOptions.xRequestedWith, i.interceptors.request.use(this.globalOptions.requestSuccessHandler || this.defaultRequestSuccessHandler, this.globalOptions.requestFailHandler || this.defaultRequestFailHandler), i.interceptors.response.use(this.globalOptions.responseSuccessHandler || this.defaultResponseSuccessHandler, this.globalOptions.responseFailHandler || this.defaultResponseFailHandler), console.debug("全局配置初始化完成。");
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
    var s, a;
    return console.log(((a = (s = e.response) == null ? void 0 : s.data) == null ? void 0 : a.result) || "远程请求出现错误(code=" + e.response.status + ")"), Promise.reject(e);
  }
  createAxiosInstance(e) {
    let s = i.create(e);
    return s.interceptors.request.use(this.globalOptions.requestSuccessHandler, this.globalOptions.requestFailHandler), s.interceptors.response.use(this.globalOptions.responseSuccessHandler, this.globalOptions.responseFailHandler), s;
  }
}
class O {
  constructor(e, s) {
    l(this, "instance");
    l(this, "url", "");
    l(this, "loading", !1);
    l(this, "response", { success: !1 });
    l(this, "data", {});
    l(this, "params", {});
    this.instance = e, this.url = s || "";
  }
  execute(e = {}) {
    return this.loading = !0, this.data = n(this.data || {}, e.data || {}), this.params = n(this.params || {}, e.params || {}), e.url = e.url ? e.url : this.url, new Promise((s, a) => {
      this.instance.request(e).then((r) => {
        this.handleThenResponse(s, r);
      }).catch((r) => {
        this.handleCatchResponse(a, r);
      }).finally(() => {
        this.loading = !1;
      });
    });
  }
  setDefaultResponse(e = {}) {
    return this.response = n(this.response, e), this;
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
class I extends O {
  constructor(e, s) {
    super(e, s);
  }
  // @ts-ignore
  execute(e = {}, s = {}) {
    return this.loading = !0, this.params = n(this.params || {}, s.params || {}, e || {}), s.params = this.params, new Promise((a, r) => {
      this.instance.get(s.url || this.url, s).then((c) => {
        this.handleThenResponse(a, c);
      }).catch((c) => {
        this.handleCatchResponse(r, c);
      }).finally(() => {
        this.loading = !1;
      });
    });
  }
}
class b extends O {
  constructor(e, s) {
    super(e, s);
  }
  // @ts-ignore
  execute(e = {}, s = {}, a = {}) {
    return this.loading = !0, this.data = n(this.data || {}, a.data || {}, e || {}), this.params = n(this.params || {}, a.params || {}, s || {}), this.setDefaultResponse({ total: 0, page: 1, size: 10 }), a.params = this.params, new Promise((r, c) => {
      this.instance.post(a.url || this.url, this.data, a).then((p) => {
        this.handleThenResponse(r, p);
      }).catch((p) => {
        this.handleCatchResponse(c, p);
      }).finally(() => {
        this.loading = !1;
      });
    });
  }
}
const x = class extends q {
  constructor(e = d) {
    super(e);
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createRequestExecutor(e = "", s = {}) {
    let a = this.createAxiosInstance(s);
    return f(new O(a, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createGetExecutor(e = "", s = {}) {
    let a = n({
      method: h.GET,
      data: null,
      params: null,
      headers: { "Content-Type": u["application/x-www-form-urlencoded"] }
    }, s), r = this.createAxiosInstance(a);
    return f(new I(r, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPostExecutor(e = "", s = {}) {
    let a = n({
      method: h.POST,
      data: null,
      params: null,
      headers: { "Content-Type": u["multipart/form-data"] }
    }, s), r = this.createAxiosInstance(a);
    return f(new b(r, e));
  }
  /**
   * 获取AxiosHelper实例（单例模式）
   */
  // @ts-ignore
  static getInstance() {
    return this.getInstance();
  }
  /**
   * 获取AxiosHelper实例（单例模式），首将获取时会根据参数初始化实例，后续再获取时参数将不会生效，而是直接返回已经存在的实例
   * @param options
   */
  // @ts-ignore
  static getInstance(e) {
    return this.instance ? e && console.error("实例已经存在，重获取实例时，配置选项将不会生效！") : this.instance = new x(n(d, e || {})), this.instance;
  }
};
let g = x;
l(g, "instance");
export {
  q as AbstractAxiosHelper,
  g as AxiosHelper,
  O as Executor,
  I as GetExecutor,
  u as HttpContentType,
  h as HttpMethod,
  b as PostExecutor
};
