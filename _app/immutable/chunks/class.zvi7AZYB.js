import{J as C,q as O,_ as P,F as q,a4 as z,R as F,v,C as S,ae as I,au as V,av as h,aw as B}from"./runtime.CFaAdZvy.js";import{j as G,k as M,l as j,n as D,m as J}from"./disclose-version.R3BlMozp.js";function K(s,r){if(r){const a=document.body;s.autofocus=!0,C(()=>{document.activeElement===a&&s.focus()})}}let k=!1;function Y(){k||(k=!0,document.addEventListener("reset",s=>{Promise.resolve().then(()=>{var r;if(!s.defaultPrevented)for(const a of s.target.elements)(r=a.__on_r)==null||r.call(a)})},{capture:!0}))}function Z(s,r,...a){var i=s,u=z,o;O(()=>{u!==(u=r())&&(o&&(F(o),o=null),o=q(()=>u(i,...a)))},P),v&&(i=S)}function x(s){if(v){var r=!1,a=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var i=s.value;p(s,"value",null),s.value=i}if(s.hasAttribute("checked")){var u=s.checked;p(s,"checked",null),s.checked=u}}};s.__on_r=a,V(a),Y()}}function m(s,r){var a=s.__attributes??(s.__attributes={});a.value===(a.value=r??void 0)||s.value===r&&(r!==0||s.nodeName!=="PROGRESS")||(s.value=r)}function H(s,r){r?s.hasAttribute("selected")||s.setAttribute("selected",""):s.removeAttribute("selected")}function p(s,r,a,i){var u=s.__attributes??(s.__attributes={});v&&(u[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||u[r]!==(u[r]=a)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[h]=a),a==null?s.removeAttribute(r):typeof a!="string"&&E(s).includes(r)?s[r]=a:s.setAttribute(r,a))}function ss(s,r,a,i,u=!1,o=!1,U=!1){var _=r||{},g=s.tagName==="OPTION";for(var y in r)y in a||(a[y]=null);var T=E(s),R=s.__attributes??(s.__attributes={});for(const t in a){let e=a[t];if(g&&t==="value"&&e==null){s.value=s.__value="",_[t]=e;continue}var A=_[t];if(e!==A){_[t]=e;var N=t[0]+t[1];if(N!=="$$"){if(N==="on"){const c={},n="$$"+t;let l=t.slice(2);var d=J(l);if(G(l)&&(l=l.slice(0,-7),c.capture=!0),!d&&A){if(e!=null)continue;s.removeEventListener(l,_[n],c),_[n]=null}if(e!=null)if(d)s[`__${l}`]=e,j([l]);else{let $=function(w){_[t].call(this,w)};_[n]=M(l,s,$,c)}else d&&(s[`__${l}`]=void 0)}else if(t==="style"&&e!=null)s.style.cssText=e+"";else if(t==="autofocus")K(s,!!e);else if(t==="__value"||t==="value"&&e!=null)s.value=s[t]=s.__value=e;else if(t==="selected"&&g)H(s,e);else{var f=t;u||(f=D(f));var b=f==="defaultValue"||f==="defaultChecked";if(e==null&&!o&&!b)if(R[t]=null,f==="value"||f==="checked"){let c=s;if(f==="value"){let n=c.defaultValue;c.removeAttribute(f),c.defaultValue=n}else{let n=c.defaultChecked;c.removeAttribute(f),c.defaultChecked=n}}else s.removeAttribute(t);else b||T.includes(f)&&(o||typeof e!="string")?s[f]=e:typeof e!="function"&&(v&&(f==="src"||f==="href"||f==="srcset")||p(s,f,e))}t==="style"&&"__styles"in s&&(s.__styles={})}}}return _}var L=new Map;function E(s){var r=L.get(s.nodeName);if(r)return r;L.set(s.nodeName,r=[]);for(var a,i=s,u=Element.prototype;u!==i;){a=B(i);for(var o in a)a[o].set&&r.push(o);i=I(i)}return r}function rs(s){if(!v&&s.loading==="lazy"){var r=s.src;s[h]=null,s.loading="eager",s.removeAttribute("src"),requestAnimationFrame(()=>{s[h]!=="eager"&&(s.loading="lazy"),s.src=r})}}function as(s,r){var a=s.__className,i=Q(r);v&&s.className===i?s.__className=i:(a!==i||v&&s.className!==i)&&(r==null?s.removeAttribute("class"):s.className=i,s.__className=i)}function Q(s){return s??""}function ts(s,r,a){if(a){if(s.classList.contains(r))return;s.classList.add(r)}else{if(!s.classList.contains(r))return;s.classList.remove(r)}}export{p as a,as as b,ss as c,m as d,rs as h,x as r,Z as s,ts as t};
