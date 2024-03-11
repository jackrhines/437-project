(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he=globalThis,Ve=he.ShadowRoot&&(he.ShadyCSS===void 0||he.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,We=Symbol(),Ye=new WeakMap;let Ct=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==We)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ve&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=Ye.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Ye.set(t,e))}return e}toString(){return this.cssText}};const Ie=r=>new Ct(typeof r=="string"?r:r+"",void 0,We),b=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,n,i)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[i+1],r[0]);return new Ct(t,r,We)},hr=(r,e)=>{if(Ve)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),n=he.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=t.cssText,r.appendChild(s)}},Ze=Ve?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Ie(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ur,defineProperty:pr,getOwnPropertyDescriptor:fr,getOwnPropertyNames:gr,getOwnPropertySymbols:mr,getPrototypeOf:_r}=Object,C=globalThis,et=C.trustedTypes,vr=et?et.emptyScript:"",je=C.reactiveElementPolyfillSupport,X=(r,e)=>r,ge={toAttribute(r,e){switch(e){case Boolean:r=r?vr:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ge=(r,e)=>!ur(r,e),tt={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:Ge};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),C.litPropertyMetadata??(C.litPropertyMetadata=new WeakMap);class F extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=tt){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(e,s,t);n!==void 0&&pr(this.prototype,e,n)}}static getPropertyDescriptor(e,t,s){const{get:n,set:i}=fr(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return n==null?void 0:n.call(this)},set(o){const l=n==null?void 0:n.call(this);i.call(this,o),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??tt}static _$Ei(){if(this.hasOwnProperty(X("elementProperties")))return;const e=_r(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(X("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(X("properties"))){const t=this.properties,s=[...gr(t),...mr(t)];for(const n of s)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,n]of t)this.elementProperties.set(s,n)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const n=this._$Eu(t,s);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const n of s)t.unshift(Ze(n))}else e!==void 0&&t.push(Ze(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return hr(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t){var i;const s=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,s);if(n!==void 0&&s.reflect===!0){const o=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:ge).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){var i;const s=this.constructor,n=s._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const o=s.getPropertyOptions(n),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:ge;this._$Em=n,this[n]=l.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??Ge)(this[e],t))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$ET??(this._$ET=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,o]of n)o.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$E_)==null||s.forEach(n=>{var i;return(i=n.hostUpdate)==null?void 0:i.call(n)}),this.update(t)):this._$Ej()}catch(n){throw e=!1,this._$Ej(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(s=>{var n;return(n=s.hostUpdated)==null?void 0:n.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&(this._$ET=this._$ET.forEach(t=>this._$EO(t,this[t]))),this._$Ej()}updated(e){}firstUpdated(e){}}F.elementStyles=[],F.shadowRootOptions={mode:"open"},F[X("elementProperties")]=new Map,F[X("finalized")]=new Map,je==null||je({ReactiveElement:F}),(C.reactiveElementVersions??(C.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=globalThis,me=Y.trustedTypes,rt=me?me.createPolicy("lit-html",{createHTML:r=>r}):void 0,xt="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,Rt="?"+S,br=`<${Rt}>`,T=document,ee=()=>T.createComment(""),te=r=>r===null||typeof r!="object"&&typeof r!="function",Ut=Array.isArray,yr=r=>Ut(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Me=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,st=/>/g,M=RegExp(`>|${Me}(?:([^\\s"'>=/]+)(${Me}*=${Me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),it=/'/g,ot=/"/g,jt=/^(?:script|style|textarea|title)$/i,$r=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),f=$r(1),z=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),at=new WeakMap,D=T.createTreeWalker(T,129);function Mt(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return rt!==void 0?rt.createHTML(e):e}const wr=(r,e)=>{const t=r.length-1,s=[];let n,i=e===2?"<svg>":"",o=Q;for(let l=0;l<t;l++){const a=r[l];let c,d,h=-1,u=0;for(;u<a.length&&(o.lastIndex=u,d=o.exec(a),d!==null);)u=o.lastIndex,o===Q?d[1]==="!--"?o=nt:d[1]!==void 0?o=st:d[2]!==void 0?(jt.test(d[2])&&(n=RegExp("</"+d[2],"g")),o=M):d[3]!==void 0&&(o=M):o===M?d[0]===">"?(o=n??Q,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?M:d[3]==='"'?ot:it):o===ot||o===it?o=M:o===nt||o===st?o=Q:(o=M,n=void 0);const p=o===M&&r[l+1].startsWith("/>")?" ":"";i+=o===Q?a+br:h>=0?(s.push(c),a.slice(0,h)+xt+a.slice(h)+S+p):a+S+(h===-2?l:p)}return[Mt(r,i+(r[t]||"<?>")+(e===2?"</svg>":"")),s]};class re{constructor({strings:e,_$litType$:t},s){let n;this.parts=[];let i=0,o=0;const l=e.length-1,a=this.parts,[c,d]=wr(e,t);if(this.el=re.createElement(c,s),D.currentNode=this.el.content,t===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(n=D.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const h of n.getAttributeNames())if(h.endsWith(xt)){const u=d[o++],p=n.getAttribute(h).split(S),j=/([.?@])?(.*)/.exec(u);a.push({type:1,index:i,name:j[2],strings:p,ctor:j[1]==="."?Er:j[1]==="?"?Pr:j[1]==="@"?Sr:Se}),n.removeAttribute(h)}else h.startsWith(S)&&(a.push({type:6,index:i}),n.removeAttribute(h));if(jt.test(n.tagName)){const h=n.textContent.split(S),u=h.length-1;if(u>0){n.textContent=me?me.emptyScript:"";for(let p=0;p<u;p++)n.append(h[p],ee()),D.nextNode(),a.push({type:2,index:++i});n.append(h[u],ee())}}}else if(n.nodeType===8)if(n.data===Rt)a.push({type:2,index:i});else{let h=-1;for(;(h=n.data.indexOf(S,h+1))!==-1;)a.push({type:7,index:i}),h+=S.length-1}i++}}static createElement(e,t){const s=T.createElement("template");return s.innerHTML=e,s}}function B(r,e,t=r,s){var o,l;if(e===z)return e;let n=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl;const i=te(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==i&&((l=n==null?void 0:n._$AO)==null||l.call(n,!1),i===void 0?n=void 0:(n=new i(r),n._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=n:t._$Cl=n),n!==void 0&&(e=B(r,n._$AS(r,e.values),n,s)),e}class Ar{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,n=((e==null?void 0:e.creationScope)??T).importNode(t,!0);D.currentNode=n;let i=D.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new oe(i,i.nextSibling,this,e):a.type===1?c=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(c=new Or(i,this,e)),this._$AV.push(c),a=s[++l]}o!==(a==null?void 0:a.index)&&(i=D.nextNode(),o++)}return D.currentNode=T,n}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class oe{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,n){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=B(this,e,t),te(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==z&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):yr(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==m&&te(this._$AH)?this._$AA.nextSibling.data=e:this.$(T.createTextNode(e)),this._$AH=e}g(e){var i;const{values:t,_$litType$:s}=e,n=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=re.createElement(Mt(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===n)this._$AH.p(t);else{const o=new Ar(n,this),l=o.u(this.options);o.p(t),this.$(l),this._$AH=o}}_$AC(e){let t=at.get(e.strings);return t===void 0&&at.set(e.strings,t=new re(e)),t}T(e){Ut(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,n=0;for(const i of e)n===t.length?t.push(s=new oe(this.k(ee()),this.k(ee()),this,this.options)):s=t[n],s._$AI(i),n++;n<t.length&&(this._$AR(s&&s._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Se{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,n,i){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=m}_$AI(e,t=this,s,n){const i=this.strings;let o=!1;if(i===void 0)e=B(this,e,t,0),o=!te(e)||e!==this._$AH&&e!==z,o&&(this._$AH=e);else{const l=e;let a,c;for(e=i[0],a=0;a<i.length-1;a++)c=B(this,l[s+a],t,a),c===z&&(c=this._$AH[a]),o||(o=!te(c)||c!==this._$AH[a]),c===m?e=m:e!==m&&(e+=(c??"")+i[a+1]),this._$AH[a]=c}o&&!n&&this.O(e)}O(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Er extends Se{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===m?void 0:e}}class Pr extends Se{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}}class Sr extends Se{constructor(e,t,s,n,i){super(e,t,s,n,i),this.type=5}_$AI(e,t=this){if((e=B(this,e,t,0)??m)===z)return;const s=this._$AH,n=e===m&&s!==m||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==m&&(s===m||n);n&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Or{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}}const De=Y.litHtmlPolyfillSupport;De==null||De(re,oe),(Y.litHtmlVersions??(Y.litHtmlVersions=[])).push("3.1.1");const Cr=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let n=s._$litPart$;if(n===void 0){const i=(t==null?void 0:t.renderBefore)??null;s._$litPart$=n=new oe(e.insertBefore(ee(),i),i,void 0,t??{})}return n._$AI(r),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let v=class extends F{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Cr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return z}};var Ot;v._$litElement$=!0,v.finalized=!0,(Ot=globalThis.litElementHydrateSupport)==null||Ot.call(globalThis,{LitElement:v});const Te=globalThis.litElementPolyfillSupport;Te==null||Te({LitElement:v});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xr={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:Ge},Rr=(r=xr,e,t)=>{const{kind:s,metadata:n}=t;let i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),i.set(t.name,r),s==="accessor"){const{name:o}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,r)},init(l){return l!==void 0&&this.C(o,void 0,r),l}}}if(s==="setter"){const{name:o}=t;return function(l){const a=this[o];e.call(this,l),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+s)};function g(r){return(e,t)=>typeof t=="object"?Rr(r,e,t):((s,n,i)=>{const o=n.hasOwnProperty(i);return n.constructor.createProperty(i,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(n,i):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(r){return g({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Dt=class extends Event{constructor(e,t,s){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=s??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let lt=class{constructor(e,t,s,n){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(i,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=i,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(i,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const i=t;this.context=i.context,this.callback=i.callback,this.subscribe=i.subscribe??!1}else this.context=t,this.callback=s,this.subscribe=n??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Dt(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ur{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const s=t||!Object.is(e,this.o);this.o=e,s&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:s}]of this.subscriptions)t(this.o,s)},e!==void 0&&(this.value=e)}addCallback(e,t,s){if(!s)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:n}=this.subscriptions.get(e);e(this.value,n)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let jr=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class ct extends Ur{constructor(e,t,s){var n,i;super(t.context!==void 0?t.initialValue:s),this.onContextRequest=o=>{const l=o.composedPath()[0];o.context===this.context&&l!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,l,o.subscribe))},this.onProviderRequest=o=>{const l=o.composedPath()[0];if(o.context!==this.context||l===this.host)return;const a=new Set;for(const[c,{consumerHost:d}]of this.subscriptions)a.has(c)||(a.add(c),d.dispatchEvent(new Dt(this.context,c,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(i=(n=this.host).addController)==null||i.call(n,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new jr(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Tt({context:r}){return(e,t)=>{const s=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){s.set(this,new ct(this,{context:r}))}),{get(){return e.get.call(this)},set(n){var i;return(i=s.get(this))==null||i.setValue(n),e.set.call(this,n)},init(n){var i;return(i=s.get(this))==null||i.setValue(n),n}};{e.constructor.addInitializer(o=>{s.set(o,new ct(o,{context:r}))});const n=Object.getOwnPropertyDescriptor(e,t);let i;if(n===void 0){const o=new WeakMap;i={get:function(){return o.get(this)},set:function(l){s.get(this).setValue(l),o.set(this,l)},configurable:!0,enumerable:!0}}else{const o=n.set;i={...n,set:function(l){s.get(this).setValue(l),o==null||o.call(this,l)}}}return void Object.defineProperty(e,t,i)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Lt({context:r,subscribe:e}){return(t,s)=>{typeof s=="object"?s.addInitializer(function(){new lt(this,{context:r,callback:n=>{this[s.name]=n},subscribe:e})}):t.constructor.addInitializer(n=>{new lt(n,{context:r,callback:i=>{n[s]=i},subscribe:e})})}}let Mr=class extends v{constructor(e,t,s){super(),this.updateFn=e,this.getModel=t,this.setModel=s,this.addEventListener("mvu:message",n=>{const i=n.detail;console.log("Got message: ",i),this.receive(i)})}receive(e){const t=this.updateFn(this.getModel(),e),s=t;typeof(s==null?void 0:s.then)=="function"?s.then(n=>{const i=n(this.getModel());console.log("Updating model in Promise:",i),this.setModel(i)}):(console.log("Updating model:",t),this.setModel(t))}},Dr=class extends v{dispatchMessage(e,t=this){const s=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(s)}};class Tr{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:s}=t,n=this._handlers.get(s);return n?n(t,e):e}}function Lr(r){return e=>Object.assign({},e,r)}function Ir(r){return r}const Nr=window.location.origin,Hr="/api",Ne="JWT_AUTH_TOKEN",P=class P{constructor(){this.authenticated=!1,this.username="fellow_traveler",this.signOut=()=>{}}static deauthenticate(e){const t=new P;return console.log("Deauthenticating",e,P._theUser),e===P._theUser&&(localStorage.removeItem(Ne),P._theUser=t),t}};P._theUser=new P;let A=P;class ne extends A{constructor(e,t){super();const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(window.atob(n).split("").map(function(l){return"%"+("00"+l.charCodeAt(0).toString(16)).slice(-2)}).join("")),o=JSON.parse(i);console.log("Token payload",o),this.token=e,this.authenticated=!0,this.username=o.username,this.signOut=t}static authenticate(e,t){const s=new ne(e,t);return A._theUser=s,localStorage.setItem(Ne,e),s}static authenticateFromLocalStorage(e){const t=localStorage.getItem(Ne);return t?ne.authenticate(t,e):A._theUser}}class ae{constructor(e){this._base=Hr,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=A._theUser.authenticated,s={"Content-Type":"application/json"};if(t){const i={Authorization:`Bearer ${A._theUser.token}`};return e?{...s,...i}:i}else return e?{...s}:void 0}_url(e){return`${Nr}${this._base}${e}`}}class dt extends ae{constructor(e){super(Object.fromEntries(e))}}class Oe extends ae{constructor(){super(void 0)}}var Fr=Object.defineProperty,kr=Object.getOwnPropertyDescriptor,It=(r,e,t,s)=>{for(var n=s>1?void 0:s?kr(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Fr(e,t,n),n};const Nt="GalleryModel",zr={user:new A};class Ht extends Mr{constructor(e){super(e,()=>this.model,t=>this.model=t),this.model=zr}}It([Tt({context:Nt}),U()],Ht.prototype,"model",2);class V extends Dr{getFromModel(e){if(this._model)return this._model[e]}}It([Lt({context:Nt,subscribe:!0}),g({attribute:!1})],V.prototype,"_model",2);const Br=()=>new Tr,Ce=Lr,W=Ir,H=Br(),qr=H.update;H.addMessage("GallerySelected",()=>new Oe().get("/art/").then(r=>{if(r.status===200)return r.json()}).then(r=>{if(r)return console.log("Gallery:",r),r}).then(r=>r?Ce({gallery:r}):W));H.addMessage("ArtSelected",r=>{const{artId:e}=r;return new Oe().get(`/art/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Art:",t),t}).then(t=>t?Ce({art:t}):W)});H.addMessage("ArtSaved",r=>{const{artId:e,art:t}=r;return new ae(t).put(`/art/${e}`).then(s=>{if(s.status===200)return s.json()}).then(s=>{if(s)return console.log("Art:",t),s}).then(s=>s?n=>Object.assign({},n,{art:s}):W)});H.addMessage("ArtSubmitted",r=>{const{art:e}=r;return new ae(e).post("/art/").then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Art:",e),t}).then(t=>t?s=>Object.assign({},s,{art:t}):W)});H.addMessage("ProfileSelected",r=>{const{userid:e}=r;return new Oe().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?Ce({profile:t}):W)});H.addMessage("ProfileSaved",r=>{const{userid:e,profile:t}=r;return new ae(t).put(`/profiles/${e}`).then(s=>{if(s.status===200)return s.json()}).then(s=>{s&&console.log("Profile:",s)}).then(s=>s?Ce({profile:s}):W)});var Vr=Object.defineProperty,Wr=Object.getOwnPropertyDescriptor,xe=(r,e,t,s)=>{for(var n=s>1?void 0:s?Wr(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Vr(e,t,n),n};let Ft="auth",q=class extends v{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=ne.authenticateFromLocalStorage(()=>this._signOut())}isAuthenticated(){return this.user.authenticated}firstUpdated(){this._toggleDialog(!this.isAuthenticated()),this.isAuthenticated()&&this._dispatchUserLoggedIn(this.user)}render(){const r=f`
      <dialog>
        <form
          @submit=${this._handleLogin}
          @change=${()=>this.loginStatus=0}>
          <h2>Existing User</h2>
          <label>
            <span>Username</span>
            <input name="username" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="pwd" />
          </label>
          <button type="submit">Sign in</button>
          <p>
            ${this.loginStatus?`Login failed: ${this.loginStatus}`:""}
          </p>
        </form>
        <form
          @submit=${this._handleRegister}
          @change=${this.registerStatus=0}>
          <h2>New User</h2>
          <label>
            <span>Username</span>
            <input name="username" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="pwd" />
          </label>
          <button type="submit">Register</button>
          <p>
            ${this.registerStatus?`Signup failed: ${this.registerStatus}`:""}
          </p>
          <p></p>
        </form>
      </dialog>
    `;return f`
      ${this.isAuthenticated()?"":r}
      <slot></slot>
    `}_handleLogin(r){r.preventDefault();const e=r.target,t=new FormData(e);new dt(t).base().post("/login").then(n=>{if(n.status===200)return n.json();this.loginStatus=n.status}).then(n=>{if(n){console.log("Authentication:",n.token);const i=ne.authenticate(n.token,()=>this._signOut());this.user=i,this._toggleDialog(!1),this._dispatchUserLoggedIn(i),this.requestUpdate()}})}_dispatchUserLoggedIn(r){const e=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:{type:"UserLoggedIn",user:r}});this.dispatchEvent(e)}_handleRegister(r){r.preventDefault();const e=r.target,t=new FormData(e);new dt(t).base().post("/signup").then(n=>{if(n.status===200)return n.json();this.registerStatus=n.status}).then(n=>{console.log("Registration:",n)})}_toggleDialog(r){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(r?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=A.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};q.styles=b`
    :host {
      display: contents;
    }
    dialog {
      display: flex;
      gap: 4rem;
    }
    form {
      display: grid;
      grid-template-columns: [start] 1fr 2fr [end];
      align-items: baseline;
    }
    form > label {
      display: contents;
    }
    form > h2 {
      grid-column: start / end;
      text-align: center;
    }
    input,
    button {
      font: inherit;
      line-height: inherit;
      margin: 0.25em;
    }
    button {
      grid-column: 2;
    }
  `;xe([U()],q.prototype,"loginStatus",2);xe([U()],q.prototype,"registerStatus",2);xe([Tt({context:Ft}),U()],q.prototype,"user",2);q=xe([_("auth-required")],q);function _e(r){return r=r||[],Array.isArray(r)?r:[r]}function w(r){return`[Vaadin.Router] ${r}`}function Gr(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const ve="module",be="nomodule",He=[ve,be];function ht(r){if(!r.match(/.+\.[m]?js$/))throw new Error(w(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function kt(r){if(!r||!$(r.path))throw new Error(w('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!L(r.action)&&!Array.isArray(r.children)&&!L(r.children)&&!ye(e)&&!t.some(s=>$(r[s])))throw new Error(w(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if($(e))ht(e);else if(He.some(s=>s in e))He.forEach(s=>s in e&&ht(e[s]));else throw new Error(w('Expected route bundle to include either "'+be+'" or "'+ve+'" keys, or both'));r.redirect&&["bundle","component"].forEach(s=>{s in r&&console.warn(w(`Route config "${r.path}" has both "redirect" and "${s}" properties, and "redirect" will always override the latter. Did you mean to only use "${s}"?`))})}function ut(r){_e(r).forEach(e=>kt(e))}function pt(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===ve?t.setAttribute("type",ve):e===be&&t.setAttribute(be,""),t.async=!0),new Promise((s,n)=>{t.onreadystatechange=t.onload=i=>{t.__dynamicImportLoaded=!0,s(i)},t.onerror=i=>{t.parentNode&&t.parentNode.removeChild(t),n(i)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&s()})}function Jr(r){return $(r)?pt(r):Promise.race(He.filter(e=>e in r).map(e=>pt(r[e],e)))}function Z(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function ye(r){return typeof r=="object"&&!!r}function L(r){return typeof r=="function"}function $(r){return typeof r=="string"}function zt(r){const e=new Error(w(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const k=new class{};function Kr(r){const e=r.port,t=r.protocol,i=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${i}`}function ft(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let l=0;l<t.length;l++){const a=t[l];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Kr(e))!==window.location.origin)return;const{pathname:n,search:i,hash:o}=e;Z("go",{pathname:n,search:i,hash:o})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const Qr={activate(){window.document.addEventListener("click",ft)},inactivate(){window.document.removeEventListener("click",ft)}},Xr=/Trident/.test(navigator.userAgent);Xr&&!L(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function gt(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:s}=window.location;Z("go",{pathname:e,search:t,hash:s})}const Yr={activate(){window.addEventListener("popstate",gt)},inactivate(){window.removeEventListener("popstate",gt)}};var G=Jt,Zr=Je,en=sn,tn=Vt,rn=Gt,Bt="/",qt="./",nn=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Je(r,e){for(var t=[],s=0,n=0,i="",o=e&&e.delimiter||Bt,l=e&&e.delimiters||qt,a=!1,c;(c=nn.exec(r))!==null;){var d=c[0],h=c[1],u=c.index;if(i+=r.slice(n,u),n=u+d.length,h){i+=h[1],a=!0;continue}var p="",j=r[n],ir=c[2],or=c[3],ar=c[4],ce=c[5];if(!a&&i.length){var Ue=i.length-1;l.indexOf(i[Ue])>-1&&(p=i[Ue],i=i.slice(0,Ue))}i&&(t.push(i),i="",a=!1);var lr=p!==""&&j!==void 0&&j!==p,cr=ce==="+"||ce==="*",dr=ce==="?"||ce==="*",Qe=p||o,Xe=or||ar;t.push({name:ir||s++,prefix:p,delimiter:Qe,optional:dr,repeat:cr,partial:lr,pattern:Xe?on(Xe):"[^"+E(Qe)+"]+?"})}return(i||n<r.length)&&t.push(i+r.substr(n)),t}function sn(r,e){return Vt(Je(r,e))}function Vt(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(s,n){for(var i="",o=n&&n.encode||encodeURIComponent,l=0;l<r.length;l++){var a=r[l];if(typeof a=="string"){i+=a;continue}var c=s?s[a.name]:void 0,d;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(c.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var h=0;h<c.length;h++){if(d=o(c[h],a),!e[l].test(d))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');i+=(h===0?a.prefix:a.delimiter)+d}continue}if(typeof c=="string"||typeof c=="number"||typeof c=="boolean"){if(d=o(String(c),a),!e[l].test(d))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+d+'"');i+=a.prefix+d;continue}if(a.optional){a.partial&&(i+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return i}}function E(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function on(r){return r.replace(/([=!:$/()])/g,"\\$1")}function Wt(r){return r&&r.sensitive?"":"i"}function an(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var s=0;s<t.length;s++)e.push({name:s,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function ln(r,e,t){for(var s=[],n=0;n<r.length;n++)s.push(Jt(r[n],e,t).source);return new RegExp("(?:"+s.join("|")+")",Wt(t))}function cn(r,e,t){return Gt(Je(r,t),e,t)}function Gt(r,e,t){t=t||{};for(var s=t.strict,n=t.start!==!1,i=t.end!==!1,o=E(t.delimiter||Bt),l=t.delimiters||qt,a=[].concat(t.endsWith||[]).map(E).concat("$").join("|"),c=n?"^":"",d=r.length===0,h=0;h<r.length;h++){var u=r[h];if(typeof u=="string")c+=E(u),d=h===r.length-1&&l.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+E(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?c+=E(u.prefix)+"("+p+")?":c+="(?:"+E(u.prefix)+"("+p+"))?":c+=E(u.prefix)+"("+p+")"}}return i?(s||(c+="(?:"+o+")?"),c+=a==="$"?"$":"(?="+a+")"):(s||(c+="(?:"+o+"(?="+a+"))?"),d||(c+="(?="+o+"|"+a+")")),new RegExp(c,Wt(t))}function Jt(r,e,t){return r instanceof RegExp?an(r,e):Array.isArray(r)?ln(r,e,t):cn(r,e,t)}G.parse=Zr;G.compile=en;G.tokensToFunction=tn;G.tokensToRegExp=rn;const{hasOwnProperty:dn}=Object.prototype,Fe=new Map;Fe.set("|false",{keys:[],pattern:/(?:)/});function mt(r){try{return decodeURIComponent(r)}catch{return r}}function hn(r,e,t,s,n){t=!!t;const i=`${r}|${t}`;let o=Fe.get(i);if(!o){const c=[];o={keys:c,pattern:G(r,c,{end:t,strict:r===""})},Fe.set(i,o)}const l=o.pattern.exec(e);if(!l)return null;const a=Object.assign({},n);for(let c=1;c<l.length;c++){const d=o.keys[c-1],h=d.name,u=l[c];(u!==void 0||!dn.call(a,h))&&(d.repeat?a[h]=u?u.split(d.delimiter).map(mt):[]:a[h]=u&&mt(u))}return{path:l[0],keys:(s||[]).concat(o.keys),params:a}}function Kt(r,e,t,s,n){let i,o,l=0,a=r.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(c){if(r===c)return{done:!0};const d=r.__children=r.__children||r.children;if(!i&&(i=hn(a,e,!d,s,n),i))return{done:!1,value:{route:r,keys:i.keys,params:i.params,path:i.path}};if(i&&d)for(;l<d.length;){if(!o){const u=d[l];u.parent=r;let p=i.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=Kt(u,e.substr(p),t,i.keys,i.params)}const h=o.next(c);if(!h.done)return{done:!1,value:h.value};o=null,l++}return{done:!0}}}}function un(r){if(L(r.route.action))return r.route.action(r)}function pn(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function fn(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function gn(r,e){const{route:t,path:s}=e;if(t&&!t.__synthetic){const n={path:s,route:t};if(!r.chain)r.chain=[];else if(t.parent){let i=r.chain.length;for(;i--&&r.chain[i].route&&r.chain[i].route!==t.parent;)r.chain.pop()}r.chain.push(n)}}class se{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||un,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){ut(e);const t=[..._e(e)];this.root.__children=t}addRoutes(e){return ut(e),this.root.__children.push(..._e(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,$(e)?{pathname:e}:e),s=Kt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),n=this.resolveRoute;let i=null,o=null,l=t;function a(c,d=i.value.route,h){const u=h===null&&i.value.route;return i=o||s.next(u),o=null,!c&&(i.done||!pn(d,i.value.route))?(o=i,Promise.resolve(k)):i.done?Promise.reject(zt(t)):(l=Object.assign(l?{chain:l.chain?l.chain.slice(0):[]}:{},t,i.value),gn(l,i.value),Promise.resolve(n(l)).then(p=>p!=null&&p!==k?(l.result=p.result||p,l):a(c,d,p)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(c=>{const d=fn(l);if(c?console.warn(d):c=new Error(d),c.context=c.context||l,c instanceof DOMException||(c.code=c.code||500),this.errorHandler)return l.result=this.errorHandler(c),l;throw c})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,s=this.constructor.__createUrl(e,t).href;if(s.slice(0,t.length)===t)return s.slice(t.length)}}se.pathToRegexp=G;const{pathToRegexp:_t}=se,vt=new Map;function Qt(r,e,t){const s=e.name||e.component;if(s&&(r.has(s)?r.get(s).push(e):r.set(s,[e])),Array.isArray(t))for(let n=0;n<t.length;n++){const i=t[n];i.parent=e,Qt(r,i,i.__children||i.children)}}function bt(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function yt(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function mn(r,e={}){if(!(r instanceof se))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(s,n)=>{let i=bt(t,s);if(!i&&(t.clear(),Qt(t,r.root,r.root.__children),i=bt(t,s),!i))throw new Error(`Route "${s}" not found`);let o=vt.get(i.fullPath);if(!o){let a=yt(i),c=i.parent;for(;c;){const p=yt(c);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),c=c.parent}const d=_t.parse(a),h=_t.tokensToFunction(d),u=Object.create(null);for(let p=0;p<d.length;p++)$(d[p])||(u[d[p].name]=!0);o={toPath:h,keys:u},vt.set(a,o),i.fullPath=a}let l=o.toPath(n,e)||"/";if(e.stringifyQueryParams&&n){const a={},c=Object.keys(n);for(let h=0;h<c.length;h++){const u=c[h];o.keys[u]||(a[u]=n[u])}const d=e.stringifyQueryParams(a);d&&(l+=d.charAt(0)==="?"?d:`?${d}`)}return l}}let $t=[];function _n(r){$t.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),$t=r}const vn=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},bn=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function wt(r,e){return r.classList.add(e),new Promise(t=>{if(vn(r)){const s=r.getBoundingClientRect(),n=`height: ${s.bottom-s.top}px; width: ${s.right-s.left}px`;r.setAttribute("style",`position: absolute; ${n}`),bn(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const yn=256;function Le(r){return r!=null}function $n(r){const e=Object.assign({},r);return delete e.next,e}function y({pathname:r="",search:e="",hash:t="",chain:s=[],params:n={},redirectFrom:i,resolver:o},l){const a=s.map(c=>c.route);return{baseUrl:o&&o.baseUrl||"",pathname:r,search:e,hash:t,routes:a,route:l||a.length&&a[a.length-1]||null,params:n,redirectFrom:i,getUrl:(c={})=>pe(O.pathToRegexp.compile(Xt(a))(Object.assign({},n,c)),o)}}function At(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function wn(r,e){e.location=y(r);const t=r.chain.map(s=>s.route).indexOf(r.route);return r.chain[t].element=e,e}function ue(r,e,t){if(L(r))return r.apply(t,e)}function Et(r,e,t){return s=>{if(s&&(s.cancel||s.redirect))return s;if(t)return ue(t[r],e,t)}}function An(r,e){if(!Array.isArray(r)&&!ye(r))throw new Error(w(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=_e(r);for(let s=0;s<t.length;s++)kt(t[s]),e.__children.push(t[s])}function de(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function pe(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function Xt(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class O extends se{constructor(e,t){const s=document.head.querySelector("base"),n=s&&s.getAttribute("href");super([],Object.assign({baseUrl:n&&se.__createUrl(n,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const i=O.NavigationTrigger;O.setTriggers.apply(O,Object.keys(i).map(o=>i[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=y({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let s=Promise.resolve();L(t.children)&&(s=s.then(()=>t.children($n(e))).then(i=>{!Le(i)&&!L(t.children)&&(i=t.children),An(i,t)}));const n={redirect:i=>At(e,i),component:i=>{const o=document.createElement(i);return this.__createdByRouter.set(o,!0),o}};return s.then(()=>{if(this.__isLatestRender(e))return ue(t.action,[e,n],t)}).then(i=>{if(Le(i)&&(i instanceof HTMLElement||i.redirect||i===k))return i;if($(t.redirect))return n.redirect(t.redirect);if(t.bundle)return Jr(t.bundle).then(()=>{},()=>{throw new Error(w(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(i=>{if(Le(i))return i;if($(t.component))return n.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const s=++this.__lastStartedRenderId,n=Object.assign({search:"",hash:""},$(e)?{pathname:e}:e,{__renderId:s});return this.ready=this.resolve(n).then(i=>this.__fullyResolveChain(i)).then(i=>{if(this.__isLatestRender(i)){const o=this.__previousContext;if(i===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=y(i),t&&this.__updateBrowserHistory(i,s===1),Z("location-changed",{router:this,location:this.location}),i.__skipAttach)return this.__copyUnchangedElements(i,o),this.__previousContext=i,this.location;this.__addAppearingContent(i,o);const l=this.__animateIfNeeded(i);return this.__runOnAfterEnterCallbacks(i),this.__runOnAfterLeaveCallbacks(i,o),l.then(()=>{if(this.__isLatestRender(i))return this.__removeDisappearingContent(),this.__previousContext=i,this.location})}}).catch(i=>{if(s===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(n),de(this.__outlet&&this.__outlet.children),this.location=y(Object.assign(n,{resolver:this})),Z("error",Object.assign({router:this,error:i},n)),i}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(s=>{const i=s!==t?s:e,l=pe(Xt(s.chain),s.resolver)===s.pathname,a=(c,d=c.route,h)=>c.next(void 0,d,h).then(u=>u===null||u===k?l?c:d.parent!==null?a(c,d.parent,u):u:u);return a(s).then(c=>{if(c===null||c===k)throw zt(i);return c&&c!==k&&c!==s?this.__fullyResolveChain(i,c):this.__amendWithOnBeforeCallbacks(s)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(wn(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(s=>this.__findComponentContextAfterAllRedirects(s)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(w(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Gr(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},s=t.chain||[],n=e.chain;let i=Promise.resolve();const o=()=>({cancel:!0}),l=a=>At(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,s.length){for(let a=0;a<Math.min(s.length,n.length)&&!(s[a].route!==n[a].route||s[a].path!==n[a].path&&s[a].element!==n[a].element||!this.__isReusableElement(s[a].element,n[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=n.length===s.length&&e.__divergedChainIndex==n.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=n.length-1;a>=0;a--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:o},s[a]);for(let a=0;a<n.length;a++)i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:o,redirect:l},n[a]),s[a].element.location=y(e,s[a].route)}else for(let a=s.length-1;a>=e.__divergedChainIndex;a--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:o},s[a])}if(!e.__skipAttach)for(let a=0;a<n.length;a++)a<e.__divergedChainIndex?a<s.length&&s[a].element&&(s[a].element.location=y(e,s[a].route)):(i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:o,redirect:l},n[a]),n[a].element&&(n[a].element.location=y(e,n[a].route)));return i.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,s,n){const i=y(t);return e.then(o=>{if(this.__isLatestRender(t))return Et("onBeforeLeave",[i,s,this],n.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,s,n){const i=y(t,n.route);return e.then(o=>{if(this.__isLatestRender(t))return Et("onBeforeEnter",[i,s,this],n.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,s){if(t>yn)throw new Error(w(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:s})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(w(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:s=""},n){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==s){const i=n?"replaceState":"pushState";window.history[i](null,document.title,e+t+s),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let s=this.__outlet;for(let n=0;n<e.__divergedChainIndex;n++){const i=t&&t.chain[n].element;if(i)if(i.parentNode===s)e.chain[n].element=i,s=i;else break}return s}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const s=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(s.children).filter(i=>this.__addedByRouter.get(i)&&i!==e.result);let n=s;for(let i=e.__divergedChainIndex;i<e.chain.length;i++){const o=e.chain[i].element;o&&(n.appendChild(o),this.__addedByRouter.set(o,!0),n===s&&this.__appearingContent.push(o),n=o)}}__removeDisappearingContent(){this.__disappearingContent&&de(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(de(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let s=t.chain.length-1;s>=e.__divergedChainIndex&&this.__isLatestRender(e);s--){const n=t.chain[s].element;if(n)try{const i=y(e);ue(n.onAfterLeave,[i,{},t.resolver],n)}finally{this.__disappearingContent.indexOf(n)>-1&&de(n.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const s=e.chain[t].element||{},n=y(e,e.chain[t].route);ue(s.onAfterEnter,[n,{},e.resolver],s)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],s=(this.__appearingContent||[])[0],n=[],i=e.chain;let o;for(let l=i.length;l>0;l--)if(i[l-1].route.animate){o=i[l-1].route.animate;break}if(t&&s&&o){const l=ye(o)&&o.leave||"leaving",a=ye(o)&&o.enter||"entering";n.push(wt(t,l)),n.push(wt(s,a))}return Promise.all(n).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:s,hash:n}=e?e.detail:window.location;$(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:s,hash:n},!0))}static setTriggers(...e){_n(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=mn(this)),pe(this.__urlForName(e,t),this)}urlForPath(e,t){return pe(O.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:s,hash:n}=$(e)?this.__createUrl(e,"http://a"):e;return Z("go",{pathname:t,search:s,hash:n})}}const En=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,fe=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Pn(){function r(){return!0}return Yt(r)}function Sn(){try{return On()?!0:Cn()?fe?!xn():!Pn():!1}catch{return!1}}function On(){return localStorage.getItem("vaadin.developmentmode.force")}function Cn(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function xn(){return!!(fe&&Object.keys(fe).map(e=>fe[e]).filter(e=>e.productionMode).length>0)}function Yt(r,e){if(typeof r!="function")return;const t=En.exec(r.toString());if(t)try{r=new Function(t[1])}catch(s){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",s)}return r(e)}window.Vaadin=window.Vaadin||{};const Pt=function(r,e){if(window.Vaadin.developmentMode)return Yt(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Sn());function Rn(){}const Un=function(){if(typeof Pt=="function")return Pt(Rn)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Un();O.NavigationTrigger={POPSTATE:Yr,CLICK:Qr};var jn=Object.defineProperty,Mn=Object.getOwnPropertyDescriptor,Zt=(r,e,t,s)=>{for(var n=s>1?void 0:s?Mn(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&jn(e,t,n),n};let ke=class extends v{constructor(){super(...arguments),this.router=new O(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return f`<slot></slot>`}};Zt([g({attribute:!1})],ke.prototype,"routes",2);ke=Zt([_("vaadin-router")],ke);var Dn=Object.defineProperty,Tn=Object.getOwnPropertyDescriptor,er=(r,e,t,s)=>{for(var n=s>1?void 0:s?Tn(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Dn(e,t,n),n};let $e=class extends v{constructor(){super(...arguments),this.open=!1}render(){return f`
      <input
        type="checkbox"
        id="is-shown"
        @change=${this._handleChange}
        .checked=${this.open}
      />
      <label for="is-shown">
        <slot>Menu</slot>
      </label>
      <slot name="menu">
        <ul>
          <li>Command 1</li>
          <li>Command 2</li>
          <li>Command 3</li>
        </ul>
      </slot>
    `}_handleChange(r){const e=r.target;this._toggle(e==null?void 0:e.checked)}_toggle(r){this.open=r,this._toggleClickAway(r)}_toggleClickAway(r){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};r?document.addEventListener("click",e):document.removeEventListener("click",e)}};$e.styles=b`
        :host {
          display: inline-block;
          position: relative;
        }
    
        #is-shown {
          display: none;
        }
    
        label {
          cursor: pointer;
        }
    
        slot[name="menu"] {
          display: none;
          position: absolute;
          top: 100%;
          right: 0;
          border: 1px solid;
          background: var(--color-background-component);
        }
    
        #is-shown:checked ~ slot[name="menu"] {
          display: block;
        }
    
        /* CSS for slotted elements and default slot content */
    
        ::slotted(ul[slot="menu"]),
        slot[name="menu"] > ul {
          margin: 0;
          padding: 0.25em;
          list-style: none;
          white-space: nowrap;
        }
    `;er([g({reflect:!0,type:Boolean})],$e.prototype,"open",2);$e=er([_("drop-down")],$e);var Ln=Object.defineProperty,In=Object.getOwnPropertyDescriptor,Nn=(r,e,t,s)=>{for(var n=s>1?void 0:s?In(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Ln(e,t,n),n};let ze=class extends v{render(){return f`<h2>
            Hello <slot></slot>!
        </h2>`}};ze.styles=b`
        .fancy {
          font-family: var(--font-family-body);
          font-style: italic;
          color: var(--color-accent);
        }
    
        ::slotted(*) {
          display: inline;
        }`;ze=Nn([_("hello-world")],ze);var Hn=Object.defineProperty,Fn=Object.getOwnPropertyDescriptor,tr=(r,e,t,s)=>{for(var n=s>1?void 0:s?Fn(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Hn(e,t,n),n};let we=class extends v{constructor(){super(...arguments),this.on=!1}render(){return f`<label>
      <slot>Label</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(r){const e=r.target;this.on=e==null?void 0:e.checked,console.log(this.on);const t=document.body;this.on?t.style.background="dimgray":t.style.background="blanchedalmond"}};we.styles=b`
      :host {
        display: block;
      }
      label {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        gap: var(--size-spacing-medium);
        line-height: 2em;
      }
      .slider {
        display: inline-block;
        //border: 1px solid var(--color-border-control);
        border-radius: 0.75em;
        background-color: var(--color-background-control);
        height: 1.5em;
        width: 2.75em;
        position: relative;
        transition: background-color
        var(--time-transition-control);
      }
      .slider:has(input:checked) {
        background-color: var(--color-accent);
      }
      input {
        appearance: none;
        background-color: var(--color-foreground-control);
        border-radius: 50%;
        width: 1.25em;
        height: 1.25em;
        vertical-align: center;
        position: absolute;
        left: 0;
        transition: left var(--time-transition-control);
      }
      input:checked {
        left: 1.5em;
      }
    `;tr([g({reflect:!0,type:Boolean})],we.prototype,"on",2);we=tr([_("toggle-switch")],we);var kn=Object.defineProperty,zn=Object.getOwnPropertyDescriptor,rr=(r,e,t,s)=>{for(var n=s>1?void 0:s?zn(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&kn(e,t,n),n};let Ae=class extends v{get profile(){return this.using||{}}render(){return f`
            <dl class="column">
                <svg class="icon"><use href="/icons/gallery.svg#profile"/></svg>
                <hello-world>${this.profile.nickname}</hello-world>
                ${console.log("PANEL PROFILE",this.profile)}
                <a href="/app/profile/${this.profile.userid}">Profile</a>
                <a href="/app/submissions">Submissions</a>
                <a href="/app/favorites">Favorites</a>
                <hr />
                <toggle-switch>Dark Mode</toggle-switch>
            </dl>

        `}};Ae.styles=b`
      .column {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 1em;
      }
    `;rr([g({attribute:!1})],Ae.prototype,"using",2);Ae=rr([_("user-panel")],Ae);const Bn="body{line-height:1.5;box-sizing:content-box;margin:0;font-family:var(--font-body)}img{max-width:100%}body{background:var(--color-background-primary);font-family:var(--font-body);text-align:center}.dark-body,.light-body{background:var(--color-background-primary)}header{display:flex;background:var(--color-background-secondary);color:var(--color-text-standout);align-items:center;justify-content:space-between;padding:2em}.dark-header{background:var(--color-background-secondary-dark)}a{color:var(--color-background-secondary)}.gallery-heading{text-align:center;padding:2%}.gallery-display{display:flex;flex-direction:row;justify-content:space-evenly;align-content:center}.gallery-element{display:flex;flex-direction:column;justify-content:space-between}.see-more{display:flex;text-align:center;justify-content:center;padding:2%}.white-text{color:#000}h1,h2,h3,h4,h5,h6{font-family:var(--font-heading)}svg.icon{display:inline;height:2em;width:2em;vertical-align:top;fill:currentColor}",qn=':root{--color-background-primary: blanchedalmond;--color-background-secondary: #b298e5;--color-background-primary-dark: dimgray;--color-background-secondary-dark: #7845dc;--color-text-standout: black;--color-background-component: #fdc5c5;--color-accent: var(--color-background-secondary);--color-background-control: #ccc;--color-foreground-control: #fff;--font-body: "Quicksand", sans-serif;--font-heading: "Ubuntu", sans-serif;--size-icon-small: 1em;--size-icon-medium: 2em;--size-icon-large: 4rem;--size-spacing-small: .25rem;--size-spacing-medium: .5rem;--size-spacing-large: 1rem;--size-spacing-xlarge: 2rem;--size-corner-small: 2px;--size-corner-medium: var(--size-spacing-small);--size-corner-large: var(--size-spacing-medium);--size-type-body: 1rem;--size-type-mlarge: 1.25rem;--size-type-large: 1.5rem;--size-type-xlarge: 2rem;--size-type-xxlarge: 2.5rem;--time-transition-control: .3s}';var Vn=Object.defineProperty,Wn=Object.getOwnPropertyDescriptor,Ke=(r,e,t,s)=>{for(var n=s>1?void 0:s?Wn(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Vn(e,t,n),n};let ie=class extends v{constructor(){super(...arguments),this.user=new A}render(){return f`
            <header>
            <a href="/app/" class="no-styling"><h1 class="extra-padding">The Gallery</h1></a>
            <drop-down>
                ${this.renderAvatar()}
<!--                <svg class="icon"><use href="/icons/gallery.svg#profile"/></svg>-->
                <ul slot="menu">
                    <li>
                        <user-panel .using=${this.profile}></user-panel>
                    </li>
                    <li><hr /></li>
                    <li>
                        <button @click=${this._signOut}>
                            Sign Out
                        </button>
                    </li>
                </ul>
            </drop-down>
            </header>
        `}renderAvatar(){const{avatar:r,name:e,nickname:t,color:s}=this.profile||{},n=r,i=n?f`<img id="avatarImg" src="${n}" />`:(t||e||" ").slice(0,1),o=s?`--avatar-backgroundColor: ${s}`:"";return f` <div class="avatar" style=${o}>
        ${i}
    </div>`}updated(r){if(console.log("Profile Data has been updated",r,"profile now:",this.profile),r.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}_getData(r){new Oe().get(r).then(t=>t.status===200?t.json():null).then(t=>{console.log("Profile (get data, header):",t),this.profile=t,console.log("profile after update:",this.profile)})}_signOut(){console.log("Signout"),this.user.signOut()}};ie.styles=[Ie(Bn),Ie(qn),b`
      header {
        display: flex;
        background: var(--color-background-secondary);
        color: var(--color-text-standout);
        align-items: center;
        justify-content: space-between;
        padding: 2em;
      }

      svg.icon {
        display: inline;
        height: 3em;
        width: 3em;
        vertical-align: top;
        fill: currentColor;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-heading);
      }
      
      .no-styling {
        text-decoration: none;
        color: var(--color-text-standout)
      }

        .avatar {
          grid-column: key;
          grid-row: auto/span 2;
          justify-self: end;
          position: relative;
          width: 80px;
          aspect-ratio: 1;
          background-color: var(--avatar-backgroundColor);
          border-radius: 50%;
          text-align: center;
          line-height: var(--avatar-size);
          font-size: calc(0.66 * var(--avatar-size));
          font-family: var(--font-family-display);
          color: var(--color-link-inverted);
          overflow: hidden;
        }
    `];Ke([U()],ie.prototype,"profile",2);Ke([Lt({context:Ft,subscribe:!0}),g({attribute:!1})],ie.prototype,"user",2);ie=Ke([_("site-header")],ie);var Gn=Object.defineProperty,Jn=Object.getOwnPropertyDescriptor,Kn=(r,e,t,s)=>{for(var n=s>1?void 0:s?Jn(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Gn(e,t,n),n};let Be=class extends v{render(){return f`
            <footer class="gallery-display" id="toolbar">
                <section>
                    <h2>Looking for something else?</h2>
                    <a class="white-text" href="/app/gallery">
                        <svg class="icon">
                            <use href="/icons/gallery.svg#easel-icon" />
                        </svg>See more categories
                    </a>
                </section>

                <section>
                    <h2>Submit your own artwork</h2>
                    <a class="white-text" href="/app/submit-art">
                        <svg class="icon">
                            <use href="/icons/gallery.svg#easel-icon" />
                        </svg>It's easy</a>
                </section>
            </footer>
        `}};Be.styles=b`
      footer {
        display: flex;
        background: var(--color-background-secondary);
        color: var(--color-text-standout);
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        padding: 2em;
      }

      svg.icon {
        display: inline;
        height: 3em;
        width: 3em;
        vertical-align: top;
        fill: currentColor;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-heading);
      }
      
      a {
        color: var(--color-text-standout)
      }
    `;Be=Kn([_("site-footer")],Be);var Qn=Object.defineProperty,Xn=Object.getOwnPropertyDescriptor,Re=(r,e,t,s)=>{for(var n=s>1?void 0:s?Xn(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Qn(e,t,n),n};let I=class extends V{get profile(){return this.using||{}}render(){const{userid:r,name:e,nickname:t,city:s,genres:n=[],mediums:i=[],artists:o=[]}=this.profile,l=a=>f`<dd>${a}</dd>`;return f`
        <section>
            ${this.renderAvatar()}
            <a href="?edit=t">Edit</a>
            <h1>${e}</h1>
            <dl>
                <dt>Username</dt>
                <dd>${r}</dd>
                <dt>Nickname</dt>
                <dd>${t}</dd>
                <dt>Home City</dt>
                <dd>${s}</dd>
                <dt>Genres</dt>
                ${n.map(l)}
                <dt>Mediums</dt>
                ${i.map(l)}
                <dt>Artists</dt>
                ${o.map(l)}
            </dl>
        </section>
    `}renderAvatar(){const{avatar:r,name:e,nickname:t,color:s}=this.profile||{},n=this.newAvatar||r,i=n?f`<img id="avatarImg" src="${n}" />`:(t||e||" ").slice(0,1),o=s?`--avatar-backgroundColor: ${s}`:"";return f` <div class="avatar" style=${o}>
        ${i}
    </div>`}};I.styles=[b`
      :host {
        --avatar-backgroundColor: var(--color-accent);
        --avatar-size: 100px;
        padding: var(--size-spacing-medium);
      }
      section {
        display: grid;
        grid-template-columns: [key] 1fr [value] 2fr [end];
        gap: var(--size-spacing-xlarge);
        align-items: end;
      }
      h1 {
        grid-column: value;
      }
      dl {
        display: grid;
        grid-column: key / end;
        grid-template-columns: subgrid;
        gap: 0 var(--size-spacing-xlarge);
        align-items: baseline;
      }
      dt {
        grid-column: key;
        justify-self: end;
        color: var(--color-accent);
        font-family: var(--font-family-display);
      }
      dd {
        grid-column: value;
      }
      .avatar {
        grid-column: key;
        grid-row: auto/span 2;
        justify-self: end;
        position: relative;
        width: 100px;
        aspect-ratio: 1;
        background-color: var(--avatar-backgroundColor);
        border-radius: 50%;
        text-align: center;
        line-height: var(--avatar-size);
        font-size: calc(0.66 * var(--avatar-size));
        font-family: var(--font-family-display);
        color: var(--color-link-inverted);
        overflow: hidden;
      }
      .name {
        width: 100%;
        font-family: var(--font-family-display);
        color: var(--color-accent);
      }
      img {
        width: 100%;
      }
    `];Re([g({attribute:!1})],I.prototype,"using",2);Re([U()],I.prototype,"newAvatar",2);I=Re([_("user-profile")],I);let qe=class extends I{render(){const r=this.profile||{},{userid:e,name:t,nickname:s,city:n,genres:i=[],artists:o=[],mediums:l=[]}=r;return console.log("Rendering form",this.profile),f`
        <section>
            <form @submit=${this._handleSubmit}>
                <dl>
                    <dt>Username</dt>
                    <dd
                    ><input name="userid" disabled .value=${e}
                    /></dd>
                    <dt>Avatar</dt>
                    <dd>${this.renderAvatar()}</dd>
                    <dd>
                        <input
                          name="avatar"
                          type="file" 
                          @change=${this._handleAvatarSelected} />
                    </dd>
                    <dt>Name</dt>
                    <dd><input name="name" .value=${t} /></dd>
                    <dt>Nickname</dt>
                    <dd
                    ><input name="nickname" .value=${s}
                    /></dd>
                    <dt>Home City</dt>
                    <dd><input name="city" .value=${n} /></dd>
                    <dt>Airports</dt>
                    <dd>
                        <input
                                name="genres"
                                .value=${i.join(", ")}
                        />
                    </dd>
                    <dd>
                        <input
                                name="mediums"
                                .value=${l.join(", ")}
                        />
                    </dd>
                    <dd>
                        <input
                                name="artists"
                                .value=${o.join(", ")}
                        />
                    </dd>

                </dl>
                <button type="submit">Submit</button>
            </form>
        </section>
    `}_handleAvatarSelected(r){const t=r.target.files[0];new Promise((n,i)=>{const o=new FileReader;o.onload=()=>n(o.result),o.onerror=l=>i(l),o.readAsDataURL(t)}).then(n=>this.newAvatar=n)}_handleSubmit(r){var e;if(r.preventDefault(),this.profile){const t=r.target,s=new FormData(t);let n=Array.from(s.entries()).map(([o,l])=>l===""?[o]:[o,l]).map(([o,l])=>o==="genres"||o==="mediums"?[o,l.split(",").map(a=>a.trim())]:[o,l]);this.newAvatar&&n.push(["avatar",this.newAvatar]);const i=Object.fromEntries(n);console.log("Submitting Form",i),this.dispatchMessage({type:"ProfileSaved",userid:(e=this.profile)==null?void 0:e.userid,profile:i})}}};qe.styles=[...I.styles,b`
      form {
        display: contents;
      }
      button {
        grid-column: value;
        width: 10em;
      }
      input {
        font: inherit;
      }
    `];qe=Re([_("user-profile-edit")],qe);var Yn=Object.defineProperty,Zn=Object.getOwnPropertyDescriptor,le=(r,e,t,s)=>{for(var n=s>1?void 0:s?Zn(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Yn(e,t,n),n};let N=class extends V{get userid(){var r;return(r=this.location)==null?void 0:r.params.userid}get edit(){return this.location?new URL(document.location.toString()).searchParams.has("edit"):!1}get profile(){return this.getFromModel("profile")}attributeChangedCallback(r,e,t){r==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(r,e,t)}render(){return f`
      <main class="page">
        ${this.edit?f`
              <user-profile-edit .using=${this.profile}>
              </user-profile-edit>
            `:f`
              <user-profile .using=${this.profile}>
              </user-profile>
            `}
      </main>
    `}};N.styles=b`
      :host {
        display: contents;
      }
    `;le([g({attribute:!1})],N.prototype,"location",2);le([g({reflect:!0})],N.prototype,"userid",1);le([g({reflect:!0})],N.prototype,"edit",1);le([g()],N.prototype,"profile",1);N=le([_("profile-page")],N);var es=Object.defineProperty,ts=Object.getOwnPropertyDescriptor,J=(r,e,t,s)=>{for(var n=s>1?void 0:s?ts(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&es(e,t,n),n};let x=class extends v{constructor(){super(...arguments),this.src="",this.url="/app",this.title="",this.artist="",this.kudos=0}render(){return f`
            <div class="card" href=${this.url}>
                <a href=${this.url}>
                    <img src=${this.src} alt=${this.title} width="200" height="200" />
                    <div class="container">
                        <strong>${this.title}</strong>
                        <p>${this.artist}</p>
<!--                        <i>${this.kudos} kudos</i>-->
                    </div>
                </a>

            </div>
        `}};x.styles=b`
      .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 200px;
        padding-bottom: 0.5em;
        background: var(--color-background-secondary);
        border-radius: 5px;
      }
      
      .card:hover {
        box-shadow: 0 16px 24px 0 rgba(0,0,0,0.5);
      }
      
      .container {
        padding: 2px 16px;
        display: flex;
        flex-direction: column;
      }
      
      a {
        text-decoration: none;
        color: black;
      }
      
      p {
        margin: 0;
      }

      img {
        border-radius: 5px 5px 0 0;
        background: white;
      }
    `;J([g()],x.prototype,"src",2);J([g()],x.prototype,"url",2);J([g()],x.prototype,"title",2);J([g()],x.prototype,"artist",2);J([g()],x.prototype,"kudos",2);x=J([_("art-card")],x);var rs=Object.defineProperty,ns=Object.getOwnPropertyDescriptor,nr=(r,e,t,s)=>{for(var n=s>1?void 0:s?ns(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&rs(e,t,n),n};let Ee=class extends V{connectedCallback(){console.log("GalleryPage Callback"),this.dispatchMessage({type:"GallerySelected"}),super.connectedCallback()}get gallery(){return console.log("get gallery!"),this.getFromModel("gallery")}render(){return f`
      <h2 class="gallery-heading">Best of the Week</h2>
      <section class="gallery-display" id="top-submissions">
          ${this.gallery?this.gallery.map(r=>f`
            <art-card
                src="${r.image}"
                url="/app/art/${r.artId}"
                title="${r.title}"
                artist="${r.artist}"
            ></art-card>`):""}
          <art-card
                  src="/art/desert-sunset.jpg"
                  url="/app/desert-sunset.html"
                  title="Desert Sunset"
                  artist="Joel Embiid">
          </art-card>
          <art-card
                  src="/art/track-star.jpg"
                  url="/app/desert-sunset.html"
                  title="Track Star"
                  artist="Joel Embiid">
          </art-card>
          <art-card
                  src="/art/Fireball.jpg"
                  url="/app/desert-sunset.html"
                  title="Fireball"
                  artist="Joel Embiid">
          </art-card>
      </section>
    `}};Ee.styles=b`
    .gallery-heading {
      text-align: center;
      padding: 2%;
    }

    .gallery-display {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-content: center;
      padding: 1rem;
      flex-wrap: wrap;
      row-gap: 1em;
      column-gap: 1em;
    }

    .gallery-element {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  `;nr([g({reflect:!0})],Ee.prototype,"gallery",1);Ee=nr([_("gallery-page")],Ee);var ss=Object.defineProperty,is=Object.getOwnPropertyDescriptor,sr=(r,e,t,s)=>{for(var n=s>1?void 0:s?is(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&ss(e,t,n),n};let Pe=class extends V{constructor(){super(...arguments),this.image=""}render(){return f`
      <h2 class="gallery-heading">Submit Art</h2>
      <form @submit=${this._handleSubmit}>
            <dl>
              <dt>Title</dt>
              <dd><input name="title" .value="" /></dd>
              <dt>Artist</dt>
              <dd><input name="artist" .value="" /></dd>
              <dt>Description</dt>
              <dd><input name="description" .value="" /></dd>
              <dt>Genres</dt>
              <dd><input name="genres" .value="" /></dd>
              <dt>Mediums</dt>
              <dd><input name="mediums" .value="" /></dd>
              <dt>Image</dt>
              <dd>
                <input
                  type="file"
                  @change=${this._handleFileSelected} />
              </dd>
            </dl>
            <button type="submit">Submit</button>
            <a href=${window.location.pathname.split("?")[0]}>
              Done
            </a>
          </form>
    `}_handleSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e);let s=Array.from(t.entries()).map(([i,o])=>o===""?[i]:[i,o]);s.push(["image",this.image||""]);const n=Object.assign(Object.fromEntries(s),{location});console.log("Submitting Form",n),this.dispatchMessage({type:"ArtSubmitted",art:n})}_handleFileSelected(r){const t=r.target.files[0];new Promise((n,i)=>{const o=new FileReader;o.onload=()=>n(o.result),o.onerror=l=>i(l),o.readAsArrayBuffer(t)}).then(n=>{const{name:i,size:o,type:l}=t,a=new URLSearchParams({filename:i}),c=new URL("/images",document.location.origin);c.search=a.toString(),console.log("Uploading file:",t),fetch(c,{method:"POST",headers:{"Content-Type":l,"Content-Length":o.toString()},body:n}).then(d=>{if(d.status===201)return d.json();throw d.status}).then(d=>{if(d)console.log("Image has been uploaded to",d.url),this.image=d.url;else throw"No JSON response"}).catch(d=>{console.log("Upload failed",d)})})}};Pe.styles=b`

  `;sr([U()],Pe.prototype,"image",2);Pe=sr([_("submit-art-page")],Pe);var os=Object.defineProperty,as=Object.getOwnPropertyDescriptor,K=(r,e,t,s)=>{for(var n=s>1?void 0:s?as(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&os(e,t,n),n};let R=class extends V{constructor(){var r;super(...arguments),this.image=(r=this.art)==null?void 0:r.image}get artId(){var r;return(r=this.location)==null?void 0:r.params.artId}get edit(){var r;return(r=this.location)!=null&&r.search?(console.log("Checking for edit",this.location),new URLSearchParams(this.location.search).has("edit")):!1}get art(){return this.getFromModel("art")}attributeChangedCallback(r,e,t){r==="artId"&&e!==t&&t&&(console.log("Art Page:",t),this.dispatchMessage({type:"ArtSelected",artId:t})),super.attributeChangedCallback(r,e,t)}render(){var c;const{title:r,artist:e,description:t,image:s,genres:n=[],mediums:i=[]}=this.art,o=(c=this.art)==null?void 0:c.title,l=this.image||s;return console.log("Art:",this.art),f`
        <p>is it getting here at all??</p>
      <main class="page">${this.edit?f`
          <form @submit=${this._handleSubmit}>
            <dl>
              <dt>Title</dt>
              <dd><input name="title" .value=${r} /></dd>
              <dt>Artist</dt>
              <dd><input name="artist" .value=${e} /></dd>
              <dt>Description</dt>
              <dd><input name="description" .value=${t} /></dd>
              <dt>Genres</dt>
              <dd><input name="genres" .value=${n.join(", ")} /></dd>
              <dt>Mediums</dt>
              <dd><input name="mediums" .value=${i.join(", ")} /></dd>
              <dt>Image</dt>
              <dd>
                <input
                  type="file"
                  @change=${this._handleFileSelected} />
              </dd>
              <dd>
                <img src=${l} />
              </dd>
            </dl>
            <button type="submit">Submit</button>
            <a href=${window.location.pathname.split("?")[0]}>
              Done
            </a>
          </form>
        `:f`
          <header>
            <a class="breadcrumb" href="/app/${this.artId}">
              ${o}
            </a>
            <h2>${r}</h2>
            <p>${t}</p>
              <img src=${l} />
              <a href="?edit=t">Edit</a>
          </header>
          <div class="hero">
            <img src=${l} />
          </div>
        `}</main>
    `}_handleSubmit(r){if(r.preventDefault(),this.art&&this.artId){const e=r.target,t=new FormData(e);let s=Array.from(t.entries()).map(([i,o])=>o===""?[i]:[i,o]);s.push(["image",this.image||this.art.image||""]);const n=Object.assign(Object.fromEntries(s),{location});console.log("Submitting Form",n),this.dispatchMessage({type:"ArtSaved",artId:this.artId,art:n})}}_handleFileSelected(r){const t=r.target.files[0];new Promise((n,i)=>{const o=new FileReader;o.onload=()=>n(o.result),o.onerror=l=>i(l),o.readAsArrayBuffer(t)}).then(n=>{const{name:i,size:o,type:l}=t,a=new URLSearchParams({filename:i}),c=new URL("/images",document.location.origin);c.search=a.toString(),console.log("Uploading file:",t),fetch(c,{method:"POST",headers:{"Content-Type":l,"Content-Length":o.toString()},body:n}).then(d=>{if(d.status===201)return d.json();throw d.status}).then(d=>{if(d)console.log("Image has been uploaded to",d.url),this.image=d.url;else throw"No JSON response"}).catch(d=>{console.log("Upload failed",d)})})}};R.styles=b`
      .page {
        --page-grids: 8;

        display: grid;
        grid-template-columns: repeat(var(--page-grids), 1fr);
        gap: var(--size-spacing-medium);
      }
      .page > header {
        grid-column: 1 / span 3;
      }
      .page > .hero {
        grid-column: span min(5, var(--page-grids)) / -1;
      }
      .page > .excursions {
        display: contents;
        list-style: none;
        padding: 0;
      }
      .excursions > * {
        grid-column: auto / span 2;
      }
      @media screen and (max-width: 50rem) {
        .page {
          --page-grids: 4;
        }
      }
      @media screen and (max-width: 30rem) {
        .page {
          --page-grids: 2;
        }
      }
      @media screen and (min-width: 75rem) and (max-width: 100rem) {
        .page {
          --page-grids: 12;
        }
        .page > .hero {
          grid-column-start: span 8;
          grid-row: auto / span 2;
        }
      }
      @media screen and (min-width: 100rem) {
        .page {
          --page-grids: 16;
        }
        .page > .hero {
          grid-column: 5 / span 8;
          grid-row: auto / span 3;
        }
      }
    `;K([g({attribute:!1})],R.prototype,"location",2);K([g({attribute:"artId",reflect:!0})],R.prototype,"artId",1);K([g({reflect:!0})],R.prototype,"edit",1);K([g()],R.prototype,"art",1);K([U()],R.prototype,"image",2);R=K([_("art-page")],R);const ls=[{path:"/app/profile/:userid",component:"profile-page"},{path:"/app/art/:artid",component:"art-page"},{path:"/app/submit-art",component:"submit-art-page"},{path:"/app",component:"gallery-page"},{path:"(.*)",redirect:"/app"}];var cs=Object.defineProperty,ds=Object.getOwnPropertyDescriptor,hs=(r,e,t,s)=>{for(var n=s>1?void 0:s?ds(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&cs(e,t,n),n};let St=class extends Ht{constructor(){super(qr)}render(){return f`
<!--        <body>-->
<!--            <site-header></site-header>-->
<!--            <p>hello</p>-->
<!--        </body>-->
        
        <auth-required>
            <site-header></site-header>
<!--            <p>gallery app renders</p>-->
            <vaadin-router .routes=${ls}> </vaadin-router>
            <site-footer></site-footer>
        </auth-required>
    `}};St=hs([_("gallery-app")],St);
