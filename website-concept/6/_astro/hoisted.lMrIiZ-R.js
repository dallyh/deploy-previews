import"./ViewTransitions.astro_astro_type_script_index_0_lang.lpbUYgez.js";import"./LanguageSelector.astro_astro_type_script_index_0_lang.rtvXDyIJ.js";import"./Navigation.astro_astro_type_script_index_0_lang.mKITGWEV.js";import"./index.JMLLUxR2.js";import"./_commonjsHelpers.HFhYSYcO.js";const s=()=>{const e=document.querySelectorAll(".timeline-content");let o={root:document.querySelector("#scrollArea"),rootMargin:"0px",threshold:[.85,.5]},i=new IntersectionObserver((t,n)=>{t.forEach(r=>{r.isIntersecting&&(r.target.classList.add("animate"),n.unobserve(r.target))})},o);e&&e.forEach(t=>{i.observe(t)})};document.addEventListener("astro:page-load",e=>{s()},{once:!1});
