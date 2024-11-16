import{s as Q,l as B,d as i,i as f,f as H,t as P,b as E,m as D,c as h,o as w,g as y,e as I,p as U,h as $,j as k,H as V,q as O}from"./scheduler.CHYfDSvP.js";import{S as W,i as X,d as z,a as A,t as F,m as G,c as J,b as K}from"./index.CNaes6TE.js";import{g as Y,a as R}from"./spread.CgU5AtxT.js";import{P as Z}from"./Page.FUkGPQvN.js";import{L as ee}from"./Link.DUb_AZTH.js";function te(_){let e;return{c(){e=P("here")},l(n){e=H(n,"here")},m(n,l){f(n,e,l)},d(n){n&&i(e)}}}function ae(_){let e,n="Easing",l,r,a="Easing is an animation function, also known as <em>timing</em> function. It allows to create smooth sliding transitions.",o,c,v,N=`<code class="language-ts"><span class="token comment">/** Both input and output are numbers in range [0, 1].
type Easing = (t: number) => number;</span></code>`,x,u,L,g,M="linear",T,p,q,C,d,S="The set of predefined easing functions is available as [@slidy/easing][separate package].",b;return p=new ee({props:{href:"https://easings.net/",rel:"nofollow",$$slots:{default:[te]},$$scope:{ctx:_}}}),{c(){e=$("h2"),e.textContent=n,l=k(),r=$("p"),r.innerHTML=a,o=k(),c=$("pre"),v=new V(!1),x=k(),u=$("p"),L=P("By default an easing function is "),g=$("code"),g.textContent=M,T=P(". Examples of easing function can be seen "),K(p.$$.fragment),q=P("."),C=k(),d=$("p"),d.textContent=S,this.h()},l(t){e=h(t,"H2",{id:!0,"data-svelte-h":!0}),w(e)!=="svelte-1i0hnp6"&&(e.textContent=n),l=y(t),r=h(t,"P",{"data-svelte-h":!0}),w(r)!=="svelte-9t4qgh"&&(r.innerHTML=a),o=y(t),c=h(t,"PRE",{class:!0});var s=I(c);v=U(s,!1),s.forEach(i),x=y(t),u=h(t,"P",{});var m=I(u);L=H(m,"By default an easing function is "),g=h(m,"CODE",{"data-svelte-h":!0}),w(g)!=="svelte-v7a71t"&&(g.textContent=M),T=H(m,". Examples of easing function can be seen "),J(p.$$.fragment,m),q=H(m,"."),m.forEach(i),C=y(t),d=h(t,"P",{"data-svelte-h":!0}),w(d)!=="svelte-5klbkr"&&(d.textContent=S),this.h()},h(){D(e,"id","easing"),v.a=null,D(c,"class","language-ts")},m(t,s){f(t,e,s),f(t,l,s),f(t,r,s),f(t,o,s),f(t,c,s),v.m(N,c),f(t,x,s),f(t,u,s),E(u,L),E(u,g),E(u,T),G(p,u,null),E(u,q),f(t,C,s),f(t,d,s),b=!0},p(t,s){const m={};s&2&&(m.$$scope={dirty:s,ctx:t}),p.$set(m)},i(t){b||(F(p.$$.fragment,t),b=!0)},o(t){A(p.$$.fragment,t),b=!1},d(t){t&&(i(e),i(l),i(r),i(o),i(c),i(x),i(u),i(C),i(d)),z(p)}}}function ne(_){let e,n;const l=[_[0],j];let r={$$slots:{default:[ae]},$$scope:{ctx:_}};for(let a=0;a<l.length;a+=1)r=B(r,l[a]);return e=new Z({props:r}),{c(){K(e.$$.fragment)},l(a){J(e.$$.fragment,a)},m(a,o){G(e,a,o),n=!0},p(a,[o]){const c=o&1?Y(l,[o&1&&R(a[0]),o&0&&R(j)]):{};o&2&&(c.$$scope={dirty:o,ctx:a}),e.$set(c)},i(a){n||(F(e.$$.fragment,a),n=!0)},o(a){A(e.$$.fragment,a),n=!1},d(a){z(e,a)}}}const j={toc:[{level:2,title:"Easing",id:"easing"}]},{toc:ue}=j;function se(_,e,n){return _.$$set=l=>{n(0,e=B(B({},e),O(l)))},e=O(e),[e]}class fe extends W{constructor(e){super(),X(this,e,se,ne,Q,{})}}export{fe as default,j as metadata};
