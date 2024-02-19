import{n as he}from"./ViewTransitions.astro_astro_type_script_index_0_lang.dVBh85Zt.js";import"./index.S9RqswRG.js";const me=()=>{const o=document.querySelector("#contactModal"),e=document.querySelector("#contactLink");e!=null&&(e.onclick=t=>{t.preventDefault(),o?.classList.toggle("show"),document.documentElement.classList.toggle("no-scroll")})};document.addEventListener("astro:page-load",o=>{me()},{once:!1});/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var se=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],K=se.join(","),ce=typeof Element>"u",P=ce?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,j=!ce&&Element.prototype.getRootNode?function(o){var e;return o==null||(e=o.getRootNode)===null||e===void 0?void 0:e.call(o)}:function(o){return o?.ownerDocument},U=function o(e,t){var r;t===void 0&&(t=!0);var s=e==null||(r=e.getAttribute)===null||r===void 0?void 0:r.call(e,"inert"),c=s===""||s==="true",a=c||t&&e&&o(e.parentNode);return a},pe=function(e){var t,r=e==null||(t=e.getAttribute)===null||t===void 0?void 0:t.call(e,"contenteditable");return r===""||r==="true"},ue=function(e,t,r){if(U(e))return[];var s=Array.prototype.slice.apply(e.querySelectorAll(K));return t&&P.call(e,K)&&s.unshift(e),s=s.filter(r),s},le=function o(e,t,r){for(var s=[],c=Array.from(e);c.length;){var a=c.shift();if(!U(a,!1))if(a.tagName==="SLOT"){var d=a.assignedElements(),f=d.length?d:a.children,b=o(f,!0,r);r.flatten?s.push.apply(s,b):s.push({scopeParent:a,candidates:b})}else{var p=P.call(a,K);p&&r.filter(a)&&(t||!e.includes(a))&&s.push(a);var l=a.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(a),v=!U(l,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(l&&v){var S=o(l===!0?a.children:l.children,!0,r);r.flatten?s.push.apply(s,S):s.push({scopeParent:a,candidates:S})}else c.unshift.apply(c,a.children)}}return s},de=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},I=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||pe(e))&&!de(e)?0:e.tabIndex},ge=function(e,t){var r=I(e);return r<0&&t&&!de(e)?0:r},ye=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},fe=function(e){return e.tagName==="INPUT"},we=function(e){return fe(e)&&e.type==="hidden"},Ee=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(r){return r.tagName==="SUMMARY"});return t},Te=function(e,t){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===t)return e[r]},Ne=function(e){if(!e.name)return!0;var t=e.form||j(e),r=function(d){return t.querySelectorAll('input[type="radio"][name="'+d+'"]')},s;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")s=r(window.CSS.escape(e.name));else try{s=r(e.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var c=Te(s,e.form);return!c||c===e},Se=function(e){return fe(e)&&e.type==="radio"},ke=function(e){return Se(e)&&!Ne(e)},Fe=function(e){var t,r=e&&j(e),s=(t=r)===null||t===void 0?void 0:t.host,c=!1;if(r&&r!==e){var a,d,f;for(c=!!((a=s)!==null&&a!==void 0&&(d=a.ownerDocument)!==null&&d!==void 0&&d.contains(s)||e!=null&&(f=e.ownerDocument)!==null&&f!==void 0&&f.contains(e));!c&&s;){var b,p,l;r=j(s),s=(b=r)===null||b===void 0?void 0:b.host,c=!!((p=s)!==null&&p!==void 0&&(l=p.ownerDocument)!==null&&l!==void 0&&l.contains(s))}}return c},ee=function(e){var t=e.getBoundingClientRect(),r=t.width,s=t.height;return r===0&&s===0},Le=function(e,t){var r=t.displayCheck,s=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var c=P.call(e,"details>summary:first-of-type"),a=c?e.parentElement:e;if(P.call(a,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof s=="function"){for(var d=e;e;){var f=e.parentElement,b=j(e);if(f&&!f.shadowRoot&&s(f)===!0)return ee(e);e.assignedSlot?e=e.assignedSlot:!f&&b!==e.ownerDocument?e=b.host:e=f}e=d}if(Fe(e))return!e.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return ee(e);return!1},Ie=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var r=0;r<t.children.length;r++){var s=t.children.item(r);if(s.tagName==="LEGEND")return P.call(t,"fieldset[disabled] *")?!0:!s.contains(e)}return!0}t=t.parentElement}return!1},G=function(e,t){return!(t.disabled||U(t)||we(t)||Le(t,e)||Ee(t)||Ie(t))},Y=function(e,t){return!(ke(t)||I(t)<0||!G(e,t))},Pe=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},Re=function o(e){var t=[],r=[];return e.forEach(function(s,c){var a=!!s.scopeParent,d=a?s.scopeParent:s,f=ge(d,a),b=a?o(s.candidates):d;f===0?a?t.push.apply(t,b):t.push(d):r.push({documentOrder:c,tabIndex:f,item:s,isScope:a,content:b})}),r.sort(ye).reduce(function(s,c){return c.isScope?s.push.apply(s,c.content):s.push(c.content),s},[]).concat(t)},De=function(e,t){t=t||{};var r;return t.getShadowRoot?r=le([e],t.includeContainer,{filter:Y.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Pe}):r=ue(e,t.includeContainer,Y.bind(null,t)),Re(r)},Ae=function(e,t){t=t||{};var r;return t.getShadowRoot?r=le([e],t.includeContainer,{filter:G.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):r=ue(e,t.includeContainer,G.bind(null,t)),r},D=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return P.call(e,K)===!1?!1:Y(t,e)},Ce=se.concat("iframe").join(","),W=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return P.call(e,Ce)===!1?!1:G(t,e)};/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function te(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(o,s).enumerable})),t.push.apply(t,r)}return t}function ae(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?te(Object(t),!0).forEach(function(r){xe(o,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):te(Object(t)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(t,r))})}return o}function xe(o,e,t){return e=Be(e),e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function Oe(o,e){if(typeof o!="object"||o===null)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var r=t.call(o,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}function Be(o){var e=Oe(o,"string");return typeof e=="symbol"?e:String(e)}var re={activateTrap:function(e,t){if(e.length>0){var r=e[e.length-1];r!==t&&r.pause()}var s=e.indexOf(t);s===-1||e.splice(s,1),e.push(t)},deactivateTrap:function(e,t){var r=e.indexOf(t);r!==-1&&e.splice(r,1),e.length>0&&e[e.length-1].unpause()}},Me=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},qe=function(e){return e?.key==="Escape"||e?.key==="Esc"||e?.keyCode===27},B=function(e){return e?.key==="Tab"||e?.keyCode===9},Ke=function(e){return B(e)&&!e.shiftKey},je=function(e){return B(e)&&e.shiftKey},ne=function(e){return setTimeout(e,0)},ie=function(e,t){var r=-1;return e.every(function(s,c){return t(s)?(r=c,!1):!0}),r},O=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),s=1;s<t;s++)r[s-1]=arguments[s];return typeof e=="function"?e.apply(void 0,r):e},q=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},Ue=[],Ge=function(e,t){var r=t?.document||document,s=t?.trapStack||Ue,c=ae({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:Ke,isKeyBackward:je},t),a={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},d,f=function(i,n,u){return i&&i[n]!==void 0?i[n]:c[u||n]},b=function(i,n){var u=typeof n?.composedPath=="function"?n.composedPath():void 0;return a.containerGroups.findIndex(function(h){var m=h.container,y=h.tabbableNodes;return m.contains(i)||u?.includes(m)||y.find(function(w){return w===i})})},p=function(i){var n=c[i];if(typeof n=="function"){for(var u=arguments.length,h=new Array(u>1?u-1:0),m=1;m<u;m++)h[m-1]=arguments[m];n=n.apply(void 0,h)}if(n===!0&&(n=void 0),!n){if(n===void 0||n===!1)return n;throw new Error("`".concat(i,"` was specified but was not a node, or did not return a node"))}var y=n;if(typeof n=="string"&&(y=r.querySelector(n),!y))throw new Error("`".concat(i,"` as selector refers to no known node"));return y},l=function(){var i=p("initialFocus");if(i===!1)return!1;if(i===void 0||!W(i,c.tabbableOptions))if(b(r.activeElement)>=0)i=r.activeElement;else{var n=a.tabbableGroups[0],u=n&&n.firstTabbableNode;i=u||p("fallbackFocus")}if(!i)throw new Error("Your focus-trap needs to have at least one focusable element");return i},v=function(){if(a.containerGroups=a.containers.map(function(i){var n=De(i,c.tabbableOptions),u=Ae(i,c.tabbableOptions),h=n.length>0?n[0]:void 0,m=n.length>0?n[n.length-1]:void 0,y=u.find(function(E){return D(E)}),w=u.slice().reverse().find(function(E){return D(E)}),T=!!n.find(function(E){return I(E)>0});return{container:i,tabbableNodes:n,focusableNodes:u,posTabIndexesFound:T,firstTabbableNode:h,lastTabbableNode:m,firstDomTabbableNode:y,lastDomTabbableNode:w,nextTabbableNode:function(L){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,k=n.indexOf(L);return k<0?C?u.slice(u.indexOf(L)+1).find(function(x){return D(x)}):u.slice(0,u.indexOf(L)).reverse().find(function(x){return D(x)}):n[k+(C?1:-1)]}}}),a.tabbableGroups=a.containerGroups.filter(function(i){return i.tabbableNodes.length>0}),a.tabbableGroups.length<=0&&!p("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(a.containerGroups.find(function(i){return i.posTabIndexesFound})&&a.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},S=function g(i){var n=i.activeElement;if(n)return n.shadowRoot&&n.shadowRoot.activeElement!==null?g(n.shadowRoot):n},N=function g(i){if(i!==!1&&i!==S(document)){if(!i||!i.focus){g(l());return}i.focus({preventScroll:!!c.preventScroll}),a.mostRecentlyFocusedNode=i,Me(i)&&i.select()}},F=function(i){var n=p("setReturnFocus",i);return n||(n===!1?!1:i)},R=function(i){var n=i.target,u=i.event,h=i.isBackward,m=h===void 0?!1:h;n=n||q(u),v();var y=null;if(a.tabbableGroups.length>0){var w=b(n,u),T=w>=0?a.containerGroups[w]:void 0;if(w<0)m?y=a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:y=a.tabbableGroups[0].firstTabbableNode;else if(m){var E=ie(a.tabbableGroups,function(H){var $=H.firstTabbableNode;return n===$});if(E<0&&(T.container===n||W(n,c.tabbableOptions)&&!D(n,c.tabbableOptions)&&!T.nextTabbableNode(n,!1))&&(E=w),E>=0){var L=E===0?a.tabbableGroups.length-1:E-1,C=a.tabbableGroups[L];y=I(n)>=0?C.lastTabbableNode:C.lastDomTabbableNode}else B(u)||(y=T.nextTabbableNode(n,!1))}else{var k=ie(a.tabbableGroups,function(H){var $=H.lastTabbableNode;return n===$});if(k<0&&(T.container===n||W(n,c.tabbableOptions)&&!D(n,c.tabbableOptions)&&!T.nextTabbableNode(n))&&(k=w),k>=0){var x=k===a.tabbableGroups.length-1?0:k+1,_=a.tabbableGroups[x];y=I(n)>=0?_.firstTabbableNode:_.firstDomTabbableNode}else B(u)||(y=T.nextTabbableNode(n))}}else y=p("fallbackFocus");return y},M=function(i){var n=q(i);if(!(b(n,i)>=0)){if(O(c.clickOutsideDeactivates,i)){d.deactivate({returnFocus:c.returnFocusOnDeactivate});return}O(c.allowOutsideClick,i)||i.preventDefault()}},z=function(i){var n=q(i),u=b(n,i)>=0;if(u||n instanceof Document)u&&(a.mostRecentlyFocusedNode=n);else{i.stopImmediatePropagation();var h,m=!0;if(a.mostRecentlyFocusedNode)if(I(a.mostRecentlyFocusedNode)>0){var y=b(a.mostRecentlyFocusedNode),w=a.containerGroups[y].tabbableNodes;if(w.length>0){var T=w.findIndex(function(E){return E===a.mostRecentlyFocusedNode});T>=0&&(c.isKeyForward(a.recentNavEvent)?T+1<w.length&&(h=w[T+1],m=!1):T-1>=0&&(h=w[T-1],m=!1))}}else a.containerGroups.some(function(E){return E.tabbableNodes.some(function(L){return I(L)>0})})||(m=!1);else m=!1;m&&(h=R({target:a.mostRecentlyFocusedNode,isBackward:c.isKeyBackward(a.recentNavEvent)})),N(h||a.mostRecentlyFocusedNode||l())}a.recentNavEvent=void 0},ve=function(i){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;a.recentNavEvent=i;var u=R({event:i,isBackward:n});u&&(B(i)&&i.preventDefault(),N(u))},Z=function(i){if(qe(i)&&O(c.escapeDeactivates,i)!==!1){i.preventDefault(),d.deactivate();return}(c.isKeyForward(i)||c.isKeyBackward(i))&&ve(i,c.isKeyBackward(i))},J=function(i){var n=q(i);b(n,i)>=0||O(c.clickOutsideDeactivates,i)||O(c.allowOutsideClick,i)||(i.preventDefault(),i.stopImmediatePropagation())},X=function(){if(a.active)return re.activateTrap(s,d),a.delayInitialFocusTimer=c.delayInitialFocus?ne(function(){N(l())}):N(l()),r.addEventListener("focusin",z,!0),r.addEventListener("mousedown",M,{capture:!0,passive:!1}),r.addEventListener("touchstart",M,{capture:!0,passive:!1}),r.addEventListener("click",J,{capture:!0,passive:!1}),r.addEventListener("keydown",Z,{capture:!0,passive:!1}),d},Q=function(){if(a.active)return r.removeEventListener("focusin",z,!0),r.removeEventListener("mousedown",M,!0),r.removeEventListener("touchstart",M,!0),r.removeEventListener("click",J,!0),r.removeEventListener("keydown",Z,!0),d},be=function(i){var n=i.some(function(u){var h=Array.from(u.removedNodes);return h.some(function(m){return m===a.mostRecentlyFocusedNode})});n&&N(l())},V=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(be):void 0,A=function(){V&&(V.disconnect(),a.active&&!a.paused&&a.containers.map(function(i){V.observe(i,{subtree:!0,childList:!0})}))};return d={get active(){return a.active},get paused(){return a.paused},activate:function(i){if(a.active)return this;var n=f(i,"onActivate"),u=f(i,"onPostActivate"),h=f(i,"checkCanFocusTrap");h||v(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=r.activeElement,n?.();var m=function(){h&&v(),X(),A(),u?.()};return h?(h(a.containers.concat()).then(m,m),this):(m(),this)},deactivate:function(i){if(!a.active)return this;var n=ae({onDeactivate:c.onDeactivate,onPostDeactivate:c.onPostDeactivate,checkCanReturnFocus:c.checkCanReturnFocus},i);clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,Q(),a.active=!1,a.paused=!1,A(),re.deactivateTrap(s,d);var u=f(n,"onDeactivate"),h=f(n,"onPostDeactivate"),m=f(n,"checkCanReturnFocus"),y=f(n,"returnFocus","returnFocusOnDeactivate");u?.();var w=function(){ne(function(){y&&N(F(a.nodeFocusedBeforeActivation)),h?.()})};return y&&m?(m(F(a.nodeFocusedBeforeActivation)).then(w,w),this):(w(),this)},pause:function(i){if(a.paused||!a.active)return this;var n=f(i,"onPause"),u=f(i,"onPostPause");return a.paused=!0,n?.(),Q(),A(),u?.(),this},unpause:function(i){if(!a.paused||!a.active)return this;var n=f(i,"onUnpause"),u=f(i,"onPostUnpause");return a.paused=!1,n?.(),v(),X(),A(),u?.(),this},updateContainerElements:function(i){var n=[].concat(i).filter(Boolean);return a.containers=n.map(function(u){return typeof u=="string"?r.querySelector(u):u}),a.active&&v(),A(),this}},d.updateContainerElements(e),d};class Ve extends HTMLElement{constructor(){super();const e=this.querySelectorAll(".dropdown-btn"),t=this.querySelectorAll(".dropdown"),r=this.querySelector("#hamburger"),s=this.querySelector(".menu"),c=document.getElementById("pageContent"),a=Ge(s,{escapeDeactivates:!1});function d(){e.forEach(l=>l.setAttribute("aria-expanded","false"))}function f(l){l.propertyName==="transform"&&a.activate()}function b(){t.forEach(l=>{l.classList.remove("active"),l.addEventListener("click",v=>v.stopPropagation())})}function p(){document.body.classList.toggle("nav-active"),r.setAttribute("aria-expanded",r.getAttribute("aria-expanded")==="false"?"true":"false"),c?.setAttribute("aria-hidden",c.getAttribute("aria-hidden")==="false"?"true":"false")}e.forEach(l=>{l.addEventListener("click",function(v){const S=v.target.dataset.dropdown;document.getElementById(S).classList.toggle("active"),t.forEach(F=>{F.id!==l.dataset.dropdown&&F.classList.remove("active")}),v.stopPropagation(),l.setAttribute("aria-expanded",l.getAttribute("aria-expanded")==="false"?"true":"false")})}),document.documentElement.addEventListener("click",()=>{b(),d()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&(b(),d())}),s.onkeydown=l=>{l.key==="Escape"&&(l.preventDefault(),a.deactivate(),p())},r.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),s.addEventListener("transitionend",v=>{f(v)},{once:!0}),p())}),r.addEventListener("click",p)}}customElements.define("site-nav",Ve);class He extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",t=>{if(t.currentTarget instanceof HTMLSelectElement){const r=t.currentTarget.options[t.currentTarget.selectedIndex].dataset.language;window.localStorage.setItem("language",r),he(t.currentTarget.value)}})}}customElements.define("lang-select",He);const $e="modulepreload",We=function(o){return"/deploy-previews/daliborhon.dev/1/"+o},oe={},Ye=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){const c=document.getElementsByTagName("link");s=Promise.all(t.map(a=>{if(a=We(a),a in oe)return;oe[a]=!0;const d=a.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!r)for(let l=c.length-1;l>=0;l--){const v=c[l];if(v.href===a&&(!d||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${f}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":$e,d||(p.as="script",p.crossOrigin=""),p.href=a,document.head.appendChild(p),d)return new Promise((l,v)=>{p.addEventListener("load",l),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>e()).catch(c=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=c,window.dispatchEvent(a),!a.defaultPrevented)throw c})};class ze extends HTMLElement{constructor(){super();const e=this.querySelector("button[data-open-modal]"),t=this.querySelector("button[data-close-modal]"),r=this.querySelector("dialog"),s=this.querySelector(".dialog-frame"),c="";let a=null;const d=v=>{("href"in(v.target||{})||document.body.contains(v.target)&&!s.contains(v.target))&&b()},f=v=>{r.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),v?.stopPropagation(),window.addEventListener("click",d)},b=()=>r.close();e.addEventListener("click",f),e.disabled=!1,t.addEventListener("click",b),r.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",d)}),window.addEventListener("keydown",v=>{const S=document.activeElement instanceof HTMLElement&&(["input","select","textarea"].includes(document.activeElement.tagName.toLowerCase())||document.activeElement.isContentEditable);v.metaKey===!0&&v.key==="k"?(r.open?b():f(),v.preventDefault()):v.key==="/"&&!r.open&&!S&&(f(),v.preventDefault())});let p={};try{p=JSON.parse(this.dataset.translations||"{}")}catch{}const l=()=>{(window.requestIdleCallback||(S=>setTimeout(S,1)))(async()=>{const{PagefindUI:S}=await Ye(()=>import("./ui-core.I0u-2JQo.js"),__vite__mapDeps([0,1,2]));a===null&&(a=new S({element:"#pagefind",baseUrl:"/deploy-previews/daliborhon.dev/1/",bundlePath:"/deploy-previews/daliborhon.dev/1/".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:p,showSubResults:!0,processResult:function(N){if(N?.meta?.image){let F=new URL(N.url,String(window.location)),R=new URL(N.meta.image,F);R.hostname!==window.location.hostname?N.meta.image=R.toString():N.meta.image=R.pathname+c}}}))})};document.addEventListener("astro:after-swap",()=>{a!==null&&a.destroy()}),document.addEventListener("astro:page-load",()=>{l()},{once:!1})}}customElements.define("site-search",ze);class Ze extends HTMLElement{#e="theme-preference";#t=this.querySelector("#theme-toggle");constructor(){super(),this.#r(),this.#t?.addEventListener("click",()=>this.#i())}#a(){return localStorage.getItem(this.#e)?localStorage.getItem(this.#e):window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}#r(){document.documentElement.dataset.theme=this.#a(),this.#t?.setAttribute("aria-label",this.#a())}#n(e){localStorage.setItem(this.#e,e),this.#r()}#i(){const e=document.documentElement.dataset.theme==="light"?"dark":"light";this.#n(e)}}customElements.define("theme-select",Ze);export{Ye as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/ui-core.I0u-2JQo.js","_astro/ViewTransitions.astro_astro_type_script_index_0_lang.dVBh85Zt.js","_astro/index.S9RqswRG.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}