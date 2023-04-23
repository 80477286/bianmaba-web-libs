var y = Object.defineProperty;
var E = (s, e, t) => e in s ? y(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var n = (s, e, t) => (E(s, typeof e != "symbol" ? e + "" : e, t), t);
import i from "axios";
import { reactive as m } from "vue";
const w = Object.prototype.toString, b = ((s) => (e) => {
  let t = w.call(e);
  return s[t] || (s[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), o = (s) => (s = s.toLowerCase(), function(e) {
  return b(e) === s;
}), P = (s) => Array.isArray(s);
o("ArrayBuffer");
const f = (s) => {
  if (b(s) !== "object")
    return !1;
  let e = Object.getPrototypeOf(s);
  return e === null || e === Object.prototype;
};
o("Date");
o("File");
o("Blob");
o("FileList");
o("URLSearchParams");
const T = (s, e) => {
  if (!(s === null || typeof s > "u"))
    if (typeof s != "object" && (s = [s]), P(s))
      for (let t = 0, a = s.length; t < a; t++)
        e.call(null, s[t], t, s);
    else
      for (let t in s)
        Object.prototype.hasOwnProperty.call(s, t) && e.call(null, s[t], t, s);
}, x = function(...s) {
  let e = arguments[0], t = (a, r) => {
    f(e[r]) && f(a) ? e[r] = x(e[r], a) : f(a) ? e[r] = x({}, a) : P(a) ? e[r] = a.slice() : e[r] = a;
  };
  for (let a = 0, r = arguments.length; a < r; a++)
    T(arguments[a], t);
  return e;
}, l = x;
var u = /* @__PURE__ */ ((s) => (s["application/atom+xml"] = "application/atom+xml", s["application/json"] = "application/json", s["application/x-www-form-urlencoded"] = "application/x-www-form-urlencoded", s["application/xml"] = "application/xml", s["multipart/form-data"] = "multipart/form-data", s["text/html"] = "text/html", s["text/plain"] = "text/plain", s))(u || {}), h = /* @__PURE__ */ ((s) => (s.POST = "POST", s.GET = "GET", s.DELETE = "DELETE", s.HEAD = "HEAD", s.OPTIONS = "OPTIONS", s.PUT = "PUT", s.PATCH = "PATCH", s.PURGE = "PURGE", s.LINK = "LINK", s.UNLINK = "UNLINK", s))(h || {});
const d = {
  method: h.POST,
  headers: { "Content-Type": u["application/json"] },
  xRequestedWith: "XMLHttpRequest"
};
class q {
  constructor(e = d) {
    n(this, "globalOptions", d);
    this.globalOptions = l(this.globalOptions || {}, e), console.debug("初始化全局配置..."), i.defaults.baseURL = this.globalOptions.baseUrl, i.defaults.method = this.globalOptions.method, i.defaults.headers.common["X-Requested-With"] = this.globalOptions.xRequestedWith, i.interceptors.request.use(this.globalOptions.requestSuccessHandler || this.defaultRequestSuccessHandler, this.globalOptions.requestFailHandler || this.defaultRequestFailHandler), i.interceptors.response.use(this.globalOptions.responseSuccessHandler || this.defaultResponseSuccessHandler, this.globalOptions.responseFailHandler || this.defaultResponseFailHandler), console.debug("全局配置初始化完成。");
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
    var t, a;
    return console.log(((a = (t = e.response) == null ? void 0 : t.data) == null ? void 0 : a.result) || "远程请求出现错误(code=" + e.response.status + ")"), Promise.reject(e);
  }
  createAxiosInstance(e) {
    let t = i.create(e);
    return console.log("axios instance created"), t.interceptors.request.use(this.globalOptions.requestSuccessHandler, this.globalOptions.requestFailHandler), t.interceptors.response.use(this.globalOptions.responseSuccessHandler, this.globalOptions.responseFailHandler), t;
  }
}
class O {
  constructor(e, t) {
    n(this, "instance");
    n(this, "url", "");
    n(this, "loading", !1);
    n(this, "response", { success: !1 });
    n(this, "data", {});
    n(this, "params", {});
    this.instance = e, this.url = t || "";
  }
  execute(e = {}) {
    return this.loading = !0, this.data = l(this.data || {}, e.data || {}), this.params = l(this.params || {}, e.params || {}), e.url = e.url ? e.url : this.url, new Promise((t, a) => {
      this.instance.request(e).then((r) => {
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
  setDefaultResponse(e = {}) {
    return this.response = l(this.response, e), this;
  }
  setDefaultRequestData(e = {}) {
    return this.data = l(this.data, e), this;
  }
  setDefaultResultParams(e = {}) {
    return this.params = l(this.params, e), this;
  }
  handleThenResponse(e, t) {
    this.response = t.data, e(t.data);
  }
  handleCatchResponse(e, t) {
    if (console.error("远程请求发生异常：", t), t.response)
      this.response = t.response.data, e(t.response.data);
    else {
      let a = { success: !1, result: "远程请求发生异常！", data: null };
      this.response = a, e(a);
    }
  }
}
class S extends O {
  constructor(e, t) {
    super(e, t);
  }
  // @ts-ignore
  execute(e = {}, t = {}) {
    return this.loading = !0, this.params = l(this.params || {}, t.params || {}, e || {}), t.params = this.params, new Promise((a, r) => {
      this.instance.get(t.url || this.url, t).then((c) => {
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
class I extends O {
  constructor(e, t) {
    super(e, t);
  }
  // @ts-ignore
  execute(e = {}, t = {}, a = {}) {
    return this.loading = !0, this.data = l(this.data || {}, a.data || {}, e || {}), this.params = l(this.params || {}, a.params || {}, t || {}), this.setDefaultResponse({ total: 0, page: 1, size: 10 }), a.params = this.params, new Promise((r, c) => {
      this.instance.post(a.url || this.url, this.data, a).then((p) => {
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
const R = class extends q {
  constructor(e = d) {
    super(e);
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createRequestExecutor(e = "", t = {}) {
    let a = this.createAxiosInstance(t);
    return m(new O(a, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createGetExecutor(e = "", t = {}) {
    let a = l({
      method: h.GET,
      data: null,
      params: null,
      headers: { "Content-Type": u["application/x-www-form-urlencoded"] }
    }, t), r = this.createAxiosInstance(a);
    return m(new S(r, e));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPostExecutor(e = "", t = {}) {
    let a = l({
      method: h.POST,
      data: null,
      params: null,
      headers: { "Content-Type": u["multipart/form-data"] }
    }, t), r = this.createAxiosInstance(a);
    return m(new I(r, e));
  }
  /**
   * 获取AxiosHelper实例（单例模式），首将获取时会根据参数初始化实例，后续再获取时参数将不会生效，而是直接返回已经存在的实例
   * @param options
   */
  static getInstance(e) {
    return this.instance ? e && console.error("实例已经存在，重获取实例时，配置选项将不会生效！") : this.instance = new R(l(d, e || {})), this.instance;
  }
};
let g = R;
n(g, "instance");
export {
  q as AbstractAxiosHelper,
  g as AxiosHelper,
  O as Executor,
  S as GetExecutor,
  u as HttpContentType,
  h as HttpMethod,
  I as PostExecutor
};
