import{o as De,t as ye}from"../chunks/index.fd4466f2.js";import{S as Ke,a as ze,I as q,g as Ce,f as qe,b as we,c as le,s as M,i as _e,d as Q,P as Fe,e as Ye}from"../chunks/singletons.f13a5dec.js";import{b as z}from"../chunks/paths.8d420ca9.js";import{R as Me,H as ee}from"../chunks/control.e7f5239e.js";function We(n,o){return n==="/"||o==="ignore"?n:o==="never"?n.endsWith("/")?n.slice(0,-1):n:o==="always"&&!n.endsWith("/")?n+"/":n}function Xe(n){return n.split("%25").map(decodeURI).join("%25")}function Ze(n){for(const o in n)n[o]=decodeURIComponent(n[o]);return n}const Qe=["href","pathname","search","searchParams","toString","toJSON"];function et(n,o){const d=new URL(n);for(const c of Qe){let f=d[c];Object.defineProperty(d,c,{get(){return o(),f},enumerable:!0,configurable:!0})}return tt(d),d}function tt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const nt="/__data.json";function at(n){return n.replace(/\/$/,"")+nt}function Be(n){try{return JSON.parse(sessionStorage[n])}catch{}}function He(n,o){const d=JSON.stringify(o);try{sessionStorage[n]=d}catch{}}function rt(...n){let o=5381;for(const d of n)if(typeof d=="string"){let c=d.length;for(;c;)o=o*33^d.charCodeAt(--c)}else if(ArrayBuffer.isView(d)){const c=new Uint8Array(d.buffer,d.byteOffset,d.byteLength);let f=c.length;for(;f;)o=o*33^c[--f]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}const fe=window.fetch;window.fetch=(n,o)=>((n instanceof Request?n.method:(o==null?void 0:o.method)||"GET")!=="GET"&&te.delete(ke(n)),fe(n,o));const te=new Map;function ot(n,o){const d=ke(n,o),c=document.querySelector(d);if(c!=null&&c.textContent){const{body:f,...u}=JSON.parse(c.textContent),R=c.getAttribute("data-ttl");return R&&te.set(d,{body:f,init:u,ttl:1e3*Number(R)}),Promise.resolve(new Response(f,u))}return fe(n,o)}function it(n,o,d){if(te.size>0){const c=ke(n,d),f=te.get(c);if(f){if(performance.now()<f.ttl&&["default","force-cache","only-if-cached",void 0].includes(d==null?void 0:d.cache))return new Response(f.body,f.init);te.delete(c)}}return fe(o,d)}function ke(n,o){let c=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(o!=null&&o.headers||o!=null&&o.body){const f=[];o.headers&&f.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&f.push(o.body),c+=`[data-hash="${rt(...f)}"]`}return c}const st=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ct(n){const o=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${ft(n).map(c=>{const f=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(f)return o.push({name:f[1],matcher:f[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);if(u)return o.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!c)return;const R=c.split(/\[(.+?)\](?!\])/);return"/"+R.map((w,y)=>{if(y%2){if(w.startsWith("x+"))return be(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return be(String.fromCharCode(...w.slice(2).split("-").map(O=>parseInt(O,16))));const p=st.exec(w);if(!p)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,T,U,k,j]=p;return o.push({name:k,matcher:j,optional:!!T,rest:!!U,chained:U?y===1&&R[0]==="":!1}),U?"(.*?)":T?"([^/]*)?":"([^/]+?)"}return be(w)}).join("")}).join("")}/?$`),params:o}}function lt(n){return!/^\([^)]+\)$/.test(n)}function ft(n){return n.slice(1).split("/").filter(lt)}function ut(n,o,d){const c={},f=n.slice(1);let u=0;for(let R=0;R<o.length;R+=1){const l=o[R],w=f[R-u];if(l.chained&&l.rest&&u){c[l.name]=f.slice(R-u,R+1).filter(y=>y).join("/"),u=0;continue}if(w===void 0){l.rest&&(c[l.name]="");continue}if(!l.matcher||d[l.matcher](w)){c[l.name]=w;const y=o[R+1],p=f[R+1];y&&!y.rest&&y.optional&&p&&(u=0);continue}if(l.optional&&l.chained){u++;continue}return}if(!u)return c}function be(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function dt({nodes:n,server_loads:o,dictionary:d,matchers:c}){const f=new Set(o);return Object.entries(d).map(([l,[w,y,p]])=>{const{pattern:T,params:U}=ct(l),k={id:l,exec:j=>{const O=T.exec(j);if(O)return ut(O,U,c)},errors:[1,...p||[]].map(j=>n[j]),layouts:[0,...y||[]].map(R),leaf:u(w)};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k});function u(l){const w=l<0;return w&&(l=~l),[w,n[l]]}function R(l){return l===void 0?l:[f.has(l),n[l]]}}async function pt(n){var o;for(const d in n)if(typeof((o=n[d])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([c,f])=>[c,await f])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const ht=-1,mt=-2,gt=-3,yt=-4,wt=-5,_t=-6;function bt(n,o){if(typeof n=="number")return f(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const d=n,c=Array(d.length);function f(u,R=!1){if(u===ht)return;if(u===gt)return NaN;if(u===yt)return 1/0;if(u===wt)return-1/0;if(u===_t)return-0;if(R)throw new Error("Invalid input");if(u in c)return c[u];const l=d[u];if(!l||typeof l!="object")c[u]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const w=l[0],y=o==null?void 0:o[w];if(y)return c[u]=y(f(l[1]));switch(w){case"Date":c[u]=new Date(l[1]);break;case"Set":const p=new Set;c[u]=p;for(let k=1;k<l.length;k+=1)p.add(f(l[k]));break;case"Map":const T=new Map;c[u]=T;for(let k=1;k<l.length;k+=2)T.set(f(l[k]),f(l[k+1]));break;case"RegExp":c[u]=new RegExp(l[1],l[2]);break;case"Object":c[u]=Object(l[1]);break;case"BigInt":c[u]=BigInt(l[1]);break;case"null":const U=Object.create(null);c[u]=U;for(let k=1;k<l.length;k+=2)U[l[k]]=f(l[k+1]);break;default:throw new Error(`Unknown type ${w}`)}}else{const w=new Array(l.length);c[u]=w;for(let y=0;y<l.length;y+=1){const p=l[y];p!==mt&&(w[y]=f(p))}}else{const w={};c[u]=w;for(const y in l){const p=l[y];w[y]=f(p)}}return c[u]}return f(0)}function vt(n){return n.filter(o=>o!=null)}const B=Be(Ke)??{},Z=Be(ze)??{};function ve(n){B[n]=Q()}function Et(n,o){var Ne;const d=dt(n),c=n.nodes[0],f=n.nodes[1];c(),f();const u=document.documentElement,R=[],l=[];let w=null;const y={before_navigate:[],after_navigate:[]};let p={branch:[],error:null,url:null},T=!1,U=!1,k=!0,j=!1,O=!1,G=!1,H=!1,F,x=(Ne=history.state)==null?void 0:Ne[q];x||(x=Date.now(),history.replaceState({...history.state,[q]:x},"",location.href));const ue=B[x];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let V,ne,ae;async function Se(){ae=ae||Promise.resolve(),await ae,ae=null;const e=new URL(location.href),t=W(e,!0);w=null;const r=ne={},a=t&&await he(t);if(r===ne&&a){if(a.type==="redirect")return re(new URL(a.location,e).href,{},[e.pathname],r);F.$set(a.props)}}function Re(e){l.some(t=>t==null?void 0:t.snapshot)&&(Z[e]=l.map(t=>{var r;return(r=t==null?void 0:t.snapshot)==null?void 0:r.capture()}))}function Le(e){var t;(t=Z[e])==null||t.forEach((r,a)=>{var s,i;(i=(s=l[a])==null?void 0:s.snapshot)==null||i.restore(r)})}function Ie(){ve(x),He(Ke,B),Re(x),He(ze,Z)}async function re(e,{noScroll:t=!1,replaceState:r=!1,keepFocus:a=!1,state:s={},invalidateAll:i=!1},h,m){return typeof e=="string"&&(e=new URL(e,Ce(document))),ce({url:e,scroll:t?Q():null,keepfocus:a,redirect_chain:h,details:{state:s,replaceState:r},nav_token:m,accepted:()=>{i&&(H=!0)},blocked:()=>{},type:"goto"})}async function Ae(e){return w={id:e.id,promise:he(e).then(t=>(t.type==="loaded"&&t.state.error&&(w=null),t))},w.promise}async function oe(...e){const r=d.filter(a=>e.some(s=>a.exec(s))).map(a=>Promise.all([...a.layouts,a.leaf].map(s=>s==null?void 0:s[1]())));await Promise.all(r)}function Pe(e){var a;p=e.state;const t=document.querySelector("style[data-sveltekit]");t&&t.remove(),V=e.props.page,F=new n.root({target:o,props:{...e.props,stores:M,components:l},hydrate:!0}),Le(x);const r={from:null,to:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};y.after_navigate.forEach(s=>s(r)),U=!0}async function Y({url:e,params:t,branch:r,status:a,error:s,route:i,form:h}){let m="never";for(const b of r)(b==null?void 0:b.slash)!==void 0&&(m=b.slash);e.pathname=We(e.pathname,m),e.search=e.search;const v={type:"loaded",state:{url:e,params:t,branch:r,error:s,route:i},props:{constructors:vt(r).map(b=>b.node.component)}};h!==void 0&&(v.props.form=h);let g={},S=!V,A=0;for(let b=0;b<Math.max(r.length,p.branch.length);b+=1){const _=r[b],N=p.branch[b];(_==null?void 0:_.data)!==(N==null?void 0:N.data)&&(S=!0),_&&(g={...g,..._.data},S&&(v.props[`data_${A}`]=g),A+=1)}return(!p.url||e.href!==p.url.href||p.error!==s||h!==void 0&&h!==V.form||S)&&(v.props.page={error:s,params:t,route:{id:(i==null?void 0:i.id)??null},status:a,url:new URL(e),form:h??null,data:S?g:V.data}),v}async function de({loader:e,parent:t,url:r,params:a,route:s,server_data_node:i}){var g,S,A;let h=null;const m={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await e();if((g=v.universal)!=null&&g.load){let P=function(..._){for(const N of _){const{href:D}=new URL(N,r);m.dependencies.add(D)}};const b={route:{get id(){return m.route=!0,s.id}},params:new Proxy(a,{get:(_,N)=>(m.params.add(N),_[N])}),data:(i==null?void 0:i.data)??null,url:et(r,()=>{m.url=!0}),async fetch(_,N){let D;_ instanceof Request?(D=_.url,N={body:_.method==="GET"||_.method==="HEAD"?void 0:await _.blob(),cache:_.cache,credentials:_.credentials,headers:_.headers,integrity:_.integrity,keepalive:_.keepalive,method:_.method,mode:_.mode,redirect:_.redirect,referrer:_.referrer,referrerPolicy:_.referrerPolicy,signal:_.signal,...N}):D=_;const C=new URL(D,r);return P(C.href),C.origin===r.origin&&(D=C.href.slice(r.origin.length)),U?it(D,C.href,N):ot(D,N)},setHeaders:()=>{},depends:P,parent(){return m.parent=!0,t()}};h=await v.universal.load.call(null,b)??null,h=h?await pt(h):null}return{node:v,loader:e,server:i,universal:(S=v.universal)!=null&&S.load?{type:"data",data:h,uses:m}:null,data:h??(i==null?void 0:i.data)??null,slash:((A=v.universal)==null?void 0:A.trailingSlash)??(i==null?void 0:i.slash)}}function Oe(e,t,r,a,s){if(H)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&r)return!0;for(const i of a.params)if(s[i]!==p.params[i])return!0;for(const i of a.dependencies)if(R.some(h=>h(new URL(i))))return!0;return!1}function pe(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}async function he({id:e,invalidating:t,url:r,params:a,route:s}){if((w==null?void 0:w.id)===e)return w.promise;const{errors:i,layouts:h,leaf:m}=s,v=[...h,m];i.forEach(E=>E==null?void 0:E().catch(()=>{})),v.forEach(E=>E==null?void 0:E[1]().catch(()=>{}));let g=null;const S=p.url?e!==p.url.pathname+p.url.search:!1,A=p.route?s.id!==p.route.id:!1;let P=!1;const b=v.map((E,I)=>{var K;const L=p.branch[I],$=!!(E!=null&&E[0])&&((L==null?void 0:L.loader)!==E[1]||Oe(P,A,S,(K=L.server)==null?void 0:K.uses,a));return $&&(P=!0),$});if(b.some(Boolean)){try{g=await Ve(r,b)}catch(E){return ie({status:E instanceof ee?E.status:500,error:await X(E,{url:r,params:a,route:{id:s.id}}),url:r,route:s})}if(g.type==="redirect")return g}const _=g==null?void 0:g.nodes;let N=!1;const D=v.map(async(E,I)=>{var me;if(!E)return;const L=p.branch[I],$=_==null?void 0:_[I];if((!$||$.type==="skip")&&E[1]===(L==null?void 0:L.loader)&&!Oe(N,A,S,(me=L.universal)==null?void 0:me.uses,a))return L;if(N=!0,($==null?void 0:$.type)==="error")throw $;return de({loader:E[1],url:r,params:a,route:s,parent:async()=>{var Te;const $e={};for(let ge=0;ge<I;ge+=1)Object.assign($e,(Te=await D[ge])==null?void 0:Te.data);return $e},server_data_node:pe($===void 0&&E[0]?{type:"skip"}:$??null,E[0]?L==null?void 0:L.server:void 0)})});for(const E of D)E.catch(()=>{});const C=[];for(let E=0;E<v.length;E+=1)if(v[E])try{C.push(await D[E])}catch(I){if(I instanceof Me)return{type:"redirect",location:I.location};let L=500,$;if(_!=null&&_.includes(I))L=I.status??L,$=I.error;else if(I instanceof ee)L=I.status,$=I.body;else{if(await M.updated.check())return await J(r);$=await X(I,{params:a,url:r,route:{id:s.id}})}const K=await Ue(E,C,i);return K?await Y({url:r,params:a,branch:C.slice(0,K.idx).concat(K.node),status:L,error:$,route:s}):await xe(r,{id:s.id},$,L)}else C.push(void 0);return await Y({url:r,params:a,branch:C,status:200,error:null,route:s,form:t?void 0:null})}async function Ue(e,t,r){for(;e--;)if(r[e]){let a=e;for(;!t[a];)a-=1;try{return{idx:a+1,node:{node:await r[e](),loader:r[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:t,url:r,route:a}){const s={};let i=null;if(n.server_loads[0]===0)try{const g=await Ve(r,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;i=g.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||T)&&await J(r)}const m=await de({loader:c,url:r,params:s,route:a,parent:()=>Promise.resolve({}),server_data_node:pe(i)}),v={node:await f(),loader:f,universal:null,server:null,data:null};return await Y({url:r,params:s,branch:[m,v],status:e,error:t,route:null})}function W(e,t){if(_e(e,z))return;const r=se(e);for(const a of d){const s=a.exec(r);if(s)return{id:e.pathname+e.search,invalidating:t,route:a,params:Ze(s),url:e}}}function se(e){return Xe(e.pathname.slice(z.length)||"/")}function je({url:e,type:t,intent:r,delta:a}){var m,v;let s=!1;const i={from:{params:p.params,route:{id:((m=p.route)==null?void 0:m.id)??null},url:p.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((v=r==null?void 0:r.route)==null?void 0:v.id)??null},url:e},willUnload:!r,type:t};a!==void 0&&(i.delta=a);const h={...i,cancel:()=>{s=!0}};return O||y.before_navigate.forEach(g=>g(h)),s?null:i}async function ce({url:e,scroll:t,keepfocus:r,redirect_chain:a,details:s,type:i,delta:h,nav_token:m={},accepted:v,blocked:g}){var D,C,E;const S=W(e,!1),A=je({url:e,type:i,delta:h,intent:S});if(!A){g();return}const P=x;v(),O=!0,U&&M.navigating.set(A),ne=m;let b=S&&await he(S);if(!b){if(_e(e,z))return await J(e);b=await xe(e,{id:null},await X(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(S==null?void 0:S.url)||e,ne!==m)return!1;if(b.type==="redirect")if(a.length>10||a.includes(e.pathname))b=await ie({status:500,error:await X(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(b.location,e).href,{},[...a,e.pathname],m),!1;else((D=b.props.page)==null?void 0:D.status)>=400&&await M.updated.check()&&await J(e);if(R.length=0,H=!1,j=!0,ve(P),Re(P),(C=b.props.page)!=null&&C.url&&b.props.page.url.pathname!==e.pathname&&(e.pathname=(E=b.props.page)==null?void 0:E.url.pathname),s){const I=s.replaceState?0:1;if(s.state[q]=x+=I,history[s.replaceState?"replaceState":"pushState"](s.state,"",e),!s.replaceState){let L=x+1;for(;Z[L]||B[L];)delete Z[L],delete B[L],L+=1}}w=null,U?(p=b.state,b.props.page&&(b.props.page.url=e),F.$set(b.props)):Pe(b);const{activeElement:_}=document;if(await ye(),k){const I=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));t?scrollTo(t.x,t.y):I?I.scrollIntoView():scrollTo(0,0)}const N=document.activeElement!==_&&document.activeElement!==document.body;!r&&!N&&await Ee(),k=!0,b.props.page&&(V=b.props.page),O=!1,y.after_navigate.forEach(I=>I(A)),M.navigating.set(null),j=!1}async function xe(e,t,r,a){return e.origin===location.origin&&e.pathname===location.pathname&&!T?await ie({status:a,error:r,url:e,route:t}):await J(e)}function J(e){return location.href=e.href,new Promise(()=>{})}function Je(){let e;u.addEventListener("mousemove",i=>{const h=i.target;clearTimeout(e),e=setTimeout(()=>{a(h,2)},20)});function t(i){a(i.composedPath()[0],1)}u.addEventListener("mousedown",t),u.addEventListener("touchstart",t,{passive:!0});const r=new IntersectionObserver(i=>{for(const h of i)h.isIntersecting&&(oe(se(new URL(h.target.href))),r.unobserve(h.target))},{threshold:0});function a(i,h){const m=qe(i,u);if(!m)return;const{url:v,external:g,download:S}=we(m,z);if(g||S)return;const A=le(m);if(!A.reload)if(h<=A.preload_data){const P=W(v,!1);P&&Ae(P)}else h<=A.preload_code&&oe(se(v))}function s(){r.disconnect();for(const i of u.querySelectorAll("a")){const{url:h,external:m,download:v}=we(i,z);if(m||v)continue;const g=le(i);g.reload||(g.preload_code===Fe.viewport&&r.observe(i),g.preload_code===Fe.eager&&oe(se(h)))}}y.after_navigate.push(s),s()}function X(e,t){return e instanceof ee?e.body:n.hooks.handleError({error:e,event:t})??{message:t.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{De(()=>(y.after_navigate.push(e),()=>{const t=y.after_navigate.indexOf(e);y.after_navigate.splice(t,1)}))},before_navigate:e=>{De(()=>(y.before_navigate.push(e),()=>{const t=y.before_navigate.indexOf(e);y.before_navigate.splice(t,1)}))},disable_scroll_handling:()=>{(j||!U)&&(k=!1)},goto:(e,t={})=>re(e,t,[]),invalidate:e=>{if(typeof e=="function")R.push(e);else{const{href:t}=new URL(e,location.href);R.push(r=>r.href===t)}return Se()},invalidateAll:()=>(H=!0,Se()),preload_data:async e=>{const t=new URL(e,Ce(document)),r=W(t,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${t}`);await Ae(r)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const t=new URL(location.href),{branch:r,route:a}=p;if(!a)return;const s=await Ue(p.branch.length,r,a.errors);if(s){const i=await Y({url:t,params:p.params,branch:r.slice(0,s.idx).concat(s.node),status:e.status??500,error:e.error,route:a});p=i.state,F.$set(i.props),ye().then(Ee)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},[]):(F.$set({form:null,page:{...V,form:e.data,status:e.status}}),await ye(),F.$set({form:e.data}),e.type==="success"&&Ee())},_start_router:()=>{var e;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{var a;let r=!1;if(Ie(),!O){const s={from:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:p.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};y.before_navigate.forEach(i=>i(s))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ie()}),(e=navigator.connection)!=null&&e.saveData||Je(),u.addEventListener("click",t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=qe(t.composedPath()[0],u);if(!r)return;const{url:a,external:s,target:i,download:h}=we(r,z);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const m=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||h)return;if(s||m.reload){je({url:a,type:"link"})?O=!0:t.preventDefault();return}const[g,S]=a.href.split("#");if(S!==void 0&&g===location.href.split("#")[0]){if(G=!0,ve(x),p.url=a,M.page.set({...V,url:a}),M.page.notify(),!m.replace_state)return;G=!1,t.preventDefault()}ce({url:a,scroll:m.noscroll?Q():null,keepfocus:m.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:m.replace_state??a.href===location.href},accepted:()=>t.preventDefault(),blocked:()=>t.preventDefault(),type:"link"})}),u.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(_e(i,z))return;const h=t.target,{keep_focus:m,noscroll:v,reload:g,replace_state:S}=le(h);if(g)return;t.preventDefault(),t.stopPropagation();const A=new FormData(h),P=a==null?void 0:a.getAttribute("name");P&&A.append(P,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(A).toString(),ce({url:i,scroll:v?Q():null,keepfocus:m??!1,redirect_chain:[],details:{state:{},replaceState:S??i.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[q]){if(t.state[q]===x)return;const a=B[t.state[q]];if(p.url.href.split("#")[0]===location.href.split("#")[0]){B[x]=Q(),x=t.state[q],scrollTo(a.x,a.y);return}const s=t.state[q]-x;let i=!1;await ce({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{x=t.state[q]},blocked:()=>{history.go(-s),i=!0},type:"popstate",delta:s}),i||Le(x)}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[q]:++x},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&M.navigating.set(null)})},_hydrate:async({status:e=200,error:t,node_ids:r,params:a,route:s,data:i,form:h})=>{T=!0;const m=new URL(location.href);({params:a={},route:s={id:null}}=W(m,!1)||{});let v;try{const g=r.map(async(S,A)=>{const P=i[A];return P!=null&&P.uses&&(P.uses=Ge(P.uses)),de({loader:n.nodes[S],url:m,params:a,route:s,parent:async()=>{const b={};for(let _=0;_<A;_+=1)Object.assign(b,(await g[_]).data);return b},server_data_node:pe(P)})});v=await Y({url:m,params:a,branch:await Promise.all(g),status:e,error:t,form:h,route:d.find(({id:S})=>S===s.id)??null})}catch(g){if(g instanceof Me){await J(new URL(g.location,location.href));return}v=await ie({status:g instanceof ee?g.status:500,error:await X(g,{url:m,params:a,route:s}),url:m,route:s})}Pe(v)}}}async function Ve(n,o){const d=new URL(n);d.pathname=at(n.pathname),d.searchParams.append("x-sveltekit-invalidated",o.map(f=>f?"1":"").join("_"));const c=await fe(d.href);if(!c.ok)throw new ee(c.status,await c.json());return new Promise(async f=>{var p;const u=new Map,R=c.body.getReader(),l=new TextDecoder;function w(T){return bt(T,{Promise:U=>new Promise((k,j)=>{u.set(U,{fulfil:k,reject:j})})})}let y="";for(;;){const{done:T,value:U}=await R.read();if(T&&!y)break;for(y+=!U&&y?`
`:l.decode(U);;){const k=y.indexOf(`
`);if(k===-1)break;const j=JSON.parse(y.slice(0,k));if(y=y.slice(k+1),j.type==="redirect")return f(j);if(j.type==="data")(p=j.nodes)==null||p.forEach(O=>{(O==null?void 0:O.type)==="data"&&(O.uses=Ge(O.uses),O.data=w(O.data))}),f(j);else if(j.type==="chunk"){const{id:O,data:G,error:H}=j,F=u.get(O);u.delete(O),H?F.reject(w(H)):F.fulfil(w(G))}}}})}function Ge(n){return{dependencies:new Set((n==null?void 0:n.dependencies)??[]),params:new Set((n==null?void 0:n.params)??[]),parent:!!(n!=null&&n.parent),route:!!(n!=null&&n.route),url:!!(n!=null&&n.url)}}function Ee(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const o=document.body,d=o.getAttribute("tabindex");return o.tabIndex=-1,o.focus({preventScroll:!0}),d!==null?o.setAttribute("tabindex",d):o.removeAttribute("tabindex"),new Promise(c=>{setTimeout(()=>{var f;c((f=getSelection())==null?void 0:f.removeAllRanges())})})}}async function It(n,o,d){const c=Et(n,o);Ye({client:c}),d?await c._hydrate(d):c.goto(location.href,{replaceState:!0}),c._start_router()}export{It as start};
