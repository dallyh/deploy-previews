import{n as h}from"./ViewTransitions.astro_astro_type_script_index_0_lang.smVYmDTI.js";import"./index.S9RqswRG.js";const w=()=>{const l=document.querySelector("#nav-toggle");document.querySelector("#siteNav");const a=document.querySelectorAll("[data-submenu]");if(l===null)return;const c=(n=null)=>{const e=document.querySelectorAll("[data-submenu].opened");if(n===null){e.forEach(t=>{t.classList.remove("opened")});return}const r=n.target;e.forEach(t=>{t.children[0]!==r&&t.classList.remove("opened")})},i=()=>{a.forEach(n=>{const e=n.querySelector("[data-submenu-button]");e?.addEventListener("click",r=>{const t=e.dataset.submenuButton;console.log(t),document.getElementById(t)?.classList.toggle("opened");const s=n.children[0];s.ariaExpanded==="false"?s.ariaExpanded="true":s.ariaExpanded="false"})})},u=()=>{document.body.classList.toggle("nav-active")};document.onmouseup=n=>{c(n)},document.onkeydown=n=>{n.key,n.key},l.addEventListener("click",n=>{n.preventDefault(),u()}),i(),console.log("Navigation initialized.")};document.addEventListener("astro:page-load",l=>{w()},{once:!1});class y extends HTMLElement{constructor(){super();const a=this.querySelectorAll(".dropdown-btn"),c=this.querySelectorAll(".dropdown"),i=this.querySelector("#hamburger");this.querySelector(".menu");const u=this.querySelectorAll(".dropdown a");function n(){a.forEach(t=>t.setAttribute("aria-expanded","false"))}function e(){c.forEach(t=>{t.classList.remove("active"),t.addEventListener("click",d=>d.stopPropagation())})}function r(){document.body.classList.toggle("nav-active")}a.forEach(t=>{t.addEventListener("click",function(d){const s=d.target.dataset.dropdown;document.getElementById(s).classList.toggle("active"),c.forEach(o=>{o.id!==t.dataset.dropdown&&o.classList.remove("active")}),d.stopPropagation(),t.setAttribute("aria-expanded",t.getAttribute("aria-expanded")==="false"?"true":"false")})}),u.forEach(t=>t.addEventListener("click",()=>{e(),n(),r()})),document.documentElement.addEventListener("click",()=>{e(),n()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&(e(),n())}),i.addEventListener("click",r)}}customElements.define("site-nav",y);const L=()=>{const l=document.querySelector("#contactModal"),a=document.querySelector("#contactLink");a!=null&&(a.onclick=c=>{c.preventDefault(),l?.classList.toggle("show"),document.documentElement.classList.toggle("no-scroll")})};document.addEventListener("astro:page-load",l=>{L()},{once:!1});class b extends HTMLElement{constructor(){super();const a=this.querySelector("select");a&&a.addEventListener("change",c=>{c.currentTarget instanceof HTMLSelectElement&&h(c.currentTarget.value)})}}customElements.define("lang-select",b);const k="modulepreload",S=function(l){return"/deploy-previews/daliborhon.dev/1/"+l},v={},q=function(a,c,i){let u=Promise.resolve();if(c&&c.length>0){const n=document.getElementsByTagName("link");u=Promise.all(c.map(e=>{if(e=S(e),e in v)return;v[e]=!0;const r=e.endsWith(".css"),t=r?'[rel="stylesheet"]':"";if(!!i)for(let m=n.length-1;m>=0;m--){const o=n[m];if(o.href===e&&(!r||o.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${t}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":k,r||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),r)return new Promise((m,o)=>{s.addEventListener("load",m),s.addEventListener("error",()=>o(new Error(`Unable to preload CSS for ${e}`)))})}))}return u.then(()=>a()).catch(n=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=n,window.dispatchEvent(e),!e.defaultPrevented)throw n})};class I extends HTMLElement{constructor(){super();const a=this.querySelector("button[data-open-modal]"),c=this.querySelector("button[data-close-modal]"),i=this.querySelector("dialog"),u=this.querySelector(".dialog-frame"),n="";let e=null;const r=o=>{("href"in(o.target||{})||document.body.contains(o.target)&&!u.contains(o.target))&&d()},t=o=>{i.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),o?.stopPropagation(),window.addEventListener("click",r)},d=()=>i.close();a.addEventListener("click",t),a.disabled=!1,c.addEventListener("click",d),i.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",r)}),window.addEventListener("keydown",o=>{const f=document.activeElement instanceof HTMLElement&&(["input","select","textarea"].includes(document.activeElement.tagName.toLowerCase())||document.activeElement.isContentEditable);o.metaKey===!0&&o.key==="k"?(i.open?d():t(),o.preventDefault()):o.key==="/"&&!i.open&&!f&&(t(),o.preventDefault())});let s={};try{s=JSON.parse(this.dataset.translations||"{}")}catch{}const m=()=>{(window.requestIdleCallback||(f=>setTimeout(f,1)))(async()=>{const{PagefindUI:f}=await q(()=>import("./ui-core.CzLXg9nv.js"),__vite__mapDeps([0,1,2]));e===null&&(e=new f({element:"#pagefind",baseUrl:"/deploy-previews/daliborhon.dev/1/",bundlePath:"/deploy-previews/daliborhon.dev/1/".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:s,showSubResults:!0,processResult:function(p){if(p?.meta?.image){let E=new URL(p.url,String(window.location)),g=new URL(p.meta.image,E);g.hostname!==window.location.hostname?p.meta.image=g.toString():p.meta.image=g.pathname+n}}}))})};document.addEventListener("astro:after-swap",()=>{e!==null&&e.destroy()}),document.addEventListener("astro:page-load",()=>{m()},{once:!1})}}customElements.define("site-search",I);export{q as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/ui-core.CzLXg9nv.js","_astro/ViewTransitions.astro_astro_type_script_index_0_lang.smVYmDTI.js","_astro/index.S9RqswRG.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}