(function(r,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("axios"),require("vue")):typeof define=="function"&&define.amd?define(["exports","axios","vue"],n):(r=typeof globalThis<"u"?globalThis:r||self,n(r.index={},r.Axios,r.Vue))})(this,function(r,n,o){"use strict";var y=Object.defineProperty;var N=(r,n,o)=>n in r?y(r,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[n]=o;var c=(r,n,o)=>(N(r,typeof n!="symbol"?n+"":n,o),o);const L=Object.prototype.toString,R=(e=>s=>{let a=L.call(s);return e[a]||(e[a]=a.slice(8,-1).toLowerCase())})(Object.create(null)),u=e=>(e=e.toLowerCase(),function(s){return R(s)===e}),b=e=>Array.isArray(e);u("ArrayBuffer");const O=e=>{if(R(e)!=="object")return!1;let s=Object.getPrototypeOf(e);return s===null||s===Object.prototype};u("Date"),u("File"),u("Blob"),u("FileList"),u("URLSearchParams");const q=(e,s)=>{if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),b(e))for(let a=0,t=e.length;a<t;a++)s.call(null,e[a],a,e);else for(let a in e)Object.prototype.hasOwnProperty.call(e,a)&&s.call(null,e[a],a,e)},g=function(...e){let s=arguments[0],a=(t,l)=>{O(s[l])&&O(t)?s[l]=g(s[l],t):O(t)?s[l]=g({},t):b(t)?s[l]=t.slice():s[l]=t};for(let t=0,l=arguments.length;t<l;t++)q(arguments[t],a);return s},i=g;var d=(e=>(e["application/atom+xml"]="application/atom+xml",e["application/json"]="application/json",e["application/x-www-form-urlencoded"]="application/x-www-form-urlencoded",e["application/xml"]="application/xml",e["multipart/form-data"]="multipart/form-data",e["text/html"]="text/html",e["text/plain"]="text/plain",e))(d||{}),p=(e=>(e.POST="POST",e.GET="GET",e.DELETE="DELETE",e.HEAD="HEAD",e.OPTIONS="OPTIONS",e.PUT="PUT",e.PATCH="PATCH",e.PURGE="PURGE",e.LINK="LINK",e.UNLINK="UNLINK",e))(p||{});const m={method:p.POST,headers:{"Content-Type":d["application/json"]},xRequestedWith:"XMLHttpRequest"};class T{constructor(s=m){c(this,"globalOptions",m);this.globalOptions=i(this.globalOptions||{},s),console.debug("初始化全局配置..."),n.defaults.baseURL=this.globalOptions.baseUrl,n.defaults.method=this.globalOptions.method,n.defaults.headers.common["X-Requested-With"]=this.globalOptions.xRequestedWith,n.interceptors.request.use(this.globalOptions.requestSuccessHandler||this.defaultRequestSuccessHandler,this.globalOptions.requestFailHandler||this.defaultRequestFailHandler),n.interceptors.response.use(this.globalOptions.responseSuccessHandler||this.defaultResponseSuccessHandler,this.globalOptions.responseFailHandler||this.defaultResponseFailHandler),console.debug("全局配置初始化完成。")}defaultRequestSuccessHandler(s){return s}defaultRequestFailHandler(s){return console.error("远程请求出现错误!"),Promise.reject(s)}defaultResponseSuccessHandler(s){return s}defaultResponseFailHandler(s){var a,t;return console.log(((t=(a=s.response)==null?void 0:a.data)==null?void 0:t.result)||"远程请求出现错误(code="+s.response.status+")"),Promise.reject(s)}createAxiosInstance(s){let a=n.create(s);return console.log("axios instance created"),a.interceptors.request.use(this.globalOptions.requestSuccessHandler,this.globalOptions.requestFailHandler),a.interceptors.response.use(this.globalOptions.responseSuccessHandler,this.globalOptions.responseFailHandler),a}}class f{constructor(s,a){c(this,"instance");c(this,"url","");c(this,"loading",!1);c(this,"response",{success:!1});c(this,"data",{});c(this,"params",{});this.instance=s,this.url=a||""}execute(s={}){return this.loading=!0,this.data=i(this.data||{},s.data||{}),this.params=i(this.params||{},s.params||{}),s.url=s.url?s.url:this.url,new Promise((a,t)=>{this.instance.request(s).then(l=>{try{this.handleThenResponse(a,l)}finally{this.loading=!1}}).catch(l=>{try{this.handleCatchResponse(t,l)}finally{this.loading=!1}})})}setDefaultResponse(s={}){return this.response=i(this.response,s),this}setDefaultRequestData(s={}){return this.data=i(this.data,s),this}setDefaultResultParams(s={}){return this.params=i(this.params,s),this}handleThenResponse(s,a){this.response=a.data,s(a.data)}handleCatchResponse(s,a){if(console.error("远程请求发生异常：",a),a.response)this.response=a.response.data,s(a.response.data);else{let t={success:!1,result:"远程请求发生异常！",data:null};this.response=t,s(t)}}}class w extends f{constructor(s,a){super(s,a)}execute(s={},a={}){return this.loading=!0,this.params=i(this.params||{},a.params||{},s||{}),a.params=this.params,new Promise((t,l)=>{this.instance.get(a.url||this.url,a).then(h=>{try{this.handleThenResponse(t,h)}finally{this.loading=!1}}).catch(h=>{try{this.handleCatchResponse(l,h)}finally{this.loading=!1}})})}}class S extends f{constructor(s,a){super(s,a)}execute(s={},a={},t={}){return this.loading=!0,this.data=i(this.data||{},t.data||{},s||{}),this.params=i(this.params||{},t.params||{},a||{}),this.setDefaultResponse({total:0,page:1,size:10}),t.params=this.params,new Promise((l,h)=>{this.instance.post(t.url||this.url,this.data,t).then(E=>{try{this.handleThenResponse(l,E)}finally{this.loading=!1}}).catch(E=>{try{this.handleCatchResponse(h,E)}finally{this.loading=!1}})})}}const P=class extends T{constructor(s=m){super(s)}createRequestExecutor(s="",a={}){let t=this.createAxiosInstance(a);return o.reactive(new f(t,s))}createGetExecutor(s="",a={}){let t=i({method:p.GET,data:null,params:null,headers:{"Content-Type":d["application/x-www-form-urlencoded"]}},a),l=this.createAxiosInstance(t);return o.reactive(new w(l,s))}createPostExecutor(s="",a={}){let t=i({method:p.POST,data:null,params:null,headers:{"Content-Type":d["multipart/form-data"]}},a),l=this.createAxiosInstance(t);return o.reactive(new S(l,s))}static getInstance(s){return this.instance?s&&console.error("实例已经存在，重获取实例时，配置选项将不会生效！"):this.instance=new P(i(m,s||{})),this.instance}};let x=P;c(x,"instance");var A=(e=>(e["application/atom+xml"]="application/atom+xml",e["application/json"]="application/json",e["application/x-www-form-urlencoded"]="application/x-www-form-urlencoded",e["application/xml"]="application/xml",e["multipart/form-data"]="multipart/form-data",e["text/html"]="text/html",e["text/plain"]="text/plain",e))(A||{}),I=(e=>(e.POST="POST",e.GET="GET",e.DELETE="DELETE",e.HEAD="HEAD",e.OPTIONS="OPTIONS",e.PUT="PUT",e.PATCH="PATCH",e.PURGE="PURGE",e.LINK="LINK",e.UNLINK="UNLINK",e))(I||{});r.AbstractAxiosHelper=T,r.AxiosHelper=x,r.Executor=f,r.GetExecutor=w,r.HttpContentType=A,r.HttpMethod=I,r.PostExecutor=S,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});