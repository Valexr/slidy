const a=function(){const t=document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}(),d=function(s){return"/Slidy/_app/"+s},l={},f=function(t,o,m){return!o||o.length===0?t():Promise.all(o.map(e=>{if(e=d(e),e in l)return;l[e]=!0;const n=e.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${i}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":a,n||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),n)return new Promise((c,u)=>{r.addEventListener("load",c),r.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>t())};export{f as _};
