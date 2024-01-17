import{n as L}from"./ViewTransitions.astro_astro_type_script_index_0_lang.zc0N9wE-.js";import{d as v,a as y}from"./i18n.c3LmnEJW.js";import{p as E}from"./index.S9RqswRG.js";function b(e){return e.endsWith("/")?e:e+"/"}function F(e){return e.endsWith("/")?e.slice(0,e.length-1):e}function S(e){return e.startsWith("/")?e.substring(1):e}function P(e){return e.replace(/^\/|\/$/g,"")}function U(e){return typeof e=="string"||e instanceof String}function d(...e){return e.filter(U).map((t,n)=>n===0?F(t):n===e.length-1?S(t):P(t)).join("/")}function A(e,t){switch(e){case"always":return!0;case"never":return!1;case"ignore":switch(t){case"directory":return!0;case"file":return!1}}}const m={name:"MissingLocaleError",title:"The provided locale does not exist.",message:e=>`The locale/path \`${e}\` does not exist in the configured \`i18n.locales\`.`};function k(e){return e.replace(/\r\n|\r(?!\n)|\n/g,`
`)}function R(e,t){if(!t||t.line===void 0||t.column===void 0)return"";const n=k(e).split(`
`).map(r=>r.replace(/\t/g,"  ")),s=[];for(let r=-2;r<=2;r++)n[t.line+r]&&s.push(t.line+r);let a=0;for(const r of s){let i=`> ${r}`;i.length>a&&(a=i.length)}let o="";for(const r of s){const i=r===t.line-1;o+=i?"> ":"  ",o+=`${r+1} | ${n[r]}
`,i&&(o+=`${Array.from({length:a}).join(" ")}  | ${Array.from({length:t.column}).join(" ")}^
`)}return o}class T extends Error{loc;title;hint;frame;type="AstroError";constructor(t,n){const{name:s,title:a,message:o,stack:r,location:i,hint:u,frame:f}=t;super(o,n),this.title=a,this.name=s,o&&(this.message=o),this.stack=r||this.stack,this.loc=i,this.hint=u,this.frame=f}setLocation(t){this.loc=t}setName(t){this.name=t}setMessage(t){this.message=t}setHint(t){this.hint=t}setFrame(t,n){this.frame=R(t,n)}static is(t){return t.type==="AstroError"}}function $({locale:e,base:t,locales:n,trailingSlash:s,format:a,path:o,prependWith:r,normalizeLocale:i=!0,routing:u="prefix-other-locales",defaultLocale:f}){const g=W(n,e);if(!g)throw new T({...m,message:m.message(e)});const c=[t,r],h=i?x(g):g;return(u==="prefix-always"||e!==f)&&c.push(h),c.push(o),A(s,a)?b(d(...c)):d(...c)}function x(e){return e.replaceAll("_","-").toLowerCase()}function W(e,t){for(const n of e)if(typeof n=="string"){if(n===t)return n}else for(const s of n.codes)if(s===t)return n.path}const j="/deploy-previews/daliborhon.dev/4/",z="always",M="directory",N={defaultLocale:"cs",locales:["cs","en"],routing:"prefix-other-locales"},w=(e,t="",n)=>$({locale:e,path:t,base:j,trailingSlash:z,format:M,...N,...n});let l=w(v,"/home");const C=()=>{const e=window.location.search;return e&&new URLSearchParams(e).has("debug")?(console.log("Page running in debug mode..."),!0):!1},q=new Event("prefetchEvent"),D=e=>{E(e,{with:"fetch"}),document.dispatchEvent(q),console.log("dispatched")},p=e=>{switch(console.debug("Redirect URL by language: '"+e+"'"),e){case"en":l=w(v,"/home");break}console.log("Final URL: "+l),D(l)},H=()=>{if(C())return;let e=window.localStorage.getItem("language");if(e){console.log("Found local storage preference: "+e),p(e);return}let t=navigator.languages;for(let n of t)if(n.includes("-")&&(n=n.split("-")[0]),y.includes(n)){console.log("Found browser preference matching locales: "+n),p(n);break}};document.addEventListener("prefetchEvent",e=>{L(l,{history:"replace"})});document.addEventListener("astro:page-load",()=>{H()},{once:!0});
