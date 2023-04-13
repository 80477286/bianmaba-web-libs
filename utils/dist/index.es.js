const c = Object.prototype.toString, p = function(t) {
  return function(e) {
    let r = c.call(e);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null)), f = (t) => (t = t.toLowerCase(), function(r) {
  return p(r) === t;
}), y = (t) => Array.isArray(t), s = (t) => typeof t > "u", O = (t) => t !== null && !s(t) && t.constructor !== null && !s(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t), m = f("ArrayBuffer"), B = (t) => {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && m(t.buffer), e;
}, F = (t) => typeof t == "string", S = (t) => typeof t == "number" && isFinite(t), w = (t) => t != null && typeof t == "object" && Array.isArray(t) === !1, u = (t) => {
  if (p(t) !== "object")
    return !1;
  let e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}, h = f("Date"), P = f("File"), D = f("Blob"), L = f("FileList"), d = (t) => c.call(t) === "[object Function]", N = (t) => w(t) && d(t.pipe), U = (t) => {
  let e = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || c.call(t) === e || d(t.toString) && t.toString() === e);
}, V = f("URLSearchParams"), b = (t) => t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, ""), x = () => typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u", g = (t, e) => {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), y(t))
      for (let r = 0, n = t.length; r < n; r++)
        e.call(null, t[r], r, t);
    else
      for (let r in t)
        Object.prototype.hasOwnProperty.call(t, r) && e.call(null, t[r], r, t);
};
function A(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const C = (t, e, r) => (g(e, function(i, o) {
  r && typeof i == "function" ? t[o] = A(i, r) : t[o] = i;
}), t), R = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), E = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, r && Object.assign(t.prototype, r);
}, T = (t, e, r) => {
  let n, i, o, l = {};
  e = e || {};
  do {
    for (n = Object.getOwnPropertyNames(t), i = n.length; i-- > 0; )
      o = n[i], l[o] || (e[o] = t[o], l[o] = !0);
    t = Object.getPrototypeOf(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, I = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  let n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, K = (t) => {
  if (!t)
    return null;
  let e = t.length;
  if (s(e))
    return null;
  let r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, M = function(t) {
  return function(e) {
    return t && e instanceof t;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), W = (t = 1e3) => new Promise((e) => {
  setTimeout(e, t);
}), a = function(...t) {
  if (arguments.length > 1) {
    let e = arguments[0], r = (n, i) => {
      u(e[i]) && u(n) ? e[i] = a(e[i], n) : u(n) ? e[i] = a({}, n) : y(n) ? e[i] = n.slice() : e[i] = n;
    };
    for (let n = 0, i = arguments.length; n < i; n++)
      g(arguments[n], r);
  }
};
export {
  W as delay,
  I as endsWith,
  C as extend,
  g as forEach,
  E as inherits,
  y as isArray,
  m as isArrayBuffer,
  B as isArrayBufferView,
  D as isBlob,
  O as isBuffer,
  h as isDate,
  P as isFile,
  L as isFileList,
  U as isFormData,
  d as isFunction,
  S as isNumber,
  w as isObject,
  u as isPlainObject,
  x as isStandardBrowserEnv,
  N as isStream,
  F as isString,
  M as isTypedArray,
  V as isURLSearchParams,
  s as isUndefined,
  a as merge,
  R as stripBOM,
  K as toArray,
  T as toFlatObject,
  b as trim
};
