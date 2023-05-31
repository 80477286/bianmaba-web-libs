(function(l,u){typeof exports=="object"&&typeof module<"u"?u(exports,require("axios"),require("vue")):typeof define=="function"&&define.amd?define(["exports","axios","vue"],u):(l=typeof globalThis<"u"?globalThis:l||self,u(l.index={},l.Axios,l.Vue))})(this,function(l,u,c){"use strict";var $=Object.defineProperty;var W=(l,u,c)=>u in l?$(l,u,{enumerable:!0,configurable:!0,writable:!0,value:c}):l[u]=c;var r=(l,u,c)=>(W(l,typeof u!="symbol"?u+"":u,c),c);class v{constructor(e={}){r(this,"defaultAxiosInstance",u.create());this.defaultAxiosInstance=u.create(e||{}),this.defaultAxiosInstance.interceptors.response=u.interceptors.response,this.defaultAxiosInstance.interceptors.request=u.interceptors.request}}const G=Object.prototype.toString,I=(t=>e=>{let s=G.call(e);return t[s]||(t[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),p=t=>(t=t.toLowerCase(),function(e){return I(e)===t}),x=t=>Array.isArray(t);p("ArrayBuffer");const z=t=>t!=null&&typeof t=="object"&&Array.isArray(t)===!1,q=t=>{if(I(t)!=="object")return!1;let e=Object.getPrototypeOf(t);return e===null||e===Object.prototype};p("Date"),p("File"),p("Blob"),p("FileList"),p("URLSearchParams");const K=(t,e)=>{if(!(t===null||typeof t>"u"))if(typeof t!="object"&&(t=[t]),x(t))for(let s=0,a=t.length;s<a;s++)e.call(null,t[s],s,t);else for(let s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.call(null,t[s],s,t)},S=function(...t){let e=arguments[0],s=(a,n)=>{q(e[n])&&q(a)?e[n]=S(e[n],a):q(a)?e[n]=S({},a):x(a)?e[n]=a.slice():e[n]=a};for(let a=0,n=arguments.length;a<n;a++)K(arguments[a],s);return e},o=S,T=z,J=x;class O{constructor(){r(this,"order",new g("id","ascending"));r(this,"queryProperties",["id"])}}class j extends O{constructor(s=1,a=10,n=-1){super();r(this,"size",10);r(this,"page",1);r(this,"pageOffset",-1);this.page=s,this.size=a,this.pageOffset=n}setSize(s){this.size=s}setPage(s){this.page=s}setPageOffset(s){this.pageOffset=s}}class b{constructor(e,s,a){r(this,"property",null);r(this,"joinType",null);r(this,"on",null);this.property=e||this.property,this.joinType=s||this.joinType,this.on=a||this.on}of(e,s,a){return new b(e,s,a)}}class g{constructor(e,s){r(this,"prop",null);r(this,"order","ascending");this.prop=e,this.order=s}of(e,s="asc"){return new g(e,s)}}class B{constructor(e,s,a){r(this,"property",null);r(this,"value",null);r(this,"opt","eq");r(this,"and",[]);r(this,"or",[]);this.property=e||this.property,this.value=s||this.value,this.opt=a||this.opt}addAnd(e){this.and.push(e)}addOr(e){this.or.push(e)}}var U=(t=>(t.Asc="asc",t.Desc="desc",t))(U||{}),E=(t=>(t.equals="equals",t.eq="eq",t.ge="ge",t.gt="gt",t.lt="lt",t.le="le",t.ne="ne",t.notlike="notlike",t.like="like",t["like:"]="like:",t[":like"]=":like",t[":like:"]=":like:",t.lk="like",t["lk:"]="like:",t[":lk"]=":like",t[":lk:"]=":like:",t.between="between",t.btw="btw",t.isnull="isnull",t.isnotnull="isnotnull",t.isempty="isempty",t.isnotempty="isnotempty",t.in="in",t.notin="notin",t))(E||{}),h=(t=>(t["application/atom+xml"]="application/atom+xml",t["application/json"]="application/json",t["application/x-www-form-urlencoded"]="application/x-www-form-urlencoded",t["application/xml"]="application/xml",t["multipart/form-data"]="multipart/form-data",t["text/html"]="text/html",t["text/plain"]="text/plain",t))(h||{}),d=(t=>(t.POST="POST",t.GET="GET",t.DELETE="DELETE",t.HEAD="HEAD",t.OPTIONS="OPTIONS",t.PUT="PUT",t.PATCH="PATCH",t.PURGE="PURGE",t.LINK="LINK",t.UNLINK="UNLINK",t))(d||{});class y{constructor(){r(this,"success",!1);r(this,"data",null);r(this,"errors",[]);r(this,"exception",null);r(this,"extendedData",null);r(this,"messages",[]);r(this,"result",null);r(this,"status",null);r(this,"progressEvent",{progress:0})}}class L extends y{constructor(){super(...arguments);r(this,"data",[])}}class k extends L{constructor(){super(...arguments);r(this,"status",null);r(this,"total",0)}}const V=t=>t instanceof FormData?new FormData:t instanceof URLSearchParams?new URLSearchParams:J(t)?[]:T(t)?{}:t,m=(...t)=>{if(t.length<=0)return null;if(J(t[t.length-1]))return t[t.length-1];let e=V(t[t.length-1]);for(let s=0;s<t.length;s++){let a=t[s]||{};if(e instanceof FormData||e instanceof URLSearchParams||T(e)){if(a instanceof FormData)a.forEach((n,i)=>{e instanceof FormData||e instanceof URLSearchParams?e.append(i,n):e[i]=n});else if(a instanceof URLSearchParams)a.forEach((n,i)=>{e instanceof FormData||e instanceof URLSearchParams?e.append(i,n):e[i]=n});else if(T(a)){let n=Object.keys(a);if(e instanceof FormData||e instanceof URLSearchParams)n.forEach(i=>{e.append(i,a[i])});else{let i=JSON.parse(JSON.stringify(a));n.forEach(D=>{e[D]=i[D]})}}}}return e};class R{constructor(e,s,a={}){r(this,"controller",new AbortController);r(this,"instance");r(this,"options",{});r(this,"url","");r(this,"loading",!1);r(this,"data",{});r(this,"params",{});r(this,"response",new y);r(this,"defaultResponse",new y);r(this,"defaultRequestParams",{});r(this,"defaultRequestData",{});this.instance=e,this.url=s||this.url,this.options=a}abort(){this.controller.abort({success:!1,result:"请求操作已被用户取消！"})}initOptions(e={}){e.signal=this.controller.signal,e.onDownloadProgress&&(e._onDownloadProgress=e.onDownloadProgress,e.onDownloadProgress=s=>{this.data.progressEvent=s,e._onDownloadProgress(s)}),e.onUploadProgress&&(e._onUploadProgress=e.onUploadProgress,e.onUploadProgress=s=>{this.data.progressEvent=s,e._onUploadProgress(s)})}execute(e={}){return new Promise((s,a)=>{this.loading=!0,e=o({},this.options||{},e||{}),e.data=m(this.defaultRequestData,this.data,e.data),e.params=e.params=m(this.defaultRequestParams,this.params,e.params),e.url=e.url?e.url:this.url,this.initOptions(e),this.response=JSON.parse(JSON.stringify(this.defaultResponse)),this.instance.request(e).then(n=>{try{this.handleThenResponse(s,n)}finally{this.loading=!1}}).catch(n=>{try{this.handleCatchResponse(a,n)}finally{this.loading=!1}})})}toJsonRequest(){return o(this.options,{headers:{"Content-Type":h["application/json"]}}),this}toFormRequest(){return o(this.options,{headers:{"Content-Type":h["application/x-www-form-urlencoded"]}}),this}toFormDataRequest(){return o(this.options,{headers:{"Content-Type":h["multipart/form-data"]}}),this}setDefaultResponse(e={}){return this.defaultResponse=e,this.response=JSON.parse(JSON.stringify(this.defaultResponse)),this}mergeDefaultResponse(e={}){return o(this.defaultResponse,e||{},{}),this.response=JSON.parse(JSON.stringify(this.defaultResponse)),this}setDefaultRequestData(e={}){return this.defaultRequestData=e,this.data=JSON.parse(JSON.stringify(this.defaultRequestData)),this}mergeDefaultRequestData(e={}){return o(this.defaultRequestData,e||{}),this.data=JSON.parse(JSON.stringify(this.defaultRequestData)),this}setDefaultResultParams(e={}){return this.defaultRequestParams=e,this.params=JSON.parse(JSON.stringify(this.defaultRequestParams)),this}handleThenResponse(e,s){var a;this.response=o({},this.defaultResponse,s.data),this.response.total&&(this.data.total=this.response.total),this.response.page&&(this.data.page=((a=this.response)==null?void 0:a.page)-(this.data.pageOffset||0)),this.response.size&&(this.data.size=this.response.size),e(this.response)}handleCatchResponse(e,s){if(console.error("远程请求发生异常：",s),s.response)this.response=o({},this.defaultResponse,s.response.data),e(this.response);else{let a={success:!1,result:"远程请求发生异常！"};this.response=o({},this.defaultResponse,a),e(this.response)}}}class F extends R{constructor(e,s,a={}){super(e,s,a)}execute(e={},s={}){return this.loading=!0,s=o({},this.options||{},s||{}),s.params=m(this.defaultRequestParams,this.params,s.params,e),this.initOptions(s),this.response=JSON.parse(JSON.stringify(this.defaultResponse)),new Promise((a,n)=>{this.instance.get(s.url||this.url,s).then(i=>{try{this.handleThenResponse(a,i)}finally{this.loading=!1}}).catch(i=>{try{this.handleCatchResponse(n,i)}finally{this.loading=!1}})})}}class N extends R{constructor(e,s,a={}){super(e,s,a)}execute(e={},s={},a={}){this.loading=!0,a=o({},this.options||{},a||{});let n=m(this.defaultRequestData,this.data,a.data,e);return a.params=m(this.defaultRequestParams,this.params,a.params,s),this.initOptions(a),this.response=JSON.parse(JSON.stringify(this.defaultResponse)),new Promise((i,D)=>{this.instance.post(a.url||this.url,n,a).then(w=>{try{this.handleThenResponse(i,w),i(w.data)}finally{this.loading=!1}}).catch(w=>{try{this.handleCatchResponse(D,w)}finally{this.loading=!1}})})}}class A extends N{constructor(e,s,a={}){super(e,s,a),this.setDefaultResponse(new L),this.setDefaultRequestData(new O)}}class Q extends A{constructor(e,s,a={}){super(e,s,a),this.setDefaultResponse(new k),this.setDefaultRequestData(new j)}}const f=class extends v{constructor(e={}){super(e)}createRequestExecutor(e="",s={}){return c.reactive(new R(this.defaultAxiosInstance,e,s))}createGetExecutor(e="",s={}){let a=o({method:d.GET,headers:{"Content-Type":h["application/x-www-form-urlencoded"]}},s);return c.reactive(new F(this.defaultAxiosInstance,e,a))}createQueryExecutor(e="",s={}){let a=o({method:d.POST,headers:{"Content-Type":h["application/json"]}},s);return c.reactive(new A(this.defaultAxiosInstance,e,a))}createPageableQueryExecutor(e="",s={}){let a=o({method:d.POST,headers:{"Content-Type":h["application/json"]}},s);return c.reactive(new Q(this.defaultAxiosInstance,e,a))}createPostExecutor(e="",s={}){let a=o({method:d.POST,headers:{"Content-Type":h["multipart/form-data"]}},s);return c.reactive(new N(this.defaultAxiosInstance,e,a))}static getInstance(e){return this.instance?e&&console.error("实例已经存在，重获取实例时，配置选项将不会生效！"):this.instance=new f(e),this.instance}static post(){return{do(e,s={},a={},n={}){return f.getInstance().createPostExecutor(e,n).execute(s,a)},multipartFormData(e,s={},a={},n={}){return f.getInstance().createPostExecutor(e,n).toFormDataRequest().execute(s,a)},form(e,s={},a={},n={}){return f.getInstance().createPostExecutor(e,n).toFormRequest().execute(s,a)},json(e,s={},a={},n={}){return f.getInstance().createPostExecutor(e,n).toJsonRequest().execute(s,a)}}}static get(){return{do(e,s={},a={}){return f.getInstance().createGetExecutor(e,a).execute(s)}}}};let P=f;r(P,"instance"),l.Condition=B,l.DefaultPageableQueryRequestData=j,l.DefaultPageableQueryResponse=k,l.DefaultQueryRequestData=O,l.DefaultResponse=y,l.EConditionOpt=E,l.EOrderDirection=U,l.Executor=R,l.GetExecutor=F,l.HttpClient=P,l.HttpContentType=h,l.HttpMethod=d,l.Join=b,l.Order=g,l.PageableQueryExecutor=Q,l.PostExecutor=N,l.QueryExecutor=A,l.mergeDataOrParams=m,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.js.map
