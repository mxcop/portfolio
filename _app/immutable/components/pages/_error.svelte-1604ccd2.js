import{S as R,i as A,s as B,k as d,q as h,a as H,v as F,l as p,m,r as g,h as c,c as z,w as T,n as C,p as Y,b as G,D as s,x as J,u as L,f as K,t as Q,y as U,P as W}from"../../chunks/index-95246513.js";import{s as X}from"../../chunks/singletons-3bc9bcc9.js";import{I as Z}from"../../chunks/Icon-d44151a0.js";const ee=()=>{const a=X,e={page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},updated:a.updated};return Object.defineProperties(e,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},enumerable:!1},session:{get(){return se(),{}},enumerable:!1}}),e},te={subscribe(a){return ee().page.subscribe(a)}};function se(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}const ae='<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fill-opacity="0" d="M17 14V17a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V14z"><animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"/></path><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="48" stroke-dashoffset="48" d="M17 9v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"/></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M17 14H20C20.55 14 21 13.55 21 13V10C21 9.45 20.55 9 20 9H17"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;28"/></path></g><mask id="svgIDa"><path fill="none" stroke="#fff" stroke-width="2" d="M8 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M12 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M16 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4"><animateMotion calcMode="linear" dur="3s" path="M0 0v-8" repeatCount="indefinite"/></path></mask><rect width="24" height="0" y="7" fill="currentColor" mask="url(#svgIDa)"><animate fill="freeze" attributeName="y" begin="0.8s" dur="0.6s" values="7;2"/><animate fill="freeze" attributeName="height" begin="0.8s" dur="0.6s" values="0;5"/></rect></svg>';function re(a){var P;let e,o,u,v,i,q,x,l,D,b,I,N,_,n,k=a[0].status+"",$,O,w=((P=a[0].error)==null?void 0:P.message)+"",M,f;return l=new Z({props:{data:ae,stroke:"none"}}),{c(){e=d("div"),o=d("h2"),u=h("Oops! Looks like something went wrong..."),v=H(),i=d("h2"),q=h("Here's some coffee for the troubles"),x=H(),F(l.$$.fragment),D=H(),b=d("p"),I=h("Please try again later :D"),N=H(),_=d("footer"),n=d("i"),$=h(k),O=h(": "),M=h(w),this.h()},l(r){e=p(r,"DIV",{class:!0});var t=m(e);o=p(t,"H2",{class:!0});var y=m(o);u=g(y,"Oops! Looks like something went wrong..."),y.forEach(c),v=z(t),i=p(t,"H2",{style:!0,class:!0});var V=m(i);q=g(V,"Here's some coffee for the troubles"),V.forEach(c),x=z(t),T(l.$$.fragment,t),D=z(t),b=p(t,"P",{});var S=m(b);I=g(S,"Please try again later :D"),S.forEach(c),N=z(t),_=p(t,"FOOTER",{});var j=m(_);n=p(j,"I",{class:!0});var E=m(n);$=g(E,k),O=g(E,": "),M=g(E,w),E.forEach(c),j.forEach(c),t.forEach(c),this.h()},h(){C(o,"class","svelte-oqlc6s"),Y(i,"color","#777"),C(i,"class","svelte-oqlc6s"),C(n,"class","svelte-oqlc6s"),C(e,"class","content svelte-oqlc6s")},m(r,t){G(r,e,t),s(e,o),s(o,u),s(e,v),s(e,i),s(i,q),s(e,x),J(l,e,null),s(e,D),s(e,b),s(b,I),s(e,N),s(e,_),s(_,n),s(n,$),s(n,O),s(n,M),f=!0},p(r,[t]){var y;(!f||t&1)&&k!==(k=r[0].status+"")&&L($,k),(!f||t&1)&&w!==(w=((y=r[0].error)==null?void 0:y.message)+"")&&L(M,w)},i(r){f||(K(l.$$.fragment,r),f=!0)},o(r){Q(l.$$.fragment,r),f=!1},d(r){r&&c(e),U(l)}}}function oe(a,e,o){let u;return W(a,te,v=>o(0,u=v)),[u]}class ce extends R{constructor(e){super(),A(this,e,oe,re,B,{})}}export{ce as default};