var J = Object.defineProperty;
var Q = (e, t, s) => t in e ? J(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var l = (e, t, s) => (Q(e, typeof t != "symbol" ? t + "" : t, s), s);
import u from "axios";
import { reactive as x } from "vue";
const A = Object.prototype.toString, F = ((e) => (t) => {
  let s = A.call(t);
  return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), c = (e) => (e = e.toLowerCase(), function(t) {
  return F(t) === e;
}), Y = (e, t) => function() {
  return e.apply(t, arguments);
}, y = (e) => Array.isArray(e), h = (e) => typeof e > "u", E = (e) => e !== null && !h(e) && e.constructor !== null && !h(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e), R = c("ArrayBuffer"), T = (e) => {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && R(e.buffer), t;
}, B = (e) => typeof e == "string", L = (e) => typeof e == "number" && isFinite(e), S = (e) => e != null && typeof e == "object" && Array.isArray(e) === !1, p = (e) => {
  if (F(e) !== "object")
    return !1;
  let t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}, D = c("Date"), I = c("File"), q = c("Blob"), U = c("FileList"), b = (e) => A.call(e) === "[object Function]", N = (e) => S(e) && b(e.pipe), v = (e) => {
  let t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || A.call(e) === t || b(e.toString) && e.toString() === t);
}, G = c("URLSearchParams"), _ = (e) => e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, ""), C = () => typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u", O = (e, t) => {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), y(e))
      for (let s = 0, r = e.length; s < r; s++)
        t.call(null, e[s], s, e);
    else
      for (let s in e)
        Object.prototype.hasOwnProperty.call(e, s) && t.call(null, e[s], s, e);
}, H = (e, t, s) => (O(t, function(r, a) {
  s && typeof r == "function" ? e[a] = Y(r, s) : e[a] = r;
}), e), K = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), V = (e, t, s, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, s && Object.assign(e.prototype, s);
}, W = (e, t, s) => {
  let r, a, i, o = {};
  t = t || {};
  do {
    for (r = Object.getOwnPropertyNames(e), a = r.length; a-- > 0; )
      i = r[a], o[i] || (t[i] = e[i], o[i] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!s || s(e, t)) && e !== Object.prototype);
  return t;
}, z = (e, t, s) => {
  e = String(e), (s === void 0 || s > e.length) && (s = e.length), s -= t.length;
  let r = e.indexOf(t, s);
  return r !== -1 && r === s;
}, X = (e) => {
  if (!e)
    return null;
  let t = e.length;
  if (h(t))
    return null;
  let s = new Array(t);
  for (; t-- > 0; )
    s[t] = e[t];
  return s;
}, $ = function(e) {
  return function(t) {
    return e && t instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), k = (e = 1e3) => new Promise((t) => {
  setTimeout(t, e);
}), f = function(...e) {
  let t = arguments[0], s = (r, a) => {
    p(t[a]) && p(r) ? t[a] = f(t[a], r) : p(r) ? t[a] = f({}, r) : y(r) ? t[a] = r.slice() : t[a] = r;
  };
  for (let r = 0, a = arguments.length; r < a; r++)
    O(arguments[r], s);
  return t;
}, Z = {
  merge: f,
  delay: k,
  isTypedArray: $,
  toArray: X,
  endsWith: z,
  toFlatObject: W,
  inherits: V,
  stripBOM: K,
  extend: H,
  forEach: O,
  isStandardBrowserEnv: C,
  trim: _,
  isURLSearchParams: G,
  isFormData: v,
  isStream: N,
  isFunction: b,
  isFileList: U,
  isBlob: q,
  isFile: I,
  isDate: D,
  isPlainObject: p,
  isObject: S,
  isNumber: L,
  isString: B,
  isArrayBufferView: T,
  isArrayBuffer: R,
  isBuffer: E,
  isUndefined: h,
  isArray: y
}, n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Z,
  delay: k,
  endsWith: z,
  extend: H,
  forEach: O,
  inherits: V,
  isArray: y,
  isArrayBuffer: R,
  isArrayBufferView: T,
  isBlob: q,
  isBuffer: E,
  isDate: D,
  isFile: I,
  isFileList: U,
  isFormData: v,
  isFunction: b,
  isNumber: L,
  isObject: S,
  isPlainObject: p,
  isStandardBrowserEnv: C,
  isStream: N,
  isString: B,
  isTypedArray: $,
  isURLSearchParams: G,
  isUndefined: h,
  merge: f,
  stripBOM: K,
  toArray: X,
  toFlatObject: W,
  trim: _
}, Symbol.toStringTag, { value: "Module" }));
var d = /* @__PURE__ */ ((e) => (e["application/atom+xml"] = "application/atom+xml", e["application/json"] = "application/json", e["application/x-www-form-urlencoded"] = "application/x-www-form-urlencoded", e["application/xml"] = "application/xml", e["multipart/form-data"] = "multipart/form-data", e["text/html"] = "text/html", e["text/plain"] = "text/plain", e))(d || {}), m = /* @__PURE__ */ ((e) => (e.POST = "POST", e.GET = "GET", e.DELETE = "DELETE", e.HEAD = "HEAD", e.OPTIONS = "OPTIONS", e.PUT = "PUT", e.PATCH = "PATCH", e.PURGE = "PURGE", e.LINK = "LINK", e.UNLINK = "UNLINK", e))(m || {});
const g = {
  method: m.POST,
  headers: { "Content-Type": d["application/json"] },
  xRequestedWith: "XMLHttpRequest"
};
class M {
  constructor(t = g) {
    l(this, "globalOptions", g);
    this.globalOptions = n.merge(this.globalOptions || {}, t), console.debug("初始化全局配置..."), u.defaults.baseURL = this.globalOptions.baseUrl, u.defaults.method = this.globalOptions.method, u.defaults.headers.common["X-Requested-With"] = this.globalOptions.xRequestedWith, u.interceptors.request.use(this.globalOptions.requestSuccessHandler || this.defaultRequestSuccessHandler, this.globalOptions.requestFailHandler || this.defaultRequestFailHandler), u.interceptors.response.use(this.globalOptions.responseSuccessHandler || this.defaultResponseSuccessHandler, this.globalOptions.responseFailHandler || this.defaultResponseFailHandler), console.debug("全局配置初始化完成。");
  }
  defaultRequestSuccessHandler(t) {
    return t;
  }
  defaultRequestFailHandler(t) {
    return console.error("远程请求出现错误!"), Promise.reject(t);
  }
  defaultResponseSuccessHandler(t) {
    return t;
  }
  defaultResponseFailHandler(t) {
    var s, r;
    return console.log(((r = (s = t.response) == null ? void 0 : s.data) == null ? void 0 : r.result) || "远程请求出现错误(code=" + t.response.status + ")"), Promise.reject(t);
  }
  createAxiosInstance(t) {
    let s = u.create(t);
    return s.interceptors.request.use(this.globalOptions.requestSuccessHandler, this.globalOptions.requestFailHandler), s.interceptors.response.use(this.globalOptions.responseSuccessHandler, this.globalOptions.responseFailHandler), s;
  }
}
class w {
  constructor(t, s) {
    l(this, "instance");
    l(this, "url", "");
    l(this, "loading", !1);
    l(this, "response", { success: !1 });
    l(this, "data", {});
    l(this, "params", {});
    this.instance = t, this.url = s || "";
  }
  execute(t = {}) {
    return this.loading = !0, this.data = n.merge(this.data || {}, t.data || {}), this.params = n.merge(this.params || {}, t.params || {}), t.url = t.url ? t.url : this.url, new Promise((s, r) => {
      this.instance.request(t).then((a) => {
        this.handleThenResponse(s, a);
      }).catch((a) => {
        this.handleCatchResponse(r, a);
      }).finally(() => {
        this.loading = !1;
      });
    });
  }
  setDefaultResponse(t = {}) {
    return this.response = n.merge(this.response, t), this;
  }
  setDefaultRequestData(t = {}) {
    return this.data = n.merge(this.data, t), this;
  }
  setDefaultResultParams(t = {}) {
    return this.params = n.merge(this.params, t), this;
  }
  handleThenResponse(t, s) {
    this.response = s.data, t(s.data);
  }
  handleCatchResponse(t, s) {
    if (console.error("远程请求发生异常：", s), s.response)
      this.response = s.response.data, t(s.response.data);
    else {
      let r = { success: !1, result: "远程请求发生异常！", data: null };
      this.response = r, t(r);
    }
  }
}
class ee extends w {
  constructor(t, s) {
    super(t, s);
  }
  // @ts-ignore
  execute(t = {}, s = {}) {
    return this.loading = !0, this.params = n.merge(this.params || {}, s.params || {}, t || {}), s.params = this.params, new Promise((r, a) => {
      this.instance.get(s.url || this.url, s).then((i) => {
        this.handleThenResponse(r, i);
      }).catch((i) => {
        this.handleCatchResponse(a, i);
      }).finally(() => {
        this.loading = !1;
      });
    });
  }
}
class te extends w {
  constructor(t, s) {
    super(t, s);
  }
  // @ts-ignore
  execute(t = {}, s = {}, r = {}) {
    return this.loading = !0, this.data = n.merge(this.data || {}, r.data || {}, t || {}), this.params = n.merge(this.params || {}, r.params || {}, s || {}), this.setDefaultResponse({ total: 0, page: 1, size: 10 }), r.params = this.params, new Promise((a, i) => {
      this.instance.post(r.url || this.url, this.data, r).then((o) => {
        this.handleThenResponse(a, o);
      }).catch((o) => {
        this.handleCatchResponse(i, o);
      }).finally(() => {
        this.loading = !1;
      });
    });
  }
}
const j = class extends M {
  constructor(t = g) {
    super(t);
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createRequestExecutor(t = "", s = {}) {
    let r = this.createAxiosInstance(s);
    return x(new w(r, t));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createGetExecutor(t = "", s = {}) {
    let r = n.merge({
      method: m.GET,
      data: null,
      params: null,
      headers: { "Content-Type": d["application/x-www-form-urlencoded"] }
    }, s), a = this.createAxiosInstance(r);
    return x(new ee(a, t));
  }
  /**
   *
   * @param options  axios实例配置选项，此选项中的data及params不会生效
   */
  createPostExecutor(t = "", s = {}) {
    let r = n.merge({
      method: m.POST,
      data: null,
      params: null,
      headers: { "Content-Type": d["multipart/form-data"] }
    }, s), a = this.createAxiosInstance(r);
    return x(new te(a, t));
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
  static getInstance(t) {
    return this.instance ? t && console.error("实例已经存在，重获取实例时，配置选项将不会生效！") : this.instance = new j(n.merge(g, t || {})), this.instance;
  }
};
let P = j;
l(P, "instance");
export {
  M as AbstractAxiosHelper,
  P as AxiosHelper,
  w as Executor,
  ee as GetExecutor,
  d as HttpContentType,
  m as HttpMethod,
  te as PostExecutor
};
