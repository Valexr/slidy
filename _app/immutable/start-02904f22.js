import{S as Ye,i as We,s as Xe,a as Ze,e as C,c as Qe,b as z,g as de,t as F,d as he,f as J,h as G,j as xe,o as Re,k as et,l as tt,m as nt,n as Ee,p as V,q as rt,r as at,u as ot,v as X,w as Z,x as Le,y as Q,z as x,A as Ce}from"./chunks/index-33fd8535.js";import{g as Fe,f as Je,s as M,a as Oe,i as st}from"./chunks/singletons-1b6d46fa.js";import{_ as W,R as Ge,H as Ie}from"./chunks/control-129d3050.js";import{s as it}from"./chunks/paths-51f95b7f.js";function lt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function ct(a){for(const e in a)a[e]=a[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return a}const ft=["href","pathname","search","searchParams","toString","toJSON"];function ut(a,e){const n=new URL(a);for(const o of ft){let i=n[o];Object.defineProperty(n,o,{get(){return e(),i},enumerable:!0,configurable:!0})}return pt(n),n}function pt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function dt(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(a,e)=>{if((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(a instanceof Request?a.url:a.toString(),document.baseURI).href;pe.delete(o)}return me(a,e)};const pe=new Map;function ht(a,e,n){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;(n==null?void 0:n.body)&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&(i+=`[data-hash="${dt(n.body)}"]`);const f=document.querySelector(i);if(f!=null&&f.textContent){const{body:t,...p}=JSON.parse(f.textContent),_=f.getAttribute("data-ttl");return _&&pe.set(e,{body:t,init:p,ttl:1e3*Number(_)}),Promise.resolve(new Response(t,p))}return me(a,n)}function mt(a,e){const n=pe.get(a);if(n){if(performance.now()<n.ttl)return new Response(n.body,n.init);pe.delete(a)}return me(a,e)}const _t=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function gt(a){const e=[],n=[],o=[];let i=!0;return{pattern:a==="/"?/^\/$/:new RegExp(`^${wt(a).map((t,p,_)=>{const d=decodeURIComponent(t),g=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(d);if(g)return e.push(g[1]),n.push(g[2]),o.push(!1),"(?:/(.*))?";const w=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(d);if(w)return e.push(w[1]),n.push(w[2]),o.push(!0),"(?:/([^/]+))?";const O=p===_.length-1;return d?"/"+d.split(/\[(.+?)\](?!\])/).map((T,D)=>{if(D%2){const q=_t.exec(T);if(!q)throw new Error(`Invalid param: ${T}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,K,oe,ee,se]=q;return e.push(ee),n.push(se),o.push(!!K),oe?"(.*?)":K?"([^/]*)?":"([^/]+?)"}return O&&T.includes(".")&&(i=!1),T.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${i?"/?":""}$`),names:e,types:n,optional:o}}function yt(a){return!/^\([^)]+\)$/.test(a)}function wt(a){return a.slice(1).split("/").filter(yt)}function bt(a,{names:e,types:n,optional:o},i){const f={};for(let t=0;t<e.length;t+=1){const p=e[t],_=n[t];let d=a[t+1];if(d||!o[t]){if(_){const g=i[_];if(!g)throw new Error(`Missing "${_}" param matcher`);if(!g(d))return}f[p]=d!=null?d:""}}return f}function vt(a,e,n,o){const i=new Set(e);return Object.entries(n).map(([p,[_,d,g]])=>{const{pattern:w,names:O,types:U,optional:H}=gt(p),T={id:p,exec:D=>{const q=w.exec(D);if(q)return bt(q,{names:O,types:U,optional:H},o)},errors:[1,...g||[]].map(D=>a[D]),layouts:[0,...d||[]].map(t),leaf:f(_)};return T.errors.length=T.layouts.length=Math.max(T.errors.length,T.layouts.length),T});function f(p){const _=p<0;return _&&(p=~p),[_,a[p]]}function t(p){return p===void 0?p:[i.has(p),a[p]]}}function Et(a){let e,n,o;var i=a[0][0];function f(t){return{props:{data:t[2],form:t[1]}}}return i&&(e=X(i,f(a))),{c(){e&&Z(e.$$.fragment),n=C()},l(t){e&&Le(e.$$.fragment,t),n=C()},m(t,p){e&&Q(e,t,p),z(t,n,p),o=!0},p(t,p){const _={};if(p&4&&(_.data=t[2]),p&2&&(_.form=t[1]),i!==(i=t[0][0])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{x(d,1)}),he()}i?(e=X(i,f(t)),Z(e.$$.fragment),J(e.$$.fragment,1),Q(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){o||(e&&J(e.$$.fragment,t),o=!0)},o(t){e&&F(e.$$.fragment,t),o=!1},d(t){t&&G(n),e&&x(e,t)}}}function kt(a){let e,n,o;var i=a[0][0];function f(t){return{props:{data:t[2],$$slots:{default:[Rt]},$$scope:{ctx:t}}}}return i&&(e=X(i,f(a))),{c(){e&&Z(e.$$.fragment),n=C()},l(t){e&&Le(e.$$.fragment,t),n=C()},m(t,p){e&&Q(e,t,p),z(t,n,p),o=!0},p(t,p){const _={};if(p&4&&(_.data=t[2]),p&523&&(_.$$scope={dirty:p,ctx:t}),i!==(i=t[0][0])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{x(d,1)}),he()}i?(e=X(i,f(t)),Z(e.$$.fragment),J(e.$$.fragment,1),Q(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){o||(e&&J(e.$$.fragment,t),o=!0)},o(t){e&&F(e.$$.fragment,t),o=!1},d(t){t&&G(n),e&&x(e,t)}}}function Rt(a){let e,n,o;var i=a[0][1];function f(t){return{props:{data:t[3],form:t[1]}}}return i&&(e=X(i,f(a))),{c(){e&&Z(e.$$.fragment),n=C()},l(t){e&&Le(e.$$.fragment,t),n=C()},m(t,p){e&&Q(e,t,p),z(t,n,p),o=!0},p(t,p){const _={};if(p&8&&(_.data=t[3]),p&2&&(_.form=t[1]),i!==(i=t[0][1])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{x(d,1)}),he()}i?(e=X(i,f(t)),Z(e.$$.fragment),J(e.$$.fragment,1),Q(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){o||(e&&J(e.$$.fragment,t),o=!0)},o(t){e&&F(e.$$.fragment,t),o=!1},d(t){t&&G(n),e&&x(e,t)}}}function Ke(a){let e,n=a[5]&&Me(a);return{c(){e=et("div"),n&&n.c(),this.h()},l(o){e=tt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=nt(e);n&&n.l(i),i.forEach(G),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),V(e,"position","absolute"),V(e,"left","0"),V(e,"top","0"),V(e,"clip","rect(0 0 0 0)"),V(e,"clip-path","inset(50%)"),V(e,"overflow","hidden"),V(e,"white-space","nowrap"),V(e,"width","1px"),V(e,"height","1px")},m(o,i){z(o,e,i),n&&n.m(e,null)},p(o,i){o[5]?n?n.p(o,i):(n=Me(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&G(e),n&&n.d()}}}function Me(a){let e;return{c(){e=rt(a[6])},l(n){e=at(n,a[6])},m(n,o){z(n,e,o)},p(n,o){o&64&&ot(e,n[6])},d(n){n&&G(e)}}}function Ot(a){let e,n,o,i,f;const t=[kt,Et],p=[];function _(g,w){return g[0][1]?0:1}e=_(a),n=p[e]=t[e](a);let d=a[4]&&Ke(a);return{c(){n.c(),o=Ze(),d&&d.c(),i=C()},l(g){n.l(g),o=Qe(g),d&&d.l(g),i=C()},m(g,w){p[e].m(g,w),z(g,o,w),d&&d.m(g,w),z(g,i,w),f=!0},p(g,[w]){let O=e;e=_(g),e===O?p[e].p(g,w):(de(),F(p[O],1,1,()=>{p[O]=null}),he(),n=p[e],n?n.p(g,w):(n=p[e]=t[e](g),n.c()),J(n,1),n.m(o.parentNode,o)),g[4]?d?d.p(g,w):(d=Ke(g),d.c(),d.m(i.parentNode,i)):d&&(d.d(1),d=null)},i(g){f||(J(n),f=!0)},o(g){F(n),f=!1},d(g){p[e].d(g),g&&G(o),d&&d.d(g),g&&G(i)}}}function It(a,e,n){let{stores:o}=e,{page:i}=e,{components:f}=e,{form:t}=e,{data_0:p=null}=e,{data_1:_=null}=e;xe(o.page.notify);let d=!1,g=!1,w=null;return Re(()=>{const O=o.page.subscribe(()=>{d&&(n(5,g=!0),n(6,w=document.title||"untitled page"))});return n(4,d=!0),O}),a.$$set=O=>{"stores"in O&&n(7,o=O.stores),"page"in O&&n(8,i=O.page),"components"in O&&n(0,f=O.components),"form"in O&&n(1,t=O.form),"data_0"in O&&n(2,p=O.data_0),"data_1"in O&&n(3,_=O.data_1)},a.$$.update=()=>{a.$$.dirty&384&&o.page.set(i)},[f,t,p,_,d,g,w,o,i]}class St extends Ye{constructor(e){super(),We(this,e,It,Ot,Xe,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const $t={},_e=[()=>W(()=>import("./chunks/0-19c6a2b5.js"),["./chunks/0-19c6a2b5.js","./components/pages/_layout.svelte-97528550.js","./chunks/index-33fd8535.js","./chunks/masthead.module-a817179b.js","./assets/masthead-0eceb451.css","./chunks/paths-f25f3c46.js","./chunks/Link-9578772e.js","./chunks/paths-51f95b7f.js","./chunks/stores-168346ed.js","./chunks/singletons-1b6d46fa.js","./assets/_layout-ad17970d.css"],import.meta.url),()=>W(()=>import("./chunks/1-c1340ce2.js"),["./chunks/1-c1340ce2.js","./components/error.svelte-c14e7ceb.js","./chunks/index-33fd8535.js","./chunks/stores-168346ed.js","./chunks/singletons-1b6d46fa.js","./chunks/paths-51f95b7f.js"],import.meta.url),()=>W(()=>import("./chunks/2-71fd25bd.js"),["./chunks/2-71fd25bd.js","./components/pages/_page.svelte-c5973eac.js","./chunks/index-33fd8535.js","./chunks/paths-51f95b7f.js","./chunks/slidy-6094d59f.js","./assets/slidy-6f253dfe.css","./chunks/masthead.module-a817179b.js","./assets/masthead-0eceb451.css","./chunks/Header-b037a099.js","./chunks/paths-f25f3c46.js","./chunks/Link-9578772e.js","./assets/_page-d23e1c9d.css"],import.meta.url),()=>W(()=>import("./chunks/3-5dafee21.js"),["./chunks/3-5dafee21.js","./components/pages/docs/_page.svelte-b635d938.js","./chunks/index-33fd8535.js","./chunks/paths-51f95b7f.js","./chunks/stores-168346ed.js","./chunks/singletons-1b6d46fa.js","./chunks/masthead.module-a817179b.js","./assets/masthead-0eceb451.css","./chunks/Header-b037a099.js","./chunks/Link-9578772e.js","./assets/_page-b2768e6e.css"],import.meta.url),()=>W(()=>import("./chunks/4-7a21a5af.js"),["./chunks/4-7a21a5af.js","./chunks/_page-6d5caa1a.js","./chunks/control-129d3050.js","./components/pages/docs/_section_/_page.svelte-15182d2d.js","./chunks/index-33fd8535.js","./chunks/paths-51f95b7f.js","./chunks/masthead.module-a817179b.js","./assets/masthead-0eceb451.css","./chunks/Header-b037a099.js","./chunks/Link-9578772e.js","./assets/_page-1e3ea2c9.css"],import.meta.url),()=>W(()=>import("./chunks/5-5bd39332.js"),["./chunks/5-5bd39332.js","./components/pages/playground/_page.svelte-9f1b95ad.js","./chunks/index-33fd8535.js","./chunks/slidy-6094d59f.js","./assets/slidy-6f253dfe.css","./assets/_page-cdd662b1.css"],import.meta.url)],Lt=[0],At={"/":[2],"/docs":[3],"/docs/[section]":[4],"/playground":[5]},jt={handleError:({error:a})=>{console.error(a)}},Nt="/__data.json";async function Pt(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([o,i])=>[o,await i])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Ut=-1,Tt=-2,Dt=-3,Vt=-4,qt=-5,Bt=-6;function Ct(a){const e=JSON.parse(a);if(typeof e=="number")return i(e);const n=e,o=Array(n.length);function i(f){if(f===Ut)return;if(f===Dt)return NaN;if(f===Vt)return 1/0;if(f===qt)return-1/0;if(f===Bt)return-0;if(f in o)return o[f];const t=n[f];if(!t||typeof t!="object")o[f]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":o[f]=new Date(t[1]);break;case"Set":const _=new Set;o[f]=_;for(let w=1;w<t.length;w+=1)_.add(i(t[w]));break;case"Map":const d=new Map;o[f]=d;for(let w=1;w<t.length;w+=2)d.set(i(t[w]),i(t[w+1]));break;case"RegExp":o[f]=new RegExp(t[1],t[2]);break;case"Object":o[f]=Object(t[1]);break;case"BigInt":o[f]=BigInt(t[1]);break;case"null":const g=Object.create(null);o[f]=g;for(let w=1;w<t.length;w+=2)g[t[w]]=i(t[w+1]);break}else{const p=new Array(t.length);o[f]=p;for(let _=0;_<t.length;_+=1){const d=t[_];d!==Tt&&(p[_]=i(d))}}else{const p={};o[f]=p;for(const _ in t){const d=t[_];p[_]=i(d)}}return o[f]}return i(0)}const He="sveltekit:scroll",B="sveltekit:index",ce=vt(_e,Lt,At,$t),Se=_e[0],$e=_e[1];Se();$e();let ae={};try{ae=JSON.parse(sessionStorage[He])}catch{}function ke(a){ae[a]=Oe()}function Ft({target:a,base:e,trailing_slash:n}){var Ve;const o=[];let i=null;const f={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},p=!1,_=!1,d=!0,g=!1,w=!1,O,U=(Ve=history.state)==null?void 0:Ve[B];U||(U=Date.now(),history.replaceState({...history.state,[B]:U},"",location.href));const H=ae[U];H&&(history.scrollRestoration="manual",scrollTo(H.x,H.y));let T=!1,D,q,K;async function oe(){K=K||Promise.resolve(),await K,K=null;const r=new URL(location.href),c=we(r,!0);i=null,await Ae(c,r,[])}async function ee(r,{noscroll:c=!1,replaceState:u=!1,keepfocus:s=!1,state:l={},invalidateAll:h=!1},m,E){return typeof r=="string"&&(r=new URL(r,Fe(document))),be({url:r,scroll:c?Oe():null,keepfocus:s,redirect_chain:m,details:{state:l,replaceState:u},nav_token:E,accepted:()=>{h&&(w=!0)},blocked:()=>{},type:"goto"})}async function se(r){const c=we(r,!1);if(!c)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${r}`);return i={id:c.id,promise:Pe(c)},i.promise}async function Ae(r,c,u,s,l={},h){var E,k;q=l;let m=r&&await Pe(r);if(m||(m=await De(c,null,re(new Error(`Not found: ${c.pathname}`),{url:c,params:{},routeId:null}),404)),c=(r==null?void 0:r.url)||c,q!==l)return!1;if(m.type==="redirect")if(u.length>10||u.includes(c.pathname))m=await ie({status:500,error:re(new Error("Redirect loop"),{url:c,params:{},routeId:null}),url:c,routeId:null});else return ee(new URL(m.location,c).href,{},[...u,c.pathname],l),!1;else((k=(E=m.props)==null?void 0:E.page)==null?void 0:k.status)>=400&&await M.updated.check()&&await le(c);if(o.length=0,w=!1,g=!0,s&&s.details){const{details:b}=s,v=b.replaceState?0:1;b.state[B]=U+=v,history[b.replaceState?"replaceState":"pushState"](b.state,"",c)}if(i=null,_){t=m.state,m.props.page&&(m.props.page.url=c);const b=ue();O.$set(m.props),b()}else je(m);if(s){const{scroll:b,keepfocus:v}=s;if(!v){const I=document.body,$=I.getAttribute("tabindex");I.tabIndex=-1,I.focus({preventScroll:!0}),setTimeout(()=>{var L;(L=getSelection())==null||L.removeAllRanges()}),$!==null?I.setAttribute("tabindex",$):I.removeAttribute("tabindex")}if(await Ce(),d){const I=c.hash&&document.getElementById(c.hash.slice(1));b?scrollTo(b.x,b.y):I?I.scrollIntoView():scrollTo(0,0)}}else await Ce();d=!0,m.props.page&&(D=m.props.page),h&&h(),g=!1}function je(r){var l,h;t=r.state;const c=document.querySelector("style[data-sveltekit]");c&&c.remove(),D=r.props.page;const u=ue();O=new St({target:a,props:{...r.props,stores:M},hydrate:!0}),u();const s={from:null,to:fe("to",{params:t.params,routeId:(h=(l=t.route)==null?void 0:l.id)!=null?h:null,url:new URL(location.href)}),type:"load"};f.after_navigate.forEach(m=>m(s)),_=!0}async function te({url:r,params:c,branch:u,status:s,error:l,route:h,form:m}){var $;const E=u.filter(Boolean),k={type:"loaded",state:{url:r,params:c,branch:u,error:l,route:h},props:{components:E.map(L=>L.node.component)}};m!==void 0&&(k.props.form=m);let b={},v=!D;for(let L=0;L<E.length;L+=1){const N=E[L];b={...b,...N.data},(v||!t.branch.some(P=>P===N))&&(k.props[`data_${L}`]=b,v=v||Object.keys(($=N.data)!=null?$:{}).length>0)}if(v||(v=Object.keys(D.data).length!==Object.keys(b).length),!t.url||r.href!==t.url.href||t.error!==l||m!==void 0||v){k.props.page={error:l,params:c,routeId:h&&h.id,status:s,url:r,form:m,data:v?b:D.data};const L=(N,P)=>{Object.defineProperty(k.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${P}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return k}async function ge({loader:r,parent:c,url:u,params:s,routeId:l,server_data_node:h}){var b,v,I,$,L;let m=null;const E={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await r();if((b=k.shared)!=null&&b.load){let N=function(...S){for(const y of S){const{href:R}=new URL(y,u);E.dependencies.add(R)}};const P={routeId:l,params:new Proxy(s,{get:(S,y)=>(E.params.add(y),S[y])}),data:(v=h==null?void 0:h.data)!=null?v:null,url:ut(u,()=>{E.url=!0}),async fetch(S,y){let R;S instanceof Request?(R=S.url,y={body:S.method==="GET"||S.method==="HEAD"?void 0:await S.blob(),cache:S.cache,credentials:S.credentials,headers:S.headers,integrity:S.integrity,keepalive:S.keepalive,method:S.method,mode:S.mode,redirect:S.redirect,referrer:S.referrer,referrerPolicy:S.referrerPolicy,signal:S.signal,...y}):R=S;const j=new URL(R,u).href;return N(j),_?mt(j,y):ht(R,j,y)},setHeaders:()=>{},depends:N,parent(){return E.parent=!0,c()}};Object.defineProperties(P,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),m=(I=await k.shared.load.call(null,P))!=null?I:null,m=m?await Pt(m):null}return{node:k,loader:r,server:h,shared:($=k.shared)!=null&&$.load?{type:"data",data:m,uses:E}:null,data:(L=m!=null?m:h==null?void 0:h.data)!=null?L:null}}function Ne(r,c,u,s){if(w)return!0;if(!u)return!1;if(u.parent&&c||u.url&&r)return!0;for(const l of u.params)if(s[l]!==t.params[l])return!0;for(const l of u.dependencies)if(o.some(h=>h(new URL(l))))return!0;return!1}function ye(r,c){var u,s;return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set((u=r.uses.dependencies)!=null?u:[]),params:new Set((s=r.uses.params)!=null?s:[]),parent:!!r.uses.parent,url:!!r.uses.url}}:(r==null?void 0:r.type)==="skip"&&c!=null?c:null}async function Pe({id:r,invalidating:c,url:u,params:s,route:l}){var S;if((i==null?void 0:i.id)===r)return i.promise;const{errors:h,layouts:m,leaf:E}=l,k=[...m,E];h.forEach(y=>y==null?void 0:y().catch(()=>{})),k.forEach(y=>y==null?void 0:y[1]().catch(()=>{}));let b=null;const v=t.url?r!==t.url.pathname+t.url.search:!1,I=k.reduce((y,R,j)=>{var ne;const A=t.branch[j],Y=!!(R!=null&&R[0])&&((A==null?void 0:A.loader)!==R[1]||Ne(v,y.some(Boolean),(ne=A.server)==null?void 0:ne.uses,s));return y.push(Y),y},[]);if(I.some(Boolean)){try{b=await ze(u,I)}catch(y){return ie({status:500,error:re(y,{url:u,params:s,routeId:l.id}),url:u,routeId:l.id})}if(b.type==="redirect")return b}const $=b==null?void 0:b.nodes;let L=!1;const N=k.map(async(y,R)=>{var ne;if(!y)return;const j=t.branch[R],A=$==null?void 0:$[R];if((!A||A.type==="skip")&&y[1]===(j==null?void 0:j.loader)&&!Ne(v,L,(ne=j.shared)==null?void 0:ne.uses,s))return j;if(L=!0,(A==null?void 0:A.type)==="error")throw A;return ge({loader:y[1],url:u,params:s,routeId:l.id,parent:async()=>{var Be;const qe={};for(let ve=0;ve<R;ve+=1)Object.assign(qe,(Be=await N[ve])==null?void 0:Be.data);return qe},server_data_node:ye(A===void 0&&y[0]?{type:"skip"}:A!=null?A:null,j==null?void 0:j.server)})});for(const y of N)y.catch(()=>{});const P=[];for(let y=0;y<k.length;y+=1)if(k[y])try{P.push(await N[y])}catch(R){if(R instanceof Ge)return{type:"redirect",location:R.location};let j=500,A;$!=null&&$.includes(R)?(j=(S=R.status)!=null?S:j,A=R.error):R instanceof Ie?(j=R.status,A=R.body):A=re(R,{params:s,url:u,routeId:l.id});const Y=await Ue(y,P,h);return Y?await te({url:u,params:s,branch:P.slice(0,Y.idx).concat(Y.node),status:j,error:A,route:l}):await De(u,l.id,A,j)}else P.push(void 0);return await te({url:u,params:s,branch:P,status:200,error:null,route:l,form:c?void 0:null})}async function Ue(r,c,u){for(;r--;)if(u[r]){let s=r;for(;!c[s];)s-=1;try{return{idx:s+1,node:{node:await u[r](),loader:u[r],data:{},server:null,shared:null}}}catch{continue}}}async function ie({status:r,error:c,url:u,routeId:s}){var b;const l={},h=await Se();let m=null;if(h.server)try{const v=await ze(u,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;m=(b=v.nodes[0])!=null?b:null}catch{(u.origin!==location.origin||u.pathname!==location.pathname||p)&&await le(u)}const E=await ge({loader:Se,url:u,params:l,routeId:s,parent:()=>Promise.resolve({}),server_data_node:ye(m)}),k={node:await $e(),loader:$e,shared:null,server:null,data:null};return await te({url:u,params:l,branch:[E,k],status:r,error:c,route:null})}function we(r,c){if(Te(r))return;const u=decodeURI(r.pathname.slice(e.length)||"/");for(const s of ce){const l=s.exec(u);if(l){const h=new URL(r.origin+lt(r.pathname,n)+r.search+r.hash);return{id:h.pathname+h.search,invalidating:c,route:s,params:ct(l),url:h}}}}function Te(r){return r.origin!==location.origin||!r.pathname.startsWith(e)}async function be({url:r,scroll:c,keepfocus:u,redirect_chain:s,details:l,type:h,delta:m,nav_token:E,accepted:k,blocked:b}){var N,P,S,y;let v=!1;const I=we(r,!1),$={from:fe("from",{params:t.params,routeId:(P=(N=t.route)==null?void 0:N.id)!=null?P:null,url:t.url}),to:fe("to",{params:(S=I==null?void 0:I.params)!=null?S:null,routeId:(y=I==null?void 0:I.route.id)!=null?y:null,url:r}),type:h};m!==void 0&&($.delta=m);const L={...$,cancel:()=>{v=!0}};if(f.before_navigate.forEach(R=>R(L)),v){b();return}ke(U),k(),_&&M.navigating.set($),await Ae(I,r,s,{scroll:c,keepfocus:u,details:l},E,()=>{f.after_navigate.forEach(R=>R($)),M.navigating.set(null)})}async function De(r,c,u,s){return r.origin===location.origin&&r.pathname===location.pathname&&!p?await ie({status:s,error:u,url:r,routeId:c}):await le(r)}function le(r){return location.href=r.href,new Promise(()=>{})}return{after_navigate:r=>{Re(()=>(f.after_navigate.push(r),()=>{const c=f.after_navigate.indexOf(r);f.after_navigate.splice(c,1)}))},before_navigate:r=>{Re(()=>(f.before_navigate.push(r),()=>{const c=f.before_navigate.indexOf(r);f.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(g||!_)&&(d=!1)},goto:(r,c={})=>ee(r,c,[]),invalidate:r=>{if(r===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof r=="function")o.push(r);else{const{href:c}=new URL(r,location.href);o.push(u=>u.href===c)}return oe()},invalidateAll:()=>(w=!0,oe()),prefetch:async r=>{const c=new URL(r,Fe(document));await se(c)},prefetch_routes:async r=>{const u=(r?ce.filter(s=>r.some(l=>s.exec(l))):ce).map(s=>Promise.all([...s.layouts,s.leaf].map(l=>l==null?void 0:l[1]())));await Promise.all(u)},apply_action:async r=>{if(r.type==="error"){const c=new URL(location.href),{branch:u,route:s}=t;if(!s)return;const l=await Ue(t.branch.length,u,s.errors);if(l){const h=await te({url:c,params:t.params,branch:u.slice(0,l.idx).concat(l.node),status:500,error:r.error,route:s});t=h.state;const m=ue();O.$set(h.props),m()}}else if(r.type==="redirect")ee(r.location,{invalidateAll:!0},[]);else{const c={form:r.data,page:{...D,form:r.data,status:r.status}},u=ue();O.$set(c),u()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var m,E;let l=!1;const h={from:fe("from",{params:t.params,routeId:(E=(m=t.route)==null?void 0:m.id)!=null?E:null,url:t.url}),to:null,type:"unload",cancel:()=>l=!0};f.before_navigate.forEach(k=>k(h)),l?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ke(U);try{sessionStorage[He]=JSON.stringify(ae)}catch{}}});const r=s=>{const{url:l,options:h}=Je(s);if(l&&h.prefetch){if(Te(l))return;se(l)}};let c;const u=s=>{clearTimeout(c),c=setTimeout(()=>{var l;(l=s.target)==null||l.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",r),addEventListener("mousemove",u),addEventListener("sveltekit:trigger_prefetch",r),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:l,url:h,options:m}=Je(s);if(!l||!h)return;const E=l instanceof SVGAElement;if(!E&&h.protocol!==location.protocol&&!(h.protocol==="https:"||h.protocol==="http:"))return;const k=(l.getAttribute("rel")||"").split(/\s+/);if(l.hasAttribute("download")||k.includes("external")||m.reload||(E?l.target.baseVal:l.target))return;const[b,v]=h.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){T=!0,ke(U),t.url=h,M.page.set({...D,url:h}),M.page.notify();return}be({url:h,scroll:m.noscroll?Oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[B]===U)return;const l=s.state[B]-U;be({url:new URL(location.href),scroll:ae[s.state[B]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{U=s.state[B]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{T&&(T=!1,history.replaceState({...history.state,[B]:++U},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&M.navigating.set(null)})},_hydrate:async({status:r,error:c,node_ids:u,params:s,routeId:l,data:h,form:m})=>{var b;p=!0;const E=new URL(location.href);let k;try{const v=u.map(async(I,$)=>{const L=h[$];return ge({loader:_e[I],url:E,params:s,routeId:l,parent:async()=>{const N={};for(let P=0;P<$;P+=1)Object.assign(N,(await v[P]).data);return N},server_data_node:ye(L)})});k=await te({url:E,params:s,branch:await Promise.all(v),status:r,error:c,form:m,route:(b=ce.find(I=>I.id===l))!=null?b:null})}catch(v){if(v instanceof Ge){await le(new URL(v.location,location.href));return}k=await ie({status:v instanceof Ie?v.status:500,error:re(v,{url:E,params:s,routeId:l}),url:E,routeId:l})}je(k)}}}async function ze(a,e){const n=new URL(a);n.pathname=a.pathname.replace(/\/$/,"")+Nt;const o=await me(n.href,{headers:{"x-sveltekit-invalidated":e.map(f=>f?"1":"").join(",")}}),i=await o.text();if(!o.ok)throw new Error(JSON.parse(i));return Ct(i)}function re(a,e){var n;return a instanceof Ie?a.body:(n=jt.handleError({error:a,event:e}))!=null?n:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Jt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function fe(a,e){for(const n of Jt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${a}.${n} should now be ${a}.url.${n}`)},enumerable:!1});return e}function ue(){return()=>{}}async function Ht({env:a,hydrate:e,paths:n,target:o,trailing_slash:i}){it(n);const f=Ft({target:o,base:n.base,trailing_slash:i});st({client:f}),e?await f._hydrate(e):f.goto(location.href,{replaceState:!0}),f._start_router()}export{Ht as start};
