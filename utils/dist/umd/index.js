(function(n,c){typeof exports=="object"&&typeof module<"u"?c(exports):typeof define=="function"&&define.amd?define(["exports"],c):(n=typeof globalThis<"u"?globalThis:n||self,c(n.utils={}))})(this,function(n){"use strict";const c=Object.prototype.toString,p=(t=>e=>{let r=c.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),f=t=>(t=t.toLowerCase(),function(r){return p(r)===t}),z=(t,e)=>function(){return t.apply(e,arguments)},l=t=>Array.isArray(t),u=t=>typeof t>"u",A=t=>t!==null&&!u(t)&&t.constructor!==null&&!u(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t),g=f("ArrayBuffer"),$=t=>{let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&g(t.buffer),e},O=t=>typeof t=="string",F=t=>typeof t=="number"&&isFinite(t),B=t=>t!=null&&typeof t=="object"&&Array.isArray(t)===!1,a=t=>{if(p(t)!=="object")return!1;let e=Object.getPrototypeOf(t);return e===null||e===Object.prototype},S=f("Date"),b=f("File"),h=f("Blob"),w=f("FileList"),d=t=>c.call(t)==="[object Function]",P=t=>B(t)&&d(t.pipe),D=t=>{let e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||c.call(t)===e||d(t.toString)&&t.toString()===e)},L=f("URLSearchParams"),U=t=>t.trim?t.trim():t.replace(/^\s+|\s+$/g,""),j=()=>typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u",y=(t,e)=>{if(!(t===null||typeof t>"u"))if(typeof t!="object"&&(t=[t]),l(t))for(let r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else for(let r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.call(null,t[r],r,t)},T=(t,e,r)=>(y(e,function(s,o){r&&typeof s=="function"?t[o]=z(s,r):t[o]=s}),t),E=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),N=(t,e,r,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,r&&Object.assign(t.prototype,r)},V=(t,e,r)=>{let i,s,o,C={};e=e||{};do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],C[o]||(e[o]=t[o],C[o]=!0);t=Object.getPrototypeOf(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e},M=(t,e,r)=>{t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;let i=t.indexOf(e,r);return i!==-1&&i===r},R=t=>{if(!t)return null;let e=t.length;if(u(e))return null;let r=new Array(e);for(;e-- >0;)r[e]=t[e];return r},_=function(t){return function(e){return t&&e instanceof t}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),W=(t=1e3)=>new Promise(e=>{setTimeout(e,t)}),m=function(...t){let e=arguments[0],r=(i,s)=>{a(e[s])&&a(i)?e[s]=m(e[s],i):a(i)?e[s]=m({},i):l(i)?e[s]=i.slice():e[s]=i};for(let i=0,s=arguments.length;i<s;i++)y(arguments[i],r);return e},I=Object.freeze(Object.defineProperty({__proto__:null,delay:W,endsWith:M,extend:T,forEach:y,inherits:N,isArray:l,isArrayBuffer:g,isArrayBufferView:$,isBlob:h,isBuffer:A,isDate:S,isFile:b,isFileList:w,isFormData:D,isFunction:d,isNumber:F,isObject:B,isPlainObject:a,isStandardBrowserEnv:j,isStream:P,isString:O,isTypedArray:_,isURLSearchParams:L,isUndefined:u,merge:m,stripBOM:E,toArray:R,toFlatObject:V,trim:U},Symbol.toStringTag,{value:"Module"})),K=m,q=W,G=_,H=R,J=M,Q=V,X=N,Y=E,Z=T,k=y,v=j,x=U,tt=L,et=D,rt=P,nt=d,it=w,st=h,ot=b,ct=S,ft=a,ut=B,at=F,lt=O,dt=$,yt=g,mt=A,gt=u,Bt=l;n.default=I,n.delay=q,n.endsWith=J,n.extend=Z,n.forEach=k,n.inherits=X,n.isArray=Bt,n.isArrayBuffer=yt,n.isArrayBufferView=dt,n.isBlob=st,n.isBuffer=mt,n.isDate=ct,n.isFile=ot,n.isFileList=it,n.isFormData=et,n.isFunction=nt,n.isNumber=at,n.isObject=ut,n.isPlainObject=ft,n.isStandardBrowserEnv=v,n.isStream=rt,n.isString=lt,n.isTypedArray=G,n.isURLSearchParams=tt,n.isUndefined=gt,n.merge=K,n.stripBOM=Y,n.toArray=H,n.toFlatObject=Q,n.trim=x,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=index.js.map