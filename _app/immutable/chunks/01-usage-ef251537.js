import{S as ks,i as ds,s as ms,C as X,w as fs,x as _s,y as gs,z as vs,A as ys,f as ws,t as Es,B as hs,V as ps,l as u,r as l,a as S,m as r,n as k,u as c,h as a,c as j,p as b,b as i,F as e,E as Ss}from"./index-a4e35989.js";import{P as js}from"./Page-a537f2a9.js";import"./masthead.module-67e901fd.js";function bs(C){let n,m,f,p,t,d,x,W,$,A,L,J,T,U,I,z,B,O,v,Q,F,y,os=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> media <span class="token keyword">as</span> mediaStore <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'https://unpkg.com/@slidy/media/dist/index.mjs'</span><span class="token punctuation">;</span> <span class="token comment">// MJS module</span>
        <span class="token comment">// OR</span>
        <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> media <span class="token keyword">as</span> mediaStore <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'https://unpkg.com/@slidy/media/dist/index.cjs'</span><span class="token punctuation">;</span> <span class="token comment">// CJS module</span>

        <span class="token keyword">const</span> media <span class="token operator">=</span> <span class="token function">mediaStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></code>`,H,g,V,M,G,K,P,w,ls=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/@slidy/media<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">let</span> mediaQueries <span class="token operator">=</span> <span class="token keyword">null</span>

    window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> media <span class="token operator">=</span> Slidy<span class="token punctuation">.</span><span class="token function">media</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`,q,E,N,D,h,cs=`<code class="language-svelte"><span class="token comment">&lt;!-- Svelte --></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> media <span class="token keyword">as</span> mediaStore <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@slidy/media'</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> media <span class="token operator">=</span> <span class="token function">mediaStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token literal-property property">$</span><span class="token operator">:</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$media<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`;return{c(){n=u("h2"),m=l("Usage"),f=S(),p=u("p"),t=l("Function "),d=u("code"),x=l("media({ queries, getter, cookie })"),W=l(" is available via named import as "),$=u("code"),A=l("MJS/CJS"),L=l(" module or via global "),J=u("code"),T=l("Window.Slidy"),U=l(" object props as "),I=u("code"),z=l("IIFE"),B=l("."),O=S(),v=u("h3"),Q=l("MJS/CJS module import"),F=S(),y=u("pre"),H=S(),g=u("h3"),V=l("IIFE as "),M=u("code"),G=l("Window"),K=l(" Object"),P=S(),w=u("pre"),q=S(),E=u("h3"),N=l("As third party module in any frameworks"),D=S(),h=u("pre"),this.h()},l(s){n=r(s,"H2",{id:!0});var o=k(n);m=c(o,"Usage"),o.forEach(a),f=j(s),p=r(s,"P",{});var _=k(p);t=c(_,"Function "),d=r(_,"CODE",{});var Y=k(d);x=c(Y,"media({ queries, getter, cookie })"),Y.forEach(a),W=c(_," is available via named import as "),$=r(_,"CODE",{});var Z=k($);A=c(Z,"MJS/CJS"),Z.forEach(a),L=c(_," module or via global "),J=r(_,"CODE",{});var ss=k(J);T=c(ss,"Window.Slidy"),ss.forEach(a),U=c(_," object props as "),I=r(_,"CODE",{});var as=k(I);z=c(as,"IIFE"),as.forEach(a),B=c(_,"."),_.forEach(a),O=j(s),v=r(s,"H3",{id:!0});var ns=k(v);Q=c(ns,"MJS/CJS module import"),ns.forEach(a),F=j(s),y=r(s,"PRE",{class:!0});var is=k(y);is.forEach(a),H=j(s),g=r(s,"H3",{id:!0});var R=k(g);V=c(R,"IIFE as "),M=r(R,"CODE",{});var ts=k(M);G=c(ts,"Window"),ts.forEach(a),K=c(R," Object"),R.forEach(a),P=j(s),w=r(s,"PRE",{class:!0});var us=k(w);us.forEach(a),q=j(s),E=r(s,"H3",{id:!0});var es=k(E);N=c(es,"As third party module in any frameworks"),es.forEach(a),D=j(s),h=r(s,"PRE",{class:!0});var rs=k(h);rs.forEach(a),this.h()},h(){b(n,"id","usage"),b(v,"id","mjscjs-module-import"),b(y,"class","language-html"),b(g,"id","iife-as-window-object"),b(w,"class","language-html"),b(E,"id","as-third-party-module-in-any-frameworks"),b(h,"class","language-svelte")},m(s,o){i(s,n,o),e(n,m),i(s,f,o),i(s,p,o),e(p,t),e(p,d),e(d,x),e(p,W),e(p,$),e($,A),e(p,L),e(p,J),e(J,T),e(p,U),e(p,I),e(I,z),e(p,B),i(s,O,o),i(s,v,o),e(v,Q),i(s,F,o),i(s,y,o),y.innerHTML=os,i(s,H,o),i(s,g,o),e(g,V),e(g,M),e(M,G),e(g,K),i(s,P,o),i(s,w,o),w.innerHTML=ls,i(s,q,o),i(s,E,o),e(E,N),i(s,D,o),i(s,h,o),h.innerHTML=cs},p:Ss,d(s){s&&a(n),s&&a(f),s&&a(p),s&&a(O),s&&a(v),s&&a(F),s&&a(y),s&&a(H),s&&a(g),s&&a(P),s&&a(w),s&&a(q),s&&a(E),s&&a(D),s&&a(h)}}}function Cs(C){let n,m;const f=[C[0]];let p={$$slots:{default:[bs]},$$scope:{ctx:C}};for(let t=0;t<f.length;t+=1)p=X(p,f[t]);return n=new js({props:p}),{c(){fs(n.$$.fragment)},l(t){_s(n.$$.fragment,t)},m(t,d){gs(n,t,d),m=!0},p(t,[d]){const x=d&1?vs(f,[ys(t[0])]):{};d&2&&(x.$$scope={dirty:d,ctx:t}),n.$set(x)},i(t){m||(ws(n.$$.fragment,t),m=!0)},o(t){Es(n.$$.fragment,t),m=!1},d(t){hs(n,t)}}}function xs(C,n,m){return C.$$set=f=>{m(0,n=X(X({},n),ps(f)))},n=ps(n),[n]}class Ms extends ks{constructor(n){super(),ds(this,n,xs,Cs,ms,{})}}export{Ms as default};