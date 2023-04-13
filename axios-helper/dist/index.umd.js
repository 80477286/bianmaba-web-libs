(function(r,l){typeof exports=="object"&&typeof module<"u"?l(exports,require("axios"),require("vue")):typeof define=="function"&&define.amd?define(["exports","axios","vue"],l):(r=typeof globalThis<"u"?globalThis:r||self,l(r.index={},r.Axios,r.Vue))})(this,function(r,l,u){"use strict";var A=Object.defineProperty;var I=(r,l,u)=>l in r?A(r,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[l]=u;var c=(r,l,u)=>(I(r,typeof l!="symbol"?l+"":l,u),u);const w=Object.prototype.toString,P=(s=>e=>{let t=w.call(e);return s[t]||(s[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),o=s=>(s=s.toLowerCase(),function(t){return P(t)===s}),E=s=>Array.isArray(s);o("ArrayBuffer");const O=s=>{if(P(s)!=="object")return!1;let e=Object.getPrototypeOf(s);return e===null||e===Object.prototype};o("Date"),o("File"),o("Blob"),o("FileList"),o("URLSearchParams");const b=(s,e)=>{if(!(s===null||typeof s>"u"))if(typeof s!="object"&&(s=[s]),E(s))for(let t=0,a=s.length;t<a;t++)e.call(null,s[t],t,s);else for(let t in s)Object.prototype.hasOwnProperty.call(s,t)&&e.call(null,s[t],t,s)},i=function(...s){let e=arguments[0],t=(a,n)=>{O(e[n])&&O(a)?e[n]=i(e[n],a):O(a)?e[n]=i({},a):E(a)?e[n]=a.slice():e[n]=a};for(let a=0,n=arguments.length;a<n;a++)b(arguments[a],t);return e};var h=(s=>(s["application/atom+xml"]="application/atom+xml",s["application/json"]="application/json",s["application/x-www-form-urlencoded"]="application/x-www-form-urlencoded",s["application/xml"]="application/xml",s["multipart/form-data"]="multipart/form-data",s["text/html"]="text/html",s["text/plain"]="text/plain",s))(h||{}),d=(s=>(s.POST="POST",s.GET="GET",s.DELETE="DELETE",s.HEAD="HEAD",s.OPTIONS="OPTIONS",s.PUT="PUT",s.PATCH="PATCH",s.PURGE="PURGE",s.LINK="LINK",s.UNLINK="UNLINK",s))(d||{});const f={method:d.POST,headers:{"Content-Type":h["application/json"]},xRequestedWith:"XMLHttpRequest"};class T{constructor(e=f){c(this,"globalOptions",f);this.globalOptions=i(this.globalOptions||{},e),console.debug("初始化全局配置..."),l.defaults.baseURL=this.globalOptions.baseUrl,l.defaults.method=this.globalOptions.method,l.defaults.headers.common["X-Requested-With"]=this.globalOptions.xRequestedWith,l.interceptors.request.use(this.globalOptions.requestSuccessHandler||this.defaultRequestSuccessHandler,this.globalOptions.requestFailHandler||this.defaultRequestFailHandler),l.interceptors.response.use(this.globalOptions.responseSuccessHandler||this.defaultResponseSuccessHandler,this.globalOptions.responseFailHandler||this.defaultResponseFailHandler),console.debug("全局配置初始化完成。")}defaultRequestSuccessHandler(e){return e}defaultRequestFailHandler(e){return console.error("远程请求出现错误!"),Promise.reject(e)}defaultResponseSuccessHandler(e){return e}defaultResponseFailHandler(e){var t,a;return console.log(((a=(t=e.response)==null?void 0:t.data)==null?void 0:a.result)||"远程请求出现错误(code="+e.response.status+")"),Promise.reject(e)}createAxiosInstance(e){let t=l.create(e);return t.interceptors.request.use(this.globalOptions.requestSuccessHandler,this.globalOptions.requestFailHandler),t.interceptors.response.use(this.globalOptions.responseSuccessHandler,this.globalOptions.responseFailHandler),t}}class m{constructor(e,t){c(this,"instance");c(this,"url","");c(this,"loading",!1);c(this,"response",{success:!1});c(this,"data",{});c(this,"params",{});this.instance=e,this.url=t||""}execute(e={}){return this.loading=!0,this.data=i(this.data||{},e.data||{}),this.params=i(this.params||{},e.params||{}),e.url=e.url?e.url:this.url,new Promise((t,a)=>{this.instance.request(e).then(n=>{this.handleThenResponse(t,n)}).catch(n=>{this.handleCatchResponse(a,n)}).finally(()=>{this.loading=!1})})}setDefaultResponse(e={}){return this.response=i(this.response,e),this}setDefaultRequestData(e={}){return this.data=i(this.data,e),this}setDefaultResultParams(e={}){return this.params=i(this.params,e),this}handleThenResponse(e,t){this.response=t.data,e(t.data)}handleCatchResponse(e,t){if(console.error("远程请求发生异常：",t),t.response)this.response=t.response.data,e(t.response.data);else{let a={success:!1,result:"远程请求发生异常！",data:null};this.response=a,e(a)}}}class S extends m{constructor(e,t){super(e,t)}execute(e={},t={}){return this.loading=!0,this.params=i(this.params||{},t.params||{},e||{}),t.params=this.params,new Promise((a,n)=>{this.instance.get(t.url||this.url,t).then(p=>{this.handleThenResponse(a,p)}).catch(p=>{this.handleCatchResponse(n,p)}).finally(()=>{this.loading=!1})})}}class q extends m{constructor(e,t){super(e,t)}execute(e={},t={},a={}){return this.loading=!0,this.data=i(this.data||{},a.data||{},e||{}),this.params=i(this.params||{},a.params||{},t||{}),this.setDefaultResponse({total:0,page:1,size:10}),a.params=this.params,new Promise((n,p)=>{this.instance.post(a.url||this.url,this.data,a).then(R=>{this.handleThenResponse(n,R)}).catch(R=>{this.handleCatchResponse(p,R)}).finally(()=>{this.loading=!1})})}}const x=class extends T{constructor(e=f){super(e)}createRequestExecutor(e="",t={}){let a=this.createAxiosInstance(t);return u.reactive(new m(a,e))}createGetExecutor(e="",t={}){let a=i({method:d.GET,data:null,params:null,headers:{"Content-Type":h["application/x-www-form-urlencoded"]}},t),n=this.createAxiosInstance(a);return u.reactive(new S(n,e))}createPostExecutor(e="",t={}){let a=i({method:d.POST,data:null,params:null,headers:{"Content-Type":h["multipart/form-data"]}},t),n=this.createAxiosInstance(a);return u.reactive(new q(n,e))}static getInstance(){return this.getInstance()}static getInstance(e){return this.instance?e&&console.error("实例已经存在，重获取实例时，配置选项将不会生效！"):this.instance=new x(i(f,e||{})),this.instance}};let g=x;c(g,"instance"),r.AbstractAxiosHelper=T,r.AxiosHelper=g,r.Executor=m,r.GetExecutor=S,r.HttpContentType=h,r.HttpMethod=d,r.PostExecutor=q,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
