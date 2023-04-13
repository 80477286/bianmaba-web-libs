const y = Object.prototype.toString, w = ((t) => (e) => {
  let r = y.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), s = (t) => (t = t.toLowerCase(), function(r) {
  return w(r) === t;
}), z = (t, e) => function() {
  return t.apply(e, arguments);
}, l = (t) => Array.isArray(t), f = (t) => typeof t > "u", O = (t) => t !== null && !f(t) && t.constructor !== null && !f(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t), d = s("ArrayBuffer"), A = (t) => {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && d(t.buffer), e;
}, B = (t) => typeof t == "string", S = (t) => typeof t == "number" && isFinite(t), g = (t) => t != null && typeof t == "object" && Array.isArray(t) === !1, u = (t) => {
  if (w(t) !== "object")
    return !1;
  let e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}, F = s("Date"), P = s("File"), h = s("Blob"), b = s("FileList"), a = (t) => y.call(t) === "[object Function]", D = (t) => g(t) && a(t.pipe), L = (t) => {
  let e = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || y.call(t) === e || a(t.toString) && t.toString() === e);
}, N = s("URLSearchParams"), U = (t) => t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, ""), V = () => typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u", p = (t, e) => {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), l(t))
      for (let r = 0, n = t.length; r < n; r++)
        e.call(null, t[r], r, t);
    else
      for (let r in t)
        Object.prototype.hasOwnProperty.call(t, r) && e.call(null, t[r], r, t);
}, x = (t, e, r) => (p(e, function(i, o) {
  r && typeof i == "function" ? t[o] = z(i, r) : t[o] = i;
}), t), _ = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), C = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, r && Object.assign(t.prototype, r);
}, R = (t, e, r) => {
  let n, i, o, m = {};
  e = e || {};
  do {
    for (n = Object.getOwnPropertyNames(t), i = n.length; i-- > 0; )
      o = n[i], m[o] || (e[o] = t[o], m[o] = !0);
    t = Object.getPrototypeOf(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, T = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  let n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, E = (t) => {
  if (!t)
    return null;
  let e = t.length;
  if (f(e))
    return null;
  let r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, M = function(t) {
  return function(e) {
    return t && e instanceof t;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), $ = (t = 1e3) => new Promise((e) => {
  setTimeout(e, t);
}), c = function(...t) {
  let e = arguments[0], r = (n, i) => {
    u(e[i]) && u(n) ? e[i] = c(e[i], n) : u(n) ? e[i] = c({}, n) : l(n) ? e[i] = n.slice() : e[i] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    p(arguments[n], r);
  return e;
}, I = {
  merge: c,
  delay: $,
  isTypedArray: M,
  toArray: E,
  endsWith: T,
  toFlatObject: R,
  inherits: C,
  stripBOM: _,
  extend: x,
  forEach: p,
  isStandardBrowserEnv: V,
  trim: U,
  isURLSearchParams: N,
  isFormData: L,
  isStream: D,
  isFunction: a,
  isFileList: b,
  isBlob: h,
  isFile: P,
  isDate: F,
  isPlainObject: u,
  isObject: g,
  isNumber: S,
  isString: B,
  isArrayBufferView: A,
  isArrayBuffer: d,
  isBuffer: O,
  isUndefined: f,
  isArray: l
}, K = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: I,
  delay: $,
  endsWith: T,
  extend: x,
  forEach: p,
  inherits: C,
  isArray: l,
  isArrayBuffer: d,
  isArrayBufferView: A,
  isBlob: h,
  isBuffer: O,
  isDate: F,
  isFile: P,
  isFileList: b,
  isFormData: L,
  isFunction: a,
  isNumber: S,
  isObject: g,
  isPlainObject: u,
  isStandardBrowserEnv: V,
  isStream: D,
  isString: B,
  isTypedArray: M,
  isURLSearchParams: N,
  isUndefined: f,
  merge: c,
  stripBOM: _,
  toArray: E,
  toFlatObject: R,
  trim: U
}, Symbol.toStringTag, { value: "Module" }));
export {
  K as utils
};
