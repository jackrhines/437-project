(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=globalThis,Ne=ie.ShadowRoot&&(ie.ShadyCSS===void 0||ie.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ie=Symbol(),We=new WeakMap;let wt=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==Ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ne&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=We.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&We.set(t,e))}return e}toString(){return this.cssText}};const Ce=r=>new wt(typeof r=="string"?r:r+"",void 0,Ie),b=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,n,i)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[i+1],r[0]);return new wt(t,r,Ie)},or=(r,e)=>{if(Ne)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),n=ie.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=t.cssText,r.appendChild(s)}},Ke=Ne?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Ce(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ar,defineProperty:lr,getOwnPropertyDescriptor:cr,getOwnPropertyNames:hr,getOwnPropertySymbols:dr,getPrototypeOf:ur}=Object,C=globalThis,Ge=C.trustedTypes,pr=Ge?Ge.emptyScript:"",Ee=C.reactiveElementPolyfillSupport,W=(r,e)=>r,ce={toAttribute(r,e){switch(e){case Boolean:r=r?pr:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},He=(r,e)=>!ar(r,e),Je={attribute:!0,type:String,converter:ce,reflect:!1,hasChanged:He};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),C.litPropertyMetadata??(C.litPropertyMetadata=new WeakMap);class N extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Je){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(e,s,t);n!==void 0&&lr(this.prototype,e,n)}}static getPropertyDescriptor(e,t,s){const{get:n,set:i}=cr(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return n==null?void 0:n.call(this)},set(o){const l=n==null?void 0:n.call(this);i.call(this,o),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Je}static _$Ei(){if(this.hasOwnProperty(W("elementProperties")))return;const e=ur(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(W("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(W("properties"))){const t=this.properties,s=[...hr(t),...dr(t)];for(const n of s)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,n]of t)this.elementProperties.set(s,n)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const n=this._$Eu(t,s);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const n of s)t.unshift(Ke(n))}else e!==void 0&&t.push(Ke(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return or(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t){var i;const s=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,s);if(n!==void 0&&s.reflect===!0){const o=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:ce).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){var i;const s=this.constructor,n=s._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const o=s.getPropertyOptions(n),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:ce;this._$Em=n,this[n]=l.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??He)(this[e],t))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$ET??(this._$ET=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,o]of n)o.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$E_)==null||s.forEach(n=>{var i;return(i=n.hostUpdate)==null?void 0:i.call(n)}),this.update(t)):this._$Ej()}catch(n){throw e=!1,this._$Ej(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(s=>{var n;return(n=s.hostUpdated)==null?void 0:n.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&(this._$ET=this._$ET.forEach(t=>this._$EO(t,this[t]))),this._$Ej()}updated(e){}firstUpdated(e){}}N.elementStyles=[],N.shadowRootOptions={mode:"open"},N[W("elementProperties")]=new Map,N[W("finalized")]=new Map,Ee==null||Ee({ReactiveElement:N}),(C.reactiveElementVersions??(C.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=globalThis,he=K.trustedTypes,Qe=he?he.createPolicy("lit-html",{createHTML:r=>r}):void 0,Et="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,At="?"+O,fr=`<${At}>`,T=document,J=()=>T.createComment(""),Q=r=>r===null||typeof r!="object"&&typeof r!="function",Pt=Array.isArray,gr=r=>Pt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Ae=`[ 	
\f\r]`,V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xe=/-->/g,Ye=/>/g,U=RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ze=/'/g,et=/"/g,Ot=/^(?:script|style|textarea|title)$/i,mr=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),f=mr(1),H=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),tt=new WeakMap,j=T.createTreeWalker(T,129);function St(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qe!==void 0?Qe.createHTML(e):e}const _r=(r,e)=>{const t=r.length-1,s=[];let n,i=e===2?"<svg>":"",o=V;for(let l=0;l<t;l++){const a=r[l];let c,h,d=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===V?h[1]==="!--"?o=Xe:h[1]!==void 0?o=Ye:h[2]!==void 0?(Ot.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=U):h[3]!==void 0&&(o=U):o===U?h[0]===">"?(o=n??V,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,c=h[1],o=h[3]===void 0?U:h[3]==='"'?et:Ze):o===et||o===Ze?o=U:o===Xe||o===Ye?o=V:(o=U,n=void 0);const p=o===U&&r[l+1].startsWith("/>")?" ":"";i+=o===V?a+fr:d>=0?(s.push(c),a.slice(0,d)+Et+a.slice(d)+O+p):a+O+(d===-2?l:p)}return[St(r,i+(r[t]||"<?>")+(e===2?"</svg>":"")),s]};class X{constructor({strings:e,_$litType$:t},s){let n;this.parts=[];let i=0,o=0;const l=e.length-1,a=this.parts,[c,h]=_r(e,t);if(this.el=X.createElement(c,s),j.currentNode=this.el.content,t===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=j.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(Et)){const u=h[o++],p=n.getAttribute(d).split(O),R=/([.?@])?(.*)/.exec(u);a.push({type:1,index:i,name:R[2],strings:p,ctor:R[1]==="."?br:R[1]==="?"?yr:R[1]==="@"?$r:ve}),n.removeAttribute(d)}else d.startsWith(O)&&(a.push({type:6,index:i}),n.removeAttribute(d));if(Ot.test(n.tagName)){const d=n.textContent.split(O),u=d.length-1;if(u>0){n.textContent=he?he.emptyScript:"";for(let p=0;p<u;p++)n.append(d[p],J()),j.nextNode(),a.push({type:2,index:++i});n.append(d[u],J())}}}else if(n.nodeType===8)if(n.data===At)a.push({type:2,index:i});else{let d=-1;for(;(d=n.data.indexOf(O,d+1))!==-1;)a.push({type:7,index:i}),d+=O.length-1}i++}}static createElement(e,t){const s=T.createElement("template");return s.innerHTML=e,s}}function k(r,e,t=r,s){var o,l;if(e===H)return e;let n=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl;const i=Q(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==i&&((l=n==null?void 0:n._$AO)==null||l.call(n,!1),i===void 0?n=void 0:(n=new i(r),n._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=n:t._$Cl=n),n!==void 0&&(e=k(r,n._$AS(r,e.values),n,s)),e}class vr{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,n=((e==null?void 0:e.creationScope)??T).importNode(t,!0);j.currentNode=n;let i=j.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new te(i,i.nextSibling,this,e):a.type===1?c=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(c=new wr(i,this,e)),this._$AV.push(c),a=s[++l]}o!==(a==null?void 0:a.index)&&(i=j.nextNode(),o++)}return j.currentNode=T,n}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class te{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,n){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=k(this,e,t),Q(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==H&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):gr(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==g&&Q(this._$AH)?this._$AA.nextSibling.data=e:this.$(T.createTextNode(e)),this._$AH=e}g(e){var i;const{values:t,_$litType$:s}=e,n=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=X.createElement(St(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===n)this._$AH.p(t);else{const o=new vr(n,this),l=o.u(this.options);o.p(t),this.$(l),this._$AH=o}}_$AC(e){let t=tt.get(e.strings);return t===void 0&&tt.set(e.strings,t=new X(e)),t}T(e){Pt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,n=0;for(const i of e)n===t.length?t.push(s=new te(this.k(J()),this.k(J()),this,this.options)):s=t[n],s._$AI(i),n++;n<t.length&&(this._$AR(s&&s._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class ve{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,n,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}_$AI(e,t=this,s,n){const i=this.strings;let o=!1;if(i===void 0)e=k(this,e,t,0),o=!Q(e)||e!==this._$AH&&e!==H,o&&(this._$AH=e);else{const l=e;let a,c;for(e=i[0],a=0;a<i.length-1;a++)c=k(this,l[s+a],t,a),c===H&&(c=this._$AH[a]),o||(o=!Q(c)||c!==this._$AH[a]),c===g?e=g:e!==g&&(e+=(c??"")+i[a+1]),this._$AH[a]=c}o&&!n&&this.O(e)}O(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class br extends ve{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===g?void 0:e}}class yr extends ve{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class $r extends ve{constructor(e,t,s,n,i){super(e,t,s,n,i),this.type=5}_$AI(e,t=this){if((e=k(this,e,t,0)??g)===H)return;const s=this._$AH,n=e===g&&s!==g||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==g&&(s===g||n);n&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class wr{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){k(this,e)}}const Pe=K.litHtmlPolyfillSupport;Pe==null||Pe(X,te),(K.litHtmlVersions??(K.litHtmlVersions=[])).push("3.1.1");const Er=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let n=s._$litPart$;if(n===void 0){const i=(t==null?void 0:t.renderBefore)??null;s._$litPart$=n=new te(e.insertBefore(J(),i),i,void 0,t??{})}return n._$AI(r),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _=class extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Er(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return H}};var $t;_._$litElement$=!0,_.finalized=!0,($t=globalThis.litElementHydrateSupport)==null||$t.call(globalThis,{LitElement:_});const Oe=globalThis.litElementPolyfillSupport;Oe==null||Oe({LitElement:_});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ar={attribute:!0,type:String,converter:ce,reflect:!1,hasChanged:He},Pr=(r=Ar,e,t)=>{const{kind:s,metadata:n}=t;let i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),i.set(t.name,r),s==="accessor"){const{name:o}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,r)},init(l){return l!==void 0&&this.C(o,void 0,r),l}}}if(s==="setter"){const{name:o}=t;return function(l){const a=this[o];e.call(this,l),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+s)};function m(r){return(e,t)=>typeof t=="object"?Pr(r,e,t):((s,n,i)=>{const o=n.hasOwnProperty(i);return n.constructor.createProperty(i,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(n,i):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function F(r){return m({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ct=class extends Event{constructor(e,t,s){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=s??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let rt=class{constructor(e,t,s,n){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(i,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=i,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(i,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const i=t;this.context=i.context,this.callback=i.callback,this.subscribe=i.subscribe??!1}else this.context=t,this.callback=s,this.subscribe=n??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Ct(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Or{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const s=t||!Object.is(e,this.o);this.o=e,s&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:s}]of this.subscriptions)t(this.o,s)},e!==void 0&&(this.value=e)}addCallback(e,t,s){if(!s)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:n}=this.subscriptions.get(e);e(this.value,n)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Sr=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class st extends Or{constructor(e,t,s){var n,i;super(t.context!==void 0?t.initialValue:s),this.onContextRequest=o=>{const l=o.composedPath()[0];o.context===this.context&&l!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,l,o.subscribe))},this.onProviderRequest=o=>{const l=o.composedPath()[0];if(o.context!==this.context||l===this.host)return;const a=new Set;for(const[c,{consumerHost:h}]of this.subscriptions)a.has(c)||(a.add(c),h.dispatchEvent(new Ct(this.context,c,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(i=(n=this.host).addController)==null||i.call(n,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Sr(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xt({context:r}){return(e,t)=>{const s=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){s.set(this,new st(this,{context:r}))}),{get(){return e.get.call(this)},set(n){var i;return(i=s.get(this))==null||i.setValue(n),e.set.call(this,n)},init(n){var i;return(i=s.get(this))==null||i.setValue(n),n}};{e.constructor.addInitializer(o=>{s.set(o,new st(o,{context:r}))});const n=Object.getOwnPropertyDescriptor(e,t);let i;if(n===void 0){const o=new WeakMap;i={get:function(){return o.get(this)},set:function(l){s.get(this).setValue(l),o.set(this,l)},configurable:!0,enumerable:!0}}else{const o=n.set;i={...n,set:function(l){s.get(this).setValue(l),o==null||o.call(this,l)}}}return void Object.defineProperty(e,t,i)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Rt({context:r,subscribe:e}){return(t,s)=>{typeof s=="object"?s.addInitializer(function(){new rt(this,{context:r,callback:n=>{this[s.name]=n},subscribe:e})}):t.constructor.addInitializer(n=>{new rt(n,{context:r,callback:i=>{n[s]=i},subscribe:e})})}}let Cr=class extends _{constructor(e,t,s){super(),this.updateFn=e,this.getModel=t,this.setModel=s,this.addEventListener("mvu:message",n=>{const i=n.detail;console.log("Got message: ",i),this.receive(i)})}receive(e){const t=this.updateFn(this.getModel(),e),s=t;typeof(s==null?void 0:s.then)=="function"?s.then(n=>{const i=n(this.getModel());console.log("Updating model in Promise:",i),this.setModel(i)}):(console.log("Updating model:",t),this.setModel(t))}},xr=class extends _{dispatchMessage(e,t=this){const s=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(s)}};class Rr{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:s}=t,n=this._handlers.get(s);return n?n(t,e):e}}function Ur(r){return e=>Object.assign({},e,r)}function jr(r){return r}const Tr=window.location.origin,Mr="/api",xe="JWT_AUTH_TOKEN",P=class P{constructor(){this.authenticated=!1,this.username="fellow_traveler",this.signOut=()=>{}}static deauthenticate(e){const t=new P;return console.log("Deauthenticating",e,P._theUser),e===P._theUser&&(localStorage.removeItem(xe),P._theUser=t),t}};P._theUser=new P;let E=P;class Y extends E{constructor(e,t){super();const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(window.atob(n).split("").map(function(l){return"%"+("00"+l.charCodeAt(0).toString(16)).slice(-2)}).join("")),o=JSON.parse(i);console.log("Token payload",o),this.token=e,this.authenticated=!0,this.username=o.username,this.signOut=t}static authenticate(e,t){const s=new Y(e,t);return E._theUser=s,localStorage.setItem(xe,e),s}static authenticateFromLocalStorage(e){const t=localStorage.getItem(xe);return t?Y.authenticate(t,e):E._theUser}}class ke{constructor(e){this._base=Mr,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=E._theUser.authenticated,s={"Content-Type":"application/json"};if(t){const i={Authorization:`Bearer ${E._theUser.token}`};return e?{...s,...i}:i}else return e?{...s}:void 0}_url(e){return`${Tr}${this._base}${e}`}}class nt extends ke{constructor(e){super(Object.fromEntries(e))}}class Ut extends ke{constructor(){super(void 0)}}var Lr=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,jt=(r,e,t,s)=>{for(var n=s>1?void 0:s?Dr(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Lr(e,t,n),n};const Tt="GalleryModel",Nr={user:new E};class Mt extends Cr{constructor(e){super(e,()=>this.model,t=>this.model=t),this.model=Nr}}jt([xt({context:Tt}),F()],Mt.prototype,"model",2);class be extends xr{getFromModel(e){if(this._model)return this._model[e]}}jt([Rt({context:Tt,subscribe:!0}),m({attribute:!1})],be.prototype,"_model",2);const Ir=()=>new Rr,Lt=Ur,Dt=jr,ze=Ir(),Hr=ze.update;ze.addMessage("ProfileSelected",r=>{const{userid:e}=r;return new Ut().get(`/profiles/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?Lt({profile:t}):Dt)});ze.addMessage("ProfileSaved",r=>{const{userid:e,profile:t}=r;return new ke(t).put(`/profiles/${e}`).then(s=>{if(s.status===200)return s.json()}).then(s=>{s&&console.log("Profile:",s)}).then(s=>s?Lt({profile:s}):Dt)});var kr=Object.defineProperty,zr=Object.getOwnPropertyDescriptor,ye=(r,e,t,s)=>{for(var n=s>1?void 0:s?zr(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&kr(e,t,n),n};let Nt="auth",z=class extends _{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=Y.authenticateFromLocalStorage(()=>this._signOut())}isAuthenticated(){return this.user.authenticated}firstUpdated(){this._toggleDialog(!this.isAuthenticated()),this.isAuthenticated()&&this._dispatchUserLoggedIn(this.user)}render(){const r=f`
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
    `}_handleLogin(r){r.preventDefault();const e=r.target,t=new FormData(e);new nt(t).base().post("/login").then(n=>{if(n.status===200)return n.json();this.loginStatus=n.status}).then(n=>{if(n){console.log("Authentication:",n.token);const i=Y.authenticate(n.token,()=>this._signOut());this.user=i,this._toggleDialog(!1),this._dispatchUserLoggedIn(i),this.requestUpdate()}})}_dispatchUserLoggedIn(r){const e=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:{type:"UserLoggedIn",user:r}});this.dispatchEvent(e)}_handleRegister(r){r.preventDefault();const e=r.target,t=new FormData(e);new nt(t).base().post("/signup").then(n=>{if(n.status===200)return n.json();this.registerStatus=n.status}).then(n=>{console.log("Registration:",n)})}_toggleDialog(r){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(r?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=E.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};z.styles=b`
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
  `;ye([F()],z.prototype,"loginStatus",2);ye([F()],z.prototype,"registerStatus",2);ye([xt({context:Nt}),F()],z.prototype,"user",2);z=ye([v("auth-required")],z);function de(r){return r=r||[],Array.isArray(r)?r:[r]}function w(r){return`[Vaadin.Router] ${r}`}function Fr(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const ue="module",pe="nomodule",Re=[ue,pe];function it(r){if(!r.match(/.+\.[m]?js$/))throw new Error(w(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function It(r){if(!r||!$(r.path))throw new Error(w('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!M(r.action)&&!Array.isArray(r.children)&&!M(r.children)&&!fe(e)&&!t.some(s=>$(r[s])))throw new Error(w(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if($(e))it(e);else if(Re.some(s=>s in e))Re.forEach(s=>s in e&&it(e[s]));else throw new Error(w('Expected route bundle to include either "'+pe+'" or "'+ue+'" keys, or both'));r.redirect&&["bundle","component"].forEach(s=>{s in r&&console.warn(w(`Route config "${r.path}" has both "redirect" and "${s}" properties, and "redirect" will always override the latter. Did you mean to only use "${s}"?`))})}function ot(r){de(r).forEach(e=>It(e))}function at(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===ue?t.setAttribute("type",ue):e===pe&&t.setAttribute(pe,""),t.async=!0),new Promise((s,n)=>{t.onreadystatechange=t.onload=i=>{t.__dynamicImportLoaded=!0,s(i)},t.onerror=i=>{t.parentNode&&t.parentNode.removeChild(t),n(i)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&s()})}function Br(r){return $(r)?at(r):Promise.race(Re.filter(e=>e in r).map(e=>at(r[e],e)))}function G(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function fe(r){return typeof r=="object"&&!!r}function M(r){return typeof r=="function"}function $(r){return typeof r=="string"}function Ht(r){const e=new Error(w(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const I=new class{};function qr(r){const e=r.port,t=r.protocol,i=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${i}`}function lt(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let l=0;l<t.length;l++){const a=t[l];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||qr(e))!==window.location.origin)return;const{pathname:n,search:i,hash:o}=e;G("go",{pathname:n,search:i,hash:o})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const Vr={activate(){window.document.addEventListener("click",lt)},inactivate(){window.document.removeEventListener("click",lt)}},Wr=/Trident/.test(navigator.userAgent);Wr&&!M(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function ct(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:s}=window.location;G("go",{pathname:e,search:t,hash:s})}const Kr={activate(){window.addEventListener("popstate",ct)},inactivate(){window.removeEventListener("popstate",ct)}};var B=Vt,Gr=Fe,Jr=Zr,Qr=Ft,Xr=qt,kt="/",zt="./",Yr=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Fe(r,e){for(var t=[],s=0,n=0,i="",o=e&&e.delimiter||kt,l=e&&e.delimiters||zt,a=!1,c;(c=Yr.exec(r))!==null;){var h=c[0],d=c[1],u=c.index;if(i+=r.slice(n,u),n=u+h.length,d){i+=d[1],a=!0;continue}var p="",R=r[n],er=c[2],tr=c[3],rr=c[4],se=c[5];if(!a&&i.length){var we=i.length-1;l.indexOf(i[we])>-1&&(p=i[we],i=i.slice(0,we))}i&&(t.push(i),i="",a=!1);var sr=p!==""&&R!==void 0&&R!==p,nr=se==="+"||se==="*",ir=se==="?"||se==="*",qe=p||o,Ve=tr||rr;t.push({name:er||s++,prefix:p,delimiter:qe,optional:ir,repeat:nr,partial:sr,pattern:Ve?es(Ve):"[^"+A(qe)+"]+?"})}return(i||n<r.length)&&t.push(i+r.substr(n)),t}function Zr(r,e){return Ft(Fe(r,e))}function Ft(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(s,n){for(var i="",o=n&&n.encode||encodeURIComponent,l=0;l<r.length;l++){var a=r[l];if(typeof a=="string"){i+=a;continue}var c=s?s[a.name]:void 0,h;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(c.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<c.length;d++){if(h=o(c[d],a),!e[l].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');i+=(d===0?a.prefix:a.delimiter)+h}continue}if(typeof c=="string"||typeof c=="number"||typeof c=="boolean"){if(h=o(String(c),a),!e[l].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');i+=a.prefix+h;continue}if(a.optional){a.partial&&(i+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return i}}function A(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function es(r){return r.replace(/([=!:$/()])/g,"\\$1")}function Bt(r){return r&&r.sensitive?"":"i"}function ts(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var s=0;s<t.length;s++)e.push({name:s,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function rs(r,e,t){for(var s=[],n=0;n<r.length;n++)s.push(Vt(r[n],e,t).source);return new RegExp("(?:"+s.join("|")+")",Bt(t))}function ss(r,e,t){return qt(Fe(r,t),e,t)}function qt(r,e,t){t=t||{};for(var s=t.strict,n=t.start!==!1,i=t.end!==!1,o=A(t.delimiter||kt),l=t.delimiters||zt,a=[].concat(t.endsWith||[]).map(A).concat("$").join("|"),c=n?"^":"",h=r.length===0,d=0;d<r.length;d++){var u=r[d];if(typeof u=="string")c+=A(u),h=d===r.length-1&&l.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+A(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?c+=A(u.prefix)+"("+p+")?":c+="(?:"+A(u.prefix)+"("+p+"))?":c+=A(u.prefix)+"("+p+")"}}return i?(s||(c+="(?:"+o+")?"),c+=a==="$"?"$":"(?="+a+")"):(s||(c+="(?:"+o+"(?="+a+"))?"),h||(c+="(?="+o+"|"+a+")")),new RegExp(c,Bt(t))}function Vt(r,e,t){return r instanceof RegExp?ts(r,e):Array.isArray(r)?rs(r,e,t):ss(r,e,t)}B.parse=Gr;B.compile=Jr;B.tokensToFunction=Qr;B.tokensToRegExp=Xr;const{hasOwnProperty:ns}=Object.prototype,Ue=new Map;Ue.set("|false",{keys:[],pattern:/(?:)/});function ht(r){try{return decodeURIComponent(r)}catch{return r}}function is(r,e,t,s,n){t=!!t;const i=`${r}|${t}`;let o=Ue.get(i);if(!o){const c=[];o={keys:c,pattern:B(r,c,{end:t,strict:r===""})},Ue.set(i,o)}const l=o.pattern.exec(e);if(!l)return null;const a=Object.assign({},n);for(let c=1;c<l.length;c++){const h=o.keys[c-1],d=h.name,u=l[c];(u!==void 0||!ns.call(a,d))&&(h.repeat?a[d]=u?u.split(h.delimiter).map(ht):[]:a[d]=u&&ht(u))}return{path:l[0],keys:(s||[]).concat(o.keys),params:a}}function Wt(r,e,t,s,n){let i,o,l=0,a=r.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(c){if(r===c)return{done:!0};const h=r.__children=r.__children||r.children;if(!i&&(i=is(a,e,!h,s,n),i))return{done:!1,value:{route:r,keys:i.keys,params:i.params,path:i.path}};if(i&&h)for(;l<h.length;){if(!o){const u=h[l];u.parent=r;let p=i.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=Wt(u,e.substr(p),t,i.keys,i.params)}const d=o.next(c);if(!d.done)return{done:!1,value:d.value};o=null,l++}return{done:!0}}}}function os(r){if(M(r.route.action))return r.route.action(r)}function as(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function ls(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function cs(r,e){const{route:t,path:s}=e;if(t&&!t.__synthetic){const n={path:s,route:t};if(!r.chain)r.chain=[];else if(t.parent){let i=r.chain.length;for(;i--&&r.chain[i].route&&r.chain[i].route!==t.parent;)r.chain.pop()}r.chain.push(n)}}class Z{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||os,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){ot(e);const t=[...de(e)];this.root.__children=t}addRoutes(e){return ot(e),this.root.__children.push(...de(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,$(e)?{pathname:e}:e),s=Wt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),n=this.resolveRoute;let i=null,o=null,l=t;function a(c,h=i.value.route,d){const u=d===null&&i.value.route;return i=o||s.next(u),o=null,!c&&(i.done||!as(h,i.value.route))?(o=i,Promise.resolve(I)):i.done?Promise.reject(Ht(t)):(l=Object.assign(l?{chain:l.chain?l.chain.slice(0):[]}:{},t,i.value),cs(l,i.value),Promise.resolve(n(l)).then(p=>p!=null&&p!==I?(l.result=p.result||p,l):a(c,h,p)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(c=>{const h=ls(l);if(c?console.warn(h):c=new Error(h),c.context=c.context||l,c instanceof DOMException||(c.code=c.code||500),this.errorHandler)return l.result=this.errorHandler(c),l;throw c})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,s=this.constructor.__createUrl(e,t).href;if(s.slice(0,t.length)===t)return s.slice(t.length)}}Z.pathToRegexp=B;const{pathToRegexp:dt}=Z,ut=new Map;function Kt(r,e,t){const s=e.name||e.component;if(s&&(r.has(s)?r.get(s).push(e):r.set(s,[e])),Array.isArray(t))for(let n=0;n<t.length;n++){const i=t[n];i.parent=e,Kt(r,i,i.__children||i.children)}}function pt(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function ft(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function hs(r,e={}){if(!(r instanceof Z))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(s,n)=>{let i=pt(t,s);if(!i&&(t.clear(),Kt(t,r.root,r.root.__children),i=pt(t,s),!i))throw new Error(`Route "${s}" not found`);let o=ut.get(i.fullPath);if(!o){let a=ft(i),c=i.parent;for(;c;){const p=ft(c);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),c=c.parent}const h=dt.parse(a),d=dt.tokensToFunction(h),u=Object.create(null);for(let p=0;p<h.length;p++)$(h[p])||(u[h[p].name]=!0);o={toPath:d,keys:u},ut.set(a,o),i.fullPath=a}let l=o.toPath(n,e)||"/";if(e.stringifyQueryParams&&n){const a={},c=Object.keys(n);for(let d=0;d<c.length;d++){const u=c[d];o.keys[u]||(a[u]=n[u])}const h=e.stringifyQueryParams(a);h&&(l+=h.charAt(0)==="?"?h:`?${h}`)}return l}}let gt=[];function ds(r){gt.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),gt=r}const us=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},ps=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function mt(r,e){return r.classList.add(e),new Promise(t=>{if(us(r)){const s=r.getBoundingClientRect(),n=`height: ${s.bottom-s.top}px; width: ${s.right-s.left}px`;r.setAttribute("style",`position: absolute; ${n}`),ps(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const fs=256;function Se(r){return r!=null}function gs(r){const e=Object.assign({},r);return delete e.next,e}function y({pathname:r="",search:e="",hash:t="",chain:s=[],params:n={},redirectFrom:i,resolver:o},l){const a=s.map(c=>c.route);return{baseUrl:o&&o.baseUrl||"",pathname:r,search:e,hash:t,routes:a,route:l||a.length&&a[a.length-1]||null,params:n,redirectFrom:i,getUrl:(c={})=>ae(S.pathToRegexp.compile(Gt(a))(Object.assign({},n,c)),o)}}function _t(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function ms(r,e){e.location=y(r);const t=r.chain.map(s=>s.route).indexOf(r.route);return r.chain[t].element=e,e}function oe(r,e,t){if(M(r))return r.apply(t,e)}function vt(r,e,t){return s=>{if(s&&(s.cancel||s.redirect))return s;if(t)return oe(t[r],e,t)}}function _s(r,e){if(!Array.isArray(r)&&!fe(r))throw new Error(w(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=de(r);for(let s=0;s<t.length;s++)It(t[s]),e.__children.push(t[s])}function ne(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function ae(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function Gt(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class S extends Z{constructor(e,t){const s=document.head.querySelector("base"),n=s&&s.getAttribute("href");super([],Object.assign({baseUrl:n&&Z.__createUrl(n,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const i=S.NavigationTrigger;S.setTriggers.apply(S,Object.keys(i).map(o=>i[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=y({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let s=Promise.resolve();M(t.children)&&(s=s.then(()=>t.children(gs(e))).then(i=>{!Se(i)&&!M(t.children)&&(i=t.children),_s(i,t)}));const n={redirect:i=>_t(e,i),component:i=>{const o=document.createElement(i);return this.__createdByRouter.set(o,!0),o}};return s.then(()=>{if(this.__isLatestRender(e))return oe(t.action,[e,n],t)}).then(i=>{if(Se(i)&&(i instanceof HTMLElement||i.redirect||i===I))return i;if($(t.redirect))return n.redirect(t.redirect);if(t.bundle)return Br(t.bundle).then(()=>{},()=>{throw new Error(w(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(i=>{if(Se(i))return i;if($(t.component))return n.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const s=++this.__lastStartedRenderId,n=Object.assign({search:"",hash:""},$(e)?{pathname:e}:e,{__renderId:s});return this.ready=this.resolve(n).then(i=>this.__fullyResolveChain(i)).then(i=>{if(this.__isLatestRender(i)){const o=this.__previousContext;if(i===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=y(i),t&&this.__updateBrowserHistory(i,s===1),G("location-changed",{router:this,location:this.location}),i.__skipAttach)return this.__copyUnchangedElements(i,o),this.__previousContext=i,this.location;this.__addAppearingContent(i,o);const l=this.__animateIfNeeded(i);return this.__runOnAfterEnterCallbacks(i),this.__runOnAfterLeaveCallbacks(i,o),l.then(()=>{if(this.__isLatestRender(i))return this.__removeDisappearingContent(),this.__previousContext=i,this.location})}}).catch(i=>{if(s===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(n),ne(this.__outlet&&this.__outlet.children),this.location=y(Object.assign(n,{resolver:this})),G("error",Object.assign({router:this,error:i},n)),i}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(s=>{const i=s!==t?s:e,l=ae(Gt(s.chain),s.resolver)===s.pathname,a=(c,h=c.route,d)=>c.next(void 0,h,d).then(u=>u===null||u===I?l?c:h.parent!==null?a(c,h.parent,u):u:u);return a(s).then(c=>{if(c===null||c===I)throw Ht(i);return c&&c!==I&&c!==s?this.__fullyResolveChain(i,c):this.__amendWithOnBeforeCallbacks(s)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(ms(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(s=>this.__findComponentContextAfterAllRedirects(s)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(w(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Fr(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},s=t.chain||[],n=e.chain;let i=Promise.resolve();const o=()=>({cancel:!0}),l=a=>_t(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,s.length){for(let a=0;a<Math.min(s.length,n.length)&&!(s[a].route!==n[a].route||s[a].path!==n[a].path&&s[a].element!==n[a].element||!this.__isReusableElement(s[a].element,n[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=n.length===s.length&&e.__divergedChainIndex==n.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=n.length-1;a>=0;a--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:o},s[a]);for(let a=0;a<n.length;a++)i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:o,redirect:l},n[a]),s[a].element.location=y(e,s[a].route)}else for(let a=s.length-1;a>=e.__divergedChainIndex;a--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:o},s[a])}if(!e.__skipAttach)for(let a=0;a<n.length;a++)a<e.__divergedChainIndex?a<s.length&&s[a].element&&(s[a].element.location=y(e,s[a].route)):(i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:o,redirect:l},n[a]),n[a].element&&(n[a].element.location=y(e,n[a].route)));return i.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,s,n){const i=y(t);return e.then(o=>{if(this.__isLatestRender(t))return vt("onBeforeLeave",[i,s,this],n.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,s,n){const i=y(t,n.route);return e.then(o=>{if(this.__isLatestRender(t))return vt("onBeforeEnter",[i,s,this],n.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,s){if(t>fs)throw new Error(w(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:s})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(w(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:s=""},n){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==s){const i=n?"replaceState":"pushState";window.history[i](null,document.title,e+t+s),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let s=this.__outlet;for(let n=0;n<e.__divergedChainIndex;n++){const i=t&&t.chain[n].element;if(i)if(i.parentNode===s)e.chain[n].element=i,s=i;else break}return s}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const s=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(s.children).filter(i=>this.__addedByRouter.get(i)&&i!==e.result);let n=s;for(let i=e.__divergedChainIndex;i<e.chain.length;i++){const o=e.chain[i].element;o&&(n.appendChild(o),this.__addedByRouter.set(o,!0),n===s&&this.__appearingContent.push(o),n=o)}}__removeDisappearingContent(){this.__disappearingContent&&ne(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ne(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let s=t.chain.length-1;s>=e.__divergedChainIndex&&this.__isLatestRender(e);s--){const n=t.chain[s].element;if(n)try{const i=y(e);oe(n.onAfterLeave,[i,{},t.resolver],n)}finally{this.__disappearingContent.indexOf(n)>-1&&ne(n.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const s=e.chain[t].element||{},n=y(e,e.chain[t].route);oe(s.onAfterEnter,[n,{},e.resolver],s)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],s=(this.__appearingContent||[])[0],n=[],i=e.chain;let o;for(let l=i.length;l>0;l--)if(i[l-1].route.animate){o=i[l-1].route.animate;break}if(t&&s&&o){const l=fe(o)&&o.leave||"leaving",a=fe(o)&&o.enter||"entering";n.push(mt(t,l)),n.push(mt(s,a))}return Promise.all(n).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:s,hash:n}=e?e.detail:window.location;$(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:s,hash:n},!0))}static setTriggers(...e){ds(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=hs(this)),ae(this.__urlForName(e,t),this)}urlForPath(e,t){return ae(S.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:s,hash:n}=$(e)?this.__createUrl(e,"http://a"):e;return G("go",{pathname:t,search:s,hash:n})}}const vs=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,le=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function bs(){function r(){return!0}return Jt(r)}function ys(){try{return $s()?!0:ws()?le?!Es():!bs():!1}catch{return!1}}function $s(){return localStorage.getItem("vaadin.developmentmode.force")}function ws(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Es(){return!!(le&&Object.keys(le).map(e=>le[e]).filter(e=>e.productionMode).length>0)}function Jt(r,e){if(typeof r!="function")return;const t=vs.exec(r.toString());if(t)try{r=new Function(t[1])}catch(s){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",s)}return r(e)}window.Vaadin=window.Vaadin||{};const bt=function(r,e){if(window.Vaadin.developmentMode)return Jt(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=ys());function As(){}const Ps=function(){if(typeof bt=="function")return bt(As)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Ps();S.NavigationTrigger={POPSTATE:Kr,CLICK:Vr};var Os=Object.defineProperty,Ss=Object.getOwnPropertyDescriptor,Qt=(r,e,t,s)=>{for(var n=s>1?void 0:s?Ss(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Os(e,t,n),n};let je=class extends _{constructor(){super(...arguments),this.router=new S(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return f`<slot></slot>`}};Qt([m({attribute:!1})],je.prototype,"routes",2);je=Qt([v("vaadin-router")],je);var Cs=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,Xt=(r,e,t,s)=>{for(var n=s>1?void 0:s?xs(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Cs(e,t,n),n};let ge=class extends _{constructor(){super(...arguments),this.open=!1}render(){return f`
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
    `}_handleChange(r){const e=r.target;this._toggle(e==null?void 0:e.checked)}_toggle(r){this.open=r,this._toggleClickAway(r)}_toggleClickAway(r){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};r?document.addEventListener("click",e):document.removeEventListener("click",e)}};ge.styles=b`
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
    `;Xt([m({reflect:!0,type:Boolean})],ge.prototype,"open",2);ge=Xt([v("drop-down")],ge);var Rs=Object.defineProperty,Us=Object.getOwnPropertyDescriptor,js=(r,e,t,s)=>{for(var n=s>1?void 0:s?Us(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Rs(e,t,n),n};let Te=class extends _{render(){return f`<h2>
            Hello <slot></slot>!
        </h2>`}};Te.styles=b`
        .fancy {
          font-family: var(--font-family-body);
          font-style: italic;
          color: var(--color-accent);
        }
    
        ::slotted(*) {
          display: inline;
        }`;Te=js([v("hello-world")],Te);var Ts=Object.defineProperty,Ms=Object.getOwnPropertyDescriptor,Yt=(r,e,t,s)=>{for(var n=s>1?void 0:s?Ms(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Ts(e,t,n),n};let me=class extends _{constructor(){super(...arguments),this.on=!1}render(){return f`<label>
      <slot>Label</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(r){const e=r.target;this.on=e==null?void 0:e.checked,console.log(this.on);const t=document.body;this.on?t.style.background="dimgray":t.style.background="blanchedalmond"}};me.styles=b`
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
    `;Yt([m({reflect:!0,type:Boolean})],me.prototype,"on",2);me=Yt([v("toggle-switch")],me);var Ls=Object.defineProperty,Ds=Object.getOwnPropertyDescriptor,Zt=(r,e,t,s)=>{for(var n=s>1?void 0:s?Ds(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Ls(e,t,n),n};let _e=class extends _{get profile(){return this.using||{}}render(){return f`
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

        `}};_e.styles=b`
      .column {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 1em;
      }
    `;Zt([m({attribute:!1})],_e.prototype,"using",2);_e=Zt([v("user-panel")],_e);const Ns="body{line-height:1.5;box-sizing:content-box;margin:0;font-family:var(--font-body)}img{max-width:100%}body{background:var(--color-background-primary);font-family:var(--font-body);text-align:center}.dark-body,.light-body{background:var(--color-background-primary)}header{display:flex;background:var(--color-background-secondary);color:var(--color-text-standout);align-items:center;justify-content:space-between;padding:2em}.dark-header{background:var(--color-background-secondary-dark)}a{color:var(--color-background-secondary)}.gallery-heading{text-align:center;padding:2%}.gallery-display{display:flex;flex-direction:row;justify-content:space-evenly;align-content:center}.gallery-element{display:flex;flex-direction:column;justify-content:space-between}.see-more{display:flex;text-align:center;justify-content:center;padding:2%}.white-text{color:#000}h1,h2,h3,h4,h5,h6{font-family:var(--font-heading)}svg.icon{display:inline;height:2em;width:2em;vertical-align:top;fill:currentColor}",Is=':root{--color-background-primary: blanchedalmond;--color-background-secondary: #b298e5;--color-background-primary-dark: dimgray;--color-background-secondary-dark: #7845dc;--color-text-standout: black;--color-background-component: #fdc5c5;--color-accent: var(--color-background-secondary);--color-background-control: #ccc;--color-foreground-control: #fff;--font-body: "Quicksand", sans-serif;--font-heading: "Ubuntu", sans-serif;--size-icon-small: 1em;--size-icon-medium: 2em;--size-icon-large: 4rem;--size-spacing-small: .25rem;--size-spacing-medium: .5rem;--size-spacing-large: 1rem;--size-spacing-xlarge: 2rem;--size-corner-small: 2px;--size-corner-medium: var(--size-spacing-small);--size-corner-large: var(--size-spacing-medium);--size-type-body: 1rem;--size-type-mlarge: 1.25rem;--size-type-large: 1.5rem;--size-type-xlarge: 2rem;--size-type-xxlarge: 2.5rem;--time-transition-control: .3s}';var Hs=Object.defineProperty,ks=Object.getOwnPropertyDescriptor,Be=(r,e,t,s)=>{for(var n=s>1?void 0:s?ks(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Hs(e,t,n),n};let ee=class extends _{constructor(){super(...arguments),this.user=new E}render(){return f`
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
    </div>`}updated(r){if(console.log("Profile Data has been updated",r,"profile now:",this.profile),r.has("user")){console.log("New user",this.user);const{username:e}=this.user;this._getData(`/profiles/${e}`)}return!0}_getData(r){new Ut().get(r).then(t=>t.status===200?t.json():null).then(t=>{console.log("Profile (get data, header):",t),this.profile=t,console.log("profile after update:",this.profile)})}_signOut(){console.log("Signout"),this.user.signOut()}};ee.styles=[Ce(Ns),Ce(Is),b`
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
    `];Be([F()],ee.prototype,"profile",2);Be([Rt({context:Nt,subscribe:!0}),m({attribute:!1})],ee.prototype,"user",2);ee=Be([v("site-header")],ee);var zs=Object.defineProperty,Fs=Object.getOwnPropertyDescriptor,Bs=(r,e,t,s)=>{for(var n=s>1?void 0:s?Fs(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&zs(e,t,n),n};let Me=class extends _{render(){return f`
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
        `}};Me.styles=b`
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
    `;Me=Bs([v("site-footer")],Me);var qs=Object.defineProperty,Vs=Object.getOwnPropertyDescriptor,$e=(r,e,t,s)=>{for(var n=s>1?void 0:s?Vs(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&qs(e,t,n),n};let L=class extends be{get profile(){return this.using||{}}render(){const{userid:r,name:e,nickname:t,city:s,genres:n=[],mediums:i=[],artists:o=[]}=this.profile,l=a=>f`<dd>${a}</dd>`;return f`
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
    </div>`}};L.styles=[b`
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
    `];$e([m({attribute:!1})],L.prototype,"using",2);$e([F()],L.prototype,"newAvatar",2);L=$e([v("user-profile")],L);let Le=class extends L{render(){const r=this.profile||{},{userid:e,name:t,nickname:s,city:n,genres:i=[],artists:o=[],mediums:l=[]}=r;return console.log("Rendering form",this.profile),f`
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
    `}_handleAvatarSelected(r){const t=r.target.files[0];new Promise((n,i)=>{const o=new FileReader;o.onload=()=>n(o.result),o.onerror=l=>i(l),o.readAsDataURL(t)}).then(n=>this.newAvatar=n)}_handleSubmit(r){var e;if(r.preventDefault(),this.profile){const t=r.target,s=new FormData(t);let n=Array.from(s.entries()).map(([o,l])=>l===""?[o]:[o,l]).map(([o,l])=>o==="airports"?[o,l.split(",").map(a=>a.trim())]:[o,l]);this.newAvatar&&n.push(["avatar",this.newAvatar]);const i=Object.fromEntries(n);console.log("Submitting Form",i),this.dispatchMessage({type:"ProfileSaved",userid:(e=this.profile)==null?void 0:e.userid,profile:i})}}};Le.styles=[...L.styles,b`
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
    `];Le=$e([v("user-profile-edit")],Le);var Ws=Object.defineProperty,Ks=Object.getOwnPropertyDescriptor,re=(r,e,t,s)=>{for(var n=s>1?void 0:s?Ks(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Ws(e,t,n),n};let D=class extends be{get userid(){var r;return(r=this.location)==null?void 0:r.params.userid}get edit(){return this.location?new URL(document.location.toString()).searchParams.has("edit"):!1}get profile(){return this.getFromModel("profile")}attributeChangedCallback(r,e,t){r==="userid"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",userid:t})),super.attributeChangedCallback(r,e,t)}render(){return f`
      <main class="page">
        ${this.edit?f`
              <user-profile-edit .using=${this.profile}>
              </user-profile-edit>
            `:f`
              <user-profile .using=${this.profile}>
              </user-profile>
            `}
      </main>
    `}};D.styles=b`
      :host {
        display: contents;
      }
    `;re([m({attribute:!1})],D.prototype,"location",2);re([m({reflect:!0})],D.prototype,"userid",1);re([m({reflect:!0})],D.prototype,"edit",1);re([m()],D.prototype,"profile",1);D=re([v("profile-page")],D);var Gs=Object.defineProperty,Js=Object.getOwnPropertyDescriptor,q=(r,e,t,s)=>{for(var n=s>1?void 0:s?Js(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Gs(e,t,n),n};let x=class extends _{constructor(){super(...arguments),this.src="",this.url="/app",this.title="",this.artist="",this.kudos=0}render(){return f`
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
    `;q([m()],x.prototype,"src",2);q([m()],x.prototype,"url",2);q([m()],x.prototype,"title",2);q([m()],x.prototype,"artist",2);q([m()],x.prototype,"kudos",2);x=q([v("art-card")],x);var Qs=Object.defineProperty,Xs=Object.getOwnPropertyDescriptor,Ys=(r,e,t,s)=>{for(var n=s>1?void 0:s?Xs(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&Qs(e,t,n),n};let De=class extends be{render(){return f`
      <h2 class="gallery-heading">Best of the Week</h2>
      <section class="gallery-display" id="top-submissions">
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
    `}};De.styles=b`
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
    }

    .gallery-element {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  `;De=Ys([v("gallery-page")],De);const Zs=[{path:"/app/profile/:userid",component:"profile-page"},{path:"/app",component:"gallery-page"},{path:"(.*)",redirect:"/app"}];var en=Object.defineProperty,tn=Object.getOwnPropertyDescriptor,rn=(r,e,t,s)=>{for(var n=s>1?void 0:s?tn(e,t):e,i=r.length-1,o;i>=0;i--)(o=r[i])&&(n=(s?o(e,t,n):o(n))||n);return s&&n&&en(e,t,n),n};let yt=class extends Mt{constructor(){super(Hr)}render(){return f`
<!--        <body>-->
<!--            <site-header></site-header>-->
<!--            <p>hello</p>-->
<!--        </body>-->
        
        <auth-required>
            <site-header></site-header>
<!--            <p>gallery app renders</p>-->
            <vaadin-router .routes=${Zs}> </vaadin-router>
            <site-footer></site-footer>
        </auth-required>
    `}};yt=rn([v("gallery-app")],yt);
