import{J as R,q as z,_ as F,F as S,a3 as C,R as I,v as n,C as B,ae as b,au as G,av as d,aw as M}from"./runtime.Bhet3Iqp.js";import{j,k as L,l as D,n as J,m as K}from"./disclose-version.cJGNd_WR.js";function Y(s,r){if(r){const a=document.body;s.autofocus=!0,R(()=>{document.activeElement===a&&s.focus()})}}let E=!1;function H(){E||(E=!0,document.addEventListener("reset",s=>{Promise.resolve().then(()=>{var r;if(!s.defaultPrevented)for(const a of s.target.elements)(r=a.__on_r)==null||r.call(a)})},{capture:!0}))}function X(s,r,...a){var f=s,o=C,c;z(()=>{o!==(o=r())&&(c&&(I(c),c=null),c=S(()=>o(f,...a)))},F),n&&(f=B)}function Z(s){if(n){var r=!1,a=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var f=s.value;h(s,"value",null),s.value=f}if(s.hasAttribute("checked")){var o=s.checked;h(s,"checked",null),s.checked=o}}};s.__on_r=a,G(a),H()}}function x(s,r){var a=s.__attributes??(s.__attributes={});a.value===(a.value=r)||s.value===r&&(r!==0||s.nodeName!=="PROGRESS")||(s.value=r)}function h(s,r,a,f){var o=s.__attributes??(s.__attributes={});n&&(o[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||o[r]!==(o[r]=a)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[d]=a),a==null?s.removeAttribute(r):typeof a!="string"&&w(s).includes(r)?s[r]=a:s.setAttribute(r,a))}function m(s,r,a,f,o=!1,c=!1,U=!1){var u=r||{},O=s.tagName==="OPTION";for(var g in r)g in a||(a[g]=null);var P=w(s),$=s.__attributes??(s.__attributes={}),y=[];for(const i in a){let t=a[i];if(O&&i==="value"&&t==null){s.value=s.__value="",u[i]=t;continue}var p=u[i];if(t!==p){u[i]=t;var N=i[0]+i[1];if(N!=="$$"){if(N==="on"){const l={},v="$$"+i;let e=i.slice(2);var A=K(e);if(j(e)&&(e=e.slice(0,-7),l.capture=!0),!A&&p){if(t!=null)continue;s.removeEventListener(e,u[v],l),u[v]=null}if(t!=null)if(A)s[`__${e}`]=t,D([e]);else{let k=function(q){u[i].call(this,q)};r?u[v]=L(e,s,k,l):y.push([i,t,()=>u[v]=L(e,s,k,l)])}}else if(i==="style"&&t!=null)s.style.cssText=t+"";else if(i==="autofocus")Y(s,!!t);else if(i==="__value"||i==="value"&&t!=null)s.value=s[i]=s.__value=t;else{var _=i;o||(_=J(_)),t==null&&!c?($[i]=null,s.removeAttribute(i)):P.includes(_)&&(c||typeof t!="string")?s[_]=t:typeof t!="function"&&(n&&(_==="src"||_==="href"||_==="srcset")||h(s,_,t))}i==="style"&&"__styles"in s&&(s.__styles={})}}}return r||R(()=>{if(s.isConnected)for(const[i,t,l]of y)u[i]===t&&l()}),u}var T=new Map;function w(s){var r=T.get(s.nodeName);if(r)return r;T.set(s.nodeName,r=[]);for(var a,f=b(s),o=Element.prototype;o!==f;){a=M(f);for(var c in a)a[c].set&&r.push(c);f=b(f)}return r}function ss(s){if(!n&&s.loading==="lazy"){var r=s.src;s[d]=null,s.loading="eager",s.removeAttribute("src"),requestAnimationFrame(()=>{s[d]!=="eager"&&(s.loading="lazy"),s.src=r})}}function rs(s,r){var a=s.__className,f=Q(r);n&&s.className===f?s.__className=f:(a!==f||n&&s.className!==f)&&(r==null?s.removeAttribute("class"):s.className=f,s.__className=f)}function Q(s){return s??""}function as(s,r,a){if(a){if(s.classList.contains(r))return;s.classList.add(r)}else{if(!s.classList.contains(r))return;s.classList.remove(r)}}export{h as a,rs as b,m as c,x as d,ss as h,Z as r,X as s,as as t};