import{r as C,g as dt,b as v}from"./index.wdF9N7Cc.js";/* empty css                       */var Ie={exports:{}},Q={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ft=C,pt=Symbol.for("react.element"),mt=Symbol.for("react.fragment"),ht=Object.prototype.hasOwnProperty,yt=ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gt={key:!0,ref:!0,__self:!0,__source:!0};function Fe(e,t,r){var n,o={},i=null,a=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)ht.call(t,n)&&!gt.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:pt,type:e,key:i,ref:a,props:o,_owner:yt.current}}Q.Fragment=mt;Q.jsx=Fe;Q.jsxs=Fe;Ie.exports=Q;var p=Ie.exports,Me={exports:{}},vt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Et=vt,bt=Et;function Le(){}function De(){}De.resetWarningCache=Le;var wt=function(){function e(n,o,i,a,u,s){if(s!==bt){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:De,resetWarningCache:Le};return r.PropTypes=r,r};Me.exports=wt();var St=Me.exports;const m=dt(St);function be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?be(Object(r),!0).forEach(function(n){ke(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function X(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?X=function(t){return typeof t}:X=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},X(e)}function ke(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ct(e,t){return Ot(e)||Tt(e,t)||xt(e,t)||_t()}function Ot(e){if(Array.isArray(e))return e}function Tt(e,t){var r=e&&(typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"]);if(r!=null){var n=[],o=!0,i=!1,a,u;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(n.push(a.value),!(t&&n.length===t));o=!0);}catch(s){i=!0,u=s}finally{try{!o&&r.return!=null&&r.return()}finally{if(i)throw u}}return n}}function xt(e,t){if(e){if(typeof e=="string")return Se(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Se(e,t)}}function Se(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Rt=function(t){var r=v.useRef(t);return v.useEffect(function(){r.current=t},[t]),r.current},J=function(t){return t!==null&&X(t)==="object"},Ce="[object Object]",Pt=function e(t,r){if(!J(t)||!J(r))return t===r;var n=Array.isArray(t),o=Array.isArray(r);if(n!==o)return!1;var i=Object.prototype.toString.call(t)===Ce,a=Object.prototype.toString.call(r)===Ce;if(i!==a)return!1;if(!i&&!n)return t===r;var u=Object.keys(t),s=Object.keys(r);if(u.length!==s.length)return!1;for(var d={},c=0;c<u.length;c+=1)d[u[c]]=!0;for(var l=0;l<s.length;l+=1)d[s[l]]=!0;var f=Object.keys(d);if(f.length!==u.length)return!1;var E=t,T=r,g=function(B){return e(E[B],T[B])};return f.every(g)},jt=function(t,r,n){return J(t)?Object.keys(t).reduce(function(o,i){var a=!J(r)||!Pt(t[i],r[i]);return n.includes(i)?(a&&console.warn("Unsupported prop change: options.".concat(i," is not a mutable property.")),o):a?we(we({},o||{}),{},ke({},i,t[i])):o},null):null},$e=v.createContext(null);$e.displayName="ElementsContext";var Nt=function(t,r){if(!t)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(r," in an <Elements> provider."));return t},Ue=v.createContext(null);Ue.displayName="CartElementContext";var At=function(t,r){if(!t)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(r," in an <Elements> provider."));return t};m.any,m.object;var Oe=function(t){var r=v.useContext($e);return Nt(r,t)},Te=function(t){var r=v.useContext(Ue);return At(r,t)};m.func.isRequired;var S=function(t,r,n){var o=!!n,i=v.useRef(n);v.useEffect(function(){i.current=n},[n]),v.useEffect(function(){if(!o||!t)return function(){};var a=function(){i.current&&i.current.apply(i,arguments)};return t.on(r,a),function(){t.off(r,a)}},[o,r,t,i])},It=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},h=function(t,r){var n="".concat(It(t),"Element"),o=function(s){var d=s.id,c=s.className,l=s.options,f=l===void 0?{}:l,E=s.onBlur,T=s.onFocus,g=s.onReady,W=s.onChange,B=s.onEscape,Ve=s.onClick,Qe=s.onLoadError,Ze=s.onLoaderStart,et=s.onNetworksChange,ee=s.onCheckout,tt=s.onLineItemClick,rt=s.onConfirm,nt=s.onCancel,ot=s.onShippingAddressChange,it=s.onShippingRateChange,at=Oe("mounts <".concat(n,">")),te=at.elements,st=v.useState(null),ye=Ct(st,2),b=ye[0],ct=ye[1],j=v.useRef(null),re=v.useRef(null),ge=Te("mounts <".concat(n,">")),ne=ge.setCart,oe=ge.setCartState;S(b,"blur",E),S(b,"focus",T),S(b,"escape",B),S(b,"click",Ve),S(b,"loaderror",Qe),S(b,"loaderstart",Ze),S(b,"networkschange",et),S(b,"lineitemclick",tt),S(b,"confirm",rt),S(b,"cancel",nt),S(b,"shippingaddresschange",ot),S(b,"shippingratechange",it);var Y;t==="cart"?Y=function(Ee){oe(Ee),g&&g(Ee)}:g&&(t==="payButton"?Y=g:Y=function(){g(b)}),S(b,"ready",Y);var lt=t==="cart"?function(w){oe(w),W&&W(w)}:W;S(b,"change",lt);var ut=t==="cart"?function(w){oe(w),ee&&ee(w)}:ee;S(b,"checkout",ut),v.useLayoutEffect(function(){if(j.current===null&&te&&re.current!==null){var w=te.create(t,f);t==="cart"&&ne&&ne(w),j.current=w,ct(w),w.mount(re.current)}},[te,f,ne]);var ve=Rt(f);return v.useEffect(function(){if(j.current){var w=jt(f,ve,["paymentRequest"]);w&&j.current.update(w)}},[f,ve]),v.useLayoutEffect(function(){return function(){j.current&&(j.current.destroy(),j.current=null)}},[]),v.createElement("div",{id:d,className:c,ref:re})},i=function(s){Oe("mounts <".concat(n,">")),Te("mounts <".concat(n,">"));var d=s.id,c=s.className;return v.createElement("div",{id:d,className:c})},a=r?i:o;return a.propTypes={id:m.string,className:m.string,onChange:m.func,onBlur:m.func,onFocus:m.func,onReady:m.func,onEscape:m.func,onClick:m.func,onLoadError:m.func,onLoaderStart:m.func,onNetworksChange:m.func,onCheckout:m.func,onLineItemClick:m.func,onConfirm:m.func,onCancel:m.func,onShippingAddressChange:m.func,onShippingRateChange:m.func,options:m.object},a.displayName=n,a.__elementType=t,a},y=typeof window>"u";h("auBankAccount",y);var Ft=h("card",y);h("cardNumber",y);h("cardExpiry",y);h("cardCvc",y);h("fpxBank",y);h("iban",y);h("idealBank",y);h("p24Bank",y);h("epsBank",y);h("payment",y);h("payButton",y);h("paymentRequestButton",y);h("linkAuthentication",y);h("address",y);h("shippingAddress",y);h("cart",y);h("paymentMethodMessaging",y);h("affirmMessage",y);h("afterpayClearpayMessage",y);var de=Object.defineProperty,Mt=Object.getOwnPropertyDescriptor,Lt=Object.getOwnPropertyNames,Dt=Object.prototype.hasOwnProperty,kt=(e,t)=>{for(var r in t)de(e,r,{get:t[r],enumerable:!0})},$t=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Lt(t))!Dt.call(e,o)&&o!==r&&de(e,o,{get:()=>t[o],enumerable:!(n=Mt(t,o))||n.enumerable});return e},Ut=e=>$t(de({},"__esModule",{value:!0}),e),xe=(e,t,r)=>new Promise((n,o)=>{var i=s=>{try{u(r.next(s))}catch(d){o(d)}},a=s=>{try{u(r.throw(s))}catch(d){o(d)}},u=s=>s.done?n(s.value):Promise.resolve(s.value).then(i,a);u((r=r.apply(e,t)).next())}),We={};kt(We,{SubmissionError:()=>N,appendExtraData:()=>q,createClient:()=>Be,getDefaultClient:()=>sr,isSubmissionError:()=>Gt});var se=Ut(We),R="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",Wt=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;function Bt(e){e=String(e);for(var t,r,n,o,i="",a=0,u=e.length%3;a<e.length;){if((r=e.charCodeAt(a++))>255||(n=e.charCodeAt(a++))>255||(o=e.charCodeAt(a++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");t=r<<16|n<<8|o,i+=R.charAt(t>>18&63)+R.charAt(t>>12&63)+R.charAt(t>>6&63)+R.charAt(t&63)}return u?i.slice(0,u-3)+"===".substring(u):i}function Yt(e){if(e=String(e).replace(/[\t\n\f\r ]+/g,""),!Wt.test(e))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");e+="==".slice(2-(e.length&3));for(var t,r="",n,o,i=0;i<e.length;)t=R.indexOf(e.charAt(i++))<<18|R.indexOf(e.charAt(i++))<<12|(n=R.indexOf(e.charAt(i++)))<<6|(o=R.indexOf(e.charAt(i++))),r+=n===64?String.fromCharCode(t>>16&255):o===64?String.fromCharCode(t>>16&255,t>>8&255):String.fromCharCode(t>>16&255,t>>8&255,t&255);return r}var zt=()=>navigator.webdriver||!!document.documentElement.getAttribute(Yt("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,Xt=class{constructor(){this.loadedAt=Date.now(),this.webdriver=zt()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},qt=class{constructor(e){this.kind="success",this.next=e.next}};function Ht(e){return"next"in e&&typeof e.next=="string"}var Kt=class{constructor(e,t){this.paymentIntentClientSecret=e,this.resubmitKey=t,this.kind="stripePluginPending"}};function Jt(e){if("stripe"in e&&"resubmitKey"in e&&typeof e.resubmitKey=="string"){let{stripe:t}=e;return typeof t=="object"&&t!=null&&"paymentIntentClientSecret"in t&&typeof t.paymentIntentClientSecret=="string"}return!1}function Gt(e){return e.kind==="error"}var N=class{constructor(...e){this.kind="error",this.formErrors=[],this.fieldErrors=new Map;var t;for(let r of e){if(!r.field){this.formErrors.push({code:r.code&&Vt(r.code)?r.code:"UNSPECIFIED",message:r.message});continue}let n=(t=this.fieldErrors.get(r.field))!=null?t:[];n.push({code:r.code&&Zt(r.code)?r.code:"UNSPECIFIED",message:r.message}),this.fieldErrors.set(r.field,n)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(e){var t;return(t=this.fieldErrors.get(e))!=null?t:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function Vt(e){return e in Qt}var Qt={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function Zt(e){return e in er}var er={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};function tr(e){return"errors"in e&&Array.isArray(e.errors)&&e.errors.every(t=>typeof t.message=="string")||"error"in e&&typeof e.error=="string"}var rr="3.0.1",nr=e=>Bt(JSON.stringify(e)),or=e=>{let t=`@formspree/core@${rr}`;return e?`${e} ${t}`:t};function q(e,t,r){e instanceof FormData?e.append(t,r):e[t]=r}function ir(e){return e!==null&&typeof e=="object"}var ar=class{constructor(e={}){this.project=e.project,this.stripe=e.stripe,typeof window<"u"&&(this.session=new Xt)}submitForm(e,t){return xe(this,arguments,function*(r,n,o={}){let i=o.endpoint||"https://formspree.io",a=this.project?`${i}/p/${this.project}/f/${r}`:`${i}/f/${r}`,u={Accept:"application/json","Formspree-Client":or(o.clientName)};this.session&&(u["Formspree-Session-Data"]=nr(this.session.data())),n instanceof FormData||(u["Content-Type"]="application/json");function s(c){return xe(this,null,function*(){try{let l=yield(yield fetch(a,{method:"POST",mode:"cors",body:c instanceof FormData?c:JSON.stringify(c),headers:u})).json();if(ir(l)){if(tr(l))return Array.isArray(l.errors)?new N(...l.errors):new N({message:l.error});if(Jt(l))return new Kt(l.stripe.paymentIntentClientSecret,l.resubmitKey);if(Ht(l))return new qt({next:l.next})}return new N({message:"Unexpected response format"})}catch(l){let f=l instanceof Error?l.message:`Unknown error while posting to Formspree: ${JSON.stringify(l)}`;return new N({message:f})}})}if(this.stripe&&o.createPaymentMethod){let c=yield o.createPaymentMethod();if(c.error)return new N({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});q(n,"paymentMethod",c.paymentMethod.id);let l=yield s(n);if(l.kind==="error")return l;if(l.kind==="stripePluginPending"){let f=yield this.stripe.handleCardAction(l.paymentIntentClientSecret);if(f.error)return new N({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});n instanceof FormData?n.delete("paymentMethod"):delete n.paymentMethod,q(n,"paymentIntent",f.paymentIntent.id),q(n,"resubmitKey",l.resubmitKey);let E=yield s(n);return _e(E),E}return l}let d=yield s(n);return _e(d),d})}};function _e(e){let{kind:t}=e;if(t!=="success"&&t!=="error")throw new Error(`Unexpected submission result (kind: ${t})`)}var Be=e=>new ar(e),sr=()=>(ie||(ie=Be()),ie),ie,Ye={};Object.defineProperty(Ye,"__esModule",{value:!0});function H(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?H=function(t){return typeof t}:H=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(e)}var ze="https://js.stripe.com/v3",cr=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,Re="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",lr=function(){for(var t=document.querySelectorAll('script[src^="'.concat(ze,'"]')),r=0;r<t.length;r++){var n=t[r];if(cr.test(n.src))return n}return null},ur=function(t){var r=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(ze).concat(r);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(n),n},dr=function(t,r){!t||!t._registerWrapper||t._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:r})},z=null,fr=function(t){return z!==null||(z=new Promise(function(r,n){if(typeof window>"u"||typeof document>"u"){r(null);return}if(window.Stripe&&t&&console.warn(Re),window.Stripe){r(window.Stripe);return}try{var o=lr();o&&t?console.warn(Re):o||(o=ur(t)),o.addEventListener("load",function(){window.Stripe?r(window.Stripe):n(new Error("Stripe.js not available"))}),o.addEventListener("error",function(){n(new Error("Failed to load Stripe.js"))})}catch(i){n(i);return}})),z},pr=function(t,r,n){if(t===null)return null;var o=t.apply(void 0,r);return dr(o,n),o},Pe=function(t){var r=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(t),`
`);if(t===null||H(t)!=="object")throw new Error(r);if(Object.keys(t).length===1&&typeof t.advancedFraudSignals=="boolean")return t;throw new Error(r)},K,ce=!1,Xe=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];ce=!0;var o=Date.now();return fr(K).then(function(i){return pr(i,r,o)})};Xe.setLoadParameters=function(e){if(ce&&K){var t=Pe(e),r=Object.keys(t),n=r.reduce(function(o,i){var a;return o&&e[i]===((a=K)===null||a===void 0?void 0:a[i])},!0);if(n)return}if(ce)throw new Error("You cannot change load parameters after calling loadStripe");K=Pe(e)};Ye.loadStripe=Xe;var mr=v.createContext(null);function hr(){return C.useContext(mr)??{client:se.getDefaultClient()}}var yr="2.5.1",gr=`@formspree/react@${yr}`;function vr(e,t={}){let r=hr(),{client:n=r.client,extraData:o,onError:i,onSuccess:a,origin:u}=t,{stripe:s}=n,d=C.useMemo(()=>s?.elements().getElement(Ft),[s]);return async function(c){let l=Er(c)?br(c):c;if(typeof o=="object")for(let[E,T]of Object.entries(o)){let g;typeof T=="function"?g=await T():g=T,g!==void 0&&se.appendExtraData(l,E,g)}let f=await n.submitForm(e,l,{endpoint:u,clientName:gr,createPaymentMethod:s&&d?()=>s.createPaymentMethod({type:"card",card:d,billing_details:wr(l)}):void 0});se.isSubmissionError(f)?i?.(f):a?.(f)}}function Er(e){return"preventDefault"in e&&typeof e.preventDefault=="function"}function br(e){e.preventDefault();let t=e.currentTarget;if(t.tagName!="FORM")throw new Error("submit was triggered for a non-form element");return new FormData(t)}function wr(e){let t={address:Sr(e)};for(let r of["name","email","phone"]){let n=e instanceof FormData?e.get(r):e[r];n&&typeof n=="string"&&(t[r]=n)}return t}function Sr(e){let t={};for(let[r,n]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let o=e instanceof FormData?e.get(r):e[r];o&&typeof o=="string"&&(t[n]=o)}return t}function Cr(e,t={}){let[r,n]=C.useState(null),[o,i]=C.useState(null),[a,u]=C.useState(!1),[s,d]=C.useState(!1);if(!e)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');let c=vr(e,{client:t.client,extraData:t.data,onError(l){n(l),u(!1),d(!1)},onSuccess(l){n(null),i(l),u(!1),d(!0)},origin:t.endpoint});return[{errors:r,result:o,submitting:a,succeeded:s},async function(l){u(!0),await c(l)},function(){n(null),i(null),u(!1),d(!1)}]}const qe=new Set,O=new WeakMap,M=new WeakMap,A=new WeakMap,le=new WeakMap,Or=new WeakMap,L=new WeakMap,G=new WeakMap,k=new WeakSet;let P,fe=0,pe=0;const _="__aa_tgt",$="__aa_del",V="__aa_new",Tr=e=>{const t=jr(e);t&&t.forEach(r=>Nr(r))},xr=e=>{e.forEach(t=>{t.target===P&&Rr(),O.has(t.target)&&I(t.target)})};function _r(e){const t=le.get(e);t?.disconnect();let r=O.get(e),n=0;const o=5;r||(r=D(e),O.set(e,r));const{offsetWidth:i,offsetHeight:a}=P,s=[r.top-o,i-(r.left+o+r.width),a-(r.top+o+r.height),r.left-o].map(c=>`${-1*Math.floor(c)}px`).join(" "),d=new IntersectionObserver(()=>{++n>1&&I(e)},{root:P,threshold:1,rootMargin:s});d.observe(e),le.set(e,d)}function I(e){clearTimeout(G.get(e));const t=Z(e),r=U(t)?500:t.duration;G.set(e,setTimeout(async()=>{const n=A.get(e);try{await n?.finished,O.set(e,D(e)),_r(e)}catch{}},r))}function Rr(){clearTimeout(G.get(P)),G.set(P,setTimeout(()=>{qe.forEach(e=>Ge(e,t=>He(()=>I(t))))},100))}function Pr(e){setTimeout(()=>{Or.set(e,setInterval(()=>He(I.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function He(e){typeof requestIdleCallback=="function"?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}let ue,F;typeof window<"u"&&(P=document.documentElement,ue=new MutationObserver(Tr),F=new ResizeObserver(xr),window.addEventListener("scroll",()=>{pe=window.scrollY,fe=window.scrollX}),F.observe(P));function jr(e){return e.reduce((n,o)=>[...n,...Array.from(o.addedNodes),...Array.from(o.removedNodes)],[]).every(n=>n.nodeName==="#comment")?!1:e.reduce((n,o)=>{if(n===!1)return!1;if(o.target instanceof Element){if(ae(o.target),!n.has(o.target)){n.add(o.target);for(let i=0;i<o.target.children.length;i++){const a=o.target.children.item(i);if(a){if($ in a)return!1;ae(o.target,a),n.add(a)}}}if(o.removedNodes.length)for(let i=0;i<o.removedNodes.length;i++){const a=o.removedNodes[i];if($ in a)return!1;a instanceof Element&&(n.add(a),ae(o.target,a),M.set(a,[o.previousSibling,o.nextSibling]))}}return n},new Set)}function ae(e,t){!t&&!(_ in e)?Object.defineProperty(e,_,{value:e}):t&&!(_ in t)&&Object.defineProperty(t,_,{value:e})}function Nr(e){var t;const r=e.isConnected,n=O.has(e);r&&M.has(e)&&M.delete(e),A.has(e)&&((t=A.get(e))===null||t===void 0||t.cancel()),V in e?je(e):n&&r?Ir(e):n&&!r?Fr(e):je(e)}function x(e){return Number(e.replace(/[^0-9.\-]/g,""))}function Ar(e){let t=e.parentElement;for(;t;){if(t.scrollLeft||t.scrollTop)return{x:t.scrollLeft,y:t.scrollTop};t=t.parentElement}return{x:0,y:0}}function D(e){const t=e.getBoundingClientRect(),{x:r,y:n}=Ar(e);return{top:t.top+n,left:t.left+r,width:t.width,height:t.height}}function Ke(e,t,r){let n=t.width,o=t.height,i=r.width,a=r.height;const u=getComputedStyle(e);if(u.getPropertyValue("box-sizing")==="content-box"){const d=x(u.paddingTop)+x(u.paddingBottom)+x(u.borderTopWidth)+x(u.borderBottomWidth),c=x(u.paddingLeft)+x(u.paddingRight)+x(u.borderRightWidth)+x(u.borderLeftWidth);n-=c,i-=c,o-=d,a-=d}return[n,i,o,a].map(Math.round)}function Z(e){return _ in e&&L.has(e[_])?L.get(e[_]):{duration:250,easing:"ease-in-out"}}function Je(e){if(_ in e)return e[_]}function me(e){const t=Je(e);return t?k.has(t):!1}function Ge(e,...t){t.forEach(r=>r(e,L.has(e)));for(let r=0;r<e.children.length;r++){const n=e.children.item(r);n&&t.forEach(o=>o(n,L.has(n)))}}function he(e){return Array.isArray(e)?e:[e]}function U(e){return typeof e=="function"}function Ir(e){const t=O.get(e),r=D(e);if(!me(e))return O.set(e,r);let n;if(!t)return;const o=Z(e);if(typeof o!="function"){const i=t.left-r.left,a=t.top-r.top,[u,s,d,c]=Ke(e,t,r),l={transform:`translate(${i}px, ${a}px)`},f={transform:"translate(0, 0)"};u!==s&&(l.width=`${u}px`,f.width=`${s}px`),d!==c&&(l.height=`${d}px`,f.height=`${c}px`),n=e.animate([l,f],{duration:o.duration,easing:o.easing})}else{const[i]=he(o(e,"remain",t,r));n=new Animation(i),n.play()}A.set(e,n),O.set(e,r),n.addEventListener("finish",I.bind(null,e))}function je(e){V in e&&delete e[V];const t=D(e);O.set(e,t);const r=Z(e);if(!me(e))return;let n;if(typeof r!="function")n=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:r.duration*1.5,easing:"ease-in"});else{const[o]=he(r(e,"add",t));n=new Animation(o),n.play()}A.set(e,n),n.addEventListener("finish",I.bind(null,e))}function Ne(e,t){var r;e.remove(),O.delete(e),M.delete(e),A.delete(e),(r=le.get(e))===null||r===void 0||r.disconnect(),setTimeout(()=>{if($ in e&&delete e[$],Object.defineProperty(e,V,{value:!0,configurable:!0}),t&&e instanceof HTMLElement)for(const n in t)e.style[n]=""},0)}function Fr(e){var t;if(!M.has(e)||!O.has(e))return;const[r,n]=M.get(e);Object.defineProperty(e,$,{value:!0,configurable:!0});const o=window.scrollX,i=window.scrollY;if(n&&n.parentNode&&n.parentNode instanceof Element?n.parentNode.insertBefore(e,n):r&&r.parentNode?r.parentNode.appendChild(e):(t=Je(e))===null||t===void 0||t.appendChild(e),!me(e))return Ne(e);const[a,u,s,d]=Lr(e),c=Z(e),l=O.get(e);(o!==fe||i!==pe)&&Mr(e,o,i,c);let f,E={position:"absolute",top:`${a}px`,left:`${u}px`,width:`${s}px`,height:`${d}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(!U(c))Object.assign(e.style,E),f=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:c.duration,easing:"ease-out"});else{const[T,g]=he(c(e,"remove",l));g?.styleReset!==!1&&(E=g?.styleReset||E,Object.assign(e.style,E)),f=new Animation(T),f.play()}A.set(e,f),f.addEventListener("finish",Ne.bind(null,e,E))}function Mr(e,t,r,n){const o=fe-t,i=pe-r,a=document.documentElement.style.scrollBehavior;if(getComputedStyle(P).scrollBehavior==="smooth"&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+o,window.scrollY+i),!e.parentElement)return;const s=e.parentElement;let d=s.clientHeight,c=s.clientWidth;const l=performance.now();function f(){requestAnimationFrame(()=>{if(!U(n)){const E=d-s.clientHeight,T=c-s.clientWidth;l+n.duration>performance.now()?(window.scrollTo({left:window.scrollX-T,top:window.scrollY-E}),d=s.clientHeight,c=s.clientWidth,f()):document.documentElement.style.scrollBehavior=a}})}f()}function Lr(e){const t=O.get(e),[r,,n]=Ke(e,t,D(e));let o=e.parentElement;for(;o&&(getComputedStyle(o).position==="static"||o instanceof HTMLBodyElement);)o=o.parentElement;o||(o=document.body);const i=getComputedStyle(o),a=O.get(o)||D(o),u=Math.round(t.top-a.top)-x(i.borderTopWidth),s=Math.round(t.left-a.left)-x(i.borderLeftWidth);return[u,s,r,n]}function Dr(e,t={}){return ue&&F&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!U(t)&&!t.disrespectUserMotionPreference||(k.add(e),getComputedStyle(e).position==="static"&&Object.assign(e.style,{position:"relative"}),Ge(e,I,Pr,o=>F?.observe(o)),U(t)?L.set(e,t):L.set(e,{duration:250,easing:"ease-in-out",...t}),ue.observe(e,{childList:!0}),qe.add(e))),Object.freeze({parent:e,enable:()=>{k.add(e)},disable:()=>{k.delete(e)},isEnabled:()=>k.has(e)})}function Ae(e){const[t,r]=C.useState(),n=C.useMemo(()=>e,[]),o=C.useCallback(a=>{a instanceof HTMLElement?r(Dr(a,n)):r(void 0)},[n]),i=C.useCallback(a=>{t&&(a?t.enable():t.disable())},[t]);return[o,i]}const Ur=e=>{const[t,r]=Cr("mayzkojd"),[n,o]=C.useState([{type:"",message:""}]),i=C.useRef(!0),[a]=Ae(),[u]=Ae(),s=(c,l)=>{switch(c){case"TYPE_EMAIL":o(f=>[...f,{type:"EMAIL",message:e.resources.ERROR_TYPE_EMAIL}]);break;case"TYPE_TEXT":o(f=>[...f,{type:"TEXT",message:e.resources.ERROR_TYPE_TEXT}]);break;default:o(f=>[...f,{type:c??"UNDEFINED",message:l}]);break}};C.useEffect(()=>{if(i.current){i.current=!1;return}var c=t.errors?.getAllFieldErrors();if(c===void 0){console.debug("No errors returned from form."),o(l=>[...l,{type:"UNDEFINED",message:e.resources.SubmitError}]);return}c.map(l=>{l[1].map(f=>{s(f.code,f.message)})}),o(l=>[...l,{type:"CORRECT_FIELDS",message:e.resources.ERROR_CORRECT_FIELDS}])},[t.errors]);const d=c=>{c.target instanceof HTMLTextAreaElement&&c.target.select(),c.target instanceof HTMLInputElement&&c.target.select()};return p.jsxs("div",{ref:u,children:[t.succeeded&&p.jsx("div",{id:"submit-success",children:p.jsx("p",{children:e.resources.SubmitSuccess})}),!t.succeeded&&p.jsxs("form",{id:"fs-frm",ref:a,name:"simple-contact-form",onSubmit:r,children:[p.jsxs("fieldset",{id:"fs-frm-inputs",disabled:t.submitting,children:[p.jsx("input",{type:"hidden",name:"_language",value:"cs"}),p.jsxs("div",{className:"contact-info-container",children:[p.jsx("label",{htmlFor:"full-name",children:e.resources.FullName}),p.jsx("input",{type:"text",autoComplete:"name",name:"name",id:"full-name",placeholder:e.resources.NameAndSurname,required:!0,onFocus:d}),p.jsx("label",{htmlFor:"email",children:e.resources.EmailAddress}),n.some(c=>c.type==="EMAIL")&&p.jsx("p",{className:"error",children:n.find(c=>c.type==="EMAIL")?.message}),p.jsx("input",{id:"email",autoComplete:"email",type:"email",name:"email",placeholder:"@",required:!0,onFocus:d}),p.jsx("label",{htmlFor:"email-subject",children:e.resources.Subject}),p.jsx("input",{type:"text",name:"_subject",id:"email-subject",placeholder:e.resources.Subject,required:!0,onFocus:d})]}),p.jsxs("div",{className:"message-container",children:[p.jsx("label",{htmlFor:"message",children:e.resources.Message}),p.jsx("div",{className:"textarea-container",children:p.jsx("textarea",{name:"message",id:"message",placeholder:e.resources.MessagePlaceholder,required:!0,onFocus:d})}),n.some(c=>c.type==="TEXT")&&p.jsx("p",{className:"error",children:n.find(c=>c.type==="TEXT")?.message})]}),n.some(c=>c.type==="CORRECT_FIELDS")&&p.jsx("p",{className:"error",children:n.find(c=>c.type==="CORRECT_FIELDS")?.message}),n.some(c=>c.type==="UNDEFINED")&&p.jsx("p",{className:"error",children:n.find(c=>c.type==="UNDEFINED")?.message})]}),p.jsxs("div",{className:"buttons-container",children:[e.showCloseButton&&p.jsx("button",{type:"button",id:"fs-frm-close-button",className:"button",disabled:t.submitting,children:e.resources.CloseButton}),p.jsxs("button",{type:"submit",id:"fs-frm-submit-button",className:"button",disabled:t.submitting,children:[!t.submitting&&e.resources.Submit,t.submitting&&p.jsx("div",{className:"dot-flashing"})]})]})]})]})};export{Ur as default};
