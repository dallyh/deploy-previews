import"./ViewTransitions.astro_astro_type_script_index_0_lang.1x9AxBH8.js";import"./index.S9RqswRG.js";const g=()=>{const t=document.querySelector("#menuButton"),n=document.querySelector("#siteNav"),l=document.querySelectorAll("[data-submenu]");if(t===null)return;const o=(e=null)=>{const a=document.querySelectorAll("[data-submenu].opened");if(e===null){a.forEach(s=>{s.classList.remove("opened")});return}const c=e.target;a.forEach(s=>{s.children[0]!==c&&s.classList.remove("opened")})},u=()=>{l.forEach(e=>{e?.addEventListener("click",a=>{e.classList.toggle("opened");const c=e.children[0];c.ariaExpanded==="false"?c.ariaExpanded="true":c.ariaExpanded="false"})})},d=()=>{t.children[0].classList.toggle("active"),document.body.classList.toggle("nav-active")},i=()=>{document.body.classList.contains("nav-active")&&(t.children[0].classList.toggle("active"),document.body.classList.remove("nav-active"))},r=(e=null)=>{if(e===null){i();return}let a=e.target;a!==t&&(n?.contains(a)||i())};document.onmouseup=e=>{r(e),o(e)},document.onkeydown=e=>{e.key==="Enter"&&(r(e),o(e)),e.key==="Escape"&&(r(),o())},t.addEventListener("click",e=>{e.preventDefault(),d()}),u(),console.log("Navigation initialized.")};document.addEventListener("astro:page-load",t=>{g()},{once:!1});const m=()=>{const t=document.querySelector("#contactModal"),n=document.querySelector("#contactLink");n!=null&&(n.onclick=l=>{l.preventDefault(),t?.classList.toggle("show"),document.documentElement.classList.toggle("no-scroll")})};document.addEventListener("astro:page-load",t=>{m()},{once:!1});const v=document.querySelectorAll("[data-js-language]");v.forEach(t=>{t.addEventListener("click",function(n){let o=n.target.getAttribute("data-js-language");if(o===null){console.error("Could not find 'data-js-language' attribute.");return}window.localStorage.setItem("language",o)})});