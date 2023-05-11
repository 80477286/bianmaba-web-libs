const p = Object.prototype.toString, $ = ((t) => (e) => {
  let r = p.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), o = (t) => (t = t.toLowerCase(), function(r) {
  return $(r) === t;
}), C = (t, e) => function() {
  return t.apply(e, arguments);
}, a = (t) => Array.isArray(t), f = (t) => typeof t > "u", B = (t) => t !== null && !f(t) && t.constructor !== null && !f(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t), d = o("ArrayBuffer"), A = (t) => {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && d(t.buffer), e;
}, O = (t) => typeof t == "string", W = (t) => typeof t == "boolean", F = (t) => typeof t == "number" && isFinite(t), m = (t) => t != null && typeof t == "object" && Array.isArray(t) === !1, c = (t) => {
  if ($(t) !== "object")
    return !1;
  let e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}, S = o("Date"), w = o("File"), b = o("Blob"), h = o("FileList"), l = (t) => p.call(t) === "[object Function]", P = (t) => m(t) && l(t.pipe), D = (t) => {
  let e = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || p.call(t) === e || l(t.toString) && t.toString() === e);
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
}, z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  delay: _,
  endsWith: R,
  extend: V,
  forEach: y,
  inherits: E,
  isArray: a,
  isArrayBuffer: d,
  isArrayBufferView: A,
  isBlob: b,
  isBoolean: W,
  isBuffer: B,
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
}, Symbol.toStringTag, { value: "Module" })), I = u, K = _, q = M, G = T, H = R, J = j, Q = E, X = x, Y = V, Z = y, k = N, v = U, tt = L, et = D, rt = P, nt = l, it = h, st = b, ot = w, ct = S, ft = c, ut = m, at = F, lt = O, yt = A, pt = d, dt = B, mt = f, gt = a;
export {
  z as default,
  K as delay,
  H as endsWith,
  Y as extend,
  Z as forEach,
  Q as inherits,
  gt as isArray,
  pt as isArrayBuffer,
  yt as isArrayBufferView,
  st as isBlob,
  dt as isBuffer,
  ct as isDate,
  ot as isFile,
  it as isFileList,
  et as isFormData,
  nt as isFunction,
  at as isNumber,
  ut as isObject,
  ft as isPlainObject,
  k as isStandardBrowserEnv,
  rt as isStream,
  lt as isString,
  q as isTypedArray,
  tt as isURLSearchParams,
  mt as isUndefined,
  I as merge,
  X as stripBOM,
  G as toArray,
  J as toFlatObject,
  v as trim
};
//# sourceMappingURL=index.js.map
