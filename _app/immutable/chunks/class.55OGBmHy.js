import{B as P,m as R,V as w,z as S,a4 as V,M as j,n as v,x as q,ag as B,aC as F,aD as h,aE as I}from"./runtime.DLrQRntj.js";import{i as M,g as D,j as G,n as K,k as Y}from"./disclose-version.CgjhbSZe.js";function H(s,r){if(r){const a=document.body;s.autofocus=!0,P(()=>{document.activeElement===a&&s.focus()})}}let k=!1;function J(){k||(k=!0,document.addEventListener("reset",s=>{Promise.resolve().then(()=>{var r;if(!s.defaultPrevented)for(const a of s.target.elements)(r=a.__on_r)==null||r.call(a)})},{capture:!0}))}function ss(s,r,...a){var t=s,i=V,u;R(()=>{i!==(i=r())&&(u&&(j(u),u=null),u=S(()=>i(t,...a)))},w),v&&(t=q)}function L(s){var r,a,t="";if(typeof s=="string"||typeof s=="number")t+=s;else if(typeof s=="object")if(Array.isArray(s)){var i=s.length;for(r=0;r<i;r++)s[r]&&(a=L(s[r]))&&(t&&(t+=" "),t+=a)}else for(a in s)s[a]&&(t&&(t+=" "),t+=a);return t}function Q(){for(var s,r,a=0,t="",i=arguments.length;a<i;a++)(s=arguments[a])&&(r=L(s))&&(t&&(t+=" "),t+=r);return t}function U(s){return typeof s=="object"?Q(s):s??""}function rs(s){if(v){var r=!1,a=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var t=s.value;g(s,"value",null),s.value=t}if(s.hasAttribute("checked")){var i=s.checked;g(s,"checked",null),s.checked=i}}};s.__on_r=a,F(a),J()}}function as(s,r){var a=s.__attributes??(s.__attributes={});a.value===(a.value=r??void 0)||s.value===r&&(r!==0||s.nodeName!=="PROGRESS")||(s.value=r)}function W(s,r){r?s.hasAttribute("selected")||s.setAttribute("selected",""):s.removeAttribute("selected")}function g(s,r,a,t){var i=s.__attributes??(s.__attributes={});v&&(i[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||i[r]!==(i[r]=a)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[h]=a),a==null?s.removeAttribute(r):typeof a!="string"&&T(s).includes(r)?s[r]=a:s.setAttribute(r,a))}function ts(s,r,a,t,i=!1,u=!1,Z=!1){var _=r||{},p=s.tagName==="OPTION";for(var y in r)y in a||(a[y]=null);a.class&&(a.class=U(a.class));var $=T(s),z=s.__attributes??(s.__attributes={});for(const e in a){let f=a[e];if(p&&e==="value"&&f==null){s.value=s.__value="",_[e]=f;continue}var A=_[e];if(f!==A){_[e]=f;var b=e[0]+e[1];if(b!=="$$"){if(b==="on"){const c={},n="$$"+e;let l=e.slice(2);var d=Y(l);if(M(l)&&(l=l.slice(0,-7),c.capture=!0),!d&&A){if(f!=null)continue;s.removeEventListener(l,_[n],c),_[n]=null}if(f!=null)if(d)s[`__${l}`]=f,G([l]);else{let C=function(O){_[e].call(this,O)};_[n]=D(l,s,C,c)}else d&&(s[`__${l}`]=void 0)}else if(e==="style"&&f!=null)s.style.cssText=f+"";else if(e==="autofocus")H(s,!!f);else if(e==="__value"||e==="value"&&f!=null)s.value=s[e]=s.__value=f;else if(e==="selected"&&p)W(s,f);else{var o=e;i||(o=K(o));var N=o==="defaultValue"||o==="defaultChecked";if(f==null&&!u&&!N)if(z[e]=null,o==="value"||o==="checked"){let c=s;if(o==="value"){let n=c.defaultValue;c.removeAttribute(o),c.defaultValue=n}else{let n=c.defaultChecked;c.removeAttribute(o),c.defaultChecked=n}}else s.removeAttribute(e);else N||$.includes(o)&&(u||typeof f!="string")?s[o]=f:typeof f!="function"&&(v&&(o==="src"||o==="href"||o==="srcset")||g(s,o,f))}e==="style"&&"__styles"in s&&(s.__styles={})}}}return _}var E=new Map;function T(s){var r=E.get(s.nodeName);if(r)return r;E.set(s.nodeName,r=[]);for(var a,t=s,i=Element.prototype;i!==t;){a=I(t);for(var u in a)a[u].set&&r.push(u);t=B(t)}return r}function is(s){if(!v&&s.loading==="lazy"){var r=s.src;s[h]=null,s.loading="eager",s.removeAttribute("src"),requestAnimationFrame(()=>{s[h]!=="eager"&&(s.loading="lazy"),s.src=r})}}function es(s,r,a){var t=s.__className,i=X(r);v&&s.className===i?s.__className=i:(t!==i||v&&s.className!==i)&&(r==null?s.removeAttribute("class"):s.className=i,s.__className=i)}function X(s,r){return(s??"")+""}function fs(s,r,a){if(a){if(s.classList.contains(r))return;s.classList.add(r)}else{if(!s.classList.contains(r))return;s.classList.remove(r)}}export{g as a,es as b,U as c,ts as d,as as e,is as h,rs as r,ss as s,fs as t};