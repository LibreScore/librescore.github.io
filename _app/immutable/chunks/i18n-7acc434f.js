import{B as $,C as m,D as P}from"./index-06b9bfde.js";const ne="modulepreload",ce=function(r,t){return new URL(r,t).href},H={},u=function(t,e,a){if(!e||e.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(e.map(l=>{if(l=ce(l,a),l in H)return;H[l]=!0;const i=l.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(!!a)for(let f=o.length-1;f>=0;f--){const h=o[f];if(h.href===l&&(!i||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${s}`))return;const n=document.createElement("link");if(n.rel=i?"stylesheet":ne,i||(n.as="script",n.crossOrigin=""),n.href=l,document.head.appendChild(n),i)return new Promise((f,h)=>{n.addEventListener("load",f),n.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())};var ue=Object.defineProperty,de=Object.defineProperties,pe=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,K=(r,t,e)=>t in r?ue(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,d=(r,t)=>{for(var e in t||(t={}))G.call(t,e)&&K(r,e,t[e]);if(j)for(var e of j(t))J.call(t,e)&&K(r,e,t[e]);return r},g=(r,t)=>de(r,pe(t)),E=(r,t)=>{var e={};for(var a in r)G.call(r,a)&&t.indexOf(a)<0&&(e[a]=r[a]);if(r!=null&&j)for(var a of j(r))t.indexOf(a)<0&&J.call(r,a)&&(e[a]=r[a]);return e},S=["error","warn","debug"],Q=({logger:r=console,level:t=S[1],prefix:e="[i18n]: "})=>S.reduce((a,o,l)=>g(d({},a),{[o]:i=>S.indexOf(t)>=l&&r[o](`${e}${i}`)}),{}),p=Q({}),fe=r=>{p=r},B=r=>{var t=r,{parser:e,key:a,params:o,translations:l,locale:i,fallbackLocale:s}=t,c=E(t,["parser","key","params","translations","locale","fallbackLocale"]);if(!(a&&i))return p.warn("No translation key or locale provided. Skipping translation..."),"";let n=(l[i]||{})[a];return s&&n===void 0&&(n=(l[s]||{})[a]),c.hasOwnProperty("fallbackValue")&&n===void 0?c.fallbackValue:e.parse(n,o,i,a)},_=(...r)=>r.length?r.filter(t=>!!t).map(t=>{let e=`${t}`.toLowerCase();try{let[a]=Intl.Collator.supportedLocalesOf(t);if(!a)throw new Error(`'${t}' is non-standard.`);e=a}catch{p.warn(`Non-standard locale provided: '${t}'. Check your 'translations' and 'loaders' in i18n config...`)}return e}):[],F=(r,t)=>Object.keys(r||{}).reduce((e,a)=>{let o=r[a],l=t?`${t}.${a}`:`${a}`;return o&&typeof o=="object"?d(d({},e),F(o,l)):g(d({},e),{[l]:o})},{}),me=async r=>{try{return(await Promise.all(r.map(t=>{var e=t,{loader:a}=e,o=E(e,["loader"]);return new Promise(async l=>{let i;try{i=await a()}catch(s){p.error(`Failed to load translation. Verify your '${o.locale}' > '${o.key}' Loader.`),p.error(s)}l(g(d({loader:a},o),{data:i}))})}))).reduce((t,{key:e,data:a,locale:o})=>{if(!a)return t;let[l]=_(o);return g(d({},t),{[l]:F(g(d({},t[l]||{}),{[e]:a}))})},{})}catch(t){p.error(t)}return{}},he=r=>t=>{try{if(typeof t=="string")return t===r;if(typeof t=="object")return t.test(r)}catch{p.error("Invalid route config!")}return!1},ye=(r,t)=>{let e=!0;try{e=Object.keys(r).filter(a=>r[a]!==void 0).every(a=>r[a]===t[a])}catch{}return e},M=1e3*60*60*24,ve=class{constructor(t){this.cachedAt=0,this.loadedKeys={},this.currentRoute=$(),this.config=$(),this.isLoading=$(!1),this.promises=new Set,this.loading={subscribe:this.isLoading.subscribe,toPromise:(e,a)=>{let o=Array.from(this.promises).filter(l=>ye({locale:_(e)[0],route:a},l)).map(({promise:l})=>l);return Promise.all(o)},get:()=>m(this.isLoading)},this.privateTranslations=$({}),this.translations={subscribe:this.privateTranslations.subscribe,get:()=>m(this.translations)},this.locales=g(d({},P([this.config,this.privateTranslations],([e,a])=>{if(!e)return[];let{loaders:o=[]}=e,l=o.map(({locale:s})=>s),i=Object.keys(a).map(s=>s);return Array.from(new Set([..._(...l),..._(...i)]))},[])),{get:()=>m(this.locales)}),this.internalLocale=$(),this.loaderTrigger=P([this.internalLocale,this.currentRoute],([e,a],o)=>{var l,i;e!==void 0&&a!==void 0&&!(e===((l=m(this.loaderTrigger))==null?void 0:l[0])&&a===((i=m(this.loaderTrigger))==null?void 0:i[1]))&&(p.debug("Triggering translation load..."),o([e,a]))},[]),this.localeHelper=$(),this.locale={subscribe:this.localeHelper.subscribe,forceSet:this.localeHelper.set,set:this.internalLocale.set,update:this.internalLocale.update,get:()=>m(this.locale)},this.initialized=P([this.locale,this.currentRoute,this.privateTranslations],([e,a,o],l)=>{m(this.initialized)||l(e!==void 0&&a!==void 0&&!!Object.keys(o).length)}),this.translation=P([this.privateTranslations,this.locale,this.isLoading],([e,a,o],l)=>{let i=e[a];i&&Object.keys(i).length&&!o&&l(i)},{}),this.t=g(d({},P([this.config,this.translation],e=>{var[a]=e,o=a,{parser:l,fallbackLocale:i}=o,s=E(o,["parser","fallbackLocale"]);return(c,...n)=>B(d({parser:l,key:c,params:n,translations:this.translations.get(),locale:this.locale.get(),fallbackLocale:i},s.hasOwnProperty("fallbackValue")?{fallbackValue:s.fallbackValue}:{}))})),{get:(e,...a)=>m(this.t)(e,...a)}),this.l=g(d({},P([this.config,this.translations],e=>{var[a,...o]=e,l=a,{parser:i,fallbackLocale:s}=l,c=E(l,["parser","fallbackLocale"]),[n]=o;return(f,h,...O)=>B(d({parser:i,key:h,params:O,translations:n,locale:f,fallbackLocale:s},c.hasOwnProperty("fallbackValue")?{fallbackValue:c.fallbackValue}:{}))})),{get:(e,a,...o)=>m(this.l)(e,a,...o)}),this.getLocale=e=>{let{fallbackLocale:a=""}=m(this.config)||{},o=e||a;if(!o)return"";let l=this.locales.get();return l.find(i=>_(o).includes(i))||l.find(i=>_(a).includes(i))||""},this.setLocale=e=>{if(e&&e!==m(this.internalLocale))return p.debug(`Setting '${e}' locale.`),this.internalLocale.set(e),this.loading.toPromise(e,m(this.currentRoute))},this.setRoute=e=>{if(e!==m(this.currentRoute)){p.debug(`Setting '${e}' route.`),this.currentRoute.set(e);let a=m(this.internalLocale);return this.loading.toPromise(a,e)}},this.loadConfig=async e=>{await this.configLoader(e)},this.getTranslationProps=async(e=this.locale.get(),a=m(this.currentRoute))=>{let o=m(this.config);if(!o||!e)return[];let l=this.translations.get(),{loaders:i,fallbackLocale:s="",cache:c=M}=o||{},n=Number.isNaN(+c)?M:+c;this.cachedAt?Date.now()>n+this.cachedAt&&(p.debug("Refreshing cache."),this.loadedKeys={},this.cachedAt=0):(p.debug("Setting cache timestamp."),this.cachedAt=Date.now());let[f,h]=_(e,s),O=l[f],V=l[h],L=(i||[]).map(y=>{var b=y,{locale:R}=b,v=E(b,["locale"]);return g(d({},v),{locale:_(R)[0]})}).filter(({routes:y})=>!y||(y||[]).some(he(a))).filter(({key:y,locale:b})=>b===f&&(!O||!(this.loadedKeys[f]||[]).includes(y))||s&&b===h&&(!V||!(this.loadedKeys[h]||[]).includes(y)));if(L.length){this.isLoading.set(!0),p.debug("Fetching translations...");let y=await me(L);this.isLoading.set(!1);let b=Object.keys(y).reduce((v,k)=>g(d({},v),{[k]:Object.keys(y[k])}),{}),R=L.filter(({key:v,locale:k})=>(b[k]||[]).some(D=>`${D}`.startsWith(v))).reduce((v,{key:k,locale:D})=>g(d({},v),{[D]:[...v[D]||[],k]}),{});return[y,R]}return[]},this.addTranslations=(e,a)=>{if(!e)return;p.debug("Adding translations...");let o=Object.keys(e||{});this.privateTranslations.update(l=>o.reduce((i,s)=>g(d({},i),{[s]:d(d({},i[s]||{}),F(e[s]))}),l)),o.forEach(l=>{let i=Object.keys(e[l]).map(s=>`${s}`.split(".")[0]);a&&(i=a[l]),this.loadedKeys[l]=Array.from(new Set([...this.loadedKeys[l]||[],...i||[]]))})},this.loader=async([e,a])=>{let o=this.getLocale(e);p.debug(`Adding loader promise for '${o}' locale and '${a}' route.`);let l=(async()=>{let i=await this.getTranslationProps(o,a);i.length&&this.addTranslations(...i)})();this.promises.add({locale:o,route:a,promise:l}),l.then(()=>{o&&this.locale.get()!==o&&this.locale.forceSet(o)})},this.loadTranslations=(e,a=m(this.currentRoute)||"")=>{let o=this.getLocale(e);if(o)return this.setRoute(a),this.setLocale(o),this.loading.toPromise(o,a)},this.loaderTrigger.subscribe(this.loader),this.isLoading.subscribe(async e=>{e&&this.promises.size&&(await this.loading.toPromise(),this.promises.clear(),p.debug("Loader promises have been purged."))}),t&&this.loadConfig(t)}async configLoader(t){if(!t)return p.error("No config provided!");let e=t,{initLocale:a,fallbackLocale:o,translations:l,log:i}=e,s=E(e,["initLocale","fallbackLocale","translations","log"]);i&&fe(Q(i)),[a]=_(a),[o]=_(o),p.debug("Setting config."),this.config.set(d({initLocale:a,fallbackLocale:o,translations:l},s)),l&&this.addTranslations(l),await this.loadTranslations(a)}},X=Object.defineProperty,ge=Object.defineProperties,be=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,q=(r,t,e)=>t in r?X(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,w=(r,t)=>{for(var e in t||(t={}))Y.call(t,e)&&q(r,e,t[e]);if(A)for(var e of A(t))Z.call(t,e)&&q(r,e,t[e]);return r},ee=(r,t)=>ge(r,be(t)),T=(r,t)=>{var e={};for(var a in r)Y.call(r,a)&&t.indexOf(a)<0&&(e[a]=r[a]);if(r!=null&&A)for(var a of A(r))t.indexOf(a)<0&&Z.call(r,a)&&(e[a]=r[a]);return e},_e=(r,t)=>{for(var e in t)X(r,e,{get:t[e],enumerable:!0})},te={};_e(te,{ago:()=>Te,date:()=>$e,eq:()=>z,gt:()=>re,gte:()=>Le,lt:()=>ae,lte:()=>Oe,ne:()=>ke,number:()=>we});var N=(r,t)=>{let{modifierDefaults:e}=t||{},{[r]:a}=e||{};return a||{}},z=({value:r,options:t=[],defaultValue:e=""})=>(t.find(({key:a})=>`${a}`.toLowerCase()===`${r}`.toLowerCase())||{}).value||e,ke=({value:r,options:t=[],defaultValue:e=""})=>(t.find(({key:a})=>`${a}`.toLowerCase()!==`${r}`.toLowerCase())||{}).value||e,ae=({value:r,options:t=[],defaultValue:e=""})=>(t.sort((a,o)=>+a.key-+o.key).find(({key:a})=>+r<+a)||{}).value||e,re=({value:r,options:t=[],defaultValue:e=""})=>(t.sort((a,o)=>+o.key-+a.key).find(({key:a})=>+r>+a)||{}).value||e,Oe=({value:r,options:t=[],defaultValue:e=""})=>z({value:r,options:t,defaultValue:ae({value:r,options:t,defaultValue:e})}),Le=({value:r,options:t=[],defaultValue:e=""})=>z({value:r,options:t,defaultValue:re({value:r,options:t,defaultValue:e})}),we=({value:r,props:t,defaultValue:e="",locale:a="",parserOptions:o})=>{if(!a)return"";let l=N("number",o),{maximumFractionDigits:i}=l,s=T(l,["maximumFractionDigits"]),c=(t==null?void 0:t.number)||{},{maximumFractionDigits:n=i||2}=c,f=T(c,["maximumFractionDigits"]);return new Intl.NumberFormat(a,w(ee(w({},s),{maximumFractionDigits:n}),f)).format(+r||+e)},$e=({value:r,props:t,defaultValue:e="",locale:a="",parserOptions:o})=>{if(!a)return"";let l=T(N("date",o),[]),i=T((t==null?void 0:t.date)||{},[]);return new Intl.DateTimeFormat(a,w(w({},l),i)).format(+r||+e)},x=[{key:"second",multiplier:1e3},{key:"minute",multiplier:60},{key:"hour",multiplier:60},{key:"day",multiplier:24},{key:"week",multiplier:7},{key:"month",multiplier:13/3},{key:"year",multiplier:12}],le=(r="",t="")=>new RegExp(`^${r}s?$`).test(t),Pe=r=>x.indexOf(x.find(({key:t})=>le(t,r))),Ee=(r,t)=>x.reduce(([e,a],{key:o,multiplier:l},i)=>{if(le(a,t))return[e,a];if(!a||i===Pe(a)+1){let s=Math.round(e/l);if(!a||Math.abs(s)>=1||t!=="auto")return[s,o]}return[e,a]},[r,""]),Te=({value:r,defaultValue:t="",locale:e="",props:a,parserOptions:o})=>{if(!e)return"";let l=N("ago",o),{format:i,numeric:s}=l,c=T(l,["format","numeric"]),n=(a==null?void 0:a.ago)||{},{format:f=i||"auto",numeric:h=s||"auto"}=n,O=T(n,["format","numeric"]),V=+r||+t,L=Ee(V,f);return new Intl.RelativeTimeFormat(e,w(ee(w({},c),{numeric:h}),O)).format(...L)},Ve=r=>typeof r=="string"&&/{{(?:(?!{{|}}).)+}}/.test(r),C=r=>typeof r=="string"?r.replace(/\\(?=:|;|{|})/g,""):r,Re=({value:r,props:t,payload:e,parserOptions:a,locale:o})=>`${r}`.replace(/{{\s*(?:(?!{{|}}).)+\s*}}/g,l=>{let i=C(`${l.match(/(?!{|\s).+?(?!\\[:;]).(?=\s*(?:[:;]|}}$))/)}`),s=e==null?void 0:e[i],[,c=""]=l.match(/.+?(?!\\;).;\s*default\s*:\s*([^\s:;].+?(?:\\[:;]|[^;\s}])*)(?=\s*(?:;|}}$))/i)||[];c=c||(e==null?void 0:e.default)||"";let[,n=""]=l.match(/{{\s*(?:[^;]|(?:\\;))+\s*(?:(?!\\:).[:])\s*(?!\s)((?:\\;|[^;])+?)(?=\s*(?:[;]|}}$))/i)||[];if(s===void 0&&n!=="ne")return c;let f=!!n,{customModifiers:h}=a||{},O=w(w({},te),h||{});n=Object.keys(O).includes(n)?n:"eq";let V=O[n],L=(l.match(/[^\s:;{](?:[^;]|\\[;])+[^\s:;}]/gi)||[]).reduce((y,b,R)=>{if(R>0){let v=C(`${b.match(/(?:(?:\\:)|[^:])+/)}`.trim()),k=`${b.match(/(?:(?:\\:)|[^:])+$/)}`.trim();if(v&&v!=="default"&&k)return[...y,{key:v,value:k}]}return y},[]);return!f&&!L.length?s:V({value:s,options:L,props:t,defaultValue:c,locale:o,parserOptions:a})}),oe=({value:r,props:t,payload:e,parserOptions:a,locale:o})=>{if(Ve(r)){let l=Re({value:r,payload:e,props:t,parserOptions:a,locale:o});return oe({value:l,payload:e,props:t,parserOptions:a,locale:o})}else return C(r)},De=r=>({parse:(t,[e,a],o,l)=>(e!=null&&e.default&&t===void 0&&(t=`${e.default}`),t===void 0&&(t=`${l}`),oe({value:t,payload:e,props:a,parserOptions:r,locale:o}))}),je=De,Ae=Object.defineProperty,Ie=Object.defineProperties,Se=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,W=(r,t,e)=>t in r?Ae(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,xe=(r,t)=>{for(var e in t||(t={}))ie.call(t,e)&&W(r,e,t[e]);if(I)for(var e of I(t))se.call(t,e)&&W(r,e,t[e]);return r},Ce=(r,t)=>Ie(r,Se(t)),Fe=(r,t)=>{var e={};for(var a in r)ie.call(r,a)&&t.indexOf(a)<0&&(e[a]=r[a]);if(r!=null&&I)for(var a of I(r))t.indexOf(a)<0&&se.call(r,a)&&(e[a]=r[a]);return e},U=r=>{var t=r,{parserOptions:e={}}=t,a=Fe(t,["parserOptions"]);return Ce(xe({},a),{parser:je(e)})},Ne=class extends ve{constructor(t){super(t&&U(t)),this.loadConfig=e=>super.configLoader(U(e))}},ze=Ne;const He={loaders:[{locale:"ar",key:"",loader:async()=>(await u(()=>import("./ar-faba7b51.js"),[],import.meta.url)).default},{locale:"cs",key:"",loader:async()=>(await u(()=>import("./cs-0fb15a8f.js"),[],import.meta.url)).default},{locale:"de",key:"",loader:async()=>(await u(()=>import("./de-8640df98.js"),[],import.meta.url)).default},{locale:"en",key:"",loader:async()=>(await u(()=>import("./en-0ebedb5d.js"),[],import.meta.url)).default},{locale:"es",key:"",loader:async()=>(await u(()=>import("./es-7c0be0fd.js"),[],import.meta.url)).default},{locale:"fr",key:"",loader:async()=>(await u(()=>import("./fr-ebaf45f7.js"),[],import.meta.url)).default},{locale:"hu",key:"",loader:async()=>(await u(()=>import("./hu-4ebb5507.js"),[],import.meta.url)).default},{locale:"id",key:"",loader:async()=>(await u(()=>import("./id-b1e1ff25.js"),[],import.meta.url)).default},{locale:"it",key:"",loader:async()=>(await u(()=>import("./it-a01df235.js"),[],import.meta.url)).default},{locale:"ja",key:"",loader:async()=>(await u(()=>import("./ja-1d99ac9b.js"),[],import.meta.url)).default},{locale:"ko",key:"",loader:async()=>(await u(()=>import("./ko-e10f04d3.js"),[],import.meta.url)).default},{locale:"ms",key:"",loader:async()=>(await u(()=>import("./ms-82f4d192.js"),[],import.meta.url)).default},{locale:"nl",key:"",loader:async()=>(await u(()=>import("./nl-2736968f.js"),[],import.meta.url)).default},{locale:"pl",key:"",loader:async()=>(await u(()=>import("./pl-71ee319d.js"),[],import.meta.url)).default},{locale:"pt",key:"",loader:async()=>(await u(()=>import("./pt-45628ab2.js"),[],import.meta.url)).default},{locale:"ru",key:"",loader:async()=>(await u(()=>import("./ru-5f7b907e.js"),[],import.meta.url)).default},{locale:"tr",key:"",loader:async()=>(await u(()=>import("./tr-1316d765.js"),[],import.meta.url)).default},{locale:"zh-Hans",key:"",loader:async()=>(await u(()=>import("./zh-Hans-13150fb1.js"),[],import.meta.url)).default},{locale:"zh-Hant",key:"",loader:async()=>(await u(()=>import("./zh-Hant-79f99e59.js"),[],import.meta.url)).default}],fallbackLocale:"en"},{t:qe,locale:We,locales:Ue,loading:Ge,loadTranslations:Je}=new ze(He);export{u as _,Je as l,qe as t};
