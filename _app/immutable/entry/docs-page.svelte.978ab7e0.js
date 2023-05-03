import{S as U,i as V,s as j,k as v,y as D,a as C,l as $,m as k,z as H,c as I,h as _,n as y,b as L,A as q,C as p,g,f as w,d as E,B as M,P,L as F,q as z,r as O,v as T,N as G}from"../chunks/index.c03508f6.js";import{e as J}from"../chunks/singletons.b048a97c.js";import{p as K}from"../chunks/stores.76b69e84.js";import"../chunks/masthead.module.877bf9cd.js";import{H as Q}from"../chunks/Header.ce14e579.js";import{L as R}from"../chunks/Link.2c886a0b.js";function N(h,l,n){const a=h.slice();return a[2]=l[n].section,a[3]=l[n].items,a}function x(h,l,n){const a=h.slice();return a[6]=l[n].title,a[7]=l[n].href,a}function W(h){let l=h[6]+"",n;return{c(){n=z(l)},l(a){n=O(a,l)},m(a,u){L(a,n,u)},p:G,d(a){a&&_(n)}}}function A(h){let l,n,a,u;return n=new R({props:{href:""+(J+h[7]),$$slots:{default:[W]},$$scope:{ctx:h}}}),{c(){l=v("li"),D(n.$$.fragment),a=C(),this.h()},l(i){l=$(i,"LI",{class:!0});var r=k(l);H(n.$$.fragment,r),a=I(r),r.forEach(_),this.h()},h(){y(l,"class","svelte-1nvy51r")},m(i,r){L(i,l,r),q(n,l,null),p(l,a),u=!0},p(i,r){const o={};r&1024&&(o.$$scope={dirty:r,ctx:i}),n.$set(o)},i(i){u||(g(n.$$.fragment,i),u=!0)},o(i){E(n.$$.fragment,i),u=!1},d(i){i&&_(l),M(n)}}}function B(h){let l,n,a=h[2]+"",u,i,r,o,d,s=h[3],e=[];for(let t=0;t<s.length;t+=1)e[t]=A(x(h,s,t));const m=t=>E(e[t],1,1,()=>{e[t]=null});return{c(){l=v("section"),n=v("h2"),u=z(a),i=C(),r=v("ul");for(let t=0;t<e.length;t+=1)e[t].c();o=C(),this.h()},l(t){l=$(t,"SECTION",{});var f=k(l);n=$(f,"H2",{class:!0});var c=k(n);u=O(c,a),c.forEach(_),i=I(f),r=$(f,"UL",{class:!0});var b=k(r);for(let S=0;S<e.length;S+=1)e[S].l(b);b.forEach(_),o=I(f),f.forEach(_),this.h()},h(){y(n,"class","svelte-1nvy51r"),y(r,"class","svelte-1nvy51r")},m(t,f){L(t,l,f),p(l,n),p(n,u),p(l,i),p(l,r);for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(r,null);p(l,o),d=!0},p(t,f){if(f&2){s=t[3];let c;for(c=0;c<s.length;c+=1){const b=x(t,s,c);e[c]?(e[c].p(b,f),g(e[c],1)):(e[c]=A(b),e[c].c(),g(e[c],1),e[c].m(r,null))}for(T(),c=s.length;c<e.length;c+=1)m(c);w()}},i(t){if(!d){for(let f=0;f<s.length;f+=1)g(e[f]);d=!0}},o(t){e=e.filter(Boolean);for(let f=0;f<e.length;f+=1)E(e[f]);d=!1},d(t){t&&_(l),P(e,t)}}}function X(h){let l,n,a,u,i;n=new Q({props:{className:"surface-2",title:h[0].params.section||"Documentation"}});let r=h[1],o=[];for(let s=0;s<r.length;s+=1)o[s]=B(N(h,r,s));const d=s=>E(o[s],1,1,()=>{o[s]=null});return{c(){l=v("main"),D(n.$$.fragment),a=C(),u=v("div");for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){l=$(s,"MAIN",{class:!0});var e=k(l);H(n.$$.fragment,e),a=I(e),u=$(e,"DIV",{class:!0});var m=k(u);for(let t=0;t<o.length;t+=1)o[t].l(m);m.forEach(_),e.forEach(_),this.h()},h(){y(u,"class","contents svelte-1nvy51r"),y(l,"class","svelte-1nvy51r")},m(s,e){L(s,l,e),q(n,l,null),p(l,a),p(l,u);for(let m=0;m<o.length;m+=1)o[m]&&o[m].m(u,null);i=!0},p(s,[e]){const m={};if(e&1&&(m.title=s[0].params.section||"Documentation"),n.$set(m),e&2){r=s[1];let t;for(t=0;t<r.length;t+=1){const f=N(s,r,t);o[t]?(o[t].p(f,e),g(o[t],1)):(o[t]=B(f),o[t].c(),g(o[t],1),o[t].m(u,null))}for(T(),t=r.length;t<o.length;t+=1)d(t);w()}},i(s){if(!i){g(n.$$.fragment,s);for(let e=0;e<r.length;e+=1)g(o[e]);i=!0}},o(s){E(n.$$.fragment,s),o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)E(o[e]);i=!1},d(s){s&&_(l),M(n),P(o,s)}}}function Y(h,l,n){let a;return F(h,K,i=>n(0,a=i)),[a,[{section:"Core Script",items:[{title:"Core",href:"/docs/core"}]},{section:"Integrations",items:[{title:"Svelte",href:"/docs/svelte"}]},{section:"Extensions",items:[{title:"Animation",href:"/docs/animation"},{title:"Easing",href:"/docs/easing"},{title:"Media",href:"/docs/media"}]}]]}class oe extends U{constructor(l){super(),V(this,l,Y,X,j,{})}}export{oe as default};
