const d = Object.prototype.toString, B = ((t) => (e) => {
  let r = d.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), o = (t) => (t = t.toLowerCase(), function(r) {
  return B(r) === t;
}), z = (t, e) => function() {
  return t.apply(e, arguments);
}, a = (t) => Array.isArray(t), u = (t) => typeof t > "u", A = (t) => t !== null && !u(t) && t.constructor !== null && !u(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t), m = o("ArrayBuffer"), O = (t) => {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && m(t.buffer), e;
}, l = (t) => typeof t == "string", I = (t) => typeof t == "boolean", F = (t) => typeof t == "number" && isFinite(t), $ = (t) => t != null && typeof t == "object" && Array.isArray(t) === !1, c = (t) => {
  if (B(t) !== "object")
    return !1;
  let e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}, S = o("Date"), w = o("File"), b = o("Blob"), h = o("FileList"), y = (t) => d.call(t) === "[object Function]", P = (t) => $(t) && y(t.pipe), E = (t) => {
  let e = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || d.call(t) === e || y(t.toString) && t.toString() === e);
}, D = o("URLSearchParams"), L = (t) => t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, ""), N = () => typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u", p = (t, e) => {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), a(t))
      for (let r = 0, n = t.length; r < n; r++)
        e.call(null, t[r], r, t);
    else
      for (let r in t)
        Object.prototype.hasOwnProperty.call(t, r) && e.call(null, t[r], r, t);
}, U = (t, e, r) => (p(e, function(i, s) {
  r && typeof i == "function" ? t[s] = z(i, r) : t[s] = i;
}), t), V = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), x = (t, e, r, n) => {
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
  if (u(e))
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
}), f = function(...t) {
  let e = arguments[0], r = (n, i) => {
    c(e[i]) && c(n) ? e[i] = f(e[i], n) : c(n) ? e[i] = f({}, n) : a(n) ? e[i] = n.slice() : e[i] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    p(arguments[n], r);
  return e;
}, C = function(t) {
  return !!(t == null || t == null || l(t) && t === "");
}, W = function(t) {
  return !(t == null || t == null || l(t) && t === "");
}, K = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  delay: _,
  endsWith: R,
  extend: U,
  forEach: p,
  inherits: x,
  isArray: a,
  isArrayBuffer: m,
  isArrayBufferView: O,
  isBlob: b,
  isBoolean: I,
  isBuffer: A,
  isDate: S,
  isEmpty: C,
  isFile: w,
  isFileList: h,
  isFormData: E,
  isFunction: y,
  isNotEmpty: W,
  isNumber: F,
  isObject: $,
  isPlainObject: c,
  isStandardBrowserEnv: N,
  isStream: P,
  isString: l,
  isTypedArray: M,
  isURLSearchParams: D,
  isUndefined: u,
  merge: f,
  stripBOM: V,
  toArray: T,
  toFlatObject: j,
  trim: L
}, Symbol.toStringTag, { value: "Module" })), q = f, G = _, H = M, J = T, Q = R, X = j, Y = x, Z = V, k = U, v = p, tt = N, et = L, rt = D, nt = E, it = P, st = y, ot = h, ct = b, ut = w, ft = S, at = c, lt = $, yt = F, pt = l, dt = O, mt = m, $t = A, gt = u, Bt = a, At = C, Ot = W;
export {
  K as default,
  G as delay,
  Q as endsWith,
  k as extend,
  v as forEach,
  Y as inherits,
  Bt as isArray,
  mt as isArrayBuffer,
  dt as isArrayBufferView,
  ct as isBlob,
  $t as isBuffer,
  ft as isDate,
  At as isEmpty,
  ut as isFile,
  ot as isFileList,
  nt as isFormData,
  st as isFunction,
  Ot as isNotEmpty,
  yt as isNumber,
  lt as isObject,
  at as isPlainObject,
  tt as isStandardBrowserEnv,
  it as isStream,
  pt as isString,
  H as isTypedArray,
  rt as isURLSearchParams,
  gt as isUndefined,
  q as merge,
  Z as stripBOM,
  J as toArray,
  X as toFlatObject,
  et as trim
};
//# sourceMappingURL=index.js.map
