var b = Object.defineProperty;
var w = (e, s, a) => s in e ? b(e, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[s] = a;
var n = (e, s, a) => (w(e, typeof s != "symbol" ? s + "" : s, a), a);
import i from "axios";
import { reactive as m } from "vue";
const T = Object.prototype.toString, E = ((e) => (s) => {
  let a = T.call(s);
  return e[a] || (e[a] = a.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), o = (e) => (e = e.toLowerCase(), function(s) {
  return E(s) === e;
}), R = (e) => Array.isArray(e);
o("ArrayBuffer");
const f = (e) => {
  if (E(e) !== "object")
    return !1;
  let s = Object.getPrototypeOf(e);
  return s === null || s === Object.prototype;
};
o("Date");
o("File");
o("Blob");
o("FileList");
o("URLSearchParams");
const I = (e, s) => {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), R(e))
      for (let a = 0, t = e.length; a < t; a++)
        s.call(null, e[a], a, e);
    else
      for (let a in e)
        Object.prototype.hasOwnProperty.call(e, a) && s.call(null, e[a], a, e);
}, g = function(...e) {
  let s = arguments[0], a = (t, r) => {
    f(s[r]) && f(t) ? s[r] = g(s[r], t) : f(t) ? s[r] = g({}, t) : R(t) ? s[r] = t.slice() : s[r] = t;
  };
  for (let t = 0, r = arguments.length; t < r; t++)
    I(arguments[t], a);
  return s;
}, l = g;
var u = /* @__PURE__ */ ((e) => (e["application/atom+xml"] = "application/atom+xml", e["application/json"] = "application/json", e["application/x-www-form-urlencoded"] = "application/x-www-form-urlencoded", e["application/xml"] = "application/xml", e["multipart/form-data"] = "multipart/form-data", e["text/html"] = "text/html", e["text/plain"] = "text/plain", e))(u || {}), h = /* @__PURE__ */ ((e) => (e.POST = "POST", e.GET = "GET", e.DELETE = "DELETE", e.HEAD = "HEAD", e.OPTIONS = "OPTIONS", e.PUT = "PUT", e.PATCH = "PATCH", e.PURGE = "PURGE", e.LINK = "LINK", e.UNLINK = "UNLINK", e))(h || {});
const d = {
  method: h.POST,
  headers: { "Content-Type": u["application/json"] },
  xRequestedWith: "XMLHttpRequest"
};
class L {
  constructor(s = d) {
    n(this, "globalOptions", d);
    this.globalOptions = l(this.globalOptions || {}, s), console.debug("初始化全局配置..."), i.defaults.baseURL = this.globalOptions.baseUrl, i.defaults.method = this.globalOptions.method, i.defaults.headers.common["X-Requested-With"] = this.globalOptions.xRequestedWith, i.interceptors.request.use(this.globalOptions.requestSuccessHandler || this.defaultRequestSuccessHandler, this.globalOptions.requestFailHandler || this.defaultRequestFailHandler), i.interceptors.response.use(this.globalOptions.responseSuccessHandler || this.defaultResponseSuccessHandler, this.globalOptions.responseFailHandler || this.defaultResponseFailHandler), console.debug("全局配置初始化完成。");
  }
  defaultRequestSuccessHandler(s) {
    return s;
  }
  defaultRequestFailHandler(s) {
    return console.error("远程请求出现错误!"), Promise.reject(s);
  }
  defaultResponseSuccessHandler(s) {
    return s;
  }
  defaultResponseFailHandler(s) {
    var a, t;
    return console.log(((t = (a = s.response) == null ? void 0 : a.data) == null ? void 0 : t.result) || "远程请求出现错误(code=" + s.response.status + ")"), Promise.reject(s);
  }
  createAxiosInstance(s) {
    let a = i.create(s);
    return console.log("axios instance created"), a.interceptors.request.use(this.globalOptions.requestSuccessHandler, this.globalOptions.requestFailHandler), a.interceptors.response.use(this.globalOptions.responseSuccessHandler, this.globalOptions.responseFailHandler), a;
  }
}
class O {
  constructor(s, a) {
    n(this, "instance");
    n(this, "url", "");
    n(this, "loading", !1);
    n(this, "response", { success: !1 });
    n(this, "data", {});
    n(this, "params", {});
    this.instance = s, this.url = a || "";
  }
  execute(s = {}) {
    return this.loading = !0, this.data = l(this.data || {}, s.data || {}), this.params = l(this.params || {}, s.params || {}), s.url = s.url ? s.url : this.url, new Promise((a, t) => {
      this.instance.request(s).then((r) => {
        try {
          this.handleThenResponse(a, r);
        } finally {
          this.loading = !1;
        }
      }).catch((r) => {
        try {
          this.handleCatchResponse(t, r);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
  setDefaultResponse(s = {}) {
    return this.response = l(this.response, s), this;
  }
  setDefaultRequestData(s = {}) {
    return this.data = l(this.data, s), this;
  }
  setDefaultResultParams(s = {}) {
    return this.params = l(this.params, s), this;
  }
  handleThenResponse(s, a) {
    this.response = a.data, s(a.data);
  }
  handleCatchResponse(s, a) {
    if (console.error("远程请求发生异常：", a), a.response)
      this.response = a.response.data, s(a.response.data);
    else {
      let t = { success: !1, result: "远程请求发生异常！", data: null };
      this.response = t, s(t);
    }
  }
}
class S extends O {
  constructor(s, a) {
    super(s, a);
  }
  // @ts-ignore
  execute(s = {}, a = {}) {
    return this.loading = !0, this.params = l(this.params || {}, a.params || {}, s || {}), a.params = this.params, new Promise((t, r) => {
      this.instance.get(a.url || this.url, a).then((c) => {
        try {
          this.handleThenResponse(t, c);
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
class q extends O {
  constructor(s, a) {
    super(s, a);
  }
  // @ts-ignore
  execute(s = {}, a = {}, t = {}) {
    return this.loading = !0, this.data = l(this.data || {}, t.data || {}, s || {}), this.params = l(this.params || {}, t.params || {}, a || {}), this.setDefaultResponse({ total: 0, page: 1, size: 10 }), t.params = this.params, new Promise((r, c) => {
      this.instance.post(t.url || this.url, this.data, t).then((p) => {
        try {
          this.handleThenResponse(r, p);
        } finally {
          this.loading = !1;
        }
      }).catch((p) => {
        try {
          this.handleCatchResponse(c, p);
        } finally {
          this.loading = !1;
        }
      });
    });
  }
}
const P = class extends L {
  constructor(s = d) {
    super(s);
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createRequestExecutor(s = "", a = {}) {
    let t = this.createAxiosInstance(a);
    return m(new O(t, s));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createGetExecutor(s = "", a = {}) {
    let t = l({
      method: h.GET,
      data: null,
      params: null,
      headers: { "Content-Type": u["application/x-www-form-urlencoded"] }
    }, a), r = this.createAxiosInstance(t);
    return m(new S(r, s));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPostExecutor(s = "", a = {}) {
    let t = l({
      method: h.POST,
      data: null,
      params: null,
      headers: { "Content-Type": u["multipart/form-data"] }
    }, a), r = this.createAxiosInstance(t);
    return m(new q(r, s));
  }
  /**
   * 获取AxiosHelper实例（单例模式），首将获取时会根据参数初始化实例，后续再获取时参数将不会生效，而是直接返回已经存在的实例
   * @param options
   */
  static getInstance(s) {
    return this.instance ? s && console.error("实例已经存在，重获取实例时，配置选项将不会生效！") : this.instance = new P(l(d, s || {})), this.instance;
  }
};
let x = P;
n(x, "instance");
var A = /* @__PURE__ */ ((e) => (e["application/atom+xml"] = "application/atom+xml", e["application/json"] = "application/json", e["application/x-www-form-urlencoded"] = "application/x-www-form-urlencoded", e["application/xml"] = "application/xml", e["multipart/form-data"] = "multipart/form-data", e["text/html"] = "text/html", e["text/plain"] = "text/plain", e))(A || {}), N = /* @__PURE__ */ ((e) => (e.POST = "POST", e.GET = "GET", e.DELETE = "DELETE", e.HEAD = "HEAD", e.OPTIONS = "OPTIONS", e.PUT = "PUT", e.PATCH = "PATCH", e.PURGE = "PURGE", e.LINK = "LINK", e.UNLINK = "UNLINK", e))(N || {});
export {
  L as AbstractAxiosHelper,
  x as AxiosHelper,
  O as Executor,
  S as GetExecutor,
  A as HttpContentType,
  N as HttpMethod,
  q as PostExecutor
};
