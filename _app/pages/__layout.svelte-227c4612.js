import{S as y,i as C,s as L,T as O,F as R,e as x,w as u,k as w,c as F,a as M,x as p,m as T,d,b as V,f as D,g,y as m,G,q as $,o as c,B as _,H,I as J,J as K,K as N,L as P,M as I,R as Q,N as v,O as U,P as z,Q as W,U as X,t as k,h as j,j as Y,V as A}from"../chunks/vendor-e2d7103b.js";import{l as Z,t as ee}from"../chunks/i18n-3ba68693.js";import"../chunks/preload-helper-e4860ae8.js";function te(r){let t=r[2]("webmscore")+"",n;return{c(){n=k(t)},l(e){n=j(e,t)},m(e,a){g(e,n,a)},p(e,a){a&4&&t!==(t=e[2]("webmscore")+"")&&Y(n,t)},d(e){e&&d(n)}}}function se(r){let t,n;return t=new U({props:{$$slots:{default:[te]},$$scope:{ctx:r}}}),{c(){u(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,a){m(t,e,a),n=!0},p(e,a){const s={};a&132&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){_(t,e)}}}function ne(r){let t;return{c(){t=k("light_mode")},l(n){t=j(n,"light_mode")},m(n,e){g(n,t,e)},d(n){n&&d(t)}}}function ae(r){let t;return{c(){t=k("dark_mode")},l(n){t=j(n,"dark_mode")},m(n,e){g(n,t,e)},d(n){n&&d(t)}}}function oe(r){let t,n,e,a;return t=new A({props:{class:"material-icons-outlined",on:!0,$$slots:{default:[ne]},$$scope:{ctx:r}}}),e=new A({props:{class:"material-icons-outlined",$$slots:{default:[ae]},$$scope:{ctx:r}}}),{c(){u(t.$$.fragment),n=w(),u(e.$$.fragment)},l(s){p(t.$$.fragment,s),n=T(s),p(e.$$.fragment,s)},m(s,o){m(t,s,o),g(s,n,o),m(e,s,o),a=!0},p(s,o){const l={};o&128&&(l.$$scope={dirty:o,ctx:s}),t.$set(l);const i={};o&128&&(i.$$scope={dirty:o,ctx:s}),e.$set(i)},i(s){a||($(t.$$.fragment,s),$(e.$$.fragment,s),a=!0)},o(s){c(t.$$.fragment,s),c(e.$$.fragment,s),a=!1},d(s){_(t,s),s&&d(n),_(e,s)}}}function re(r){let t,n,e;function a(o){r[5](o)}let s={toggle:!0,$$slots:{default:[oe]},$$scope:{ctx:r}};return r[1]!==void 0&&(s.pressed=r[1]),t=new z({props:s}),I.push(()=>W(t,"pressed",a)),t.$on("click",r[3]),{c(){u(t.$$.fragment)},l(o){p(t.$$.fragment,o)},m(o,l){m(t,o,l),e=!0},p(o,l){const i={};l&128&&(i.$$scope={dirty:l,ctx:o}),!n&&l&2&&(n=!0,i.pressed=o[1],X(()=>n=!1)),t.$set(i)},i(o){e||($(t.$$.fragment,o),e=!0)},o(o){c(t.$$.fragment,o),e=!1},d(o){_(t,o)}}}function le(r){let t,n,e,a;return t=new v({props:{$$slots:{default:[se]},$$scope:{ctx:r}}}),e=new v({props:{align:"end",toolbar:!0,$$slots:{default:[re]},$$scope:{ctx:r}}}),{c(){u(t.$$.fragment),n=w(),u(e.$$.fragment)},l(s){p(t.$$.fragment,s),n=T(s),p(e.$$.fragment,s)},m(s,o){m(t,s,o),g(s,n,o),m(e,s,o),a=!0},p(s,o){const l={};o&132&&(l.$$scope={dirty:o,ctx:s}),t.$set(l);const i={};o&130&&(i.$$scope={dirty:o,ctx:s}),e.$set(i)},i(s){a||($(t.$$.fragment,s),$(e.$$.fragment,s),a=!0)},o(s){c(t.$$.fragment,s),c(e.$$.fragment,s),a=!1},d(s){_(t,s),s&&d(n),_(e,s)}}}function ie(r){let t,n;return t=new Q({props:{$$slots:{default:[le]},$$scope:{ctx:r}}}),{c(){u(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,a){m(t,e,a),n=!0},p(e,a){const s={};a&134&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){c(t.$$.fragment,e),n=!1},d(e){_(t,e)}}}function fe(r){let t;const n=r[4].default,e=J(n,r,r[7],null);return{c(){e&&e.c()},l(a){e&&e.l(a)},m(a,s){e&&e.m(a,s),t=!0},p(a,s){e&&e.p&&(!t||s&128)&&K(e,n,a,a[7],t?P(n,a[7],s,null):N(a[7]),null)},i(a){t||($(e,a),t=!0)},o(a){c(e,a),t=!1},d(a){e&&e.d(a)}}}function $e(r){let t,n,e,a,s,o={variant:"standard",$$slots:{default:[ie]},$$scope:{ctx:r}};return n=new O({props:o}),r[6](n),a=new R({props:{topAppBar:r[0],style:"display: flex; flex-direction: column; align-items: stretch; margin-inline: 16px; margin-block: 0px 16px; padding-block-start: 80px;",$$slots:{default:[fe]},$$scope:{ctx:r}}}),{c(){t=x("div"),u(n.$$.fragment),e=w(),u(a.$$.fragment),this.h()},l(l){t=F(l,"DIV",{dir:!0,style:!0});var i=M(t);p(n.$$.fragment,i),e=T(i),p(a.$$.fragment,i),i.forEach(d),this.h()},h(){V(t,"dir",ce),D(t,"--mdc-typography-font-family",ue,1)},m(l,i){g(l,t,i),m(n,t,null),G(t,e),m(a,t,null),s=!0},p(l,[i]){const h={};i&134&&(h.$$scope={dirty:i,ctx:l}),n.$set(h);const b={};i&1&&(b.topAppBar=l[0]),i&128&&(b.$$scope={dirty:i,ctx:l}),a.$set(b)},i(l){s||($(n.$$.fragment,l),$(a.$$.fragment,l),s=!0)},o(l){c(n.$$.fragment,l),c(a.$$.fragment,l),s=!1},d(l){l&&d(t),r[6](null),_(n),_(a)}}}let B="en";const ge=async({url:r})=>{const{pathname:t}=r;return await Z(B,t),{}};let ce="ltr",ue="'Roboto', sans-serif";function pe(r,t,n){let e;H(r,ee,f=>n(2,e=f));let{$$slots:a={},$$scope:s}=t,o,l=typeof window=="undefined"||!window.matchMedia("(prefers-color-scheme: light)").matches;function i(){let f=document.head.querySelector("#theme");f||(f=document.createElement("link"),f.rel="stylesheet",f.id="theme"),f.href=`/smui${l?"":"-dark"}.css`,document.head.querySelector('link[href="/smui-dark.css"]').insertAdjacentElement("afterend",f)}let h=[{}];function b(){h=[{English:e("englishText")},{Espa\u00F1ol:e("spanishText")},{Fran\u00E7ais:e("frenchText")},{\u0627\u0644\u0639\u0631\u0628\u064A\u0629:e("arabicText")},{\u0420\u0443\u0441\u0441\u043A\u0438\u0439:e("russianText")},{\u7B80\u4F53\u4E2D\u6587:e("simplifiedChineseText")},{Italiano:e("italianText")},{\u65E5\u672C\u8A9E:e("japaneseText")},{\uD55C\uAD6D\uC5B4:e("koreanText")}],h.sort((f,q)=>Intl.Collator(B,{sensitivity:"base"}).compare(Object.values(f)[0],Object.values(q)[0]))}b();function E(f){l=f,n(1,l)}function S(f){I[f?"unshift":"push"](()=>{o=f,n(0,o)})}return r.$$set=f=>{"$$scope"in f&&n(7,s=f.$$scope)},[o,l,e,i,a,E,S,s]}class he extends y{constructor(t){super();C(this,t,pe,$e,L,{})}}export{he as default,ge as load};
