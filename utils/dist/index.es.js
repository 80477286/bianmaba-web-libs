const d = Object.prototype.toString, $ = ((t) => (e) => {
  let r = d.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), o = (t) => (t = t.toLowerCase(), function(r) {
  return $(r) === t;
}), C = (t, e) => function() {
  return t.apply(e, arguments);
}, a = (t) => Array.isArray(t), f = (t) => typeof t > "u", A = (t) => t !== null && !f(t) && t.constructor !== null && !f(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t), p = o("ArrayBuffer"), B = (t) => {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && p(t.buffer), e;
}, O = (t) => typeof t == "string", F = (t) => typeof t == "number" && isFinite(t), m = (t) => t != null && typeof t == "object" && Array.isArray(t) === !1, c = (t) => {
  if ($(t) !== "object")
    return !1;
  let e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}, S = o("Date"), w = o("File"), b = o("Blob"), h = o("FileList"), l = (t) => d.call(t) === "[object Function]", P = (t) => m(t) && l(t.pipe), D = (t) => {
  let e = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || d.call(t) === e || l(t.toString) && t.toString() === e);
}, L = o("URLSearchParams"), U = (t) => t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, ""), N = () => typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u", y = (t, e) => {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), a(t))
      for (let r = 0, n = t.length; r < n; r++)
        e.call(null, t[r], r, t);
    else
      for (let r in t)
        Object.prototype.hasOwnProperty.call(t, r) && e.call(null, t[r], r, t);
}, V = (t, e, r) => (y(e, function(i, s) {
  r && typeof i == "function" ? t[s] = C(i, r) : t[s] = i;
}), t), x = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), E = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, r && Object.assign(t.prototype, r);
}, j = (t, e, r) => {
  let n, i, s, g = {};
  e = e || {};
  do {
    for (n = Object.getOwnPropertyNames(t), i = n.length; i-- > 0; )
      s = n[i], g[s] || (e[s] = t[s], g[s] = !0);
    t = Object.getPrototypeOf(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, R = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  let n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, T = (t) => {
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
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), _ = (t = 1e3) => new Promise((e) => {
  setTimeout(e, t);
}), u = function(...t) {
  let e = arguments[0], r = (n, i) => {
    c(e[i]) && c(n) ? e[i] = u(e[i], n) : c(n) ? e[i] = u({}, n) : a(n) ? e[i] = n.slice() : e[i] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    y(arguments[n], r);
  return e;
}, W = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  delay: _,
  endsWith: R,
  extend: V,
  forEach: y,
  inherits: E,
  isArray: a,
  isArrayBuffer: p,
  isArrayBufferView: B,
  isBlob: b,
  isBuffer: A,
  isDate: S,
  isFile: w,
  isFileList: h,
  isFormData: D,
  isFunction: l,
  isNumber: F,
  isObject: m,
  isPlainObject: c,
  isStandardBrowserEnv: N,
  isStream: P,
  isString: O,
  isTypedArray: M,
  isURLSearchParams: L,
  isUndefined: f,
  merge: u,
  stripBOM: x,
  toArray: T,
  toFlatObject: j,
  trim: U
}, Symbol.toStringTag, { value: "Module" })), z = u, I = _, K = M, q = T, G = R, H = j, J = E, Q = x, X = V, Y = y, Z = N, k = U, v = L, tt = D, et = P, rt = l, nt = h, it = b, st = w, ot = S, ct = c, ft = m, ut = F, at = O, lt = B, yt = p, dt = A, pt = f, mt = a;
export {
  W as default,
  I as delay,
  G as endsWith,
  X as extend,
  Y as forEach,
  J as inherits,
  mt as isArray,
  yt as isArrayBuffer,
  lt as isArrayBufferView,
  it as isBlob,
  dt as isBuffer,
  ot as isDate,
  st as isFile,
  nt as isFileList,
  tt as isFormData,
  rt as isFunction,
  ut as isNumber,
  ft as isObject,
  ct as isPlainObject,
  Z as isStandardBrowserEnv,
  et as isStream,
  at as isString,
  K as isTypedArray,
  v as isURLSearchParams,
  pt as isUndefined,
  z as merge,
  Q as stripBOM,
  q as toArray,
  H as toFlatObject,
  k as trim
};
//# sourceMappingURL=index.es.js.map
