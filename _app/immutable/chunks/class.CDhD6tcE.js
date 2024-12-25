import{B as P,m as R,V as w,z as S,a4 as V,M as j,n as v,x as q,ag as B,aC as F,aD as g,aE as I}from"./runtime.D3Yf1DbQ.js";import{i as M,g as D,j as G,n as K,k as Y}from"./disclose-version.CFA5S5ly.js";function H(s,r){if(r){const t=document.body;s.autofocus=!0,P(()=>{document.activeElement===t&&s.focus()})}}let k=!1;function J(){k||(k=!0,document.addEventListener("reset",s=>{Promise.resolve().then(()=>{var r;if(!s.defaultPrevented)for(const t of s.target.elements)(r=t.__on_r)==null||r.call(t)})},{capture:!0}))}function ss(s,r,...t){var a=s,i=V,u;R(()=>{i!==(i=r())&&(u&&(j(u),u=null),u=S(()=>i(a,...t)))},w),v&&(a=q)}function L(s){var r,t,a="";if(typeof s=="string"||typeof s=="number")a+=s;else if(typeof s=="object")if(Array.isArray(s)){var i=s.length;for(r=0;r<i;r++)s[r]&&(t=L(s[r]))&&(a&&(a+=" "),a+=t)}else for(t in s)s[t]&&(a&&(a+=" "),a+=t);return a}function Q(){for(var s,r,t=0,a="",i=arguments.length;t<i;t++)(s=arguments[t])&&(r=L(s))&&(a&&(a+=" "),a+=r);return a}function U(s){return typeof s=="object"?Q(s):s??""}function rs(s){if(v){var r=!1,t=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var a=s.value;p(s,"value",null),s.value=a}if(s.hasAttribute("checked")){var i=s.checked;p(s,"checked",null),s.checked=i}}};s.__on_r=t,F(t),J()}}function ts(s,r){var t=s.__attributes??(s.__attributes={});t.value===(t.value=r??void 0)||s.value===r&&(r!==0||s.nodeName!=="PROGRESS")||(s.value=r)}function W(s,r){r?s.hasAttribute("selected")||s.setAttribute("selected",""):s.removeAttribute("selected")}function p(s,r,t,a){var i=s.__attributes??(s.__attributes={});v&&(i[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||i[r]!==(i[r]=t)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[g]=t),t==null?s.removeAttribute(r):typeof t!="string"&&T(s).includes(r)?s[r]=t:s.setAttribute(r,t))}function as(s,r,t,a,i=!1,u=!1,Z=!1){var _=r||{},y=s.tagName==="OPTION";for(var h in r)h in t||(t[h]=null);t.class&&(t.class=U(t.class));var $=T(s),z=s.__attributes??(s.__attributes={});for(const e in t){let f=t[e];if(y&&e==="value"&&f==null){s.value=s.__value="",_[e]=f;continue}var A=_[e];if(f!==A){_[e]=f;var b=e[0]+e[1];if(b!=="$$"){if(b==="on"){const c={},n="$$"+e;let l=e.slice(2);var d=Y(l);if(M(l)&&(l=l.slice(0,-7),c.capture=!0),!d&&A){if(f!=null)continue;s.removeEventListener(l,_[n],c),_[n]=null}if(f!=null)if(d)s[`__${l}`]=f,G([l]);else{let C=function(O){_[e].call(this,O)};_[n]=D(l,s,C,c)}else d&&(s[`__${l}`]=void 0)}else if(e==="style"&&f!=null)s.style.cssText=f+"";else if(e==="autofocus")H(s,!!f);else if(e==="__value"||e==="value"&&f!=null)s.value=s[e]=s.__value=f;else if(e==="selected"&&y)W(s,f);else{var o=e;i||(o=K(o));var N=o==="defaultValue"||o==="defaultChecked";if(f==null&&!u&&!N)if(z[e]=null,o==="value"||o==="checked"){let c=s;if(o==="value"){let n=c.defaultValue;c.removeAttribute(o),c.defaultValue=n}else{let n=c.defaultChecked;c.removeAttribute(o),c.defaultChecked=n}}else s.removeAttribute(e);else N||$.includes(o)&&(u||typeof f!="string")?s[o]=f:typeof f!="function"&&(v&&(o==="src"||o==="href"||o==="srcset")||p(s,o,f))}e==="style"&&"__styles"in s&&(s.__styles={})}}}return _}var E=new Map;function T(s){var r=E.get(s.nodeName);if(r)return r;E.set(s.nodeName,r=[]);for(var t,a=s,i=Element.prototype;i!==a;){t=I(a);for(var u in t)t[u].set&&r.push(u);a=B(a)}return r}function is(s){if(!v&&s.loading==="lazy"){var r=s.src;s[g]=null,s.loading="eager",s.removeAttribute("src"),requestAnimationFrame(()=>{s[g]!=="eager"&&(s.loading="lazy"),s.src=r})}}function es(s,r,t){var a=s.__className,i=X(r,t);v&&s.className===i?s.__className=i:(a!==i||v&&s.className!==i)&&(r==null&&!t?s.removeAttribute("class"):s.className=i,s.__className=i)}function X(s,r){return(s??"")+(r?" "+r:"")}function fs(s,r,t){if(t){if(s.classList.contains(r))return;s.classList.add(r)}else{if(!s.classList.contains(r))return;s.classList.remove(r)}}export{p as a,es as b,U as c,as as d,ts as e,is as h,rs as r,ss as s,fs as t};
