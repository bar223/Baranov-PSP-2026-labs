(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var hv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dv={exports:{}};/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(i,e){(function(t,n){i.exports=n()})(hv,function(){const t=new Map,n={set(E,c,g){t.has(E)||t.set(E,new Map);const T=t.get(E);T.has(c)||T.size===0?T.set(c,g):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(T.keys())[0]}.`)},get:(E,c)=>t.has(E)&&t.get(E).get(c)||null,remove(E,c){if(!t.has(E))return;const g=t.get(E);g.delete(c),g.size===0&&t.delete(E)}},s="transitionend",r=E=>(E&&window.CSS&&window.CSS.escape&&(E=E.replace(/#([^\s"#']+)/g,(c,g)=>`#${CSS.escape(g)}`)),E),o=E=>E==null?`${E}`:Object.prototype.toString.call(E).match(/\s([a-z]+)/i)[1].toLowerCase(),a=E=>{E.dispatchEvent(new Event(s))},l=E=>!(!E||typeof E!="object")&&(E.jquery!==void 0&&(E=E[0]),E.nodeType!==void 0),u=E=>l(E)?E.jquery?E[0]:E:typeof E=="string"&&E.length>0?document.querySelector(r(E)):null,h=E=>{if(!l(E)||E.getClientRects().length===0)return!1;const c=getComputedStyle(E).getPropertyValue("visibility")==="visible",g=E.closest("details:not([open])");if(!g)return c;if(g!==E){const T=E.closest("summary");if(T&&T.parentNode!==g||T===null)return!1}return c},d=E=>!E||E.nodeType!==Node.ELEMENT_NODE||!!E.classList.contains("disabled")||(E.disabled!==void 0?E.disabled:E.hasAttribute("disabled")&&E.getAttribute("disabled")!=="false"),f=E=>{if(!document.documentElement.attachShadow)return null;if(typeof E.getRootNode=="function"){const c=E.getRootNode();return c instanceof ShadowRoot?c:null}return E instanceof ShadowRoot?E:E.parentNode?f(E.parentNode):null},_=()=>{},v=E=>{E.offsetHeight},b=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,m=[],p=()=>document.documentElement.dir==="rtl",M=E=>{var c;c=()=>{const g=b();if(g){const T=E.NAME,U=g.fn[T];g.fn[T]=E.jQueryInterface,g.fn[T].Constructor=E,g.fn[T].noConflict=()=>(g.fn[T]=U,E.jQueryInterface)}},document.readyState==="loading"?(m.length||document.addEventListener("DOMContentLoaded",()=>{for(const g of m)g()}),m.push(c)):c()},y=(E,c=[],g=E)=>typeof E=="function"?E.call(...c):g,A=(E,c,g=!0)=>{if(!g)return void y(E);const T=(Z=>{if(!Z)return 0;let{transitionDuration:re,transitionDelay:ye}=window.getComputedStyle(Z);const Re=Number.parseFloat(re),Pe=Number.parseFloat(ye);return Re||Pe?(re=re.split(",")[0],ye=ye.split(",")[0],1e3*(Number.parseFloat(re)+Number.parseFloat(ye))):0})(c)+5;let U=!1;const k=({target:Z})=>{Z===c&&(U=!0,c.removeEventListener(s,k),y(E))};c.addEventListener(s,k),setTimeout(()=>{U||a(c)},T)},I=(E,c,g,T)=>{const U=E.length;let k=E.indexOf(c);return k===-1?!g&&T?E[U-1]:E[0]:(k+=g?1:-1,T&&(k=(k+U)%U),E[Math.max(0,Math.min(k,U-1))])},D=/[^.]*(?=\..*)\.|.*/,L=/\..*/,J=/::\d+$/,S={};let R=1;const j={mouseenter:"mouseover",mouseleave:"mouseout"},Q=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function se(E,c){return c&&`${c}::${R++}`||E.uidEvent||R++}function B(E){const c=se(E);return E.uidEvent=c,S[c]=S[c]||{},S[c]}function W(E,c,g=null){return Object.values(E).find(T=>T.callable===c&&T.delegationSelector===g)}function q(E,c,g){const T=typeof c=="string",U=T?g:c||g;let k=ie(E);return Q.has(k)||(k=E),[T,U,k]}function ee(E,c,g,T,U){if(typeof c!="string"||!E)return;let[k,Z,re]=q(c,g,T);c in j&&(Z=(et=>function(Ye){if(!Ye.relatedTarget||Ye.relatedTarget!==Ye.delegateTarget&&!Ye.delegateTarget.contains(Ye.relatedTarget))return et.call(this,Ye)})(Z));const ye=B(E),Re=ye[re]||(ye[re]={}),Pe=W(Re,Z,k?g:null);if(Pe)return void(Pe.oneOff=Pe.oneOff&&U);const Me=se(Z,c.replace(D,"")),ot=k?function(Xe,et,Ye){return function tt(Mt){const It=Xe.querySelectorAll(et);for(let{target:ft}=Mt;ft&&ft!==this;ft=ft.parentNode)for(const Et of It)if(Et===ft)return pe(Mt,{delegateTarget:ft}),tt.oneOff&&O.off(Xe,Mt.type,et,Ye),Ye.apply(ft,[Mt])}}(E,g,Z):function(Xe,et){return function Ye(tt){return pe(tt,{delegateTarget:Xe}),Ye.oneOff&&O.off(Xe,tt.type,et),et.apply(Xe,[tt])}}(E,Z);ot.delegationSelector=k?g:null,ot.callable=Z,ot.oneOff=U,ot.uidEvent=Me,Re[Me]=ot,E.addEventListener(re,ot,k)}function te(E,c,g,T,U){const k=W(c[g],T,U);k&&(E.removeEventListener(g,k,!!U),delete c[g][k.uidEvent])}function ne(E,c,g,T){const U=c[g]||{};for(const[k,Z]of Object.entries(U))k.includes(T)&&te(E,c,g,Z.callable,Z.delegationSelector)}function ie(E){return E=E.replace(L,""),j[E]||E}const O={on(E,c,g,T){ee(E,c,g,T,!1)},one(E,c,g,T){ee(E,c,g,T,!0)},off(E,c,g,T){if(typeof c!="string"||!E)return;const[U,k,Z]=q(c,g,T),re=Z!==c,ye=B(E),Re=ye[Z]||{},Pe=c.startsWith(".");if(k===void 0){if(Pe)for(const Me of Object.keys(ye))ne(E,ye,Me,c.slice(1));for(const[Me,ot]of Object.entries(Re)){const Xe=Me.replace(J,"");re&&!c.includes(Xe)||te(E,ye,Z,ot.callable,ot.delegationSelector)}}else{if(!Object.keys(Re).length)return;te(E,ye,Z,k,U?g:null)}},trigger(E,c,g){if(typeof c!="string"||!E)return null;const T=b();let U=null,k=!0,Z=!0,re=!1;c!==ie(c)&&T&&(U=T.Event(c,g),T(E).trigger(U),k=!U.isPropagationStopped(),Z=!U.isImmediatePropagationStopped(),re=U.isDefaultPrevented());const ye=pe(new Event(c,{bubbles:k,cancelable:!0}),g);return re&&ye.preventDefault(),Z&&E.dispatchEvent(ye),ye.defaultPrevented&&U&&U.preventDefault(),ye}};function pe(E,c={}){for(const[g,T]of Object.entries(c))try{E[g]=T}catch{Object.defineProperty(E,g,{configurable:!0,get:()=>T})}return E}function K(E){if(E==="true")return!0;if(E==="false")return!1;if(E===Number(E).toString())return Number(E);if(E===""||E==="null")return null;if(typeof E!="string")return E;try{return JSON.parse(decodeURIComponent(E))}catch{return E}}function Y(E){return E.replace(/[A-Z]/g,c=>`-${c.toLowerCase()}`)}const oe={setDataAttribute(E,c,g){E.setAttribute(`data-bs-${Y(c)}`,g)},removeDataAttribute(E,c){E.removeAttribute(`data-bs-${Y(c)}`)},getDataAttributes(E){if(!E)return{};const c={},g=Object.keys(E.dataset).filter(T=>T.startsWith("bs")&&!T.startsWith("bsConfig"));for(const T of g){let U=T.replace(/^bs/,"");U=U.charAt(0).toLowerCase()+U.slice(1),c[U]=K(E.dataset[T])}return c},getDataAttribute:(E,c)=>K(E.getAttribute(`data-bs-${Y(c)}`))};class me{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(c){return c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c}_mergeConfigObj(c,g){const T=l(g)?oe.getDataAttribute(g,"config"):{};return{...this.constructor.Default,...typeof T=="object"?T:{},...l(g)?oe.getDataAttributes(g):{},...typeof c=="object"?c:{}}}_typeCheckConfig(c,g=this.constructor.DefaultType){for(const[T,U]of Object.entries(g)){const k=c[T],Z=l(k)?"element":o(k);if(!new RegExp(U).test(Z))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${T}" provided type "${Z}" but expected type "${U}".`)}}}class be extends me{constructor(c,g){super(),(c=u(c))&&(this._element=c,this._config=this._getConfig(g),n.set(this._element,this.constructor.DATA_KEY,this))}dispose(){n.remove(this._element,this.constructor.DATA_KEY),O.off(this._element,this.constructor.EVENT_KEY);for(const c of Object.getOwnPropertyNames(this))this[c]=null}_queueCallback(c,g,T=!0){A(c,g,T)}_getConfig(c){return c=this._mergeConfigObj(c,this._element),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}static getInstance(c){return n.get(u(c),this.DATA_KEY)}static getOrCreateInstance(c,g={}){return this.getInstance(c)||new this(c,typeof g=="object"?g:null)}static get VERSION(){return"5.3.8"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(c){return`${c}${this.EVENT_KEY}`}}const Be=E=>{let c=E.getAttribute("data-bs-target");if(!c||c==="#"){let g=E.getAttribute("href");if(!g||!g.includes("#")&&!g.startsWith("."))return null;g.includes("#")&&!g.startsWith("#")&&(g=`#${g.split("#")[1]}`),c=g&&g!=="#"?g.trim():null}return c?c.split(",").map(g=>r(g)).join(","):null},le={find:(E,c=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(c,E)),findOne:(E,c=document.documentElement)=>Element.prototype.querySelector.call(c,E),children:(E,c)=>[].concat(...E.children).filter(g=>g.matches(c)),parents(E,c){const g=[];let T=E.parentNode.closest(c);for(;T;)g.push(T),T=T.parentNode.closest(c);return g},prev(E,c){let g=E.previousElementSibling;for(;g;){if(g.matches(c))return[g];g=g.previousElementSibling}return[]},next(E,c){let g=E.nextElementSibling;for(;g;){if(g.matches(c))return[g];g=g.nextElementSibling}return[]},focusableChildren(E){const c=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(g=>`${g}:not([tabindex^="-"])`).join(",");return this.find(c,E).filter(g=>!d(g)&&h(g))},getSelectorFromElement(E){const c=Be(E);return c&&le.findOne(c)?c:null},getElementFromSelector(E){const c=Be(E);return c?le.findOne(c):null},getMultipleElementsFromSelector(E){const c=Be(E);return c?le.find(c):[]}},Oe=(E,c="hide")=>{const g=`click.dismiss${E.EVENT_KEY}`,T=E.NAME;O.on(document,g,`[data-bs-dismiss="${T}"]`,function(U){if(["A","AREA"].includes(this.tagName)&&U.preventDefault(),d(this))return;const k=le.getElementFromSelector(this)||this.closest(`.${T}`);E.getOrCreateInstance(k)[c]()})},nt=".bs.alert",X=`close${nt}`,kt=`closed${nt}`;class De extends be{static get NAME(){return"alert"}close(){if(O.trigger(this._element,X).defaultPrevented)return;this._element.classList.remove("show");const c=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,c)}_destroyElement(){this._element.remove(),O.trigger(this._element,kt),this.dispose()}static jQueryInterface(c){return this.each(function(){const g=De.getOrCreateInstance(this);if(typeof c=="string"){if(g[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);g[c](this)}})}}Oe(De,"close"),M(De);const We='[data-bs-toggle="button"]';class we extends be{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(c){return this.each(function(){const g=we.getOrCreateInstance(this);c==="toggle"&&g[c]()})}}O.on(document,"click.bs.button.data-api",We,E=>{E.preventDefault();const c=E.target.closest(We);we.getOrCreateInstance(c).toggle()}),M(we);const _t=".bs.swipe",Ze=`touchstart${_t}`,C=`touchmove${_t}`,x=`touchend${_t}`,G=`pointerdown${_t}`,de=`pointerup${_t}`,ce={endCallback:null,leftCallback:null,rightCallback:null},he={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Le extends me{constructor(c,g){super(),this._element=c,c&&Le.isSupported()&&(this._config=this._getConfig(g),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return ce}static get DefaultType(){return he}static get NAME(){return"swipe"}dispose(){O.off(this._element,_t)}_start(c){this._supportPointerEvents?this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX):this._deltaX=c.touches[0].clientX}_end(c){this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX-this._deltaX),this._handleSwipe(),y(this._config.endCallback)}_move(c){this._deltaX=c.touches&&c.touches.length>1?0:c.touches[0].clientX-this._deltaX}_handleSwipe(){const c=Math.abs(this._deltaX);if(c<=40)return;const g=c/this._deltaX;this._deltaX=0,g&&y(g>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(O.on(this._element,G,c=>this._start(c)),O.on(this._element,de,c=>this._end(c)),this._element.classList.add("pointer-event")):(O.on(this._element,Ze,c=>this._start(c)),O.on(this._element,C,c=>this._move(c)),O.on(this._element,x,c=>this._end(c)))}_eventIsPointerPenTouch(c){return this._supportPointerEvents&&(c.pointerType==="pen"||c.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const ve=".bs.carousel",Ae=".data-api",Ue="ArrowLeft",it="ArrowRight",ae="next",ut="prev",je="left",$e="right",Fe=`slide${ve}`,Se=`slid${ve}`,P=`keydown${ve}`,ge=`mouseenter${ve}`,Ne=`mouseleave${ve}`,Ce=`dragstart${ve}`,fe=`load${ve}${Ae}`,N=`click${ve}${Ae}`,_e="carousel",xe="active",Ge=".active",ke=".carousel-item",ht=Ge+ke,dt={[Ue]:$e,[it]:je},Ut={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Ft={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ct extends be{constructor(c,g){super(c,g),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=le.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===_e&&this.cycle()}static get Default(){return Ut}static get DefaultType(){return Ft}static get NAME(){return"carousel"}next(){this._slide(ae)}nextWhenVisible(){!document.hidden&&h(this._element)&&this.next()}prev(){this._slide(ut)}pause(){this._isSliding&&a(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?O.one(this._element,Se,()=>this.cycle()):this.cycle())}to(c){const g=this._getItems();if(c>g.length-1||c<0)return;if(this._isSliding)return void O.one(this._element,Se,()=>this.to(c));const T=this._getItemIndex(this._getActive());if(T===c)return;const U=c>T?ae:ut;this._slide(U,g[c])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(c){return c.defaultInterval=c.interval,c}_addEventListeners(){this._config.keyboard&&O.on(this._element,P,c=>this._keydown(c)),this._config.pause==="hover"&&(O.on(this._element,ge,()=>this.pause()),O.on(this._element,Ne,()=>this._maybeEnableCycle())),this._config.touch&&Le.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const g of le.find(".carousel-item img",this._element))O.on(g,Ce,T=>T.preventDefault());const c={leftCallback:()=>this._slide(this._directionToOrder(je)),rightCallback:()=>this._slide(this._directionToOrder($e)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new Le(this._element,c)}_keydown(c){if(/input|textarea/i.test(c.target.tagName))return;const g=dt[c.key];g&&(c.preventDefault(),this._slide(this._directionToOrder(g)))}_getItemIndex(c){return this._getItems().indexOf(c)}_setActiveIndicatorElement(c){if(!this._indicatorsElement)return;const g=le.findOne(Ge,this._indicatorsElement);g.classList.remove(xe),g.removeAttribute("aria-current");const T=le.findOne(`[data-bs-slide-to="${c}"]`,this._indicatorsElement);T&&(T.classList.add(xe),T.setAttribute("aria-current","true"))}_updateInterval(){const c=this._activeElement||this._getActive();if(!c)return;const g=Number.parseInt(c.getAttribute("data-bs-interval"),10);this._config.interval=g||this._config.defaultInterval}_slide(c,g=null){if(this._isSliding)return;const T=this._getActive(),U=c===ae,k=g||I(this._getItems(),T,U,this._config.wrap);if(k===T)return;const Z=this._getItemIndex(k),re=Me=>O.trigger(this._element,Me,{relatedTarget:k,direction:this._orderToDirection(c),from:this._getItemIndex(T),to:Z});if(re(Fe).defaultPrevented||!T||!k)return;const ye=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(Z),this._activeElement=k;const Re=U?"carousel-item-start":"carousel-item-end",Pe=U?"carousel-item-next":"carousel-item-prev";k.classList.add(Pe),v(k),T.classList.add(Re),k.classList.add(Re),this._queueCallback(()=>{k.classList.remove(Re,Pe),k.classList.add(xe),T.classList.remove(xe,Pe,Re),this._isSliding=!1,re(Se)},T,this._isAnimated()),ye&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return le.findOne(ht,this._element)}_getItems(){return le.find(ke,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(c){return p()?c===je?ut:ae:c===je?ae:ut}_orderToDirection(c){return p()?c===ut?je:$e:c===ut?$e:je}static jQueryInterface(c){return this.each(function(){const g=ct.getOrCreateInstance(this,c);if(typeof c!="number"){if(typeof c=="string"){if(g[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);g[c]()}}else g.to(c)})}}O.on(document,N,"[data-bs-slide], [data-bs-slide-to]",function(E){const c=le.getElementFromSelector(this);if(!c||!c.classList.contains(_e))return;E.preventDefault();const g=ct.getOrCreateInstance(c),T=this.getAttribute("data-bs-slide-to");return T?(g.to(T),void g._maybeEnableCycle()):oe.getDataAttribute(this,"slide")==="next"?(g.next(),void g._maybeEnableCycle()):(g.prev(),void g._maybeEnableCycle())}),O.on(window,fe,()=>{const E=le.find('[data-bs-ride="carousel"]');for(const c of E)ct.getOrCreateInstance(c)}),M(ct);const Lt=".bs.collapse",Sn=`show${Lt}`,Oo=`shown${Lt}`,al=`hide${Lt}`,Bs=`hidden${Lt}`,Uo=`click${Lt}.data-api`,Pi="show",hi="collapse",is="collapsing",ll=`:scope .${hi} .${hi}`,Kr='[data-bs-toggle="collapse"]',cl={parent:null,toggle:!0},w={parent:"(null|element)",toggle:"boolean"};class H extends be{constructor(c,g){super(c,g),this._isTransitioning=!1,this._triggerArray=[];const T=le.find(Kr);for(const U of T){const k=le.getSelectorFromElement(U),Z=le.find(k).filter(re=>re===this._element);k!==null&&Z.length&&this._triggerArray.push(U)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return cl}static get DefaultType(){return w}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let c=[];if(this._config.parent&&(c=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(U=>U!==this._element).map(U=>H.getOrCreateInstance(U,{toggle:!1}))),c.length&&c[0]._isTransitioning||O.trigger(this._element,Sn).defaultPrevented)return;for(const U of c)U.hide();const g=this._getDimension();this._element.classList.remove(hi),this._element.classList.add(is),this._element.style[g]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const T=`scroll${g[0].toUpperCase()+g.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(is),this._element.classList.add(hi,Pi),this._element.style[g]="",O.trigger(this._element,Oo)},this._element,!0),this._element.style[g]=`${this._element[T]}px`}hide(){if(this._isTransitioning||!this._isShown()||O.trigger(this._element,al).defaultPrevented)return;const c=this._getDimension();this._element.style[c]=`${this._element.getBoundingClientRect()[c]}px`,v(this._element),this._element.classList.add(is),this._element.classList.remove(hi,Pi);for(const g of this._triggerArray){const T=le.getElementFromSelector(g);T&&!this._isShown(T)&&this._addAriaAndCollapsedClass([g],!1)}this._isTransitioning=!0,this._element.style[c]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(is),this._element.classList.add(hi),O.trigger(this._element,Bs)},this._element,!0)}_isShown(c=this._element){return c.classList.contains(Pi)}_configAfterMerge(c){return c.toggle=!!c.toggle,c.parent=u(c.parent),c}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const c=this._getFirstLevelChildren(Kr);for(const g of c){const T=le.getElementFromSelector(g);T&&this._addAriaAndCollapsedClass([g],this._isShown(T))}}_getFirstLevelChildren(c){const g=le.find(ll,this._config.parent);return le.find(c,this._config.parent).filter(T=>!g.includes(T))}_addAriaAndCollapsedClass(c,g){if(c.length)for(const T of c)T.classList.toggle("collapsed",!g),T.setAttribute("aria-expanded",g)}static jQueryInterface(c){const g={};return typeof c=="string"&&/show|hide/.test(c)&&(g.toggle=!1),this.each(function(){const T=H.getOrCreateInstance(this,g);if(typeof c=="string"){if(T[c]===void 0)throw new TypeError(`No method named "${c}"`);T[c]()}})}}O.on(document,Uo,Kr,function(E){(E.target.tagName==="A"||E.delegateTarget&&E.delegateTarget.tagName==="A")&&E.preventDefault();for(const c of le.getMultipleElementsFromSelector(this))H.getOrCreateInstance(c,{toggle:!1}).toggle()}),M(H);var V="top",$="bottom",z="right",Ee="left",Ie="auto",He=[V,$,z,Ee],Ve="start",qe="end",Je="clippingParents",Qe="viewport",St="popper",en="reference",Ht=He.reduce(function(E,c){return E.concat([c+"-"+Ve,c+"-"+qe])},[]),_n=[].concat(He,[Ie]).reduce(function(E,c){return E.concat([c,c+"-"+Ve,c+"-"+qe])},[]),Pt="beforeRead",rt="read",ks="afterRead",Nt="beforeMain",qn="main",Zr="afterMain",Di="beforeWrite",Hs="write",$t="afterWrite",Yn=[Pt,rt,ks,Nt,qn,Zr,Di,Hs,$t];function dn(E){return E?(E.nodeName||"").toLowerCase():null}function Dt(E){if(E==null)return window;if(E.toString()!=="[object Window]"){var c=E.ownerDocument;return c&&c.defaultView||window}return E}function kn(E){return E instanceof Dt(E).Element||E instanceof Element}function fn(E){return E instanceof Dt(E).HTMLElement||E instanceof HTMLElement}function Vs(E){return typeof ShadowRoot<"u"&&(E instanceof Dt(E).ShadowRoot||E instanceof ShadowRoot)}const ul={name:"applyStyles",enabled:!0,phase:"write",fn:function(E){var c=E.state;Object.keys(c.elements).forEach(function(g){var T=c.styles[g]||{},U=c.attributes[g]||{},k=c.elements[g];fn(k)&&dn(k)&&(Object.assign(k.style,T),Object.keys(U).forEach(function(Z){var re=U[Z];re===!1?k.removeAttribute(Z):k.setAttribute(Z,re===!0?"":re)}))})},effect:function(E){var c=E.state,g={popper:{position:c.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(c.elements.popper.style,g.popper),c.styles=g,c.elements.arrow&&Object.assign(c.elements.arrow.style,g.arrow),function(){Object.keys(c.elements).forEach(function(T){var U=c.elements[T],k=c.attributes[T]||{},Z=Object.keys(c.styles.hasOwnProperty(T)?c.styles[T]:g[T]).reduce(function(re,ye){return re[ye]="",re},{});fn(U)&&dn(U)&&(Object.assign(U.style,Z),Object.keys(k).forEach(function(re){U.removeAttribute(re)}))})}},requires:["computeStyles"]};function Kn(E){return E.split("-")[0]}var ss=Math.max,Fo=Math.min,zs=Math.round;function hl(){var E=navigator.userAgentData;return E!=null&&E.brands&&Array.isArray(E.brands)?E.brands.map(function(c){return c.brand+"/"+c.version}).join(" "):navigator.userAgent}function Iu(){return!/^((?!chrome|android).)*safari/i.test(hl())}function Gs(E,c,g){c===void 0&&(c=!1),g===void 0&&(g=!1);var T=E.getBoundingClientRect(),U=1,k=1;c&&fn(E)&&(U=E.offsetWidth>0&&zs(T.width)/E.offsetWidth||1,k=E.offsetHeight>0&&zs(T.height)/E.offsetHeight||1);var Z=(kn(E)?Dt(E):window).visualViewport,re=!Iu()&&g,ye=(T.left+(re&&Z?Z.offsetLeft:0))/U,Re=(T.top+(re&&Z?Z.offsetTop:0))/k,Pe=T.width/U,Me=T.height/k;return{width:Pe,height:Me,top:Re,right:ye+Pe,bottom:Re+Me,left:ye,x:ye,y:Re}}function dl(E){var c=Gs(E),g=E.offsetWidth,T=E.offsetHeight;return Math.abs(c.width-g)<=1&&(g=c.width),Math.abs(c.height-T)<=1&&(T=c.height),{x:E.offsetLeft,y:E.offsetTop,width:g,height:T}}function Nu(E,c){var g=c.getRootNode&&c.getRootNode();if(E.contains(c))return!0;if(g&&Vs(g)){var T=c;do{if(T&&E.isSameNode(T))return!0;T=T.parentNode||T.host}while(T)}return!1}function di(E){return Dt(E).getComputedStyle(E)}function yg(E){return["table","td","th"].indexOf(dn(E))>=0}function Ii(E){return((kn(E)?E.ownerDocument:E.document)||window.document).documentElement}function Bo(E){return dn(E)==="html"?E:E.assignedSlot||E.parentNode||(Vs(E)?E.host:null)||Ii(E)}function Ou(E){return fn(E)&&di(E).position!=="fixed"?E.offsetParent:null}function Jr(E){for(var c=Dt(E),g=Ou(E);g&&yg(g)&&di(g).position==="static";)g=Ou(g);return g&&(dn(g)==="html"||dn(g)==="body"&&di(g).position==="static")?c:g||function(T){var U=/firefox/i.test(hl());if(/Trident/i.test(hl())&&fn(T)&&di(T).position==="fixed")return null;var k=Bo(T);for(Vs(k)&&(k=k.host);fn(k)&&["html","body"].indexOf(dn(k))<0;){var Z=di(k);if(Z.transform!=="none"||Z.perspective!=="none"||Z.contain==="paint"||["transform","perspective"].indexOf(Z.willChange)!==-1||U&&Z.willChange==="filter"||U&&Z.filter&&Z.filter!=="none")return k;k=k.parentNode}return null}(E)||c}function fl(E){return["top","bottom"].indexOf(E)>=0?"x":"y"}function Qr(E,c,g){return ss(E,Fo(c,g))}function Uu(E){return Object.assign({},{top:0,right:0,bottom:0,left:0},E)}function Fu(E,c){return c.reduce(function(g,T){return g[T]=E,g},{})}const Bu={name:"arrow",enabled:!0,phase:"main",fn:function(E){var c,g=E.state,T=E.name,U=E.options,k=g.elements.arrow,Z=g.modifiersData.popperOffsets,re=Kn(g.placement),ye=fl(re),Re=[Ee,z].indexOf(re)>=0?"height":"width";if(k&&Z){var Pe=function(At,xt){return Uu(typeof(At=typeof At=="function"?At(Object.assign({},xt.rects,{placement:xt.placement})):At)!="number"?At:Fu(At,He))}(U.padding,g),Me=dl(k),ot=ye==="y"?V:Ee,Xe=ye==="y"?$:z,et=g.rects.reference[Re]+g.rects.reference[ye]-Z[ye]-g.rects.popper[Re],Ye=Z[ye]-g.rects.reference[ye],tt=Jr(k),Mt=tt?ye==="y"?tt.clientHeight||0:tt.clientWidth||0:0,It=et/2-Ye/2,ft=Pe[ot],Et=Mt-Me[Re]-Pe[Xe],at=Mt/2-Me[Re]/2+It,vt=Qr(ft,at,Et),yt=ye;g.modifiersData[T]=((c={})[yt]=vt,c.centerOffset=vt-at,c)}},effect:function(E){var c=E.state,g=E.options.element,T=g===void 0?"[data-popper-arrow]":g;T!=null&&(typeof T!="string"||(T=c.elements.popper.querySelector(T)))&&Nu(c.elements.popper,T)&&(c.elements.arrow=T)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ws(E){return E.split("-")[1]}var xg={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ku(E){var c,g=E.popper,T=E.popperRect,U=E.placement,k=E.variation,Z=E.offsets,re=E.position,ye=E.gpuAcceleration,Re=E.adaptive,Pe=E.roundOffsets,Me=E.isFixed,ot=Z.x,Xe=ot===void 0?0:ot,et=Z.y,Ye=et===void 0?0:et,tt=typeof Pe=="function"?Pe({x:Xe,y:Ye}):{x:Xe,y:Ye};Xe=tt.x,Ye=tt.y;var Mt=Z.hasOwnProperty("x"),It=Z.hasOwnProperty("y"),ft=Ee,Et=V,at=window;if(Re){var vt=Jr(g),yt="clientHeight",At="clientWidth";vt===Dt(g)&&di(vt=Ii(g)).position!=="static"&&re==="absolute"&&(yt="scrollHeight",At="scrollWidth"),(U===V||(U===Ee||U===z)&&k===qe)&&(Et=$,Ye-=(Me&&vt===at&&at.visualViewport?at.visualViewport.height:vt[yt])-T.height,Ye*=ye?1:-1),U!==Ee&&(U!==V&&U!==$||k!==qe)||(ft=z,Xe-=(Me&&vt===at&&at.visualViewport?at.visualViewport.width:vt[At])-T.width,Xe*=ye?1:-1)}var xt,Gt=Object.assign({position:re},Re&&xg),vn=Pe===!0?function(Vn,sn){var An=Vn.x,wn=Vn.y,Vt=sn.devicePixelRatio||1;return{x:zs(An*Vt)/Vt||0,y:zs(wn*Vt)/Vt||0}}({x:Xe,y:Ye},Dt(g)):{x:Xe,y:Ye};return Xe=vn.x,Ye=vn.y,ye?Object.assign({},Gt,((xt={})[Et]=It?"0":"",xt[ft]=Mt?"0":"",xt.transform=(at.devicePixelRatio||1)<=1?"translate("+Xe+"px, "+Ye+"px)":"translate3d("+Xe+"px, "+Ye+"px, 0)",xt)):Object.assign({},Gt,((c={})[Et]=It?Ye+"px":"",c[ft]=Mt?Xe+"px":"",c.transform="",c))}const pl={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(E){var c=E.state,g=E.options,T=g.gpuAcceleration,U=T===void 0||T,k=g.adaptive,Z=k===void 0||k,re=g.roundOffsets,ye=re===void 0||re,Re={placement:Kn(c.placement),variation:Ws(c.placement),popper:c.elements.popper,popperRect:c.rects.popper,gpuAcceleration:U,isFixed:c.options.strategy==="fixed"};c.modifiersData.popperOffsets!=null&&(c.styles.popper=Object.assign({},c.styles.popper,ku(Object.assign({},Re,{offsets:c.modifiersData.popperOffsets,position:c.options.strategy,adaptive:Z,roundOffsets:ye})))),c.modifiersData.arrow!=null&&(c.styles.arrow=Object.assign({},c.styles.arrow,ku(Object.assign({},Re,{offsets:c.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:ye})))),c.attributes.popper=Object.assign({},c.attributes.popper,{"data-popper-placement":c.placement})},data:{}};var ko={passive:!0};const ml={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(E){var c=E.state,g=E.instance,T=E.options,U=T.scroll,k=U===void 0||U,Z=T.resize,re=Z===void 0||Z,ye=Dt(c.elements.popper),Re=[].concat(c.scrollParents.reference,c.scrollParents.popper);return k&&Re.forEach(function(Pe){Pe.addEventListener("scroll",g.update,ko)}),re&&ye.addEventListener("resize",g.update,ko),function(){k&&Re.forEach(function(Pe){Pe.removeEventListener("scroll",g.update,ko)}),re&&ye.removeEventListener("resize",g.update,ko)}},data:{}};var Tg={left:"right",right:"left",bottom:"top",top:"bottom"};function Ho(E){return E.replace(/left|right|bottom|top/g,function(c){return Tg[c]})}var Sg={start:"end",end:"start"};function Hu(E){return E.replace(/start|end/g,function(c){return Sg[c]})}function gl(E){var c=Dt(E);return{scrollLeft:c.pageXOffset,scrollTop:c.pageYOffset}}function _l(E){return Gs(Ii(E)).left+gl(E).scrollLeft}function vl(E){var c=di(E),g=c.overflow,T=c.overflowX,U=c.overflowY;return/auto|scroll|overlay|hidden/.test(g+U+T)}function Vu(E){return["html","body","#document"].indexOf(dn(E))>=0?E.ownerDocument.body:fn(E)&&vl(E)?E:Vu(Bo(E))}function eo(E,c){var g;c===void 0&&(c=[]);var T=Vu(E),U=T===((g=E.ownerDocument)==null?void 0:g.body),k=Dt(T),Z=U?[k].concat(k.visualViewport||[],vl(T)?T:[]):T,re=c.concat(Z);return U?re:re.concat(eo(Bo(Z)))}function El(E){return Object.assign({},E,{left:E.x,top:E.y,right:E.x+E.width,bottom:E.y+E.height})}function zu(E,c,g){return c===Qe?El(function(T,U){var k=Dt(T),Z=Ii(T),re=k.visualViewport,ye=Z.clientWidth,Re=Z.clientHeight,Pe=0,Me=0;if(re){ye=re.width,Re=re.height;var ot=Iu();(ot||!ot&&U==="fixed")&&(Pe=re.offsetLeft,Me=re.offsetTop)}return{width:ye,height:Re,x:Pe+_l(T),y:Me}}(E,g)):kn(c)?function(T,U){var k=Gs(T,!1,U==="fixed");return k.top=k.top+T.clientTop,k.left=k.left+T.clientLeft,k.bottom=k.top+T.clientHeight,k.right=k.left+T.clientWidth,k.width=T.clientWidth,k.height=T.clientHeight,k.x=k.left,k.y=k.top,k}(c,g):El(function(T){var U,k=Ii(T),Z=gl(T),re=(U=T.ownerDocument)==null?void 0:U.body,ye=ss(k.scrollWidth,k.clientWidth,re?re.scrollWidth:0,re?re.clientWidth:0),Re=ss(k.scrollHeight,k.clientHeight,re?re.scrollHeight:0,re?re.clientHeight:0),Pe=-Z.scrollLeft+_l(T),Me=-Z.scrollTop;return di(re||k).direction==="rtl"&&(Pe+=ss(k.clientWidth,re?re.clientWidth:0)-ye),{width:ye,height:Re,x:Pe,y:Me}}(Ii(E)))}function Gu(E){var c,g=E.reference,T=E.element,U=E.placement,k=U?Kn(U):null,Z=U?Ws(U):null,re=g.x+g.width/2-T.width/2,ye=g.y+g.height/2-T.height/2;switch(k){case V:c={x:re,y:g.y-T.height};break;case $:c={x:re,y:g.y+g.height};break;case z:c={x:g.x+g.width,y:ye};break;case Ee:c={x:g.x-T.width,y:ye};break;default:c={x:g.x,y:g.y}}var Re=k?fl(k):null;if(Re!=null){var Pe=Re==="y"?"height":"width";switch(Z){case Ve:c[Re]=c[Re]-(g[Pe]/2-T[Pe]/2);break;case qe:c[Re]=c[Re]+(g[Pe]/2-T[Pe]/2)}}return c}function $s(E,c){c===void 0&&(c={});var g=c,T=g.placement,U=T===void 0?E.placement:T,k=g.strategy,Z=k===void 0?E.strategy:k,re=g.boundary,ye=re===void 0?Je:re,Re=g.rootBoundary,Pe=Re===void 0?Qe:Re,Me=g.elementContext,ot=Me===void 0?St:Me,Xe=g.altBoundary,et=Xe!==void 0&&Xe,Ye=g.padding,tt=Ye===void 0?0:Ye,Mt=Uu(typeof tt!="number"?tt:Fu(tt,He)),It=ot===St?en:St,ft=E.rects.popper,Et=E.elements[et?It:ot],at=function(sn,An,wn,Vt){var Zn=An==="clippingParents"?function(Ct){var rn=eo(Bo(Ct)),Cn=["absolute","fixed"].indexOf(di(Ct).position)>=0&&fn(Ct)?Jr(Ct):Ct;return kn(Cn)?rn.filter(function(Oi){return kn(Oi)&&Nu(Oi,Cn)&&dn(Oi)!=="body"}):[]}(sn):[].concat(An),Jn=[].concat(Zn,[wn]),qs=Jn[0],qt=Jn.reduce(function(Ct,rn){var Cn=zu(sn,rn,Vt);return Ct.top=ss(Cn.top,Ct.top),Ct.right=Fo(Cn.right,Ct.right),Ct.bottom=Fo(Cn.bottom,Ct.bottom),Ct.left=ss(Cn.left,Ct.left),Ct},zu(sn,qs,Vt));return qt.width=qt.right-qt.left,qt.height=qt.bottom-qt.top,qt.x=qt.left,qt.y=qt.top,qt}(kn(Et)?Et:Et.contextElement||Ii(E.elements.popper),ye,Pe,Z),vt=Gs(E.elements.reference),yt=Gu({reference:vt,element:ft,placement:U}),At=El(Object.assign({},ft,yt)),xt=ot===St?At:vt,Gt={top:at.top-xt.top+Mt.top,bottom:xt.bottom-at.bottom+Mt.bottom,left:at.left-xt.left+Mt.left,right:xt.right-at.right+Mt.right},vn=E.modifiersData.offset;if(ot===St&&vn){var Vn=vn[U];Object.keys(Gt).forEach(function(sn){var An=[z,$].indexOf(sn)>=0?1:-1,wn=[V,$].indexOf(sn)>=0?"y":"x";Gt[sn]+=Vn[wn]*An})}return Gt}function Mg(E,c){c===void 0&&(c={});var g=c,T=g.placement,U=g.boundary,k=g.rootBoundary,Z=g.padding,re=g.flipVariations,ye=g.allowedAutoPlacements,Re=ye===void 0?_n:ye,Pe=Ws(T),Me=Pe?re?Ht:Ht.filter(function(et){return Ws(et)===Pe}):He,ot=Me.filter(function(et){return Re.indexOf(et)>=0});ot.length===0&&(ot=Me);var Xe=ot.reduce(function(et,Ye){return et[Ye]=$s(E,{placement:Ye,boundary:U,rootBoundary:k,padding:Z})[Kn(Ye)],et},{});return Object.keys(Xe).sort(function(et,Ye){return Xe[et]-Xe[Ye]})}const Wu={name:"flip",enabled:!0,phase:"main",fn:function(E){var c=E.state,g=E.options,T=E.name;if(!c.modifiersData[T]._skip){for(var U=g.mainAxis,k=U===void 0||U,Z=g.altAxis,re=Z===void 0||Z,ye=g.fallbackPlacements,Re=g.padding,Pe=g.boundary,Me=g.rootBoundary,ot=g.altBoundary,Xe=g.flipVariations,et=Xe===void 0||Xe,Ye=g.allowedAutoPlacements,tt=c.options.placement,Mt=Kn(tt),It=ye||(Mt!==tt&&et?function(Ct){if(Kn(Ct)===Ie)return[];var rn=Ho(Ct);return[Hu(Ct),rn,Hu(rn)]}(tt):[Ho(tt)]),ft=[tt].concat(It).reduce(function(Ct,rn){return Ct.concat(Kn(rn)===Ie?Mg(c,{placement:rn,boundary:Pe,rootBoundary:Me,padding:Re,flipVariations:et,allowedAutoPlacements:Ye}):rn)},[]),Et=c.rects.reference,at=c.rects.popper,vt=new Map,yt=!0,At=ft[0],xt=0;xt<ft.length;xt++){var Gt=ft[xt],vn=Kn(Gt),Vn=Ws(Gt)===Ve,sn=[V,$].indexOf(vn)>=0,An=sn?"width":"height",wn=$s(c,{placement:Gt,boundary:Pe,rootBoundary:Me,altBoundary:ot,padding:Re}),Vt=sn?Vn?z:Ee:Vn?$:V;Et[An]>at[An]&&(Vt=Ho(Vt));var Zn=Ho(Vt),Jn=[];if(k&&Jn.push(wn[vn]<=0),re&&Jn.push(wn[Vt]<=0,wn[Zn]<=0),Jn.every(function(Ct){return Ct})){At=Gt,yt=!1;break}vt.set(Gt,Jn)}if(yt)for(var qs=function(Ct){var rn=ft.find(function(Cn){var Oi=vt.get(Cn);if(Oi)return Oi.slice(0,Ct).every(function(Yo){return Yo})});if(rn)return At=rn,"break"},qt=et?3:1;qt>0&&qs(qt)!=="break";qt--);c.placement!==At&&(c.modifiersData[T]._skip=!0,c.placement=At,c.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function $u(E,c,g){return g===void 0&&(g={x:0,y:0}),{top:E.top-c.height-g.y,right:E.right-c.width+g.x,bottom:E.bottom-c.height+g.y,left:E.left-c.width-g.x}}function Xu(E){return[V,z,$,Ee].some(function(c){return E[c]>=0})}const ju={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(E){var c=E.state,g=E.name,T=c.rects.reference,U=c.rects.popper,k=c.modifiersData.preventOverflow,Z=$s(c,{elementContext:"reference"}),re=$s(c,{altBoundary:!0}),ye=$u(Z,T),Re=$u(re,U,k),Pe=Xu(ye),Me=Xu(Re);c.modifiersData[g]={referenceClippingOffsets:ye,popperEscapeOffsets:Re,isReferenceHidden:Pe,hasPopperEscaped:Me},c.attributes.popper=Object.assign({},c.attributes.popper,{"data-popper-reference-hidden":Pe,"data-popper-escaped":Me})}},qu={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(E){var c=E.state,g=E.options,T=E.name,U=g.offset,k=U===void 0?[0,0]:U,Z=_n.reduce(function(Pe,Me){return Pe[Me]=function(ot,Xe,et){var Ye=Kn(ot),tt=[Ee,V].indexOf(Ye)>=0?-1:1,Mt=typeof et=="function"?et(Object.assign({},Xe,{placement:ot})):et,It=Mt[0],ft=Mt[1];return It=It||0,ft=(ft||0)*tt,[Ee,z].indexOf(Ye)>=0?{x:ft,y:It}:{x:It,y:ft}}(Me,c.rects,k),Pe},{}),re=Z[c.placement],ye=re.x,Re=re.y;c.modifiersData.popperOffsets!=null&&(c.modifiersData.popperOffsets.x+=ye,c.modifiersData.popperOffsets.y+=Re),c.modifiersData[T]=Z}},bl={name:"popperOffsets",enabled:!0,phase:"read",fn:function(E){var c=E.state,g=E.name;c.modifiersData[g]=Gu({reference:c.rects.reference,element:c.rects.popper,placement:c.placement})},data:{}},Yu={name:"preventOverflow",enabled:!0,phase:"main",fn:function(E){var c=E.state,g=E.options,T=E.name,U=g.mainAxis,k=U===void 0||U,Z=g.altAxis,re=Z!==void 0&&Z,ye=g.boundary,Re=g.rootBoundary,Pe=g.altBoundary,Me=g.padding,ot=g.tether,Xe=ot===void 0||ot,et=g.tetherOffset,Ye=et===void 0?0:et,tt=$s(c,{boundary:ye,rootBoundary:Re,padding:Me,altBoundary:Pe}),Mt=Kn(c.placement),It=Ws(c.placement),ft=!It,Et=fl(Mt),at=Et==="x"?"y":"x",vt=c.modifiersData.popperOffsets,yt=c.rects.reference,At=c.rects.popper,xt=typeof Ye=="function"?Ye(Object.assign({},c.rects,{placement:c.placement})):Ye,Gt=typeof xt=="number"?{mainAxis:xt,altAxis:xt}:Object.assign({mainAxis:0,altAxis:0},xt),vn=c.modifiersData.offset?c.modifiersData.offset[c.placement]:null,Vn={x:0,y:0};if(vt){if(k){var sn,An=Et==="y"?V:Ee,wn=Et==="y"?$:z,Vt=Et==="y"?"height":"width",Zn=vt[Et],Jn=Zn+tt[An],qs=Zn-tt[wn],qt=Xe?-At[Vt]/2:0,Ct=It===Ve?yt[Vt]:At[Vt],rn=It===Ve?-At[Vt]:-yt[Vt],Cn=c.elements.arrow,Oi=Xe&&Cn?dl(Cn):{width:0,height:0},Yo=c.modifiersData["arrow#persistent"]?c.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Oh=Yo[An],Uh=Yo[wn],Ko=Qr(0,yt[Vt],Oi[Vt]),iv=ft?yt[Vt]/2-qt-Ko-Oh-Gt.mainAxis:Ct-Ko-Oh-Gt.mainAxis,sv=ft?-yt[Vt]/2+qt+Ko+Uh+Gt.mainAxis:rn+Ko+Uh+Gt.mainAxis,Nl=c.elements.arrow&&Jr(c.elements.arrow),rv=Nl?Et==="y"?Nl.clientTop||0:Nl.clientLeft||0:0,Fh=(sn=vn==null?void 0:vn[Et])!=null?sn:0,ov=Zn+sv-Fh,Bh=Qr(Xe?Fo(Jn,Zn+iv-Fh-rv):Jn,Zn,Xe?ss(qs,ov):qs);vt[Et]=Bh,Vn[Et]=Bh-Zn}if(re){var kh,av=Et==="x"?V:Ee,lv=Et==="x"?$:z,ds=vt[at],Zo=at==="y"?"height":"width",Hh=ds+tt[av],Vh=ds-tt[lv],Ol=[V,Ee].indexOf(Mt)!==-1,zh=(kh=vn==null?void 0:vn[at])!=null?kh:0,Gh=Ol?Hh:ds-yt[Zo]-At[Zo]-zh+Gt.altAxis,Wh=Ol?ds+yt[Zo]+At[Zo]-zh-Gt.altAxis:Vh,$h=Xe&&Ol?function(cv,uv,Ul){var Xh=Qr(cv,uv,Ul);return Xh>Ul?Ul:Xh}(Gh,ds,Wh):Qr(Xe?Gh:Hh,ds,Xe?Wh:Vh);vt[at]=$h,Vn[at]=$h-ds}c.modifiersData[T]=Vn}},requiresIfExists:["offset"]};function Ag(E,c,g){g===void 0&&(g=!1);var T,U,k=fn(c),Z=fn(c)&&function(Me){var ot=Me.getBoundingClientRect(),Xe=zs(ot.width)/Me.offsetWidth||1,et=zs(ot.height)/Me.offsetHeight||1;return Xe!==1||et!==1}(c),re=Ii(c),ye=Gs(E,Z,g),Re={scrollLeft:0,scrollTop:0},Pe={x:0,y:0};return(k||!k&&!g)&&((dn(c)!=="body"||vl(re))&&(Re=(T=c)!==Dt(T)&&fn(T)?{scrollLeft:(U=T).scrollLeft,scrollTop:U.scrollTop}:gl(T)),fn(c)?((Pe=Gs(c,!0)).x+=c.clientLeft,Pe.y+=c.clientTop):re&&(Pe.x=_l(re))),{x:ye.left+Re.scrollLeft-Pe.x,y:ye.top+Re.scrollTop-Pe.y,width:ye.width,height:ye.height}}function wg(E){var c=new Map,g=new Set,T=[];function U(k){g.add(k.name),[].concat(k.requires||[],k.requiresIfExists||[]).forEach(function(Z){if(!g.has(Z)){var re=c.get(Z);re&&U(re)}}),T.push(k)}return E.forEach(function(k){c.set(k.name,k)}),E.forEach(function(k){g.has(k.name)||U(k)}),T}var Ku={placement:"bottom",modifiers:[],strategy:"absolute"};function Zu(){for(var E=arguments.length,c=new Array(E),g=0;g<E;g++)c[g]=arguments[g];return!c.some(function(T){return!(T&&typeof T.getBoundingClientRect=="function")})}function Vo(E){E===void 0&&(E={});var c=E,g=c.defaultModifiers,T=g===void 0?[]:g,U=c.defaultOptions,k=U===void 0?Ku:U;return function(Z,re,ye){ye===void 0&&(ye=k);var Re,Pe,Me={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ku,k),modifiersData:{},elements:{reference:Z,popper:re},attributes:{},styles:{}},ot=[],Xe=!1,et={state:Me,setOptions:function(tt){var Mt=typeof tt=="function"?tt(Me.options):tt;Ye(),Me.options=Object.assign({},k,Me.options,Mt),Me.scrollParents={reference:kn(Z)?eo(Z):Z.contextElement?eo(Z.contextElement):[],popper:eo(re)};var It,ft,Et=function(at){var vt=wg(at);return Yn.reduce(function(yt,At){return yt.concat(vt.filter(function(xt){return xt.phase===At}))},[])}((It=[].concat(T,Me.options.modifiers),ft=It.reduce(function(at,vt){var yt=at[vt.name];return at[vt.name]=yt?Object.assign({},yt,vt,{options:Object.assign({},yt.options,vt.options),data:Object.assign({},yt.data,vt.data)}):vt,at},{}),Object.keys(ft).map(function(at){return ft[at]})));return Me.orderedModifiers=Et.filter(function(at){return at.enabled}),Me.orderedModifiers.forEach(function(at){var vt=at.name,yt=at.options,At=yt===void 0?{}:yt,xt=at.effect;if(typeof xt=="function"){var Gt=xt({state:Me,name:vt,instance:et,options:At});ot.push(Gt||function(){})}}),et.update()},forceUpdate:function(){if(!Xe){var tt=Me.elements,Mt=tt.reference,It=tt.popper;if(Zu(Mt,It)){Me.rects={reference:Ag(Mt,Jr(It),Me.options.strategy==="fixed"),popper:dl(It)},Me.reset=!1,Me.placement=Me.options.placement,Me.orderedModifiers.forEach(function(xt){return Me.modifiersData[xt.name]=Object.assign({},xt.data)});for(var ft=0;ft<Me.orderedModifiers.length;ft++)if(Me.reset!==!0){var Et=Me.orderedModifiers[ft],at=Et.fn,vt=Et.options,yt=vt===void 0?{}:vt,At=Et.name;typeof at=="function"&&(Me=at({state:Me,options:yt,name:At,instance:et})||Me)}else Me.reset=!1,ft=-1}}},update:(Re=function(){return new Promise(function(tt){et.forceUpdate(),tt(Me)})},function(){return Pe||(Pe=new Promise(function(tt){Promise.resolve().then(function(){Pe=void 0,tt(Re())})})),Pe}),destroy:function(){Ye(),Xe=!0}};if(!Zu(Z,re))return et;function Ye(){ot.forEach(function(tt){return tt()}),ot=[]}return et.setOptions(ye).then(function(tt){!Xe&&ye.onFirstUpdate&&ye.onFirstUpdate(tt)}),et}}var Cg=Vo(),Rg=Vo({defaultModifiers:[ml,bl,pl,ul]}),yl=Vo({defaultModifiers:[ml,bl,pl,ul,qu,Wu,Yu,Bu,ju]});const Ju=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Zr,afterRead:ks,afterWrite:$t,applyStyles:ul,arrow:Bu,auto:Ie,basePlacements:He,beforeMain:Nt,beforeRead:Pt,beforeWrite:Di,bottom:$,clippingParents:Je,computeStyles:pl,createPopper:yl,createPopperBase:Cg,createPopperLite:Rg,detectOverflow:$s,end:qe,eventListeners:ml,flip:Wu,hide:ju,left:Ee,main:qn,modifierPhases:Yn,offset:qu,placements:_n,popper:St,popperGenerator:Vo,popperOffsets:bl,preventOverflow:Yu,read:rt,reference:en,right:z,start:Ve,top:V,variationPlacements:Ht,viewport:Qe,write:Hs},Symbol.toStringTag,{value:"Module"})),Qu="dropdown",rs=".bs.dropdown",xl=".data-api",Lg="ArrowUp",eh="ArrowDown",Pg=`hide${rs}`,Dg=`hidden${rs}`,Ig=`show${rs}`,Ng=`shown${rs}`,th=`click${rs}${xl}`,nh=`keydown${rs}${xl}`,Og=`keyup${rs}${xl}`,Xs="show",os='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ug=`${os}.${Xs}`,zo=".dropdown-menu",Fg=p()?"top-end":"top-start",Bg=p()?"top-start":"top-end",kg=p()?"bottom-end":"bottom-start",Hg=p()?"bottom-start":"bottom-end",Vg=p()?"left-start":"right-start",zg=p()?"right-start":"left-start",Gg={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Wg={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Hn extends be{constructor(c,g){super(c,g),this._popper=null,this._parent=this._element.parentNode,this._menu=le.next(this._element,zo)[0]||le.prev(this._element,zo)[0]||le.findOne(zo,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Gg}static get DefaultType(){return Wg}static get NAME(){return Qu}toggle(){return this._isShown()?this.hide():this.show()}show(){if(d(this._element)||this._isShown())return;const c={relatedTarget:this._element};if(!O.trigger(this._element,Ig,c).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const g of[].concat(...document.body.children))O.on(g,"mouseover",_);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Xs),this._element.classList.add(Xs),O.trigger(this._element,Ng,c)}}hide(){if(d(this._element)||!this._isShown())return;const c={relatedTarget:this._element};this._completeHide(c)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(c){if(!O.trigger(this._element,Pg,c).defaultPrevented){if("ontouchstart"in document.documentElement)for(const g of[].concat(...document.body.children))O.off(g,"mouseover",_);this._popper&&this._popper.destroy(),this._menu.classList.remove(Xs),this._element.classList.remove(Xs),this._element.setAttribute("aria-expanded","false"),oe.removeDataAttribute(this._menu,"popper"),O.trigger(this._element,Dg,c)}}_getConfig(c){if(typeof(c=super._getConfig(c)).reference=="object"&&!l(c.reference)&&typeof c.reference.getBoundingClientRect!="function")throw new TypeError(`${Qu.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return c}_createPopper(){if(Ju===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let c=this._element;this._config.reference==="parent"?c=this._parent:l(this._config.reference)?c=u(this._config.reference):typeof this._config.reference=="object"&&(c=this._config.reference);const g=this._getPopperConfig();this._popper=yl(c,this._menu,g)}_isShown(){return this._menu.classList.contains(Xs)}_getPlacement(){const c=this._parent;if(c.classList.contains("dropend"))return Vg;if(c.classList.contains("dropstart"))return zg;if(c.classList.contains("dropup-center"))return"top";if(c.classList.contains("dropdown-center"))return"bottom";const g=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return c.classList.contains("dropup")?g?Bg:Fg:g?Hg:kg}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(g=>Number.parseInt(g,10)):typeof c=="function"?g=>c(g,this._element):c}_getPopperConfig(){const c={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(oe.setDataAttribute(this._menu,"popper","static"),c.modifiers=[{name:"applyStyles",enabled:!1}]),{...c,...y(this._config.popperConfig,[void 0,c])}}_selectMenuItem({key:c,target:g}){const T=le.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(U=>h(U));T.length&&I(T,g,c===eh,!T.includes(g)).focus()}static jQueryInterface(c){return this.each(function(){const g=Hn.getOrCreateInstance(this,c);if(typeof c=="string"){if(g[c]===void 0)throw new TypeError(`No method named "${c}"`);g[c]()}})}static clearMenus(c){if(c.button===2||c.type==="keyup"&&c.key!=="Tab")return;const g=le.find(Ug);for(const T of g){const U=Hn.getInstance(T);if(!U||U._config.autoClose===!1)continue;const k=c.composedPath(),Z=k.includes(U._menu);if(k.includes(U._element)||U._config.autoClose==="inside"&&!Z||U._config.autoClose==="outside"&&Z||U._menu.contains(c.target)&&(c.type==="keyup"&&c.key==="Tab"||/input|select|option|textarea|form/i.test(c.target.tagName)))continue;const re={relatedTarget:U._element};c.type==="click"&&(re.clickEvent=c),U._completeHide(re)}}static dataApiKeydownHandler(c){const g=/input|textarea/i.test(c.target.tagName),T=c.key==="Escape",U=[Lg,eh].includes(c.key);if(!U&&!T||g&&!T)return;c.preventDefault();const k=this.matches(os)?this:le.prev(this,os)[0]||le.next(this,os)[0]||le.findOne(os,c.delegateTarget.parentNode),Z=Hn.getOrCreateInstance(k);if(U)return c.stopPropagation(),Z.show(),void Z._selectMenuItem(c);Z._isShown()&&(c.stopPropagation(),Z.hide(),k.focus())}}O.on(document,nh,os,Hn.dataApiKeydownHandler),O.on(document,nh,zo,Hn.dataApiKeydownHandler),O.on(document,th,Hn.clearMenus),O.on(document,Og,Hn.clearMenus),O.on(document,th,os,function(E){E.preventDefault(),Hn.getOrCreateInstance(this).toggle()}),M(Hn);const ih="backdrop",sh="show",rh=`mousedown.bs.${ih}`,$g={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Xg={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class oh extends me{constructor(c){super(),this._config=this._getConfig(c),this._isAppended=!1,this._element=null}static get Default(){return $g}static get DefaultType(){return Xg}static get NAME(){return ih}show(c){if(!this._config.isVisible)return void y(c);this._append();const g=this._getElement();this._config.isAnimated&&v(g),g.classList.add(sh),this._emulateAnimation(()=>{y(c)})}hide(c){this._config.isVisible?(this._getElement().classList.remove(sh),this._emulateAnimation(()=>{this.dispose(),y(c)})):y(c)}dispose(){this._isAppended&&(O.off(this._element,rh),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const c=document.createElement("div");c.className=this._config.className,this._config.isAnimated&&c.classList.add("fade"),this._element=c}return this._element}_configAfterMerge(c){return c.rootElement=u(c.rootElement),c}_append(){if(this._isAppended)return;const c=this._getElement();this._config.rootElement.append(c),O.on(c,rh,()=>{y(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(c){A(c,this._getElement(),this._config.isAnimated)}}const Go=".bs.focustrap",jg=`focusin${Go}`,qg=`keydown.tab${Go}`,ah="backward",Yg={autofocus:!0,trapElement:null},Kg={autofocus:"boolean",trapElement:"element"};class lh extends me{constructor(c){super(),this._config=this._getConfig(c),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Yg}static get DefaultType(){return Kg}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),O.off(document,Go),O.on(document,jg,c=>this._handleFocusin(c)),O.on(document,qg,c=>this._handleKeydown(c)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,O.off(document,Go))}_handleFocusin(c){const{trapElement:g}=this._config;if(c.target===document||c.target===g||g.contains(c.target))return;const T=le.focusableChildren(g);T.length===0?g.focus():this._lastTabNavDirection===ah?T[T.length-1].focus():T[0].focus()}_handleKeydown(c){c.key==="Tab"&&(this._lastTabNavDirection=c.shiftKey?ah:"forward")}}const ch=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",uh=".sticky-top",Wo="padding-right",hh="margin-right";class Tl{constructor(){this._element=document.body}getWidth(){const c=document.documentElement.clientWidth;return Math.abs(window.innerWidth-c)}hide(){const c=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Wo,g=>g+c),this._setElementAttributes(ch,Wo,g=>g+c),this._setElementAttributes(uh,hh,g=>g-c)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Wo),this._resetElementAttributes(ch,Wo),this._resetElementAttributes(uh,hh)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(c,g,T){const U=this.getWidth();this._applyManipulationCallback(c,k=>{if(k!==this._element&&window.innerWidth>k.clientWidth+U)return;this._saveInitialAttribute(k,g);const Z=window.getComputedStyle(k).getPropertyValue(g);k.style.setProperty(g,`${T(Number.parseFloat(Z))}px`)})}_saveInitialAttribute(c,g){const T=c.style.getPropertyValue(g);T&&oe.setDataAttribute(c,g,T)}_resetElementAttributes(c,g){this._applyManipulationCallback(c,T=>{const U=oe.getDataAttribute(T,g);U!==null?(oe.removeDataAttribute(T,g),T.style.setProperty(g,U)):T.style.removeProperty(g)})}_applyManipulationCallback(c,g){if(l(c))g(c);else for(const T of le.find(c,this._element))g(T)}}const Mn=".bs.modal",Zg=`hide${Mn}`,Jg=`hidePrevented${Mn}`,dh=`hidden${Mn}`,fh=`show${Mn}`,Qg=`shown${Mn}`,e_=`resize${Mn}`,t_=`click.dismiss${Mn}`,n_=`mousedown.dismiss${Mn}`,i_=`keydown.dismiss${Mn}`,s_=`click${Mn}.data-api`,ph="modal-open",mh="show",Sl="modal-static",r_={backdrop:!0,focus:!0,keyboard:!0},o_={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class as extends be{constructor(c,g){super(c,g),this._dialog=le.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Tl,this._addEventListeners()}static get Default(){return r_}static get DefaultType(){return o_}static get NAME(){return"modal"}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){this._isShown||this._isTransitioning||O.trigger(this._element,fh,{relatedTarget:c}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(ph),this._adjustDialog(),this._backdrop.show(()=>this._showElement(c)))}hide(){this._isShown&&!this._isTransitioning&&(O.trigger(this._element,Zg).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(mh),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){O.off(window,Mn),O.off(this._dialog,Mn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new oh({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new lh({trapElement:this._element})}_showElement(c){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const g=le.findOne(".modal-body",this._dialog);g&&(g.scrollTop=0),v(this._element),this._element.classList.add(mh),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,O.trigger(this._element,Qg,{relatedTarget:c})},this._dialog,this._isAnimated())}_addEventListeners(){O.on(this._element,i_,c=>{c.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),O.on(window,e_,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),O.on(this._element,n_,c=>{O.one(this._element,t_,g=>{this._element===c.target&&this._element===g.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(ph),this._resetAdjustments(),this._scrollBar.reset(),O.trigger(this._element,dh)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(O.trigger(this._element,Jg).defaultPrevented)return;const c=this._element.scrollHeight>document.documentElement.clientHeight,g=this._element.style.overflowY;g==="hidden"||this._element.classList.contains(Sl)||(c||(this._element.style.overflowY="hidden"),this._element.classList.add(Sl),this._queueCallback(()=>{this._element.classList.remove(Sl),this._queueCallback(()=>{this._element.style.overflowY=g},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const c=this._element.scrollHeight>document.documentElement.clientHeight,g=this._scrollBar.getWidth(),T=g>0;if(T&&!c){const U=p()?"paddingLeft":"paddingRight";this._element.style[U]=`${g}px`}if(!T&&c){const U=p()?"paddingRight":"paddingLeft";this._element.style[U]=`${g}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(c,g){return this.each(function(){const T=as.getOrCreateInstance(this,c);if(typeof c=="string"){if(T[c]===void 0)throw new TypeError(`No method named "${c}"`);T[c](g)}})}}O.on(document,s_,'[data-bs-toggle="modal"]',function(E){const c=le.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&E.preventDefault(),O.one(c,fh,T=>{T.defaultPrevented||O.one(c,dh,()=>{h(this)&&this.focus()})});const g=le.findOne(".modal.show");g&&as.getInstance(g).hide(),as.getOrCreateInstance(c).toggle(this)}),Oe(as),M(as);const fi=".bs.offcanvas",gh=".data-api",a_=`load${fi}${gh}`,_h="show",vh="showing",Eh="hiding",bh=".offcanvas.show",l_=`show${fi}`,c_=`shown${fi}`,u_=`hide${fi}`,yh=`hidePrevented${fi}`,xh=`hidden${fi}`,h_=`resize${fi}`,d_=`click${fi}${gh}`,f_=`keydown.dismiss${fi}`,p_={backdrop:!0,keyboard:!0,scroll:!1},m_={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class pi extends be{constructor(c,g){super(c,g),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return p_}static get DefaultType(){return m_}static get NAME(){return"offcanvas"}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){this._isShown||O.trigger(this._element,l_,{relatedTarget:c}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Tl().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(vh),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(_h),this._element.classList.remove(vh),O.trigger(this._element,c_,{relatedTarget:c})},this._element,!0))}hide(){this._isShown&&(O.trigger(this._element,u_).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Eh),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(_h,Eh),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Tl().reset(),O.trigger(this._element,xh)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const c=!!this._config.backdrop;return new oh({className:"offcanvas-backdrop",isVisible:c,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:c?()=>{this._config.backdrop!=="static"?this.hide():O.trigger(this._element,yh)}:null})}_initializeFocusTrap(){return new lh({trapElement:this._element})}_addEventListeners(){O.on(this._element,f_,c=>{c.key==="Escape"&&(this._config.keyboard?this.hide():O.trigger(this._element,yh))})}static jQueryInterface(c){return this.each(function(){const g=pi.getOrCreateInstance(this,c);if(typeof c=="string"){if(g[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);g[c](this)}})}}O.on(document,d_,'[data-bs-toggle="offcanvas"]',function(E){const c=le.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&E.preventDefault(),d(this))return;O.one(c,xh,()=>{h(this)&&this.focus()});const g=le.findOne(bh);g&&g!==c&&pi.getInstance(g).hide(),pi.getOrCreateInstance(c).toggle(this)}),O.on(window,a_,()=>{for(const E of le.find(bh))pi.getOrCreateInstance(E).show()}),O.on(window,h_,()=>{for(const E of le.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(E).position!=="fixed"&&pi.getOrCreateInstance(E).hide()}),Oe(pi),M(pi);const Th={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},g_=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),__=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,v_=(E,c)=>{const g=E.nodeName.toLowerCase();return c.includes(g)?!g_.has(g)||!!__.test(E.nodeValue):c.filter(T=>T instanceof RegExp).some(T=>T.test(g))},E_={allowList:Th,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},b_={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},y_={entry:"(string|element|function|null)",selector:"(string|element)"};class x_ extends me{constructor(c){super(),this._config=this._getConfig(c)}static get Default(){return E_}static get DefaultType(){return b_}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(c=>this._resolvePossibleFunction(c)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(c){return this._checkContent(c),this._config.content={...this._config.content,...c},this}toHtml(){const c=document.createElement("div");c.innerHTML=this._maybeSanitize(this._config.template);for(const[U,k]of Object.entries(this._config.content))this._setContent(c,k,U);const g=c.children[0],T=this._resolvePossibleFunction(this._config.extraClass);return T&&g.classList.add(...T.split(" ")),g}_typeCheckConfig(c){super._typeCheckConfig(c),this._checkContent(c.content)}_checkContent(c){for(const[g,T]of Object.entries(c))super._typeCheckConfig({selector:g,entry:T},y_)}_setContent(c,g,T){const U=le.findOne(T,c);U&&((g=this._resolvePossibleFunction(g))?l(g)?this._putElementInTemplate(u(g),U):this._config.html?U.innerHTML=this._maybeSanitize(g):U.textContent=g:U.remove())}_maybeSanitize(c){return this._config.sanitize?function(g,T,U){if(!g.length)return g;if(U&&typeof U=="function")return U(g);const k=new window.DOMParser().parseFromString(g,"text/html"),Z=[].concat(...k.body.querySelectorAll("*"));for(const re of Z){const ye=re.nodeName.toLowerCase();if(!Object.keys(T).includes(ye)){re.remove();continue}const Re=[].concat(...re.attributes),Pe=[].concat(T["*"]||[],T[ye]||[]);for(const Me of Re)v_(Me,Pe)||re.removeAttribute(Me.nodeName)}return k.body.innerHTML}(c,this._config.allowList,this._config.sanitizeFn):c}_resolvePossibleFunction(c){return y(c,[void 0,this])}_putElementInTemplate(c,g){if(this._config.html)return g.innerHTML="",void g.append(c);g.textContent=c.textContent}}const T_=new Set(["sanitize","allowList","sanitizeFn"]),Ml="fade",$o="show",S_=".tooltip-inner",Sh=".modal",Mh="hide.bs.modal",to="hover",Al="focus",wl="click",M_={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},A_={allowList:Th,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},w_={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ls extends be{constructor(c,g){if(Ju===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(c,g),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return A_}static get DefaultType(){return w_}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),O.off(this._element.closest(Sh),Mh,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const c=O.trigger(this._element,this.constructor.eventName("show")),g=(f(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(c.defaultPrevented||!g)return;this._disposePopper();const T=this._getTipElement();this._element.setAttribute("aria-describedby",T.getAttribute("id"));const{container:U}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(U.append(T),O.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(T),T.classList.add($o),"ontouchstart"in document.documentElement)for(const k of[].concat(...document.body.children))O.on(k,"mouseover",_);this._queueCallback(()=>{O.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!O.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove($o),"ontouchstart"in document.documentElement)for(const c of[].concat(...document.body.children))O.off(c,"mouseover",_);this._activeTrigger[wl]=!1,this._activeTrigger[Al]=!1,this._activeTrigger[to]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),O.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(c){const g=this._getTemplateFactory(c).toHtml();if(!g)return null;g.classList.remove(Ml,$o),g.classList.add(`bs-${this.constructor.NAME}-auto`);const T=(U=>{do U+=Math.floor(1e6*Math.random());while(document.getElementById(U));return U})(this.constructor.NAME).toString();return g.setAttribute("id",T),this._isAnimated()&&g.classList.add(Ml),g}setContent(c){this._newContent=c,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(c){return this._templateFactory?this._templateFactory.changeContent(c):this._templateFactory=new x_({...this._config,content:c,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[S_]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(c){return this.constructor.getOrCreateInstance(c.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Ml)}_isShown(){return this.tip&&this.tip.classList.contains($o)}_createPopper(c){const g=y(this._config.placement,[this,c,this._element]),T=M_[g.toUpperCase()];return yl(this._element,c,this._getPopperConfig(T))}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(g=>Number.parseInt(g,10)):typeof c=="function"?g=>c(g,this._element):c}_resolvePossibleFunction(c){return y(c,[this._element,this._element])}_getPopperConfig(c){const g={placement:c,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:T=>{this._getTipElement().setAttribute("data-popper-placement",T.state.placement)}}]};return{...g,...y(this._config.popperConfig,[void 0,g])}}_setListeners(){const c=this._config.trigger.split(" ");for(const g of c)if(g==="click")O.on(this._element,this.constructor.eventName("click"),this._config.selector,T=>{const U=this._initializeOnDelegatedTarget(T);U._activeTrigger[wl]=!(U._isShown()&&U._activeTrigger[wl]),U.toggle()});else if(g!=="manual"){const T=g===to?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),U=g===to?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");O.on(this._element,T,this._config.selector,k=>{const Z=this._initializeOnDelegatedTarget(k);Z._activeTrigger[k.type==="focusin"?Al:to]=!0,Z._enter()}),O.on(this._element,U,this._config.selector,k=>{const Z=this._initializeOnDelegatedTarget(k);Z._activeTrigger[k.type==="focusout"?Al:to]=Z._element.contains(k.relatedTarget),Z._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},O.on(this._element.closest(Sh),Mh,this._hideModalHandler)}_fixTitle(){const c=this._element.getAttribute("title");c&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",c),this._element.setAttribute("data-bs-original-title",c),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(c,g){clearTimeout(this._timeout),this._timeout=setTimeout(c,g)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(c){const g=oe.getDataAttributes(this._element);for(const T of Object.keys(g))T_.has(T)&&delete g[T];return c={...g,...typeof c=="object"&&c?c:{}},c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c.container=c.container===!1?document.body:u(c.container),typeof c.delay=="number"&&(c.delay={show:c.delay,hide:c.delay}),typeof c.title=="number"&&(c.title=c.title.toString()),typeof c.content=="number"&&(c.content=c.content.toString()),c}_getDelegateConfig(){const c={};for(const[g,T]of Object.entries(this._config))this.constructor.Default[g]!==T&&(c[g]=T);return c.selector=!1,c.trigger="manual",c}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(c){return this.each(function(){const g=ls.getOrCreateInstance(this,c);if(typeof c=="string"){if(g[c]===void 0)throw new TypeError(`No method named "${c}"`);g[c]()}})}}M(ls);const C_=".popover-header",R_=".popover-body",L_={...ls.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},P_={...ls.DefaultType,content:"(null|string|element|function)"};class Xo extends ls{static get Default(){return L_}static get DefaultType(){return P_}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[C_]:this._getTitle(),[R_]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(c){return this.each(function(){const g=Xo.getOrCreateInstance(this,c);if(typeof c=="string"){if(g[c]===void 0)throw new TypeError(`No method named "${c}"`);g[c]()}})}}M(Xo);const Cl=".bs.scrollspy",D_=`activate${Cl}`,Ah=`click${Cl}`,I_=`load${Cl}.data-api`,js="active",Rl="[href]",wh=".nav-link",N_=`${wh}, .nav-item > ${wh}, .list-group-item`,O_={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},U_={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class no extends be{constructor(c,g){super(c,g),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return O_}static get DefaultType(){return U_}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const c of this._observableSections.values())this._observer.observe(c)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(c){return c.target=u(c.target)||document.body,c.rootMargin=c.offset?`${c.offset}px 0px -30%`:c.rootMargin,typeof c.threshold=="string"&&(c.threshold=c.threshold.split(",").map(g=>Number.parseFloat(g))),c}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(O.off(this._config.target,Ah),O.on(this._config.target,Ah,Rl,c=>{const g=this._observableSections.get(c.target.hash);if(g){c.preventDefault();const T=this._rootElement||window,U=g.offsetTop-this._element.offsetTop;if(T.scrollTo)return void T.scrollTo({top:U,behavior:"smooth"});T.scrollTop=U}}))}_getNewObserver(){const c={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(g=>this._observerCallback(g),c)}_observerCallback(c){const g=Z=>this._targetLinks.get(`#${Z.target.id}`),T=Z=>{this._previousScrollData.visibleEntryTop=Z.target.offsetTop,this._process(g(Z))},U=(this._rootElement||document.documentElement).scrollTop,k=U>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=U;for(const Z of c){if(!Z.isIntersecting){this._activeTarget=null,this._clearActiveClass(g(Z));continue}const re=Z.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(k&&re){if(T(Z),!U)return}else k||re||T(Z)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const c=le.find(Rl,this._config.target);for(const g of c){if(!g.hash||d(g))continue;const T=le.findOne(decodeURI(g.hash),this._element);h(T)&&(this._targetLinks.set(decodeURI(g.hash),g),this._observableSections.set(g.hash,T))}}_process(c){this._activeTarget!==c&&(this._clearActiveClass(this._config.target),this._activeTarget=c,c.classList.add(js),this._activateParents(c),O.trigger(this._element,D_,{relatedTarget:c}))}_activateParents(c){if(c.classList.contains("dropdown-item"))le.findOne(".dropdown-toggle",c.closest(".dropdown")).classList.add(js);else for(const g of le.parents(c,".nav, .list-group"))for(const T of le.prev(g,N_))T.classList.add(js)}_clearActiveClass(c){c.classList.remove(js);const g=le.find(`${Rl}.${js}`,c);for(const T of g)T.classList.remove(js)}static jQueryInterface(c){return this.each(function(){const g=no.getOrCreateInstance(this,c);if(typeof c=="string"){if(g[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);g[c]()}})}}O.on(window,I_,()=>{for(const E of le.find('[data-bs-spy="scroll"]'))no.getOrCreateInstance(E)}),M(no);const cs=".bs.tab",F_=`hide${cs}`,B_=`hidden${cs}`,k_=`show${cs}`,H_=`shown${cs}`,V_=`click${cs}`,z_=`keydown${cs}`,G_=`load${cs}`,W_="ArrowLeft",Ch="ArrowRight",$_="ArrowUp",Rh="ArrowDown",Ll="Home",Lh="End",us="active",Ph="fade",Pl="show",Dh=".dropdown-toggle",Dl=`:not(${Dh})`,Ih='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Il=`.nav-link${Dl}, .list-group-item${Dl}, [role="tab"]${Dl}, ${Ih}`,X_=`.${us}[data-bs-toggle="tab"], .${us}[data-bs-toggle="pill"], .${us}[data-bs-toggle="list"]`;class hs extends be{constructor(c){super(c),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),O.on(this._element,z_,g=>this._keydown(g)))}static get NAME(){return"tab"}show(){const c=this._element;if(this._elemIsActive(c))return;const g=this._getActiveElem(),T=g?O.trigger(g,F_,{relatedTarget:c}):null;O.trigger(c,k_,{relatedTarget:g}).defaultPrevented||T&&T.defaultPrevented||(this._deactivate(g,c),this._activate(c,g))}_activate(c,g){c&&(c.classList.add(us),this._activate(le.getElementFromSelector(c)),this._queueCallback(()=>{c.getAttribute("role")==="tab"?(c.removeAttribute("tabindex"),c.setAttribute("aria-selected",!0),this._toggleDropDown(c,!0),O.trigger(c,H_,{relatedTarget:g})):c.classList.add(Pl)},c,c.classList.contains(Ph)))}_deactivate(c,g){c&&(c.classList.remove(us),c.blur(),this._deactivate(le.getElementFromSelector(c)),this._queueCallback(()=>{c.getAttribute("role")==="tab"?(c.setAttribute("aria-selected",!1),c.setAttribute("tabindex","-1"),this._toggleDropDown(c,!1),O.trigger(c,B_,{relatedTarget:g})):c.classList.remove(Pl)},c,c.classList.contains(Ph)))}_keydown(c){if(![W_,Ch,$_,Rh,Ll,Lh].includes(c.key))return;c.stopPropagation(),c.preventDefault();const g=this._getChildren().filter(U=>!d(U));let T;if([Ll,Lh].includes(c.key))T=g[c.key===Ll?0:g.length-1];else{const U=[Ch,Rh].includes(c.key);T=I(g,c.target,U,!0)}T&&(T.focus({preventScroll:!0}),hs.getOrCreateInstance(T).show())}_getChildren(){return le.find(Il,this._parent)}_getActiveElem(){return this._getChildren().find(c=>this._elemIsActive(c))||null}_setInitialAttributes(c,g){this._setAttributeIfNotExists(c,"role","tablist");for(const T of g)this._setInitialAttributesOnChild(T)}_setInitialAttributesOnChild(c){c=this._getInnerElement(c);const g=this._elemIsActive(c),T=this._getOuterElement(c);c.setAttribute("aria-selected",g),T!==c&&this._setAttributeIfNotExists(T,"role","presentation"),g||c.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(c,"role","tab"),this._setInitialAttributesOnTargetPanel(c)}_setInitialAttributesOnTargetPanel(c){const g=le.getElementFromSelector(c);g&&(this._setAttributeIfNotExists(g,"role","tabpanel"),c.id&&this._setAttributeIfNotExists(g,"aria-labelledby",`${c.id}`))}_toggleDropDown(c,g){const T=this._getOuterElement(c);if(!T.classList.contains("dropdown"))return;const U=(k,Z)=>{const re=le.findOne(k,T);re&&re.classList.toggle(Z,g)};U(Dh,us),U(".dropdown-menu",Pl),T.setAttribute("aria-expanded",g)}_setAttributeIfNotExists(c,g,T){c.hasAttribute(g)||c.setAttribute(g,T)}_elemIsActive(c){return c.classList.contains(us)}_getInnerElement(c){return c.matches(Il)?c:le.findOne(Il,c)}_getOuterElement(c){return c.closest(".nav-item, .list-group-item")||c}static jQueryInterface(c){return this.each(function(){const g=hs.getOrCreateInstance(this);if(typeof c=="string"){if(g[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);g[c]()}})}}O.on(document,V_,Ih,function(E){["A","AREA"].includes(this.tagName)&&E.preventDefault(),d(this)||hs.getOrCreateInstance(this).show()}),O.on(window,G_,()=>{for(const E of le.find(X_))hs.getOrCreateInstance(E)}),M(hs);const Ni=".bs.toast",j_=`mouseover${Ni}`,q_=`mouseout${Ni}`,Y_=`focusin${Ni}`,K_=`focusout${Ni}`,Z_=`hide${Ni}`,J_=`hidden${Ni}`,Q_=`show${Ni}`,ev=`shown${Ni}`,Nh="hide",jo="show",qo="showing",tv={animation:"boolean",autohide:"boolean",delay:"number"},nv={animation:!0,autohide:!0,delay:5e3};class io extends be{constructor(c,g){super(c,g),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return nv}static get DefaultType(){return tv}static get NAME(){return"toast"}show(){O.trigger(this._element,Q_).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Nh),v(this._element),this._element.classList.add(jo,qo),this._queueCallback(()=>{this._element.classList.remove(qo),O.trigger(this._element,ev),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(O.trigger(this._element,Z_).defaultPrevented||(this._element.classList.add(qo),this._queueCallback(()=>{this._element.classList.add(Nh),this._element.classList.remove(qo,jo),O.trigger(this._element,J_)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(jo),super.dispose()}isShown(){return this._element.classList.contains(jo)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(c,g){switch(c.type){case"mouseover":case"mouseout":this._hasMouseInteraction=g;break;case"focusin":case"focusout":this._hasKeyboardInteraction=g}if(g)return void this._clearTimeout();const T=c.relatedTarget;this._element===T||this._element.contains(T)||this._maybeScheduleHide()}_setListeners(){O.on(this._element,j_,c=>this._onInteraction(c,!0)),O.on(this._element,q_,c=>this._onInteraction(c,!1)),O.on(this._element,Y_,c=>this._onInteraction(c,!0)),O.on(this._element,K_,c=>this._onInteraction(c,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(c){return this.each(function(){const g=io.getOrCreateInstance(this,c);if(typeof c=="string"){if(g[c]===void 0)throw new TypeError(`No method named "${c}"`);g[c](this)}})}}return Oe(io),M(io),{Alert:De,Button:we,Carousel:ct,Collapse:H,Dropdown:Hn,Modal:as,Offcanvas:pi,Popover:Xo,ScrollSpy:no,Tab:hs,Toast:io,Tooltip:ls}})})(dv);class fv{constructor(e){this.parent=e}getHTML(){return`
            <header class="mobile-header">
                <label for="mobile-menu-toggle" class="burger">☰</label>
                <div class="mobile-logo"><img src="assets/bmstu_logo.png" class="mobile-logo-img"></div>
                <div class="mobile-theme"><label for="theme-switch">🌓</label></div>
            </header>

            <div class="mobile-menu" style="background-color: #000;">
                <ul style="list-style: none; padding: 20px 0;">
                    <li><button class="nav-btn-custom" data-page="main">Главная</button></li>
                    <li><button class="nav-btn-custom" data-page="main">Секции</button></li>
                    <li><button class="nav-btn-custom" data-page="calc">Калькулятор</button></li>
                    <li><button class="nav-btn-custom" data-page="form">Добавить</button></li>
                </ul>
            </div>

            <div class="hero-menu d-none d-md-flex justify-content-between align-items-center px-4 pt-3" style="position: absolute; width: 100%; z-index: 1000;">
                <img src="assets/bmstu_logo.png" class="logo" style="height: 60px; cursor: pointer;" data-page="main">
                <div class="nav-buttons d-flex gap-4">
                    <button class="btn text-white fw-bold" data-page="main">Секции</button>
                    <button class="btn text-white fw-bold" data-page="calc">Калькулятор</button>
                    <button class="btn text-white fw-bold" data-page="form">+ Добавить</button>
                </div>
                <div class="theme-switch-hero"><label for="theme-switch" style="color:white; cursor:pointer; font-size:1.5rem;">🌓</label></div>
            </div>
        `}render(e){this.parent.innerHTML=this.getHTML(),this.parent.querySelectorAll("[data-page]").forEach(t=>{t.onclick=()=>{e(t.dataset.page),document.getElementById("mobile-menu-toggle").checked=!1}})}}class pv{constructor(e){this.parent=e}getHTML(){return`
            <div class="hero-slider">
                <div class="slides-container">
                    <div class="slide" data-slide="1">
                        <img src="assets/7613.jpg" alt="Спорт">
                        <div class="slide-content">
                            <h2>Открыт набор в секцию плавания</h2>
                            <p>С 1 сентября стартует набор в группы начальной подготовки.</p>
                        </div>
                    </div>
                    <div class="slide" data-slide="2">
                        <img src="assets/86490.jpg" alt="Спорт">
                        <div class="slide-content">
                            <h2>Соревнования по волейболу</h2>
                            <p>15 апреля состоится турнир между факультетами.</p>
                        </div>
                    </div>
                    <div class="slide" data-slide="3">
                        <img src="assets/2149552285.jpg" alt="Спорт">
                        <div class="slide-content">
                            <h2>Новый тренажёрный зал</h2>
                            <p>В главном корпусе открылся современный тренажёрный зал.</p>
                        </div>
                    </div>
                </div>
                <div class="slider-nav">
                    <label for="hero1"></label>
                    <label for="hero2"></label>
                    <label for="hero3"></label>
                </div>
            </div>
        `}render(){this.parent.innerHTML=this.getHTML()}}class mv{getHTML(e){return`
            <article class="news-card shadow-sm d-flex flex-column bg-white"
                     style="min-width: 300px; max-width: 300px; flex-shrink: 0; border-radius: 10px; user-select: none;">

                <img src="${e.src}" draggable="false" alt="${e.title}"
                     style="height: 200px; object-fit: cover; width: 100%; border-top-left-radius: 10px; border-top-right-radius: 10px; pointer-events: none;">

                <div class="news-content d-flex flex-column flex-grow-1 p-3">
                    <h4>${e.title}</h4>
                    <p class="flex-grow-1 text-muted" style="font-size: 0.9rem;">${e.text}</p>
                    <div class="d-flex gap-2 mt-auto pt-3 flex-wrap">
                        <button class="btn btn-primary flex-grow-1 action-info" data-id="${e.id}">Подробнее</button>
                        <button class="btn btn-outline-secondary action-edit" data-id="${e.id}">Редактировать</button>
                        <button class="btn btn-outline-danger action-delete" data-id="${e.id}">Удалить</button>
                    </div>
                </div>
            </article>
        `}}const Ys="/api/sections";async function so(i,e,t){const n={method:i};t&&(n.headers={"Content-Type":"application/json"},n.body=JSON.stringify(t));const s=await fetch(e,n);if(!s.ok)throw new Error(`HTTP ${s.status}`);return s.json()}const $i={getSections(i={}){const e=new URLSearchParams(Object.fromEntries(Object.entries(i).filter(([,t])=>t!==""&&t!==void 0))).toString();return so("GET",e?`${Ys}?${e}`:Ys)},getSectionById(i){return so("GET",`${Ys}/${i}`)},createSection(i){return so("POST",Ys,i)},updateSection(i,e){return so("PUT",`${Ys}/${i}`,e)},deleteSection(i){return so("DELETE",`${Ys}/${i}`)}};class gv{constructor(e,t){this.parent=e,this.navigate=t}renderCards(e){const t=document.getElementById("carousel-track");if(t.innerHTML="",e.length===0){t.innerHTML='<p class="text-muted p-3">Ничего не найдено</p>';return}const n=new mv;e.forEach(s=>t.insertAdjacentHTML("beforeend",n.getHTML(s)))}async render(){this.parent.innerHTML=`
            <div class="container mt-4 mb-5">
                <div class="news-section">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h3 class="m-0" style="color: #a51c30;">Наши секции</h3>
                        <div class="d-flex gap-2 flex-wrap">
                            <input type="text" id="filter-input" class="form-control" placeholder="Поиск по названию...">
                            <select id="filter-available" class="form-select" style="width:auto;">
                                <option value="">Все</option>
                                <option value="true">Есть места</option>
                            </select>
                            <button class="btn btn-success fw-bold" id="btn-add">+ Добавить</button>
                        </div>
                    </div>

                    <div class="carousel-wrapper position-relative" style="display: flex; align-items: center; gap: 10px;">
                        <button class="btn btn-dark rounded-circle shadow d-none d-md-flex justify-content-center align-items-center" id="btn-prev" style="min-width: 45px; height: 45px; z-index: 5;">&#10094;</button>

                        <div id="carousel-track" style="display: flex; overflow-x: auto; gap: 20px; padding: 15px 5px; flex-grow: 1; cursor: grab; scroll-behavior: auto;">
                            <p class="text-muted p-3">Загрузка...</p>
                        </div>

                        <button class="btn btn-dark rounded-circle shadow d-none d-md-flex justify-content-center align-items-center" id="btn-next" style="min-width: 45px; height: 45px; z-index: 5;">&#10095;</button>
                    </div>
                </div>
            </div>`;try{const a=await $i.getSections();this.renderCards(a)}catch(a){document.getElementById("carousel-track").innerHTML=`<p class="text-danger p-3">Ошибка загрузки: ${a.message}. Запущен ли сервер ЛР4?</p>`}const e=document.getElementById("carousel-track"),t=320;e.onclick=async a=>{if(a.target.classList.contains("action-info"))this.navigate("section",{id:+a.target.dataset.id});else if(a.target.classList.contains("action-edit"))this.navigate("form",{id:+a.target.dataset.id});else if(a.target.classList.contains("action-delete"))try{await $i.deleteSection(+a.target.dataset.id);const l=this._currentFilters();this.renderCards(await $i.getSections(l))}catch(l){alert("Ошибка удаления: "+l.message)}},e.addEventListener("scroll",()=>{e.scrollWidth<=e.clientWidth||(e.scrollLeft===0?(e.style.scrollBehavior="auto",e.prepend(e.lastElementChild),e.scrollLeft+=t):e.scrollLeft+e.clientWidth>=e.scrollWidth-5&&(e.style.scrollBehavior="auto",e.appendChild(e.firstElementChild),e.scrollLeft-=t))}),document.getElementById("btn-next").onclick=()=>{e.style.scrollBehavior="smooth",e.scrollLeft+=t},document.getElementById("btn-prev").onclick=()=>{e.style.scrollBehavior="smooth",e.scrollLeft-=t};let n=!1,s,r;e.addEventListener("mousedown",a=>{n=!0,e.style.cursor="grabbing",e.style.scrollBehavior="auto",s=a.pageX-e.offsetLeft,r=e.scrollLeft}),window.addEventListener("mouseup",()=>{n=!1,e.style.cursor="grab"}),e.addEventListener("mousemove",a=>{n&&(a.preventDefault(),e.scrollLeft=r-(a.pageX-e.offsetLeft-s))});const o=async()=>{try{this.renderCards(await $i.getSections(this._currentFilters()))}catch(a){alert("Ошибка фильтрации: "+a.message)}};document.getElementById("filter-input").oninput=o,document.getElementById("filter-available").onchange=o,document.getElementById("btn-add").onclick=()=>this.navigate("form",{})}_currentFilters(){var n,s;const e=((n=document.getElementById("filter-input"))==null?void 0:n.value)||"",t=((s=document.getElementById("filter-available"))==null?void 0:s.value)||"";return{title:e,available:t}}}var cn="top",yn="bottom",xn="right",un="left",Ka="auto",zr=[cn,yn,xn,un],Rs="start",Ar="end",Ap="clippingParents",su="viewport",_r="popper",wp="reference",Fc=zr.reduce(function(i,e){return i.concat([e+"-"+Rs,e+"-"+Ar])},[]),ru=[].concat(zr,[Ka]).reduce(function(i,e){return i.concat([e,e+"-"+Rs,e+"-"+Ar])},[]),Cp="beforeRead",Rp="read",Lp="afterRead",Pp="beforeMain",Dp="main",Ip="afterMain",Np="beforeWrite",Op="write",Up="afterWrite",Fp=[Cp,Rp,Lp,Pp,Dp,Ip,Np,Op,Up];function ri(i){return i?(i.nodeName||"").toLowerCase():null}function Tn(i){if(i==null)return window;if(i.toString()!=="[object Window]"){var e=i.ownerDocument;return e&&e.defaultView||window}return i}function Ls(i){var e=Tn(i).Element;return i instanceof e||i instanceof Element}function On(i){var e=Tn(i).HTMLElement;return i instanceof e||i instanceof HTMLElement}function ou(i){if(typeof ShadowRoot>"u")return!1;var e=Tn(i).ShadowRoot;return i instanceof e||i instanceof ShadowRoot}function _v(i){var e=i.state;Object.keys(e.elements).forEach(function(t){var n=e.styles[t]||{},s=e.attributes[t]||{},r=e.elements[t];!On(r)||!ri(r)||(Object.assign(r.style,n),Object.keys(s).forEach(function(o){var a=s[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function vv(i){var e=i.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(n){var s=e.elements[n],r=e.attributes[n]||{},o=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:t[n]),a=o.reduce(function(l,u){return l[u]="",l},{});!On(s)||!ri(s)||(Object.assign(s.style,a),Object.keys(r).forEach(function(l){s.removeAttribute(l)}))})}}const Bp={name:"applyStyles",enabled:!0,phase:"write",fn:_v,effect:vv,requires:["computeStyles"]};function ni(i){return i.split("-")[0]}var Ms=Math.max,ka=Math.min,wr=Math.round;function Bc(){var i=navigator.userAgentData;return i!=null&&i.brands&&Array.isArray(i.brands)?i.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function kp(){return!/^((?!chrome|android).)*safari/i.test(Bc())}function Cr(i,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var n=i.getBoundingClientRect(),s=1,r=1;e&&On(i)&&(s=i.offsetWidth>0&&wr(n.width)/i.offsetWidth||1,r=i.offsetHeight>0&&wr(n.height)/i.offsetHeight||1);var o=Ls(i)?Tn(i):window,a=o.visualViewport,l=!kp()&&t,u=(n.left+(l&&a?a.offsetLeft:0))/s,h=(n.top+(l&&a?a.offsetTop:0))/r,d=n.width/s,f=n.height/r;return{width:d,height:f,top:h,right:u+d,bottom:h+f,left:u,x:u,y:h}}function au(i){var e=Cr(i),t=i.offsetWidth,n=i.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:i.offsetLeft,y:i.offsetTop,width:t,height:n}}function Hp(i,e){var t=e.getRootNode&&e.getRootNode();if(i.contains(e))return!0;if(t&&ou(t)){var n=e;do{if(n&&i.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function wi(i){return Tn(i).getComputedStyle(i)}function Ev(i){return["table","td","th"].indexOf(ri(i))>=0}function es(i){return((Ls(i)?i.ownerDocument:i.document)||window.document).documentElement}function Za(i){return ri(i)==="html"?i:i.assignedSlot||i.parentNode||(ou(i)?i.host:null)||es(i)}function jh(i){return!On(i)||wi(i).position==="fixed"?null:i.offsetParent}function bv(i){var e=/firefox/i.test(Bc()),t=/Trident/i.test(Bc());if(t&&On(i)){var n=wi(i);if(n.position==="fixed")return null}var s=Za(i);for(ou(s)&&(s=s.host);On(s)&&["html","body"].indexOf(ri(s))<0;){var r=wi(s);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return s;s=s.parentNode}return null}function Ao(i){for(var e=Tn(i),t=jh(i);t&&Ev(t)&&wi(t).position==="static";)t=jh(t);return t&&(ri(t)==="html"||ri(t)==="body"&&wi(t).position==="static")?e:t||bv(i)||e}function lu(i){return["top","bottom"].indexOf(i)>=0?"x":"y"}function go(i,e,t){return Ms(i,ka(e,t))}function yv(i,e,t){var n=go(i,e,t);return n>t?t:n}function Vp(){return{top:0,right:0,bottom:0,left:0}}function zp(i){return Object.assign({},Vp(),i)}function Gp(i,e){return e.reduce(function(t,n){return t[n]=i,t},{})}var xv=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,zp(typeof e!="number"?e:Gp(e,zr))};function Tv(i){var e,t=i.state,n=i.name,s=i.options,r=t.elements.arrow,o=t.modifiersData.popperOffsets,a=ni(t.placement),l=lu(a),u=[un,xn].indexOf(a)>=0,h=u?"height":"width";if(!(!r||!o)){var d=xv(s.padding,t),f=au(r),_=l==="y"?cn:un,v=l==="y"?yn:xn,b=t.rects.reference[h]+t.rects.reference[l]-o[l]-t.rects.popper[h],m=o[l]-t.rects.reference[l],p=Ao(r),M=p?l==="y"?p.clientHeight||0:p.clientWidth||0:0,y=b/2-m/2,A=d[_],I=M-f[h]-d[v],D=M/2-f[h]/2+y,L=go(A,D,I),J=l;t.modifiersData[n]=(e={},e[J]=L,e.centerOffset=L-D,e)}}function Sv(i){var e=i.state,t=i.options,n=t.element,s=n===void 0?"[data-popper-arrow]":n;s!=null&&(typeof s=="string"&&(s=e.elements.popper.querySelector(s),!s)||Hp(e.elements.popper,s)&&(e.elements.arrow=s))}const Wp={name:"arrow",enabled:!0,phase:"main",fn:Tv,effect:Sv,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Rr(i){return i.split("-")[1]}var Mv={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Av(i,e){var t=i.x,n=i.y,s=e.devicePixelRatio||1;return{x:wr(t*s)/s||0,y:wr(n*s)/s||0}}function qh(i){var e,t=i.popper,n=i.popperRect,s=i.placement,r=i.variation,o=i.offsets,a=i.position,l=i.gpuAcceleration,u=i.adaptive,h=i.roundOffsets,d=i.isFixed,f=o.x,_=f===void 0?0:f,v=o.y,b=v===void 0?0:v,m=typeof h=="function"?h({x:_,y:b}):{x:_,y:b};_=m.x,b=m.y;var p=o.hasOwnProperty("x"),M=o.hasOwnProperty("y"),y=un,A=cn,I=window;if(u){var D=Ao(t),L="clientHeight",J="clientWidth";if(D===Tn(t)&&(D=es(t),wi(D).position!=="static"&&a==="absolute"&&(L="scrollHeight",J="scrollWidth")),D=D,s===cn||(s===un||s===xn)&&r===Ar){A=yn;var S=d&&D===I&&I.visualViewport?I.visualViewport.height:D[L];b-=S-n.height,b*=l?1:-1}if(s===un||(s===cn||s===yn)&&r===Ar){y=xn;var R=d&&D===I&&I.visualViewport?I.visualViewport.width:D[J];_-=R-n.width,_*=l?1:-1}}var j=Object.assign({position:a},u&&Mv),Q=h===!0?Av({x:_,y:b},Tn(t)):{x:_,y:b};if(_=Q.x,b=Q.y,l){var se;return Object.assign({},j,(se={},se[A]=M?"0":"",se[y]=p?"0":"",se.transform=(I.devicePixelRatio||1)<=1?"translate("+_+"px, "+b+"px)":"translate3d("+_+"px, "+b+"px, 0)",se))}return Object.assign({},j,(e={},e[A]=M?b+"px":"",e[y]=p?_+"px":"",e.transform="",e))}function wv(i){var e=i.state,t=i.options,n=t.gpuAcceleration,s=n===void 0?!0:n,r=t.adaptive,o=r===void 0?!0:r,a=t.roundOffsets,l=a===void 0?!0:a,u={placement:ni(e.placement),variation:Rr(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,qh(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,qh(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const $p={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:wv,data:{}};var Jo={passive:!0};function Cv(i){var e=i.state,t=i.instance,n=i.options,s=n.scroll,r=s===void 0?!0:s,o=n.resize,a=o===void 0?!0:o,l=Tn(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&u.forEach(function(h){h.addEventListener("scroll",t.update,Jo)}),a&&l.addEventListener("resize",t.update,Jo),function(){r&&u.forEach(function(h){h.removeEventListener("scroll",t.update,Jo)}),a&&l.removeEventListener("resize",t.update,Jo)}}const Xp={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Cv,data:{}};var Rv={left:"right",right:"left",bottom:"top",top:"bottom"};function Na(i){return i.replace(/left|right|bottom|top/g,function(e){return Rv[e]})}var Lv={start:"end",end:"start"};function Yh(i){return i.replace(/start|end/g,function(e){return Lv[e]})}function cu(i){var e=Tn(i),t=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:t,scrollTop:n}}function uu(i){return Cr(es(i)).left+cu(i).scrollLeft}function Pv(i,e){var t=Tn(i),n=es(i),s=t.visualViewport,r=n.clientWidth,o=n.clientHeight,a=0,l=0;if(s){r=s.width,o=s.height;var u=kp();(u||!u&&e==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}return{width:r,height:o,x:a+uu(i),y:l}}function Dv(i){var e,t=es(i),n=cu(i),s=(e=i.ownerDocument)==null?void 0:e.body,r=Ms(t.scrollWidth,t.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=Ms(t.scrollHeight,t.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+uu(i),l=-n.scrollTop;return wi(s||t).direction==="rtl"&&(a+=Ms(t.clientWidth,s?s.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function hu(i){var e=wi(i),t=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+s+n)}function jp(i){return["html","body","#document"].indexOf(ri(i))>=0?i.ownerDocument.body:On(i)&&hu(i)?i:jp(Za(i))}function _o(i,e){var t;e===void 0&&(e=[]);var n=jp(i),s=n===((t=i.ownerDocument)==null?void 0:t.body),r=Tn(n),o=s?[r].concat(r.visualViewport||[],hu(n)?n:[]):n,a=e.concat(o);return s?a:a.concat(_o(Za(o)))}function kc(i){return Object.assign({},i,{left:i.x,top:i.y,right:i.x+i.width,bottom:i.y+i.height})}function Iv(i,e){var t=Cr(i,!1,e==="fixed");return t.top=t.top+i.clientTop,t.left=t.left+i.clientLeft,t.bottom=t.top+i.clientHeight,t.right=t.left+i.clientWidth,t.width=i.clientWidth,t.height=i.clientHeight,t.x=t.left,t.y=t.top,t}function Kh(i,e,t){return e===su?kc(Pv(i,t)):Ls(e)?Iv(e,t):kc(Dv(es(i)))}function Nv(i){var e=_o(Za(i)),t=["absolute","fixed"].indexOf(wi(i).position)>=0,n=t&&On(i)?Ao(i):i;return Ls(n)?e.filter(function(s){return Ls(s)&&Hp(s,n)&&ri(s)!=="body"}):[]}function Ov(i,e,t,n){var s=e==="clippingParents"?Nv(i):[].concat(e),r=[].concat(s,[t]),o=r[0],a=r.reduce(function(l,u){var h=Kh(i,u,n);return l.top=Ms(h.top,l.top),l.right=ka(h.right,l.right),l.bottom=ka(h.bottom,l.bottom),l.left=Ms(h.left,l.left),l},Kh(i,o,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function qp(i){var e=i.reference,t=i.element,n=i.placement,s=n?ni(n):null,r=n?Rr(n):null,o=e.x+e.width/2-t.width/2,a=e.y+e.height/2-t.height/2,l;switch(s){case cn:l={x:o,y:e.y-t.height};break;case yn:l={x:o,y:e.y+e.height};break;case xn:l={x:e.x+e.width,y:a};break;case un:l={x:e.x-t.width,y:a};break;default:l={x:e.x,y:e.y}}var u=s?lu(s):null;if(u!=null){var h=u==="y"?"height":"width";switch(r){case Rs:l[u]=l[u]-(e[h]/2-t[h]/2);break;case Ar:l[u]=l[u]+(e[h]/2-t[h]/2);break}}return l}function Lr(i,e){e===void 0&&(e={});var t=e,n=t.placement,s=n===void 0?i.placement:n,r=t.strategy,o=r===void 0?i.strategy:r,a=t.boundary,l=a===void 0?Ap:a,u=t.rootBoundary,h=u===void 0?su:u,d=t.elementContext,f=d===void 0?_r:d,_=t.altBoundary,v=_===void 0?!1:_,b=t.padding,m=b===void 0?0:b,p=zp(typeof m!="number"?m:Gp(m,zr)),M=f===_r?wp:_r,y=i.rects.popper,A=i.elements[v?M:f],I=Ov(Ls(A)?A:A.contextElement||es(i.elements.popper),l,h,o),D=Cr(i.elements.reference),L=qp({reference:D,element:y,placement:s}),J=kc(Object.assign({},y,L)),S=f===_r?J:D,R={top:I.top-S.top+p.top,bottom:S.bottom-I.bottom+p.bottom,left:I.left-S.left+p.left,right:S.right-I.right+p.right},j=i.modifiersData.offset;if(f===_r&&j){var Q=j[s];Object.keys(R).forEach(function(se){var B=[xn,yn].indexOf(se)>=0?1:-1,W=[cn,yn].indexOf(se)>=0?"y":"x";R[se]+=Q[W]*B})}return R}function Uv(i,e){e===void 0&&(e={});var t=e,n=t.placement,s=t.boundary,r=t.rootBoundary,o=t.padding,a=t.flipVariations,l=t.allowedAutoPlacements,u=l===void 0?ru:l,h=Rr(n),d=h?a?Fc:Fc.filter(function(v){return Rr(v)===h}):zr,f=d.filter(function(v){return u.indexOf(v)>=0});f.length===0&&(f=d);var _=f.reduce(function(v,b){return v[b]=Lr(i,{placement:b,boundary:s,rootBoundary:r,padding:o})[ni(b)],v},{});return Object.keys(_).sort(function(v,b){return _[v]-_[b]})}function Fv(i){if(ni(i)===Ka)return[];var e=Na(i);return[Yh(i),e,Yh(e)]}function Bv(i){var e=i.state,t=i.options,n=i.name;if(!e.modifiersData[n]._skip){for(var s=t.mainAxis,r=s===void 0?!0:s,o=t.altAxis,a=o===void 0?!0:o,l=t.fallbackPlacements,u=t.padding,h=t.boundary,d=t.rootBoundary,f=t.altBoundary,_=t.flipVariations,v=_===void 0?!0:_,b=t.allowedAutoPlacements,m=e.options.placement,p=ni(m),M=p===m,y=l||(M||!v?[Na(m)]:Fv(m)),A=[m].concat(y).reduce(function(Y,oe){return Y.concat(ni(oe)===Ka?Uv(e,{placement:oe,boundary:h,rootBoundary:d,padding:u,flipVariations:v,allowedAutoPlacements:b}):oe)},[]),I=e.rects.reference,D=e.rects.popper,L=new Map,J=!0,S=A[0],R=0;R<A.length;R++){var j=A[R],Q=ni(j),se=Rr(j)===Rs,B=[cn,yn].indexOf(Q)>=0,W=B?"width":"height",q=Lr(e,{placement:j,boundary:h,rootBoundary:d,altBoundary:f,padding:u}),ee=B?se?xn:un:se?yn:cn;I[W]>D[W]&&(ee=Na(ee));var te=Na(ee),ne=[];if(r&&ne.push(q[Q]<=0),a&&ne.push(q[ee]<=0,q[te]<=0),ne.every(function(Y){return Y})){S=j,J=!1;break}L.set(j,ne)}if(J)for(var ie=v?3:1,O=function(oe){var me=A.find(function(be){var Be=L.get(be);if(Be)return Be.slice(0,oe).every(function(le){return le})});if(me)return S=me,"break"},pe=ie;pe>0;pe--){var K=O(pe);if(K==="break")break}e.placement!==S&&(e.modifiersData[n]._skip=!0,e.placement=S,e.reset=!0)}}const Yp={name:"flip",enabled:!0,phase:"main",fn:Bv,requiresIfExists:["offset"],data:{_skip:!1}};function Zh(i,e,t){return t===void 0&&(t={x:0,y:0}),{top:i.top-e.height-t.y,right:i.right-e.width+t.x,bottom:i.bottom-e.height+t.y,left:i.left-e.width-t.x}}function Jh(i){return[cn,xn,yn,un].some(function(e){return i[e]>=0})}function kv(i){var e=i.state,t=i.name,n=e.rects.reference,s=e.rects.popper,r=e.modifiersData.preventOverflow,o=Lr(e,{elementContext:"reference"}),a=Lr(e,{altBoundary:!0}),l=Zh(o,n),u=Zh(a,s,r),h=Jh(l),d=Jh(u);e.modifiersData[t]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}const Kp={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:kv};function Hv(i,e,t){var n=ni(i),s=[un,cn].indexOf(n)>=0?-1:1,r=typeof t=="function"?t(Object.assign({},e,{placement:i})):t,o=r[0],a=r[1];return o=o||0,a=(a||0)*s,[un,xn].indexOf(n)>=0?{x:a,y:o}:{x:o,y:a}}function Vv(i){var e=i.state,t=i.options,n=i.name,s=t.offset,r=s===void 0?[0,0]:s,o=ru.reduce(function(h,d){return h[d]=Hv(d,e.rects,r),h},{}),a=o[e.placement],l=a.x,u=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=u),e.modifiersData[n]=o}const Zp={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Vv};function zv(i){var e=i.state,t=i.name;e.modifiersData[t]=qp({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}const Jp={name:"popperOffsets",enabled:!0,phase:"read",fn:zv,data:{}};function Gv(i){return i==="x"?"y":"x"}function Wv(i){var e=i.state,t=i.options,n=i.name,s=t.mainAxis,r=s===void 0?!0:s,o=t.altAxis,a=o===void 0?!1:o,l=t.boundary,u=t.rootBoundary,h=t.altBoundary,d=t.padding,f=t.tether,_=f===void 0?!0:f,v=t.tetherOffset,b=v===void 0?0:v,m=Lr(e,{boundary:l,rootBoundary:u,padding:d,altBoundary:h}),p=ni(e.placement),M=Rr(e.placement),y=!M,A=lu(p),I=Gv(A),D=e.modifiersData.popperOffsets,L=e.rects.reference,J=e.rects.popper,S=typeof b=="function"?b(Object.assign({},e.rects,{placement:e.placement})):b,R=typeof S=="number"?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),j=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,Q={x:0,y:0};if(D){if(r){var se,B=A==="y"?cn:un,W=A==="y"?yn:xn,q=A==="y"?"height":"width",ee=D[A],te=ee+m[B],ne=ee-m[W],ie=_?-J[q]/2:0,O=M===Rs?L[q]:J[q],pe=M===Rs?-J[q]:-L[q],K=e.elements.arrow,Y=_&&K?au(K):{width:0,height:0},oe=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Vp(),me=oe[B],be=oe[W],Be=go(0,L[q],Y[q]),le=y?L[q]/2-ie-Be-me-R.mainAxis:O-Be-me-R.mainAxis,Oe=y?-L[q]/2+ie+Be+be+R.mainAxis:pe+Be+be+R.mainAxis,nt=e.elements.arrow&&Ao(e.elements.arrow),X=nt?A==="y"?nt.clientTop||0:nt.clientLeft||0:0,kt=(se=j==null?void 0:j[A])!=null?se:0,De=ee+le-kt-X,We=ee+Oe-kt,we=go(_?ka(te,De):te,ee,_?Ms(ne,We):ne);D[A]=we,Q[A]=we-ee}if(a){var _t,Ze=A==="x"?cn:un,C=A==="x"?yn:xn,x=D[I],G=I==="y"?"height":"width",de=x+m[Ze],ce=x-m[C],he=[cn,un].indexOf(p)!==-1,Le=(_t=j==null?void 0:j[I])!=null?_t:0,ve=he?de:x-L[G]-J[G]-Le+R.altAxis,Ae=he?x+L[G]+J[G]-Le-R.altAxis:ce,Ue=_&&he?yv(ve,x,Ae):go(_?ve:de,x,_?Ae:ce);D[I]=Ue,Q[I]=Ue-x}e.modifiersData[n]=Q}}const Qp={name:"preventOverflow",enabled:!0,phase:"main",fn:Wv,requiresIfExists:["offset"]};function $v(i){return{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}}function Xv(i){return i===Tn(i)||!On(i)?cu(i):$v(i)}function jv(i){var e=i.getBoundingClientRect(),t=wr(e.width)/i.offsetWidth||1,n=wr(e.height)/i.offsetHeight||1;return t!==1||n!==1}function qv(i,e,t){t===void 0&&(t=!1);var n=On(e),s=On(e)&&jv(e),r=es(e),o=Cr(i,s,t),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!t)&&((ri(e)!=="body"||hu(r))&&(a=Xv(e)),On(e)?(l=Cr(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):r&&(l.x=uu(r))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function Yv(i){var e=new Map,t=new Set,n=[];i.forEach(function(r){e.set(r.name,r)});function s(r){t.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!t.has(a)){var l=e.get(a);l&&s(l)}}),n.push(r)}return i.forEach(function(r){t.has(r.name)||s(r)}),n}function Kv(i){var e=Yv(i);return Fp.reduce(function(t,n){return t.concat(e.filter(function(s){return s.phase===n}))},[])}function Zv(i){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(i())})})),e}}function Jv(i){var e=i.reduce(function(t,n){var s=t[n.name];return t[n.name]=s?Object.assign({},s,n,{options:Object.assign({},s.options,n.options),data:Object.assign({},s.data,n.data)}):n,t},{});return Object.keys(e).map(function(t){return e[t]})}var Qh={placement:"bottom",modifiers:[],strategy:"absolute"};function ed(){for(var i=arguments.length,e=new Array(i),t=0;t<i;t++)e[t]=arguments[t];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function em(i){i===void 0&&(i={});var e=i,t=e.defaultModifiers,n=t===void 0?[]:t,s=e.defaultOptions,r=s===void 0?Qh:s;return function(a,l,u){u===void 0&&(u=r);var h={placement:"bottom",orderedModifiers:[],options:Object.assign({},Qh,r),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},d=[],f=!1,_={state:h,setOptions:function(p){var M=typeof p=="function"?p(h.options):p;b(),h.options=Object.assign({},r,h.options,M),h.scrollParents={reference:Ls(a)?_o(a):a.contextElement?_o(a.contextElement):[],popper:_o(l)};var y=Kv(Jv([].concat(n,h.options.modifiers)));return h.orderedModifiers=y.filter(function(A){return A.enabled}),v(),_.update()},forceUpdate:function(){if(!f){var p=h.elements,M=p.reference,y=p.popper;if(ed(M,y)){h.rects={reference:qv(M,Ao(y),h.options.strategy==="fixed"),popper:au(y)},h.reset=!1,h.placement=h.options.placement,h.orderedModifiers.forEach(function(R){return h.modifiersData[R.name]=Object.assign({},R.data)});for(var A=0;A<h.orderedModifiers.length;A++){if(h.reset===!0){h.reset=!1,A=-1;continue}var I=h.orderedModifiers[A],D=I.fn,L=I.options,J=L===void 0?{}:L,S=I.name;typeof D=="function"&&(h=D({state:h,options:J,name:S,instance:_})||h)}}}},update:Zv(function(){return new Promise(function(m){_.forceUpdate(),m(h)})}),destroy:function(){b(),f=!0}};if(!ed(a,l))return _;_.setOptions(u).then(function(m){!f&&u.onFirstUpdate&&u.onFirstUpdate(m)});function v(){h.orderedModifiers.forEach(function(m){var p=m.name,M=m.options,y=M===void 0?{}:M,A=m.effect;if(typeof A=="function"){var I=A({state:h,name:p,instance:_,options:y}),D=function(){};d.push(I||D)}})}function b(){d.forEach(function(m){return m()}),d=[]}return _}}var Qv=[Xp,Jp,$p,Bp,Zp,Yp,Qp,Wp,Kp],du=em({defaultModifiers:Qv});const tm=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Ip,afterRead:Lp,afterWrite:Up,applyStyles:Bp,arrow:Wp,auto:Ka,basePlacements:zr,beforeMain:Pp,beforeRead:Cp,beforeWrite:Np,bottom:yn,clippingParents:Ap,computeStyles:$p,createPopper:du,detectOverflow:Lr,end:Ar,eventListeners:Xp,flip:Yp,hide:Kp,left:un,main:Dp,modifierPhases:Fp,offset:Zp,placements:ru,popper:_r,popperGenerator:em,popperOffsets:Jp,preventOverflow:Qp,read:Rp,reference:wp,right:xn,start:Rs,top:cn,variationPlacements:Fc,viewport:su,write:Op},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Ui=new Map,Fl={set(i,e,t){Ui.has(i)||Ui.set(i,new Map);const n=Ui.get(i);if(!n.has(e)&&n.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);return}n.set(e,t)},get(i,e){return Ui.has(i)&&Ui.get(i).get(e)||null},remove(i,e){if(!Ui.has(i))return;const t=Ui.get(i);t.delete(e),t.size===0&&Ui.delete(i)}},eE=1e6,tE=1e3,Hc="transitionend",nm=i=>(i&&window.CSS&&window.CSS.escape&&(i=i.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),i),nE=i=>i==null?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase(),iE=i=>{do i+=Math.floor(Math.random()*eE);while(document.getElementById(i));return i},sE=i=>{if(!i)return 0;let{transitionDuration:e,transitionDelay:t}=window.getComputedStyle(i);const n=Number.parseFloat(e),s=Number.parseFloat(t);return!n&&!s?0:(e=e.split(",")[0],t=t.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(t))*tE)},im=i=>{i.dispatchEvent(new Event(Hc))},Si=i=>!i||typeof i!="object"?!1:(typeof i.jquery<"u"&&(i=i[0]),typeof i.nodeType<"u"),Zi=i=>Si(i)?i.jquery?i[0]:i:typeof i=="string"&&i.length>0?document.querySelector(nm(i)):null,Gr=i=>{if(!Si(i)||i.getClientRects().length===0)return!1;const e=getComputedStyle(i).getPropertyValue("visibility")==="visible",t=i.closest("details:not([open])");if(!t)return e;if(t!==i){const n=i.closest("summary");if(n&&n.parentNode!==t||n===null)return!1}return e},Ji=i=>!i||i.nodeType!==Node.ELEMENT_NODE||i.classList.contains("disabled")?!0:typeof i.disabled<"u"?i.disabled:i.hasAttribute("disabled")&&i.getAttribute("disabled")!=="false",sm=i=>{if(!document.documentElement.attachShadow)return null;if(typeof i.getRootNode=="function"){const e=i.getRootNode();return e instanceof ShadowRoot?e:null}return i instanceof ShadowRoot?i:i.parentNode?sm(i.parentNode):null},Ha=()=>{},wo=i=>{i.offsetHeight},rm=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Bl=[],rE=i=>{document.readyState==="loading"?(Bl.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of Bl)e()}),Bl.push(i)):i()},Un=()=>document.documentElement.dir==="rtl",Bn=i=>{rE(()=>{const e=rm();if(e){const t=i.NAME,n=e.fn[t];e.fn[t]=i.jQueryInterface,e.fn[t].Constructor=i,e.fn[t].noConflict=()=>(e.fn[t]=n,i.jQueryInterface)}})},mn=(i,e=[],t=i)=>typeof i=="function"?i.call(...e):t,om=(i,e,t=!0)=>{if(!t){mn(i);return}const s=sE(e)+5;let r=!1;const o=({target:a})=>{a===e&&(r=!0,e.removeEventListener(Hc,o),mn(i))};e.addEventListener(Hc,o),setTimeout(()=>{r||im(e)},s)},fu=(i,e,t,n)=>{const s=i.length;let r=i.indexOf(e);return r===-1?!t&&n?i[s-1]:i[0]:(r+=t?1:-1,n&&(r=(r+s)%s),i[Math.max(0,Math.min(r,s-1))])},oE=/[^.]*(?=\..*)\.|.*/,aE=/\..*/,lE=/::\d+$/,kl={};let td=1;const am={mouseenter:"mouseover",mouseleave:"mouseout"},cE=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function lm(i,e){return e&&`${e}::${td++}`||i.uidEvent||td++}function cm(i){const e=lm(i);return i.uidEvent=e,kl[e]=kl[e]||{},kl[e]}function uE(i,e){return function t(n){return pu(n,{delegateTarget:i}),t.oneOff&&ue.off(i,n.type,e),e.apply(i,[n])}}function hE(i,e,t){return function n(s){const r=i.querySelectorAll(e);for(let{target:o}=s;o&&o!==this;o=o.parentNode)for(const a of r)if(a===o)return pu(s,{delegateTarget:o}),n.oneOff&&ue.off(i,s.type,e,t),t.apply(o,[s])}}function um(i,e,t=null){return Object.values(i).find(n=>n.callable===e&&n.delegationSelector===t)}function hm(i,e,t){const n=typeof e=="string",s=n?t:e||t;let r=dm(i);return cE.has(r)||(r=i),[n,s,r]}function nd(i,e,t,n,s){if(typeof e!="string"||!i)return;let[r,o,a]=hm(e,t,n);e in am&&(o=(v=>function(b){if(!b.relatedTarget||b.relatedTarget!==b.delegateTarget&&!b.delegateTarget.contains(b.relatedTarget))return v.call(this,b)})(o));const l=cm(i),u=l[a]||(l[a]={}),h=um(u,o,r?t:null);if(h){h.oneOff=h.oneOff&&s;return}const d=lm(o,e.replace(oE,"")),f=r?hE(i,t,o):uE(i,o);f.delegationSelector=r?t:null,f.callable=o,f.oneOff=s,f.uidEvent=d,u[d]=f,i.addEventListener(a,f,r)}function Vc(i,e,t,n,s){const r=um(e[t],n,s);r&&(i.removeEventListener(t,r,!!s),delete e[t][r.uidEvent])}function dE(i,e,t,n){const s=e[t]||{};for(const[r,o]of Object.entries(s))r.includes(n)&&Vc(i,e,t,o.callable,o.delegationSelector)}function dm(i){return i=i.replace(aE,""),am[i]||i}const ue={on(i,e,t,n){nd(i,e,t,n,!1)},one(i,e,t,n){nd(i,e,t,n,!0)},off(i,e,t,n){if(typeof e!="string"||!i)return;const[s,r,o]=hm(e,t,n),a=o!==e,l=cm(i),u=l[o]||{},h=e.startsWith(".");if(typeof r<"u"){if(!Object.keys(u).length)return;Vc(i,l,o,r,s?t:null);return}if(h)for(const d of Object.keys(l))dE(i,l,d,e.slice(1));for(const[d,f]of Object.entries(u)){const _=d.replace(lE,"");(!a||e.includes(_))&&Vc(i,l,o,f.callable,f.delegationSelector)}},trigger(i,e,t){if(typeof e!="string"||!i)return null;const n=rm(),s=dm(e),r=e!==s;let o=null,a=!0,l=!0,u=!1;r&&n&&(o=n.Event(e,t),n(i).trigger(o),a=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),u=o.isDefaultPrevented());const h=pu(new Event(e,{bubbles:a,cancelable:!0}),t);return u&&h.preventDefault(),l&&i.dispatchEvent(h),h.defaultPrevented&&o&&o.preventDefault(),h}};function pu(i,e={}){for(const[t,n]of Object.entries(e))try{i[t]=n}catch{Object.defineProperty(i,t,{configurable:!0,get(){return n}})}return i}function id(i){if(i==="true")return!0;if(i==="false")return!1;if(i===Number(i).toString())return Number(i);if(i===""||i==="null")return null;if(typeof i!="string")return i;try{return JSON.parse(decodeURIComponent(i))}catch{return i}}function Hl(i){return i.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const Mi={setDataAttribute(i,e,t){i.setAttribute(`data-bs-${Hl(e)}`,t)},removeDataAttribute(i,e){i.removeAttribute(`data-bs-${Hl(e)}`)},getDataAttributes(i){if(!i)return{};const e={},t=Object.keys(i.dataset).filter(n=>n.startsWith("bs")&&!n.startsWith("bsConfig"));for(const n of t){let s=n.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1),e[s]=id(i.dataset[n])}return e},getDataAttribute(i,e){return id(i.getAttribute(`data-bs-${Hl(e)}`))}};class Co{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=Si(t)?Mi.getDataAttribute(t,"config"):{};return{...this.constructor.Default,...typeof n=="object"?n:{},...Si(t)?Mi.getDataAttributes(t):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[n,s]of Object.entries(t)){const r=e[n],o=Si(r)?"element":nE(r);if(!new RegExp(s).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${s}".`)}}}const fE="5.3.8";class jn extends Co{constructor(e,t){super(),e=Zi(e),e&&(this._element=e,this._config=this._getConfig(t),Fl.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Fl.remove(this._element,this.constructor.DATA_KEY),ue.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){om(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return Fl.get(Zi(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,typeof t=="object"?t:null)}static get VERSION(){return fE}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const Vl=i=>{let e=i.getAttribute("data-bs-target");if(!e||e==="#"){let t=i.getAttribute("href");if(!t||!t.includes("#")&&!t.startsWith("."))return null;t.includes("#")&&!t.startsWith("#")&&(t=`#${t.split("#")[1]}`),e=t&&t!=="#"?t.trim():null}return e?e.split(",").map(t=>nm(t)).join(","):null},ze={find(i,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,i))},findOne(i,e=document.documentElement){return Element.prototype.querySelector.call(e,i)},children(i,e){return[].concat(...i.children).filter(t=>t.matches(e))},parents(i,e){const t=[];let n=i.parentNode.closest(e);for(;n;)t.push(n),n=n.parentNode.closest(e);return t},prev(i,e){let t=i.previousElementSibling;for(;t;){if(t.matches(e))return[t];t=t.previousElementSibling}return[]},next(i,e){let t=i.nextElementSibling;for(;t;){if(t.matches(e))return[t];t=t.nextElementSibling}return[]},focusableChildren(i){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(",");return this.find(e,i).filter(t=>!Ji(t)&&Gr(t))},getSelectorFromElement(i){const e=Vl(i);return e&&ze.findOne(e)?e:null},getElementFromSelector(i){const e=Vl(i);return e?ze.findOne(e):null},getMultipleElementsFromSelector(i){const e=Vl(i);return e?ze.find(e):[]}},Ja=(i,e="hide")=>{const t=`click.dismiss${i.EVENT_KEY}`,n=i.NAME;ue.on(document,t,`[data-bs-dismiss="${n}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),Ji(this))return;const r=ze.getElementFromSelector(this)||this.closest(`.${n}`);i.getOrCreateInstance(r)[e]()})},pE="alert",mE="bs.alert",fm=`.${mE}`,gE=`close${fm}`,_E=`closed${fm}`,vE="fade",EE="show";class Qa extends jn{static get NAME(){return pE}close(){if(ue.trigger(this._element,gE).defaultPrevented)return;this._element.classList.remove(EE);const t=this._element.classList.contains(vE);this._queueCallback(()=>this._destroyElement(),this._element,t)}_destroyElement(){this._element.remove(),ue.trigger(this._element,_E),this.dispose()}static jQueryInterface(e){return this.each(function(){const t=Qa.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}Ja(Qa,"close");Bn(Qa);const bE="button",yE="bs.button",xE=`.${yE}`,TE=".data-api",SE="active",sd='[data-bs-toggle="button"]',ME=`click${xE}${TE}`;class el extends jn{static get NAME(){return bE}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(SE))}static jQueryInterface(e){return this.each(function(){const t=el.getOrCreateInstance(this);e==="toggle"&&t[e]()})}}ue.on(document,ME,sd,i=>{i.preventDefault();const e=i.target.closest(sd);el.getOrCreateInstance(e).toggle()});Bn(el);const AE="swipe",Wr=".bs.swipe",wE=`touchstart${Wr}`,CE=`touchmove${Wr}`,RE=`touchend${Wr}`,LE=`pointerdown${Wr}`,PE=`pointerup${Wr}`,DE="touch",IE="pen",NE="pointer-event",OE=40,UE={endCallback:null,leftCallback:null,rightCallback:null},FE={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Va extends Co{constructor(e,t){super(),this._element=e,!(!e||!Va.isSupported())&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return UE}static get DefaultType(){return FE}static get NAME(){return AE}dispose(){ue.off(this._element,Wr)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),mn(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=OE)return;const t=e/this._deltaX;this._deltaX=0,t&&mn(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(ue.on(this._element,LE,e=>this._start(e)),ue.on(this._element,PE,e=>this._end(e)),this._element.classList.add(NE)):(ue.on(this._element,wE,e=>this._start(e)),ue.on(this._element,CE,e=>this._move(e)),ue.on(this._element,RE,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===IE||e.pointerType===DE)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const BE="carousel",kE="bs.carousel",ts=`.${kE}`,pm=".data-api",HE="ArrowLeft",VE="ArrowRight",zE=500,ro="next",Ks="prev",vr="left",Oa="right",GE=`slide${ts}`,zl=`slid${ts}`,WE=`keydown${ts}`,$E=`mouseenter${ts}`,XE=`mouseleave${ts}`,jE=`dragstart${ts}`,qE=`load${ts}${pm}`,YE=`click${ts}${pm}`,mm="carousel",Qo="active",KE="slide",ZE="carousel-item-end",JE="carousel-item-start",QE="carousel-item-next",eb="carousel-item-prev",gm=".active",_m=".carousel-item",tb=gm+_m,nb=".carousel-item img",ib=".carousel-indicators",sb="[data-bs-slide], [data-bs-slide-to]",rb='[data-bs-ride="carousel"]',ob={[HE]:Oa,[VE]:vr},ab={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},lb={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Ro extends jn{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=ze.findOne(ib,this._element),this._addEventListeners(),this._config.ride===mm&&this.cycle()}static get Default(){return ab}static get DefaultType(){return lb}static get NAME(){return BE}next(){this._slide(ro)}nextWhenVisible(){!document.hidden&&Gr(this._element)&&this.next()}prev(){this._slide(Ks)}pause(){this._isSliding&&im(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){ue.one(this._element,zl,()=>this.cycle());return}this.cycle()}}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding){ue.one(this._element,zl,()=>this.to(e));return}const n=this._getItemIndex(this._getActive());if(n===e)return;const s=e>n?ro:Ks;this._slide(s,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&ue.on(this._element,WE,e=>this._keydown(e)),this._config.pause==="hover"&&(ue.on(this._element,$E,()=>this.pause()),ue.on(this._element,XE,()=>this._maybeEnableCycle())),this._config.touch&&Va.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const n of ze.find(nb,this._element))ue.on(n,jE,s=>s.preventDefault());const t={leftCallback:()=>this._slide(this._directionToOrder(vr)),rightCallback:()=>this._slide(this._directionToOrder(Oa)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),zE+this._config.interval))}};this._swipeHelper=new Va(this._element,t)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=ob[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=ze.findOne(gm,this._indicatorsElement);t.classList.remove(Qo),t.removeAttribute("aria-current");const n=ze.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(Qo),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const n=this._getActive(),s=e===ro,r=t||fu(this._getItems(),n,s,this._config.wrap);if(r===n)return;const o=this._getItemIndex(r),a=_=>ue.trigger(this._element,_,{relatedTarget:r,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:o});if(a(GE).defaultPrevented||!n||!r)return;const u=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=r;const h=s?JE:ZE,d=s?QE:eb;r.classList.add(d),wo(r),n.classList.add(h),r.classList.add(h);const f=()=>{r.classList.remove(h,d),r.classList.add(Qo),n.classList.remove(Qo,d,h),this._isSliding=!1,a(zl)};this._queueCallback(f,n,this._isAnimated()),u&&this.cycle()}_isAnimated(){return this._element.classList.contains(KE)}_getActive(){return ze.findOne(tb,this._element)}_getItems(){return ze.find(_m,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return Un()?e===vr?Ks:ro:e===vr?ro:Ks}_orderToDirection(e){return Un()?e===Ks?vr:Oa:e===Ks?Oa:vr}static jQueryInterface(e){return this.each(function(){const t=Ro.getOrCreateInstance(this,e);if(typeof e=="number"){t.to(e);return}if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}ue.on(document,YE,sb,function(i){const e=ze.getElementFromSelector(this);if(!e||!e.classList.contains(mm))return;i.preventDefault();const t=Ro.getOrCreateInstance(e),n=this.getAttribute("data-bs-slide-to");if(n){t.to(n),t._maybeEnableCycle();return}if(Mi.getDataAttribute(this,"slide")==="next"){t.next(),t._maybeEnableCycle();return}t.prev(),t._maybeEnableCycle()});ue.on(window,qE,()=>{const i=ze.find(rb);for(const e of i)Ro.getOrCreateInstance(e)});Bn(Ro);const cb="collapse",ub="bs.collapse",Lo=`.${ub}`,hb=".data-api",db=`show${Lo}`,fb=`shown${Lo}`,pb=`hide${Lo}`,mb=`hidden${Lo}`,gb=`click${Lo}${hb}`,Gl="show",br="collapse",ea="collapsing",_b="collapsed",vb=`:scope .${br} .${br}`,Eb="collapse-horizontal",bb="width",yb="height",xb=".collapse.show, .collapse.collapsing",zc='[data-bs-toggle="collapse"]',Tb={parent:null,toggle:!0},Sb={parent:"(null|element)",toggle:"boolean"};class xo extends jn{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const n=ze.find(zc);for(const s of n){const r=ze.getSelectorFromElement(s),o=ze.find(r).filter(a=>a===this._element);r!==null&&o.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Tb}static get DefaultType(){return Sb}static get NAME(){return cb}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(xb).filter(a=>a!==this._element).map(a=>xo.getOrCreateInstance(a,{toggle:!1}))),e.length&&e[0]._isTransitioning||ue.trigger(this._element,db).defaultPrevented)return;for(const a of e)a.hide();const n=this._getDimension();this._element.classList.remove(br),this._element.classList.add(ea),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(ea),this._element.classList.add(br,Gl),this._element.style[n]="",ue.trigger(this._element,fb)},o=`scroll${n[0].toUpperCase()+n.slice(1)}`;this._queueCallback(s,this._element,!0),this._element.style[n]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||ue.trigger(this._element,pb).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,wo(this._element),this._element.classList.add(ea),this._element.classList.remove(br,Gl);for(const s of this._triggerArray){const r=ze.getElementFromSelector(s);r&&!this._isShown(r)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(ea),this._element.classList.add(br),ue.trigger(this._element,mb)};this._element.style[t]="",this._queueCallback(n,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Gl)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=Zi(e.parent),e}_getDimension(){return this._element.classList.contains(Eb)?bb:yb}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(zc);for(const t of e){const n=ze.getElementFromSelector(t);n&&this._addAriaAndCollapsedClass([t],this._isShown(n))}}_getFirstLevelChildren(e){const t=ze.find(vb,this._config.parent);return ze.find(e,this._config.parent).filter(n=>!t.includes(n))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const n of e)n.classList.toggle(_b,!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return typeof e=="string"&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){const n=xo.getOrCreateInstance(this,t);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}ue.on(document,gb,zc,function(i){(i.target.tagName==="A"||i.delegateTarget&&i.delegateTarget.tagName==="A")&&i.preventDefault();for(const e of ze.getMultipleElementsFromSelector(this))xo.getOrCreateInstance(e,{toggle:!1}).toggle()});Bn(xo);const rd="dropdown",Mb="bs.dropdown",Os=`.${Mb}`,mu=".data-api",Ab="Escape",od="Tab",wb="ArrowUp",ad="ArrowDown",Cb=2,Rb=`hide${Os}`,Lb=`hidden${Os}`,Pb=`show${Os}`,Db=`shown${Os}`,vm=`click${Os}${mu}`,Em=`keydown${Os}${mu}`,Ib=`keyup${Os}${mu}`,Er="show",Nb="dropup",Ob="dropend",Ub="dropstart",Fb="dropup-center",Bb="dropdown-center",ys='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',kb=`${ys}.${Er}`,Ua=".dropdown-menu",Hb=".navbar",Vb=".navbar-nav",zb=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Gb=Un()?"top-end":"top-start",Wb=Un()?"top-start":"top-end",$b=Un()?"bottom-end":"bottom-start",Xb=Un()?"bottom-start":"bottom-end",jb=Un()?"left-start":"right-start",qb=Un()?"right-start":"left-start",Yb="top",Kb="bottom",Zb={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Jb={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ii extends jn{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=ze.next(this._element,Ua)[0]||ze.prev(this._element,Ua)[0]||ze.findOne(Ua,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Zb}static get DefaultType(){return Jb}static get NAME(){return rd}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Ji(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!ue.trigger(this._element,Pb,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Vb))for(const n of[].concat(...document.body.children))ue.on(n,"mouseover",Ha);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Er),this._element.classList.add(Er),ue.trigger(this._element,Db,e)}}hide(){if(Ji(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!ue.trigger(this._element,Rb,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const n of[].concat(...document.body.children))ue.off(n,"mouseover",Ha);this._popper&&this._popper.destroy(),this._menu.classList.remove(Er),this._element.classList.remove(Er),this._element.setAttribute("aria-expanded","false"),Mi.removeDataAttribute(this._menu,"popper"),ue.trigger(this._element,Lb,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!Si(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${rd.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof tm>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let e=this._element;this._config.reference==="parent"?e=this._parent:Si(this._config.reference)?e=Zi(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=du(e,this._menu,t)}_isShown(){return this._menu.classList.contains(Er)}_getPlacement(){const e=this._parent;if(e.classList.contains(Ob))return jb;if(e.classList.contains(Ub))return qb;if(e.classList.contains(Fb))return Yb;if(e.classList.contains(Bb))return Kb;const t=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(Nb)?t?Wb:Gb:t?Xb:$b}_detectNavbar(){return this._element.closest(Hb)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Mi.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...mn(this._config.popperConfig,[void 0,e])}}_selectMenuItem({key:e,target:t}){const n=ze.find(zb,this._menu).filter(s=>Gr(s));n.length&&fu(n,t,e===ad,!n.includes(t)).focus()}static jQueryInterface(e){return this.each(function(){const t=ii.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(e.button===Cb||e.type==="keyup"&&e.key!==od)return;const t=ze.find(kb);for(const n of t){const s=ii.getInstance(n);if(!s||s._config.autoClose===!1)continue;const r=e.composedPath(),o=r.includes(s._menu);if(r.includes(s._element)||s._config.autoClose==="inside"&&!o||s._config.autoClose==="outside"&&o||s._menu.contains(e.target)&&(e.type==="keyup"&&e.key===od||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const a={relatedTarget:s._element};e.type==="click"&&(a.clickEvent=e),s._completeHide(a)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),n=e.key===Ab,s=[wb,ad].includes(e.key);if(!s&&!n||t&&!n)return;e.preventDefault();const r=this.matches(ys)?this:ze.prev(this,ys)[0]||ze.next(this,ys)[0]||ze.findOne(ys,e.delegateTarget.parentNode),o=ii.getOrCreateInstance(r);if(s){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),r.focus())}}ue.on(document,Em,ys,ii.dataApiKeydownHandler);ue.on(document,Em,Ua,ii.dataApiKeydownHandler);ue.on(document,vm,ii.clearMenus);ue.on(document,Ib,ii.clearMenus);ue.on(document,vm,ys,function(i){i.preventDefault(),ii.getOrCreateInstance(this).toggle()});Bn(ii);const bm="backdrop",Qb="fade",ld="show",cd=`mousedown.bs.${bm}`,ey={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},ty={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class ym extends Co{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return ey}static get DefaultType(){return ty}static get NAME(){return bm}show(e){if(!this._config.isVisible){mn(e);return}this._append();const t=this._getElement();this._config.isAnimated&&wo(t),t.classList.add(ld),this._emulateAnimation(()=>{mn(e)})}hide(e){if(!this._config.isVisible){mn(e);return}this._getElement().classList.remove(ld),this._emulateAnimation(()=>{this.dispose(),mn(e)})}dispose(){this._isAppended&&(ue.off(this._element,cd),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(Qb),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=Zi(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),ue.on(e,cd,()=>{mn(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){om(e,this._getElement(),this._config.isAnimated)}}const ny="focustrap",iy="bs.focustrap",za=`.${iy}`,sy=`focusin${za}`,ry=`keydown.tab${za}`,oy="Tab",ay="forward",ud="backward",ly={autofocus:!0,trapElement:null},cy={autofocus:"boolean",trapElement:"element"};class xm extends Co{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return ly}static get DefaultType(){return cy}static get NAME(){return ny}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),ue.off(document,za),ue.on(document,sy,e=>this._handleFocusin(e)),ue.on(document,ry,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,ue.off(document,za))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const n=ze.focusableChildren(t);n.length===0?t.focus():this._lastTabNavDirection===ud?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){e.key===oy&&(this._lastTabNavDirection=e.shiftKey?ud:ay)}}const hd=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",dd=".sticky-top",ta="padding-right",fd="margin-right";class Gc{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,ta,t=>t+e),this._setElementAttributes(hd,ta,t=>t+e),this._setElementAttributes(dd,fd,t=>t-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,ta),this._resetElementAttributes(hd,ta),this._resetElementAttributes(dd,fd)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const s=this.getWidth(),r=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+s)return;this._saveInitialAttribute(o,t);const a=window.getComputedStyle(o).getPropertyValue(t);o.style.setProperty(t,`${n(Number.parseFloat(a))}px`)};this._applyManipulationCallback(e,r)}_saveInitialAttribute(e,t){const n=e.style.getPropertyValue(t);n&&Mi.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=s=>{const r=Mi.getDataAttribute(s,t);if(r===null){s.style.removeProperty(t);return}Mi.removeDataAttribute(s,t),s.style.setProperty(t,r)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){if(Si(e)){t(e);return}for(const n of ze.find(e,this._element))t(n)}}const uy="modal",hy="bs.modal",Fn=`.${hy}`,dy=".data-api",fy="Escape",py=`hide${Fn}`,my=`hidePrevented${Fn}`,Tm=`hidden${Fn}`,Sm=`show${Fn}`,gy=`shown${Fn}`,_y=`resize${Fn}`,vy=`click.dismiss${Fn}`,Ey=`mousedown.dismiss${Fn}`,by=`keydown.dismiss${Fn}`,yy=`click${Fn}${dy}`,pd="modal-open",xy="fade",md="show",Wl="modal-static",Ty=".modal.show",Sy=".modal-dialog",My=".modal-body",Ay='[data-bs-toggle="modal"]',wy={backdrop:!0,focus:!0,keyboard:!0},Cy={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Pr extends jn{constructor(e,t){super(e,t),this._dialog=ze.findOne(Sy,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Gc,this._addEventListeners()}static get Default(){return wy}static get DefaultType(){return Cy}static get NAME(){return uy}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||ue.trigger(this._element,Sm,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(pd),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||ue.trigger(this._element,py).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(md),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){ue.off(window,Fn),ue.off(this._dialog,Fn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new ym({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new xm({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=ze.findOne(My,this._dialog);t&&(t.scrollTop=0),wo(this._element),this._element.classList.add(md);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,ue.trigger(this._element,gy,{relatedTarget:e})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){ue.on(this._element,by,e=>{if(e.key===fy){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),ue.on(window,_y,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),ue.on(this._element,Ey,e=>{ue.one(this._element,vy,t=>{if(!(this._element!==e.target||this._element!==t.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(pd),this._resetAdjustments(),this._scrollBar.reset(),ue.trigger(this._element,Tm)})}_isAnimated(){return this._element.classList.contains(xy)}_triggerBackdropTransition(){if(ue.trigger(this._element,my).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;n==="hidden"||this._element.classList.contains(Wl)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(Wl),this._queueCallback(()=>{this._element.classList.remove(Wl),this._queueCallback(()=>{this._element.style.overflowY=n},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){const s=Un()?"paddingLeft":"paddingRight";this._element.style[s]=`${t}px`}if(!n&&e){const s=Un()?"paddingRight":"paddingLeft";this._element.style[s]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each(function(){const n=Pr.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e](t)}})}}ue.on(document,yy,Ay,function(i){const e=ze.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&i.preventDefault(),ue.one(e,Sm,s=>{s.defaultPrevented||ue.one(e,Tm,()=>{Gr(this)&&this.focus()})});const t=ze.findOne(Ty);t&&Pr.getInstance(t).hide(),Pr.getOrCreateInstance(e).toggle(this)});Ja(Pr);Bn(Pr);const Ry="offcanvas",Ly="bs.offcanvas",Ri=`.${Ly}`,Mm=".data-api",Py=`load${Ri}${Mm}`,Dy="Escape",gd="show",_d="showing",vd="hiding",Iy="offcanvas-backdrop",Am=".offcanvas.show",Ny=`show${Ri}`,Oy=`shown${Ri}`,Uy=`hide${Ri}`,Ed=`hidePrevented${Ri}`,wm=`hidden${Ri}`,Fy=`resize${Ri}`,By=`click${Ri}${Mm}`,ky=`keydown.dismiss${Ri}`,Hy='[data-bs-toggle="offcanvas"]',Vy={backdrop:!0,keyboard:!0,scroll:!1},zy={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Qi extends jn{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Vy}static get DefaultType(){return zy}static get NAME(){return Ry}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||ue.trigger(this._element,Ny,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Gc().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(_d);const n=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(gd),this._element.classList.remove(_d),ue.trigger(this._element,Oy,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown||ue.trigger(this._element,Uy).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(vd),this._backdrop.hide();const t=()=>{this._element.classList.remove(gd,vd),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Gc().reset(),ue.trigger(this._element,wm)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){ue.trigger(this._element,Ed);return}this.hide()},t=!!this._config.backdrop;return new ym({className:Iy,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?e:null})}_initializeFocusTrap(){return new xm({trapElement:this._element})}_addEventListeners(){ue.on(this._element,ky,e=>{if(e.key===Dy){if(this._config.keyboard){this.hide();return}ue.trigger(this._element,Ed)}})}static jQueryInterface(e){return this.each(function(){const t=Qi.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}ue.on(document,By,Hy,function(i){const e=ze.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),Ji(this))return;ue.one(e,wm,()=>{Gr(this)&&this.focus()});const t=ze.findOne(Am);t&&t!==e&&Qi.getInstance(t).hide(),Qi.getOrCreateInstance(e).toggle(this)});ue.on(window,Py,()=>{for(const i of ze.find(Am))Qi.getOrCreateInstance(i).show()});ue.on(window,Fy,()=>{for(const i of ze.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(i).position!=="fixed"&&Qi.getOrCreateInstance(i).hide()});Ja(Qi);Bn(Qi);const Gy=/^aria-[\w-]*$/i,Cm={"*":["class","dir","id","lang","role",Gy],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Wy=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),$y=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Xy=(i,e)=>{const t=i.nodeName.toLowerCase();return e.includes(t)?Wy.has(t)?!!$y.test(i.nodeValue):!0:e.filter(n=>n instanceof RegExp).some(n=>n.test(t))};function jy(i,e,t){if(!i.length)return i;if(t&&typeof t=="function")return t(i);const s=new window.DOMParser().parseFromString(i,"text/html"),r=[].concat(...s.body.querySelectorAll("*"));for(const o of r){const a=o.nodeName.toLowerCase();if(!Object.keys(e).includes(a)){o.remove();continue}const l=[].concat(...o.attributes),u=[].concat(e["*"]||[],e[a]||[]);for(const h of l)Xy(h,u)||o.removeAttribute(h.nodeName)}return s.body.innerHTML}const qy="TemplateFactory",Yy={allowList:Cm,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Ky={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Zy={entry:"(string|element|function|null)",selector:"(string|element)"};class Jy extends Co{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return Yy}static get DefaultType(){return Ky}static get NAME(){return qy}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[s,r]of Object.entries(this._config.content))this._setContent(e,r,s);const t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},Zy)}_setContent(e,t,n){const s=ze.findOne(n,e);if(s){if(t=this._resolvePossibleFunction(t),!t){s.remove();return}if(Si(t)){this._putElementInTemplate(Zi(t),s);return}if(this._config.html){s.innerHTML=this._maybeSanitize(t);return}s.textContent=t}}_maybeSanitize(e){return this._config.sanitize?jy(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return mn(e,[void 0,this])}_putElementInTemplate(e,t){if(this._config.html){t.innerHTML="",t.append(e);return}t.textContent=e.textContent}}const Qy="tooltip",ex=new Set(["sanitize","allowList","sanitizeFn"]),$l="fade",tx="modal",na="show",nx=".tooltip-inner",bd=`.${tx}`,yd="hide.bs.modal",oo="hover",Xl="focus",jl="click",ix="manual",sx="hide",rx="hidden",ox="show",ax="shown",lx="inserted",cx="click",ux="focusin",hx="focusout",dx="mouseenter",fx="mouseleave",px={AUTO:"auto",TOP:"top",RIGHT:Un()?"left":"right",BOTTOM:"bottom",LEFT:Un()?"right":"left"},mx={allowList:Cm,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},gx={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class $r extends jn{constructor(e,t){if(typeof tm>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return mx}static get DefaultType(){return gx}static get NAME(){return Qy}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),ue.off(this._element.closest(bd),yd,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=ue.trigger(this._element,this.constructor.eventName(ox)),n=(sm(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!n)return;this._disposePopper();const s=this._getTipElement();this._element.setAttribute("aria-describedby",s.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(s),ue.trigger(this._element,this.constructor.eventName(lx))),this._popper=this._createPopper(s),s.classList.add(na),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))ue.on(a,"mouseover",Ha);const o=()=>{ue.trigger(this._element,this.constructor.eventName(ax)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||ue.trigger(this._element,this.constructor.eventName(sx)).defaultPrevented)return;if(this._getTipElement().classList.remove(na),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))ue.off(s,"mouseover",Ha);this._activeTrigger[jl]=!1,this._activeTrigger[Xl]=!1,this._activeTrigger[oo]=!1,this._isHovered=null;const n=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),ue.trigger(this._element,this.constructor.eventName(rx)))};this._queueCallback(n,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove($l,na),t.classList.add(`bs-${this.constructor.NAME}-auto`);const n=iE(this.constructor.NAME).toString();return t.setAttribute("id",n),this._isAnimated()&&t.classList.add($l),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new Jy({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[nx]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains($l)}_isShown(){return this.tip&&this.tip.classList.contains(na)}_createPopper(e){const t=mn(this._config.placement,[this,e,this._element]),n=px[t.toUpperCase()];return du(this._element,e,this._getPopperConfig(n))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_resolvePossibleFunction(e){return mn(e,[this._element,this._element])}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:n=>{this._getTipElement().setAttribute("data-popper-placement",n.state.placement)}}]};return{...t,...mn(this._config.popperConfig,[void 0,t])}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if(t==="click")ue.on(this._element,this.constructor.eventName(cx),this._config.selector,n=>{const s=this._initializeOnDelegatedTarget(n);s._activeTrigger[jl]=!(s._isShown()&&s._activeTrigger[jl]),s.toggle()});else if(t!==ix){const n=t===oo?this.constructor.eventName(dx):this.constructor.eventName(ux),s=t===oo?this.constructor.eventName(fx):this.constructor.eventName(hx);ue.on(this._element,n,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusin"?Xl:oo]=!0,o._enter()}),ue.on(this._element,s,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusout"?Xl:oo]=o._element.contains(r.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},ue.on(this._element.closest(bd),yd,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=Mi.getDataAttributes(this._element);for(const n of Object.keys(t))ex.has(n)&&delete t[n];return e={...t,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:Zi(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[t,n]of Object.entries(this._config))this.constructor.Default[t]!==n&&(e[t]=n);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const t=$r.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}}Bn($r);const _x="popover",vx=".popover-header",Ex=".popover-body",bx={...$r.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},yx={...$r.DefaultType,content:"(null|string|element|function)"};class gu extends $r{static get Default(){return bx}static get DefaultType(){return yx}static get NAME(){return _x}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[vx]:this._getTitle(),[Ex]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const t=gu.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}}Bn(gu);const xx="scrollspy",Tx="bs.scrollspy",_u=`.${Tx}`,Sx=".data-api",Mx=`activate${_u}`,xd=`click${_u}`,Ax=`load${_u}${Sx}`,wx="dropdown-item",Zs="active",Cx='[data-bs-spy="scroll"]',ql="[href]",Rx=".nav, .list-group",Td=".nav-link",Lx=".nav-item",Px=".list-group-item",Dx=`${Td}, ${Lx} > ${Td}, ${Px}`,Ix=".dropdown",Nx=".dropdown-toggle",Ox={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Ux={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class tl extends jn{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Ox}static get DefaultType(){return Ux}static get NAME(){return xx}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=Zi(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(t=>Number.parseFloat(t))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(ue.off(this._config.target,xd),ue.on(this._config.target,xd,ql,e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const n=this._rootElement||window,s=t.offsetTop-this._element.offsetTop;if(n.scrollTo){n.scrollTo({top:s,behavior:"smooth"});return}n.scrollTop=s}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(t=>this._observerCallback(t),e)}_observerCallback(e){const t=o=>this._targetLinks.get(`#${o.target.id}`),n=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(t(o))},s=(this._rootElement||document.documentElement).scrollTop,r=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&a){if(n(o),!s)return;continue}!r&&!a&&n(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=ze.find(ql,this._config.target);for(const t of e){if(!t.hash||Ji(t))continue;const n=ze.findOne(decodeURI(t.hash),this._element);Gr(n)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,n))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Zs),this._activateParents(e),ue.trigger(this._element,Mx,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(wx)){ze.findOne(Nx,e.closest(Ix)).classList.add(Zs);return}for(const t of ze.parents(e,Rx))for(const n of ze.prev(t,Dx))n.classList.add(Zs)}_clearActiveClass(e){e.classList.remove(Zs);const t=ze.find(`${ql}.${Zs}`,e);for(const n of t)n.classList.remove(Zs)}static jQueryInterface(e){return this.each(function(){const t=tl.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}ue.on(window,Ax,()=>{for(const i of ze.find(Cx))tl.getOrCreateInstance(i)});Bn(tl);const Fx="tab",Bx="bs.tab",Us=`.${Bx}`,kx=`hide${Us}`,Hx=`hidden${Us}`,Vx=`show${Us}`,zx=`shown${Us}`,Gx=`click${Us}`,Wx=`keydown${Us}`,$x=`load${Us}`,Xx="ArrowLeft",Sd="ArrowRight",jx="ArrowUp",Md="ArrowDown",Yl="Home",Ad="End",xs="active",wd="fade",Kl="show",qx="dropdown",Rm=".dropdown-toggle",Yx=".dropdown-menu",Zl=`:not(${Rm})`,Kx='.list-group, .nav, [role="tablist"]',Zx=".nav-item, .list-group-item",Jx=`.nav-link${Zl}, .list-group-item${Zl}, [role="tab"]${Zl}`,Lm='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Jl=`${Jx}, ${Lm}`,Qx=`.${xs}[data-bs-toggle="tab"], .${xs}[data-bs-toggle="pill"], .${xs}[data-bs-toggle="list"]`;class Dr extends jn{constructor(e){super(e),this._parent=this._element.closest(Kx),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),ue.on(this._element,Wx,t=>this._keydown(t)))}static get NAME(){return Fx}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),n=t?ue.trigger(t,kx,{relatedTarget:e}):null;ue.trigger(e,Vx,{relatedTarget:t}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){if(!e)return;e.classList.add(xs),this._activate(ze.getElementFromSelector(e));const n=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(Kl);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),ue.trigger(e,zx,{relatedTarget:t})};this._queueCallback(n,e,e.classList.contains(wd))}_deactivate(e,t){if(!e)return;e.classList.remove(xs),e.blur(),this._deactivate(ze.getElementFromSelector(e));const n=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(Kl);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),ue.trigger(e,Hx,{relatedTarget:t})};this._queueCallback(n,e,e.classList.contains(wd))}_keydown(e){if(![Xx,Sd,jx,Md,Yl,Ad].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=this._getChildren().filter(s=>!Ji(s));let n;if([Yl,Ad].includes(e.key))n=t[e.key===Yl?0:t.length-1];else{const s=[Sd,Md].includes(e.key);n=fu(t,e.target,s,!0)}n&&(n.focus({preventScroll:!0}),Dr.getOrCreateInstance(n).show())}_getChildren(){return ze.find(Jl,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const n of t)this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute("aria-selected",t),n!==e&&this._setAttributeIfNotExists(n,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=ze.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,t){const n=this._getOuterElement(e);if(!n.classList.contains(qx))return;const s=(r,o)=>{const a=ze.findOne(r,n);a&&a.classList.toggle(o,t)};s(Rm,xs),s(Yx,Kl),n.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(xs)}_getInnerElement(e){return e.matches(Jl)?e:ze.findOne(Jl,e)}_getOuterElement(e){return e.closest(Zx)||e}static jQueryInterface(e){return this.each(function(){const t=Dr.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}ue.on(document,Gx,Lm,function(i){["A","AREA"].includes(this.tagName)&&i.preventDefault(),!Ji(this)&&Dr.getOrCreateInstance(this).show()});ue.on(window,$x,()=>{for(const i of ze.find(Qx))Dr.getOrCreateInstance(i)});Bn(Dr);const e0="toast",t0="bs.toast",ns=`.${t0}`,n0=`mouseover${ns}`,i0=`mouseout${ns}`,s0=`focusin${ns}`,r0=`focusout${ns}`,o0=`hide${ns}`,a0=`hidden${ns}`,l0=`show${ns}`,c0=`shown${ns}`,u0="fade",Cd="hide",ia="show",sa="showing",h0={animation:"boolean",autohide:"boolean",delay:"number"},d0={animation:!0,autohide:!0,delay:5e3};class Po extends jn{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return d0}static get DefaultType(){return h0}static get NAME(){return e0}show(){if(ue.trigger(this._element,l0).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(u0);const t=()=>{this._element.classList.remove(sa),ue.trigger(this._element,c0),this._maybeScheduleHide()};this._element.classList.remove(Cd),wo(this._element),this._element.classList.add(ia,sa),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this.isShown()||ue.trigger(this._element,o0).defaultPrevented)return;const t=()=>{this._element.classList.add(Cd),this._element.classList.remove(sa,ia),ue.trigger(this._element,a0)};this._element.classList.add(sa),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ia),super.dispose()}isShown(){return this._element.classList.contains(ia)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=t;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=t;break}}if(t){this._clearTimeout();return}const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){ue.on(this._element,n0,e=>this._onInteraction(e,!0)),ue.on(this._element,i0,e=>this._onInteraction(e,!1)),ue.on(this._element,s0,e=>this._onInteraction(e,!0)),ue.on(this._element,r0,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const t=Po.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}Ja(Po);Bn(Po);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vu="160",Js={ROTATE:0,DOLLY:1,PAN:2},Qs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},f0=0,Rd=1,p0=2,Pm=1,m0=2,yi=3,Ci=0,gn=1,ei=2,qi=0,Tr=1,Ld=2,Pd=3,Dd=4,g0=5,Es=100,_0=101,v0=102,Id=103,Nd=104,E0=200,b0=201,y0=202,x0=203,Wc=204,$c=205,T0=206,S0=207,M0=208,A0=209,w0=210,C0=211,R0=212,L0=213,P0=214,D0=0,I0=1,N0=2,Ga=3,O0=4,U0=5,F0=6,B0=7,Dm=0,k0=1,H0=2,Yi=0,V0=1,z0=2,G0=3,W0=4,$0=5,X0=6,Od="attached",j0="detached",Im=300,Ir=301,Nr=302,Xc=303,jc=304,nl=306,Or=1e3,Pn=1001,Wa=1002,Kt=1003,qc=1004,Fa=1005,pn=1006,Nm=1007,Ps=1008,Ki=1009,q0=1010,Y0=1011,Eu=1012,Om=1013,Xi=1014,xi=1015,To=1016,Um=1017,Fm=1018,As=1020,K0=1021,Dn=1023,Z0=1024,J0=1025,ws=1026,Ur=1027,Q0=1028,Bm=1029,eT=1030,km=1031,Hm=1033,Ql=33776,ec=33777,tc=33778,nc=33779,Ud=35840,Fd=35841,Bd=35842,kd=35843,Vm=36196,Hd=37492,Vd=37496,zd=37808,Gd=37809,Wd=37810,$d=37811,Xd=37812,jd=37813,qd=37814,Yd=37815,Kd=37816,Zd=37817,Jd=37818,Qd=37819,ef=37820,tf=37821,ic=36492,nf=36494,sf=36495,tT=36283,rf=36284,of=36285,af=36286,So=2300,Fr=2301,sc=2302,lf=2400,cf=2401,uf=2402,nT=2500,iT=0,zm=1,Yc=2,Gm=3e3,Cs=3001,sT=3200,rT=3201,Wm=0,oT=1,In="",zt="srgb",Zt="srgb-linear",bu="display-p3",il="display-p3-linear",$a="linear",Ot="srgb",Xa="rec709",ja="p3",er=7680,hf=519,aT=512,lT=513,cT=514,$m=515,uT=516,hT=517,dT=518,fT=519,Kc=35044,df="300 es",Zc=1035,Ti=2e3,qa=2001;class Fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ff=1234567;const vo=Math.PI/180,Br=180/Math.PI;function Xn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Jt(i,e,t){return Math.max(e,Math.min(t,i))}function yu(i,e){return(i%e+e)%e}function pT(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function mT(i,e,t){return i!==e?(t-i)/(e-i):0}function Eo(i,e,t){return(1-t)*i+t*e}function gT(i,e,t,n){return Eo(i,e,1-Math.exp(-t*n))}function _T(i,e=1){return e-Math.abs(yu(i,e*2)-e)}function vT(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ET(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function bT(i,e){return i+Math.floor(Math.random()*(e-i+1))}function yT(i,e){return i+Math.random()*(e-i)}function xT(i){return i*(.5-Math.random())}function TT(i){i!==void 0&&(ff=i);let e=ff+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ST(i){return i*vo}function MT(i){return i*Br}function Jc(i){return(i&i-1)===0&&i!==0}function AT(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ya(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wT(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),u=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),_=r((n-e)/2),v=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*f,a*u);break;case"YZY":i.set(l*f,a*h,l*d,a*u);break;case"ZXZ":i.set(l*d,l*f,a*h,a*u);break;case"XZX":i.set(a*h,l*v,l*_,a*u);break;case"YXY":i.set(l*_,a*h,l*v,a*u);break;case"ZYZ":i.set(l*v,l*_,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ti(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xm={DEG2RAD:vo,RAD2DEG:Br,generateUUID:Xn,clamp:Jt,euclideanModulo:yu,mapLinear:pT,inverseLerp:mT,lerp:Eo,damp:gT,pingpong:_T,smoothstep:vT,smootherstep:ET,randInt:bT,randFloat:yT,randFloatSpread:xT,seededRandom:TT,degToRad:ST,radToDeg:MT,isPowerOfTwo:Jc,ceilPowerOfTwo:AT,floorPowerOfTwo:Ya,setQuaternionFromProperEuler:wT,normalize:wt,denormalize:ti};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,n,s,r,o,a,l,u){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,u)}set(e,t,n,s,r,o,a,l,u){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],h=n[4],d=n[7],f=n[2],_=n[5],v=n[8],b=s[0],m=s[3],p=s[6],M=s[1],y=s[4],A=s[7],I=s[2],D=s[5],L=s[8];return r[0]=o*b+a*M+l*I,r[3]=o*m+a*y+l*D,r[6]=o*p+a*A+l*L,r[1]=u*b+h*M+d*I,r[4]=u*m+h*y+d*D,r[7]=u*p+h*A+d*L,r[2]=f*b+_*M+v*I,r[5]=f*m+_*y+v*D,r[8]=f*p+_*A+v*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-n*r*h+n*a*l+s*r*u-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=h*o-a*u,f=a*l-h*r,_=u*r-o*l,v=t*d+n*f+s*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/v;return e[0]=d*b,e[1]=(s*u-h*n)*b,e[2]=(a*n-s*o)*b,e[3]=f*b,e[4]=(h*t-s*l)*b,e[5]=(s*r-a*t)*b,e[6]=_*b,e[7]=(n*l-u*t)*b,e[8]=(o*t-n*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-s*u,s*l,-s*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(rc.makeScale(e,t)),this}rotate(e){return this.premultiply(rc.makeRotation(-e)),this}translate(e,t){return this.premultiply(rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rc=new pt;function jm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function CT(){const i=Mo("canvas");return i.style.display="block",i}const pf={};function bo(i){i in pf||(pf[i]=!0,console.warn(i))}const mf=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gf=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ra={[Zt]:{transfer:$a,primaries:Xa,toReference:i=>i,fromReference:i=>i},[zt]:{transfer:Ot,primaries:Xa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[il]:{transfer:$a,primaries:ja,toReference:i=>i.applyMatrix3(gf),fromReference:i=>i.applyMatrix3(mf)},[bu]:{transfer:Ot,primaries:ja,toReference:i=>i.convertSRGBToLinear().applyMatrix3(gf),fromReference:i=>i.applyMatrix3(mf).convertLinearToSRGB()}},RT=new Set([Zt,il]),bt={enabled:!0,_workingColorSpace:Zt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!RT.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ra[e].toReference,s=ra[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ra[i].primaries},getTransfer:function(i){return i===In?$a:ra[i].transfer}};function Sr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let tr;class qm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{tr===void 0&&(tr=Mo("canvas")),tr.width=e.width,tr.height=e.height;const n=tr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Sr(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Sr(t[n]/255)*255):t[n]=Sr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LT=0;class Ym{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LT++}),this.uuid=Xn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ac(s[o].image)):r.push(ac(s[o]))}else r=ac(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ac(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let PT=0;class Qt extends Fs{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,n=Pn,s=Pn,r=pn,o=Ps,a=Dn,l=Ki,u=Qt.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PT++}),this.uuid=Xn(),this.name="",this.source=new Ym(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Cs?zt:In),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Im)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Or:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case Wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Or:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case Wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?Cs:Gm}set encoding(e){bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Cs?zt:In}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Im;Qt.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,n=0,s=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,u=l[0],h=l[4],d=l[8],f=l[1],_=l[5],v=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-b)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+b)<.1&&Math.abs(v+m)<.1&&Math.abs(u+_+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,A=(_+1)/2,I=(p+1)/2,D=(h+f)/4,L=(d+b)/4,J=(v+m)/4;return y>A&&y>I?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=D/n,r=L/n):A>I?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=D/s,r=J/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=L/r,s=J/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-v)*(m-v)+(d-b)*(d-b)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-v)/M,this.y=(d-b)/M,this.z=(f-h)/M,this.w=Math.acos((u+_+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class DT extends Fs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(bo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Cs?zt:In),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Qt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ym(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ds extends DT{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Km extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class IT extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],u=n[s+1],h=n[s+2],d=n[s+3];const f=r[o+0],_=r[o+1],v=r[o+2],b=r[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=_,e[t+2]=v,e[t+3]=b;return}if(d!==b||l!==f||u!==_||h!==v){let m=1-a;const p=l*f+u*_+h*v+d*b,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const I=Math.sqrt(y),D=Math.atan2(I,p*M);m=Math.sin(m*D)/I,a=Math.sin(a*D)/I}const A=a*M;if(l=l*m+f*A,u=u*m+_*A,h=h*m+v*A,d=d*m+b*A,m===1-a){const I=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=I,u*=I,h*=I,d*=I}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],u=n[s+2],h=n[s+3],d=r[o],f=r[o+1],_=r[o+2],v=r[o+3];return e[t]=a*v+h*d+l*_-u*f,e[t+1]=l*v+h*f+u*d-a*_,e[t+2]=u*v+h*_+a*f-l*d,e[t+3]=h*v-a*d-l*f-u*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),_=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=f*h*d+u*_*v,this._y=u*_*d-f*h*v,this._z=u*h*v+f*_*d,this._w=u*h*d-f*_*v;break;case"YXZ":this._x=f*h*d+u*_*v,this._y=u*_*d-f*h*v,this._z=u*h*v-f*_*d,this._w=u*h*d+f*_*v;break;case"ZXY":this._x=f*h*d-u*_*v,this._y=u*_*d+f*h*v,this._z=u*h*v+f*_*d,this._w=u*h*d-f*_*v;break;case"ZYX":this._x=f*h*d-u*_*v,this._y=u*_*d+f*h*v,this._z=u*h*v-f*_*d,this._w=u*h*d+f*_*v;break;case"YZX":this._x=f*h*d+u*_*v,this._y=u*_*d+f*h*v,this._z=u*h*v-f*_*d,this._w=u*h*d-f*_*v;break;case"XZY":this._x=f*h*d-u*_*v,this._y=u*_*d-f*h*v,this._z=u*h*v+f*_*d,this._w=u*h*d+f*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],u=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(h-l)*_,this._y=(r-u)*_,this._z=(o-s)*_}else if(n>a&&n>d){const _=2*Math.sqrt(1+n-a-d);this._w=(h-l)/_,this._x=.25*_,this._y=(s+o)/_,this._z=(r+u)/_}else if(a>d){const _=2*Math.sqrt(1+a-n-d);this._w=(r-u)/_,this._x=(s+o)/_,this._y=.25*_,this._z=(l+h)/_}else{const _=2*Math.sqrt(1+d-n-a);this._w=(o-s)/_,this._x=(r+u)/_,this._y=(l+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,u=t._z,h=t._w;return this._x=n*h+o*a+s*u-r*l,this._y=s*h+o*l+r*a-n*u,this._z=r*h+o*u+n*l-s*a,this._w=o*h-n*a-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const _=1-t;return this._w=_*o+t*this._w,this._x=_*n+t*this._x,this._y=_*s+t*this._y,this._z=_*r+t*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),d=Math.sin((1-t)*h)/u,f=Math.sin(t*h)/u;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_f.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_f.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*u+o*d-a*h,this.y=n+l*h+a*u-r*d,this.z=s+l*d+r*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lc.copy(this).projectOnVector(e),this.sub(lc)}reflect(e){return this.sub(lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lc=new F,_f=new oi;class ai{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(e.matrixWorld),this.union(oa)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),aa.subVectors(this.max,ao),nr.subVectors(e.a,ao),ir.subVectors(e.b,ao),sr.subVectors(e.c,ao),Fi.subVectors(ir,nr),Bi.subVectors(sr,ir),fs.subVectors(nr,sr);let t=[0,-Fi.z,Fi.y,0,-Bi.z,Bi.y,0,-fs.z,fs.y,Fi.z,0,-Fi.x,Bi.z,0,-Bi.x,fs.z,0,-fs.x,-Fi.y,Fi.x,0,-Bi.y,Bi.x,0,-fs.y,fs.x,0];return!cc(t,nr,ir,sr,aa)||(t=[1,0,0,0,1,0,0,0,1],!cc(t,nr,ir,sr,aa))?!1:(la.crossVectors(Fi,Bi),t=[la.x,la.y,la.z],cc(t,nr,ir,sr,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new F,new F,new F,new F,new F,new F,new F,new F],zn=new F,oa=new ai,nr=new F,ir=new F,sr=new F,Fi=new F,Bi=new F,fs=new F,ao=new F,aa=new F,la=new F,ps=new F;function cc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ps.fromArray(i,r);const a=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),l=e.dot(ps),u=t.dot(ps),h=n.dot(ps);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const NT=new ai,lo=new F,uc=new F;class li{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):NT.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);const t=lo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(lo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(uc)),this.expandByPoint(lo.copy(e.center).sub(uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new F,hc=new F,ca=new F,ki=new F,dc=new F,ua=new F,fc=new F;class Do{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){hc.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(hc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ca),a=ki.dot(this.direction),l=-ki.dot(ca),u=ki.lengthSq(),h=Math.abs(1-o*o);let d,f,_,v;if(h>0)if(d=o*l-a,f=o*a-l,v=r*h,d>=0)if(f>=-v)if(f<=v){const b=1/h;d*=b,f*=b,_=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=r,d=Math.max(0,-(o*f+a)),_=-d*d+f*(f+2*l)+u;else f=-r,d=Math.max(0,-(o*f+a)),_=-d*d+f*(f+2*l)+u;else f<=-v?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),_=-d*d+f*(f+2*l)+u):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),_=f*(f+2*l)+u):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),_=-d*d+f*(f+2*l)+u);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),_=-d*d+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(hc).addScaledVector(ca,f),_}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const n=gi.dot(this.direction),s=gi.dot(gi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,s=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,s=(e.min.x-f.x)*u),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,s,r){dc.subVectors(t,e),ua.subVectors(n,e),fc.crossVectors(dc,ua);let o=this.direction.dot(fc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(ua.crossVectors(ki,ua));if(l<0)return null;const u=a*this.direction.dot(dc.cross(ki));if(u<0||l+u>o)return null;const h=-a*ki.dot(fc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,n,s,r,o,a,l,u,h,d,f,_,v,b,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,u,h,d,f,_,v,b,m)}set(e,t,n,s,r,o,a,l,u,h,d,f,_,v,b,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=h,p[10]=d,p[14]=f,p[3]=_,p[7]=v,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/rr.setFromMatrixColumn(e,0).length(),r=1/rr.setFromMatrixColumn(e,1).length(),o=1/rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),u=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*h,_=o*d,v=a*h,b=a*d;t[0]=l*h,t[4]=-l*d,t[8]=u,t[1]=_+v*u,t[5]=f-b*u,t[9]=-a*l,t[2]=b-f*u,t[6]=v+_*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,_=l*d,v=u*h,b=u*d;t[0]=f+b*a,t[4]=v*a-_,t[8]=o*u,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=_*a-v,t[6]=b+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,_=l*d,v=u*h,b=u*d;t[0]=f-b*a,t[4]=-o*d,t[8]=v+_*a,t[1]=_+v*a,t[5]=o*h,t[9]=b-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,_=o*d,v=a*h,b=a*d;t[0]=l*h,t[4]=v*u-_,t[8]=f*u+b,t[1]=l*d,t[5]=b*u+f,t[9]=_*u-v,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,_=o*u,v=a*l,b=a*u;t[0]=l*h,t[4]=b-f*d,t[8]=v*d+_,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=_*d+v,t[10]=f-b*d}else if(e.order==="XZY"){const f=o*l,_=o*u,v=a*l,b=a*u;t[0]=l*h,t[4]=-d,t[8]=u*h,t[1]=f*d+b,t[5]=o*h,t[9]=_*d-v,t[2]=v*d-_,t[6]=a*h,t[10]=b*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OT,e,UT)}lookAt(e,t,n){const s=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Hi.crossVectors(n,En),Hi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Hi.crossVectors(n,En)),Hi.normalize(),ha.crossVectors(En,Hi),s[0]=Hi.x,s[4]=ha.x,s[8]=En.x,s[1]=Hi.y,s[5]=ha.y,s[9]=En.y,s[2]=Hi.z,s[6]=ha.z,s[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],h=n[1],d=n[5],f=n[9],_=n[13],v=n[2],b=n[6],m=n[10],p=n[14],M=n[3],y=n[7],A=n[11],I=n[15],D=s[0],L=s[4],J=s[8],S=s[12],R=s[1],j=s[5],Q=s[9],se=s[13],B=s[2],W=s[6],q=s[10],ee=s[14],te=s[3],ne=s[7],ie=s[11],O=s[15];return r[0]=o*D+a*R+l*B+u*te,r[4]=o*L+a*j+l*W+u*ne,r[8]=o*J+a*Q+l*q+u*ie,r[12]=o*S+a*se+l*ee+u*O,r[1]=h*D+d*R+f*B+_*te,r[5]=h*L+d*j+f*W+_*ne,r[9]=h*J+d*Q+f*q+_*ie,r[13]=h*S+d*se+f*ee+_*O,r[2]=v*D+b*R+m*B+p*te,r[6]=v*L+b*j+m*W+p*ne,r[10]=v*J+b*Q+m*q+p*ie,r[14]=v*S+b*se+m*ee+p*O,r[3]=M*D+y*R+A*B+I*te,r[7]=M*L+y*j+A*W+I*ne,r[11]=M*J+y*Q+A*q+I*ie,r[15]=M*S+y*se+A*ee+I*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],d=e[6],f=e[10],_=e[14],v=e[3],b=e[7],m=e[11],p=e[15];return v*(+r*l*d-s*u*d-r*a*f+n*u*f+s*a*_-n*l*_)+b*(+t*l*_-t*u*f+r*o*f-s*o*_+s*u*h-r*l*h)+m*(+t*u*d-t*a*_-r*o*d+n*o*_+r*a*h-n*u*h)+p*(-s*a*h-t*l*d+t*a*f+s*o*d-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=e[9],f=e[10],_=e[11],v=e[12],b=e[13],m=e[14],p=e[15],M=d*m*u-b*f*u+b*l*_-a*m*_-d*l*p+a*f*p,y=v*f*u-h*m*u-v*l*_+o*m*_+h*l*p-o*f*p,A=h*b*u-v*d*u+v*a*_-o*b*_-h*a*p+o*d*p,I=v*d*l-h*b*l-v*a*f+o*b*f+h*a*m-o*d*m,D=t*M+n*y+s*A+r*I;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/D;return e[0]=M*L,e[1]=(b*f*r-d*m*r-b*s*_+n*m*_+d*s*p-n*f*p)*L,e[2]=(a*m*r-b*l*r+b*s*u-n*m*u-a*s*p+n*l*p)*L,e[3]=(d*l*r-a*f*r-d*s*u+n*f*u+a*s*_-n*l*_)*L,e[4]=y*L,e[5]=(h*m*r-v*f*r+v*s*_-t*m*_-h*s*p+t*f*p)*L,e[6]=(v*l*r-o*m*r-v*s*u+t*m*u+o*s*p-t*l*p)*L,e[7]=(o*f*r-h*l*r+h*s*u-t*f*u-o*s*_+t*l*_)*L,e[8]=A*L,e[9]=(v*d*r-h*b*r-v*n*_+t*b*_+h*n*p-t*d*p)*L,e[10]=(o*b*r-v*a*r+v*n*u-t*b*u-o*n*p+t*a*p)*L,e[11]=(h*a*r-o*d*r-h*n*u+t*d*u+o*n*_-t*a*_)*L,e[12]=I*L,e[13]=(h*b*s-v*d*s+v*n*f-t*b*f-h*n*m+t*d*m)*L,e[14]=(v*a*s-o*b*s-v*n*l+t*b*l+o*n*m-t*a*m)*L,e[15]=(o*d*s-h*a*s+h*n*l-t*d*l-o*n*f+t*a*f)*L,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-s*l,u*l+s*a,0,u*a+s*l,h*a+n,h*l-s*o,0,u*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,u=r+r,h=o+o,d=a+a,f=r*u,_=r*h,v=r*d,b=o*h,m=o*d,p=a*d,M=l*u,y=l*h,A=l*d,I=n.x,D=n.y,L=n.z;return s[0]=(1-(b+p))*I,s[1]=(_+A)*I,s[2]=(v-y)*I,s[3]=0,s[4]=(_-A)*D,s[5]=(1-(f+p))*D,s[6]=(m+M)*D,s[7]=0,s[8]=(v+y)*L,s[9]=(m-M)*L,s[10]=(1-(f+b))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=rr.set(s[0],s[1],s[2]).length();const o=rr.set(s[4],s[5],s[6]).length(),a=rr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Gn.copy(this);const u=1/r,h=1/o,d=1/a;return Gn.elements[0]*=u,Gn.elements[1]*=u,Gn.elements[2]*=u,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,t.setFromRotationMatrix(Gn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ti){const l=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let _,v;if(a===Ti)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===qa)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ti){const l=this.elements,u=1/(t-e),h=1/(n-s),d=1/(o-r),f=(t+e)*u,_=(n+s)*h;let v,b;if(a===Ti)v=(o+r)*d,b=-2*d;else if(a===qa)v=r*d,b=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=b,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const rr=new F,Gn=new mt,OT=new F(0,0,0),UT=new F(1,1,1),Hi=new F,ha=new F,En=new F,vf=new mt,Ef=new oi;class sl{constructor(e=0,t=0,n=0,s=sl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],h=s[9],d=s[2],f=s[6],_=s[10];switch(t){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ef.setFromEuler(this),this.setFromQuaternion(Ef,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sl.DEFAULT_ORDER="XYZ";class Zm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FT=0;const bf=new F,or=new oi,_i=new mt,da=new F,co=new F,BT=new F,kT=new oi,yf=new F(1,0,0),xf=new F(0,1,0),Tf=new F(0,0,1),HT={type:"added"},VT={type:"removed"};class Bt extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FT++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new F,t=new sl,n=new oi,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new pt}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(yf,e)}rotateY(e){return this.rotateOnAxis(xf,e)}rotateZ(e){return this.rotateOnAxis(Tf,e)}translateOnAxis(e,t){return bf.copy(e).applyQuaternion(this.quaternion),this.position.add(bf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yf,e)}translateY(e){return this.translateOnAxis(xf,e)}translateZ(e){return this.translateOnAxis(Tf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?da.copy(e):da.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(co,da,this.up):_i.lookAt(da,co,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),or.setFromRotationMatrix(_i),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(HT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(VT)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,BT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,kT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),_=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),_.length>0&&(n.animations=_),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Bt.DEFAULT_UP=new F(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new F,vi=new F,pc=new F,Ei=new F,ar=new F,lr=new F,Sf=new F,mc=new F,gc=new F,_c=new F;let fa=!1;class $n{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Wn.subVectors(e,t),s.cross(Wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Wn.subVectors(s,t),vi.subVectors(n,t),pc.subVectors(e,t);const o=Wn.dot(Wn),a=Wn.dot(vi),l=Wn.dot(pc),u=vi.dot(vi),h=vi.dot(pc),d=o*u-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,_=(u*l-a*h)*f,v=(o*h-a*l)*f;return r.set(1-_-v,v,_)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getUV(e,t,n,s,r,o,a,l){return fa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fa=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static isFrontFacing(e,t,n,s){return Wn.subVectors(n,t),vi.subVectors(e,t),Wn.cross(vi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Wn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return fa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fa=!0),$n.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return $n.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ar.subVectors(s,n),lr.subVectors(r,n),mc.subVectors(e,n);const l=ar.dot(mc),u=lr.dot(mc);if(l<=0&&u<=0)return t.copy(n);gc.subVectors(e,s);const h=ar.dot(gc),d=lr.dot(gc);if(h>=0&&d<=h)return t.copy(s);const f=l*d-h*u;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ar,o);_c.subVectors(e,r);const _=ar.dot(_c),v=lr.dot(_c);if(v>=0&&_<=v)return t.copy(r);const b=_*u-l*v;if(b<=0&&u>=0&&v<=0)return a=u/(u-v),t.copy(n).addScaledVector(lr,a);const m=h*v-_*d;if(m<=0&&d-h>=0&&_-v>=0)return Sf.subVectors(r,s),a=(d-h)/(d-h+(_-v)),t.copy(s).addScaledVector(Sf,a);const p=1/(m+b+f);return o=b*p,a=f*p,t.copy(n).addScaledVector(ar,o).addScaledVector(lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},pa={h:0,s:0,l:0};function vc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class st{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=bt.workingColorSpace){if(e=yu(e,1),t=Jt(t,0,1),n=Jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=vc(o,r,e+1/3),this.g=vc(o,r,e),this.b=vc(o,r,e-1/3)}return bt.toWorkingColorSpace(this,s),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=Jm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}copyLinearToSRGB(e){return this.r=oc(e.r),this.g=oc(e.g),this.b=oc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return bt.fromWorkingColorSpace(nn.copy(this),e),Math.round(Jt(nn.r*255,0,255))*65536+Math.round(Jt(nn.g*255,0,255))*256+Math.round(Jt(nn.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(nn.copy(this),t);const n=nn.r,s=nn.g,r=nn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=zt){bt.fromWorkingColorSpace(nn.copy(this),e);const t=nn.r,n=nn.g,s=nn.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(pa);const n=Eo(Vi.h,pa.h,t),s=Eo(Vi.s,pa.s,t),r=Eo(Vi.l,pa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new st;st.NAMES=Jm;let zT=0;class si extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zT++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=Tr,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wc,this.blendDst=$c,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wc&&(n.blendSrc=this.blendSrc),this.blendDst!==$c&&(n.blendDst=this.blendDst),this.blendEquation!==Es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ga&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(n.stencilFail=this.stencilFail),this.stencilZFail!==er&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ts extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Dm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new F,ma=new Ke;class hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kc&&(e.usage=this.usage),e}}class Qm extends hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class eg extends hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ai extends hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let GT=0;const Rn=new mt,Ec=new Bt,cr=new F,bn=new ai,uo=new ai,Yt=new F;class ci extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GT++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jm(e)?eg:Qm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return Ec.lookAt(e),Ec.updateMatrix(),this.applyMatrix4(Ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ai(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(bn.min,uo.min),bn.expandByPoint(Yt),Yt.addVectors(bn.max,uo.max),bn.expandByPoint(Yt)):(bn.expandByPoint(uo.min),bn.expandByPoint(uo.max))}bn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Yt.fromBufferAttribute(a,u),l&&(cr.fromBufferAttribute(e,u),Yt.add(cr)),s=Math.max(s,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],h=[];for(let R=0;R<a;R++)u[R]=new F,h[R]=new F;const d=new F,f=new F,_=new F,v=new Ke,b=new Ke,m=new Ke,p=new F,M=new F;function y(R,j,Q){d.fromArray(s,R*3),f.fromArray(s,j*3),_.fromArray(s,Q*3),v.fromArray(o,R*2),b.fromArray(o,j*2),m.fromArray(o,Q*2),f.sub(d),_.sub(d),b.sub(v),m.sub(v);const se=1/(b.x*m.y-m.x*b.y);isFinite(se)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(_,-b.y).multiplyScalar(se),M.copy(_).multiplyScalar(b.x).addScaledVector(f,-m.x).multiplyScalar(se),u[R].add(p),u[j].add(p),u[Q].add(p),h[R].add(M),h[j].add(M),h[Q].add(M))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let R=0,j=A.length;R<j;++R){const Q=A[R],se=Q.start,B=Q.count;for(let W=se,q=se+B;W<q;W+=3)y(n[W+0],n[W+1],n[W+2])}const I=new F,D=new F,L=new F,J=new F;function S(R){L.fromArray(r,R*3),J.copy(L);const j=u[R];I.copy(j),I.sub(L.multiplyScalar(L.dot(j))).normalize(),D.crossVectors(J,j);const se=D.dot(h[R])<0?-1:1;l[R*4]=I.x,l[R*4+1]=I.y,l[R*4+2]=I.z,l[R*4+3]=se}for(let R=0,j=A.length;R<j;++R){const Q=A[R],se=Q.start,B=Q.count;for(let W=se,q=se+B;W<q;W+=3)S(n[W+0]),S(n[W+1]),S(n[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,_=n.count;f<_;f++)n.setXYZ(f,0,0,0);const s=new F,r=new F,o=new F,a=new F,l=new F,u=new F,h=new F,d=new F;if(e)for(let f=0,_=e.count;f<_;f+=3){const v=e.getX(f+0),b=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,b),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,m),a.add(h),l.add(h),u.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,_=t.count;f<_;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const u=a.array,h=a.itemSize,d=a.normalized,f=new u.constructor(l.length*h);let _=0,v=0;for(let b=0,m=l.length;b<m;b++){a.isInterleavedBufferAttribute?_=l[b]*a.data.stride+a.offset:_=l[b]*h;for(let p=0;p<h;p++)f[v++]=u[_++]}return new hn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ci,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=e(l,n);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let h=0,d=u.length;h<d;h++){const f=u[h],_=e(f,n);l.push(_)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,f=u.length;d<f;d++){const _=u[d];h.push(_.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(t))}const r=e.morphAttributes;for(const u in r){const h=[],d=r[u];for(let f=0,_=d.length;f<_;f++)h.push(d[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mf=new mt,ms=new Do,ga=new li,Af=new F,ur=new F,hr=new F,dr=new F,bc=new F,_a=new F,va=new Ke,Ea=new Ke,ba=new Ke,wf=new F,Cf=new F,Rf=new F,ya=new F,xa=new F;class Nn extends Bt{constructor(e=new ci,t=new Ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){_a.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const h=a[l],d=r[l];h!==0&&(bc.fromBufferAttribute(d,e),o?_a.addScaledVector(bc,h):_a.addScaledVector(bc.sub(t),h))}t.add(_a)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(r),ms.copy(e.ray).recast(e.near),!(ga.containsPoint(ms.origin)===!1&&(ms.intersectSphere(ga,Af)===null||ms.origin.distanceToSquared(Af)>(e.far-e.near)**2))&&(Mf.copy(r).invert(),ms.copy(e.ray).applyMatrix4(Mf),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,_=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,b=f.length;v<b;v++){const m=f[v],p=o[m.materialIndex],M=Math.max(m.start,_.start),y=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let A=M,I=y;A<I;A+=3){const D=a.getX(A),L=a.getX(A+1),J=a.getX(A+2);s=Ta(this,p,e,n,u,h,d,D,L,J),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,_.start),b=Math.min(a.count,_.start+_.count);for(let m=v,p=b;m<p;m+=3){const M=a.getX(m),y=a.getX(m+1),A=a.getX(m+2);s=Ta(this,o,e,n,u,h,d,M,y,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,b=f.length;v<b;v++){const m=f[v],p=o[m.materialIndex],M=Math.max(m.start,_.start),y=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let A=M,I=y;A<I;A+=3){const D=A,L=A+1,J=A+2;s=Ta(this,p,e,n,u,h,d,D,L,J),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,_.start),b=Math.min(l.count,_.start+_.count);for(let m=v,p=b;m<p;m+=3){const M=m,y=m+1,A=m+2;s=Ta(this,o,e,n,u,h,d,M,y,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function WT(i,e,t,n,s,r,o,a){let l;if(e.side===gn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ci,a),l===null)return null;xa.copy(a),xa.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(xa);return u<t.near||u>t.far?null:{distance:u,point:xa.clone(),object:i}}function Ta(i,e,t,n,s,r,o,a,l,u){i.getVertexPosition(a,ur),i.getVertexPosition(l,hr),i.getVertexPosition(u,dr);const h=WT(i,e,t,n,ur,hr,dr,ya);if(h){s&&(va.fromBufferAttribute(s,a),Ea.fromBufferAttribute(s,l),ba.fromBufferAttribute(s,u),h.uv=$n.getInterpolation(ya,ur,hr,dr,va,Ea,ba,new Ke)),r&&(va.fromBufferAttribute(r,a),Ea.fromBufferAttribute(r,l),ba.fromBufferAttribute(r,u),h.uv1=$n.getInterpolation(ya,ur,hr,dr,va,Ea,ba,new Ke),h.uv2=h.uv1),o&&(wf.fromBufferAttribute(o,a),Cf.fromBufferAttribute(o,l),Rf.fromBufferAttribute(o,u),h.normal=$n.getInterpolation(ya,ur,hr,dr,wf,Cf,Rf,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new F,materialIndex:0};$n.getNormal(ur,hr,dr,d.normal),h.face=d}return h}class Io extends ci{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],h=[],d=[];let f=0,_=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,s,o,2),v("x","z","y",1,-1,e,n,-t,s,o,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ai(u,3)),this.setAttribute("normal",new Ai(h,3)),this.setAttribute("uv",new Ai(d,2));function v(b,m,p,M,y,A,I,D,L,J,S){const R=A/L,j=I/J,Q=A/2,se=I/2,B=D/2,W=L+1,q=J+1;let ee=0,te=0;const ne=new F;for(let ie=0;ie<q;ie++){const O=ie*j-se;for(let pe=0;pe<W;pe++){const K=pe*R-Q;ne[b]=K*M,ne[m]=O*y,ne[p]=B,u.push(ne.x,ne.y,ne.z),ne[b]=0,ne[m]=0,ne[p]=D>0?1:-1,h.push(ne.x,ne.y,ne.z),d.push(pe/L),d.push(1-ie/J),ee+=1}}for(let ie=0;ie<J;ie++)for(let O=0;O<L;O++){const pe=f+O+W*ie,K=f+O+W*(ie+1),Y=f+(O+1)+W*(ie+1),oe=f+(O+1)+W*ie;l.push(pe,K,oe),l.push(K,Y,oe),te+=6}a.addGroup(_,te,S),_+=te,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function kr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function an(i){const e={};for(let t=0;t<i.length;t++){const n=kr(i[t]);for(const s in n)e[s]=n[s]}return e}function $T(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function tg(i){return i.getRenderTarget()===null?i.outputColorSpace:bt.workingColorSpace}const XT={clone:kr,merge:an};var jT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Is extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jT,this.fragmentShader=qT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=$T(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ng extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ln extends ng{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/u,s*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fr=-90,pr=1;class YT extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(fr,pr,e,t);s.layers=this.layers,this.add(s);const r=new ln(fr,pr,e,t);r.layers=this.layers,this.add(r);const o=new ln(fr,pr,e,t);o.layers=this.layers,this.add(o);const a=new ln(fr,pr,e,t);a.layers=this.layers,this.add(a);const l=new ln(fr,pr,e,t);l.layers=this.layers,this.add(l);const u=new ln(fr,pr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const u of t)this.remove(u);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,u),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,f,_),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ig extends Qt{constructor(e,t,n,s,r,o,a,l,u,h){e=e!==void 0?e:[],t=t!==void 0?t:Ir,super(e,t,n,s,r,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KT extends Ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(bo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Cs?zt:In),this.texture=new ig(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Io(5,5,5),r=new Is({name:"CubemapFromEquirect",uniforms:kr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:qi});r.uniforms.tEquirect.value=t;const o=new Nn(s,r),a=t.minFilter;return t.minFilter===Ps&&(t.minFilter=pn),new YT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const yc=new F,ZT=new F,JT=new pt;class Gi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=yc.subVectors(n,t).cross(ZT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(yc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||JT.getNormalMatrix(e),s=this.coplanarPoint(yc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new li,Sa=new F;class xu{constructor(e=new Gi,t=new Gi,n=new Gi,s=new Gi,r=new Gi,o=new Gi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ti){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],u=s[4],h=s[5],d=s[6],f=s[7],_=s[8],v=s[9],b=s[10],m=s[11],p=s[12],M=s[13],y=s[14],A=s[15];if(n[0].setComponents(l-r,f-u,m-_,A-p).normalize(),n[1].setComponents(l+r,f+u,m+_,A+p).normalize(),n[2].setComponents(l+o,f+h,m+v,A+M).normalize(),n[3].setComponents(l-o,f-h,m-v,A-M).normalize(),n[4].setComponents(l-a,f-d,m-b,A-y).normalize(),t===Ti)n[5].setComponents(l+a,f+d,m+b,A+y).normalize();else if(t===qa)n[5].setComponents(a,d,b,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Sa.x=s.normal.x>0?e.max.x:e.min.x,Sa.y=s.normal.y>0?e.max.y:e.min.y,Sa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sg(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function QT(i,e){const t=e.isWebGL2,n=new WeakMap;function s(u,h){const d=u.array,f=u.usage,_=d.byteLength,v=i.createBuffer();i.bindBuffer(h,v),i.bufferData(h,d,f),u.onUploadCallback();let b;if(d instanceof Float32Array)b=i.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)b=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)b=i.SHORT;else if(d instanceof Uint32Array)b=i.UNSIGNED_INT;else if(d instanceof Int32Array)b=i.INT;else if(d instanceof Int8Array)b=i.BYTE;else if(d instanceof Uint8Array)b=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)b=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:b,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:_}}function r(u,h,d){const f=h.array,_=h._updateRange,v=h.updateRanges;if(i.bindBuffer(d,u),_.count===-1&&v.length===0&&i.bufferSubData(d,0,f),v.length!==0){for(let b=0,m=v.length;b<m;b++){const p=v[b];t?i.bufferSubData(d,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(d,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}_.count!==-1&&(t?i.bufferSubData(d,_.offset*f.BYTES_PER_ELEMENT,f,_.offset,_.count):i.bufferSubData(d,_.offset*f.BYTES_PER_ELEMENT,f.subarray(_.offset,_.offset+_.count)),_.count=-1),h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(i.deleteBuffer(h.buffer),n.delete(u))}function l(u,h){if(u.isGLBufferAttribute){const f=n.get(u);(!f||f.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);if(d===void 0)n.set(u,s(u,h));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,u,h),d.version=u.version}}return{get:o,remove:a,update:l}}class Tu extends ci{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),u=a+1,h=l+1,d=e/a,f=t/l,_=[],v=[],b=[],m=[];for(let p=0;p<h;p++){const M=p*f-o;for(let y=0;y<u;y++){const A=y*d-r;v.push(A,-M,0),b.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const y=M+u*p,A=M+u*(p+1),I=M+1+u*(p+1),D=M+1+u*p;_.push(y,A,D),_.push(A,I,D)}this.setIndex(_),this.setAttribute("position",new Ai(v,3)),this.setAttribute("normal",new Ai(b,3)),this.setAttribute("uv",new Ai(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tu(e.width,e.height,e.widthSegments,e.heightSegments)}}var eS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,uS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ES=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,TS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,SS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,MS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,AS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LS="gl_FragColor = linearToOutputTexel( gl_FragColor );",PS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,DS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,IS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,OS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,US=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,FS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,GS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$S=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,oM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,aM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_M=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,EM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,TM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,RM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,UM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,FM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,BM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,VM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,GM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$M=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,YM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,JM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,aA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_A=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,SA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,CA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,PA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:eS,alphahash_pars_fragment:tS,alphamap_fragment:nS,alphamap_pars_fragment:iS,alphatest_fragment:sS,alphatest_pars_fragment:rS,aomap_fragment:oS,aomap_pars_fragment:aS,batching_pars_vertex:lS,batching_vertex:cS,begin_vertex:uS,beginnormal_vertex:hS,bsdfs:dS,iridescence_fragment:fS,bumpmap_pars_fragment:pS,clipping_planes_fragment:mS,clipping_planes_pars_fragment:gS,clipping_planes_pars_vertex:_S,clipping_planes_vertex:vS,color_fragment:ES,color_pars_fragment:bS,color_pars_vertex:yS,color_vertex:xS,common:TS,cube_uv_reflection_fragment:SS,defaultnormal_vertex:MS,displacementmap_pars_vertex:AS,displacementmap_vertex:wS,emissivemap_fragment:CS,emissivemap_pars_fragment:RS,colorspace_fragment:LS,colorspace_pars_fragment:PS,envmap_fragment:DS,envmap_common_pars_fragment:IS,envmap_pars_fragment:NS,envmap_pars_vertex:OS,envmap_physical_pars_fragment:jS,envmap_vertex:US,fog_vertex:FS,fog_pars_vertex:BS,fog_fragment:kS,fog_pars_fragment:HS,gradientmap_pars_fragment:VS,lightmap_fragment:zS,lightmap_pars_fragment:GS,lights_lambert_fragment:WS,lights_lambert_pars_fragment:$S,lights_pars_begin:XS,lights_toon_fragment:qS,lights_toon_pars_fragment:YS,lights_phong_fragment:KS,lights_phong_pars_fragment:ZS,lights_physical_fragment:JS,lights_physical_pars_fragment:QS,lights_fragment_begin:eM,lights_fragment_maps:tM,lights_fragment_end:nM,logdepthbuf_fragment:iM,logdepthbuf_pars_fragment:sM,logdepthbuf_pars_vertex:rM,logdepthbuf_vertex:oM,map_fragment:aM,map_pars_fragment:lM,map_particle_fragment:cM,map_particle_pars_fragment:uM,metalnessmap_fragment:hM,metalnessmap_pars_fragment:dM,morphcolor_vertex:fM,morphnormal_vertex:pM,morphtarget_pars_vertex:mM,morphtarget_vertex:gM,normal_fragment_begin:_M,normal_fragment_maps:vM,normal_pars_fragment:EM,normal_pars_vertex:bM,normal_vertex:yM,normalmap_pars_fragment:xM,clearcoat_normal_fragment_begin:TM,clearcoat_normal_fragment_maps:SM,clearcoat_pars_fragment:MM,iridescence_pars_fragment:AM,opaque_fragment:wM,packing:CM,premultiplied_alpha_fragment:RM,project_vertex:LM,dithering_fragment:PM,dithering_pars_fragment:DM,roughnessmap_fragment:IM,roughnessmap_pars_fragment:NM,shadowmap_pars_fragment:OM,shadowmap_pars_vertex:UM,shadowmap_vertex:FM,shadowmask_pars_fragment:BM,skinbase_vertex:kM,skinning_pars_vertex:HM,skinning_vertex:VM,skinnormal_vertex:zM,specularmap_fragment:GM,specularmap_pars_fragment:WM,tonemapping_fragment:$M,tonemapping_pars_fragment:XM,transmission_fragment:jM,transmission_pars_fragment:qM,uv_pars_fragment:YM,uv_pars_vertex:KM,uv_vertex:ZM,worldpos_vertex:JM,background_vert:QM,background_frag:eA,backgroundCube_vert:tA,backgroundCube_frag:nA,cube_vert:iA,cube_frag:sA,depth_vert:rA,depth_frag:oA,distanceRGBA_vert:aA,distanceRGBA_frag:lA,equirect_vert:cA,equirect_frag:uA,linedashed_vert:hA,linedashed_frag:dA,meshbasic_vert:fA,meshbasic_frag:pA,meshlambert_vert:mA,meshlambert_frag:gA,meshmatcap_vert:_A,meshmatcap_frag:vA,meshnormal_vert:EA,meshnormal_frag:bA,meshphong_vert:yA,meshphong_frag:xA,meshphysical_vert:TA,meshphysical_frag:SA,meshtoon_vert:MA,meshtoon_frag:AA,points_vert:wA,points_frag:CA,shadow_vert:RA,shadow_frag:LA,sprite_vert:PA,sprite_frag:DA},Te={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Qn={basic:{uniforms:an([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:an([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new st(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:an([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:an([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:an([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new st(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:an([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:an([Te.points,Te.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:an([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:an([Te.common,Te.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:an([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:an([Te.sprite,Te.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:an([Te.common,Te.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:an([Te.lights,Te.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Qn.physical={uniforms:an([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Ma={r:0,b:0,g:0};function IA(i,e,t,n,s,r,o){const a=new st(0);let l=r===!0?0:1,u,h,d=null,f=0,_=null;function v(m,p){let M=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?b(a,l):y&&y.isColor&&(b(y,1),M=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===nl)?(h===void 0&&(h=new Nn(new Io(1,1,1),new Is({name:"BackgroundCubeMaterial",uniforms:kr(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=bt.getTransfer(y.colorSpace)!==Ot,(d!==y||f!==y.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,f=y.version,_=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Nn(new Tu(2,2),new Is({name:"BackgroundMaterial",uniforms:kr(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=bt.getTransfer(y.colorSpace)!==Ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||_!==i.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,_=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function b(m,p){m.getRGB(Ma,tg(i)),n.buffers.color.setClear(Ma.r,Ma.g,Ma.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,b(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,b(a,l)},render:v}}function NA(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let u=l,h=!1;function d(B,W,q,ee,te){let ne=!1;if(o){const ie=b(ee,q,W);u!==ie&&(u=ie,_(u.object)),ne=p(B,ee,q,te),ne&&M(B,ee,q,te)}else{const ie=W.wireframe===!0;(u.geometry!==ee.id||u.program!==q.id||u.wireframe!==ie)&&(u.geometry=ee.id,u.program=q.id,u.wireframe=ie,ne=!0)}te!==null&&t.update(te,i.ELEMENT_ARRAY_BUFFER),(ne||h)&&(h=!1,J(B,W,q,ee),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function _(B){return n.isWebGL2?i.bindVertexArray(B):r.bindVertexArrayOES(B)}function v(B){return n.isWebGL2?i.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function b(B,W,q){const ee=q.wireframe===!0;let te=a[B.id];te===void 0&&(te={},a[B.id]=te);let ne=te[W.id];ne===void 0&&(ne={},te[W.id]=ne);let ie=ne[ee];return ie===void 0&&(ie=m(f()),ne[ee]=ie),ie}function m(B){const W=[],q=[],ee=[];for(let te=0;te<s;te++)W[te]=0,q[te]=0,ee[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:q,attributeDivisors:ee,object:B,attributes:{},index:null}}function p(B,W,q,ee){const te=u.attributes,ne=W.attributes;let ie=0;const O=q.getAttributes();for(const pe in O)if(O[pe].location>=0){const Y=te[pe];let oe=ne[pe];if(oe===void 0&&(pe==="instanceMatrix"&&B.instanceMatrix&&(oe=B.instanceMatrix),pe==="instanceColor"&&B.instanceColor&&(oe=B.instanceColor)),Y===void 0||Y.attribute!==oe||oe&&Y.data!==oe.data)return!0;ie++}return u.attributesNum!==ie||u.index!==ee}function M(B,W,q,ee){const te={},ne=W.attributes;let ie=0;const O=q.getAttributes();for(const pe in O)if(O[pe].location>=0){let Y=ne[pe];Y===void 0&&(pe==="instanceMatrix"&&B.instanceMatrix&&(Y=B.instanceMatrix),pe==="instanceColor"&&B.instanceColor&&(Y=B.instanceColor));const oe={};oe.attribute=Y,Y&&Y.data&&(oe.data=Y.data),te[pe]=oe,ie++}u.attributes=te,u.attributesNum=ie,u.index=ee}function y(){const B=u.newAttributes;for(let W=0,q=B.length;W<q;W++)B[W]=0}function A(B){I(B,0)}function I(B,W){const q=u.newAttributes,ee=u.enabledAttributes,te=u.attributeDivisors;q[B]=1,ee[B]===0&&(i.enableVertexAttribArray(B),ee[B]=1),te[B]!==W&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,W),te[B]=W)}function D(){const B=u.newAttributes,W=u.enabledAttributes;for(let q=0,ee=W.length;q<ee;q++)W[q]!==B[q]&&(i.disableVertexAttribArray(q),W[q]=0)}function L(B,W,q,ee,te,ne,ie){ie===!0?i.vertexAttribIPointer(B,W,q,te,ne):i.vertexAttribPointer(B,W,q,ee,te,ne)}function J(B,W,q,ee){if(n.isWebGL2===!1&&(B.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const te=ee.attributes,ne=q.getAttributes(),ie=W.defaultAttributeValues;for(const O in ne){const pe=ne[O];if(pe.location>=0){let K=te[O];if(K===void 0&&(O==="instanceMatrix"&&B.instanceMatrix&&(K=B.instanceMatrix),O==="instanceColor"&&B.instanceColor&&(K=B.instanceColor)),K!==void 0){const Y=K.normalized,oe=K.itemSize,me=t.get(K);if(me===void 0)continue;const be=me.buffer,Be=me.type,le=me.bytesPerElement,Oe=n.isWebGL2===!0&&(Be===i.INT||Be===i.UNSIGNED_INT||K.gpuType===Om);if(K.isInterleavedBufferAttribute){const nt=K.data,X=nt.stride,kt=K.offset;if(nt.isInstancedInterleavedBuffer){for(let De=0;De<pe.locationSize;De++)I(pe.location+De,nt.meshPerAttribute);B.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let De=0;De<pe.locationSize;De++)A(pe.location+De);i.bindBuffer(i.ARRAY_BUFFER,be);for(let De=0;De<pe.locationSize;De++)L(pe.location+De,oe/pe.locationSize,Be,Y,X*le,(kt+oe/pe.locationSize*De)*le,Oe)}else{if(K.isInstancedBufferAttribute){for(let nt=0;nt<pe.locationSize;nt++)I(pe.location+nt,K.meshPerAttribute);B.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let nt=0;nt<pe.locationSize;nt++)A(pe.location+nt);i.bindBuffer(i.ARRAY_BUFFER,be);for(let nt=0;nt<pe.locationSize;nt++)L(pe.location+nt,oe/pe.locationSize,Be,Y,oe*le,oe/pe.locationSize*nt*le,Oe)}}else if(ie!==void 0){const Y=ie[O];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(pe.location,Y);break;case 3:i.vertexAttrib3fv(pe.location,Y);break;case 4:i.vertexAttrib4fv(pe.location,Y);break;default:i.vertexAttrib1fv(pe.location,Y)}}}}D()}function S(){Q();for(const B in a){const W=a[B];for(const q in W){const ee=W[q];for(const te in ee)v(ee[te].object),delete ee[te];delete W[q]}delete a[B]}}function R(B){if(a[B.id]===void 0)return;const W=a[B.id];for(const q in W){const ee=W[q];for(const te in ee)v(ee[te].object),delete ee[te];delete W[q]}delete a[B.id]}function j(B){for(const W in a){const q=a[W];if(q[B.id]===void 0)continue;const ee=q[B.id];for(const te in ee)v(ee[te].object),delete ee[te];delete q[B.id]}}function Q(){se(),h=!0,u!==l&&(u=l,_(u.object))}function se(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:se,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:j,initAttributes:y,enableAttribute:A,disableUnusedAttributes:D}}function OA(i,e,t,n){const s=n.isWebGL2;let r;function o(h){r=h}function a(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,f){if(f===0)return;let _,v;if(s)_=i,v="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[v](r,h,d,f),t.update(d,r,f)}function u(h,d,f){if(f===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<f;v++)this.render(h[v],d[v]);else{_.multiDrawArraysWEBGL(r,h,0,d,0,f);let v=0;for(let b=0;b<f;b++)v+=d[b];t.update(v,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function UA(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),b=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,A=o||e.has("OES_texture_float"),I=y&&A,D=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:v,maxAttributes:b,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:A,floatVertexTextures:I,maxSamples:D}}function FA(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Gi,a=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const _=d.length!==0||f||n!==0||s;return s=f,n=d.length,_},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,_){const v=d.clippingPlanes,b=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||v===null||v.length===0||r&&!m)r?h(null):u();else{const M=r?0:n,y=M*4;let A=p.clippingState||null;l.value=A,A=h(v,f,y,_);for(let I=0;I!==y;++I)A[I]=t[I];p.clippingState=A,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,_,v){const b=d!==null?d.length:0;let m=null;if(b!==0){if(m=l.value,v!==!0||m===null){const p=_+b*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,A=_;y!==b;++y,A+=4)o.copy(d[y]).applyMatrix4(M,a),o.normal.toArray(m,A),m[A+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function BA(i){let e=new WeakMap;function t(o,a){return a===Xc?o.mapping=Ir:a===jc&&(o.mapping=Nr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xc||a===jc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new KT(l.height/2);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",s),t(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Su extends ng{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yr=4,Lf=[.125,.215,.35,.446,.526,.582],bs=20,xc=new Su,Pf=new st;let Tc=null,Sc=0,Mc=0;const vs=(1+Math.sqrt(5))/2,mr=1/vs,Df=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,vs,mr),new F(0,vs,-mr),new F(mr,0,vs),new F(-mr,0,vs),new F(vs,mr,0),new F(-vs,mr,0)];class If{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Tc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tc,Sc,Mc),e.scissorTest=!1,Aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ir||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:To,format:Dn,colorSpace:Zt,depthBuffer:!1},s=Nf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nf(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kA(r)),this._blurMaterial=HA(r,e,t)}return s}_compileMaterial(e){const t=new Nn(this._lodPlanes[0],e);this._renderer.compile(t,xc)}_sceneToCubeUV(e,t,n,s){const a=new ln(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Pf),h.toneMapping=Yi,h.autoClear=!1;const _=new Ts({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),v=new Nn(new Io,_);let b=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,b=!0):(_.color.copy(Pf),b=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const y=this._cubeSize;Aa(s,M*y,p>2?y:0,y,y),h.setRenderTarget(s),b&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ir||e.mapping===Nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Nn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Aa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,xc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Df[(s-1)%Df.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Nn(this._lodPlanes[s],u),f=u.uniforms,_=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*_):2*Math.PI/(2*bs-1),b=r/v,m=isFinite(r)?1+Math.floor(h*b):bs;m>bs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bs}`);const p=[];let M=0;for(let L=0;L<bs;++L){const J=L/b,S=Math.exp(-J*J/2);p.push(S),L===0?M+=S:L<m&&(M+=2*S)}for(let L=0;L<p.length;L++)p[L]=p[L]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-n;const A=this._sizeLods[s],I=3*A*(s>y-yr?s-y+yr:0),D=4*(this._cubeSize-A);Aa(t,I,D,3*A,2*A),l.setRenderTarget(t),l.render(d,xc)}}function kA(i){const e=[],t=[],n=[];let s=i;const r=i-yr+1+Lf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-yr?l=Lf[o-i+yr-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],_=6,v=6,b=3,m=2,p=1,M=new Float32Array(b*v*_),y=new Float32Array(m*v*_),A=new Float32Array(p*v*_);for(let D=0;D<_;D++){const L=D%3*2/3-1,J=D>2?0:-1,S=[L,J,0,L+2/3,J,0,L+2/3,J+1,0,L,J,0,L+2/3,J+1,0,L,J+1,0];M.set(S,b*v*D),y.set(f,m*v*D);const R=[D,D,D,D,D,D];A.set(R,p*v*D)}const I=new ci;I.setAttribute("position",new hn(M,b)),I.setAttribute("uv",new hn(y,m)),I.setAttribute("faceIndex",new hn(A,p)),e.push(I),s>yr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Nf(i,e,t){const n=new Ds(i,e,t);return n.texture.mapping=nl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Aa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function HA(i,e,t){const n=new Float32Array(bs),s=new F(0,1,0);return new Is({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Of(){return new Is({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Uf(){return new Is({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function VA(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===Xc||l===jc,h=l===Ir||l===Nr;if(u||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new If(i)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new If(i));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function zA(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function GA(i,e,t,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const b=f.morphAttributes[v];for(let m=0,p=b.length;m<p;m++)e.remove(b[m])}f.removeEventListener("dispose",o),delete s[f.id];const _=r.get(f);_&&(e.remove(_),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const _=d.morphAttributes;for(const v in _){const b=_[v];for(let m=0,p=b.length;m<p;m++)e.update(b[m],i.ARRAY_BUFFER)}}function u(d){const f=[],_=d.index,v=d.attributes.position;let b=0;if(_!==null){const M=_.array;b=_.version;for(let y=0,A=M.length;y<A;y+=3){const I=M[y+0],D=M[y+1],L=M[y+2];f.push(I,D,D,L,L,I)}}else if(v!==void 0){const M=v.array;b=v.version;for(let y=0,A=M.length/3-1;y<A;y+=3){const I=y+0,D=y+1,L=y+2;f.push(I,D,D,L,L,I)}}else return;const m=new(jm(f)?eg:Qm)(f,1);m.version=b;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const f=r.get(d);if(f){const _=d.index;_!==null&&f.version<_.version&&u(d)}else u(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function WA(i,e,t,n){const s=n.isWebGL2;let r;function o(_){r=_}let a,l;function u(_){a=_.type,l=_.bytesPerElement}function h(_,v){i.drawElements(r,v,a,_*l),t.update(v,r,1)}function d(_,v,b){if(b===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,v,a,_*l,b),t.update(v,r,b)}function f(_,v,b){if(b===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<b;p++)this.render(_[p]/l,v[p]);else{m.multiDrawElementsWEBGL(r,v,0,a,_,0,b);let p=0;for(let M=0;M<b;M++)p+=v[M];t.update(p,r,1)}}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function $A(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function XA(i,e){return i[0]-e[0]}function jA(i,e){return Math.abs(e[1])-Math.abs(i[1])}function qA(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new Rt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,h,d){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,b=v!==void 0?v.length:0;let m=r.get(h);if(m===void 0||m.count!==b){let W=function(){se.dispose(),r.delete(h),h.removeEventListener("dispose",W)};var _=W;m!==void 0&&m.texture.dispose();const y=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,I=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],J=h.morphAttributes.color||[];let S=0;y===!0&&(S=1),A===!0&&(S=2),I===!0&&(S=3);let R=h.attributes.position.count*S,j=1;R>e.maxTextureSize&&(j=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const Q=new Float32Array(R*j*4*b),se=new Km(Q,R,j,b);se.type=xi,se.needsUpdate=!0;const B=S*4;for(let q=0;q<b;q++){const ee=D[q],te=L[q],ne=J[q],ie=R*j*4*q;for(let O=0;O<ee.count;O++){const pe=O*B;y===!0&&(o.fromBufferAttribute(ee,O),Q[ie+pe+0]=o.x,Q[ie+pe+1]=o.y,Q[ie+pe+2]=o.z,Q[ie+pe+3]=0),A===!0&&(o.fromBufferAttribute(te,O),Q[ie+pe+4]=o.x,Q[ie+pe+5]=o.y,Q[ie+pe+6]=o.z,Q[ie+pe+7]=0),I===!0&&(o.fromBufferAttribute(ne,O),Q[ie+pe+8]=o.x,Q[ie+pe+9]=o.y,Q[ie+pe+10]=o.z,Q[ie+pe+11]=ne.itemSize===4?o.w:1)}}m={count:b,texture:se,size:new Ke(R,j)},r.set(h,m),h.addEventListener("dispose",W)}let p=0;for(let y=0;y<f.length;y++)p+=f[y];const M=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const v=f===void 0?0:f.length;let b=n[h.id];if(b===void 0||b.length!==v){b=[];for(let A=0;A<v;A++)b[A]=[A,0];n[h.id]=b}for(let A=0;A<v;A++){const I=b[A];I[0]=A,I[1]=f[A]}b.sort(jA);for(let A=0;A<8;A++)A<v&&b[A][1]?(a[A][0]=b[A][0],a[A][1]=b[A][1]):(a[A][0]=Number.MAX_SAFE_INTEGER,a[A][1]=0);a.sort(XA);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let M=0;for(let A=0;A<8;A++){const I=a[A],D=I[0],L=I[1];D!==Number.MAX_SAFE_INTEGER&&L?(m&&h.getAttribute("morphTarget"+A)!==m[D]&&h.setAttribute("morphTarget"+A,m[D]),p&&h.getAttribute("morphNormal"+A)!==p[D]&&h.setAttribute("morphNormal"+A,p[D]),s[A]=L,M+=L):(m&&h.hasAttribute("morphTarget"+A)===!0&&h.deleteAttribute("morphTarget"+A),p&&h.hasAttribute("morphNormal"+A)===!0&&h.deleteAttribute("morphNormal"+A),s[A]=0)}const y=h.morphTargetsRelative?1:1-M;d.getUniforms().setValue(i,"morphTargetBaseInfluence",y),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function YA(i,e,t,n){let s=new WeakMap;function r(l){const u=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function o(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}class rg extends Qt{constructor(e,t,n,s,r,o,a,l,u,h){if(h=h!==void 0?h:ws,h!==ws&&h!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ws&&(n=Xi),n===void 0&&h===Ur&&(n=As),super(null,s,r,o,a,l,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const og=new Qt,ag=new rg(1,1);ag.compareFunction=$m;const lg=new Km,cg=new IT,ug=new ig,Ff=[],Bf=[],kf=new Float32Array(16),Hf=new Float32Array(9),Vf=new Float32Array(4);function Xr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Ff[s];if(r===void 0&&(r=new Float32Array(s),Ff[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function rl(i,e){let t=Bf[e];t===void 0&&(t=new Int32Array(e),Bf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function KA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ZA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),jt(t,e)}}function JA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),jt(t,e)}}function QA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),jt(t,e)}}function ew(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,n))return;Vf.set(n),i.uniformMatrix2fv(this.addr,!1,Vf),jt(t,n)}}function tw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,n))return;Hf.set(n),i.uniformMatrix3fv(this.addr,!1,Hf),jt(t,n)}}function nw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,n))return;kf.set(n),i.uniformMatrix4fv(this.addr,!1,kf),jt(t,n)}}function iw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),jt(t,e)}}function rw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),jt(t,e)}}function ow(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),jt(t,e)}}function aw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),jt(t,e)}}function cw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),jt(t,e)}}function uw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),jt(t,e)}}function hw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?ag:og;t.setTexture2D(e||r,s)}function dw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||cg,s)}function fw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ug,s)}function pw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||lg,s)}function mw(i){switch(i){case 5126:return KA;case 35664:return ZA;case 35665:return JA;case 35666:return QA;case 35674:return ew;case 35675:return tw;case 35676:return nw;case 5124:case 35670:return iw;case 35667:case 35671:return sw;case 35668:case 35672:return rw;case 35669:case 35673:return ow;case 5125:return aw;case 36294:return lw;case 36295:return cw;case 36296:return uw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return dw;case 35680:case 36300:case 36308:case 36293:return fw;case 36289:case 36303:case 36311:case 36292:return pw}}function gw(i,e){i.uniform1fv(this.addr,e)}function _w(i,e){const t=Xr(e,this.size,2);i.uniform2fv(this.addr,t)}function vw(i,e){const t=Xr(e,this.size,3);i.uniform3fv(this.addr,t)}function Ew(i,e){const t=Xr(e,this.size,4);i.uniform4fv(this.addr,t)}function bw(i,e){const t=Xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function yw(i,e){const t=Xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xw(i,e){const t=Xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Tw(i,e){i.uniform1iv(this.addr,e)}function Sw(i,e){i.uniform2iv(this.addr,e)}function Mw(i,e){i.uniform3iv(this.addr,e)}function Aw(i,e){i.uniform4iv(this.addr,e)}function ww(i,e){i.uniform1uiv(this.addr,e)}function Cw(i,e){i.uniform2uiv(this.addr,e)}function Rw(i,e){i.uniform3uiv(this.addr,e)}function Lw(i,e){i.uniform4uiv(this.addr,e)}function Pw(i,e,t){const n=this.cache,s=e.length,r=rl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||og,r[o])}function Dw(i,e,t){const n=this.cache,s=e.length,r=rl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||cg,r[o])}function Iw(i,e,t){const n=this.cache,s=e.length,r=rl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ug,r[o])}function Nw(i,e,t){const n=this.cache,s=e.length,r=rl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||lg,r[o])}function Ow(i){switch(i){case 5126:return gw;case 35664:return _w;case 35665:return vw;case 35666:return Ew;case 35674:return bw;case 35675:return yw;case 35676:return xw;case 5124:case 35670:return Tw;case 35667:case 35671:return Sw;case 35668:case 35672:return Mw;case 35669:case 35673:return Aw;case 5125:return ww;case 36294:return Cw;case 36295:return Rw;case 36296:return Lw;case 35678:case 36198:case 36298:case 36306:case 35682:return Pw;case 35679:case 36299:case 36307:return Dw;case 35680:case 36300:case 36308:case 36293:return Iw;case 36289:case 36303:case 36311:case 36292:return Nw}}class Uw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mw(t.type)}}class Fw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ow(t.type)}}class Bw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ac=/(\w+)(\])?(\[|\.)?/g;function zf(i,e){i.seq.push(e),i.map[e.id]=e}function kw(i,e,t){const n=i.name,s=n.length;for(Ac.lastIndex=0;;){const r=Ac.exec(n),o=Ac.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){zf(t,u===void 0?new Uw(a,i,e):new Fw(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Bw(a),zf(t,d)),t=d}}}class Ba{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);kw(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Gf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Hw=37297;let Vw=0;function zw(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Gw(i){const e=bt.getPrimaries(bt.workingColorSpace),t=bt.getPrimaries(i);let n;switch(e===t?n="":e===ja&&t===Xa?n="LinearDisplayP3ToLinearSRGB":e===Xa&&t===ja&&(n="LinearSRGBToLinearDisplayP3"),i){case Zt:case il:return[n,"LinearTransferOETF"];case zt:case bu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Wf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+zw(i.getShaderSource(e),o)}else return s}function Ww(i,e){const t=Gw(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function $w(i,e){let t;switch(e){case V0:t="Linear";break;case z0:t="Reinhard";break;case G0:t="OptimizedCineon";break;case W0:t="ACESFilmic";break;case X0:t="AgX";break;case $0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Xw(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xr).join(`
`)}function jw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xr).join(`
`)}function qw(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yw(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function xr(i){return i!==""}function $f(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(i){return i.replace(Kw,Jw)}const Zw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jw(i,e){let t=lt[e];if(t===void 0){const n=Zw.get(e);if(n!==void 0)t=lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qc(t)}const Qw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jf(i){return i.replace(Qw,eC)}function eC(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qf(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tC(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===m0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function nC(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ir:case Nr:e="ENVMAP_TYPE_CUBE";break;case nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iC(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Nr:e="ENVMAP_MODE_REFRACTION";break}return e}function sC(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dm:e="ENVMAP_BLENDING_MULTIPLY";break;case k0:e="ENVMAP_BLENDING_MIX";break;case H0:e="ENVMAP_BLENDING_ADD";break}return e}function rC(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function oC(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=tC(t),u=nC(t),h=iC(t),d=sC(t),f=rC(t),_=t.isWebGL2?"":Xw(t),v=jw(t),b=qw(r),m=s.createProgram();let p,M,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(xr).join(`
`),p.length>0&&(p+=`
`),M=[_,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(xr).join(`
`),M.length>0&&(M+=`
`)):(p=[qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),M=[_,qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?lt.tonemapping_pars_fragment:"",t.toneMapping!==Yi?$w("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,Ww("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),o=Qc(o),o=$f(o,t),o=Xf(o,t),a=Qc(a),a=$f(a,t),a=Xf(a,t),o=jf(o),a=jf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===df?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const A=y+p+o,I=y+M+a,D=Gf(s,s.VERTEX_SHADER,A),L=Gf(s,s.FRAGMENT_SHADER,I);s.attachShader(m,D),s.attachShader(m,L),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function J(Q){if(i.debug.checkShaderErrors){const se=s.getProgramInfoLog(m).trim(),B=s.getShaderInfoLog(D).trim(),W=s.getShaderInfoLog(L).trim();let q=!0,ee=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,D,L);else{const te=Wf(s,D,"vertex"),ne=Wf(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+se+`
`+te+`
`+ne)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(B===""||W==="")&&(ee=!1);ee&&(Q.diagnostics={runnable:q,programLog:se,vertexShader:{log:B,prefix:p},fragmentShader:{log:W,prefix:M}})}s.deleteShader(D),s.deleteShader(L),S=new Ba(s,m),R=Yw(s,m)}let S;this.getUniforms=function(){return S===void 0&&J(this),S};let R;this.getAttributes=function(){return R===void 0&&J(this),R};let j=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=s.getProgramParameter(m,Hw)),j},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=D,this.fragmentShader=L,this}let aC=0;class lC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cC(e),t.set(e,n)),n}}class cC{constructor(e){this.id=aC++,this.code=e,this.usedTimes=0}}function uC(i,e,t,n,s,r,o){const a=new Zm,l=new lC,u=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures;let _=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return S===0?"uv":`uv${S}`}function m(S,R,j,Q,se){const B=Q.fog,W=se.geometry,q=S.isMeshStandardMaterial?Q.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),te=ee&&ee.mapping===nl?ee.image.height:null,ne=v[S.type];S.precision!==null&&(_=s.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const ie=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,O=ie!==void 0?ie.length:0;let pe=0;W.morphAttributes.position!==void 0&&(pe=1),W.morphAttributes.normal!==void 0&&(pe=2),W.morphAttributes.color!==void 0&&(pe=3);let K,Y,oe,me;if(ne){const Ft=Qn[ne];K=Ft.vertexShader,Y=Ft.fragmentShader}else K=S.vertexShader,Y=S.fragmentShader,l.update(S),oe=l.getVertexShaderID(S),me=l.getFragmentShaderID(S);const be=i.getRenderTarget(),Be=se.isInstancedMesh===!0,le=se.isBatchedMesh===!0,Oe=!!S.map,nt=!!S.matcap,X=!!ee,kt=!!S.aoMap,De=!!S.lightMap,We=!!S.bumpMap,we=!!S.normalMap,_t=!!S.displacementMap,Ze=!!S.emissiveMap,C=!!S.metalnessMap,x=!!S.roughnessMap,G=S.anisotropy>0,de=S.clearcoat>0,ce=S.iridescence>0,he=S.sheen>0,Le=S.transmission>0,ve=G&&!!S.anisotropyMap,Ae=de&&!!S.clearcoatMap,Ue=de&&!!S.clearcoatNormalMap,it=de&&!!S.clearcoatRoughnessMap,ae=ce&&!!S.iridescenceMap,ut=ce&&!!S.iridescenceThicknessMap,je=he&&!!S.sheenColorMap,$e=he&&!!S.sheenRoughnessMap,Fe=!!S.specularMap,Se=!!S.specularColorMap,P=!!S.specularIntensityMap,ge=Le&&!!S.transmissionMap,Ne=Le&&!!S.thicknessMap,Ce=!!S.gradientMap,fe=!!S.alphaMap,N=S.alphaTest>0,_e=!!S.alphaHash,xe=!!S.extensions,Ge=!!W.attributes.uv1,ke=!!W.attributes.uv2,ht=!!W.attributes.uv3;let dt=Yi;return S.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(dt=i.toneMapping),{isWebGL2:h,shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:K,fragmentShader:Y,defines:S.defines,customVertexShaderID:oe,customFragmentShaderID:me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:le,instancing:Be,instancingColor:Be&&se.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:be===null?i.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Zt,map:Oe,matcap:nt,envMap:X,envMapMode:X&&ee.mapping,envMapCubeUVHeight:te,aoMap:kt,lightMap:De,bumpMap:We,normalMap:we,displacementMap:f&&_t,emissiveMap:Ze,normalMapObjectSpace:we&&S.normalMapType===oT,normalMapTangentSpace:we&&S.normalMapType===Wm,metalnessMap:C,roughnessMap:x,anisotropy:G,anisotropyMap:ve,clearcoat:de,clearcoatMap:Ae,clearcoatNormalMap:Ue,clearcoatRoughnessMap:it,iridescence:ce,iridescenceMap:ae,iridescenceThicknessMap:ut,sheen:he,sheenColorMap:je,sheenRoughnessMap:$e,specularMap:Fe,specularColorMap:Se,specularIntensityMap:P,transmission:Le,transmissionMap:ge,thicknessMap:Ne,gradientMap:Ce,opaque:S.transparent===!1&&S.blending===Tr,alphaMap:fe,alphaTest:N,alphaHash:_e,combine:S.combine,mapUv:Oe&&b(S.map.channel),aoMapUv:kt&&b(S.aoMap.channel),lightMapUv:De&&b(S.lightMap.channel),bumpMapUv:We&&b(S.bumpMap.channel),normalMapUv:we&&b(S.normalMap.channel),displacementMapUv:_t&&b(S.displacementMap.channel),emissiveMapUv:Ze&&b(S.emissiveMap.channel),metalnessMapUv:C&&b(S.metalnessMap.channel),roughnessMapUv:x&&b(S.roughnessMap.channel),anisotropyMapUv:ve&&b(S.anisotropyMap.channel),clearcoatMapUv:Ae&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:je&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:$e&&b(S.sheenRoughnessMap.channel),specularMapUv:Fe&&b(S.specularMap.channel),specularColorMapUv:Se&&b(S.specularColorMap.channel),specularIntensityMapUv:P&&b(S.specularIntensityMap.channel),transmissionMapUv:ge&&b(S.transmissionMap.channel),thicknessMapUv:Ne&&b(S.thicknessMap.channel),alphaMapUv:fe&&b(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(we||G),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:Ge,vertexUv2s:ke,vertexUv3s:ht,pointsUvs:se.isPoints===!0&&!!W.attributes.uv&&(Oe||fe),fog:!!B,useFog:S.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:se.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:pe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&j.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Oe&&S.map.isVideoTexture===!0&&bt.getTransfer(S.map.colorSpace)===Ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ei,flipSided:S.side===gn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:xe&&S.extensions.derivatives===!0,extensionFragDepth:xe&&S.extensions.fragDepth===!0,extensionDrawBuffers:xe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const j in S.defines)R.push(j),R.push(S.defines[j]);return S.isRawShaderMaterial===!1&&(M(R,S),y(R,S),R.push(i.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function M(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function y(S,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),S.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function A(S){const R=v[S.type];let j;if(R){const Q=Qn[R];j=XT.clone(Q.uniforms)}else j=S.uniforms;return j}function I(S,R){let j;for(let Q=0,se=u.length;Q<se;Q++){const B=u[Q];if(B.cacheKey===R){j=B,++j.usedTimes;break}}return j===void 0&&(j=new oC(i,R,S,r),u.push(j)),j}function D(S){if(--S.usedTimes===0){const R=u.indexOf(S);u[R]=u[u.length-1],u.pop(),S.destroy()}}function L(S){l.remove(S)}function J(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:A,acquireProgram:I,releaseProgram:D,releaseShaderCache:L,programs:u,dispose:J}}function hC(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function dC(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Yf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Kf(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,f,_,v,b,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:_,groupOrder:v,renderOrder:d.renderOrder,z:b,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=_,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=b,p.group=m),e++,p}function a(d,f,_,v,b,m){const p=o(d,f,_,v,b,m);_.transmission>0?n.push(p):_.transparent===!0?s.push(p):t.push(p)}function l(d,f,_,v,b,m){const p=o(d,f,_,v,b,m);_.transmission>0?n.unshift(p):_.transparent===!0?s.unshift(p):t.unshift(p)}function u(d,f){t.length>1&&t.sort(d||dC),n.length>1&&n.sort(f||Yf),s.length>1&&s.sort(f||Yf)}function h(){for(let d=e,f=i.length;d<f;d++){const _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:u}}function fC(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Kf,i.set(n,[o])):s>=r.length?(o=new Kf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function pC(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new st};break;case"SpotLight":t={position:new F,direction:new F,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function mC(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let gC=0;function _C(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vC(i,e){const t=new pC,n=mC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);const r=new F,o=new mt,a=new mt;function l(h,d){let f=0,_=0,v=0;for(let Q=0;Q<9;Q++)s.probe[Q].set(0,0,0);let b=0,m=0,p=0,M=0,y=0,A=0,I=0,D=0,L=0,J=0,S=0;h.sort(_C);const R=d===!0?Math.PI:1;for(let Q=0,se=h.length;Q<se;Q++){const B=h[Q],W=B.color,q=B.intensity,ee=B.distance,te=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=W.r*q*R,_+=W.g*q*R,v+=W.b*q*R;else if(B.isLightProbe){for(let ne=0;ne<9;ne++)s.probe[ne].addScaledVector(B.sh.coefficients[ne],q);S++}else if(B.isDirectionalLight){const ne=t.get(B);if(ne.color.copy(B.color).multiplyScalar(B.intensity*R),B.castShadow){const ie=B.shadow,O=n.get(B);O.shadowBias=ie.bias,O.shadowNormalBias=ie.normalBias,O.shadowRadius=ie.radius,O.shadowMapSize=ie.mapSize,s.directionalShadow[b]=O,s.directionalShadowMap[b]=te,s.directionalShadowMatrix[b]=B.shadow.matrix,A++}s.directional[b]=ne,b++}else if(B.isSpotLight){const ne=t.get(B);ne.position.setFromMatrixPosition(B.matrixWorld),ne.color.copy(W).multiplyScalar(q*R),ne.distance=ee,ne.coneCos=Math.cos(B.angle),ne.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ne.decay=B.decay,s.spot[p]=ne;const ie=B.shadow;if(B.map&&(s.spotLightMap[L]=B.map,L++,ie.updateMatrices(B),B.castShadow&&J++),s.spotLightMatrix[p]=ie.matrix,B.castShadow){const O=n.get(B);O.shadowBias=ie.bias,O.shadowNormalBias=ie.normalBias,O.shadowRadius=ie.radius,O.shadowMapSize=ie.mapSize,s.spotShadow[p]=O,s.spotShadowMap[p]=te,D++}p++}else if(B.isRectAreaLight){const ne=t.get(B);ne.color.copy(W).multiplyScalar(q),ne.halfWidth.set(B.width*.5,0,0),ne.halfHeight.set(0,B.height*.5,0),s.rectArea[M]=ne,M++}else if(B.isPointLight){const ne=t.get(B);if(ne.color.copy(B.color).multiplyScalar(B.intensity*R),ne.distance=B.distance,ne.decay=B.decay,B.castShadow){const ie=B.shadow,O=n.get(B);O.shadowBias=ie.bias,O.shadowNormalBias=ie.normalBias,O.shadowRadius=ie.radius,O.shadowMapSize=ie.mapSize,O.shadowCameraNear=ie.camera.near,O.shadowCameraFar=ie.camera.far,s.pointShadow[m]=O,s.pointShadowMap[m]=te,s.pointShadowMatrix[m]=B.shadow.matrix,I++}s.point[m]=ne,m++}else if(B.isHemisphereLight){const ne=t.get(B);ne.skyColor.copy(B.color).multiplyScalar(q*R),ne.groundColor.copy(B.groundColor).multiplyScalar(q*R),s.hemi[y]=ne,y++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_FLOAT_1,s.rectAreaLTC2=Te.LTC_FLOAT_2):(s.rectAreaLTC1=Te.LTC_HALF_1,s.rectAreaLTC2=Te.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_FLOAT_1,s.rectAreaLTC2=Te.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_HALF_1,s.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=_,s.ambient[2]=v;const j=s.hash;(j.directionalLength!==b||j.pointLength!==m||j.spotLength!==p||j.rectAreaLength!==M||j.hemiLength!==y||j.numDirectionalShadows!==A||j.numPointShadows!==I||j.numSpotShadows!==D||j.numSpotMaps!==L||j.numLightProbes!==S)&&(s.directional.length=b,s.spot.length=p,s.rectArea.length=M,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=D+L-J,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=J,s.numLightProbes=S,j.directionalLength=b,j.pointLength=m,j.spotLength=p,j.rectAreaLength=M,j.hemiLength=y,j.numDirectionalShadows=A,j.numPointShadows=I,j.numSpotShadows=D,j.numSpotMaps=L,j.numLightProbes=S,s.version=gC++)}function u(h,d){let f=0,_=0,v=0,b=0,m=0;const p=d.matrixWorldInverse;for(let M=0,y=h.length;M<y;M++){const A=h[M];if(A.isDirectionalLight){const I=s.directional[f];I.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(p),f++}else if(A.isSpotLight){const I=s.spot[v];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(p),I.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(p),v++}else if(A.isRectAreaLight){const I=s.rectArea[b];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(p),a.identity(),o.copy(A.matrixWorld),o.premultiply(p),a.extractRotation(o),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),b++}else if(A.isPointLight){const I=s.point[_];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(p),_++}else if(A.isHemisphereLight){const I=s.hemi[m];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(p),m++}}}return{setup:l,setupView:u,state:s}}function Zf(i,e){const t=new vC(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function l(d){t.setup(n,d)}function u(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function EC(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Zf(i,e),t.set(r,[l])):o>=a.length?(l=new Zf(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class bC extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yC extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function SC(i,e,t){let n=new xu;const s=new Ke,r=new Ke,o=new Rt,a=new bC({depthPacking:rT}),l=new yC,u={},h=t.maxTextureSize,d={[Ci]:gn,[gn]:Ci,[ei]:ei},f=new Is({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:xC,fragmentShader:TC}),_=f.clone();_.defines.HORIZONTAL_PASS=1;const v=new ci;v.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Nn(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pm;let p=this.type;this.render=function(D,L,J){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const S=i.getRenderTarget(),R=i.getActiveCubeFace(),j=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(qi),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const se=p!==yi&&this.type===yi,B=p===yi&&this.type!==yi;for(let W=0,q=D.length;W<q;W++){const ee=D[W],te=ee.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;s.copy(te.mapSize);const ne=te.getFrameExtents();if(s.multiply(ne),r.copy(te.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,te.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,te.mapSize.y=r.y)),te.map===null||se===!0||B===!0){const O=this.type!==yi?{minFilter:Kt,magFilter:Kt}:{};te.map!==null&&te.map.dispose(),te.map=new Ds(s.x,s.y,O),te.map.texture.name=ee.name+".shadowMap",te.camera.updateProjectionMatrix()}i.setRenderTarget(te.map),i.clear();const ie=te.getViewportCount();for(let O=0;O<ie;O++){const pe=te.getViewport(O);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),Q.viewport(o),te.updateMatrices(ee,O),n=te.getFrustum(),A(L,J,te.camera,ee,this.type)}te.isPointLightShadow!==!0&&this.type===yi&&M(te,J),te.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,R,j)};function M(D,L){const J=e.update(b);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,_.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Ds(s.x,s.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(L,null,J,f,b,null),_.uniforms.shadow_pass.value=D.mapPass.texture,_.uniforms.resolution.value=D.mapSize,_.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(L,null,J,_,b,null)}function y(D,L,J,S){let R=null;const j=J.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(j!==void 0)R=j;else if(R=J.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const Q=R.uuid,se=L.uuid;let B=u[Q];B===void 0&&(B={},u[Q]=B);let W=B[se];W===void 0&&(W=R.clone(),B[se]=W,L.addEventListener("dispose",I)),R=W}if(R.visible=L.visible,R.wireframe=L.wireframe,S===yi?R.side=L.shadowSide!==null?L.shadowSide:L.side:R.side=L.shadowSide!==null?L.shadowSide:d[L.side],R.alphaMap=L.alphaMap,R.alphaTest=L.alphaTest,R.map=L.map,R.clipShadows=L.clipShadows,R.clippingPlanes=L.clippingPlanes,R.clipIntersection=L.clipIntersection,R.displacementMap=L.displacementMap,R.displacementScale=L.displacementScale,R.displacementBias=L.displacementBias,R.wireframeLinewidth=L.wireframeLinewidth,R.linewidth=L.linewidth,J.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Q=i.properties.get(R);Q.light=J}return R}function A(D,L,J,S,R){if(D.visible===!1)return;if(D.layers.test(L.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&R===yi)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,D.matrixWorld);const se=e.update(D),B=D.material;if(Array.isArray(B)){const W=se.groups;for(let q=0,ee=W.length;q<ee;q++){const te=W[q],ne=B[te.materialIndex];if(ne&&ne.visible){const ie=y(D,ne,S,R);D.onBeforeShadow(i,D,L,J,se,ie,te),i.renderBufferDirect(J,null,se,ie,D,te),D.onAfterShadow(i,D,L,J,se,ie,te)}}}else if(B.visible){const W=y(D,B,S,R);D.onBeforeShadow(i,D,L,J,se,W,null),i.renderBufferDirect(J,null,se,W,D,null),D.onAfterShadow(i,D,L,J,se,W,null)}}const Q=D.children;for(let se=0,B=Q.length;se<B;se++)A(Q[se],L,J,S,R)}function I(D){D.target.removeEventListener("dispose",I);for(const J in u){const S=u[J],R=D.target.uuid;R in S&&(S[R].dispose(),delete S[R])}}}function MC(i,e,t){const n=t.isWebGL2;function s(){let N=!1;const _e=new Rt;let xe=null;const Ge=new Rt(0,0,0,0);return{setMask:function(ke){xe!==ke&&!N&&(i.colorMask(ke,ke,ke,ke),xe=ke)},setLocked:function(ke){N=ke},setClear:function(ke,ht,dt,Ut,Ft){Ft===!0&&(ke*=Ut,ht*=Ut,dt*=Ut),_e.set(ke,ht,dt,Ut),Ge.equals(_e)===!1&&(i.clearColor(ke,ht,dt,Ut),Ge.copy(_e))},reset:function(){N=!1,xe=null,Ge.set(-1,0,0,0)}}}function r(){let N=!1,_e=null,xe=null,Ge=null;return{setTest:function(ke){ke?le(i.DEPTH_TEST):Oe(i.DEPTH_TEST)},setMask:function(ke){_e!==ke&&!N&&(i.depthMask(ke),_e=ke)},setFunc:function(ke){if(xe!==ke){switch(ke){case D0:i.depthFunc(i.NEVER);break;case I0:i.depthFunc(i.ALWAYS);break;case N0:i.depthFunc(i.LESS);break;case Ga:i.depthFunc(i.LEQUAL);break;case O0:i.depthFunc(i.EQUAL);break;case U0:i.depthFunc(i.GEQUAL);break;case F0:i.depthFunc(i.GREATER);break;case B0:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=ke}},setLocked:function(ke){N=ke},setClear:function(ke){Ge!==ke&&(i.clearDepth(ke),Ge=ke)},reset:function(){N=!1,_e=null,xe=null,Ge=null}}}function o(){let N=!1,_e=null,xe=null,Ge=null,ke=null,ht=null,dt=null,Ut=null,Ft=null;return{setTest:function(ct){N||(ct?le(i.STENCIL_TEST):Oe(i.STENCIL_TEST))},setMask:function(ct){_e!==ct&&!N&&(i.stencilMask(ct),_e=ct)},setFunc:function(ct,Lt,Sn){(xe!==ct||Ge!==Lt||ke!==Sn)&&(i.stencilFunc(ct,Lt,Sn),xe=ct,Ge=Lt,ke=Sn)},setOp:function(ct,Lt,Sn){(ht!==ct||dt!==Lt||Ut!==Sn)&&(i.stencilOp(ct,Lt,Sn),ht=ct,dt=Lt,Ut=Sn)},setLocked:function(ct){N=ct},setClear:function(ct){Ft!==ct&&(i.clearStencil(ct),Ft=ct)},reset:function(){N=!1,_e=null,xe=null,Ge=null,ke=null,ht=null,dt=null,Ut=null,Ft=null}}}const a=new s,l=new r,u=new o,h=new WeakMap,d=new WeakMap;let f={},_={},v=new WeakMap,b=[],m=null,p=!1,M=null,y=null,A=null,I=null,D=null,L=null,J=null,S=new st(0,0,0),R=0,j=!1,Q=null,se=null,B=null,W=null,q=null;const ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ne=0;const ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ie)[1]),te=ne>=1):ie.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),te=ne>=2);let O=null,pe={};const K=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),oe=new Rt().fromArray(K),me=new Rt().fromArray(Y);function be(N,_e,xe,Ge){const ke=new Uint8Array(4),ht=i.createTexture();i.bindTexture(N,ht),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let dt=0;dt<xe;dt++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(_e,0,i.RGBA,1,1,Ge,0,i.RGBA,i.UNSIGNED_BYTE,ke):i.texImage2D(_e+dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ke);return ht}const Be={};Be[i.TEXTURE_2D]=be(i.TEXTURE_2D,i.TEXTURE_2D,1),Be[i.TEXTURE_CUBE_MAP]=be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Be[i.TEXTURE_2D_ARRAY]=be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Be[i.TEXTURE_3D]=be(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),le(i.DEPTH_TEST),l.setFunc(Ga),Ze(!1),C(Rd),le(i.CULL_FACE),we(qi);function le(N){f[N]!==!0&&(i.enable(N),f[N]=!0)}function Oe(N){f[N]!==!1&&(i.disable(N),f[N]=!1)}function nt(N,_e){return _[N]!==_e?(i.bindFramebuffer(N,_e),_[N]=_e,n&&(N===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=_e),N===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=_e)),!0):!1}function X(N,_e){let xe=b,Ge=!1;if(N)if(xe=v.get(_e),xe===void 0&&(xe=[],v.set(_e,xe)),N.isWebGLMultipleRenderTargets){const ke=N.texture;if(xe.length!==ke.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,dt=ke.length;ht<dt;ht++)xe[ht]=i.COLOR_ATTACHMENT0+ht;xe.length=ke.length,Ge=!0}}else xe[0]!==i.COLOR_ATTACHMENT0&&(xe[0]=i.COLOR_ATTACHMENT0,Ge=!0);else xe[0]!==i.BACK&&(xe[0]=i.BACK,Ge=!0);Ge&&(t.isWebGL2?i.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function kt(N){return m!==N?(i.useProgram(N),m=N,!0):!1}const De={[Es]:i.FUNC_ADD,[_0]:i.FUNC_SUBTRACT,[v0]:i.FUNC_REVERSE_SUBTRACT};if(n)De[Id]=i.MIN,De[Nd]=i.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(De[Id]=N.MIN_EXT,De[Nd]=N.MAX_EXT)}const We={[E0]:i.ZERO,[b0]:i.ONE,[y0]:i.SRC_COLOR,[Wc]:i.SRC_ALPHA,[w0]:i.SRC_ALPHA_SATURATE,[M0]:i.DST_COLOR,[T0]:i.DST_ALPHA,[x0]:i.ONE_MINUS_SRC_COLOR,[$c]:i.ONE_MINUS_SRC_ALPHA,[A0]:i.ONE_MINUS_DST_COLOR,[S0]:i.ONE_MINUS_DST_ALPHA,[C0]:i.CONSTANT_COLOR,[R0]:i.ONE_MINUS_CONSTANT_COLOR,[L0]:i.CONSTANT_ALPHA,[P0]:i.ONE_MINUS_CONSTANT_ALPHA};function we(N,_e,xe,Ge,ke,ht,dt,Ut,Ft,ct){if(N===qi){p===!0&&(Oe(i.BLEND),p=!1);return}if(p===!1&&(le(i.BLEND),p=!0),N!==g0){if(N!==M||ct!==j){if((y!==Es||D!==Es)&&(i.blendEquation(i.FUNC_ADD),y=Es,D=Es),ct)switch(N){case Tr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ld:i.blendFunc(i.ONE,i.ONE);break;case Pd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ld:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Pd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,I=null,L=null,J=null,S.set(0,0,0),R=0,M=N,j=ct}return}ke=ke||_e,ht=ht||xe,dt=dt||Ge,(_e!==y||ke!==D)&&(i.blendEquationSeparate(De[_e],De[ke]),y=_e,D=ke),(xe!==A||Ge!==I||ht!==L||dt!==J)&&(i.blendFuncSeparate(We[xe],We[Ge],We[ht],We[dt]),A=xe,I=Ge,L=ht,J=dt),(Ut.equals(S)===!1||Ft!==R)&&(i.blendColor(Ut.r,Ut.g,Ut.b,Ft),S.copy(Ut),R=Ft),M=N,j=!1}function _t(N,_e){N.side===ei?Oe(i.CULL_FACE):le(i.CULL_FACE);let xe=N.side===gn;_e&&(xe=!xe),Ze(xe),N.blending===Tr&&N.transparent===!1?we(qi):we(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const Ge=N.stencilWrite;u.setTest(Ge),Ge&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),G(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):Oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(N){Q!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),Q=N)}function C(N){N!==f0?(le(i.CULL_FACE),N!==se&&(N===Rd?i.cullFace(i.BACK):N===p0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Oe(i.CULL_FACE),se=N}function x(N){N!==B&&(te&&i.lineWidth(N),B=N)}function G(N,_e,xe){N?(le(i.POLYGON_OFFSET_FILL),(W!==_e||q!==xe)&&(i.polygonOffset(_e,xe),W=_e,q=xe)):Oe(i.POLYGON_OFFSET_FILL)}function de(N){N?le(i.SCISSOR_TEST):Oe(i.SCISSOR_TEST)}function ce(N){N===void 0&&(N=i.TEXTURE0+ee-1),O!==N&&(i.activeTexture(N),O=N)}function he(N,_e,xe){xe===void 0&&(O===null?xe=i.TEXTURE0+ee-1:xe=O);let Ge=pe[xe];Ge===void 0&&(Ge={type:void 0,texture:void 0},pe[xe]=Ge),(Ge.type!==N||Ge.texture!==_e)&&(O!==xe&&(i.activeTexture(xe),O=xe),i.bindTexture(N,_e||Be[N]),Ge.type=N,Ge.texture=_e)}function Le(){const N=pe[O];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ve(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function je(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $e(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function P(N){oe.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),oe.copy(N))}function ge(N){me.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),me.copy(N))}function Ne(N,_e){let xe=d.get(_e);xe===void 0&&(xe=new WeakMap,d.set(_e,xe));let Ge=xe.get(N);Ge===void 0&&(Ge=i.getUniformBlockIndex(_e,N.name),xe.set(N,Ge))}function Ce(N,_e){const Ge=d.get(_e).get(N);h.get(_e)!==Ge&&(i.uniformBlockBinding(_e,Ge,N.__bindingPointIndex),h.set(_e,Ge))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},O=null,pe={},_={},v=new WeakMap,b=[],m=null,p=!1,M=null,y=null,A=null,I=null,D=null,L=null,J=null,S=new st(0,0,0),R=0,j=!1,Q=null,se=null,B=null,W=null,q=null,oe.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:le,disable:Oe,bindFramebuffer:nt,drawBuffers:X,useProgram:kt,setBlending:we,setMaterial:_t,setFlipSided:Ze,setCullFace:C,setLineWidth:x,setPolygonOffset:G,setScissorTest:de,activeTexture:ce,bindTexture:he,unbindTexture:Le,compressedTexImage2D:ve,compressedTexImage3D:Ae,texImage2D:Fe,texImage3D:Se,updateUBOMapping:Ne,uniformBlockBinding:Ce,texStorage2D:je,texStorage3D:$e,texSubImage2D:Ue,texSubImage3D:it,compressedTexSubImage2D:ae,compressedTexSubImage3D:ut,scissor:P,viewport:ge,reset:fe}}function AC(i,e,t,n,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,x){return _?new OffscreenCanvas(C,x):Mo("canvas")}function b(C,x,G,de){let ce=1;if((C.width>de||C.height>de)&&(ce=de/Math.max(C.width,C.height)),ce<1||x===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const he=x?Ya:Math.floor,Le=he(ce*C.width),ve=he(ce*C.height);d===void 0&&(d=v(Le,ve));const Ae=G?v(Le,ve):d;return Ae.width=Le,Ae.height=ve,Ae.getContext("2d").drawImage(C,0,0,Le,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Le+"x"+ve+")."),Ae}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return Jc(C.width)&&Jc(C.height)}function p(C){return a?!1:C.wrapS!==Pn||C.wrapT!==Pn||C.minFilter!==Kt&&C.minFilter!==pn}function M(C,x){return C.generateMipmaps&&x&&C.minFilter!==Kt&&C.minFilter!==pn}function y(C){i.generateMipmap(C)}function A(C,x,G,de,ce=!1){if(a===!1)return x;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let he=x;if(x===i.RED&&(G===i.FLOAT&&(he=i.R32F),G===i.HALF_FLOAT&&(he=i.R16F),G===i.UNSIGNED_BYTE&&(he=i.R8)),x===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(he=i.R8UI),G===i.UNSIGNED_SHORT&&(he=i.R16UI),G===i.UNSIGNED_INT&&(he=i.R32UI),G===i.BYTE&&(he=i.R8I),G===i.SHORT&&(he=i.R16I),G===i.INT&&(he=i.R32I)),x===i.RG&&(G===i.FLOAT&&(he=i.RG32F),G===i.HALF_FLOAT&&(he=i.RG16F),G===i.UNSIGNED_BYTE&&(he=i.RG8)),x===i.RGBA){const Le=ce?$a:bt.getTransfer(de);G===i.FLOAT&&(he=i.RGBA32F),G===i.HALF_FLOAT&&(he=i.RGBA16F),G===i.UNSIGNED_BYTE&&(he=Le===Ot?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function I(C,x,G){return M(C,G)===!0||C.isFramebufferTexture&&C.minFilter!==Kt&&C.minFilter!==pn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function D(C){return C===Kt||C===qc||C===Fa?i.NEAREST:i.LINEAR}function L(C){const x=C.target;x.removeEventListener("dispose",L),S(x),x.isVideoTexture&&h.delete(x)}function J(C){const x=C.target;x.removeEventListener("dispose",J),j(x)}function S(C){const x=n.get(C);if(x.__webglInit===void 0)return;const G=C.source,de=f.get(G);if(de){const ce=de[x.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&R(C),Object.keys(de).length===0&&f.delete(G)}n.remove(C)}function R(C){const x=n.get(C);i.deleteTexture(x.__webglTexture);const G=C.source,de=f.get(G);delete de[x.__cacheKey],o.memory.textures--}function j(C){const x=C.texture,G=n.get(C),de=n.get(x);if(de.__webglTexture!==void 0&&(i.deleteTexture(de.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(G.__webglFramebuffer[ce]))for(let he=0;he<G.__webglFramebuffer[ce].length;he++)i.deleteFramebuffer(G.__webglFramebuffer[ce][he]);else i.deleteFramebuffer(G.__webglFramebuffer[ce]);G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[ce])}else{if(Array.isArray(G.__webglFramebuffer))for(let ce=0;ce<G.__webglFramebuffer.length;ce++)i.deleteFramebuffer(G.__webglFramebuffer[ce]);else i.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ce=0;ce<G.__webglColorRenderbuffer.length;ce++)G.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(G.__webglColorRenderbuffer[ce]);G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ce=0,he=x.length;ce<he;ce++){const Le=n.get(x[ce]);Le.__webglTexture&&(i.deleteTexture(Le.__webglTexture),o.memory.textures--),n.remove(x[ce])}n.remove(x),n.remove(C)}let Q=0;function se(){Q=0}function B(){const C=Q;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),Q+=1,C}function W(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function q(C,x){const G=n.get(C);if(C.isVideoTexture&&_t(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const de=C.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(G,C,x);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+x)}function ee(C,x){const G=n.get(C);if(C.version>0&&G.__version!==C.version){oe(G,C,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+x)}function te(C,x){const G=n.get(C);if(C.version>0&&G.__version!==C.version){oe(G,C,x);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+x)}function ne(C,x){const G=n.get(C);if(C.version>0&&G.__version!==C.version){me(G,C,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+x)}const ie={[Or]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[Wa]:i.MIRRORED_REPEAT},O={[Kt]:i.NEAREST,[qc]:i.NEAREST_MIPMAP_NEAREST,[Fa]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[Nm]:i.LINEAR_MIPMAP_NEAREST,[Ps]:i.LINEAR_MIPMAP_LINEAR},pe={[aT]:i.NEVER,[fT]:i.ALWAYS,[lT]:i.LESS,[$m]:i.LEQUAL,[cT]:i.EQUAL,[dT]:i.GEQUAL,[uT]:i.GREATER,[hT]:i.NOTEQUAL};function K(C,x,G){if(G?(i.texParameteri(C,i.TEXTURE_WRAP_S,ie[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ie[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ie[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,O[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,O[x.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Pn||x.wrapT!==Pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,D(x.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,D(x.minFilter)),x.minFilter!==Kt&&x.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,pe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Kt||x.minFilter!==Fa&&x.minFilter!==Ps||x.type===xi&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===To&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(C,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Y(C,x){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",L));const de=x.source;let ce=f.get(de);ce===void 0&&(ce={},f.set(de,ce));const he=W(x);if(he!==C.__cacheKey){ce[he]===void 0&&(ce[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ce[he].usedTimes++;const Le=ce[C.__cacheKey];Le!==void 0&&(ce[C.__cacheKey].usedTimes--,Le.usedTimes===0&&R(x)),C.__cacheKey=he,C.__webglTexture=ce[he].texture}return G}function oe(C,x,G){let de=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(de=i.TEXTURE_3D);const ce=Y(C,x),he=x.source;t.bindTexture(de,C.__webglTexture,i.TEXTURE0+G);const Le=n.get(he);if(he.version!==Le.__version||ce===!0){t.activeTexture(i.TEXTURE0+G);const ve=bt.getPrimaries(bt.workingColorSpace),Ae=x.colorSpace===In?null:bt.getPrimaries(x.colorSpace),Ue=x.colorSpace===In||ve===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const it=p(x)&&m(x.image)===!1;let ae=b(x.image,it,!1,s.maxTextureSize);ae=Ze(x,ae);const ut=m(ae)||a,je=r.convert(x.format,x.colorSpace);let $e=r.convert(x.type),Fe=A(x.internalFormat,je,$e,x.colorSpace,x.isVideoTexture);K(de,x,ut);let Se;const P=x.mipmaps,ge=a&&x.isVideoTexture!==!0&&Fe!==Vm,Ne=Le.__version===void 0||ce===!0,Ce=I(x,ae,ut);if(x.isDepthTexture)Fe=i.DEPTH_COMPONENT,a?x.type===xi?Fe=i.DEPTH_COMPONENT32F:x.type===Xi?Fe=i.DEPTH_COMPONENT24:x.type===As?Fe=i.DEPTH24_STENCIL8:Fe=i.DEPTH_COMPONENT16:x.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ws&&Fe===i.DEPTH_COMPONENT&&x.type!==Eu&&x.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Xi,$e=r.convert(x.type)),x.format===Ur&&Fe===i.DEPTH_COMPONENT&&(Fe=i.DEPTH_STENCIL,x.type!==As&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=As,$e=r.convert(x.type))),Ne&&(ge?t.texStorage2D(i.TEXTURE_2D,1,Fe,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Fe,ae.width,ae.height,0,je,$e,null));else if(x.isDataTexture)if(P.length>0&&ut){ge&&Ne&&t.texStorage2D(i.TEXTURE_2D,Ce,Fe,P[0].width,P[0].height);for(let fe=0,N=P.length;fe<N;fe++)Se=P[fe],ge?t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Se.width,Se.height,je,$e,Se.data):t.texImage2D(i.TEXTURE_2D,fe,Fe,Se.width,Se.height,0,je,$e,Se.data);x.generateMipmaps=!1}else ge?(Ne&&t.texStorage2D(i.TEXTURE_2D,Ce,Fe,ae.width,ae.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,je,$e,ae.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,ae.width,ae.height,0,je,$e,ae.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ge&&Ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Fe,P[0].width,P[0].height,ae.depth);for(let fe=0,N=P.length;fe<N;fe++)Se=P[fe],x.format!==Dn?je!==null?ge?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Se.width,Se.height,ae.depth,je,Se.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,Fe,Se.width,Se.height,ae.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Se.width,Se.height,ae.depth,je,$e,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,Fe,Se.width,Se.height,ae.depth,0,je,$e,Se.data)}else{ge&&Ne&&t.texStorage2D(i.TEXTURE_2D,Ce,Fe,P[0].width,P[0].height);for(let fe=0,N=P.length;fe<N;fe++)Se=P[fe],x.format!==Dn?je!==null?ge?t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,Se.width,Se.height,je,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,Fe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Se.width,Se.height,je,$e,Se.data):t.texImage2D(i.TEXTURE_2D,fe,Fe,Se.width,Se.height,0,je,$e,Se.data)}else if(x.isDataArrayTexture)ge?(Ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Fe,ae.width,ae.height,ae.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,je,$e,ae.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,ae.width,ae.height,ae.depth,0,je,$e,ae.data);else if(x.isData3DTexture)ge?(Ne&&t.texStorage3D(i.TEXTURE_3D,Ce,Fe,ae.width,ae.height,ae.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,je,$e,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,ae.width,ae.height,ae.depth,0,je,$e,ae.data);else if(x.isFramebufferTexture){if(Ne)if(ge)t.texStorage2D(i.TEXTURE_2D,Ce,Fe,ae.width,ae.height);else{let fe=ae.width,N=ae.height;for(let _e=0;_e<Ce;_e++)t.texImage2D(i.TEXTURE_2D,_e,Fe,fe,N,0,je,$e,null),fe>>=1,N>>=1}}else if(P.length>0&&ut){ge&&Ne&&t.texStorage2D(i.TEXTURE_2D,Ce,Fe,P[0].width,P[0].height);for(let fe=0,N=P.length;fe<N;fe++)Se=P[fe],ge?t.texSubImage2D(i.TEXTURE_2D,fe,0,0,je,$e,Se):t.texImage2D(i.TEXTURE_2D,fe,Fe,je,$e,Se);x.generateMipmaps=!1}else ge?(Ne&&t.texStorage2D(i.TEXTURE_2D,Ce,Fe,ae.width,ae.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,je,$e,ae)):t.texImage2D(i.TEXTURE_2D,0,Fe,je,$e,ae);M(x,ut)&&y(de),Le.__version=he.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function me(C,x,G){if(x.image.length!==6)return;const de=Y(C,x),ce=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+G);const he=n.get(ce);if(ce.version!==he.__version||de===!0){t.activeTexture(i.TEXTURE0+G);const Le=bt.getPrimaries(bt.workingColorSpace),ve=x.colorSpace===In?null:bt.getPrimaries(x.colorSpace),Ae=x.colorSpace===In||Le===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ue=x.isCompressedTexture||x.image[0].isCompressedTexture,it=x.image[0]&&x.image[0].isDataTexture,ae=[];for(let fe=0;fe<6;fe++)!Ue&&!it?ae[fe]=b(x.image[fe],!1,!0,s.maxCubemapSize):ae[fe]=it?x.image[fe].image:x.image[fe],ae[fe]=Ze(x,ae[fe]);const ut=ae[0],je=m(ut)||a,$e=r.convert(x.format,x.colorSpace),Fe=r.convert(x.type),Se=A(x.internalFormat,$e,Fe,x.colorSpace),P=a&&x.isVideoTexture!==!0,ge=he.__version===void 0||de===!0;let Ne=I(x,ut,je);K(i.TEXTURE_CUBE_MAP,x,je);let Ce;if(Ue){P&&ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,Se,ut.width,ut.height);for(let fe=0;fe<6;fe++){Ce=ae[fe].mipmaps;for(let N=0;N<Ce.length;N++){const _e=Ce[N];x.format!==Dn?$e!==null?P?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N,0,0,_e.width,_e.height,$e,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N,Se,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N,0,0,_e.width,_e.height,$e,Fe,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N,Se,_e.width,_e.height,0,$e,Fe,_e.data)}}}else{Ce=x.mipmaps,P&&ge&&(Ce.length>0&&Ne++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,Se,ae[0].width,ae[0].height));for(let fe=0;fe<6;fe++)if(it){P?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ae[fe].width,ae[fe].height,$e,Fe,ae[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Se,ae[fe].width,ae[fe].height,0,$e,Fe,ae[fe].data);for(let N=0;N<Ce.length;N++){const xe=Ce[N].image[fe].image;P?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N+1,0,0,xe.width,xe.height,$e,Fe,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N+1,Se,xe.width,xe.height,0,$e,Fe,xe.data)}}else{P?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,$e,Fe,ae[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Se,$e,Fe,ae[fe]);for(let N=0;N<Ce.length;N++){const _e=Ce[N];P?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N+1,0,0,$e,Fe,_e.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N+1,Se,$e,Fe,_e.image[fe])}}}M(x,je)&&y(i.TEXTURE_CUBE_MAP),he.__version=ce.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function be(C,x,G,de,ce,he){const Le=r.convert(G.format,G.colorSpace),ve=r.convert(G.type),Ae=A(G.internalFormat,Le,ve,G.colorSpace);if(!n.get(x).__hasExternalTextures){const it=Math.max(1,x.width>>he),ae=Math.max(1,x.height>>he);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,he,Ae,it,ae,x.depth,0,Le,ve,null):t.texImage2D(ce,he,Ae,it,ae,0,Le,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),we(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,ce,n.get(G).__webglTexture,0,We(x)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,ce,n.get(G).__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(C,x,G){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer&&!x.stencilBuffer){let de=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(G||we(x)){const ce=x.depthTexture;ce&&ce.isDepthTexture&&(ce.type===xi?de=i.DEPTH_COMPONENT32F:ce.type===Xi&&(de=i.DEPTH_COMPONENT24));const he=We(x);we(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,de,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,he,de,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,de,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(x.depthBuffer&&x.stencilBuffer){const de=We(x);G&&we(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,i.DEPTH24_STENCIL8,x.width,x.height):we(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{const de=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ce=0;ce<de.length;ce++){const he=de[ce],Le=r.convert(he.format,he.colorSpace),ve=r.convert(he.type),Ae=A(he.internalFormat,Le,ve,he.colorSpace),Ue=We(x);G&&we(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,Ae,x.width,x.height):we(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue,Ae,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function le(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q(x.depthTexture,0);const de=n.get(x.depthTexture).__webglTexture,ce=We(x);if(x.depthTexture.format===ws)we(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0);else if(x.depthTexture.format===Ur)we(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function Oe(C){const x=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");le(x.__webglFramebuffer,C)}else if(G){x.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[de]),x.__webglDepthbuffer[de]=i.createRenderbuffer(),Be(x.__webglDepthbuffer[de],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Be(x.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(C,x,G){const de=n.get(C);x!==void 0&&be(de.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Oe(C)}function X(C){const x=C.texture,G=n.get(C),de=n.get(x);C.addEventListener("dispose",J),C.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=x.version,o.memory.textures++);const ce=C.isWebGLCubeRenderTarget===!0,he=C.isWebGLMultipleRenderTargets===!0,Le=m(C)||a;if(ce){G.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(a&&x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[ve]=[];for(let Ae=0;Ae<x.mipmaps.length;Ae++)G.__webglFramebuffer[ve][Ae]=i.createFramebuffer()}else G.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let ve=0;ve<x.mipmaps.length;ve++)G.__webglFramebuffer[ve]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(he)if(s.drawBuffers){const ve=C.texture;for(let Ae=0,Ue=ve.length;Ae<Ue;Ae++){const it=n.get(ve[Ae]);it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&we(C)===!1){const ve=he?x:[x];G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ve.length;Ae++){const Ue=ve[Ae];G.__webglColorRenderbuffer[Ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Ae]);const it=r.convert(Ue.format,Ue.colorSpace),ae=r.convert(Ue.type),ut=A(Ue.internalFormat,it,ae,Ue.colorSpace,C.isXRRenderTarget===!0),je=We(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,je,ut,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,G.__webglColorRenderbuffer[Ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),K(i.TEXTURE_CUBE_MAP,x,Le);for(let ve=0;ve<6;ve++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)be(G.__webglFramebuffer[ve][Ae],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ae);else be(G.__webglFramebuffer[ve],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);M(x,Le)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){const ve=C.texture;for(let Ae=0,Ue=ve.length;Ae<Ue;Ae++){const it=ve[Ae],ae=n.get(it);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),K(i.TEXTURE_2D,it,Le),be(G.__webglFramebuffer,C,it,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,0),M(it,Le)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ve=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,de.__webglTexture),K(ve,x,Le),a&&x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)be(G.__webglFramebuffer[Ae],C,x,i.COLOR_ATTACHMENT0,ve,Ae);else be(G.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,ve,0);M(x,Le)&&y(ve),t.unbindTexture()}C.depthBuffer&&Oe(C)}function kt(C){const x=m(C)||a,G=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let de=0,ce=G.length;de<ce;de++){const he=G[de];if(M(he,x)){const Le=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ve=n.get(he).__webglTexture;t.bindTexture(Le,ve),y(Le),t.unbindTexture()}}}function De(C){if(a&&C.samples>0&&we(C)===!1){const x=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],G=C.width,de=C.height;let ce=i.COLOR_BUFFER_BIT;const he=[],Le=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(C),Ae=C.isWebGLMultipleRenderTargets===!0;if(Ae)for(let Ue=0;Ue<x.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ue=0;Ue<x.length;Ue++){he.push(i.COLOR_ATTACHMENT0+Ue),C.depthBuffer&&he.push(Le);const it=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(it===!1&&(C.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),Ae&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Ue]),it===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Le]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Le])),Ae){const ae=n.get(x[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,G,de,0,0,G,de,ce,i.NEAREST),u&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ae)for(let Ue=0;Ue<x.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Ue]);const it=n.get(x[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,it,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function We(C){return Math.min(s.maxSamples,C.samples)}function we(C){const x=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function _t(C){const x=o.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function Ze(C,x){const G=C.colorSpace,de=C.format,ce=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Zc||G!==Zt&&G!==In&&(bt.getTransfer(G)===Ot?a===!1?e.has("EXT_sRGB")===!0&&de===Dn?(C.format=Zc,C.minFilter=pn,C.generateMipmaps=!1):x=qm.sRGBToLinear(x):(de!==Dn||ce!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}this.allocateTextureUnit=B,this.resetTextureUnits=se,this.setTexture2D=q,this.setTexture2DArray=ee,this.setTexture3D=te,this.setTextureCube=ne,this.rebindTextures=nt,this.setupRenderTarget=X,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=we}function wC(i,e,t){const n=t.isWebGL2;function s(r,o=In){let a;const l=bt.getTransfer(o);if(r===Ki)return i.UNSIGNED_BYTE;if(r===Um)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Fm)return i.UNSIGNED_SHORT_5_5_5_1;if(r===q0)return i.BYTE;if(r===Y0)return i.SHORT;if(r===Eu)return i.UNSIGNED_SHORT;if(r===Om)return i.INT;if(r===Xi)return i.UNSIGNED_INT;if(r===xi)return i.FLOAT;if(r===To)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===K0)return i.ALPHA;if(r===Dn)return i.RGBA;if(r===Z0)return i.LUMINANCE;if(r===J0)return i.LUMINANCE_ALPHA;if(r===ws)return i.DEPTH_COMPONENT;if(r===Ur)return i.DEPTH_STENCIL;if(r===Zc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Q0)return i.RED;if(r===Bm)return i.RED_INTEGER;if(r===eT)return i.RG;if(r===km)return i.RG_INTEGER;if(r===Hm)return i.RGBA_INTEGER;if(r===Ql||r===ec||r===tc||r===nc)if(l===Ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ql)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ql)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ec)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ud||r===Fd||r===Bd||r===kd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ud)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Fd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vm)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Hd||r===Vd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Hd)return l===Ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Vd)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zd||r===Gd||r===Wd||r===$d||r===Xd||r===jd||r===qd||r===Yd||r===Kd||r===Zd||r===Jd||r===Qd||r===ef||r===tf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===zd)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Gd)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wd)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$d)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xd)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jd)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qd)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yd)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kd)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zd)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jd)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qd)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ef)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===tf)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ic||r===nf||r===sf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ic)return l===Ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===nf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===tT||r===rf||r===of||r===af)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ic)return a.COMPRESSED_RED_RGTC1_EXT;if(r===rf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===of)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===af)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===As?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class CC extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ss extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RC={type:"move"};class wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),p=this._getHandJoint(u,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),_=.02,v=.005;u.inputState.pinching&&f>_+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=_-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(RC)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ss;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class LC extends Fs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,u=null,h=null,d=null,f=null,_=null,v=null;const b=t.getContextAttributes();let m=null,p=null;const M=[],y=[],A=new Ke;let I=null;const D=new ln;D.layers.enable(1),D.viewport=new Rt;const L=new ln;L.layers.enable(2),L.viewport=new Rt;const J=[D,L],S=new CC;S.layers.enable(1),S.layers.enable(2);let R=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Y=M[K];return Y===void 0&&(Y=new wc,M[K]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(K){let Y=M[K];return Y===void 0&&(Y=new wc,M[K]=Y),Y.getGripSpace()},this.getHand=function(K){let Y=M[K];return Y===void 0&&(Y=new wc,M[K]=Y),Y.getHandSpace()};function Q(K){const Y=y.indexOf(K.inputSource);if(Y===-1)return;const oe=M[Y];oe!==void 0&&(oe.update(K.inputSource,K.frame,u||o),oe.dispatchEvent({type:K.type,data:K.inputSource}))}function se(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",se),s.removeEventListener("inputsourceschange",B);for(let K=0;K<M.length;K++){const Y=y[K];Y!==null&&(y[K]=null,M[K].disconnect(Y))}R=null,j=null,e.setRenderTarget(m),_=null,f=null,d=null,s=null,p=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",se),s.addEventListener("inputsourceschange",B),b.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:s.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,t,Y),s.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),p=new Ds(_.framebufferWidth,_.framebufferHeight,{format:Dn,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let Y=null,oe=null,me=null;b.depth&&(me=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=b.stencil?Ur:ws,oe=b.stencil?As:Xi);const be={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(be),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new Ds(f.textureWidth,f.textureHeight,{format:Dn,type:Ki,depthTexture:new rg(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});const Be=e.properties.get(p);Be.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),pe.setContext(s),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function B(K){for(let Y=0;Y<K.removed.length;Y++){const oe=K.removed[Y],me=y.indexOf(oe);me>=0&&(y[me]=null,M[me].disconnect(oe))}for(let Y=0;Y<K.added.length;Y++){const oe=K.added[Y];let me=y.indexOf(oe);if(me===-1){for(let Be=0;Be<M.length;Be++)if(Be>=y.length){y.push(oe),me=Be;break}else if(y[Be]===null){y[Be]=oe,me=Be;break}if(me===-1)break}const be=M[me];be&&be.connect(oe)}}const W=new F,q=new F;function ee(K,Y,oe){W.setFromMatrixPosition(Y.matrixWorld),q.setFromMatrixPosition(oe.matrixWorld);const me=W.distanceTo(q),be=Y.projectionMatrix.elements,Be=oe.projectionMatrix.elements,le=be[14]/(be[10]-1),Oe=be[14]/(be[10]+1),nt=(be[9]+1)/be[5],X=(be[9]-1)/be[5],kt=(be[8]-1)/be[0],De=(Be[8]+1)/Be[0],We=le*kt,we=le*De,_t=me/(-kt+De),Ze=_t*-kt;Y.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ze),K.translateZ(_t),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const C=le+_t,x=Oe+_t,G=We-Ze,de=we+(me-Ze),ce=nt*Oe/x*C,he=X*Oe/x*C;K.projectionMatrix.makePerspective(G,de,ce,he,C,x),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function te(K,Y){Y===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Y.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;S.near=L.near=D.near=K.near,S.far=L.far=D.far=K.far,(R!==S.near||j!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,j=S.far);const Y=K.parent,oe=S.cameras;te(S,Y);for(let me=0;me<oe.length;me++)te(oe[me],Y);oe.length===2?ee(S,D,L):S.projectionMatrix.copy(D.projectionMatrix),ne(K,S,Y)};function ne(K,Y,oe){oe===null?K.matrix.copy(Y.matrixWorld):(K.matrix.copy(oe.matrixWorld),K.matrix.invert(),K.matrix.multiply(Y.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Y.projectionMatrix),K.projectionMatrixInverse.copy(Y.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Br*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&_===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=K)};let ie=null;function O(K,Y){if(h=Y.getViewerPose(u||o),v=Y,h!==null){const oe=h.views;_!==null&&(e.setRenderTargetFramebuffer(p,_.framebuffer),e.setRenderTarget(p));let me=!1;oe.length!==S.cameras.length&&(S.cameras.length=0,me=!0);for(let be=0;be<oe.length;be++){const Be=oe[be];let le=null;if(_!==null)le=_.getViewport(Be);else{const nt=d.getViewSubImage(f,Be);le=nt.viewport,be===0&&(e.setRenderTargetTextures(p,nt.colorTexture,f.ignoreDepthValues?void 0:nt.depthStencilTexture),e.setRenderTarget(p))}let Oe=J[be];Oe===void 0&&(Oe=new ln,Oe.layers.enable(be),Oe.viewport=new Rt,J[be]=Oe),Oe.matrix.fromArray(Be.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Be.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(le.x,le.y,le.width,le.height),be===0&&(S.matrix.copy(Oe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),me===!0&&S.cameras.push(Oe)}}for(let oe=0;oe<M.length;oe++){const me=y[oe],be=M[oe];me!==null&&be!==void 0&&be.update(me,Y,u||o)}ie&&ie(K,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),v=null}const pe=new sg;pe.setAnimationLoop(O),this.setAnimationLoop=function(K){ie=K},this.dispose=function(){}}}function PC(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,tg(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,y,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&_(m,p,A)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function _(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function DC(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,y){const A=y.program;n.uniformBlockBinding(M,A)}function u(M,y){let A=s[M.id];A===void 0&&(v(M),A=h(M),s[M.id]=A,M.addEventListener("dispose",m));const I=y.program;n.updateUBOMapping(M,I);const D=e.render.frame;r[M.id]!==D&&(f(M),r[M.id]=D)}function h(M){const y=d();M.__bindingPointIndex=y;const A=i.createBuffer(),I=M.__size,D=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,I,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,A),A}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=s[M.id],A=M.uniforms,I=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let D=0,L=A.length;D<L;D++){const J=Array.isArray(A[D])?A[D]:[A[D]];for(let S=0,R=J.length;S<R;S++){const j=J[S];if(_(j,D,S,I)===!0){const Q=j.__offset,se=Array.isArray(j.value)?j.value:[j.value];let B=0;for(let W=0;W<se.length;W++){const q=se[W],ee=b(q);typeof q=="number"||typeof q=="boolean"?(j.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,Q+B,j.__data)):q.isMatrix3?(j.__data[0]=q.elements[0],j.__data[1]=q.elements[1],j.__data[2]=q.elements[2],j.__data[3]=0,j.__data[4]=q.elements[3],j.__data[5]=q.elements[4],j.__data[6]=q.elements[5],j.__data[7]=0,j.__data[8]=q.elements[6],j.__data[9]=q.elements[7],j.__data[10]=q.elements[8],j.__data[11]=0):(q.toArray(j.__data,B),B+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,j.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(M,y,A,I){const D=M.value,L=y+"_"+A;if(I[L]===void 0)return typeof D=="number"||typeof D=="boolean"?I[L]=D:I[L]=D.clone(),!0;{const J=I[L];if(typeof D=="number"||typeof D=="boolean"){if(J!==D)return I[L]=D,!0}else if(J.equals(D)===!1)return J.copy(D),!0}return!1}function v(M){const y=M.uniforms;let A=0;const I=16;for(let L=0,J=y.length;L<J;L++){const S=Array.isArray(y[L])?y[L]:[y[L]];for(let R=0,j=S.length;R<j;R++){const Q=S[R],se=Array.isArray(Q.value)?Q.value:[Q.value];for(let B=0,W=se.length;B<W;B++){const q=se[B],ee=b(q),te=A%I;te!==0&&I-te<ee.boundary&&(A+=I-te),Q.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=A,A+=ee.storage}}}const D=A%I;return D>0&&(A+=I-D),M.__size=A,M.__cache={},this}function b(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const A=o.indexOf(y.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:u,dispose:p}}class hg{constructor(e={}){const{canvas:t=CT(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const _=new Uint32Array(4),v=new Int32Array(4);let b=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=Yi,this.toneMappingExposure=1;const y=this;let A=!1,I=0,D=0,L=null,J=-1,S=null;const R=new Rt,j=new Rt;let Q=null;const se=new st(0);let B=0,W=t.width,q=t.height,ee=1,te=null,ne=null;const ie=new Rt(0,0,W,q),O=new Rt(0,0,W,q);let pe=!1;const K=new xu;let Y=!1,oe=!1,me=null;const be=new mt,Be=new Ke,le=new F,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function nt(){return L===null?ee:1}let X=n;function kt(w,H){for(let V=0;V<w.length;V++){const $=w[V],z=t.getContext($,H);if(z!==null)return z}return null}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vu}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",_e,!1),X===null){const H=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&H.shift(),X=kt(H,w),X===null)throw kt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let De,We,we,_t,Ze,C,x,G,de,ce,he,Le,ve,Ae,Ue,it,ae,ut,je,$e,Fe,Se,P,ge;function Ne(){De=new zA(X),We=new UA(X,De,e),De.init(We),Se=new wC(X,De,We),we=new MC(X,De,We),_t=new $A(X),Ze=new hC,C=new AC(X,De,we,Ze,We,Se,_t),x=new BA(y),G=new VA(y),de=new QT(X,We),P=new NA(X,De,de,We),ce=new GA(X,de,_t,P),he=new YA(X,ce,de,_t),je=new qA(X,We,C),it=new FA(Ze),Le=new uC(y,x,G,De,We,P,it),ve=new PC(y,Ze),Ae=new fC,Ue=new EC(De,We),ut=new IA(y,x,G,we,he,f,l),ae=new SC(y,he,We),ge=new DC(X,_t,We,we),$e=new OA(X,De,_t,We),Fe=new WA(X,De,_t,We),_t.programs=Le.programs,y.capabilities=We,y.extensions=De,y.properties=Ze,y.renderLists=Ae,y.shadowMap=ae,y.state=we,y.info=_t}Ne();const Ce=new LC(y,X);this.xr=Ce,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const w=De.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=De.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(W,q,!1))},this.getSize=function(w){return w.set(W,q)},this.setSize=function(w,H,V=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,q=H,t.width=Math.floor(w*ee),t.height=Math.floor(H*ee),V===!0&&(t.style.width=w+"px",t.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(W*ee,q*ee).floor()},this.setDrawingBufferSize=function(w,H,V){W=w,q=H,ee=V,t.width=Math.floor(w*V),t.height=Math.floor(H*V),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(ie)},this.setViewport=function(w,H,V,$){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,H,V,$),we.viewport(R.copy(ie).multiplyScalar(ee).floor())},this.getScissor=function(w){return w.copy(O)},this.setScissor=function(w,H,V,$){w.isVector4?O.set(w.x,w.y,w.z,w.w):O.set(w,H,V,$),we.scissor(j.copy(O).multiplyScalar(ee).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(w){we.setScissorTest(pe=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){ne=w},this.getClearColor=function(w){return w.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(w=!0,H=!0,V=!0){let $=0;if(w){let z=!1;if(L!==null){const Ee=L.texture.format;z=Ee===Hm||Ee===km||Ee===Bm}if(z){const Ee=L.texture.type,Ie=Ee===Ki||Ee===Xi||Ee===Eu||Ee===As||Ee===Um||Ee===Fm,He=ut.getClearColor(),Ve=ut.getClearAlpha(),qe=He.r,Je=He.g,Qe=He.b;Ie?(_[0]=qe,_[1]=Je,_[2]=Qe,_[3]=Ve,X.clearBufferuiv(X.COLOR,0,_)):(v[0]=qe,v[1]=Je,v[2]=Qe,v[3]=Ve,X.clearBufferiv(X.COLOR,0,v))}else $|=X.COLOR_BUFFER_BIT}H&&($|=X.DEPTH_BUFFER_BIT),V&&($|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Ae.dispose(),Ue.dispose(),Ze.dispose(),x.dispose(),G.dispose(),he.dispose(),P.dispose(),ge.dispose(),Le.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Ft),Ce.removeEventListener("sessionend",ct),me&&(me.dispose(),me=null),Lt.stop()};function fe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=_t.autoReset,H=ae.enabled,V=ae.autoUpdate,$=ae.needsUpdate,z=ae.type;Ne(),_t.autoReset=w,ae.enabled=H,ae.autoUpdate=V,ae.needsUpdate=$,ae.type=z}function _e(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xe(w){const H=w.target;H.removeEventListener("dispose",xe),Ge(H)}function Ge(w){ke(w),Ze.remove(w)}function ke(w){const H=Ze.get(w).programs;H!==void 0&&(H.forEach(function(V){Le.releaseProgram(V)}),w.isShaderMaterial&&Le.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,V,$,z,Ee){H===null&&(H=Oe);const Ie=z.isMesh&&z.matrixWorld.determinant()<0,He=ll(w,H,V,$,z);we.setMaterial($,Ie);let Ve=V.index,qe=1;if($.wireframe===!0){if(Ve=ce.getWireframeAttribute(V),Ve===void 0)return;qe=2}const Je=V.drawRange,Qe=V.attributes.position;let St=Je.start*qe,en=(Je.start+Je.count)*qe;Ee!==null&&(St=Math.max(St,Ee.start*qe),en=Math.min(en,(Ee.start+Ee.count)*qe)),Ve!==null?(St=Math.max(St,0),en=Math.min(en,Ve.count)):Qe!=null&&(St=Math.max(St,0),en=Math.min(en,Qe.count));const Ht=en-St;if(Ht<0||Ht===1/0)return;P.setup(z,$,He,V,Ve);let _n,Pt=$e;if(Ve!==null&&(_n=de.get(Ve),Pt=Fe,Pt.setIndex(_n)),z.isMesh)$.wireframe===!0?(we.setLineWidth($.wireframeLinewidth*nt()),Pt.setMode(X.LINES)):Pt.setMode(X.TRIANGLES);else if(z.isLine){let rt=$.linewidth;rt===void 0&&(rt=1),we.setLineWidth(rt*nt()),z.isLineSegments?Pt.setMode(X.LINES):z.isLineLoop?Pt.setMode(X.LINE_LOOP):Pt.setMode(X.LINE_STRIP)}else z.isPoints?Pt.setMode(X.POINTS):z.isSprite&&Pt.setMode(X.TRIANGLES);if(z.isBatchedMesh)Pt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)Pt.renderInstances(St,Ht,z.count);else if(V.isInstancedBufferGeometry){const rt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ks=Math.min(V.instanceCount,rt);Pt.renderInstances(St,Ht,ks)}else Pt.render(St,Ht)};function ht(w,H,V){w.transparent===!0&&w.side===ei&&w.forceSinglePass===!1?(w.side=gn,w.needsUpdate=!0,Pi(w,H,V),w.side=Ci,w.needsUpdate=!0,Pi(w,H,V),w.side=ei):Pi(w,H,V)}this.compile=function(w,H,V=null){V===null&&(V=w),m=Ue.get(V),m.init(),M.push(m),V.traverseVisible(function(z){z.isLight&&z.layers.test(H.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),w!==V&&w.traverseVisible(function(z){z.isLight&&z.layers.test(H.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(y._useLegacyLights);const $=new Set;return w.traverse(function(z){const Ee=z.material;if(Ee)if(Array.isArray(Ee))for(let Ie=0;Ie<Ee.length;Ie++){const He=Ee[Ie];ht(He,V,z),$.add(He)}else ht(Ee,V,z),$.add(Ee)}),M.pop(),m=null,$},this.compileAsync=function(w,H,V=null){const $=this.compile(w,H,V);return new Promise(z=>{function Ee(){if($.forEach(function(Ie){Ze.get(Ie).currentProgram.isReady()&&$.delete(Ie)}),$.size===0){z(w);return}setTimeout(Ee,10)}De.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let dt=null;function Ut(w){dt&&dt(w)}function Ft(){Lt.stop()}function ct(){Lt.start()}const Lt=new sg;Lt.setAnimationLoop(Ut),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(w){dt=w,Ce.setAnimationLoop(w),w===null?Lt.stop():Lt.start()},Ce.addEventListener("sessionstart",Ft),Ce.addEventListener("sessionend",ct),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(H),H=Ce.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,H,L),m=Ue.get(w,M.length),m.init(),M.push(m),be.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),K.setFromProjectionMatrix(be),oe=this.localClippingEnabled,Y=it.init(this.clippingPlanes,oe),b=Ae.get(w,p.length),b.init(),p.push(b),Sn(w,H,0,y.sortObjects),b.finish(),y.sortObjects===!0&&b.sort(te,ne),this.info.render.frame++,Y===!0&&it.beginShadows();const V=m.state.shadowsArray;if(ae.render(V,w,H),Y===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset(),ut.render(b,w),m.setupLights(y._useLegacyLights),H.isArrayCamera){const $=H.cameras;for(let z=0,Ee=$.length;z<Ee;z++){const Ie=$[z];Oo(b,w,Ie,Ie.viewport)}}else Oo(b,w,H);L!==null&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(y,w,H),P.resetDefaultState(),J=-1,S=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function Sn(w,H,V,$){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){$&&le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(be);const Ie=he.update(w),He=w.material;He.visible&&b.push(w,Ie,He,V,le.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){const Ie=he.update(w),He=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),le.copy(w.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),le.copy(Ie.boundingSphere.center)),le.applyMatrix4(w.matrixWorld).applyMatrix4(be)),Array.isArray(He)){const Ve=Ie.groups;for(let qe=0,Je=Ve.length;qe<Je;qe++){const Qe=Ve[qe],St=He[Qe.materialIndex];St&&St.visible&&b.push(w,Ie,St,V,le.z,Qe)}}else He.visible&&b.push(w,Ie,He,V,le.z,null)}}const Ee=w.children;for(let Ie=0,He=Ee.length;Ie<He;Ie++)Sn(Ee[Ie],H,V,$)}function Oo(w,H,V,$){const z=w.opaque,Ee=w.transmissive,Ie=w.transparent;m.setupLightsView(V),Y===!0&&it.setGlobalState(y.clippingPlanes,V),Ee.length>0&&al(z,Ee,H,V),$&&we.viewport(R.copy($)),z.length>0&&Bs(z,H,V),Ee.length>0&&Bs(Ee,H,V),Ie.length>0&&Bs(Ie,H,V),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function al(w,H,V,$){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const Ee=We.isWebGL2;me===null&&(me=new Ds(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")?To:Ki,minFilter:Ps,samples:Ee?4:0})),y.getDrawingBufferSize(Be),Ee?me.setSize(Be.x,Be.y):me.setSize(Ya(Be.x),Ya(Be.y));const Ie=y.getRenderTarget();y.setRenderTarget(me),y.getClearColor(se),B=y.getClearAlpha(),B<1&&y.setClearColor(16777215,.5),y.clear();const He=y.toneMapping;y.toneMapping=Yi,Bs(w,V,$),C.updateMultisampleRenderTarget(me),C.updateRenderTargetMipmap(me);let Ve=!1;for(let qe=0,Je=H.length;qe<Je;qe++){const Qe=H[qe],St=Qe.object,en=Qe.geometry,Ht=Qe.material,_n=Qe.group;if(Ht.side===ei&&St.layers.test($.layers)){const Pt=Ht.side;Ht.side=gn,Ht.needsUpdate=!0,Uo(St,V,$,en,Ht,_n),Ht.side=Pt,Ht.needsUpdate=!0,Ve=!0}}Ve===!0&&(C.updateMultisampleRenderTarget(me),C.updateRenderTargetMipmap(me)),y.setRenderTarget(Ie),y.setClearColor(se,B),y.toneMapping=He}function Bs(w,H,V){const $=H.isScene===!0?H.overrideMaterial:null;for(let z=0,Ee=w.length;z<Ee;z++){const Ie=w[z],He=Ie.object,Ve=Ie.geometry,qe=$===null?Ie.material:$,Je=Ie.group;He.layers.test(V.layers)&&Uo(He,H,V,Ve,qe,Je)}}function Uo(w,H,V,$,z,Ee){w.onBeforeRender(y,H,V,$,z,Ee),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(y,H,V,$,w,Ee),z.transparent===!0&&z.side===ei&&z.forceSinglePass===!1?(z.side=gn,z.needsUpdate=!0,y.renderBufferDirect(V,H,$,z,w,Ee),z.side=Ci,z.needsUpdate=!0,y.renderBufferDirect(V,H,$,z,w,Ee),z.side=ei):y.renderBufferDirect(V,H,$,z,w,Ee),w.onAfterRender(y,H,V,$,z,Ee)}function Pi(w,H,V){H.isScene!==!0&&(H=Oe);const $=Ze.get(w),z=m.state.lights,Ee=m.state.shadowsArray,Ie=z.state.version,He=Le.getParameters(w,z.state,Ee,H,V),Ve=Le.getProgramCacheKey(He);let qe=$.programs;$.environment=w.isMeshStandardMaterial?H.environment:null,$.fog=H.fog,$.envMap=(w.isMeshStandardMaterial?G:x).get(w.envMap||$.environment),qe===void 0&&(w.addEventListener("dispose",xe),qe=new Map,$.programs=qe);let Je=qe.get(Ve);if(Je!==void 0){if($.currentProgram===Je&&$.lightsStateVersion===Ie)return is(w,He),Je}else He.uniforms=Le.getUniforms(w),w.onBuild(V,He,y),w.onBeforeCompile(He,y),Je=Le.acquireProgram(He,Ve),qe.set(Ve,Je),$.uniforms=He.uniforms;const Qe=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Qe.clippingPlanes=it.uniform),is(w,He),$.needsLights=cl(w),$.lightsStateVersion=Ie,$.needsLights&&(Qe.ambientLightColor.value=z.state.ambient,Qe.lightProbe.value=z.state.probe,Qe.directionalLights.value=z.state.directional,Qe.directionalLightShadows.value=z.state.directionalShadow,Qe.spotLights.value=z.state.spot,Qe.spotLightShadows.value=z.state.spotShadow,Qe.rectAreaLights.value=z.state.rectArea,Qe.ltc_1.value=z.state.rectAreaLTC1,Qe.ltc_2.value=z.state.rectAreaLTC2,Qe.pointLights.value=z.state.point,Qe.pointLightShadows.value=z.state.pointShadow,Qe.hemisphereLights.value=z.state.hemi,Qe.directionalShadowMap.value=z.state.directionalShadowMap,Qe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Qe.spotShadowMap.value=z.state.spotShadowMap,Qe.spotLightMatrix.value=z.state.spotLightMatrix,Qe.spotLightMap.value=z.state.spotLightMap,Qe.pointShadowMap.value=z.state.pointShadowMap,Qe.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=Je,$.uniformsList=null,Je}function hi(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=Ba.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function is(w,H){const V=Ze.get(w);V.outputColorSpace=H.outputColorSpace,V.batching=H.batching,V.instancing=H.instancing,V.instancingColor=H.instancingColor,V.skinning=H.skinning,V.morphTargets=H.morphTargets,V.morphNormals=H.morphNormals,V.morphColors=H.morphColors,V.morphTargetsCount=H.morphTargetsCount,V.numClippingPlanes=H.numClippingPlanes,V.numIntersection=H.numClipIntersection,V.vertexAlphas=H.vertexAlphas,V.vertexTangents=H.vertexTangents,V.toneMapping=H.toneMapping}function ll(w,H,V,$,z){H.isScene!==!0&&(H=Oe),C.resetTextureUnits();const Ee=H.fog,Ie=$.isMeshStandardMaterial?H.environment:null,He=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Zt,Ve=($.isMeshStandardMaterial?G:x).get($.envMap||Ie),qe=$.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Je=!!V.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Qe=!!V.morphAttributes.position,St=!!V.morphAttributes.normal,en=!!V.morphAttributes.color;let Ht=Yi;$.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ht=y.toneMapping);const _n=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Pt=_n!==void 0?_n.length:0,rt=Ze.get($),ks=m.state.lights;if(Y===!0&&(oe===!0||w!==S)){const Dt=w===S&&$.id===J;it.setState($,w,Dt)}let Nt=!1;$.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==ks.state.version||rt.outputColorSpace!==He||z.isBatchedMesh&&rt.batching===!1||!z.isBatchedMesh&&rt.batching===!0||z.isInstancedMesh&&rt.instancing===!1||!z.isInstancedMesh&&rt.instancing===!0||z.isSkinnedMesh&&rt.skinning===!1||!z.isSkinnedMesh&&rt.skinning===!0||z.isInstancedMesh&&rt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&rt.instancingColor===!1&&z.instanceColor!==null||rt.envMap!==Ve||$.fog===!0&&rt.fog!==Ee||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==it.numPlanes||rt.numIntersection!==it.numIntersection)||rt.vertexAlphas!==qe||rt.vertexTangents!==Je||rt.morphTargets!==Qe||rt.morphNormals!==St||rt.morphColors!==en||rt.toneMapping!==Ht||We.isWebGL2===!0&&rt.morphTargetsCount!==Pt)&&(Nt=!0):(Nt=!0,rt.__version=$.version);let qn=rt.currentProgram;Nt===!0&&(qn=Pi($,H,z));let Zr=!1,Di=!1,Hs=!1;const $t=qn.getUniforms(),Yn=rt.uniforms;if(we.useProgram(qn.program)&&(Zr=!0,Di=!0,Hs=!0),$.id!==J&&(J=$.id,Di=!0),Zr||S!==w){$t.setValue(X,"projectionMatrix",w.projectionMatrix),$t.setValue(X,"viewMatrix",w.matrixWorldInverse);const Dt=$t.map.cameraPosition;Dt!==void 0&&Dt.setValue(X,le.setFromMatrixPosition(w.matrixWorld)),We.logarithmicDepthBuffer&&$t.setValue(X,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&$t.setValue(X,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,Di=!0,Hs=!0)}if(z.isSkinnedMesh){$t.setOptional(X,z,"bindMatrix"),$t.setOptional(X,z,"bindMatrixInverse");const Dt=z.skeleton;Dt&&(We.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),$t.setValue(X,"boneTexture",Dt.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&($t.setOptional(X,z,"batchingTexture"),$t.setValue(X,"batchingTexture",z._matricesTexture,C));const dn=V.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0&&We.isWebGL2===!0)&&je.update(z,V,qn),(Di||rt.receiveShadow!==z.receiveShadow)&&(rt.receiveShadow=z.receiveShadow,$t.setValue(X,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Yn.envMap.value=Ve,Yn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Di&&($t.setValue(X,"toneMappingExposure",y.toneMappingExposure),rt.needsLights&&Kr(Yn,Hs),Ee&&$.fog===!0&&ve.refreshFogUniforms(Yn,Ee),ve.refreshMaterialUniforms(Yn,$,ee,q,me),Ba.upload(X,hi(rt),Yn,C)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ba.upload(X,hi(rt),Yn,C),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&$t.setValue(X,"center",z.center),$t.setValue(X,"modelViewMatrix",z.modelViewMatrix),$t.setValue(X,"normalMatrix",z.normalMatrix),$t.setValue(X,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Dt=$.uniformsGroups;for(let kn=0,fn=Dt.length;kn<fn;kn++)if(We.isWebGL2){const Vs=Dt[kn];ge.update(Vs,qn),ge.bind(Vs,qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qn}function Kr(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function cl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,H,V){Ze.get(w.texture).__webglTexture=H,Ze.get(w.depthTexture).__webglTexture=V;const $=Ze.get(w);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=V===void 0,$.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,H){const V=Ze.get(w);V.__webglFramebuffer=H,V.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(w,H=0,V=0){L=w,I=H,D=V;let $=!0,z=null,Ee=!1,Ie=!1;if(w){const Ve=Ze.get(w);Ve.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(X.FRAMEBUFFER,null),$=!1):Ve.__webglFramebuffer===void 0?C.setupRenderTarget(w):Ve.__hasExternalTextures&&C.rebindTextures(w,Ze.get(w.texture).__webglTexture,Ze.get(w.depthTexture).__webglTexture);const qe=w.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ie=!0);const Je=Ze.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Je[H])?z=Je[H][V]:z=Je[H],Ee=!0):We.isWebGL2&&w.samples>0&&C.useMultisampledRTT(w)===!1?z=Ze.get(w).__webglMultisampledFramebuffer:Array.isArray(Je)?z=Je[V]:z=Je,R.copy(w.viewport),j.copy(w.scissor),Q=w.scissorTest}else R.copy(ie).multiplyScalar(ee).floor(),j.copy(O).multiplyScalar(ee).floor(),Q=pe;if(we.bindFramebuffer(X.FRAMEBUFFER,z)&&We.drawBuffers&&$&&we.drawBuffers(w,z),we.viewport(R),we.scissor(j),we.setScissorTest(Q),Ee){const Ve=Ze.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ve.__webglTexture,V)}else if(Ie){const Ve=Ze.get(w.texture),qe=H||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ve.__webglTexture,V||0,qe)}J=-1},this.readRenderTargetPixels=function(w,H,V,$,z,Ee,Ie){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Ze.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(He=He[Ie]),He){we.bindFramebuffer(X.FRAMEBUFFER,He);try{const Ve=w.texture,qe=Ve.format,Je=Ve.type;if(qe!==Dn&&Se.convert(qe)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Qe=Je===To&&(De.has("EXT_color_buffer_half_float")||We.isWebGL2&&De.has("EXT_color_buffer_float"));if(Je!==Ki&&Se.convert(Je)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Je===xi&&(We.isWebGL2||De.has("OES_texture_float")||De.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-$&&V>=0&&V<=w.height-z&&X.readPixels(H,V,$,z,Se.convert(qe),Se.convert(Je),Ee)}finally{const Ve=L!==null?Ze.get(L).__webglFramebuffer:null;we.bindFramebuffer(X.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(w,H,V=0){const $=Math.pow(2,-V),z=Math.floor(H.image.width*$),Ee=Math.floor(H.image.height*$);C.setTexture2D(H,0),X.copyTexSubImage2D(X.TEXTURE_2D,V,0,0,w.x,w.y,z,Ee),we.unbindTexture()},this.copyTextureToTexture=function(w,H,V,$=0){const z=H.image.width,Ee=H.image.height,Ie=Se.convert(V.format),He=Se.convert(V.type);C.setTexture2D(V,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,V.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,V.unpackAlignment),H.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,$,w.x,w.y,z,Ee,Ie,He,H.image.data):H.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,$,w.x,w.y,H.mipmaps[0].width,H.mipmaps[0].height,Ie,H.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,$,w.x,w.y,Ie,He,H.image),$===0&&V.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(w,H,V,$,z=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=w.max.x-w.min.x+1,Ie=w.max.y-w.min.y+1,He=w.max.z-w.min.z+1,Ve=Se.convert($.format),qe=Se.convert($.type);let Je;if($.isData3DTexture)C.setTexture3D($,0),Je=X.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)C.setTexture2DArray($,0),Je=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,$.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,$.unpackAlignment);const Qe=X.getParameter(X.UNPACK_ROW_LENGTH),St=X.getParameter(X.UNPACK_IMAGE_HEIGHT),en=X.getParameter(X.UNPACK_SKIP_PIXELS),Ht=X.getParameter(X.UNPACK_SKIP_ROWS),_n=X.getParameter(X.UNPACK_SKIP_IMAGES),Pt=V.isCompressedTexture?V.mipmaps[z]:V.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Pt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Pt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,w.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,w.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,w.min.z),V.isDataTexture||V.isData3DTexture?X.texSubImage3D(Je,z,H.x,H.y,H.z,Ee,Ie,He,Ve,qe,Pt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Je,z,H.x,H.y,H.z,Ee,Ie,He,Ve,Pt.data)):X.texSubImage3D(Je,z,H.x,H.y,H.z,Ee,Ie,He,Ve,qe,Pt),X.pixelStorei(X.UNPACK_ROW_LENGTH,Qe),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,St),X.pixelStorei(X.UNPACK_SKIP_PIXELS,en),X.pixelStorei(X.UNPACK_SKIP_ROWS,Ht),X.pixelStorei(X.UNPACK_SKIP_IMAGES,_n),z===0&&$.generateMipmaps&&X.generateMipmap(Je),we.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),we.unbindTexture()},this.resetState=function(){I=0,D=0,L=null,we.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===bu?"display-p3":"srgb",t.unpackColorSpace=bt.workingColorSpace===il?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?Cs:Gm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Cs?zt:Zt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class IC extends hg{}IC.prototype.isWebGL1Renderer=!0;class NC extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class OC{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new F;class Au{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Au(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Jf=new F,Qf=new Rt,ep=new Rt,UC=new F,tp=new mt,wa=new F,Cc=new li,np=new mt,Rc=new Do;class FC extends Nn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Od,this.bindMatrix=new mt,this.bindMatrixInverse=new mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ai),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wa),this.boundingBox.expandByPoint(wa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wa),this.boundingSphere.expandByPoint(wa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cc.copy(this.boundingSphere),Cc.applyMatrix4(s),e.ray.intersectsSphere(Cc)!==!1&&(np.copy(s).invert(),Rc.copy(e.ray).applyMatrix4(np),!(this.boundingBox!==null&&Rc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Rt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Od?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===j0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Qf.fromBufferAttribute(s.attributes.skinIndex,e),ep.fromBufferAttribute(s.attributes.skinWeight,e),Jf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=ep.getComponent(r);if(o!==0){const a=Qf.getComponent(r);tp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(UC.copy(Jf).applyMatrix4(tp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class dg extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class BC extends Qt{constructor(e=null,t=1,n=1,s,r,o,a,l,u=Kt,h=Kt,d,f){super(null,o,a,l,u,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ip=new mt,kC=new mt;class wu{constructor(e=[],t=[]){this.uuid=Xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new mt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new mt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:kC;ip.multiplyMatrices(a,t[r]),ip.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new wu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new BC(t,e,e,Dn,xi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new dg),this.bones.push(o),this.boneInverses.push(new mt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class eu extends hn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gr=new mt,sp=new mt,Ca=[],rp=new ai,HC=new mt,ho=new Nn,fo=new li;class VC extends Nn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new eu(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,HC)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),rp.copy(e.boundingBox).applyMatrix4(gr),this.boundingBox.union(rp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),fo.copy(e.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(fo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fo.copy(this.boundingSphere),fo.applyMatrix4(n),e.ray.intersectsSphere(fo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gr),sp.multiplyMatrices(n,gr),ho.matrixWorld=sp,ho.raycast(e,Ca);for(let o=0,a=Ca.length;o<a;o++){const l=Ca[o];l.instanceId=r,l.object=this,t.push(l)}Ca.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new eu(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class fg extends si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const op=new F,ap=new F,lp=new mt,Lc=new Do,Ra=new li;class Cu extends Bt{constructor(e=new ci,t=new fg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)op.fromBufferAttribute(t,s-1),ap.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=op.distanceTo(ap);e.setAttribute("lineDistance",new Ai(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,e.ray.intersectsSphere(Ra)===!1)return;lp.copy(s).invert(),Lc.copy(e.ray).applyMatrix4(lp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new F,h=new F,d=new F,f=new F,_=this.isLineSegments?2:1,v=n.index,m=n.attributes.position;if(v!==null){const p=Math.max(0,o.start),M=Math.min(v.count,o.start+o.count);for(let y=p,A=M-1;y<A;y+=_){const I=v.getX(y),D=v.getX(y+1);if(u.fromBufferAttribute(m,I),h.fromBufferAttribute(m,D),Lc.distanceSqToSegment(u,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const J=e.ray.origin.distanceTo(f);J<e.near||J>e.far||t.push({distance:J,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let y=p,A=M-1;y<A;y+=_){if(u.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),Lc.distanceSqToSegment(u,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(f);D<e.near||D>e.far||t.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const cp=new F,up=new F;class zC extends Cu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)cp.fromBufferAttribute(t,s),up.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+cp.distanceTo(up);e.setAttribute("lineDistance",new Ai(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class GC extends Cu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class pg extends si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hp=new mt,tu=new Do,La=new li,Pa=new F;class WC extends Bt{constructor(e=new ci,t=new pg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(s),La.radius+=r,e.ray.intersectsSphere(La)===!1)return;hp.copy(s).invert(),tu.copy(e.ray).applyMatrix4(hp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=f,b=_;v<b;v++){const m=u.getX(v);Pa.fromBufferAttribute(d,m),dp(Pa,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let v=f,b=_;v<b;v++)Pa.fromBufferAttribute(d,v),dp(Pa,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function dp(i,e,t,n,s,r,o){const a=tu.distanceSqToPoint(i);if(a<t){const l=new F;tu.closestPointToPoint(i,l),l.applyMatrix4(n);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Ru extends si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wm,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Li extends Ru{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new st(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new st(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new st(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Da(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function $C(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function XC(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function fp(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function mg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class No{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class jC extends No{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lf,endingEnd:lf}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case cf:r=e,a=2*t-n;break;case uf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cf:o=e,l=2*n-t;break;case uf:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,_=this._weightNext,v=(n-t)/(s-t),b=v*v,m=b*v,p=-f*m+2*f*b-f*v,M=(1+f)*m+(-1.5-2*f)*b+(-.5+f)*v+1,y=(-1-_)*m+(1.5+_)*b+.5*v,A=_*m-_*b;for(let I=0;I!==a;++I)r[I]=p*o[h+I]+M*o[u+I]+y*o[l+I]+A*o[d+I];return r}}class qC extends No{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,h=(n-t)/(s-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[u+f]*d+o[l+f]*h;return r}}class YC extends No{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ui{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Da(t,this.TimeBufferType),this.values=Da(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Da(e.times,Array),values:Da(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new YC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jC(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case So:t=this.InterpolantFactoryMethodDiscrete;break;case Fr:t=this.InterpolantFactoryMethodLinear;break;case sc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return So;case this.InterpolantFactoryMethodLinear:return Fr;case this.InterpolantFactoryMethodSmooth:return sc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&$C(s))for(let a=0,l=s.length;a!==l;++a){const u=s[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===sc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const u=e[a],h=e[a+1];if(u!==h&&(a!==1||u!==e[0]))if(s)l=!0;else{const d=a*n,f=d-n,_=d+n;for(let v=0;v!==n;++v){const b=t[d+v];if(b!==t[f+v]||b!==t[_+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,f=o*n;for(let _=0;_!==n;++_)t[f+_]=t[d+_]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,u=0;u!==n;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=Fr;class jr extends ui{}jr.prototype.ValueTypeName="bool";jr.prototype.ValueBufferType=Array;jr.prototype.DefaultInterpolation=So;jr.prototype.InterpolantFactoryMethodLinear=void 0;jr.prototype.InterpolantFactoryMethodSmooth=void 0;class gg extends ui{}gg.prototype.ValueTypeName="color";class Hr extends ui{}Hr.prototype.ValueTypeName="number";class KC extends No{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let u=e*a;for(let h=u+a;u!==h;u+=4)oi.slerpFlat(r,0,o,u-a,o,u,l);return r}}class Ns extends ui{InterpolantFactoryMethodLinear(e){return new KC(this.times,this.values,this.getValueSize(),e)}}Ns.prototype.ValueTypeName="quaternion";Ns.prototype.DefaultInterpolation=Fr;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class qr extends ui{}qr.prototype.ValueTypeName="string";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=So;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;class Vr extends ui{}Vr.prototype.ValueTypeName="vector";class ZC{constructor(e,t=-1,n,s=nT){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Xn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(QC(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ui.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],u=[];l.push((a+r-1)%r,a,(a+1)%r),u.push(0,1,0);const h=XC(l);l=fp(l,1,h),u=fp(u,1,h),!s&&l[0]===0&&(l.push(r),u.push(u[0])),o.push(new Hr(".morphTargetInfluences["+t[a].name+"]",l,u).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const u=e[a],h=u.name.match(r);if(h&&h.length>1){const d=h[1];let f=s[d];f||(s[d]=f=[]),f.push(u)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,f,_,v,b){if(_.length!==0){const m=[],p=[];mg(_,m,p,v),m.length!==0&&b.push(new d(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let d=0;d<u.length;d++){const f=u[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const _={};let v;for(v=0;v<f.length;v++)if(f[v].morphTargets)for(let b=0;b<f[v].morphTargets.length;b++)_[f[v].morphTargets[b]]=-1;for(const b in _){const m=[],p=[];for(let M=0;M!==f[v].morphTargets.length;++M){const y=f[v];m.push(y.time),p.push(y.morphTarget===b?1:0)}s.push(new Hr(".morphTargetInfluence["+b+"]",m,p))}l=_.length*o}else{const _=".bones["+t[d].name+"]";n(Vr,_+".position",f,"pos",s),n(Ns,_+".quaternion",f,"rot",s),n(Vr,_+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function JC(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hr;case"vector":case"vector2":case"vector3":case"vector4":return Vr;case"color":return gg;case"quaternion":return Ns;case"bool":case"boolean":return jr;case"string":return qr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function QC(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=JC(i.type);if(i.times===void 0){const t=[],n=[];mg(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ji={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class eR{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return u.push(h,d),this},this.removeHandler=function(h){const d=u.indexOf(h);return d!==-1&&u.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=u.length;d<f;d+=2){const _=u[d],v=u[d+1];if(_.global&&(_.lastIndex=0),_.test(h))return v}return null}}}const tR=new eR;class Yr{constructor(e){this.manager=e!==void 0?e:tR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Yr.DEFAULT_MATERIAL_NAME="__DEFAULT";const bi={};class nR extends Error{constructor(e,t){super(e),this.response=t}}class _g extends Yr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ji.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:n,onError:s});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=bi[e],d=u.body.getReader(),f=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),_=f?parseInt(f):0,v=_!==0;let b=0;const m=new ReadableStream({start(p){M();function M(){d.read().then(({done:y,value:A})=>{if(y)p.close();else{b+=A.byteLength;const I=new ProgressEvent("progress",{lengthComputable:v,loaded:b,total:_});for(let D=0,L=h.length;D<L;D++){const J=h[D];J.onProgress&&J.onProgress(I)}p.enqueue(A),M()}})}}});return new Response(m)}else throw new nR(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return u.json();default:if(a===void 0)return u.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,_=new TextDecoder(f);return u.arrayBuffer().then(v=>_.decode(v))}}}).then(u=>{ji.add(e,u);const h=bi[e];delete bi[e];for(let d=0,f=h.length;d<f;d++){const _=h[d];_.onLoad&&_.onLoad(u)}}).catch(u=>{const h=bi[e];if(h===void 0)throw this.manager.itemError(e),u;delete bi[e];for(let d=0,f=h.length;d<f;d++){const _=h[d];_.onError&&_.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class iR extends Yr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ji.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Mo("img");function l(){h(),ji.add(e,this),t&&t(this),r.manager.itemEnd(e)}function u(d){h(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class sR extends Yr{constructor(e){super(e)}load(e,t,n,s){const r=new Qt,o=new iR(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class ol extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Pc=new mt,pp=new F,mp=new F;class Lu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xu,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;pp.setFromMatrixPosition(e.matrixWorld),t.position.copy(pp),mp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mp),t.updateMatrixWorld(),Pc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rR extends Lu{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Br*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class oR extends ol{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new rR}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const gp=new mt,po=new F,Dc=new F;class aR extends Lu{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),po.setFromMatrixPosition(e.matrixWorld),n.position.copy(po),Dc.copy(n.position),Dc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Dc),n.updateMatrixWorld(),s.makeTranslation(-po.x,-po.y,-po.z),gp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gp)}}class lR extends ol{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new aR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cR extends Lu{constructor(){super(new Su(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vg extends ol{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new cR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class uR extends ol{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class yo{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class hR extends Yr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ji.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(u=>{t&&t(u),r.manager.itemEnd(e)}).catch(u=>{s&&s(u)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return ji.add(e,u),t&&t(u),r.manager.itemEnd(e),u}).catch(function(u){s&&s(u),ji.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ji.add(e,l),r.manager.itemStart(e)}}const Pu="\\[\\]\\.:\\/",dR=new RegExp("["+Pu+"]","g"),Du="[^"+Pu+"]",fR="[^"+Pu.replace("\\.","")+"]",pR=/((?:WC+[\/:])*)/.source.replace("WC",Du),mR=/(WCOD+)?/.source.replace("WCOD",fR),gR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Du),_R=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Du),vR=new RegExp("^"+pR+mR+gR+_R+"$"),ER=["material","materials","bones","map"];class bR{constructor(e,t,n){const s=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Tt{constructor(e,t,n){this.path=t,this.parsedPath=n||Tt.parseTrackName(t),this.node=Tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Tt.Composite(e,t,n):new Tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dR,"")}static parseTrackName(e){const t=vR.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);ER.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[s];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Tt.Composite=bR;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class _p{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Jt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vu);function vp(i,e){if(e===iT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Yc||e===zm){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Yc)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class yR extends Yr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new AR(t)}),this.register(function(t){return new OR(t)}),this.register(function(t){return new UR(t)}),this.register(function(t){return new FR(t)}),this.register(function(t){return new CR(t)}),this.register(function(t){return new RR(t)}),this.register(function(t){return new LR(t)}),this.register(function(t){return new PR(t)}),this.register(function(t){return new MR(t)}),this.register(function(t){return new DR(t)}),this.register(function(t){return new wR(t)}),this.register(function(t){return new NR(t)}),this.register(function(t){return new IR(t)}),this.register(function(t){return new TR(t)}),this.register(function(t){return new BR(t)}),this.register(function(t){return new kR(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=yo.extractUrlBase(e);o=yo.resolveURL(u,this.path)}else o=yo.extractUrlBase(e);this.manager.itemStart(e);const a=function(u){s?s(u):console.error(u),r.manager.itemError(e),r.manager.itemEnd(e)},l=new _g(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{r.parse(u,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Eg){try{o[gt.KHR_BINARY_GLTF]=new HR(e)}catch(d){s&&s(d);return}r=JSON.parse(o[gt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new QR(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](u);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case gt.KHR_MATERIALS_UNLIT:o[d]=new SR;break;case gt.KHR_DRACO_MESH_COMPRESSION:o[d]=new VR(r,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:o[d]=new zR;break;case gt.KHR_MESH_QUANTIZATION:o[d]=new GR;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function xR(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class TR{constructor(e){this.parser=e,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let u;const h=new st(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Zt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new vg(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new lR(h),u.distance=d;break;case"spot":u=new oR(h),u.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),u.decay=2,Wi(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(u),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class SR{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ts}extendParams(e,t,n){const s=[];e.color=new st(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Zt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,zt))}return Promise.all(s)}}class MR{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class AR{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(a,a)}return Promise.all(r)}}class wR{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class CR{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new st(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,zt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class RR{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class LR{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new st().setRGB(a[0],a[1],a[2],Zt),Promise.all(r)}}class PR{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class DR{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new st().setRGB(a[0],a[1],a[2],Zt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,zt)),Promise.all(r)}}class IR{constructor(e){this.parser=e,this.name=gt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class NR{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class OR{constructor(e){this.parser=e,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class UR{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class FR{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class BR{constructor(e){this.name=gt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,u=s.byteLength||0,h=s.count,d=s.byteStride,f=new Uint8Array(a,l,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,s.mode,s.filter).then(function(_){return _.buffer}):o.ready.then(function(){const _=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(_),h,d,f,s.mode,s.filter),_})})}else return null}}class kR{constructor(e){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const u of s.primitives)if(u.mode!==Ln.TRIANGLES&&u.mode!==Ln.TRIANGLE_STRIP&&u.mode!==Ln.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(h=>(l[u]=h,l[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const h=u.pop(),d=h.isGroup?h.children:[h],f=u[0].count,_=[];for(const v of d){const b=new mt,m=new F,p=new oi,M=new F(1,1,1),y=new VC(v.geometry,v.material,f);for(let A=0;A<f;A++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,A),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,A),l.SCALE&&M.fromBufferAttribute(l.SCALE,A),y.setMatrixAt(A,b.compose(m,p,M));for(const A in l)if(A==="_COLOR_0"){const I=l[A];y.instanceColor=new eu(I.array,I.itemSize,I.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&v.geometry.setAttribute(A,l[A]);Bt.prototype.copy.call(y,v),this.parser.assignFinalMaterial(y),_.push(y)}return h.isGroup?(h.clear(),h.add(..._),h):_[0]}))}}const Eg="glTF",mo=12,Ep={JSON:1313821514,BIN:5130562};class HR{constructor(e){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,mo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Eg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-mo,r=new DataView(e,mo);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Ep.JSON){const u=new Uint8Array(e,mo+o,a);this.content=n.decode(u)}else if(l===Ep.BIN){const u=mo+o;this.body=e.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class VR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},u={};for(const h in o){const d=nu[h]||h.toLowerCase();a[d]=o[h]}for(const h in e.attributes){const d=nu[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],_=Mr[f.componentType];u[d]=_.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){s.decodeDracoFile(h,function(_){for(const v in _.attributes){const b=_.attributes[v],m=l[v];m!==void 0&&(b.normalized=m)}d(_)},a,u,Zt,f)})})}}class zR{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class GR{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}}class bg extends No{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,u=a*3,h=s-t,d=(n-t)/h,f=d*d,_=f*d,v=e*u,b=v-u,m=-2*_+3*f,p=_-f,M=1-m,y=p-f+d;for(let A=0;A!==a;A++){const I=o[b+A+a],D=o[b+A+l]*h,L=o[v+A+a],J=o[v+A]*h;r[A]=M*I+y*D+m*L+p*J}return r}}const WR=new oi;class $R extends bg{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return WR.fromArray(r).normalize().toArray(r),r}}const Ln={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Mr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bp={9728:Kt,9729:pn,9984:qc,9985:Nm,9986:Fa,9987:Ps},yp={33071:Pn,33648:Wa,10497:Or},Ic={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},XR={CUBICSPLINE:void 0,LINEAR:Fr,STEP:So},Nc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jR(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ru({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ci})),i.DefaultMaterial}function _s(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Wi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function qR(i,e,t){let n=!1,s=!1,r=!1;for(let u=0,h=e.length;u<h;u++){const d=e[u];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let u=0,h=e.length;u<h;u++){const d=e[u];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;o.push(f)}if(s){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(u){const h=u[0],d=u[1],f=u[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function YR(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function KR(i){let e;const t=i.extensions&&i.extensions[gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Oc(t.attributes):e=i.indices+":"+Oc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Oc(i.targets[n]);return e}function Oc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function iu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ZR(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const JR=new mt;class QR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new sR(this.options.manager):this.textureLoader=new hR(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _g(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return _s(r,a,s),Wi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[u,h]of o.children.entries())r(h,a.children[u])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(yo.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Ic[s.type],a=Mr[s.componentType],l=s.normalized===!0,u=new a(s.count*o);return Promise.resolve(new hn(u,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ic[s.type],u=Mr[s.componentType],h=u.BYTES_PER_ELEMENT,d=h*l,f=s.byteOffset||0,_=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,v=s.normalized===!0;let b,m;if(_&&_!==d){const p=Math.floor(f/_),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=t.cache.get(M);y||(b=new u(a,p*_,s.count*_/h),y=new OC(b,_/h),t.cache.add(M,y)),m=new Au(y,l,f%_/h,v)}else a===null?b=new u(s.count*l):b=new u(a,f,s.count*l),m=new hn(b,l,v);if(s.sparse!==void 0){const p=Ic.SCALAR,M=Mr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,A=s.sparse.values.byteOffset||0,I=new M(o[1],y,s.sparse.count*p),D=new u(o[2],A,s.sparse.count*l);a!==null&&(m=new hn(m.array.slice(),m.itemSize,m.normalized));for(let L=0,J=I.length;L<J;L++){const S=I[L];if(m.setX(S,D[L*l]),l>=2&&m.setY(S,D[L*l+1]),l>=3&&m.setZ(S,D[L*l+2]),l>=4&&m.setW(S,D[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=bp[f.magFilter]||pn,h.minFilter=bp[f.minFilter]||Ps,h.wrapS=yp[f.wrapS]||Or,h.wrapT=yp[f.wrapT]||Or,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",u=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){u=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(f,_){let v=f;t.isImageBitmapLoader===!0&&(v=function(b){const m=new Qt(b);m.needsUpdate=!0,f(m)}),t.load(yo.resolveURL(d,r.path),v,void 0,_)})}).then(function(d){return u===!0&&a.revokeObjectURL(l),d.userData.mimeType=o.mimeType||ZR(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[gt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new pg,si.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new fg,si.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ru}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},u=[];if(l[gt.KHR_MATERIALS_UNLIT]){const d=s[gt.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),u.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new st(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Zt),a.opacity=f[3]}d.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",d.baseColorTexture,zt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ei);const h=r.alphaMode||Nc.OPAQUE;if(h===Nc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Nc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ts&&(u.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ke(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Ts&&(u.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ts){const d=r.emissiveFactor;a.emissive=new st().setRGB(d[0],d[1],d[2],Zt)}return r.emissiveTexture!==void 0&&o!==Ts&&u.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,zt)),Promise.all(u).then(function(){const d=new o(a);return r.name&&(d.name=r.name),Wi(d,r),t.associations.set(d,{materials:e}),r.extensions&&_s(s,d,r),d})}createUniqueName(e){const t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return xp(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a],h=KR(u),d=s[h];if(d)o.push(d.promise);else{let f;u.extensions&&u.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?f=r(u):f=xp(new ci,u,t),s[h]={primitive:u,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,u=o.length;l<u;l++){const h=o[l].material===void 0?jR(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const u=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let _=0,v=h.length;_<v;_++){const b=h[_],m=o[_];let p;const M=u[_];if(m.mode===Ln.TRIANGLES||m.mode===Ln.TRIANGLE_STRIP||m.mode===Ln.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new FC(b,M):new Nn(b,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Ln.TRIANGLE_STRIP?p.geometry=vp(p.geometry,zm):m.mode===Ln.TRIANGLE_FAN&&(p.geometry=vp(p.geometry,Yc));else if(m.mode===Ln.LINES)p=new zC(b,M);else if(m.mode===Ln.LINE_STRIP)p=new Cu(b,M);else if(m.mode===Ln.LINE_LOOP)p=new GC(b,M);else if(m.mode===Ln.POINTS)p=new WC(b,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&YR(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Wi(p,r),m.extensions&&_s(s,p,m),t.assignFinalMaterial(p),d.push(p)}for(let _=0,v=d.length;_<v;_++)t.associations.set(d[_],{meshes:e,primitives:_});if(d.length===1)return r.extensions&&_s(s,d[0],r),d[0];const f=new Ss;r.extensions&&_s(s,f,r),t.associations.set(f,{meshes:e});for(let _=0,v=d.length;_<v;_++)f.add(d[_]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new ln(Xm.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Su(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Wi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let u=0,h=o.length;u<h;u++){const d=o[u];if(d){a.push(d);const f=new mt;r!==null&&f.fromArray(r.array,u*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new wu(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],u=[],h=[];for(let d=0,f=s.channels.length;d<f;d++){const _=s.channels[d],v=s.samplers[_.sampler],b=_.target,m=b.node,p=s.parameters!==void 0?s.parameters[v.input]:v.input,M=s.parameters!==void 0?s.parameters[v.output]:v.output;b.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),u.push(v),h.push(b))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(u),Promise.all(h)]).then(function(d){const f=d[0],_=d[1],v=d[2],b=d[3],m=d[4],p=[];for(let M=0,y=f.length;M<y;M++){const A=f[M],I=_[M],D=v[M],L=b[M],J=m[M];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const S=n._createAnimationTracks(A,I,D,L,J);if(S)for(let R=0;R<S.length;R++)p.push(S[R])}return new ZC(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,u=s.weights.length;l<u;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let u=0,h=a.length;u<h;u++)o.push(n.getDependency("node",a[u]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(u){const h=u[0],d=u[1],f=u[2];f!==null&&h.traverse(function(_){_.isSkinnedMesh&&_.bind(f,JR)});for(let _=0,v=d.length;_<v;_++)h.add(d[_]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(u){return s._getNodeRef(s.cameraCache,r.camera,u)})),s._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),this.nodeCache[e]=Promise.all(a).then(function(u){let h;if(r.isBone===!0?h=new dg:u.length>1?h=new Ss:u.length===1?h=u[0]:h=new Bt,h!==u[0])for(let d=0,f=u.length;d<f;d++)h.add(u[d]);if(r.name&&(h.userData.name=r.name,h.name=o),Wi(h,r),r.extensions&&_s(n,h,r),r.matrix!==void 0){const d=new mt;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Ss;n.name&&(r.name=s.createUniqueName(n.name)),Wi(r,n),n.extensions&&_s(t,r,n);const o=n.nodes||[],a=[];for(let l=0,u=o.length;l<u;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,d=l.length;h<d;h++)r.add(l[h]);const u=h=>{const d=new Map;for(const[f,_]of s.associations)(f instanceof si||f instanceof Qt)&&d.set(f,_);return h.traverse(f=>{const _=s.associations.get(f);_!=null&&d.set(f,_)}),d};return s.associations=u(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];zi[r.path]===zi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let u;switch(zi[r.path]){case zi.weights:u=Hr;break;case zi.rotation:u=Ns;break;case zi.position:case zi.scale:u=Vr;break;default:switch(n.itemSize){case 1:u=Hr;break;case 2:case 3:default:u=Vr;break}break}const h=s.interpolation!==void 0?XR[s.interpolation]:Fr,d=this._getArrayFromAccessor(n);for(let f=0,_=l.length;f<_;f++){const v=new u(l[f]+"."+zi[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=iu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Ns?$R:bg;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function eL(i,e,t){const n=e.attributes,s=new ai;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,u=a.max;if(l!==void 0&&u!==void 0){if(s.set(new F(l[0],l[1],l[2]),new F(u[0],u[1],u[2])),a.normalized){const h=iu(Mr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new F,l=new F;for(let u=0,h=r.length;u<h;u++){const d=r[u];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],_=f.min,v=f.max;if(_!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(_[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(_[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(_[2]),Math.abs(v[2]))),f.normalized){const b=iu(Mr[f.componentType]);l.multiplyScalar(b)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new li;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function xp(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=nu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return bt.workingColorSpace!==Zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bt.workingColorSpace}" not supported.`),Wi(i,e),eL(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?qR(i,e.targets,t):i})}const Tp={type:"change"},Uc={type:"start"},Sp={type:"end"},Ia=new Do,Mp=new Gi,tL=Math.cos(70*Xm.DEG2RAD);class nL extends Fs{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Js.ROTATE,MIDDLE:Js.DOLLY,RIGHT:Js.PAN},this.touches={ONE:Qs.ROTATE,TWO:Qs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Ue),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ue),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Tp),n.update(),r=s.NONE},this.update=function(){const P=new F,ge=new oi().setFromUnitVectors(e.up,new F(0,1,0)),Ne=ge.clone().invert(),Ce=new F,fe=new oi,N=new F,_e=2*Math.PI;return function(Ge=null){const ke=n.object.position;P.copy(ke).sub(n.target),P.applyQuaternion(ge),a.setFromVector3(P),n.autoRotate&&r===s.NONE&&Q(R(Ge)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ht=n.minAzimuthAngle,dt=n.maxAzimuthAngle;isFinite(ht)&&isFinite(dt)&&(ht<-Math.PI?ht+=_e:ht>Math.PI&&(ht-=_e),dt<-Math.PI?dt+=_e:dt>Math.PI&&(dt-=_e),ht<=dt?a.theta=Math.max(ht,Math.min(dt,a.theta)):a.theta=a.theta>(ht+dt)/2?Math.max(ht,a.theta):Math.min(dt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&D||n.object.isOrthographicCamera?a.radius=ie(a.radius):a.radius=ie(a.radius*u),P.setFromSpherical(a),P.applyQuaternion(Ne),ke.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Ut=!1;if(n.zoomToCursor&&D){let Ft=null;if(n.object.isPerspectiveCamera){const ct=P.length();Ft=ie(ct*u);const Lt=ct-Ft;n.object.position.addScaledVector(A,Lt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const ct=new F(I.x,I.y,0);ct.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Ut=!0;const Lt=new F(I.x,I.y,0);Lt.unproject(n.object),n.object.position.sub(Lt).add(ct),n.object.updateMatrixWorld(),Ft=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ft!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ft).add(n.object.position):(Ia.origin.copy(n.object.position),Ia.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ia.direction))<tL?e.lookAt(n.target):(Mp.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ia.intersectPlane(Mp,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Ut=!0);return u=1,D=!1,Ut||Ce.distanceToSquared(n.object.position)>o||8*(1-fe.dot(n.object.quaternion))>o||N.distanceToSquared(n.target)>0?(n.dispatchEvent(Tp),Ce.copy(n.object.position),fe.copy(n.object.quaternion),N.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ut),n.domElement.removeEventListener("pointerdown",C),n.domElement.removeEventListener("pointercancel",G),n.domElement.removeEventListener("wheel",he),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",G),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ue),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new _p,l=new _p;let u=1;const h=new F,d=new Ke,f=new Ke,_=new Ke,v=new Ke,b=new Ke,m=new Ke,p=new Ke,M=new Ke,y=new Ke,A=new F,I=new Ke;let D=!1;const L=[],J={};let S=!1;function R(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function j(P){const ge=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*ge)}function Q(P){l.theta-=P}function se(P){l.phi-=P}const B=function(){const P=new F;return function(Ne,Ce){P.setFromMatrixColumn(Ce,0),P.multiplyScalar(-Ne),h.add(P)}}(),W=function(){const P=new F;return function(Ne,Ce){n.screenSpacePanning===!0?P.setFromMatrixColumn(Ce,1):(P.setFromMatrixColumn(Ce,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(Ne),h.add(P)}}(),q=function(){const P=new F;return function(Ne,Ce){const fe=n.domElement;if(n.object.isPerspectiveCamera){const N=n.object.position;P.copy(N).sub(n.target);let _e=P.length();_e*=Math.tan(n.object.fov/2*Math.PI/180),B(2*Ne*_e/fe.clientHeight,n.object.matrix),W(2*Ce*_e/fe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(Ne*(n.object.right-n.object.left)/n.object.zoom/fe.clientWidth,n.object.matrix),W(Ce*(n.object.top-n.object.bottom)/n.object.zoom/fe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ee(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function te(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ne(P,ge){if(!n.zoomToCursor)return;D=!0;const Ne=n.domElement.getBoundingClientRect(),Ce=P-Ne.left,fe=ge-Ne.top,N=Ne.width,_e=Ne.height;I.x=Ce/N*2-1,I.y=-(fe/_e)*2+1,A.set(I.x,I.y,1).unproject(n.object).sub(n.object.position).normalize()}function ie(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function O(P){d.set(P.clientX,P.clientY)}function pe(P){ne(P.clientX,P.clientX),p.set(P.clientX,P.clientY)}function K(P){v.set(P.clientX,P.clientY)}function Y(P){f.set(P.clientX,P.clientY),_.subVectors(f,d).multiplyScalar(n.rotateSpeed);const ge=n.domElement;Q(2*Math.PI*_.x/ge.clientHeight),se(2*Math.PI*_.y/ge.clientHeight),d.copy(f),n.update()}function oe(P){M.set(P.clientX,P.clientY),y.subVectors(M,p),y.y>0?ee(j(y.y)):y.y<0&&te(j(y.y)),p.copy(M),n.update()}function me(P){b.set(P.clientX,P.clientY),m.subVectors(b,v).multiplyScalar(n.panSpeed),q(m.x,m.y),v.copy(b),n.update()}function be(P){ne(P.clientX,P.clientY),P.deltaY<0?te(j(P.deltaY)):P.deltaY>0&&ee(j(P.deltaY)),n.update()}function Be(P){let ge=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?se(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(0,n.keyPanSpeed),ge=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?se(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(0,-n.keyPanSpeed),ge=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?Q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(n.keyPanSpeed,0),ge=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?Q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(-n.keyPanSpeed,0),ge=!0;break}ge&&(P.preventDefault(),n.update())}function le(P){if(L.length===1)d.set(P.pageX,P.pageY);else{const ge=Se(P),Ne=.5*(P.pageX+ge.x),Ce=.5*(P.pageY+ge.y);d.set(Ne,Ce)}}function Oe(P){if(L.length===1)v.set(P.pageX,P.pageY);else{const ge=Se(P),Ne=.5*(P.pageX+ge.x),Ce=.5*(P.pageY+ge.y);v.set(Ne,Ce)}}function nt(P){const ge=Se(P),Ne=P.pageX-ge.x,Ce=P.pageY-ge.y,fe=Math.sqrt(Ne*Ne+Ce*Ce);p.set(0,fe)}function X(P){n.enableZoom&&nt(P),n.enablePan&&Oe(P)}function kt(P){n.enableZoom&&nt(P),n.enableRotate&&le(P)}function De(P){if(L.length==1)f.set(P.pageX,P.pageY);else{const Ne=Se(P),Ce=.5*(P.pageX+Ne.x),fe=.5*(P.pageY+Ne.y);f.set(Ce,fe)}_.subVectors(f,d).multiplyScalar(n.rotateSpeed);const ge=n.domElement;Q(2*Math.PI*_.x/ge.clientHeight),se(2*Math.PI*_.y/ge.clientHeight),d.copy(f)}function We(P){if(L.length===1)b.set(P.pageX,P.pageY);else{const ge=Se(P),Ne=.5*(P.pageX+ge.x),Ce=.5*(P.pageY+ge.y);b.set(Ne,Ce)}m.subVectors(b,v).multiplyScalar(n.panSpeed),q(m.x,m.y),v.copy(b)}function we(P){const ge=Se(P),Ne=P.pageX-ge.x,Ce=P.pageY-ge.y,fe=Math.sqrt(Ne*Ne+Ce*Ce);M.set(0,fe),y.set(0,Math.pow(M.y/p.y,n.zoomSpeed)),ee(y.y),p.copy(M);const N=(P.pageX+ge.x)*.5,_e=(P.pageY+ge.y)*.5;ne(N,_e)}function _t(P){n.enableZoom&&we(P),n.enablePan&&We(P)}function Ze(P){n.enableZoom&&we(P),n.enableRotate&&De(P)}function C(P){n.enabled!==!1&&(L.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",x),n.domElement.addEventListener("pointerup",G)),je(P),P.pointerType==="touch"?it(P):de(P))}function x(P){n.enabled!==!1&&(P.pointerType==="touch"?ae(P):ce(P))}function G(P){$e(P),L.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",G)),n.dispatchEvent(Sp),r=s.NONE}function de(P){let ge;switch(P.button){case 0:ge=n.mouseButtons.LEFT;break;case 1:ge=n.mouseButtons.MIDDLE;break;case 2:ge=n.mouseButtons.RIGHT;break;default:ge=-1}switch(ge){case Js.DOLLY:if(n.enableZoom===!1)return;pe(P),r=s.DOLLY;break;case Js.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;K(P),r=s.PAN}else{if(n.enableRotate===!1)return;O(P),r=s.ROTATE}break;case Js.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;O(P),r=s.ROTATE}else{if(n.enablePan===!1)return;K(P),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Uc)}function ce(P){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;Y(P);break;case s.DOLLY:if(n.enableZoom===!1)return;oe(P);break;case s.PAN:if(n.enablePan===!1)return;me(P);break}}function he(P){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(P.preventDefault(),n.dispatchEvent(Uc),be(Le(P)),n.dispatchEvent(Sp))}function Le(P){const ge=P.deltaMode,Ne={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(ge){case 1:Ne.deltaY*=16;break;case 2:Ne.deltaY*=100;break}return P.ctrlKey&&!S&&(Ne.deltaY*=10),Ne}function ve(P){P.key==="Control"&&(S=!0,document.addEventListener("keyup",Ae,{passive:!0,capture:!0}))}function Ae(P){P.key==="Control"&&(S=!1,document.removeEventListener("keyup",Ae,{passive:!0,capture:!0}))}function Ue(P){n.enabled===!1||n.enablePan===!1||Be(P)}function it(P){switch(Fe(P),L.length){case 1:switch(n.touches.ONE){case Qs.ROTATE:if(n.enableRotate===!1)return;le(P),r=s.TOUCH_ROTATE;break;case Qs.PAN:if(n.enablePan===!1)return;Oe(P),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Qs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;X(P),r=s.TOUCH_DOLLY_PAN;break;case Qs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;kt(P),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Uc)}function ae(P){switch(Fe(P),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;De(P),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;We(P),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_t(P),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ze(P),n.update();break;default:r=s.NONE}}function ut(P){n.enabled!==!1&&P.preventDefault()}function je(P){L.push(P.pointerId)}function $e(P){delete J[P.pointerId];for(let ge=0;ge<L.length;ge++)if(L[ge]==P.pointerId){L.splice(ge,1);return}}function Fe(P){let ge=J[P.pointerId];ge===void 0&&(ge=new Ke,J[P.pointerId]=ge),ge.set(P.pageX,P.pageY)}function Se(P){const ge=P.pointerId===L[0]?L[1]:L[0];return J[ge]}n.domElement.addEventListener("contextmenu",ut),n.domElement.addEventListener("pointerdown",C),n.domElement.addEventListener("pointercancel",G),n.domElement.addEventListener("wheel",he,{passive:!1}),document.addEventListener("keydown",ve,{passive:!0,capture:!0}),this.update()}}class iL{constructor(e,t){this.parent=e,this.modelPath=t}render(){if(!this.parent)return;const e=new NC,t=new ln(75,this.parent.clientWidth/400,.1,1e3),n=new hg({alpha:!0,antialias:!0});n.setSize(this.parent.clientWidth,400),this.parent.appendChild(n.domElement);const s=new uR(16777215,1);e.add(s);const r=new vg(16777215,1);r.position.set(5,5,5),e.add(r),new yR().load(this.modelPath,u=>{const h=u.scene,d=new ai().setFromObject(h);h.position.sub(d.getCenter(new F)),e.add(h)}),t.position.z=5;const a=new nL(t,n.domElement),l=()=>{requestAnimationFrame(l),a.update(),n.render(e,t)};l()}}class sL{constructor(e,t,n){this.parent=e,this.id=t,this.navigate=n}async render(){this.parent.innerHTML='<div class="container mt-4"><p class="text-muted">Загрузка...</p></div>';let e;try{e=await $i.getSectionById(this.id)}catch(a){this.parent.innerHTML=`<div class="container mt-4"><p class="text-danger">Ошибка: ${a.message}</p></div>`;return}const t=e.spots>0,n=t?"success":"danger",s=t?`В группе "${e.title}" ещё есть ${e.spots} свободных мест. Успейте записаться!`:`К сожалению, набор в группу "${e.title}" сейчас закрыт.`;this.parent.innerHTML=`
            <div class="container mt-4 mb-5 p-4 bg-white rounded shadow-sm position-relative">
                <button class="btn btn-outline-secondary mb-4" id="btn-back">← Назад к списку</button>
                <div class="row">
                    <div class="col-lg-6">
                        <img src="${e.src}" class="img-fluid rounded mb-3 shadow-sm">
                        <h2 style="color: #a51c30;">${e.title}</h2>
                        <p class="fs-5">${e.text}</p>
                    </div>
                    <div class="col-lg-6">
                        <h4 class="text-center mb-3">Инвентарь (3D)</h4>
                        <div id="3d-model-container" style="width: 100%; height: 400px; background: #f8f9fa; border-radius: 10px; border: 1px solid #dee2e6;"></div>
                    </div>
                </div>

                <div class="toast-container position-fixed bottom-0 end-0 p-3" style="z-index: 1050">
                    <div id="liveToast" class="toast shadow-lg border-0" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header bg-${n} text-white">
                            <strong class="me-auto">Система записи</strong>
                            <small>Только что</small>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Закрыть"></button>
                        </div>
                        <div class="toast-body fs-6">${s}</div>
                    </div>
                </div>
            </div>`,document.getElementById("btn-back").onclick=()=>this.navigate("main"),new iL(document.getElementById("3d-model-container"),e.modelPath||"models/sport.glb").render(),new Po(document.getElementById("liveToast"),{delay:2e4}).show()}}class rL{constructor(e){this.parent=e}getHTML(){return`
            <div class="container mt-5 pt-5 pb-5">
                <h2 class="text-center mb-4" style="color: #a51c30;">Калькулятор</h2>
                <div class="calculator mx-auto" id="calculator-body">
                    <div class="result" id="calc-display">0</div>
                    <div class="row">
                        <button class="my-btn secondary" id="btn-clear">C</button>
                        <button class="my-btn secondary" id="btn-sign">+/-</button>
                        <button class="my-btn secondary" id="btn-percent">%</button>
                        <button class="my-btn primary" id="btn-divide">/</button>
                        <button class="my-btn secondary" id="btn-backspace">⌫</button>
                    </div>
                    <div class="row">
                        <button class="my-btn digit" id="btn-7">7</button>
                        <button class="my-btn digit" id="btn-8">8</button>
                        <button class="my-btn digit" id="btn-9">9</button>
                        <button class="my-btn primary" id="btn-multiply">×</button>
                        <button class="my-btn secondary" id="btn-square">x²</button>
                    </div>
                    <div class="row">
                        <button class="my-btn digit" id="btn-4">4</button>
                        <button class="my-btn digit" id="btn-5">5</button>
                        <button class="my-btn digit" id="btn-6">6</button>
                        <button class="my-btn primary" id="btn-subtract">−</button>
                        <button class="my-btn secondary" id="btn-sqrt">√</button>
                    </div>
                    <div class="row">
                        <button class="my-btn digit" id="btn-1">1</button>
                        <button class="my-btn digit" id="btn-2">2</button>
                        <button class="my-btn digit" id="btn-3">3</button>
                        <button class="my-btn primary" id="btn-add">+</button>
                        <button class="my-btn secondary" id="btn-factorial">!</button>
                    </div>
                    <div class="row">
                        <button class="my-btn digit" id="btn-0">0</button>
                        <button class="my-btn digit" id="btn-dot">.</button>
                        <button class="my-btn secondary" id="btn-triple-zero">000</button>
                        <button class="my-btn primary execute" id="btn-equal">=</button>
                    </div>
                    <div class="row">
                        <button class="my-btn secondary" id="btn-pow">xʸ</button>
                        <button class="my-btn secondary" id="btn-bg-color">bg color</button>
                        <button class="my-btn secondary" id="btn-display-color">res color</button>
                    </div>
                </div>
            </div>
        `}initLogic(){let e="",t="",n=null,s=!1;const r=document.getElementById("calc-display"),o=document.querySelector(".calculator"),a=["btn-0","btn-1","btn-2","btn-3","btn-4","btn-5","btn-6","btn-7","btn-8","btn-9"].map(Y=>document.getElementById(Y)),l=document.getElementById("btn-dot"),u=document.getElementById("btn-clear"),h=document.getElementById("btn-sign"),d=document.getElementById("btn-percent"),f=document.getElementById("btn-backspace"),_=document.getElementById("btn-divide"),v=document.getElementById("btn-multiply"),b=document.getElementById("btn-subtract"),m=document.getElementById("btn-add"),p=document.getElementById("btn-equal"),M=document.getElementById("btn-square"),y=document.getElementById("btn-sqrt"),A=document.getElementById("btn-factorial"),I=document.getElementById("btn-triple-zero"),D=document.getElementById("btn-pow"),L=document.getElementById("btn-bg-color"),J=document.getElementById("btn-display-color");function S(Y){r.textContent=Y}function R(){e="",t="",n=null,s=!1,S("0")}function j(Y){if(s&&(e="",t="",n=null,s=!1),n===null){if(Y==="."&&e.includes("."))return;e+=Y,S(e)}else{if(Y==="."&&t.includes("."))return;t+=Y,S(t)}}function Q(){if(n===null||t==="")return;const Y=parseFloat(e),oe=parseFloat(t);let me;switch(n){case"+":me=Y+oe;break;case"-":me=Y-oe;break;case"×":me=Y*oe;break;case"/":me=oe!==0?Y/oe:"Ошибка";break;case"^":me=Math.pow(Y,oe);break;default:return}if(me==="Ошибка"||isNaN(me)||!isFinite(me)){R(),S("Ошибка");return}e=me.toString(),t="",n=null,s=!0,S(e)}function se(Y){e!==""&&(n!==null&&t!==""&&Q(),r.textContent!=="Ошибка"&&(n=Y,s=!1))}function B(Y){if(Y<0||!Number.isInteger(Y))return NaN;if(Y===0||Y===1)return 1;let oe=1;for(let me=2;me<=Y;me++)oe*=me;return oe}function W(Y){let oe=r.textContent;if(oe==="Ошибка")return;let me=parseFloat(oe);if(isNaN(me))return;let be;switch(Y){case"sign":be=-me;break;case"percent":be=me/100;break;case"sqrt":if(me<0){S("Ошибка"),R();return}be=Math.sqrt(me);break;case"square":be=me*me;break;case"factorial":if(me<0||!Number.isInteger(me)){S("Ошибка"),R();return}be=B(me);break;default:return}n===null?e=be.toString():t=be.toString(),S(be.toString()),s=!0}function q(){s||(n===null?e.length>0&&(e=e.slice(0,-1),S(e||"0")):t.length>0&&(t=t.slice(0,-1),S(t||"0")))}function ee(){s&&(e="",t="",n=null,s=!1),n===null?(e+="000",S(e)):(t+="000",S(t))}const te=["#ffffff","#f8f9fa","#e9ecef","#dee2e6","#ced4da","#f0f0f0","#d4edda","#f8d7da","#fff3cd","#d1ecf1","#cfe2ff","#e2e3e5","#f5c2c7","#ffe5b4","#b8daff","#d4c4fb","#c3e6cb","#fbc0cb","#ffeaa7","#a8d8ea"];let ne=0;function ie(){o.style.backgroundColor=te[ne],ne=(ne+1)%te.length}const O=["#e9ecef","#f8d7da","#d4edda","#fff3cd","#d1ecf1","#cfe2ff","#f5c2c7","#ffe5b4","#d4c4fb","#c3e6cb","#b8daff","#fbc0cb","#ffeaa7","#a8d8ea","#e2e3e5"];let pe=0;function K(){r.style.backgroundColor=O[pe],pe=(pe+1)%O.length}a.forEach(Y=>{Y&&Y.addEventListener("click",()=>j(Y.textContent))}),l.addEventListener("click",()=>j(".")),u.addEventListener("click",R),f.addEventListener("click",q),I.addEventListener("click",ee),h.addEventListener("click",()=>W("sign")),d.addEventListener("click",()=>W("percent")),y.addEventListener("click",()=>W("sqrt")),M.addEventListener("click",()=>W("square")),A.addEventListener("click",()=>W("factorial")),_.addEventListener("click",()=>se("/")),v.addEventListener("click",()=>se("×")),b.addEventListener("click",()=>se("-")),m.addEventListener("click",()=>se("+")),D.addEventListener("click",()=>se("^")),p.addEventListener("click",Q),L.addEventListener("click",ie),J.addEventListener("click",K),R()}render(){this.parent.innerHTML=this.getHTML(),this.initLogic()}}class oL{constructor(e,t,n){this.parent=e,this.id=t,this.navigate=n}async render(){const e=this.id!==void 0,t=e?"Редактирование секции":"Добавление секции";if(this.parent.innerHTML=`
            <div class="container mt-4 mb-5" style="max-width: 640px;">
                <button class="btn btn-outline-secondary mb-4" id="btn-back">← Назад к списку</button>
                <div class="p-4 bg-white rounded shadow-sm">
                    <h3 style="color: #a51c30;" class="mb-4">${t}</h3>
                    <div id="form-loading" class="text-muted mb-3" style="display:${e?"block":"none"}">Загрузка данных...</div>
                    <form id="section-form" novalidate>
                        <div class="mb-3">
                            <label class="form-label fw-semibold">Название секции</label>
                            <input type="text" id="f-title" class="form-control" placeholder="Например: Плавание">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-semibold">Описание</label>
                            <textarea id="f-text" class="form-control" rows="3" placeholder="Краткое описание секции"></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-semibold">Свободных мест</label>
                            <input type="number" id="f-spots" class="form-control" placeholder="0" min="0">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-semibold">Путь к изображению</label>
                            <input type="text" id="f-src" class="form-control" placeholder="assets/7613.jpg">
                        </div>
                        <div class="mb-4">
                            <label class="form-label fw-semibold">Путь к 3D-модели</label>
                            <input type="text" id="f-modelpath" class="form-control" placeholder="models/sport.glb">
                        </div>

                        <div class="d-flex gap-2">
                            <button type="submit" class="btn btn-danger fw-bold" id="btn-save">
                                ${e?"Сохранить изменения":"Добавить секцию"}
                            </button>
                            <div id="form-error" class="text-danger align-self-center" style="display:none;"></div>
                        </div>
                    </form>
                </div>
            </div>`,document.getElementById("btn-back").onclick=()=>this.navigate("main"),document.getElementById("section-form").onsubmit=async n=>{n.preventDefault();const s=document.getElementById("form-error"),r=document.getElementById("btn-save"),o={title:document.getElementById("f-title").value.trim(),text:document.getElementById("f-text").value.trim(),spots:parseInt(document.getElementById("f-spots").value,10),src:document.getElementById("f-src").value.trim(),modelPath:document.getElementById("f-modelpath").value.trim()};if(!o.title){s.textContent="Название обязательно",s.style.display="block";return}if(isNaN(o.spots)||o.spots<0){s.textContent="Места — целое неотрицательное число",s.style.display="block";return}r.disabled=!0,s.style.display="none";try{e?await $i.updateSection(this.id,o):await $i.createSection(o),this.navigate("main")}catch(a){s.textContent="Ошибка сохранения: "+a.message,s.style.display="block",r.disabled=!1}},e)try{const n=await $i.getSectionById(this.id);document.getElementById("form-loading").style.display="none",document.getElementById("f-title").value=n.title||"",document.getElementById("f-text").value=n.text||"",document.getElementById("f-spots").value=n.spots??"",document.getElementById("f-src").value=n.src||"",document.getElementById("f-modelpath").value=n.modelPath||""}catch(n){document.getElementById("form-loading").textContent="Ошибка загрузки: "+n.message}}}class aL{constructor(){this.root=document.getElementById("root"),this.headerContainer=document.getElementById("header-container"),this.sliderContainer=document.getElementById("slider-container"),this._skipHashChange=!1,this.navigate=(e,t={})=>{this._skipHashChange=!0,this._setHash(e,t),this.renderPage(e,t)}}_setHash(e,t={}){e==="main"?location.hash="":e==="section"?location.hash=`section/${t.id}`:e==="form"&&t.id?location.hash=`form/${t.id}`:e==="form"?location.hash="form":e==="calc"&&(location.hash="calc")}parseHash(){const e=location.hash.slice(1);if(!e||e==="main")return{page:"main",params:{}};if(e==="calc")return{page:"calc",params:{}};if(e==="form")return{page:"form",params:{}};const t=e.match(/^section\/(\d+)$/);if(t)return{page:"section",params:{id:+t[1]}};const n=e.match(/^form\/(\d+)$/);return n?{page:"form",params:{id:+n[1]}}:{page:"main",params:{}}}renderPage(e,t={}){this.root.innerHTML="",e==="main"?new gv(this.root,this.navigate).render():e==="section"?new sL(this.root,t.id,this.navigate).render():e==="calc"?new rL(this.root).render():e==="form"&&new oL(this.root,t.id,this.navigate).render()}init(){new fv(this.headerContainer).render((r,o)=>this.navigate(r,o)),new pv(this.sliderContainer).render(),window.addEventListener("hashchange",()=>{if(this._skipHashChange){this._skipHashChange=!1;return}const{page:r,params:o}=this.parseHash();this.renderPage(r,o)});const{page:n,params:s}=this.parseHash();this.renderPage(n,s)}}new aL().init();
