import{S as oe,i as re,s as ee,D as fe,l as j,m as H,p as K,h as T,q as M,O,b as D,E as ue,F as ce,G as de,f as E,t as I,J as Me,e as G,n as _e,U as ze,V as Ce,C as R,W as P,M as ke,N as Oe,H as ut,P as Ze,I as ct,X as dt,Y as C,L as Lt,Q as Ke,R as St,g as W,d as J,Z as mt,u as Le,a as Q,v as Se,c as p,w as Fe,r as se,x as te,y as ne,z as ie,A as le,_ as zt,$ as ht,a0 as _t,a1 as gt,a2 as Ct,j as Ot,a3 as Zt,a4 as Bt,a5 as Dt}from"./index-26ad1f8f.js";const Vt={arrow:"slidy-arrow",counter:"slidy-counter",img:"slidy-img",nav:"slidy-nav","nav-item":"slidy-nav-item",overlay:"slidy-overlay",progress:"slidy-progress",root:"slidy",slide:"slidy-slide",slides:"slidy-slides",thumbnail:"slidy-thumbnail",thumbnails:"slidy-thumbnails"},Pt=(n,e,t)=>Math.min(Math.max(e,n),t),Rt={status:!0,interval:1e3};function Ut(n,e=Rt){let{status:t=!1}=e;const{interval:i=1e3}=e;let l;const a=()=>{l=window.setInterval(()=>{t&&n.dispatchEvent(new CustomEvent("play"))},i)},o=()=>{t=!1,n.dispatchEvent(new CustomEvent("pause"))},s=()=>o(),r=()=>t=!0,u=()=>o(),f=()=>t=!0,h=()=>{document.visibilityState==="hidden"?o():t=!0},_=()=>{window.addEventListener("visibilitychange",h,!1),n.addEventListener("pointerover",s,{passive:!0}),n.addEventListener("pointerout",r,{passive:!0}),n.addEventListener("focusin",u,{passive:!0}),n.addEventListener("focusout",f,{passive:!0}),a()},c=()=>{window.clearInterval(l),window.removeEventListener("visibilitychange",h),n.removeEventListener("pointerover",s),n.removeEventListener("pointerout",r),n.removeEventListener("focusin",u),n.removeEventListener("focusout",f),n.dispatchEvent(new CustomEvent("stop"))};return t&&_(),{update({status:m}){m?_():c()},destroy(){c()}}}function Ft(n){let e,t;const i=n[9].default,l=fe(i,n,n[8],null);return{c(){e=j("button"),l&&l.c(),this.h()},l(a){e=H(a,"BUTTON",{"aria-label":!0,class:!0,"data-step":!0});var o=K(e);l&&l.l(o),o.forEach(T),this.h()},h(){M(e,"aria-label",n[2]),M(e,"class",n[4].arrow),M(e,"data-step",n[0]),e.disabled=n[3],O(e,"prev",n[0]<0),O(e,"vertical",n[1])},m(a,o){D(a,e,o),l&&l.m(e,null),t=!0},p(a,[o]){l&&l.p&&(!t||o&256)&&ue(l,i,a,a[8],t?de(i,a[8],o,null):ce(a[8]),null),(!t||o&4)&&M(e,"aria-label",a[2]),(!t||o&1)&&M(e,"data-step",a[0]),(!t||o&8)&&(e.disabled=a[3]),o&1&&O(e,"prev",a[0]<0),o&2&&O(e,"vertical",a[1])},i(a){t||(E(l,a),t=!0)},o(a){I(l,a),t=!1},d(a){a&&T(e),l&&l.d(a)}}}function Kt(n,e,t){let i,l,{$$slots:a={},$$scope:o}=e,{type:s=1}=e,{loop:r}=e,{index:u}=e,{items:f}=e,{vertical:h=!1}=e;const _=Me("classNames");return n.$$set=c=>{"type"in c&&t(0,s=c.type),"loop"in c&&t(5,r=c.loop),"index"in c&&t(6,u=c.index),"items"in c&&t(7,f=c.items),"vertical"in c&&t(1,h=c.vertical),"$$scope"in c&&t(8,o=c.$$scope)},n.$$.update=()=>{n.$$.dirty&225&&t(3,i=s<1?u===0&&!r:u===f-1&&!r),n.$$.dirty&65&&t(2,l=s<1?`Go to the previous slide: #${u}`:`Go to the next slide: #${u}`)},[s,h,l,i,_,r,u,f,o,a]}class Xt extends oe{constructor(e){super(),re(this,e,Kt,Ft,ee,{type:0,loop:5,index:6,items:7,vertical:1})}}function qt(n){let e,t,i,l,a,o;return{c(){e=j("button"),t=ze("svg"),i=ze("path"),this.h()},l(s){e=H(s,"BUTTON",{class:!0});var r=K(e);t=Ce(r,"svg",{xmlns:!0,viewBox:!0});var u=K(t);i=Ce(u,"path",{d:!0}),K(i).forEach(T),u.forEach(T),r.forEach(T),this.h()},h(){M(i,"d",l=n[0]?"M5.75,3A1.75,1.75,0,0,0,4,4.75v14.5A1.75,1.75,0,0,0,5.75,21h3.5A1.75,1.75,0,0,0,11,19.25V4.75A1.75,1.75,0,0,0,9.25,3ZM5.5,4.75a.25.25,0,0,1,.25-.25h3.5a.25.25,0,0,1,.25.25v14.5a.25.25,0,0,1-.25.25H5.75a.25.25,0,0,1-.25-.25ZM14.75,3A1.75,1.75,0,0,0,13,4.75v14.5A1.75,1.75,0,0,0,14.75,21h3.5A1.75,1.75,0,0,0,20,19.25V4.75A1.75,1.75,0,0,0,18.25,3ZM14.5,4.75a.25.25,0,0,1,.25-.25h3.5a.25.25,0,0,1,.25.25v14.5a.25.25,0,0,1-.25.25h-3.5a.25.25,0,0,1-.25-.25Z":"M7.61,4.61a.75.75,0,0,0-1.11.66V18.73a.75.75,0,0,0,1.11.65L20,12.66a.75.75,0,0,0,0-1.32ZM5,5.27a2.25,2.25,0,0,1,3.33-2L20.69,10a2.26,2.26,0,0,1,0,4L8.33,20.7a2.25,2.25,0,0,1-3.33-2Z"),M(t,"xmlns","http://www.w3.org/2000/svg"),M(t,"viewBox","0 0 24 24"),M(e,"class","slidy-autoplay"),e.disabled=n[1]},m(s,r){D(s,e,r),R(e,t),R(t,i),a||(o=P(e,"click",n[3]),a=!0)},p(s,r){r&1&&l!==(l=s[0]?"M5.75,3A1.75,1.75,0,0,0,4,4.75v14.5A1.75,1.75,0,0,0,5.75,21h3.5A1.75,1.75,0,0,0,11,19.25V4.75A1.75,1.75,0,0,0,9.25,3ZM5.5,4.75a.25.25,0,0,1,.25-.25h3.5a.25.25,0,0,1,.25.25v14.5a.25.25,0,0,1-.25.25H5.75a.25.25,0,0,1-.25-.25ZM14.75,3A1.75,1.75,0,0,0,13,4.75v14.5A1.75,1.75,0,0,0,14.75,21h3.5A1.75,1.75,0,0,0,20,19.25V4.75A1.75,1.75,0,0,0,18.25,3ZM14.5,4.75a.25.25,0,0,1,.25-.25h3.5a.25.25,0,0,1,.25.25v14.5a.25.25,0,0,1-.25.25h-3.5a.25.25,0,0,1-.25-.25Z":"M7.61,4.61a.75.75,0,0,0-1.11.66V18.73a.75.75,0,0,0,1.11.65L20,12.66a.75.75,0,0,0,0-1.32ZM5,5.27a2.25,2.25,0,0,1,3.33-2L20.69,10a2.26,2.26,0,0,1,0,4L8.33,20.7a2.25,2.25,0,0,1-3.33-2Z")&&M(i,"d",l),r&2&&(e.disabled=s[1])},d(s){s&&T(e),a=!1,o()}}}function Yt(n){let e,t=n[2]&&qt(n);return{c(){t&&t.c(),e=G()},l(i){t&&t.l(i),e=G()},m(i,l){t&&t.m(i,l),D(i,e,l)},p(i,[l]){i[2]&&t.p(i,l)},i:_e,o:_e,d(i){t&&t.d(i),i&&T(e)}}}function jt(n,e,t){let{status:i=!1}=e,{disabled:l=!1}=e,a=i;const o=()=>t(0,i=!i);return n.$$set=s=>{"status"in s&&t(0,i=s.status),"disabled"in s&&t(1,l=s.disabled)},[i,l,a,o]}class Ht extends oe{constructor(e){super(),re(this,e,jt,Yt,ee,{status:0,disabled:1})}}function he(n,e,t){return Math.min(t,Math.max(n,e))}function Pe(n,e,t,i,l){return t?a=>{i||(n(a),i=!0,clearTimeout(l),l=setTimeout(()=>i=!1,e))}:a=>n(a)}function Be(n,e){for(let t=0;t<n.length;t++)e(n[t],t);return n}function Gt(n){return new Promise((e,t)=>{let i=0;if(n){let l=setInterval(()=>{i++,i>=69?(i=0,clearInterval(l),t("few slides")):n.children.length&&Array.from(n.children).every(a=>a&&a.isConnected)&&(i=0,clearInterval(l),e(Wt(n)))},16)}})}function Wt(n){return Be(n.children,(e,t)=>e.index=t)}function Re(n,e,t){let i=n.children.length;return e.loop?(t+i)%i:he(0,t,i-1)}function Ie(n,e){if(n.type==="wheel")return Math.abs(n.deltaX)>=Math.abs(n.deltaY)?n.deltaX:n.shiftKey||e.axis==="y"?n.deltaY:0;{let t=i=>i.touches&&i.touches[0]||i;return e.axis==="y"?t(n).pageY:t(n).pageX}}function me(n,e,t){n.dispatchEvent(new CustomEvent(e,{detail:t}))}function be(n,e,t=!0){Be(e,i=>{let l=t?"addEventListener":"removeEventListener",[a,o,s]=i;n[l](a,o,s)})}function Jt(n,e){let t=Array.from(n.children),i=t.length,l=Array.from(Array(i).keys()),a=i-1,o=Math.floor(i/2),s=t[1].offsetTop-t[0].offsetTop,r=s?"offsetTop":"offsetLeft",u=s?"offsetHeight":"offsetWidth",f=Math.sign(t[a][r]),h=i>1?t[a][r]*f-t[a-1][r]*f-t[a-Math.max(f,0)][u]:0,_=A(f<0?a:0,"start"),c=A(f<0?0:a,"end"),m=Math.abs(c-_)>h*2,N=e.loop?!1:(f<0?e.index===a:!e.index)&&e.direction<=0&&e.position<_||(f<0?!e.index:e.index===a)&&e.direction>0&&e.position>c;function A(k,z=e.snap){let v=X=>t.find(q=>q.index===X)||t[0],g=X=>n[u]-v(X)[u],S=v(k)[u]+h*2<n[u]?e.indent:g(k)/2/h||0,y=Y(k,z)<=Y(f<0?a:0,"start"),U=Y(k,z)>=Y(f<0?0:a,"end"),B=y?"start":U?"end":e.snap;return Y(k,e.snap&&e.snap!=="deck"&&!e.loop?B:z);function Y(X,q){let b=q==="start"?0:q==="end"?1:.5,ge=q==="start"?-S:q==="end"?S:0;return v(X)[r]-g(X)*b+h*ge}}return{end:c,start:_,edges:N,distance:A,scrollable:m,index(k){let z=v=>Math.abs(A(v)-k);return l.reduce((v,g)=>z(g)<z(v)?g:v,0)},position(k=e.loop){if(k){let z=e.index,v=t.slice(z-o).concat(t.slice(0,z-o));n.replaceChildren(...v)}return m?A(e.index):0},swap(k){let z=i%k?Math.sign(-k):k,v=z>0?0:a;return v?n.prepend(t[v]):n.append(t[v]),(t[v][u]+h)*(z*f)},animate(){Be(t,(k,z)=>{k.i=z,k.active=e.loop?o:e.index,k.size=k[u]+h,k.dist=A(k.index),k.track=e.position-k.dist,k.turn=he(-1,k.track/k.size,1),k.exp=he(0,(k.size-Math.abs(k.track))/k.size,1);let v=e.snap==="deck"?k.dist:e.position,g=s?`translateY(${-v}px)`:`translateX(${-v}px)`,S=e.animation?e.animation({node:n,child:k,options:Object.assign(e,{vertical:s,reverse:f}),translate:g}):{transform:g};Object.assign(k.style,S)})}}}function Qt(n,e){let t={index:0,clamp:0,indent:1,sensity:5,gravity:1.2,duration:375,animation:void 0,easing:void 0,snap:void 0,axis:void 0,loop:!1,...e},i=0,l=0,a=0,o=0,s=0,r=!1,u,f=i=t.index,h=t.position,_=t.duration/2,c=t.sensity,m=t.gravity,N=t.clamp,A=[["touchmove",X,{passive:!1}],["mousemove",X],["touchend",q],["mouseup",q]],k=[["wheel",ge,{passive:!1,capture:!0}]],z=[["touchstart",Y,{passive:!1}],["mousedown",Y],["keydown",ve],["contextmenu",()=>B(f)],["dragstart",w=>w.preventDefault()]],v=new ResizeObserver(w=>{B(f),h=g().position(!1),me(n,"resize",{ROE:w})});function g(){return Jt(n,t)}function S(w,L){return t.axis==="y"&&w.type==="touchmove"?!g().edges:Math.abs(L)>=c}Gt(n).then(()=>{n.style.outline="none",n.style.overflow="hidden",n.style.userSelect="none",n.onwheel=Pe(b,_,N),h=g().position(),v.observe(n),be(n,z),be(window,k),me(n,"mount",{options:t})}).catch(w=>console.error("Slidy:",w));function y(w,L){t.direction=Math.sign(w),h+=Z(w),h=t.position=V(h),f=t.index=g().index(h),m=g().edges?1.8:t.gravity,c=0,g().animate(),me(n,"move",{index:f,position:h});function Z(F){return f-i&&(F-=t.loop?g().swap(f-i):0,i=f,me(n,"index",{index:L})),g().scrollable?F:0}function V(F){let $=he(g().start,F,g().end);return!t.snap&&!t.loop?$:F}}function U(w,L){let Z=performance.now(),V=t.snap||t.loop||g().edges?g().distance(w):he(g().start,h+L,g().end),F=_*he(1,Math.abs(w-i),2);L=V-h,requestAnimationFrame(function $(){let ye=Z-performance.now(),Ee=Math.exp(ye/F),De=t.easing?t.easing(Ee):Ee,Ae=L*De,Ve=(t.loop?g().distance(w):V)-h-Ae;y(Ve,w),Math.round(Ae)?a=requestAnimationFrame($):(c=t.sensity,x())})}function B(w=0){x(),w=Re(n,t,w);let L=g().distance(w)-h;U(w,L)}function Y(w){x(),c=t.sensity,l=Ie(w,t),o=w.timeStamp,s=0,be(window,A),!g().edges&&w.stopPropagation()}function X(w){let L=(l-Ie(w,t))*(2-m),Z=w.timeStamp-o,V=1e3*L/(m+Z);o=w.timeStamp,l=Ie(w,t),s=(2-m)*V+(m-1)*s,window.onscroll=()=>{B(f),m=2},S(w,L)&&(y(L,f),w.preventDefault())}function q(){x();let w=s*(2-m),L=g().index(h+w);U(Z(L,t),w);function Z(V,F){let $=N*F.direction;return V=N&&V-i?f+$:V,Re(n,F,V)}}function b(w){x();let L=Ie(w,t)*(2-m),Z=f+Math.sign(L)*(N||1),V=N||w.shiftKey,F=g().edges?L/5:L,$=V?Z:f,ye=V?0:_/2;!V&&S(w,F)&&y(F,f),u=(t.snap||V)&&S(w,F)?setTimeout(()=>B($),ye):void 0,!g().edges&&w.stopPropagation()}function ge(w){w.composedPath().includes(n)&&((Math.abs(w.deltaX)>=Math.abs(w.deltaY)||w.shiftKey||t.axis==="y"&&!g().edges)&&w.preventDefault(),w.shiftKey!==r&&(n.onwheel=Pe(b,_,w.shiftKey),r=w.shiftKey))}function ve(w){let L=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"],Z=(L.indexOf(w.key)%2-1||1)*(N||1);L.indexOf(w.key)>=0&&(B(f+Z),w.preventDefault()),me(n,"keys",w.key)}function x(){clearTimeout(u),cancelAnimationFrame(a),be(window,A,!1)}function Ne(w){Be(Object.entries(w),([L,Z])=>{if(Z!==t[L]){switch(L){case"index":f=t[L]=Re(n,t,Z),B(f);break;case"gravity":m=t[L]=he(0,Z,2);break;case"duration":t[L]=Z,_=Z/2;break;case"sensity":c=t[L]=Z;break;case"clamp":N=t[L]=Z,n.onwheel=Pe(b,_,Z);break;default:t[L]=Z,h=t.position=g().position(!1),B(f);break}me(n,"update",w)}})}function we(){x(),v.disconnect(),be(n,z,!1),be(window,k,!1),me(n,"destroy",n)}return{update:Ne,destroy:we,to:B}}function Ue(n){let e,t,i,l,a;const o=n[15].default,s=fe(o,n,n[14],null);let r=[{class:n[5]},{"aria-live":"polite"},{tabindex:"0"}],u={};for(let f=0;f<r.length;f+=1)u=ke(u,r[f]);return{c(){e=j(n[13]),s&&s.c(),this.h()},l(f){e=H(f,(n[13]||"null").toUpperCase(),{class:!0,"aria-live":!0,tabindex:!0});var h=K(e);s&&s.l(h),h.forEach(T),this.h()},h(){Oe(e,u)},m(f,h){D(f,e,h),s&&s.m(e,null),i=!0,l||(a=[ut(t=Qt.call(null,e,{animation:n[2],axis:n[3],clamp:n[4],duration:n[6],easing:n[7],gravity:n[8],indent:n[9],index:n[0],loop:n[10],sensity:n[11],snap:n[12]})),P(e,"destroy",n[16]),P(e,"index",n[17]),P(e,"index",n[23]),P(e,"keys",n[18]),P(e,"mount",n[19]),P(e,"move",n[20]),P(e,"move",n[24]),P(e,"resize",n[21]),P(e,"update",n[22])],l=!0)},p(f,h){s&&s.p&&(!i||h&16384)&&ue(s,o,f,f[14],i?de(o,f[14],h,null):ce(f[14]),null),Oe(e,u=Ze(r,[(!i||h&32)&&{class:f[5]},{"aria-live":"polite"},{tabindex:"0"}])),t&&ct(t.update)&&h&8157&&t.update.call(null,{animation:f[2],axis:f[3],clamp:f[4],duration:f[6],easing:f[7],gravity:f[8],indent:f[9],index:f[0],loop:f[10],sensity:f[11],snap:f[12]})},i(f){i||(E(s,f),i=!0)},o(f){I(s,f),i=!1},d(f){f&&T(e),s&&s.d(f),l=!1,dt(a)}}}function pt(n){let e=n[13],t,i,l=n[13]&&Ue(n);return{c(){l&&l.c(),t=G()},l(a){l&&l.l(a),t=G()},m(a,o){l&&l.m(a,o),D(a,t,o),i=!0},p(a,[o]){a[13]?e?ee(e,a[13])?(l.d(1),l=Ue(a),l.c(),l.m(t.parentNode,t)):l.p(a,o):(l=Ue(a),l.c(),l.m(t.parentNode,t)):e&&(l.d(1),l=null),e=a[13]},i(a){i||(E(l),i=!0)},o(a){I(l),i=!1},d(a){a&&T(t),l&&l.d(a)}}}function xt(n,e,t){let{$$slots:i={},$$scope:l}=e,{animation:a=void 0}=e,{axis:o="x"}=e,{clamp:s=0}=e,{className:r=""}=e,{duration:u=450}=e,{easing:f=b=>b}=e,{gravity:h=1.2}=e,{indent:_=2}=e,{index:c=0}=e,{loop:m=!1}=e,{position:N=0}=e,{sensity:A=5}=e,{snap:k=void 0}=e,{tag:z="ol"}=e;function v(b){C.call(this,n,b)}function g(b){C.call(this,n,b)}function S(b){C.call(this,n,b)}function y(b){C.call(this,n,b)}function U(b){C.call(this,n,b)}function B(b){C.call(this,n,b)}function Y(b){C.call(this,n,b)}const X=b=>t(0,c=b.detail.index),q=b=>t(1,N=b.detail.position);return n.$$set=b=>{"animation"in b&&t(2,a=b.animation),"axis"in b&&t(3,o=b.axis),"clamp"in b&&t(4,s=b.clamp),"className"in b&&t(5,r=b.className),"duration"in b&&t(6,u=b.duration),"easing"in b&&t(7,f=b.easing),"gravity"in b&&t(8,h=b.gravity),"indent"in b&&t(9,_=b.indent),"index"in b&&t(0,c=b.index),"loop"in b&&t(10,m=b.loop),"position"in b&&t(1,N=b.position),"sensity"in b&&t(11,A=b.sensity),"snap"in b&&t(12,k=b.snap),"tag"in b&&t(13,z=b.tag),"$$scope"in b&&t(14,l=b.$$scope)},[c,N,a,o,s,r,u,f,h,_,m,A,k,z,l,i,v,g,S,y,U,B,Y,X,q]}class vt extends oe{constructor(e){super(),re(this,e,xt,pt,ee,{animation:2,axis:3,clamp:4,className:5,duration:6,easing:7,gravity:8,indent:9,index:0,loop:10,position:1,sensity:11,snap:12,tag:13})}}function $t(n){let e,t,i,l,a=[{alt:n[0]},{class:t=n[6].img},{decoding:n[1]},{loading:i=n[3]?"lazy":void 0},{src:l=n[4]},{width:n[5]},{height:n[2]},n[7]],o={};for(let s=0;s<a.length;s+=1)o=ke(o,a[s]);return{c(){e=j("img"),this.h()},l(s){e=H(s,"IMG",{alt:!0,class:!0,decoding:!0,loading:!0,src:!0,width:!0,height:!0}),this.h()},h(){Oe(e,o)},m(s,r){D(s,e,r)},p(s,[r]){Oe(e,o=Ze(a,[r&1&&{alt:s[0]},{class:t},r&2&&{decoding:s[1]},r&8&&i!==(i=s[3]?"lazy":void 0)&&{loading:i},r&16&&!Lt(e.src,l=s[4])&&{src:l},r&32&&{width:s[5]},r&4&&{height:s[2]},r&128&&s[7]]))},i:_e,o:_e,d(s){s&&T(e)}}}function en(n,e,t){const i=["alt","decoding","height","lazy","src","width"];let l=Ke(e,i),{alt:a=""}=e,{decoding:o="auto"}=e,{height:s=void 0}=e,{lazy:r=!1}=e,{src:u=""}=e,{width:f=void 0}=e;const h=Me("classNames");return n.$$set=_=>{e=ke(ke({},e),St(_)),t(7,l=Ke(e,i)),"alt"in _&&t(0,a=_.alt),"decoding"in _&&t(1,o=_.decoding),"height"in _&&t(2,s=_.height),"lazy"in _&&t(3,r=_.lazy),"src"in _&&t(4,u=_.src),"width"in _&&t(5,f=_.width)},[a,o,s,r,u,f,h,l]}class bt extends oe{constructor(e){super(),re(this,e,en,$t,ee,{alt:0,decoding:1,height:2,lazy:3,src:4,width:5})}}const Te=(n,e)=>{const t=e-n+1;return[...Array(t).keys()].map(i=>i+n)},tn=({current:n,start:e=0,end:t,limit:i,siblings:l})=>{if(Math.max(5+l*2,t-e+1)<=i)return Te(e,t);const o=Math.max(n-l,e),s=Math.min(n+l,t),r=o>2,u=s<t-1;if(!r&&u)return[...Te(e,3+2*l),-1,t];if(r&&!u){const f=3+2*l,h=Te(t-f+1,t);return[e,-1,...h]}if(r&&u){const f=Te(o,s);return[e,-1,...f,-1,t]}return[]};function Xe(n,e,t){const i=n.slice();i[11]=e[t];const l=i[1]===i[11];i[12]=l;const a=i[11]<0?"\u2026":i[11];i[13]=a;const o=i[11]<0;i[14]=o;const s=i[11]<0?void 0:`Show to item #${i[11]}`;return i[15]=s,i}const nn=n=>({index:n&8,active:n&10}),qe=n=>({index:n[11],active:n[11]===n[1]});function ln(n){let e,t=(n[0]?n[13]:"")+"",i,l,a,o,s,r,u;return{c(){e=j("button"),i=Le(t),u=Q(),this.h()},l(f){e=H(f,"BUTTON",{"aria-current":!0,"aria-label":!0,class:!0,"data-index":!0,title:!0});var h=K(e);i=Se(h,t),h.forEach(T),u=p(f),this.h()},h(){M(e,"aria-current",l=n[12]?"true":void 0),M(e,"aria-label",a=n[15]),M(e,"class",n[4]["nav-item"]),M(e,"data-index",o=n[14]?void 0:n[11]-1),e.disabled=s=n[14],M(e,"title",r=n[15]),O(e,"active",n[12]),O(e,"ellipsis",n[14]),O(e,"ordinal",n[0])},m(f,h){D(f,e,h),R(e,i),D(f,u,h)},p(f,h){h&9&&t!==(t=(f[0]?f[13]:"")+"")&&Fe(i,t),h&10&&l!==(l=f[12]?"true":void 0)&&M(e,"aria-current",l),h&8&&a!==(a=f[15])&&M(e,"aria-label",a),h&8&&o!==(o=f[14]?void 0:f[11]-1)&&M(e,"data-index",o),h&8&&s!==(s=f[14])&&(e.disabled=s),h&8&&r!==(r=f[15])&&M(e,"title",r),h&10&&O(e,"active",f[12]),h&8&&O(e,"ellipsis",f[14]),h&1&&O(e,"ordinal",f[0])},d(f){f&&T(e),f&&T(u)}}}function Ye(n){let e;const t=n[10]["nav-item"],i=fe(t,n,n[9],qe),l=i||ln(n);return{c(){l&&l.c()},l(a){l&&l.l(a)},m(a,o){l&&l.m(a,o),e=!0},p(a,o){i?i.p&&(!e||o&522)&&ue(i,t,a,a[9],e?de(t,a[9],o,nn):ce(a[9]),qe):l&&l.p&&(!e||o&11)&&l.p(a,e?o:-1)},i(a){e||(E(l,a),e=!0)},o(a){I(l,a),e=!1},d(a){l&&l.d(a)}}}function an(n){let e,t,i=n[3],l=[];for(let o=0;o<i.length;o+=1)l[o]=Ye(Xe(n,i,o));const a=o=>I(l[o],1,1,()=>{l[o]=null});return{c(){e=j("nav");for(let o=0;o<l.length;o+=1)l[o].c();this.h()},l(o){e=H(o,"NAV",{class:!0,"aria-label":!0});var s=K(e);for(let r=0;r<l.length;r+=1)l[r].l(s);s.forEach(T),this.h()},h(){var o;M(e,"class",(o=n[4])==null?void 0:o.nav),M(e,"aria-label","pagination"),O(e,"vertical",n[2])},m(o,s){D(o,e,s);for(let r=0;r<l.length;r+=1)l[r].m(e,null);t=!0},p(o,[s]){if(s&539){i=o[3];let r;for(r=0;r<i.length;r+=1){const u=Xe(o,i,r);l[r]?(l[r].p(u,s),E(l[r],1)):(l[r]=Ye(u),l[r].c(),E(l[r],1),l[r].m(e,null))}for(W(),r=i.length;r<l.length;r+=1)a(r);J()}s&4&&O(e,"vertical",o[2])},i(o){if(!t){for(let s=0;s<i.length;s+=1)E(l[s]);t=!0}},o(o){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)I(l[s]);t=!1},d(o){o&&T(e),mt(l,o)}}}function sn(n,e,t){let i,{$$slots:l={},$$scope:a}=e,{current:o}=e,{start:s}=e,{end:r}=e,{ordinal:u=!1}=e,{vertical:f=!1}=e,{limit:h=7}=e,{siblings:_=1}=e;const c=Me("classNames");return n.$$set=m=>{"current"in m&&t(1,o=m.current),"start"in m&&t(5,s=m.start),"end"in m&&t(6,r=m.end),"ordinal"in m&&t(0,u=m.ordinal),"vertical"in m&&t(2,f=m.vertical),"limit"in m&&t(7,h=m.limit),"siblings"in m&&t(8,_=m.siblings),"$$scope"in m&&t(9,a=m.$$scope)},n.$$.update=()=>{n.$$.dirty&224&&t(0,u=r-s+1>h&&!0),n.$$.dirty&482&&t(3,i=tn({current:o,start:s,end:r,limit:h,siblings:_}))},[u,o,f,i,c,s,r,h,_,a,l]}class on extends oe{constructor(e){super(),re(this,e,sn,an,ee,{current:1,start:5,end:6,ordinal:0,vertical:2,limit:7,siblings:8})}}function rn(n){let e,t,i=`${Math.ceil(n[0]*100/n[1])}%`;return{c(){e=j("div"),t=j("span"),this.h()},l(l){e=H(l,"DIV",{class:!0});var a=K(e);t=H(a,"SPAN",{}),K(t).forEach(T),a.forEach(T),this.h()},h(){se(t,"--_slidy-progress-size",`${Math.ceil(100/n[1])}%`,!1),se(t,"--_slidy-progress",i,!1),M(e,"class",n[3].progress),O(e,"vertical",n[2])},m(l,a){D(l,e,a),R(e,t)},p(l,[a]){a&2&&se(t,"--_slidy-progress-size",`${Math.ceil(100/l[1])}%`,!1),a&3&&i!==(i=`${Math.ceil(l[0]*100/l[1])}%`)&&se(t,"--_slidy-progress",i,!1),a&4&&O(e,"vertical",l[2])},i:_e,o:_e,d(l){l&&T(e)}}}function fn(n,e,t){let{value:i=0}=e,{max:l=1}=e,{vertical:a=!1}=e;const o=Me("classNames");return n.$$set=s=>{"value"in s&&t(0,i=s.value),"max"in s&&t(1,l=s.max),"vertical"in s&&t(2,a=s.vertical)},[i,l,a,o]}class un extends oe{constructor(e){super(),re(this,e,fn,rn,ee,{value:0,max:1,vertical:2})}}function je(n,e,t){const i=n.slice();return i[19]=e[t],i[21]=t,i}function He(n){let e,t;const i=[{src:n[7](n[19])},n[19]];let l={};for(let a=0;a<i.length;a+=1)l=ke(l,i[a]);return e=new bt({props:l}),{c(){te(e.$$.fragment)},l(a){ne(e.$$.fragment,a)},m(a,o){ie(e,a,o),t=!0},p(a,o){const s=o&8320?Ze(i,[{src:a[7](a[19])},o&8192&&gt(a[19])]):{};e.$set(s)},i(a){t||(E(e.$$.fragment,a),t=!0)},o(a){I(e.$$.fragment,a),t=!1},d(a){le(e,a)}}}function Ge(n,e){let t,i,l,a,o,s,r,u=!e[3]&&He(e);function f(){return e[17](e[21])}return{key:n,first:null,c(){t=j("button"),u&&u.c(),i=Q(),this.h()},l(h){t=H(h,"BUTTON",{"aria-current":!0,"aria-label":!0,"aria-roledescription":!0,class:!0,role:!0});var _=K(t);u&&u.l(_),i=p(_),_.forEach(T),this.h()},h(){M(t,"aria-current",l=e[21]===e[0]?"true":void 0),M(t,"aria-label",a=`${e[21]} of ${e[13].length}`),M(t,"aria-roledescription","slide"),M(t,"class",e[16].thumbnail),M(t,"role","group"),O(t,"active",e[21]===e[0]),O(t,"bg",e[3]),se(t,"--_slidy-slide-bg",e[3]?`url(${e[7](e[19])}`:"",!1),this.first=t},m(h,_){D(h,t,_),u&&u.m(t,null),R(t,i),o=!0,s||(r=P(t,"click",f),s=!0)},p(h,_){e=h,e[3]?u&&(W(),I(u,1,1,()=>{u=null}),J()):u?(u.p(e,_),_&8&&E(u,1)):(u=He(e),u.c(),E(u,1),u.m(t,i)),(!o||_&8193&&l!==(l=e[21]===e[0]?"true":void 0))&&M(t,"aria-current",l),(!o||_&8192&&a!==(a=`${e[21]} of ${e[13].length}`))&&M(t,"aria-label",a),_&8193&&O(t,"active",e[21]===e[0]),_&8&&O(t,"bg",e[3]),_&8328&&se(t,"--_slidy-slide-bg",e[3]?`url(${e[7](e[19])}`:"",!1)},i(h){o||(E(u),o=!0)},o(h){I(u),o=!1},d(h){h&&T(t),u&&u.d(),s=!1,r()}}}function cn(n){let e=[],t=new Map,i,l,a=n[13];const o=s=>{var r,u;return(u=(r=s[19].id)!=null?r:s[7](s[19]))!=null?u:s[21]};for(let s=0;s<a.length;s+=1){let r=je(n,a,s),u=o(r);t.set(u,e[s]=Ge(u,r))}return{c(){for(let s=0;s<e.length;s+=1)e[s].c();i=G()},l(s){for(let r=0;r<e.length;r+=1)e[r].l(s);i=G()},m(s,r){for(let u=0;u<e.length;u+=1)e[u].m(s,r);D(s,i,r),l=!0},p(s,r){r&106633&&(a=s[13],W(),e=ht(e,r,o,1,s,a,t,i.parentNode,_t,Ge,i,je),J())},i(s){if(!l){for(let r=0;r<a.length;r+=1)E(e[r]);l=!0}},o(s){for(let r=0;r<e.length;r+=1)I(e[r]);l=!1},d(s){for(let r=0;r<e.length;r+=1)e[r].d(s);s&&T(i)}}}function dn(n){var i;let e,t;return e=new vt({props:{animation:n[1],axis:n[2],clamp:n[4],className:(i=n[16])==null?void 0:i.thumbnails,duration:n[5],easing:n[6],gravity:n[8],indent:n[9],index:n[10],loop:n[11],sensity:n[12],snap:n[14],tag:"nav",$$slots:{default:[cn]},$$scope:{ctx:n}}}),e.$on("index",n[18]),e.$on("index",mn),{c(){te(e.$$.fragment)},l(l){ne(e.$$.fragment,l)},m(l,a){ie(e,l,a),t=!0},p(l,[a]){const o={};a&2&&(o.animation=l[1]),a&4&&(o.axis=l[2]),a&16&&(o.clamp=l[4]),a&32&&(o.duration=l[5]),a&64&&(o.easing=l[6]),a&256&&(o.gravity=l[8]),a&512&&(o.indent=l[9]),a&1024&&(o.index=l[10]),a&2048&&(o.loop=l[11]),a&4096&&(o.sensity=l[12]),a&16384&&(o.snap=l[14]),a&4202633&&(o.$$scope={dirty:a,ctx:l}),e.$set(o)},i(l){t||(E(e.$$.fragment,l),t=!0)},o(l){I(e.$$.fragment,l),t=!1},d(l){le(e,l)}}}const mn=n=>n.detail.index;function hn(n,e,t){let{active:i=0}=e,{animation:l=void 0}=e,{axis:a="x"}=e,{background:o=!1}=e,{clamp:s=0}=e,{duration:r=250}=e,{easing:u=y=>y}=e,{getImgSrc:f=y=>{var U;return(U=y.src)!=null?U:""}}=e,{gravity:h=.75}=e,{indent:_=0}=e,{index:c=0}=e,{loop:m=!1}=e,{sensity:N=5}=e,{slides:A=[]}=e,{snap:k=void 0}=e;const z=zt(),v=Me("classNames"),g=y=>z("select",{index:y});function S(y){C.call(this,n,y)}return n.$$set=y=>{"active"in y&&t(0,i=y.active),"animation"in y&&t(1,l=y.animation),"axis"in y&&t(2,a=y.axis),"background"in y&&t(3,o=y.background),"clamp"in y&&t(4,s=y.clamp),"duration"in y&&t(5,r=y.duration),"easing"in y&&t(6,u=y.easing),"getImgSrc"in y&&t(7,f=y.getImgSrc),"gravity"in y&&t(8,h=y.gravity),"indent"in y&&t(9,_=y.indent),"index"in y&&t(10,c=y.index),"loop"in y&&t(11,m=y.loop),"sensity"in y&&t(12,N=y.sensity),"slides"in y&&t(13,A=y.slides),"snap"in y&&t(14,k=y.snap)},[i,l,a,o,s,r,u,f,h,_,c,m,N,A,k,z,v,g,S]}class _n extends oe{constructor(e){super(),re(this,e,hn,dn,ee,{active:0,animation:1,axis:2,background:3,clamp:4,duration:5,easing:6,getImgSrc:7,gravity:8,indent:9,index:10,loop:11,sensity:12,slides:13,snap:14})}}const gn=n=>({item:n[0]&8388608}),We=n=>({item:n[54]});function Je(n,e,t){const i=n.slice();return i[51]=e[t],i}const vn=n=>({item:n[0]&8388608}),Qe=n=>({item:n[54]}),bn=n=>({item:n[0]&8388608}),pe=n=>({item:n[54]});function xe(n,e,t){const i=n.slice();i[54]=e[t],i[57]=t;const l=i[57]===i[1];return i[55]=l,i}const kn=n=>({item:n[0]&8388608}),$e=n=>({item:n[54]}),wn=n=>({item:n[0]&8388608}),et=n=>({item:n[54]});function tt(n){let e,t,i,l,a,o,s,r=n[8]&&nt(n);function u(c){n[37](c)}let f={disabled:n[1]+1>=n[26]&&!n[20]};n[0]!==void 0&&(f.status=n[0]),i=new Ht({props:f}),Zt.push(()=>Bt(i,"status",u));const h=n[32].overlay,_=fe(h,n,n[50],et);return{c(){e=j("div"),r&&r.c(),t=Q(),te(i.$$.fragment),a=Q(),_&&_.c(),this.h()},l(c){e=H(c,"DIV",{class:!0});var m=K(e);r&&r.l(m),t=p(m),ne(i.$$.fragment,m),a=p(m),_&&_.l(m),m.forEach(T),this.h()},h(){var c;M(e,"class",o=(c=n[10])==null?void 0:c.overlay)},m(c,m){D(c,e,m),r&&r.m(e,null),R(e,t),ie(i,e,null),R(e,a),_&&_.m(e,null),s=!0},p(c,m){var A;c[8]?r?r.p(c,m):(r=nt(c),r.c(),r.m(e,t)):r&&(r.d(1),r=null);const N={};m[0]&68157442&&(N.disabled=c[1]+1>=c[26]&&!c[20]),!l&&m[0]&1&&(l=!0,N.status=c[0],Dt(()=>l=!1)),i.$set(N),_&&_.p&&(!s||m[0]&8388608|m[1]&524288)&&ue(_,h,c,c[50],s?de(h,c[50],m,wn):ce(c[50]),et),(!s||m[0]&1024&&o!==(o=(A=c[10])==null?void 0:A.overlay))&&M(e,"class",o)},i(c){s||(E(i.$$.fragment,c),E(_,c),s=!0)},o(c){I(i.$$.fragment,c),I(_,c),s=!1},d(c){c&&T(e),r&&r.d(),le(i),_&&_.d(c)}}}function nt(n){let e,t=n[1]+1+"",i,l,a,o;return{c(){e=j("output"),i=Le(t),l=Le(" / "),a=Le(n[26]),this.h()},l(s){e=H(s,"OUTPUT",{class:!0});var r=K(e);i=Se(r,t),l=Se(r," / "),a=Se(r,n[26]),r.forEach(T),this.h()},h(){var s;M(e,"class",o=(s=n[10])==null?void 0:s.counter)},m(s,r){D(s,e,r),R(e,i),R(e,l),R(e,a)},p(s,r){var u;r[0]&2&&t!==(t=s[1]+1+"")&&Fe(i,t),r[0]&67108864&&Fe(a,s[26]),r[0]&1024&&o!==(o=(u=s[10])==null?void 0:u.counter)&&M(e,"class",o)},d(s){s&&T(e)}}}function it(n){let e,t;const i=[{src:n[13](n[54])},n[54]];let l={};for(let a=0;a<i.length;a+=1)l=ke(l,i[a]);return e=new bt({props:l}),{c(){te(e.$$.fragment)},l(a){ne(e.$$.fragment,a)},m(a,o){ie(e,a,o),t=!0},p(a,o){const s=o[0]&8396800?Ze(i,[{src:a[13](a[54])},o[0]&8388608&&gt(a[54])]):{};e.$set(s)},i(a){t||(E(e.$$.fragment,a),t=!0)},o(a){I(e.$$.fragment,a),t=!1},d(a){le(e,a)}}}function yn(n){let e,t,i=!n[7]&&it(n);return{c(){i&&i.c(),e=G()},l(l){i&&i.l(l),e=G()},m(l,a){i&&i.m(l,a),D(l,e,a),t=!0},p(l,a){l[7]?i&&(W(),I(i,1,1,()=>{i=null}),J()):i?(i.p(l,a),a[0]&128&&E(i,1)):(i=it(l),i.c(),E(i,1),i.m(e.parentNode,e))},i(l){t||(E(i),t=!0)},o(l){I(i),t=!1},d(l){i&&i.d(l),l&&T(e)}}}function lt(n,e){let t,i,l,a,o,s,r,u;const f=e[32].default,h=fe(f,e,e[50],$e),_=h||yn(e);return{key:n,first:null,c(){t=j("li"),_&&_.c(),i=Q(),this.h()},l(c){t=H(c,"LI",{"aria-current":!0,"aria-label":!0,"aria-roledescription":!0,class:!0,role:!0});var m=K(t);_&&_.l(m),i=p(m),m.forEach(T),this.h()},h(){var c;M(t,"aria-current",l=e[55]?"true":void 0),M(t,"aria-label",a=`${e[1]} of ${e[23].length}`),M(t,"aria-roledescription","slide"),M(t,"class",o=(c=e[10])==null?void 0:c.slide),M(t,"role","group"),O(t,"active",e[55]),O(t,"bg",e[7]),se(t,"--_slidy-slide-bg",e[7]?`url(${e[13](e[54])}`:void 0,!1),this.first=t},m(c,m){D(c,t,m),_&&_.m(t,null),R(t,i),s=!0,r||(u=P(t,"click",e[36]),r=!0)},p(c,m){var N;e=c,h?h.p&&(!s||m[0]&8388608|m[1]&524288)&&ue(h,f,e,e[50],s?de(f,e[50],m,kn):ce(e[50]),$e):_&&_.p&&(!s||m[0]&8396928)&&_.p(e,s?m:[-1,-1]),(!s||m[0]&8388610&&l!==(l=e[55]?"true":void 0))&&M(t,"aria-current",l),(!s||m[0]&8388610&&a!==(a=`${e[1]} of ${e[23].length}`))&&M(t,"aria-label",a),(!s||m[0]&1024&&o!==(o=(N=e[10])==null?void 0:N.slide))&&M(t,"class",o),m[0]&8389634&&O(t,"active",e[55]),m[0]&1152&&O(t,"bg",e[7]),m[0]&8396928&&se(t,"--_slidy-slide-bg",e[7]?`url(${e[13](e[54])}`:void 0,!1)},i(c){s||(E(_,c),s=!0)},o(c){I(_,c),s=!1},d(c){c&&T(t),_&&_.d(c),r=!1,u()}}}function Mn(n){let e=[],t=new Map,i,l,a=n[23];const o=s=>{var r,u;return(u=(r=s[54].id)!=null?r:s[13](s[54]))!=null?u:s[57]};for(let s=0;s<a.length;s+=1){let r=xe(n,a,s),u=o(r);t.set(u,e[s]=lt(u,r))}return{c(){for(let s=0;s<e.length;s+=1)e[s].c();i=G()},l(s){for(let r=0;r<e.length;r+=1)e[r].l(s);i=G()},m(s,r){for(let u=0;u<e.length;u+=1)e[u].m(s,r);D(s,i,r),l=!0},p(s,r){r[0]&8397954|r[1]&524288&&(a=s[23],W(),e=ht(e,r,o,1,s,a,t,i.parentNode,_t,lt,i,xe),J())},i(s){if(!l){for(let r=0;r<a.length;r+=1)E(e[r]);l=!0}},o(s){for(let r=0;r<e.length;r+=1)I(e[r]);l=!1},d(s){for(let r=0;r<e.length;r+=1)e[r].d(s);s&&T(i)}}}function at(n){let e;const t=n[32].arrows,i=fe(t,n,n[50],pe),l=i||An(n);return{c(){l&&l.c()},l(a){l&&l.l(a)},m(a,o){l&&l.m(a,o),e=!0},p(a,o){i?i.p&&(!e||o[0]&8388608|o[1]&524288)&&ue(i,t,a,a[50],e?de(t,a[50],o,bn):ce(a[50]),pe):l&&l.p&&(!e||o[0]&210763778|o[1]&524288)&&l.p(a,e?o:[-1,-1])},i(a){e||(E(l,a),e=!0)},o(a){I(l,a),e=!1},d(a){l&&l.d(a)}}}function Nn(n){let e,t;return{c(){e=ze("svg"),t=ze("path"),this.h()},l(i){e=Ce(i,"svg",{class:!0,viewBox:!0,xmlns:!0});var l=K(e);t=Ce(l,"path",{d:!0}),K(t).forEach(T),l.forEach(T),this.h()},h(){M(t,"d","M19.56,24a.89.89,0,0,1-.63-.26L11.8,16.65a.92.92,0,0,1,0-1.27h0l7.13-7.16A.9.9,0,0,1,20.2,9.48L13.69,16l6.51,6.5a.91.91,0,0,1,0,1.26h0A.9.9,0,0,1,19.56,24Z"),M(e,"class","slidy-arrow-icon"),M(e,"viewBox","0 0 32 32"),M(e,"xmlns","http://www.w3.org/2000/svg")},m(i,l){D(i,e,l),R(e,t)},p:_e,d(i){i&&T(e)}}}function En(n){let e,t;const i=n[32].arrow,l=fe(i,n,n[50],Qe),a=l||Nn();return{c(){a&&a.c(),e=Q()},l(o){a&&a.l(o),e=p(o)},m(o,s){a&&a.m(o,s),D(o,e,s),t=!0},p(o,s){l&&l.p&&(!t||s[0]&8388608|s[1]&524288)&&ue(l,i,o,o[50],t?de(i,o[50],s,vn):ce(o[50]),Qe)},i(o){t||(E(a,o),t=!0)},o(o){I(a,o),t=!1},d(o){a&&a.d(o),o&&T(e)}}}function st(n){let e,t;return e=new Xt({props:{type:n[51],index:n[1],items:n[26],loop:n[20],vertical:n[27],$$slots:{default:[En]},$$scope:{ctx:n}}}),{c(){te(e.$$.fragment)},l(i){ne(e.$$.fragment,i)},m(i,l){ie(e,i,l),t=!0},p(i,l){const a={};l[0]&2&&(a.index=i[1]),l[0]&67108864&&(a.items=i[26]),l[0]&1048576&&(a.loop=i[20]),l[0]&134217728&&(a.vertical=i[27]),l[0]&8388608|l[1]&524288&&(a.$$scope={dirty:l,ctx:i}),e.$set(a)},i(i){t||(E(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){le(e,i)}}}function An(n){let e,t,i=[-1,1],l=[];for(let o=0;o<2;o+=1)l[o]=st(Je(n,i,o));const a=o=>I(l[o],1,1,()=>{l[o]=null});return{c(){for(let o=0;o<2;o+=1)l[o].c();e=G()},l(o){for(let s=0;s<2;s+=1)l[s].l(o);e=G()},m(o,s){for(let r=0;r<2;r+=1)l[r].m(o,s);D(o,e,s),t=!0},p(o,s){if(s[0]&210763778|s[1]&524288){i=[-1,1];let r;for(r=0;r<2;r+=1){const u=Je(o,i,r);l[r]?(l[r].p(u,s),E(l[r],1)):(l[r]=st(u),l[r].c(),E(l[r],1),l[r].m(e.parentNode,e))}for(W(),r=2;r<2;r+=1)a(r);J()}},i(o){if(!t){for(let s=0;s<2;s+=1)E(l[s]);t=!0}},o(o){l=l.filter(Boolean);for(let s=0;s<2;s+=1)I(l[s]);t=!1},d(o){mt(l,o),o&&T(e)}}}function ot(n){let e,t;return e=new un({props:{value:n[1]+1,max:n[26],vertical:n[27]}}),{c(){te(e.$$.fragment)},l(i){ne(e.$$.fragment,i)},m(i,l){ie(e,i,l),t=!0},p(i,l){const a={};l[0]&2&&(a.value=i[1]+1),l[0]&67108864&&(a.max=i[26]),l[0]&134217728&&(a.vertical=i[27]),e.$set(a)},i(i){t||(E(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){le(e,i)}}}function rt(n){let e;const t=n[32].thumbnail,i=fe(t,n,n[50],We),l=i||In(n);return{c(){l&&l.c()},l(a){l&&l.l(a)},m(a,o){l&&l.m(a,o),e=!0},p(a,o){i?i.p&&(!e||o[0]&8388608|o[1]&524288)&&ue(i,t,a,a[50],e?de(t,a[50],o,gn):ce(a[50]),We):l&&l.p&&(!e||o[0]&13916296)&&l.p(a,e?o:[-1,-1])},i(a){e||(E(l,a),e=!0)},o(a){I(l,a),e=!1},d(a){l&&l.d(a)}}}function In(n){let e,t;return e=new _n({props:{active:n[3],background:n[7],duration:n[11],easing:n[12],getImgSrc:n[14],indent:n[18],index:n[3],loop:n[20],sensity:n[22],slides:n[23]}}),e.$on("index",n[47]),e.$on("select",n[48]),{c(){te(e.$$.fragment)},l(i){ne(e.$$.fragment,i)},m(i,l){ie(e,i,l),t=!0},p(i,l){const a={};l[0]&8&&(a.active=i[3]),l[0]&128&&(a.background=i[7]),l[0]&2048&&(a.duration=i[11]),l[0]&4096&&(a.easing=i[12]),l[0]&16384&&(a.getImgSrc=i[14]),l[0]&262144&&(a.indent=i[18]),l[0]&8&&(a.index=i[3]),l[0]&1048576&&(a.loop=i[20]),l[0]&4194304&&(a.sensity=i[22]),l[0]&8388608&&(a.slides=i[23]),e.$set(a)},i(i){t||(E(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){le(e,i)}}}function ft(n){let e,t;return e=new on({props:{current:n[1]+1,start:1,end:n[26],vertical:n[27]}}),{c(){te(e.$$.fragment)},l(i){ne(e.$$.fragment,i)},m(i,l){ie(e,i,l),t=!0},p(i,l){const a={};l[0]&2&&(a.current=i[1]+1),l[0]&67108864&&(a.end=i[26]),l[0]&134217728&&(a.vertical=i[27]),e.$set(a)},i(i){t||(E(e.$$.fragment,i),t=!0)},o(i){I(e.$$.fragment,i),t=!1},d(i){le(e,i)}}}function Tn(n){var z;let e,t,i,l,a,o,s,r,u,f,h,_,c=(n[8]||n[31].overlay)&&tt(n);i=new vt({props:{animation:n[4],axis:n[6],clamp:n[9],className:(z=n[10])==null?void 0:z.slides,duration:n[11],easing:n[12],gravity:n[16],indent:n[18],index:n[1],loop:n[20],sensity:n[22],snap:n[24],$$slots:{default:[Mn]},$$scope:{ctx:n}}}),i.$on("destroy",n[38]),i.$on("index",n[39]),i.$on("index",n[40]),i.$on("keys",n[41]),i.$on("mount",n[42]),i.$on("move",n[43]),i.$on("move",n[44]),i.$on("resize",n[45]),i.$on("update",n[46]);let m=n[5]&&at(n),N=n[21]&&ot(n),A=n[25]&&rt(n),k=n[15]&&ft(n);return{c(){e=j("section"),c&&c.c(),t=Q(),te(i.$$.fragment),l=Q(),m&&m.c(),a=Q(),N&&N.c(),o=Q(),A&&A.c(),s=Q(),k&&k.c(),this.h()},l(v){e=H(v,"SECTION",{"aria-roledescription":!0,class:!0,id:!0});var g=K(e);c&&c.l(g),t=p(g),ne(i.$$.fragment,g),l=p(g),m&&m.l(g),a=p(g),N&&N.l(g),o=p(g),A&&A.l(g),s=p(g),k&&k.l(g),g.forEach(T),this.h()},h(){var v;M(e,"aria-roledescription","carousel"),M(e,"class",r=(v=n[10])==null?void 0:v.root),M(e,"id",n[17]),O(e,"vertical",n[27])},m(v,g){D(v,e,g),c&&c.m(e,null),R(e,t),ie(i,e,null),R(e,l),m&&m.m(e,null),R(e,a),N&&N.m(e,null),R(e,o),A&&A.m(e,null),R(e,s),k&&k.m(e,null),f=!0,h||(_=[P(e,"click",n[29]),P(e,"play",n[30]),P(e,"stop",n[49]),ut(u=Ut.call(null,e,{status:n[0],interval:n[19]})),P(e,"play",n[33]),P(e,"pause",n[34]),P(e,"stop",n[35])],h=!0)},p(v,g){var y,U;v[8]||v[31].overlay?c?(c.p(v,g),g[0]&256|g[1]&1&&E(c,1)):(c=tt(v),c.c(),E(c,1),c.m(e,t)):c&&(W(),I(c,1,1,()=>{c=null}),J());const S={};g[0]&16&&(S.animation=v[4]),g[0]&64&&(S.axis=v[6]),g[0]&512&&(S.clamp=v[9]),g[0]&1024&&(S.className=(y=v[10])==null?void 0:y.slides),g[0]&2048&&(S.duration=v[11]),g[0]&4096&&(S.easing=v[12]),g[0]&65536&&(S.gravity=v[16]),g[0]&262144&&(S.indent=v[18]),g[0]&2&&(S.index=v[1]),g[0]&1048576&&(S.loop=v[20]),g[0]&4194304&&(S.sensity=v[22]),g[0]&16777216&&(S.snap=v[24]),g[0]&8397954|g[1]&524288&&(S.$$scope={dirty:g,ctx:v}),i.$set(S),v[5]?m?(m.p(v,g),g[0]&32&&E(m,1)):(m=at(v),m.c(),E(m,1),m.m(e,a)):m&&(W(),I(m,1,1,()=>{m=null}),J()),v[21]?N?(N.p(v,g),g[0]&2097152&&E(N,1)):(N=ot(v),N.c(),E(N,1),N.m(e,o)):N&&(W(),I(N,1,1,()=>{N=null}),J()),v[25]?A?(A.p(v,g),g[0]&33554432&&E(A,1)):(A=rt(v),A.c(),E(A,1),A.m(e,s)):A&&(W(),I(A,1,1,()=>{A=null}),J()),v[15]?k?(k.p(v,g),g[0]&32768&&E(k,1)):(k=ft(v),k.c(),E(k,1),k.m(e,null)):k&&(W(),I(k,1,1,()=>{k=null}),J()),(!f||g[0]&1024&&r!==(r=(U=v[10])==null?void 0:U.root))&&M(e,"class",r),(!f||g[0]&131072)&&M(e,"id",v[17]),u&&ct(u.update)&&g[0]&524289&&u.update.call(null,{status:v[0],interval:v[19]}),g[0]&134218752&&O(e,"vertical",v[27])},i(v){f||(E(c),E(i.$$.fragment,v),E(m),E(N),E(A),E(k),f=!0)},o(v){I(c),I(i.$$.fragment,v),I(m),I(N),I(A),I(k),f=!1},d(v){v&&T(e),c&&c.d(),le(i),m&&m.d(),N&&N.d(),A&&A.d(),k&&k.d(),h=!1,dt(_)}}}function Ln(n,e,t){let i,l,{$$slots:a={},$$scope:o}=e;const s=Ct(a);let{animation:r=void 0}=e,{arrows:u=!0}=e,{autoplay:f=!1}=e,{axis:h="x"}=e,{background:_=!1}=e,{counter:c=!0}=e,{clamp:m=0}=e,{classNames:N=Vt}=e,{duration:A=450}=e,{easing:k=d=>d}=e,{getImgSrc:z=d=>{var ae;return(ae=d.src)!=null?ae:""}}=e,{getThumbSrc:v=d=>z(d)}=e,{navigation:g=!1}=e,{gravity:S=1.2}=e,{id:y=void 0}=e,{indent:U=2}=e,{index:B=0}=e,{interval:Y=1500}=e,{loop:X=!1}=e,{position:q=0}=e,{progress:b=!1}=e,{sensity:ge=5}=e,{slides:ve=[]}=e,{snap:x=void 0}=e,{thumbnail:Ne=!1}=e,{indexThumb:we=B}=e;Ot("classNames",N);const w=d=>{typeof d=="number"&&!Number.isNaN(d)&&t(1,B=Pt(d,0,i-1))},L=d=>{const ae=d.target;if(ae.nodeName==="BUTTON"){if(ae.dataset.index){w(parseInt(ae.dataset.index));return}if(ae.dataset.step){w(parseInt(ae.dataset.step)+B);return}}},Z=()=>{X||B+1<ve.length?t(1,B+=1):t(0,f=!1)};function V(d){C.call(this,n,d)}function F(d){C.call(this,n,d)}function $(d){C.call(this,n,d)}function ye(d){C.call(this,n,d)}function Ee(d){f=d,t(0,f)}function De(d){C.call(this,n,d)}function Ae(d){C.call(this,n,d)}const Ve=d=>{w(d.detail.index),t(3,we=d.detail.index)};function kt(d){C.call(this,n,d)}function wt(d){C.call(this,n,d)}function yt(d){C.call(this,n,d)}const Mt=d=>{t(2,q=d.detail.position)};function Nt(d){C.call(this,n,d)}function Et(d){C.call(this,n,d)}function At(d){C.call(this,n,d)}const It=d=>w(d.detail.index),Tt=()=>t(0,f=!1);return n.$$set=d=>{"animation"in d&&t(4,r=d.animation),"arrows"in d&&t(5,u=d.arrows),"autoplay"in d&&t(0,f=d.autoplay),"axis"in d&&t(6,h=d.axis),"background"in d&&t(7,_=d.background),"counter"in d&&t(8,c=d.counter),"clamp"in d&&t(9,m=d.clamp),"classNames"in d&&t(10,N=d.classNames),"duration"in d&&t(11,A=d.duration),"easing"in d&&t(12,k=d.easing),"getImgSrc"in d&&t(13,z=d.getImgSrc),"getThumbSrc"in d&&t(14,v=d.getThumbSrc),"navigation"in d&&t(15,g=d.navigation),"gravity"in d&&t(16,S=d.gravity),"id"in d&&t(17,y=d.id),"indent"in d&&t(18,U=d.indent),"index"in d&&t(1,B=d.index),"interval"in d&&t(19,Y=d.interval),"loop"in d&&t(20,X=d.loop),"position"in d&&t(2,q=d.position),"progress"in d&&t(21,b=d.progress),"sensity"in d&&t(22,ge=d.sensity),"slides"in d&&t(23,ve=d.slides),"snap"in d&&t(24,x=d.snap),"thumbnail"in d&&t(25,Ne=d.thumbnail),"indexThumb"in d&&t(3,we=d.indexThumb),"$$scope"in d&&t(50,o=d.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&8388608&&t(26,i=ve.length),n.$$.dirty[0]&64&&t(27,l=h==="y")},[f,B,q,we,r,u,h,_,c,m,N,A,k,z,v,g,S,y,U,Y,X,b,ge,ve,x,Ne,i,l,w,L,Z,s,a,V,F,$,ye,Ee,De,Ae,Ve,kt,wt,yt,Mt,Nt,Et,At,It,Tt,o]}class zn extends oe{constructor(e){super(),re(this,e,Ln,Tn,ee,{animation:4,arrows:5,autoplay:0,axis:6,background:7,counter:8,clamp:9,classNames:10,duration:11,easing:12,getImgSrc:13,getThumbSrc:14,navigation:15,gravity:16,id:17,indent:18,index:1,interval:19,loop:20,position:2,progress:21,sensity:22,slides:23,snap:24,thumbnail:25,indexThumb:3},null,[-1,-1])}}function Cn({node:n,child:e,options:t,translate:i}){n.style.perspective=`${n.offsetWidth}px`;let l=t.snap==="deck",a=e.i===e.active?e.active:e.i>e.active?e.active-e.i:e.i-n.children.length+1,o=l?`scale(${e.exp})`:`translateZ(${-Math.abs(e.track)}px)`;return{transform:i+o,zIndex:a}}export{Cn as I,zn as S};