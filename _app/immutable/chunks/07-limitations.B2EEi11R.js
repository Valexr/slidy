import{s as w,l as f,d as r,n as C,i as u,m as g,c as m,o as v,g as k,e as H,p as L,h as _,j as y,H as q,q as x}from"./scheduler.CHYfDSvP.js";import{S as M,i as P,d as T,a as j,t as E,m as O,c as S,b as z}from"./index.CNaes6TE.js";import{g as D,a as $}from"./spread.CgU5AtxT.js";import{P as N}from"./Page.FUkGPQvN.js";function R(p){let t,i="Limitations",o,n,e="<li><p>Children (slide items) <code>absolute</code> positioning should not be applied. While the script uses coordinates from the <code>childNode</code>, it breaks the script functionality completely;</p></li> <li><p><code>@slidy/core</code> does not style the DOM, but keep in mind that there are some inline properties applied to the target node to provide functionality:</p></li>",a,l,d,b=`<code class="language-css"><span class="token punctuation">&#123;</span>
    <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){t=_("h2"),t.textContent=i,o=y(),n=_("ol"),n.innerHTML=e,a=y(),l=_("pre"),d=new q(!1),this.h()},l(s){t=m(s,"H2",{id:!0,"data-svelte-h":!0}),v(t)!=="svelte-1kqee8c"&&(t.textContent=i),o=k(s),n=m(s,"OL",{"data-svelte-h":!0}),v(n)!=="svelte-p3wzcw"&&(n.innerHTML=e),a=k(s),l=m(s,"PRE",{class:!0});var c=H(l);d=L(c,!1),c.forEach(r),this.h()},h(){g(t,"id","limitations"),d.a=null,g(l,"class","language-css")},m(s,c){u(s,t,c),u(s,o,c),u(s,n,c),u(s,a,c),u(s,l,c),d.m(b,l)},p:C,d(s){s&&(r(t),r(o),r(n),r(a),r(l))}}}function W(p){let t,i;const o=[p[0],h];let n={$$slots:{default:[R]},$$scope:{ctx:p}};for(let e=0;e<o.length;e+=1)n=f(n,o[e]);return t=new N({props:n}),{c(){z(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,a){O(t,e,a),i=!0},p(e,[a]){const l=a&1?D(o,[a&1&&$(e[0]),a&0&&$(h)]):{};a&2&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){i||(E(t.$$.fragment,e),i=!0)},o(e){j(t.$$.fragment,e),i=!1},d(e){T(t,e)}}}const h={toc:[{level:2,title:"Limitations",id:"limitations"}]},{toc:J}=h;function A(p,t,i){return p.$$set=o=>{i(0,t=f(f({},t),x(o)))},t=x(t),[t]}class K extends M{constructor(t){super(),P(this,t,A,W,w,{})}}export{K as default,h as metadata};
