import{S as te,i as ne,s as se,C as re,D as H,k as de,l as me,m as he,h as E,E as x,b as B,F as ie,G as X,H as ae,I as oe,J as le,K as _e,L as ge,f as A,t as S,M as Ne,N as V,O as be,P as nt,o as st,Q as Fe,R as rt,T as R,U as De,v as $e,w as T,e as ee,x as y,y as C,V as at,g as Ue,z as D,d as Ve,W as ot,X as lt,a as v,c as P,Y as ye,Z as Be,_ as Oe,n as Ie,$ as ut,a0 as ke,q as Y,r as W,u as Ae,a1 as it}from"../../chunks/index-7bdd31c0.js";import{_ as ue,a as we,M as ct,c as q,u as qe,f as Se,d as ft,b as Ye,S as Le,l as We,e as ce,t as pt,I as Me,g as dt,A as mt,C as fe,L as ht,h as _t,T as gt,P as bt,i as Ft}from"../../chunks/SelectionGroupIcon-6d755f59.js";/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var j={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},Q={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},At={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ee=function(r){ue(e,r);function e(t){return r.call(this,we(we({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return At},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return j},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Q},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},e}(ct);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var K=0,pe=function(r){ue(e,r);function e(t){var n=r.call(this,t)||this;return n.wasDocked=!0,n.isDockedShowing=!0,n.currentAppBarOffsetTop=0,n.isCurrentlyBeingResized=!1,n.resizeThrottleId=K,n.resizeDebounceId=K,n.lastScrollPosition=n.adapter.getViewportScrollY(),n.topAppBarHeight=n.adapter.getTopAppBarHeight(),n}return e.prototype.destroy=function(){r.prototype.destroy.call(this),this.adapter.setStyle("top","")},e.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),n=t-this.lastScrollPosition;this.lastScrollPosition=t,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=n,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},e.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){t.resizeThrottleId=K,t.throttledResizeHandler()},Q.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){t.handleTargetScroll(),t.isCurrentlyBeingResized=!1,t.resizeDebounceId=K},Q.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate=function(){var t=-this.topAppBarHeight,n=this.currentAppBarOffsetTop<0,s=this.currentAppBarOffsetTop>t,a=n&&s;if(a)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==s)return this.isDockedShowing=s,!0}else return this.wasDocked=!0,!0;return a},e.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var t=this.currentAppBarOffsetTop;Math.abs(t)>=this.topAppBarHeight&&(t=-Q.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",t+"px")}},e.prototype.throttledResizeHandler=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==t&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-t,this.topAppBarHeight=t),this.handleTargetScroll()},e}(Ee);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var St=function(r){ue(e,r);function e(){var t=r!==null&&r.apply(this,arguments)||this;return t.wasScrolled=!1,t}return e.prototype.handleTargetScroll=function(){var t=this.adapter.getViewportScrollY();t<=0?this.wasScrolled&&(this.adapter.removeClass(j.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(j.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},e}(pe);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Et=function(r){ue(e,r);function e(t){var n=r.call(this,t)||this;return n.collapsed=!1,n.isAlwaysCollapsed=!1,n}return Object.defineProperty(e.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),e.prototype.init=function(){r.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(j.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(j.SHORT_COLLAPSED_CLASS))},e.prototype.setAlwaysCollapsed=function(t){this.isAlwaysCollapsed=!!t,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},e.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},e.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},e.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var t=this.adapter.getViewportScrollY();t<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},e.prototype.uncollapse=function(){this.adapter.removeClass(j.SHORT_COLLAPSED_CLASS),this.collapsed=!1},e.prototype.collapse=function(){this.adapter.addClass(j.SHORT_COLLAPSED_CLASS),this.collapsed=!0},e}(Ee);const{window:He}=rt;function Tt(r){let e,t,n,s,a,o,l;const u=r[22].default,c=re(u,r,r[21],null);let F=[{class:t=q({[r[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":r[4]==="short","mdc-top-app-bar--short-collapsed":r[0],"mdc-top-app-bar--fixed":r[4]==="fixed","smui-top-app-bar--static":r[4]==="static","smui-top-app-bar--color-secondary":r[5]==="secondary","mdc-top-app-bar--prominent":r[6],"mdc-top-app-bar--dense":r[7],...r[11]})},{style:n=Object.entries(r[12]).map(Re).concat([r[3]]).join(" ")},r[15]],f={};for(let i=0;i<F.length;i+=1)f=H(f,F[i]);return{c(){e=de("header"),c&&c.c(),this.h()},l(i){e=me(i,"HEADER",{class:!0,style:!0});var _=he(e);c&&c.l(_),_.forEach(E),this.h()},h(){x(e,f)},m(i,_){B(i,e,_),c&&c.m(e,null),r[25](e),a=!0,o||(l=[ie(He,"resize",r[23]),ie(He,"scroll",r[24]),X(s=qe.call(null,e,r[1])),X(r[13].call(null,e)),ie(e,"SMUITopAppBarIconButton:nav",r[26])],o=!0)},p(i,_){c&&c.p&&(!a||_[0]&2097152)&&ae(c,u,i,i[21],a?le(u,i[21],_,null):oe(i[21]),null),x(e,f=_e(F,[(!a||_[0]&2293&&t!==(t=q({[i[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":i[4]==="short","mdc-top-app-bar--short-collapsed":i[0],"mdc-top-app-bar--fixed":i[4]==="fixed","smui-top-app-bar--static":i[4]==="static","smui-top-app-bar--color-secondary":i[5]==="secondary","mdc-top-app-bar--prominent":i[6],"mdc-top-app-bar--dense":i[7],...i[11]})))&&{class:t},(!a||_[0]&4104&&n!==(n=Object.entries(i[12]).map(Re).concat([i[3]]).join(" ")))&&{style:n},_[0]&32768&&i[15]])),s&&ge(s.update)&&_[0]&2&&s.update.call(null,i[1])},i(i){a||(A(c,i),a=!0)},o(i){S(c,i),a=!1},d(i){i&&E(e),c&&c.d(i),r[25](null),o=!1,Ne(l)}}}const Re=([r,e])=>`${r}: ${e};`;function Ct(r,e,t){const n=["use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","getPropStore","getElement"];let s=V(e,n),{$$slots:a={},$$scope:o}=e;const l=Se(be());let u=()=>{};function c(m){return m===u}let{use:F=[]}=e,{class:f=""}=e,{style:i=""}=e,{variant:_="standard"}=e,{color:k="primary"}=e,{collapsed:b=u}=e;const L=!c(b)&&!!b;c(b)&&(b=!1);let{prominent:w=!1}=e,{dense:h=!1}=e,{scrollTarget:g=void 0}=e,O,d,$={},M={},z,G=nt({variant:_,prominent:w,dense:h},m=>{t(18,z=m)}),p,N=_;st(()=>(t(9,d=Te()),d.init(),()=>{d.destroy()}));function Te(){const m={static:Ee,short:Et,fixed:St,standard:pe}[_]||pe;return new m({hasClass:Xe,addClass:Ge,removeClass:Ze,setStyle:Je,getTopAppBarHeight:()=>O.clientHeight,notifyNavigationIconClicked:()=>ft(O,"SMUITopAppBar:nav",void 0,void 0,!0),getViewportScrollY:()=>g==null?window.pageYOffset:g.scrollTop,getTotalActionItems:()=>O.querySelectorAll(".mdc-top-app-bar__action-item").length})}function Xe(m){return m in $?$[m]:Ce().classList.contains(m)}function Ge(m){$[m]||t(11,$[m]=!0,$)}function Ze(m){(!(m in $)||$[m])&&t(11,$[m]=!1,$)}function Je(m,J){M[m]!=J&&(J===""||J==null?(delete M[m],t(12,M),t(20,N),t(4,_),t(9,d)):t(12,M[m]=J,M))}function Z(){d&&(d.handleTargetScroll(),_==="short"&&t(0,b="isCollapsed"in d&&d.isCollapsed))}function Ke(){return G}function Ce(){return O}const Qe=()=>_!=="short"&&_!=="fixed"&&d&&d.handleWindowResize(),xe=()=>g==null&&Z();function et(m){R[m?"unshift":"push"](()=>{O=m,t(10,O)})}const tt=()=>d&&d.handleNavigationClick();return r.$$set=m=>{e=H(H({},e),Fe(m)),t(15,s=V(e,n)),"use"in m&&t(1,F=m.use),"class"in m&&t(2,f=m.class),"style"in m&&t(3,i=m.style),"variant"in m&&t(4,_=m.variant),"color"in m&&t(5,k=m.color),"collapsed"in m&&t(0,b=m.collapsed),"prominent"in m&&t(6,w=m.prominent),"dense"in m&&t(7,h=m.dense),"scrollTarget"in m&&t(8,g=m.scrollTarget),"$$scope"in m&&t(21,o=m.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&262352&&z&&z({variant:_,prominent:w,dense:h}),r.$$.dirty[0]&1049104&&N!==_&&d&&(t(20,N=_),d.destroy(),t(11,$={}),t(12,M={}),t(9,d=Te()),d.init()),r.$$.dirty[0]&528&&d&&_==="short"&&"setAlwaysCollapsed"in d&&d.setAlwaysCollapsed(L),r.$$.dirty[0]&524544&&p!==g&&(p&&p.removeEventListener("scroll",Z),g&&g.addEventListener("scroll",Z),t(19,p=g))},[b,F,f,i,_,k,w,h,g,d,O,$,M,l,Z,s,Ke,Ce,z,p,N,o,a,Qe,xe,et,tt]}class Dt extends te{constructor(e){super(),ne(this,e,Ct,Tt,se,{use:1,class:2,style:3,variant:4,color:5,collapsed:0,prominent:6,dense:7,scrollTarget:8,getPropStore:16,getElement:17},null,[-1,-1])}get getPropStore(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}const $t=Ye({class:"mdc-top-app-bar__row",tag:"div"});function yt(r){let e,t,n,s,a,o;const l=r[9].default,u=re(l,r,r[8],null);let c=[{class:t=q({[r[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":r[2]==="start","mdc-top-app-bar__section--align-end":r[2]==="end"})},r[3]?{role:"toolbar"}:{},r[6]],F={};for(let f=0;f<c.length;f+=1)F=H(F,c[f]);return{c(){e=de("section"),u&&u.c(),this.h()},l(f){e=me(f,"SECTION",{class:!0});var i=he(e);u&&u.l(i),i.forEach(E),this.h()},h(){x(e,F)},m(f,i){B(f,e,i),u&&u.m(e,null),r[10](e),s=!0,a||(o=[X(n=qe.call(null,e,r[0])),X(r[5].call(null,e))],a=!0)},p(f,[i]){u&&u.p&&(!s||i&256)&&ae(u,l,f,f[8],s?le(l,f[8],i,null):oe(f[8]),null),x(e,F=_e(c,[(!s||i&6&&t!==(t=q({[f[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":f[2]==="start","mdc-top-app-bar__section--align-end":f[2]==="end"})))&&{class:t},i&8&&(f[3]?{role:"toolbar"}:{}),i&64&&f[6]])),n&&ge(n.update)&&i&1&&n.update.call(null,f[0])},i(f){s||(A(u,f),s=!0)},o(f){S(u,f),s=!1},d(f){f&&E(e),u&&u.d(f),r[10](null),a=!1,Ne(o)}}}function Bt(r,e,t){const n=["use","class","align","toolbar","getElement"];let s=V(e,n),{$$slots:a={},$$scope:o}=e;const l=Se(be());let{use:u=[]}=e,{class:c=""}=e,{align:F="start"}=e,{toolbar:f=!1}=e,i;De("SMUI:icon-button:context",f?"top-app-bar:action":"top-app-bar:navigation"),De("SMUI:button:context",f?"top-app-bar:action":"top-app-bar:navigation");function _(){return i}function k(b){R[b?"unshift":"push"](()=>{i=b,t(4,i)})}return r.$$set=b=>{e=H(H({},e),Fe(b)),t(6,s=V(e,n)),"use"in b&&t(0,u=b.use),"class"in b&&t(1,c=b.class),"align"in b&&t(2,F=b.align),"toolbar"in b&&t(3,f=b.toolbar),"$$scope"in b&&t(8,o=b.$$scope)},[u,c,F,f,i,l,s,_,o,a,k]}class je extends te{constructor(e){super(),ne(this,e,Bt,yt,se,{use:0,class:1,align:2,toolbar:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}const Ot=Ye({class:"mdc-top-app-bar__title",tag:"span"});function It(r){let e;const t=r[12].default,n=re(t,r,r[14],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,a){n&&n.m(s,a),e=!0},p(s,a){n&&n.p&&(!e||a&16384)&&ae(n,t,s,s[14],e?le(t,s[14],a,null):oe(s[14]),null)},i(s){e||(A(n,s),e=!0)},o(s){S(n,s),e=!1},d(s){n&&n.d(s)}}}function kt(r){let e,t,n;const s=[{tag:r[3]},{use:[r[7],...r[0]]},{class:q({[r[1]]:!0,[r[6]]:!0})},r[8]];var a=r[2];function o(l){let u={$$slots:{default:[It]},$$scope:{ctx:l}};for(let c=0;c<s.length;c+=1)u=H(u,s[c]);return{props:u}}return a&&(e=$e(a,o(r)),r[13](e)),{c(){e&&T(e.$$.fragment),t=ee()},l(l){e&&y(e.$$.fragment,l),t=ee()},m(l,u){e&&C(e,l,u),B(l,t,u),n=!0},p(l,[u]){const c=u&459?_e(s,[u&8&&{tag:l[3]},u&129&&{use:[l[7],...l[0]]},u&66&&{class:q({[l[1]]:!0,[l[6]]:!0})},u&256&&at(l[8])]):{};if(u&16384&&(c.$$scope={dirty:u,ctx:l}),a!==(a=l[2])){if(e){Ue();const F=e;S(F.$$.fragment,1,0,()=>{D(F,1)}),Ve()}a?(e=$e(a,o(l)),l[13](e),T(e.$$.fragment),A(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else a&&e.$set(c)},i(l){n||(e&&A(e.$$.fragment,l),n=!0)},o(l){e&&S(e.$$.fragment,l),n=!1},d(l){r[13](null),l&&E(t),e&&D(e,l)}}}function wt(r,e,t){let n,s;const a=["use","class","topAppBar","component","tag","getElement"];let o=V(e,a),l,u=ot,c=()=>(u(),u=lt(n,d=>t(11,l=d)),n);r.$$.on_destroy.push(()=>u());let{$$slots:F={},$$scope:f}=e;const i=Se(be());let{use:_=[]}=e,{class:k=""}=e,{topAppBar:b}=e,L,{component:w=Le}=e,{tag:h=w===Le?"main":void 0}=e;function g(){return L.getElement()}function O(d){R[d?"unshift":"push"](()=>{L=d,t(5,L)})}return r.$$set=d=>{e=H(H({},e),Fe(d)),t(8,o=V(e,a)),"use"in d&&t(0,_=d.use),"class"in d&&t(1,k=d.class),"topAppBar"in d&&t(9,b=d.topAppBar),"component"in d&&t(2,w=d.component),"tag"in d&&t(3,h=d.tag),"$$scope"in d&&t(14,f=d.$$scope)},r.$$.update=()=>{r.$$.dirty&512&&c(t(4,n=b&&b.getPropStore())),r.$$.dirty&2064&&t(6,s=(()=>!n||l.variant==="static"?"":l.variant==="short"?"mdc-top-app-bar--short-fixed-adjust":l.prominent&&l.dense?"mdc-top-app-bar--dense-prominent-fixed-adjust":l.prominent?"mdc-top-app-bar--prominent-fixed-adjust":l.dense?"mdc-top-app-bar--dense-fixed-adjust":"mdc-top-app-bar--fixed-adjust")())},[_,k,w,h,n,L,s,i,o,b,g,l,F,O,f]}class Lt extends te{constructor(e){super(),ne(this,e,wt,kt,se,{use:0,class:1,topAppBar:9,component:2,tag:3,getElement:10})}get getElement(){return this.$$.ctx[10]}}function ve(r,e,t){const n=r.slice();return n[22]=e[t],n}function Mt(r){let e=r[7]("webmscore")+"",t;return{c(){t=Y(e)},l(n){t=W(n,e)},m(n,s){B(n,t,s)},p(n,s){s&128&&e!==(e=n[7]("webmscore")+"")&&Ae(t,e)},d(n){n&&E(t)}}}function Ht(r){let e,t;return e=new Ot({props:{$$slots:{default:[Mt]},$$scope:{ctx:r}}}),{c(){T(e.$$.fragment)},l(n){y(e.$$.fragment,n)},m(n,s){C(e,n,s),t=!0},p(n,s){const a={};s&2097280&&(a.$$scope={dirty:s,ctx:n}),e.$set(a)},i(n){t||(A(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){D(e,n)}}}function Rt(r){let e;return{c(){e=Y("language")},l(t){e=W(t,"language")},m(t,n){B(t,e,n)},d(t){t&&E(e)}}}function jt(r){let e,t;return e=new fe({props:{class:"material-icons-outlined",$$slots:{default:[Rt]},$$scope:{ctx:r}}}),{c(){T(e.$$.fragment)},l(n){y(e.$$.fragment,n)},m(n,s){C(e,n,s),t=!0},p(n,s){const a={};s&2097152&&(a.$$scope={dirty:s,ctx:n}),e.$set(a)},i(n){t||(A(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){D(e,n)}}}function vt(r){let e=Object.keys(r[22])[0]+"",t;return{c(){t=Y(e)},l(n){t=W(n,e)},m(n,s){B(n,t,s)},p(n,s){s&32&&e!==(e=Object.keys(n[22])[0]+"")&&Ae(t,e)},d(n){n&&E(t)}}}function Pt(r){let e=r[22][Object.keys(r[22])[0]]+"",t;return{c(){t=Y(e)},l(n){t=W(n,e)},m(n,s){B(n,t,s)},p(n,s){s&32&&e!==(e=n[22][Object.keys(n[22])[0]]+"")&&Ae(t,e)},d(n){n&&E(t)}}}function zt(r){let e,t,n,s;return e=new bt({props:{$$slots:{default:[vt]},$$scope:{ctx:r}}}),n=new Ft({props:{$$slots:{default:[Pt]},$$scope:{ctx:r}}}),{c(){T(e.$$.fragment),t=v(),T(n.$$.fragment)},l(a){y(e.$$.fragment,a),t=P(a),y(n.$$.fragment,a)},m(a,o){C(e,a,o),B(a,t,o),C(n,a,o),s=!0},p(a,o){const l={};o&2097184&&(l.$$scope={dirty:o,ctx:a}),e.$set(l);const u={};o&2097184&&(u.$$scope={dirty:o,ctx:a}),n.$set(u)},i(a){s||(A(e.$$.fragment,a),A(n.$$.fragment,a),s=!0)},o(a){S(e.$$.fragment,a),S(n.$$.fragment,a),s=!1},d(a){D(e,a),a&&E(t),D(n,a)}}}function Nt(r){let e,t,n;return e=new gt({props:{$$slots:{default:[zt]},$$scope:{ctx:r}}}),{c(){T(e.$$.fragment),t=v()},l(s){y(e.$$.fragment,s),t=P(s)},m(s,a){C(e,s,a),B(s,t,a),n=!0},p(s,a){const o={};a&2097184&&(o.$$scope={dirty:a,ctx:s}),e.$set(o)},i(s){n||(A(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){D(e,s),s&&E(t)}}}function Pe(r){let e,t;function n(){return r[13](r[22])}return e=new _t({props:{$$slots:{default:[Nt]},$$scope:{ctx:r}}}),e.$on("SMUI:action",n),{c(){T(e.$$.fragment)},l(s){y(e.$$.fragment,s)},m(s,a){C(e,s,a),t=!0},p(s,a){r=s;const o={};a&2097184&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(s){t||(A(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){D(e,s)}}}function Ut(r){let e,t,n=r[5],s=[];for(let o=0;o<n.length;o+=1)s[o]=Pe(ve(r,n,o));const a=o=>S(s[o],1,1,()=>{s[o]=null});return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=ee()},l(o){for(let l=0;l<s.length;l+=1)s[l].l(o);e=ee()},m(o,l){for(let u=0;u<s.length;u+=1)s[u].m(o,l);B(o,e,l),t=!0},p(o,l){if(l&1632){n=o[5];let u;for(u=0;u<n.length;u+=1){const c=ve(o,n,u);s[u]?(s[u].p(c,l),A(s[u],1)):(s[u]=Pe(c),s[u].c(),A(s[u],1),s[u].m(e.parentNode,e))}for(Ue(),u=n.length;u<s.length;u+=1)a(u);Ve()}},i(o){if(!t){for(let l=0;l<n.length;l+=1)A(s[l]);t=!0}},o(o){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)S(s[l]);t=!1},d(o){it(s,o),o&&E(e)}}}function Vt(r){let e,t;return e=new ht({props:{twoLine:!0,$$slots:{default:[Ut]},$$scope:{ctx:r}}}),{c(){T(e.$$.fragment)},l(n){y(e.$$.fragment,n)},m(n,s){C(e,n,s),t=!0},p(n,s){const a={};s&2097248&&(a.$$scope={dirty:s,ctx:n}),e.$set(a)},i(n){t||(A(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){D(e,n)}}}function qt(r){let e;return{c(){e=Y("light_mode")},l(t){e=W(t,"light_mode")},m(t,n){B(t,e,n)},d(t){t&&E(e)}}}function Yt(r){let e;return{c(){e=Y("dark_mode")},l(t){e=W(t,"dark_mode")},m(t,n){B(t,e,n)},d(t){t&&E(e)}}}function Wt(r){let e,t,n,s;return e=new fe({props:{class:"material-icons-outlined",on:!0,$$slots:{default:[qt]},$$scope:{ctx:r}}}),n=new fe({props:{class:"material-icons-outlined",$$slots:{default:[Yt]},$$scope:{ctx:r}}}),{c(){T(e.$$.fragment),t=v(),T(n.$$.fragment)},l(a){y(e.$$.fragment,a),t=P(a),y(n.$$.fragment,a)},m(a,o){C(e,a,o),B(a,t,o),C(n,a,o),s=!0},p(a,o){const l={};o&2097152&&(l.$$scope={dirty:o,ctx:a}),e.$set(l);const u={};o&2097152&&(u.$$scope={dirty:o,ctx:a}),n.$set(u)},i(a){s||(A(e.$$.fragment,a),A(n.$$.fragment,a),s=!0)},o(a){S(e.$$.fragment,a),S(n.$$.fragment,a),s=!1},d(a){D(e,a),a&&E(t),D(n,a)}}}function Xt(r){let e,t,n,s,a,o,l,u,c,F,f,i,_;t=new Me({props:{"aria-label":r[7]("language"),$$slots:{default:[jt]},$$scope:{ctx:r}}}),t.$on("click",r[12]);function k(h){r[15](h)}let b={anchor:!1,anchorCorner:"BOTTOM_START",style:"max-block-size: 384px",$$slots:{default:[Vt]},$$scope:{ctx:r}};r[1]!==void 0&&(b.anchorElement=r[1]),s=new dt({props:b}),r[14](s),R.push(()=>Oe(s,"anchorElement",k));function L(h){r[19](h)}let w={toggle:!0,"aria-label":r[7]("theme"),$$slots:{default:[Wt]},$$scope:{ctx:r}};return r[4]!==void 0&&(w.pressed=r[4]),c=new Me({props:w}),R.push(()=>Oe(c,"pressed",L)),c.$on("click",r[8]),{c(){e=de("div"),T(t.$$.fragment),n=v(),T(s.$$.fragment),u=v(),T(c.$$.fragment),this.h()},l(h){e=me(h,"DIV",{class:!0});var g=he(e);y(t.$$.fragment,g),n=P(g),y(s.$$.fragment,g),g.forEach(E),u=P(h),y(c.$$.fragment,h),this.h()},h(){Ie(e,"class",o=Object.keys(r[2]).join(" "))},m(h,g){B(h,e,g),C(t,e,null),ut(e,n),C(s,e,null),r[18](e),B(h,u,g),C(c,h,g),f=!0,i||(_=X(l=mt.call(null,e,{addClass:r[16],removeClass:r[17]})),i=!0)},p(h,g){const O={};g&128&&(O["aria-label"]=h[7]("language")),g&2097152&&(O.$$scope={dirty:g,ctx:h}),t.$set(O);const d={};g&2097248&&(d.$$scope={dirty:g,ctx:h}),!a&&g&2&&(a=!0,d.anchorElement=h[1],ke(()=>a=!1)),s.$set(d),(!f||g&4&&o!==(o=Object.keys(h[2]).join(" ")))&&Ie(e,"class",o),l&&ge(l.update)&&g&4&&l.update.call(null,{addClass:h[16],removeClass:h[17]});const $={};g&128&&($["aria-label"]=h[7]("theme")),g&2097152&&($.$$scope={dirty:g,ctx:h}),!F&&g&16&&(F=!0,$.pressed=h[4],ke(()=>F=!1)),c.$set($)},i(h){f||(A(t.$$.fragment,h),A(s.$$.fragment,h),A(c.$$.fragment,h),f=!0)},o(h){S(t.$$.fragment,h),S(s.$$.fragment,h),S(c.$$.fragment,h),f=!1},d(h){h&&E(e),D(t),r[14](null),D(s),r[18](null),h&&E(u),D(c,h),i=!1,_()}}}function Gt(r){let e,t,n,s;return e=new je({props:{$$slots:{default:[Ht]},$$scope:{ctx:r}}}),n=new je({props:{align:"end",toolbar:!0,$$slots:{default:[Xt]},$$scope:{ctx:r}}}),{c(){T(e.$$.fragment),t=v(),T(n.$$.fragment)},l(a){y(e.$$.fragment,a),t=P(a),y(n.$$.fragment,a)},m(a,o){C(e,a,o),B(a,t,o),C(n,a,o),s=!0},p(a,o){const l={};o&2097280&&(l.$$scope={dirty:o,ctx:a}),e.$set(l);const u={};o&2097399&&(u.$$scope={dirty:o,ctx:a}),n.$set(u)},i(a){s||(A(e.$$.fragment,a),A(n.$$.fragment,a),s=!0)},o(a){S(e.$$.fragment,a),S(n.$$.fragment,a),s=!1},d(a){D(e,a),a&&E(t),D(n,a)}}}function Zt(r){let e,t;return e=new $t({props:{$$slots:{default:[Gt]},$$scope:{ctx:r}}}),{c(){T(e.$$.fragment)},l(n){y(e.$$.fragment,n)},m(n,s){C(e,n,s),t=!0},p(n,s){const a={};s&2097399&&(a.$$scope={dirty:s,ctx:n}),e.$set(a)},i(n){t||(A(e.$$.fragment,n),t=!0)},o(n){S(e.$$.fragment,n),t=!1},d(n){D(e,n)}}}function Jt(r){let e;const t=r[11].default,n=re(t,r,r[21],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,a){n&&n.m(s,a),e=!0},p(s,a){n&&n.p&&(!e||a&2097152)&&ae(n,t,s,s[21],e?le(t,s[21],a,null):oe(s[21]),null)},i(s){e||(A(n,s),e=!0)},o(s){S(n,s),e=!1},d(s){n&&n.d(s)}}}function Kt(r){let e,t,n,s,a={variant:"standard",$$slots:{default:[Zt]},$$scope:{ctx:r}};return e=new Dt({props:a}),r[20](e),n=new Lt({props:{topAppBar:r[3],style:"display: flex; flex-direction: column; align-items: stretch; margin-inline: 16px; padding-block: 80px 16px;",$$slots:{default:[Jt]},$$scope:{ctx:r}}}),{c(){T(e.$$.fragment),t=v(),T(n.$$.fragment)},l(o){y(e.$$.fragment,o),t=P(o),y(n.$$.fragment,o)},m(o,l){C(e,o,l),B(o,t,l),C(n,o,l),s=!0},p(o,[l]){const u={};l&2097399&&(u.$$scope={dirty:l,ctx:o}),e.$set(u);const c={};l&8&&(c.topAppBar=o[3]),l&2097152&&(c.$$scope={dirty:l,ctx:o}),n.$set(c)},i(o){s||(A(e.$$.fragment,o),A(n.$$.fragment,o),s=!0)},o(o){S(e.$$.fragment,o),S(n.$$.fragment,o),s=!1},d(o){r[20](null),D(e,o),o&&E(t),D(n,o)}}}let U={العربية:["ar","rtl"],čeština:["cs","ltr"],English:["en","ltr"],magyar:["hu","ltr"],русский:["ru","ltr"],简体中文:["zh-Hans","ltr"]},I="en";var ze;if(typeof window<"u"){let r=((ze=navigator.languages)==null?void 0:ze.concat(Intl.DateTimeFormat().resolvedOptions().locale))??["en"],e=Object.values(U).map(t=>t[0]);r.some(t=>{if(e.includes(t))return I=t,!0;if(e.includes(t.substring(0,2)))return I=t.substring(0,2),!0;if(e.some(n=>n.startsWith(t.substring(0,2))))return I=e.find(n=>n.startsWith(t.substring(0,2))),!0}),I==="en"&&(["ab","be","et","hy","kk","ky","lv","os","ro-MD","ru","tg","tk","uk","uz"].some(t=>r[0].startsWith(t))&&e.includes("ru")?I="ru":I="en")}const tn=async()=>(await We(I),{});function Qt(r,e,t){var G;let n,s;ye(r,ce,p=>t(6,n=p)),ye(r,pt,p=>t(7,s=p));let{$$slots:a={},$$scope:o}=e,l,u,c={};Be(ce,n.direction=((G=Object.values(U).find(p=>p[0]===I))==null?void 0:G[1])??"ltr",n);let F,f=typeof window>"u"||!window.matchMedia("(prefers-color-scheme: light)").matches;document.documentElement.setAttribute("lang",I);function i(){let p=document.head.querySelector("#theme");p||(p=document.createElement("link"),p.rel="stylesheet",p.id="theme"),p.href=`/smui${f?"":"-dark"}.css`,document.head.querySelector('link[href="/smui-dark.css"]').insertAdjacentElement("afterend",p),document.querySelector('meta[name="color-scheme"]').setAttribute("content",f?"light":"dark"),document.querySelectorAll('meta[name="theme-color"]').length>1&&(document.querySelector('meta[name="theme-color"]').remove(),document.querySelector('meta[name="theme-color"]').removeAttribute("media")),document.querySelector('meta[name="theme-color"]').setAttribute("content",f?"#005ac3":"#abc7ff")}let _=[{}];function k(){t(5,_=[{العربية:s("ar")},{čeština:s("cs")},{English:s("en")},{magyar:s("hu")},{русский:s("ru")},{简体中文:s("zh-Hans")}]),_.sort((p,N)=>Intl.Collator(I,{sensitivity:"base"}).compare(Object.values(p)[0],Object.values(N)[0]))}function b(){document.documentElement.setAttribute("lang",I),document.title=s("webmscore"),document.querySelector('meta[name="description"]').setAttribute("content",s("description")),document.documentElement.setAttribute("dir",n.direction),new RegExp("[؀-ۿݐ-ݿࡰ-࢟ࢠ-ࣿﭐ-﷿ﹰ-\uFEFFঀ-৿઀-૿ऀ-ॿ꣠-ꣿ⺀-⻿　-〿㇀-㇯㈀-㋿㌀-㏿㐀-䶿一-鿿豈-﫿︰-﹏ᄀ-ᇿ㄰-㆏ꥠ-꥿가-힯ힰ-퟿ក-៿᧠-᧿ಀ-೿ഀ-ൿက-႟ꧠ-꧿ꩠ-ꩿ඀-෿஀-௿ఀ-౿฀-๿]|\uD83B[\uDE00-\uDEFF]|\uD840[\uDC00-￿]|[\uD841-\uD868][\0-￿]|\uD869[\0-\uDEDF]|\uD869[\uDF00-￿]|[\uD86A-\uD86C][\0-￿]|\uD86D[\0-\uDF3F]|\uD86D[\uDF40-￿]|\uD86E[\0-\uDC1F]|\uD86E[\uDC20-￿]|[\uD86F-\uD872][\0-￿]|\uD873[\0-\uDEAF]|\uD873[\uDEB0-￿]|[\uD874-\uD879][\0-￿]|\uD87A[\0-\uDFEF]|\uD87E[\uDC00-\uDE1F]|\uD880[\uDC00-￿]|[\uD881-\uD883][\0-￿]|\uD884[\0-\uDF4F]|\uD804[\uDDE0-\uDDFF]|\uD807[\uDFC0-\uDFFF]").test(Object.keys(U).find(p=>U[p][0]===I))?document.documentElement.style.fontSize="larger":document.documentElement.style.fontSize=null}k(),b();const L=()=>l.setOpen(!0),w=async p=>{I=U[Object.keys(p)[0]][0],Be(ce,n.direction=U[Object.keys(p)[0]][1],n),await We(I),k(),b()};function h(p){R[p?"unshift":"push"](()=>{l=p,t(0,l)})}function g(p){u=p,t(1,u)}const O=p=>{c[p]||t(2,c[p]=!0,c)},d=p=>{c[p]&&(delete c[p],t(2,c))};function $(p){R[p?"unshift":"push"](()=>{u=p,t(1,u)})}function M(p){f=p,t(4,f)}function z(p){R[p?"unshift":"push"](()=>{F=p,t(3,F)})}return r.$$set=p=>{"$$scope"in p&&t(21,o=p.$$scope)},[l,u,c,F,f,_,n,s,i,k,b,a,L,w,h,g,O,d,$,M,z,o]}class nn extends te{constructor(e){super(),ne(this,e,Qt,Kt,se,{})}}export{nn as default,tn as load};