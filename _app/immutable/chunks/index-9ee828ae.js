function A(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function M(){return Object.create(null)}function p(t){t.forEach(T)}function G(t){return typeof t=="function"}function ut(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function ft(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function J(t){return Object.keys(t).length===0}function K(t,...n){if(t==null)return A;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function at(t,n,e){t.$$.on_destroy.push(K(n,e))}function _t(t,n,e,i){if(t){const r=D(t,n,e,i);return t[0](r)}}function D(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function dt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],o=Math.max(n.dirty.length,r.length);for(let s=0;s<o;s+=1)u[s]=n.dirty[s]|r[s];return u}return n.dirty|r}return n.dirty}function ht(t,n,e,i,r,u){if(r){const o=D(n,e,i,u);t.p(o,r)}}function mt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function pt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let v=!1;function Q(){v=!0}function R(){v=!1}function W(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const l=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=l?r+1:W(1,r,y=>n[e[y]].claim_order,l))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const u=[],o=[];let s=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(u.push(n[c-1]);s>=c;s--)o.push(n[s]);s--}for(;s>=0;s--)o.push(n[s]);u.reverse(),o.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<o.length;c++){for(;l<u.length&&o[c].claim_order>=u[l].claim_order;)l++;const a=l<u.length?u[l]:null;t.insertBefore(o[c],a)}}function V(t,n){if(v){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function yt(t,n,e){v&&!e?V(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function X(t){t.parentNode.removeChild(t)}function gt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function xt(){return S(" ")}function bt(){return S("")}function $t(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function q(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function vt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:q(t,i,n[i])}function wt(t,n){for(const e in n)q(t,e,n[e])}function tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,r=!1){nt(t);const u=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(n(s)){const c=e(s);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(n(s)){const c=e(s);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function L(t,n,e,i){return B(t,r=>r.nodeName===n,r=>{const u=[];for(let o=0;o<r.attributes.length;o++){const s=r.attributes[o];e[s.name]||u.push(s.name)}u.forEach(o=>r.removeAttribute(o))},()=>i(n))}function Et(t,n,e){return L(t,n,e,Y)}function kt(t,n,e){return L(t,n,e,Z)}function et(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function Nt(t){return et(t," ")}function At(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function St(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function it(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}let m;function h(t){m=t}function w(){if(!m)throw new Error("Function called outside component initialization");return m}function jt(t){w().$$.on_mount.push(t)}function Ct(t){w().$$.after_update.push(t)}function Mt(t){w().$$.on_destroy.push(t)}function Ot(){const t=w();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const u=it(n,e,{cancelable:i});return r.slice().forEach(o=>{o.call(t,u)}),!u.defaultPrevented}return!0}}const d=[],O=[],b=[],P=[],z=Promise.resolve();let k=!1;function F(){k||(k=!0,z.then(H))}function Pt(){return F(),z}function N(t){b.push(t)}const E=new Set;let x=0;function H(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),rt(n.$$)}for(h(null),d.length=0,x=0;O.length;)O.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];E.has(e)||(E.add(e),e())}b.length=0}while(d.length);for(;P.length;)P.pop()();k=!1,E.clear(),h(t)}function rt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const $=new Set;let _;function Tt(){_={r:0,c:[],p:_}}function Dt(){_.r||p(_.c),_=_.p}function ct(t,n){t&&t.i&&($.delete(t),t.i(n))}function qt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Bt(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const o=t[u],s=n[u];if(s){for(const c in o)c in s||(i[c]=1);for(const c in s)r[c]||(e[c]=s[c],r[c]=1);t[u]=s}else for(const c in o)r[c]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Lt(t){t&&t.c()}function zt(t,n){t&&t.l(n)}function ot(t,n,e,i){const{fragment:r,on_mount:u,on_destroy:o,after_update:s}=t.$$;r&&r.m(n,e),i||N(()=>{const c=u.map(T).filter(G);o?o.push(...c):p(c),t.$$.on_mount=[]}),s.forEach(N)}function st(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(d.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ft(t,n,e,i,r,u,o,s=[-1]){const c=m;h(t);const l=t.$$={fragment:null,ctx:null,props:u,update:A,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:M(),dirty:s,skip_bound:!1,root:n.target||c.$$.root};o&&o(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,y,...j)=>{const C=j.length?j[0]:y;return l.ctx&&r(l.ctx[f],l.ctx[f]=C)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](C),a&&lt(t,f)),y}):[],l.update(),a=!0,p(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){Q();const f=tt(n.target);l.fragment&&l.fragment.l(f),f.forEach(X)}else l.fragment&&l.fragment.c();n.intro&&ct(t.$$.fragment),ot(t,n.target,n.anchor,n.customElement),R(),H()}h(c)}class Ht{$destroy(){st(this,1),this.$destroy=A}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!J(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{A,_t as B,ft as C,V as D,$t as E,ht as F,mt as G,dt as H,Mt as I,I as J,pt as K,vt as L,Bt as M,Z as N,kt as O,wt as P,Ot as Q,at as R,Ht as S,gt as T,xt as a,yt as b,Nt as c,Dt as d,bt as e,ct as f,Tt as g,X as h,Ft as i,Ct as j,Y as k,Et as l,tt as m,q as n,jt as o,St as p,S as q,et as r,ut as s,qt as t,At as u,Lt as v,zt as w,ot as x,st as y,Pt as z};