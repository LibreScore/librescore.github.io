function g(){}function nt(t,e){for(const n in e)t[n]=e[n];return t}function R(t){return t()}function K(){return Object.create(null)}function k(t){t.forEach(R)}function T(t){return typeof t=="function"}function it(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function st(t){return Object.keys(t).length===0}function H(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function vt(t){let e;return H(t,n=>e=n)(),e}function Et(t,e,n){t.$$.on_destroy.push(H(e,n))}function St(t,e,n,i){if(t){const c=U(t,e,n,i);return t[0](c)}}function U(t,e,n,i){return t[1]&&i?nt(n.ctx.slice(),t[1](i(e))):n.ctx}function Nt(t,e,n,i){if(t[2]&&i){const c=t[2](i(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const l=[],r=Math.max(e.dirty.length,c.length);for(let u=0;u<r;u+=1)l[u]=e.dirty[u]|c[u];return l}return e.dirty|c}return e.dirty}function jt(t,e,n,i,c,l){if(c){const r=U(e,n,i,l);t.p(r,c)}}function At(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Mt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Ct(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Tt(t){const e={};for(const n in t)e[n]=!0;return e}function Ot(t,e,n){return t.set(n),e}function Pt(t){return t&&T(t.destroy)?t.destroy:g}let O=!1;function rt(){O=!0}function ct(){O=!1}function ot(t,e,n,i){for(;t<e;){const c=t+(e-t>>1);n(c)<=i?t=c+1:e=c}return t}function ut(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let o=0;o<e.length;o++){const a=e[o];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let c=0;for(let s=0;s<e.length;s++){const o=e[s].claim_order,a=(c>0&&e[n[c]].claim_order<=o?c+1:ot(1,c,h=>e[n[h]].claim_order,o))-1;i[s]=n[a]+1;const d=a+1;n[d]=s,c=Math.max(d,c)}const l=[],r=[];let u=e.length-1;for(let s=n[c]+1;s!=0;s=i[s-1]){for(l.push(e[s-1]);u>=s;u--)r.push(e[u]);u--}for(;u>=0;u--)r.push(e[u]);l.reverse(),r.sort((s,o)=>s.claim_order-o.claim_order);for(let s=0,o=0;s<r.length;s++){for(;o<l.length&&r[s].claim_order>=l[o].claim_order;)o++;const a=o<l.length?l[o]:null;t.insertBefore(r[s],a)}}function lt(t,e){if(O){for(ut(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Dt(t,e,n){O&&!n?lt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function at(t){t.parentNode&&t.parentNode.removeChild(t)}function qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ft(t){return document.createElement(t)}function _t(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function zt(){return I(" ")}function Bt(){return I("")}function Lt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ft(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Ht(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function W(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function It(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:W(t,i,e[i])}function Wt(t,e){for(const n in e)W(t,n,e[n])}function Gt(t,e){Object.keys(e).forEach(n=>{dt(t,n,e[n])})}function dt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:W(t,e,n)}function ht(t){return Array.from(t.childNodes)}function mt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function V(t,e,n,i,c=!1){mt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const u=t[r];if(e(u)){const s=n(u);return s===void 0?t.splice(r,1):t[r]=s,c||(t.claim_info.last_index=r),u}}for(let r=t.claim_info.last_index-1;r>=0;r--){const u=t[r];if(e(u)){const s=n(u);return s===void 0?t.splice(r,1):t[r]=s,c?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function X(t,e,n,i){return V(t,c=>c.nodeName===e,c=>{const l=[];for(let r=0;r<c.attributes.length;r++){const u=c.attributes[r];n[u.name]||l.push(u.name)}l.forEach(r=>c.removeAttribute(r))},()=>i(e))}function Jt(t,e,n){return X(t,e,n,ft)}function Kt(t,e,n){return X(t,e,n,_t)}function yt(t,e){return V(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function Qt(t){return yt(t," ")}function Rt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ut(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Vt(t,e){return new t(e)}let S;function E(t){S=t}function N(){if(!S)throw new Error("Function called outside component initialization");return S}function Xt(t){N().$$.on_mount.push(t)}function Yt(t){N().$$.after_update.push(t)}function Zt(t){N().$$.on_destroy.push(t)}function te(t,e){return N().$$.context.set(t,e),e}function ee(t){return N().$$.context.get(t)}function ne(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const w=[],Q=[],M=[],B=[],Y=Promise.resolve();let L=!1;function Z(){L||(L=!0,Y.then(tt))}function ie(){return Z(),Y}function F(t){M.push(t)}function se(t){B.push(t)}const z=new Set;let x=0;function tt(){if(x!==0)return;const t=S;do{try{for(;x<w.length;){const e=w[x];x++,E(e),pt(e.$$)}}catch(e){throw w.length=0,x=0,e}for(E(null),w.length=0,x=0;Q.length;)Q.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];z.has(n)||(z.add(n),n())}M.length=0}while(w.length);for(;B.length;)B.pop()();L=!1,z.clear(),E(t)}function pt(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}const C=new Set;let b;function re(){b={r:0,c:[],p:b}}function ce(){b.r||k(b.c),b=b.p}function et(t,e){t&&t.i&&(C.delete(t),t.i(e))}function gt(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),b.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const oe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ue(t,e){gt(t,1,1,()=>{e.delete(t.key)})}function le(t,e,n,i,c,l,r,u,s,o,a,d){let h=t.length,_=l.length,m=h;const v={};for(;m--;)v[t[m].key]=m;const j=[],P=new Map,D=new Map;for(m=_;m--;){const f=d(c,l,m),y=n(f);let p=r.get(y);p?i&&p.p(f,e):(p=o(y,f),p.c()),P.set(y,j[m]=p),y in v&&D.set(y,Math.abs(m-v[y]))}const G=new Set,J=new Set;function q(f){et(f,1),f.m(u,a),r.set(f.key,f),a=f.first,_--}for(;h&&_;){const f=j[_-1],y=t[h-1],p=f.key,A=y.key;f===y?(a=f.first,h--,_--):P.has(A)?!r.has(p)||G.has(p)?q(f):J.has(A)?h--:D.get(p)>D.get(A)?(J.add(p),q(f)):(G.add(A),h--):(s(y,r),h--)}for(;h--;){const f=t[h];P.has(f.key)||s(f,r)}for(;_;)q(j[_-1]);return j}function ae(t,e){const n={},i={},c={$$scope:1};let l=t.length;for(;l--;){const r=t[l],u=e[l];if(u){for(const s in r)s in u||(i[s]=1);for(const s in u)c[s]||(n[s]=u[s],c[s]=1);t[l]=u}else for(const s in r)c[s]=1}for(const r in i)r in n||(n[r]=void 0);return n}function fe(t){return typeof t=="object"&&t!==null?t:{}}function _e(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function de(t){t&&t.c()}function he(t,e){t&&t.l(e)}function bt(t,e,n,i){const{fragment:c,after_update:l}=t.$$;c&&c.m(e,n),i||F(()=>{const r=t.$$.on_mount.map(R).filter(T);t.$$.on_destroy?t.$$.on_destroy.push(...r):k(r),t.$$.on_mount=[]}),l.forEach(F)}function xt(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(t,e){t.$$.dirty[0]===-1&&(w.push(t),Z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function me(t,e,n,i,c,l,r,u=[-1]){const s=S;E(t);const o=t.$$={fragment:null,ctx:[],props:l,update:g,not_equal:c,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:K(),dirty:u,skip_bound:!1,root:e.target||s.$$.root};r&&r(o.root);let a=!1;if(o.ctx=n?n(t,e.props||{},(d,h,..._)=>{const m=_.length?_[0]:h;return o.ctx&&c(o.ctx[d],o.ctx[d]=m)&&(!o.skip_bound&&o.bound[d]&&o.bound[d](m),a&&$t(t,d)),h}):[],o.update(),a=!0,k(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){rt();const d=ht(e.target);o.fragment&&o.fragment.l(d),d.forEach(at)}else o.fragment&&o.fragment.c();e.intro&&et(t.$$.fragment),bt(t,e.target,e.anchor,e.customElement),ct(),tt()}E(s)}class ye{$destroy(){xt(this,1),this.$destroy=g}$on(e,n){if(!T(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const c=i.indexOf(n);c!==-1&&i.splice(c,1)}}$set(e){this.$$set&&!st(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $=[];function wt(t,e){return{subscribe:kt(t,e).subscribe}}function kt(t,e=g){let n;const i=new Set;function c(u){if(it(t,u)&&(t=u,n)){const s=!$.length;for(const o of i)o[1](),$.push(o,t);if(s){for(let o=0;o<$.length;o+=2)$[o][0]($[o+1]);$.length=0}}}function l(u){c(u(t))}function r(u,s=g){const o=[u,s];return i.add(o),i.size===1&&(n=e(c)||g),u(t),()=>{i.delete(o),i.size===0&&(n(),n=null)}}return{set:c,update:l,subscribe:r}}function pe(t,e,n){const i=!Array.isArray(t),c=i?[t]:t,l=e.length<2;return wt(n,r=>{let u=!1;const s=[];let o=0,a=g;const d=()=>{if(o)return;a();const _=e(i?s[0]:s,r);l?r(_):a=T(_)?_:g},h=c.map((_,m)=>H(_,v=>{s[m]=v,o&=~(1<<m),u&&d()},()=>{o|=1<<m}));return u=!0,d(),function(){k(h),a()}})}export{lt as $,ie as A,kt as B,St as C,nt as D,It as E,Lt as F,Pt as G,jt as H,At as I,Nt as J,ae as K,T as L,k as M,Ct as N,N as O,wt as P,Mt as Q,oe as R,ye as S,Q as T,te as U,fe as V,g as W,H as X,Et as Y,Ot as Z,_e as _,zt as a,se as a0,qt as a1,vt as a2,pe as a3,ne as a4,Ft as a5,Ht as a6,ee as a7,Gt as a8,_t as a9,Kt as aa,Wt as ab,Zt as ac,Tt as ad,le as ae,ue as af,Dt as b,Qt as c,ce as d,Bt as e,et as f,re as g,at as h,me as i,Yt as j,ft as k,Jt as l,ht as m,W as n,Xt as o,Ut as p,I as q,yt as r,it as s,gt as t,Rt as u,Vt as v,de as w,he as x,bt as y,xt as z};