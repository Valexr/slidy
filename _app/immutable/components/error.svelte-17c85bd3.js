import{S as j,i as y,s as z,l as b,u as E,a as N,e as w,m as d,p as P,v as R,h as m,c as S,b as _,C as $,w as C,n as H,K as A}from"../chunks/index-26ad1f8f.js";import{p as B}from"../chunks/stores-e1e5521b.js";function K(p){let r,a=p[0].error.frame+"",f;return{c(){r=b("pre"),f=E(a)},l(l){r=d(l,"PRE",{});var s=P(r);f=R(s,a),s.forEach(m)},m(l,s){_(l,r,s),$(r,f)},p(l,s){s&1&&a!==(a=l[0].error.frame+"")&&C(f,a)},d(l){l&&m(r)}}}function h(p){let r,a=p[0].error.stack+"",f;return{c(){r=b("pre"),f=E(a)},l(l){r=d(l,"PRE",{});var s=P(r);f=R(s,a),s.forEach(m)},m(l,s){_(l,r,s),$(r,f)},p(l,s){s&1&&a!==(a=l[0].error.stack+"")&&C(f,a)},d(l){l&&m(r)}}}function D(p){let r,a=p[0].status+"",f,l,s,c=p[0].error.message+"",v,k,u,n,t=p[0].error.frame&&K(p),i=p[0].error.stack&&h(p);return{c(){r=b("h1"),f=E(a),l=N(),s=b("pre"),v=E(c),k=N(),t&&t.c(),u=N(),i&&i.c(),n=w()},l(e){r=d(e,"H1",{});var o=P(r);f=R(o,a),o.forEach(m),l=S(e),s=d(e,"PRE",{});var q=P(s);v=R(q,c),q.forEach(m),k=S(e),t&&t.l(e),u=S(e),i&&i.l(e),n=w()},m(e,o){_(e,r,o),$(r,f),_(e,l,o),_(e,s,o),$(s,v),_(e,k,o),t&&t.m(e,o),_(e,u,o),i&&i.m(e,o),_(e,n,o)},p(e,[o]){o&1&&a!==(a=e[0].status+"")&&C(f,a),o&1&&c!==(c=e[0].error.message+"")&&C(v,c),e[0].error.frame?t?t.p(e,o):(t=K(e),t.c(),t.m(u.parentNode,u)):t&&(t.d(1),t=null),e[0].error.stack?i?i.p(e,o):(i=h(e),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},i:H,o:H,d(e){e&&m(r),e&&m(l),e&&m(s),e&&m(k),t&&t.d(e),e&&m(u),i&&i.d(e),e&&m(n)}}}function F(p,r,a){let f;return A(p,B,l=>a(0,f=l)),[f]}class J extends j{constructor(r){super(),y(this,r,F,D,z,{})}}export{J as default};