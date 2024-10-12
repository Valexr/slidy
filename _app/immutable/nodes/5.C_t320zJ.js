import{Z as x,_ as M,T as g,N as S,s as E,a as C,e as q,y as A,f as _,g as I,c as P,b as R,q as j,i as b,n as l}from"../chunks/scheduler.yVBDbAbC.js";import{g as B,t as w,e as H,a as f,S as N,i as T,c as W,b as K,m as U,d as V}from"../chunks/index.0Eb-6dyg.js";import{S as Z,y as D}from"../chunks/slidy.PD3QKlRd.js";function F(e,t){const o=t.token={};function a(r,n,c,s){if(t.token!==o)return;t.resolved=s;let u=t.ctx;c!==void 0&&(u=u.slice(),u[c]=s);const i=r&&(t.current=r)(u);let p=!1;t.block&&(t.blocks?t.blocks.forEach((d,m)=>{m!==n&&d&&(B(),w(d,1,1,()=>{t.blocks[m]===d&&(t.blocks[m]=null)}),H())}):t.block.d(1),i.c(),f(i,1),i.m(t.mount(),t.anchor),p=!0),t.block=i,t.blocks&&(t.blocks[n]=i),p&&S()}if(x(e)){const r=M();if(e.then(n=>{g(r),a(t.then,1,t.value,n),g(null)},n=>{if(g(r),a(t.catch,2,t.error,n),g(null),!t.hasCatch)throw n}),t.current!==t.pending)return a(t.pending,0),!0}else{if(t.current!==t.then)return a(t.then,1,t.value,e),!0;t.resolved=e}}const G=(e,t,o)=>Math.min(Math.max(e,t),o),J=async({limit:e=5,width:t=window.innerWidth,height:o=window.innerHeight})=>{try{return await L(e,{width:t,height:o})}catch(a){console.error(`Could not fetch photos: ${a}`)}};async function L(e=9,t={width:window.innerWidth,height:window.innerHeight}){const o="https://raw.githubusercontent.com/Valexr/Slidy/master/assets/static/photos.json",a=Array.from({length:e},()=>Math.floor(Math.random()*24644));return(await(await fetch(o)).json()).reduce((s,[u,i,p],d)=>{if(a.includes(d)){const m={width:t.height*(i/10),height:t.height},k={width:t.width,height:t.height},v=`?w=${c(y(m,k).width)}`;s.push({id:d,src:`https://images.unsplash.com/photo-${u}${v}`,alt:`Image by ${p} from Unsplash`,...y(m,k)})}return s},[]);function c(s){return s*devicePixelRatio}}const y=(e,t)=>{const o=Math.min(t.width/e.width,t.height,e.height);return{width:Math.round(e.width*o),height:Math.round(e.height*o)}},$=!!globalThis.window,O=(e,t=new Set)=>{const o=n=>(t.add(n),n(e),()=>{t.delete(n)}),a=n=>t.forEach(c=>c(n));return[o,n=>a(e=n(e))]},Q=$&&matchMedia("(prefers-color-scheme: dark)").matches,[X,st]=O(Q);X(e=>{$&&document.documentElement.setAttribute("scheme",e?"dark":"light")});let h=[];async function Y(e=10){h=await J({limit:G(3,e,10)})}async function z(e=10){return h!=null&&h.length||await Y(),h==null?void 0:h.sort(()=>.5-Math.random()).slice(0,e)}function tt(e){return{c:l,l,m:l,i:l,o:l,d:l}}function et(e){let t,o;return t=new Z({props:{animation:D,duration:450,gravity:1.45,snap:"center",thumbnail:!0,index:4,slides:e[0],arrows:!0}}),{c(){W(t.$$.fragment)},l(a){K(t.$$.fragment,a)},m(a,r){U(t,a,r),o=!0},i(a){o||(f(t.$$.fragment,a),o=!0)},o(a){w(t.$$.fragment,a),o=!1},d(a){V(t,a)}}}function nt(e){return{c:l,l,m:l,i:l,o:l,d:l}}function ot(e){let t,o,a,r={ctx:e,current:null,token:null,hasCatch:!1,pending:nt,then:et,catch:tt,value:0,blocks:[,,,]};return F(z(10),r),{c(){t=C(),o=q("main"),r.block.c(),this.h()},l(n){A("svelte-r068pv",document.head).forEach(_),t=I(n),o=P(n,"MAIN",{class:!0});var s=R(o);r.block.l(s),s.forEach(_),this.h()},h(){document.title="Slidy 3.1.0 - SvelteKit",j(o,"class","svelte-gogyl2")},m(n,c){b(n,t,c),b(n,o,c),r.block.m(o,r.anchor=null),r.mount=()=>o,r.anchor=null,a=!0},p(n,[c]){e=n},i(n){a||(f(r.block),a=!0)},o(n){for(let c=0;c<3;c+=1){const s=r.blocks[c];w(s)}a=!1},d(n){n&&(_(t),_(o)),r.block.d(),r.token=null,r=null}}}class lt extends N{constructor(t){super(),T(this,t,null,ot,E,{})}}export{lt as component};