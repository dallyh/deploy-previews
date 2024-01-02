import{j as p}from"./jsx-runtime.kj--2jRg.js";import{g as ct,b as v,r as O}from"./index.4_qOL1na.js";/* empty css                       */var Ae={exports:{}},lt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ut=lt,dt=ut;function Ie(){}function Fe(){}Fe.resetWarningCache=Ie;var ft=function(){function e(n,o,i,s,u,a){if(a!==dt){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Fe,resetWarningCache:Ie};return r.PropTypes=r,r};Ae.exports=ft();var pt=Ae.exports;const m=ct(pt);function Ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function be(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ee(Object(r),!0).forEach(function(n){Me(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ee(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function X(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?X=function(t){return typeof t}:X=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},X(e)}function Me(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function mt(e,t){return ht(e)||yt(e,t)||gt(e,t)||vt()}function ht(e){if(Array.isArray(e))return e}function yt(e,t){var r=e&&(typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"]);if(r!=null){var n=[],o=!0,i=!1,s,u;try{for(r=r.call(e);!(o=(s=r.next()).done)&&(n.push(s.value),!(t&&n.length===t));o=!0);}catch(a){i=!0,u=a}finally{try{!o&&r.return!=null&&r.return()}finally{if(i)throw u}}return n}}function gt(e,t){if(e){if(typeof e=="string")return we(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return we(e,t)}}function we(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function vt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Et=function(t){var r=v.useRef(t);return v.useEffect(function(){r.current=t},[t]),r.current},G=function(t){return t!==null&&X(t)==="object"},Se="[object Object]",bt=function e(t,r){if(!G(t)||!G(r))return t===r;var n=Array.isArray(t),o=Array.isArray(r);if(n!==o)return!1;var i=Object.prototype.toString.call(t)===Se,s=Object.prototype.toString.call(r)===Se;if(i!==s)return!1;if(!i&&!n)return t===r;var u=Object.keys(t),a=Object.keys(r);if(u.length!==a.length)return!1;for(var d={},c=0;c<u.length;c+=1)d[u[c]]=!0;for(var l=0;l<a.length;l+=1)d[a[l]]=!0;var f=Object.keys(d);if(f.length!==u.length)return!1;var E=t,T=r,g=function(B){return e(E[B],T[B])};return f.every(g)},wt=function(t,r,n){return G(t)?Object.keys(t).reduce(function(o,i){var s=!G(r)||!bt(t[i],r[i]);return n.includes(i)?(s&&console.warn("Unsupported prop change: options.".concat(i," is not a mutable property.")),o):s?be(be({},o||{}),{},Me({},i,t[i])):o},null):null},Le=v.createContext(null);Le.displayName="ElementsContext";var St=function(t,r){if(!t)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(r," in an <Elements> provider."));return t},De=v.createContext(null);De.displayName="CartElementContext";var Ct=function(t,r){if(!t)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(r," in an <Elements> provider."));return t};m.any,m.object;var Ce=function(t){var r=v.useContext(Le);return St(r,t)},Oe=function(t){var r=v.useContext(De);return Ct(r,t)};m.func.isRequired;var S=function(t,r,n){var o=!!n,i=v.useRef(n);v.useEffect(function(){i.current=n},[n]),v.useEffect(function(){if(!o||!t)return function(){};var s=function(){i.current&&i.current.apply(i,arguments)};return t.on(r,s),function(){t.off(r,s)}},[o,r,t,i])},Ot=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},h=function(t,r){var n="".concat(Ot(t),"Element"),o=function(a){var d=a.id,c=a.className,l=a.options,f=l===void 0?{}:l,E=a.onBlur,T=a.onFocus,g=a.onReady,$=a.onChange,B=a.onEscape,Ke=a.onClick,Ge=a.onLoadError,Je=a.onLoaderStart,Ve=a.onNetworksChange,Z=a.onCheckout,Qe=a.onLineItemClick,Ze=a.onConfirm,et=a.onCancel,tt=a.onShippingAddressChange,rt=a.onShippingRateChange,nt=Ce("mounts <".concat(n,">")),ee=nt.elements,ot=v.useState(null),he=mt(ot,2),b=he[0],it=he[1],j=v.useRef(null),te=v.useRef(null),ye=Oe("mounts <".concat(n,">")),re=ye.setCart,ne=ye.setCartState;S(b,"blur",E),S(b,"focus",T),S(b,"escape",B),S(b,"click",Ke),S(b,"loaderror",Ge),S(b,"loaderstart",Je),S(b,"networkschange",Ve),S(b,"lineitemclick",Qe),S(b,"confirm",Ze),S(b,"cancel",et),S(b,"shippingaddresschange",tt),S(b,"shippingratechange",rt);var Y;t==="cart"?Y=function(ve){ne(ve),g&&g(ve)}:g&&(t==="payButton"?Y=g:Y=function(){g(b)}),S(b,"ready",Y);var at=t==="cart"?function(w){ne(w),$&&$(w)}:$;S(b,"change",at);var st=t==="cart"?function(w){ne(w),Z&&Z(w)}:Z;S(b,"checkout",st),v.useLayoutEffect(function(){if(j.current===null&&ee&&te.current!==null){var w=ee.create(t,f);t==="cart"&&re&&re(w),j.current=w,it(w),w.mount(te.current)}},[ee,f,re]);var ge=Et(f);return v.useEffect(function(){if(j.current){var w=wt(f,ge,["paymentRequest"]);w&&j.current.update(w)}},[f,ge]),v.useLayoutEffect(function(){return function(){j.current&&(j.current.destroy(),j.current=null)}},[]),v.createElement("div",{id:d,className:c,ref:te})},i=function(a){Ce("mounts <".concat(n,">")),Oe("mounts <".concat(n,">"));var d=a.id,c=a.className;return v.createElement("div",{id:d,className:c})},s=r?i:o;return s.propTypes={id:m.string,className:m.string,onChange:m.func,onBlur:m.func,onFocus:m.func,onReady:m.func,onEscape:m.func,onClick:m.func,onLoadError:m.func,onLoaderStart:m.func,onNetworksChange:m.func,onCheckout:m.func,onLineItemClick:m.func,onConfirm:m.func,onCancel:m.func,onShippingAddressChange:m.func,onShippingRateChange:m.func,options:m.object},s.displayName=n,s.__elementType=t,s},y=typeof window>"u";h("auBankAccount",y);var Tt=h("card",y);h("cardNumber",y);h("cardExpiry",y);h("cardCvc",y);h("fpxBank",y);h("iban",y);h("idealBank",y);h("p24Bank",y);h("epsBank",y);h("payment",y);h("payButton",y);h("paymentRequestButton",y);h("linkAuthentication",y);h("address",y);h("shippingAddress",y);h("cart",y);h("paymentMethodMessaging",y);h("affirmMessage",y);h("afterpayClearpayMessage",y);var ue=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,_t=Object.getOwnPropertyNames,Rt=Object.prototype.hasOwnProperty,Pt=(e,t)=>{for(var r in t)ue(e,r,{get:t[r],enumerable:!0})},jt=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of _t(t))!Rt.call(e,o)&&o!==r&&ue(e,o,{get:()=>t[o],enumerable:!(n=xt(t,o))||n.enumerable});return e},Nt=e=>jt(ue({},"__esModule",{value:!0}),e),Te=(e,t,r)=>new Promise((n,o)=>{var i=a=>{try{u(r.next(a))}catch(d){o(d)}},s=a=>{try{u(r.throw(a))}catch(d){o(d)}},u=a=>a.done?n(a.value):Promise.resolve(a.value).then(i,s);u((r=r.apply(e,t)).next())}),ke={};Pt(ke,{SubmissionError:()=>N,appendExtraData:()=>q,createClient:()=>Ue,getDefaultClient:()=>Qt,isSubmissionError:()=>$t});var ae=Nt(ke),R="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",At=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;function It(e){e=String(e);for(var t,r,n,o,i="",s=0,u=e.length%3;s<e.length;){if((r=e.charCodeAt(s++))>255||(n=e.charCodeAt(s++))>255||(o=e.charCodeAt(s++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");t=r<<16|n<<8|o,i+=R.charAt(t>>18&63)+R.charAt(t>>12&63)+R.charAt(t>>6&63)+R.charAt(t&63)}return u?i.slice(0,u-3)+"===".substring(u):i}function Ft(e){if(e=String(e).replace(/[\t\n\f\r ]+/g,""),!At.test(e))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");e+="==".slice(2-(e.length&3));for(var t,r="",n,o,i=0;i<e.length;)t=R.indexOf(e.charAt(i++))<<18|R.indexOf(e.charAt(i++))<<12|(n=R.indexOf(e.charAt(i++)))<<6|(o=R.indexOf(e.charAt(i++))),r+=n===64?String.fromCharCode(t>>16&255):o===64?String.fromCharCode(t>>16&255,t>>8&255):String.fromCharCode(t>>16&255,t>>8&255,t&255);return r}var Mt=()=>navigator.webdriver||!!document.documentElement.getAttribute(Ft("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,Lt=class{constructor(){this.loadedAt=Date.now(),this.webdriver=Mt()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},Dt=class{constructor(e){this.kind="success",this.next=e.next}};function kt(e){return"next"in e&&typeof e.next=="string"}var Ut=class{constructor(e,t){this.paymentIntentClientSecret=e,this.resubmitKey=t,this.kind="stripePluginPending"}};function Wt(e){if("stripe"in e&&"resubmitKey"in e&&typeof e.resubmitKey=="string"){let{stripe:t}=e;return typeof t=="object"&&t!=null&&"paymentIntentClientSecret"in t&&typeof t.paymentIntentClientSecret=="string"}return!1}function $t(e){return e.kind==="error"}var N=class{constructor(...e){this.kind="error",this.formErrors=[],this.fieldErrors=new Map;var t;for(let r of e){if(!r.field){this.formErrors.push({code:r.code&&Bt(r.code)?r.code:"UNSPECIFIED",message:r.message});continue}let n=(t=this.fieldErrors.get(r.field))!=null?t:[];n.push({code:r.code&&zt(r.code)?r.code:"UNSPECIFIED",message:r.message}),this.fieldErrors.set(r.field,n)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(e){var t;return(t=this.fieldErrors.get(e))!=null?t:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function Bt(e){return e in Yt}var Yt={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function zt(e){return e in Xt}var Xt={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};function qt(e){return"errors"in e&&Array.isArray(e.errors)&&e.errors.every(t=>typeof t.message=="string")||"error"in e&&typeof e.error=="string"}var Ht="3.0.1",Kt=e=>It(JSON.stringify(e)),Gt=e=>{let t=`@formspree/core@${Ht}`;return e?`${e} ${t}`:t};function q(e,t,r){e instanceof FormData?e.append(t,r):e[t]=r}function Jt(e){return e!==null&&typeof e=="object"}var Vt=class{constructor(e={}){this.project=e.project,this.stripe=e.stripe,typeof window<"u"&&(this.session=new Lt)}submitForm(e,t){return Te(this,arguments,function*(r,n,o={}){let i=o.endpoint||"https://formspree.io",s=this.project?`${i}/p/${this.project}/f/${r}`:`${i}/f/${r}`,u={Accept:"application/json","Formspree-Client":Gt(o.clientName)};this.session&&(u["Formspree-Session-Data"]=Kt(this.session.data())),n instanceof FormData||(u["Content-Type"]="application/json");function a(c){return Te(this,null,function*(){try{let l=yield(yield fetch(s,{method:"POST",mode:"cors",body:c instanceof FormData?c:JSON.stringify(c),headers:u})).json();if(Jt(l)){if(qt(l))return Array.isArray(l.errors)?new N(...l.errors):new N({message:l.error});if(Wt(l))return new Ut(l.stripe.paymentIntentClientSecret,l.resubmitKey);if(kt(l))return new Dt({next:l.next})}return new N({message:"Unexpected response format"})}catch(l){let f=l instanceof Error?l.message:`Unknown error while posting to Formspree: ${JSON.stringify(l)}`;return new N({message:f})}})}if(this.stripe&&o.createPaymentMethod){let c=yield o.createPaymentMethod();if(c.error)return new N({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});q(n,"paymentMethod",c.paymentMethod.id);let l=yield a(n);if(l.kind==="error")return l;if(l.kind==="stripePluginPending"){let f=yield this.stripe.handleCardAction(l.paymentIntentClientSecret);if(f.error)return new N({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});n instanceof FormData?n.delete("paymentMethod"):delete n.paymentMethod,q(n,"paymentIntent",f.paymentIntent.id),q(n,"resubmitKey",l.resubmitKey);let E=yield a(n);return xe(E),E}return l}let d=yield a(n);return xe(d),d})}};function xe(e){let{kind:t}=e;if(t!=="success"&&t!=="error")throw new Error(`Unexpected submission result (kind: ${t})`)}var Ue=e=>new Vt(e),Qt=()=>(oe||(oe=Ue()),oe),oe,We={};Object.defineProperty(We,"__esModule",{value:!0});function H(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?H=function(t){return typeof t}:H=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(e)}var $e="https://js.stripe.com/v3",Zt=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,_e="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",er=function(){for(var t=document.querySelectorAll('script[src^="'.concat($e,'"]')),r=0;r<t.length;r++){var n=t[r];if(Zt.test(n.src))return n}return null},tr=function(t){var r=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat($e).concat(r);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(n),n},rr=function(t,r){!t||!t._registerWrapper||t._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:r})},z=null,nr=function(t){return z!==null||(z=new Promise(function(r,n){if(typeof window>"u"||typeof document>"u"){r(null);return}if(window.Stripe&&t&&console.warn(_e),window.Stripe){r(window.Stripe);return}try{var o=er();o&&t?console.warn(_e):o||(o=tr(t)),o.addEventListener("load",function(){window.Stripe?r(window.Stripe):n(new Error("Stripe.js not available"))}),o.addEventListener("error",function(){n(new Error("Failed to load Stripe.js"))})}catch(i){n(i);return}})),z},or=function(t,r,n){if(t===null)return null;var o=t.apply(void 0,r);return rr(o,n),o},Re=function(t){var r=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(t),`
`);if(t===null||H(t)!=="object")throw new Error(r);if(Object.keys(t).length===1&&typeof t.advancedFraudSignals=="boolean")return t;throw new Error(r)},K,se=!1,Be=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];se=!0;var o=Date.now();return nr(K).then(function(i){return or(i,r,o)})};Be.setLoadParameters=function(e){if(se&&K){var t=Re(e),r=Object.keys(t),n=r.reduce(function(o,i){var s;return o&&e[i]===((s=K)===null||s===void 0?void 0:s[i])},!0);if(n)return}if(se)throw new Error("You cannot change load parameters after calling loadStripe");K=Re(e)};We.loadStripe=Be;var ir=v.createContext(null);function ar(){return O.useContext(ir)??{client:ae.getDefaultClient()}}var sr="2.5.1",cr=`@formspree/react@${sr}`;function lr(e,t={}){let r=ar(),{client:n=r.client,extraData:o,onError:i,onSuccess:s,origin:u}=t,{stripe:a}=n,d=O.useMemo(()=>a?.elements().getElement(Tt),[a]);return async function(c){let l=ur(c)?dr(c):c;if(typeof o=="object")for(let[E,T]of Object.entries(o)){let g;typeof T=="function"?g=await T():g=T,g!==void 0&&ae.appendExtraData(l,E,g)}let f=await n.submitForm(e,l,{endpoint:u,clientName:cr,createPaymentMethod:a&&d?()=>a.createPaymentMethod({type:"card",card:d,billing_details:fr(l)}):void 0});ae.isSubmissionError(f)?i?.(f):s?.(f)}}function ur(e){return"preventDefault"in e&&typeof e.preventDefault=="function"}function dr(e){e.preventDefault();let t=e.currentTarget;if(t.tagName!="FORM")throw new Error("submit was triggered for a non-form element");return new FormData(t)}function fr(e){let t={address:pr(e)};for(let r of["name","email","phone"]){let n=e instanceof FormData?e.get(r):e[r];n&&typeof n=="string"&&(t[r]=n)}return t}function pr(e){let t={};for(let[r,n]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let o=e instanceof FormData?e.get(r):e[r];o&&typeof o=="string"&&(t[n]=o)}return t}function mr(e,t={}){let[r,n]=O.useState(null),[o,i]=O.useState(null),[s,u]=O.useState(!1),[a,d]=O.useState(!1);if(!e)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');let c=lr(e,{client:t.client,extraData:t.data,onError(l){n(l),u(!1),d(!1)},onSuccess(l){n(null),i(l),u(!1),d(!0)},origin:t.endpoint});return[{errors:r,result:o,submitting:s,succeeded:a},async function(l){u(!0),await c(l)},function(){n(null),i(null),u(!1),d(!1)}]}const Ye=new Set,C=new WeakMap,M=new WeakMap,A=new WeakMap,ce=new WeakMap,hr=new WeakMap,L=new WeakMap,J=new WeakMap,k=new WeakSet;let P,de=0,fe=0;const _="__aa_tgt",U="__aa_del",V="__aa_new",yr=e=>{const t=wr(e);t&&t.forEach(r=>Sr(r))},gr=e=>{e.forEach(t=>{t.target===P&&Er(),C.has(t.target)&&I(t.target)})};function vr(e){const t=ce.get(e);t?.disconnect();let r=C.get(e),n=0;const o=5;r||(r=D(e),C.set(e,r));const{offsetWidth:i,offsetHeight:s}=P,a=[r.top-o,i-(r.left+o+r.width),s-(r.top+o+r.height),r.left-o].map(c=>`${-1*Math.floor(c)}px`).join(" "),d=new IntersectionObserver(()=>{++n>1&&I(e)},{root:P,threshold:1,rootMargin:a});d.observe(e),ce.set(e,d)}function I(e){clearTimeout(J.get(e));const t=Q(e),r=W(t)?500:t.duration;J.set(e,setTimeout(async()=>{const n=A.get(e);try{await n?.finished,C.set(e,D(e)),vr(e)}catch{}},r))}function Er(){clearTimeout(J.get(P)),J.set(P,setTimeout(()=>{Ye.forEach(e=>He(e,t=>ze(()=>I(t))))},100))}function br(e){setTimeout(()=>{hr.set(e,setInterval(()=>ze(I.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function ze(e){typeof requestIdleCallback=="function"?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}let le,F;typeof window<"u"&&(P=document.documentElement,le=new MutationObserver(yr),F=new ResizeObserver(gr),window.addEventListener("scroll",()=>{fe=window.scrollY,de=window.scrollX}),F.observe(P));function wr(e){return e.reduce((n,o)=>[...n,...Array.from(o.addedNodes),...Array.from(o.removedNodes)],[]).every(n=>n.nodeName==="#comment")?!1:e.reduce((n,o)=>{if(n===!1)return!1;if(o.target instanceof Element){if(ie(o.target),!n.has(o.target)){n.add(o.target);for(let i=0;i<o.target.children.length;i++){const s=o.target.children.item(i);if(s){if(U in s)return!1;ie(o.target,s),n.add(s)}}}if(o.removedNodes.length)for(let i=0;i<o.removedNodes.length;i++){const s=o.removedNodes[i];if(U in s)return!1;s instanceof Element&&(n.add(s),ie(o.target,s),M.set(s,[o.previousSibling,o.nextSibling]))}}return n},new Set)}function ie(e,t){!t&&!(_ in e)?Object.defineProperty(e,_,{value:e}):t&&!(_ in t)&&Object.defineProperty(t,_,{value:e})}function Sr(e){var t;const r=e.isConnected,n=C.has(e);r&&M.has(e)&&M.delete(e),A.has(e)&&((t=A.get(e))===null||t===void 0||t.cancel()),V in e?Pe(e):n&&r?Or(e):n&&!r?Tr(e):Pe(e)}function x(e){return Number(e.replace(/[^0-9.\-]/g,""))}function Cr(e){let t=e.parentElement;for(;t;){if(t.scrollLeft||t.scrollTop)return{x:t.scrollLeft,y:t.scrollTop};t=t.parentElement}return{x:0,y:0}}function D(e){const t=e.getBoundingClientRect(),{x:r,y:n}=Cr(e);return{top:t.top+n,left:t.left+r,width:t.width,height:t.height}}function Xe(e,t,r){let n=t.width,o=t.height,i=r.width,s=r.height;const u=getComputedStyle(e);if(u.getPropertyValue("box-sizing")==="content-box"){const d=x(u.paddingTop)+x(u.paddingBottom)+x(u.borderTopWidth)+x(u.borderBottomWidth),c=x(u.paddingLeft)+x(u.paddingRight)+x(u.borderRightWidth)+x(u.borderLeftWidth);n-=c,i-=c,o-=d,s-=d}return[n,i,o,s].map(Math.round)}function Q(e){return _ in e&&L.has(e[_])?L.get(e[_]):{duration:250,easing:"ease-in-out"}}function qe(e){if(_ in e)return e[_]}function pe(e){const t=qe(e);return t?k.has(t):!1}function He(e,...t){t.forEach(r=>r(e,L.has(e)));for(let r=0;r<e.children.length;r++){const n=e.children.item(r);n&&t.forEach(o=>o(n,L.has(n)))}}function me(e){return Array.isArray(e)?e:[e]}function W(e){return typeof e=="function"}function Or(e){const t=C.get(e),r=D(e);if(!pe(e))return C.set(e,r);let n;if(!t)return;const o=Q(e);if(typeof o!="function"){const i=t.left-r.left,s=t.top-r.top,[u,a,d,c]=Xe(e,t,r),l={transform:`translate(${i}px, ${s}px)`},f={transform:"translate(0, 0)"};u!==a&&(l.width=`${u}px`,f.width=`${a}px`),d!==c&&(l.height=`${d}px`,f.height=`${c}px`),n=e.animate([l,f],{duration:o.duration,easing:o.easing})}else{const[i]=me(o(e,"remain",t,r));n=new Animation(i),n.play()}A.set(e,n),C.set(e,r),n.addEventListener("finish",I.bind(null,e))}function Pe(e){V in e&&delete e[V];const t=D(e);C.set(e,t);const r=Q(e);if(!pe(e))return;let n;if(typeof r!="function")n=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:r.duration*1.5,easing:"ease-in"});else{const[o]=me(r(e,"add",t));n=new Animation(o),n.play()}A.set(e,n),n.addEventListener("finish",I.bind(null,e))}function je(e,t){var r;e.remove(),C.delete(e),M.delete(e),A.delete(e),(r=ce.get(e))===null||r===void 0||r.disconnect(),setTimeout(()=>{if(U in e&&delete e[U],Object.defineProperty(e,V,{value:!0,configurable:!0}),t&&e instanceof HTMLElement)for(const n in t)e.style[n]=""},0)}function Tr(e){var t;if(!M.has(e)||!C.has(e))return;const[r,n]=M.get(e);Object.defineProperty(e,U,{value:!0,configurable:!0});const o=window.scrollX,i=window.scrollY;if(n&&n.parentNode&&n.parentNode instanceof Element?n.parentNode.insertBefore(e,n):r&&r.parentNode?r.parentNode.appendChild(e):(t=qe(e))===null||t===void 0||t.appendChild(e),!pe(e))return je(e);const[s,u,a,d]=_r(e),c=Q(e),l=C.get(e);(o!==de||i!==fe)&&xr(e,o,i,c);let f,E={position:"absolute",top:`${s}px`,left:`${u}px`,width:`${a}px`,height:`${d}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(!W(c))Object.assign(e.style,E),f=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:c.duration,easing:"ease-out"});else{const[T,g]=me(c(e,"remove",l));g?.styleReset!==!1&&(E=g?.styleReset||E,Object.assign(e.style,E)),f=new Animation(T),f.play()}A.set(e,f),f.addEventListener("finish",je.bind(null,e,E))}function xr(e,t,r,n){const o=de-t,i=fe-r,s=document.documentElement.style.scrollBehavior;if(getComputedStyle(P).scrollBehavior==="smooth"&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+o,window.scrollY+i),!e.parentElement)return;const a=e.parentElement;let d=a.clientHeight,c=a.clientWidth;const l=performance.now();function f(){requestAnimationFrame(()=>{if(!W(n)){const E=d-a.clientHeight,T=c-a.clientWidth;l+n.duration>performance.now()?(window.scrollTo({left:window.scrollX-T,top:window.scrollY-E}),d=a.clientHeight,c=a.clientWidth,f()):document.documentElement.style.scrollBehavior=s}})}f()}function _r(e){const t=C.get(e),[r,,n]=Xe(e,t,D(e));let o=e.parentElement;for(;o&&(getComputedStyle(o).position==="static"||o instanceof HTMLBodyElement);)o=o.parentElement;o||(o=document.body);const i=getComputedStyle(o),s=C.get(o)||D(o),u=Math.round(t.top-s.top)-x(i.borderTopWidth),a=Math.round(t.left-s.left)-x(i.borderLeftWidth);return[u,a,r,n]}function Rr(e,t={}){return le&&F&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!W(t)&&!t.disrespectUserMotionPreference||(k.add(e),getComputedStyle(e).position==="static"&&Object.assign(e.style,{position:"relative"}),He(e,I,br,o=>F?.observe(o)),W(t)?L.set(e,t):L.set(e,{duration:250,easing:"ease-in-out",...t}),le.observe(e,{childList:!0}),Ye.add(e))),Object.freeze({parent:e,enable:()=>{k.add(e)},disable:()=>{k.delete(e)},isEnabled:()=>k.has(e)})}function Ne(e){const[t,r]=O.useState(),n=O.useMemo(()=>e,[]),o=O.useCallback(s=>{s instanceof HTMLElement?r(Rr(s,n)):r(void 0)},[n]),i=O.useCallback(s=>{t&&(s?t.enable():t.disable())},[t]);return[o,i]}const Ar=e=>{const[t,r]=mr("mayzkojd"),[n,o]=O.useState([{type:"",message:""}]),i=O.useRef(!0),[s]=Ne(),[u]=Ne(),a=(c,l)=>{switch(c){case"TYPE_EMAIL":o(f=>[...f,{type:"EMAIL",message:e.resources.ERROR_TYPE_EMAIL}]);break;case"TYPE_TEXT":o(f=>[...f,{type:"TEXT",message:e.resources.ERROR_TYPE_TEXT}]);break;default:o(f=>[...f,{type:c??"UNDEFINED",message:l}]);break}};O.useEffect(()=>{if(i.current){i.current=!1;return}var c=t.errors?.getAllFieldErrors();if(c===void 0){console.debug("No errors returned from form."),o(l=>[...l,{type:"UNDEFINED",message:e.resources.SubmitError}]);return}c.map(l=>{l[1].map(f=>{a(f.code,f.message)})}),o(l=>[...l,{type:"CORRECT_FIELDS",message:e.resources.ERROR_CORRECT_FIELDS}])},[t.errors]);const d=c=>{c.target instanceof HTMLTextAreaElement&&c.target.select(),c.target instanceof HTMLInputElement&&c.target.select()};return p.jsxs("div",{ref:u,children:[t.succeeded&&p.jsx("div",{id:"submit-success",children:p.jsx("p",{children:e.resources.SubmitSuccess})}),!t.succeeded&&p.jsxs("form",{id:"fs-frm",ref:s,name:"simple-contact-form",onSubmit:r,children:[p.jsxs("fieldset",{id:"fs-frm-inputs",disabled:t.submitting,children:[p.jsx("input",{type:"hidden",name:"_language",value:"cs"}),p.jsxs("div",{className:"contact-info-container",children:[p.jsx("label",{htmlFor:"full-name",children:e.resources.FullName}),p.jsx("input",{type:"text",autoComplete:"name",name:"name",id:"full-name",placeholder:e.resources.NameAndSurname,required:!0,onFocus:d}),p.jsx("label",{htmlFor:"email",children:e.resources.EmailAddress}),n.some(c=>c.type==="EMAIL")&&p.jsx("p",{className:"error",children:n.find(c=>c.type==="EMAIL")?.message}),p.jsx("input",{id:"email",autoComplete:"email",type:"email",name:"email",placeholder:"@",required:!0,onFocus:d}),p.jsx("label",{htmlFor:"email-subject",children:e.resources.Subject}),p.jsx("input",{type:"text",name:"_subject",id:"email-subject",placeholder:e.resources.Subject,required:!0,onFocus:d})]}),p.jsxs("div",{className:"message-container",children:[p.jsx("label",{htmlFor:"message",children:e.resources.Message}),p.jsx("div",{className:"textarea-container",children:p.jsx("textarea",{name:"message",id:"message",placeholder:e.resources.MessagePlaceholder,required:!0,onFocus:d})}),n.some(c=>c.type==="TEXT")&&p.jsx("p",{className:"error",children:n.find(c=>c.type==="TEXT")?.message})]}),n.some(c=>c.type==="CORRECT_FIELDS")&&p.jsx("p",{className:"error",children:n.find(c=>c.type==="CORRECT_FIELDS")?.message}),n.some(c=>c.type==="UNDEFINED")&&p.jsx("p",{className:"error",children:n.find(c=>c.type==="UNDEFINED")?.message})]}),p.jsxs("div",{className:"buttons-container",children:[e.showCloseButton&&p.jsx("button",{type:"button",id:"fs-frm-close-button",className:"button",disabled:t.submitting,children:e.resources.CloseButton}),p.jsxs("button",{type:"submit",id:"fs-frm-submit-button",className:"button",disabled:t.submitting,children:[!t.submitting&&e.resources.Submit,t.submitting&&p.jsx("div",{className:"dot-flashing"})]})]})]})]})};export{Ar as default};