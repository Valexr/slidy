import{S as P,i as R,s as Z,e as v,w as A,t as I,k as N,c as E,a as _,x as w,h as M,d as u,m as V,b as p,g as $,F as h,y as k,q as d,o as g,B as S,G as y,H as j,I as z,J as Q,K as W,r as x,L as ee,M as te,N as se,O as J,P as K,E as ne}from"../chunks/index-00c453e5.js";import{s as ae}from"../chunks/slides-a23a3139.js";import{L as H,p as re,a as le,b as ie,s as oe,c as U,d as fe,I as ue}from"../chunks/masthead.module-6c141d52.js";import{b as Y}from"../chunks/paths-1c47712a.js";import"../chunks/index-e66951ff.js";function ce(o){let e;return{c(){e=I("Slidy")},l(t){e=M(t,"Slidy")},m(t,s){$(t,e,s)},d(t){t&&u(e)}}}function $e(o){let e;return{c(){e=I("MIT licence")},l(t){e=M(t,"MIT licence")},m(t,s){$(t,e,s)},d(t){t&&u(e)}}}function me(o){let e;return{c(){e=I("Alexander Volkov")},l(t){e=M(t,"Alexander Volkov")},m(t,s){$(t,e,s)},d(t){t&&u(e)}}}function pe(o){let e,t,s,a,n,r,i,l,f,c,C=new Date().getFullYear()+"",B,G,L,q;return n=new H({props:{href:re,$$slots:{default:[ce]},$$scope:{ctx:o}}}),i=new H({props:{href:le,$$slots:{default:[$e]},$$scope:{ctx:o}}}),L=new H({props:{href:ie,$$slots:{default:[me]},$$scope:{ctx:o}}}),{c(){e=v("footer"),t=v("div"),s=v("section"),a=v("span"),A(n.$$.fragment),r=I(" is released under the "),A(i.$$.fragment),l=N(),f=v("span"),c=I("\xA9 "),B=I(C),G=N(),A(L.$$.fragment),this.h()},l(m){e=E(m,"FOOTER",{class:!0});var b=_(e);t=E(b,"DIV",{class:!0});var D=_(t);s=E(D,"SECTION",{label:!0});var O=_(s);a=E(O,"SPAN",{});var T=_(a);w(n.$$.fragment,T),r=M(T," is released under the "),w(i.$$.fragment,T),T.forEach(u),l=V(O),f=E(O,"SPAN",{});var F=_(f);c=M(F,"\xA9 "),B=M(F,C),G=V(F),w(L.$$.fragment,F),F.forEach(u),O.forEach(u),D.forEach(u),b.forEach(u),this.h()},h(){p(s,"label","user"),p(t,"class","container wrapper"),p(e,"class",oe.footer+" surface-2")},m(m,b){$(m,e,b),h(e,t),h(t,s),h(s,a),k(n,a,null),h(a,r),k(i,a,null),h(s,l),h(s,f),h(f,c),h(f,B),h(f,G),k(L,f,null),q=!0},p(m,[b]){const D={};b&1&&(D.$$scope={dirty:b,ctx:m}),n.$set(D);const O={};b&1&&(O.$$scope={dirty:b,ctx:m}),i.$set(O);const T={};b&1&&(T.$$scope={dirty:b,ctx:m}),L.$set(T)},i(m){q||(d(n.$$.fragment,m),d(i.$$.fragment,m),d(L.$$.fragment,m),q=!0)},o(m){g(n.$$.fragment,m),g(i.$$.fragment,m),g(L.$$.fragment,m),q=!1},d(m){m&&u(e),S(n),S(i),S(L)}}}class _e extends P{constructor(e){super(),R(this,e,null,pe,Z,{})}}const de=()=>{const o=y("__svelte__");return{page:{subscribe:o.page.subscribe},navigating:{subscribe:o.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:o.navigating.subscribe}},session:o.session,updated:o.updated}},ge={subscribe(o){return de().page.subscribe(o)}};function he(o){let e,t,s;const a=o[1].default,n=j(a,o,o[0],null);return{c(){e=v("nav"),t=v("ul"),n&&n.c(),this.h()},l(r){e=E(r,"NAV",{class:!0});var i=_(e);t=E(i,"UL",{class:!0});var l=_(t);n&&n.l(l),l.forEach(u),i.forEach(u),this.h()},h(){p(t,"class",U["menu-items"]),p(e,"class",U["menu-container"])},m(r,i){$(r,e,i),h(e,t),n&&n.m(t,null),s=!0},p(r,[i]){n&&n.p&&(!s||i&1)&&z(n,a,r,r[0],s?W(a,r[0],i,null):Q(r[0]),null)},i(r){s||(d(n,r),s=!0)},o(r){g(n,r),s=!1},d(r){r&&u(e),n&&n.d(r)}}}function be(o,e,t){let{$$slots:s={},$$scope:a}=e;return x("page",ge),o.$$set=n=>{"$$scope"in n&&t(0,a=n.$$scope)},[a,s]}class ve extends P{constructor(e){super(),R(this,e,be,he,Z,{})}}function Ee(o,{pattern:e,current:t}){const s=o.firstElementChild,a=s.getAttribute("href");function n({pattern:r,current:i}){r&&r instanceof RegExp?r.test(i)?s.setAttribute("aria-current","page"):s.removeAttribute("aria-current"):!r&&i===a?s.setAttribute("aria-current","page"):s.removeAttribute("aria-current")}return n({pattern:e,current:t}),{update:n}}function Ae(o){let e;const t=o[5].default,s=j(t,o,o[6],null);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,n){s&&s.m(a,n),e=!0},p(a,n){s&&s.p&&(!e||n&64)&&z(s,t,a,a[6],e?W(t,a[6],n,null):Q(a[6]),null)},i(a){e||(d(s,a),e=!0)},o(a){g(s,a),e=!1},d(a){s&&s.d(a)}}}function we(o){let e,t,s,a,n,r;return t=new H({props:{href:o[0],disabled:o[1],$$slots:{default:[Ae]},$$scope:{ctx:o}}}),{c(){e=v("li"),A(t.$$.fragment),this.h()},l(i){e=E(i,"LI",{class:!0});var l=_(e);w(t.$$.fragment,l),l.forEach(u),this.h()},h(){p(e,"class",U["menu-item"])},m(i,l){$(i,e,l),k(t,e,null),a=!0,n||(r=ee(s=Ee.call(null,e,{current:o[3].url.pathname,pattern:o[2]})),n=!0)},p(i,[l]){const f={};l&1&&(f.href=i[0]),l&2&&(f.disabled=i[1]),l&64&&(f.$$scope={dirty:l,ctx:i}),t.$set(f),s&&te(s.update)&&l&12&&s.update.call(null,{current:i[3].url.pathname,pattern:i[2]})},i(i){a||(d(t.$$.fragment,i),a=!0)},o(i){g(t.$$.fragment,i),a=!1},d(i){i&&u(e),S(t),n=!1,r()}}}function ke(o,e,t){let s,{$$slots:a={},$$scope:n}=e,{href:r=""}=e,{disabled:i=!1}=e,{pattern:l=null}=e;const f=y("page");return se(o,f,c=>t(3,s=c)),o.$$set=c=>{"href"in c&&t(0,r=c.href),"disabled"in c&&t(1,i=c.disabled),"pattern"in c&&t(2,l=c.pattern),"$$scope"in c&&t(6,n=c.$$scope)},[r,i,l,s,f,a,n]}class X extends P{constructor(e){super(),R(this,e,ke,we,Z,{href:0,disabled:1,pattern:2})}}function Se(o){let e,t,s,a,n;return{c(){e=J("path"),t=N(),s=J("path"),a=N(),n=J("path"),this.h()},l(r){e=K(r,"path",{fill:!0,d:!0}),_(e).forEach(u),t=V(r),s=K(r,"path",{fill:!0,d:!0}),_(s).forEach(u),a=V(r),n=K(r,"path",{fill:!0,d:!0}),_(n).forEach(u),this.h()},h(){p(e,"fill","#e94280"),p(e,"d","M25.05,27,11,32.88c-.85.34-1.53-.08-1.53-.93V25.16A2.62,2.62,0,0,1,11,23l14.1-5.78c.85-.34,1.53.09,1.53.94V24.9A2.49,2.49,0,0,1,25.05,27Z"),p(s,"fill","#655aa3"),p(s,"d","M9.42,17.87v-6.8c0-.85.68-1.27,1.53-.93l14.1,5.77a2.62,2.62,0,0,1,1.53,2.21v6.79c0,.85-.68,1.28-1.53.94L11,20A2.5,2.5,0,0,1,9.42,17.87Z"),p(n,"fill","#fdc21a"),p(n,"d","M25.05,13,11,18.83c-.85.34-1.53-.09-1.53-.94V11.1A2.62,2.62,0,0,1,11,8.89l14.1-5.77c.85-.34,1.53.08,1.53.93v6.79A2.5,2.5,0,0,1,25.05,13Z")},m(r,i){$(r,e,i),$(r,t,i),$(r,s,i),$(r,a,i),$(r,n,i)},p:ne,d(r){r&&u(e),r&&u(t),r&&u(s),r&&u(a),r&&u(n)}}}function Ie(o){let e,t,s;return e=new ue({props:{viewBox:"0 0 36 36",$$slots:{default:[Se]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=I(`
			Slidy`)},l(a){w(e.$$.fragment,a),t=M(a,`
			Slidy`)},m(a,n){k(e,a,n),$(a,t,n),s=!0},p(a,n){const r={};n&1&&(r.$$scope={dirty:n,ctx:a}),e.$set(r)},i(a){s||(d(e.$$.fragment,a),s=!0)},o(a){g(e.$$.fragment,a),s=!1},d(a){S(e,a),a&&u(t)}}}function Me(o){let e;return{c(){e=I("Home")},l(t){e=M(t,"Home")},m(t,s){$(t,e,s)},d(t){t&&u(e)}}}function Ce(o){let e;return{c(){e=I("Docs")},l(t){e=M(t,"Docs")},m(t,s){$(t,e,s)},d(t){t&&u(e)}}}function Le(o){let e,t,s,a;return e=new X({props:{href:Y+"/",pattern:/\/home/,$$slots:{default:[Me]},$$scope:{ctx:o}}}),s=new X({props:{href:Y+"/docs",pattern:/\/docs/,$$slots:{default:[Ce]},$$scope:{ctx:o}}}),{c(){A(e.$$.fragment),t=N(),A(s.$$.fragment)},l(n){w(e.$$.fragment,n),t=V(n),w(s.$$.fragment,n)},m(n,r){k(e,n,r),$(n,t,r),k(s,n,r),a=!0},p(n,r){const i={};r&1&&(i.$$scope={dirty:r,ctx:n}),e.$set(i);const l={};r&1&&(l.$$scope={dirty:r,ctx:n}),s.$set(l)},i(n){a||(d(e.$$.fragment,n),d(s.$$.fragment,n),a=!0)},o(n){g(e.$$.fragment,n),g(s.$$.fragment,n),a=!1},d(n){S(e,n),n&&u(t),S(s,n)}}}function Ne(o){let e,t,s,a,n,r,i;return s=new H({props:{href:Y+"/",$$slots:{default:[Ie]},$$scope:{ctx:o}}}),r=new ve({props:{$$slots:{default:[Le]},$$scope:{ctx:o}}}),{c(){e=v("header"),t=v("section"),A(s.$$.fragment),a=N(),n=v("section"),A(r.$$.fragment),this.h()},l(l){e=E(l,"HEADER",{class:!0});var f=_(e);t=E(f,"SECTION",{label:!0});var c=_(t);w(s.$$.fragment,c),c.forEach(u),a=V(f),n=E(f,"SECTION",{label:!0});var C=_(n);w(r.$$.fragment,C),C.forEach(u),f.forEach(u),this.h()},h(){p(t,"label","logo"),p(n,"label","navigation"),p(e,"class",`container ${fe.masthead}`)},m(l,f){$(l,e,f),h(e,t),k(s,t,null),h(e,a),h(e,n),k(r,n,null),i=!0},p(l,[f]){const c={};f&1&&(c.$$scope={dirty:f,ctx:l}),s.$set(c);const C={};f&1&&(C.$$scope={dirty:f,ctx:l}),r.$set(C)},i(l){i||(d(s.$$.fragment,l),d(r.$$.fragment,l),i=!0)},o(l){g(s.$$.fragment,l),g(r.$$.fragment,l),i=!1},d(l){l&&u(e),S(s),S(r)}}}class Ve extends P{constructor(e){super(),R(this,e,null,Ne,Z,{})}}function Oe(o){let e,t,s,a,n;e=new Ve({});const r=o[1].default,i=j(r,o,o[0],null);return a=new _e({}),{c(){A(e.$$.fragment),t=N(),i&&i.c(),s=N(),A(a.$$.fragment)},l(l){w(e.$$.fragment,l),t=V(l),i&&i.l(l),s=V(l),w(a.$$.fragment,l)},m(l,f){k(e,l,f),$(l,t,f),i&&i.m(l,f),$(l,s,f),k(a,l,f),n=!0},p(l,[f]){i&&i.p&&(!n||f&1)&&z(i,r,l,l[0],n?W(r,l[0],f,null):Q(l[0]),null)},i(l){n||(d(e.$$.fragment,l),d(i,l),d(a.$$.fragment,l),n=!0)},o(l){g(e.$$.fragment,l),g(i,l),g(a.$$.fragment,l),n=!1},d(l){S(e,l),l&&u(t),i&&i.d(l),l&&u(s),S(a,l)}}}const Ze=async()=>(await ae.init(25),{status:200});function Te(o,e,t){let{$$slots:s={},$$scope:a}=e;return o.$$set=n=>{"$$scope"in n&&t(0,a=n.$$scope)},[a,s]}class qe extends P{constructor(e){super(),R(this,e,Te,Oe,Z,{})}}export{qe as default,Ze as load};
