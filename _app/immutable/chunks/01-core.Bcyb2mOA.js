import{s as A,l as q,m as w,e as m,a as h,H as I,c as _,o as v,g as k,b as j,p as D,f as o,q as T,i as s,n as E}from"./scheduler.yVBDbAbC.js";import{S as z,i as F,c as B,b as N,m as O,a as R,t as G,d as J}from"./index.0Eb-6dyg.js";import{g as K,a as L}from"./spread.CgU5AtxT.js";import{P as Q}from"./Page.BLYzVjz-.js";function U(f){let t,r="Core Component",c,l,n="<code>Core</code> is a wrapper component for [@slidy/core][core-package] available via named import. It is best to use to build up the custom component for specific needs or when just the basic functionality is needed.",d,i,C,S=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Core <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"@slidy/svelte"</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Core</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- your carousel items passed via slot --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Core</span><span class="token punctuation">></span></span></code>`,b,p,H="Core Component API",x,u,P='<thead><tr><th align="left">Property</th> <th align="center">Default</th> <th align="center">Type</th> <th align="left">Description</th></tr></thead> <tbody><tr><td align="left"><code>animation</code></td> <td align="center"><code>undefined</code></td> <td align="center"><code>AnimationFunc</code></td> <td align="left">Custom slide animation.</td></tr> <tr><td align="left"><code>axis</code></td> <td align="center"><code>&quot;x&quot;</code></td> <td align="center">`“x”</td> <td align="left">“y”`</td></tr> <tr><td align="left"><code>clamp</code></td> <td align="center"><code>0</code></td> <td align="center"><code>number</code></td> <td align="left">Clamps sliding index as <code>{clamp} - {index} + {clamp}</code></td></tr> <tr><td align="left"><code>className</code></td> <td align="center"><code>&quot;&quot;</code></td> <td align="center"><code>string</code></td> <td align="left">Passes the <code>class</code> to the node.</td></tr> <tr><td align="left"><code>duration</code></td> <td align="center"><code>450</code></td> <td align="center"><code>number</code></td> <td align="left">Slide transitions duration value.</td></tr> <tr><td align="left"><code>easing</code></td> <td align="center"><code>undefined</code></td> <td align="center"><code>(t: number =&gt; number)</code></td> <td align="left">Inertion scroll easing behaviour.</td></tr> <tr><td align="left"><code>gravity</code></td> <td align="center"><code>1.2</code></td> <td align="center"><code>number</code></td> <td align="left">Scroll inertia value.</td></tr> <tr><td align="left"><code>indent</code></td> <td align="center"><code>0</code></td> <td align="center"><code>number</code></td> <td align="left">Custom scroll indent value, calculates as <code>gap * indent</code>.</td></tr> <tr><td align="left"><code>index</code></td> <td align="center"><code>0</code></td> <td align="center"><code>number</code></td> <td align="left">The index of the initial slide.</td></tr> <tr><td align="left"><code>loop</code></td> <td align="center"><code>false</code></td> <td align="center"><code>boolean</code></td> <td align="left">Makes the slideshow continious.</td></tr> <tr><td align="left"><code>position</code></td> <td align="center"><code>0</code></td> <td align="center"><code>number</code></td> <td align="left">The current position value of the carousel.</td></tr> <tr><td align="left"><code>sensity</code></td> <td align="center"><code>5</code></td> <td align="center"><code>number</code></td> <td align="left">Defines the sliding sensity as the number of pixels required to drag.</td></tr> <tr><td align="left"><code>snap</code></td> <td align="center"><code>undefined</code></td> <td align="center">`“start”</td> <td align="left">“center”</td></tr> <tr><td align="left"><code>tag</code></td> <td align="center"><code>&quot;ol&quot;</code></td> <td align="center"><code>string</code></td> <td align="left">The HTML tag name to render.</td></tr></tbody>',y,g,$="For TypeScript users there is the <code>SlidyCoreOptions</code> interface available via named import.";return{c(){t=m("h2"),t.textContent=r,c=h(),l=m("p"),l.innerHTML=n,d=h(),i=m("pre"),C=new I(!1),b=h(),p=m("h3"),p.textContent=H,x=h(),u=m("table"),u.innerHTML=P,y=h(),g=m("p"),g.innerHTML=$,this.h()},l(e){t=_(e,"H2",{id:!0,"data-svelte-h":!0}),v(t)!=="svelte-15gk3pv"&&(t.textContent=r),c=k(e),l=_(e,"P",{"data-svelte-h":!0}),v(l)!=="svelte-hvyq80"&&(l.innerHTML=n),d=k(e),i=_(e,"PRE",{class:!0});var a=j(i);C=D(a,!1),a.forEach(o),b=k(e),p=_(e,"H3",{id:!0,"data-svelte-h":!0}),v(p)!=="svelte-u5z6q4"&&(p.textContent=H),x=k(e),u=_(e,"TABLE",{"data-svelte-h":!0}),v(u)!=="svelte-q51zu6"&&(u.innerHTML=P),y=k(e),g=_(e,"P",{"data-svelte-h":!0}),v(g)!=="svelte-1xbst5e"&&(g.innerHTML=$),this.h()},h(){T(t,"id","core-component"),C.a=null,T(i,"class","language-svelte"),T(p,"id","core-component-api")},m(e,a){s(e,t,a),s(e,c,a),s(e,l,a),s(e,d,a),s(e,i,a),C.m(S,i),s(e,b,a),s(e,p,a),s(e,x,a),s(e,u,a),s(e,y,a),s(e,g,a)},p:E,d(e){e&&(o(t),o(c),o(l),o(d),o(i),o(b),o(p),o(x),o(u),o(y),o(g))}}}function V(f){let t,r;const c=[f[0],M];let l={$$slots:{default:[U]},$$scope:{ctx:f}};for(let n=0;n<c.length;n+=1)l=q(l,c[n]);return t=new Q({props:l}),{c(){B(t.$$.fragment)},l(n){N(t.$$.fragment,n)},m(n,d){O(t,n,d),r=!0},p(n,[d]){const i=d&1?K(c,[d&1&&L(n[0]),d&0&&L(M)]):{};d&2&&(i.$$scope={dirty:d,ctx:n}),t.$set(i)},i(n){r||(R(t.$$.fragment,n),r=!0)},o(n){G(t.$$.fragment,n),r=!1},d(n){J(t,n)}}}const M={toc:[{level:2,title:"Core Component",id:"core-component"},{level:3,title:"Core Component API",id:"core-component-api"}]};function W(f,t,r){return f.$$set=c=>{r(0,t=q(q({},t),w(c)))},t=w(t),[t]}class et extends z{constructor(t){super(),F(this,t,W,V,A,{})}}export{et as default,M as metadata};