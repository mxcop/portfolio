import{S as ve,i as _e,s as ge,k as b,a as A,l as $,m as w,h as p,c as D,n as m,p as Te,b as R,D as d,A as je,e as Ee,f as v,g as Q,t as k,d as W,v as B,q as Z,w as J,r as G,x as q,u as ie,y as F,Q as We,o as Ke}from"../../chunks/index-95246513.js";import{a as N,I as oe}from"../../chunks/icon-67f3d3ce.js";import{o as Ye}from"../../chunks/repos-c6c66058.js";function xe(a){let e,l,n,t,r,s;return{c(){e=b("section"),l=b("article"),n=A(),t=b("article"),r=A(),s=b("article"),this.h()},l(i){e=$(i,"SECTION",{class:!0});var h=w(e);l=$(h,"ARTICLE",{class:!0,style:!0}),w(l).forEach(p),n=D(h),t=$(h,"ARTICLE",{class:!0,style:!0}),w(t).forEach(p),r=D(h),s=$(h,"ARTICLE",{class:!0,style:!0}),w(s).forEach(p),h.forEach(p),this.h()},h(){m(l,"class","first window svelte-13uhlml"),Te(l,"background-image","url('"+N+"/img/codex.png')"),m(t,"class","second window svelte-13uhlml"),Te(t,"background-image","url('"+N+"/img/barnstorm.jpg')"),m(s,"class","third window svelte-13uhlml"),Te(s,"background-image","url('"+N+"/img/emberry.png')"),m(e,"class","preview svelte-13uhlml")},m(i,h){R(i,e,h),d(e,l),d(e,n),d(e,t),d(e,r),d(e,s)},p:je,i:je,o:je,d(i){i&&p(e)}}}class et extends ve{constructor(e){super(),_e(this,e,null,xe,ge,{})}}function Ae(a,e=!1){var l,n;return Le[a]||console.warn("Missing icon for language : "+a),e?(n=Le[a])!=null?n:"go":(l=tt[a])!=null?l:"mdi:adjust"}function De(a,e){return a.SCSS&&e=="CSS"||a.TypeScript&&e=="JavaScript"||a.Tauri&&e=="HTML"?!0:e=="ShaderLab"}const tt={Svelte:"cib:svelte",JavaScript:"cib:javascript",TypeScript:"cib:typescript",Rust:"cib:rust",CSS:"cib:css3",SCSS:"cib:sass-alt",HTML:"cib:html5","C#":"mdi:language-csharp",Unity:"bi:unity",Tauri:"simple-icons:tauri"},Le={Svelte:"svelte",JavaScript:"js",TypeScript:"typescript",Rust:"rust",CSS:"css",SCSS:"sass",HTML:"html","C#":"csharp","C++":"cpp",Tauri:"tauri",Vue:"vue",Batchfile:"bat",HLSL:"unity",GLSL:"glsl",Unity:"unity"};function Pe(a){var x,ee,te,ue;let e,l,n,t,r,s,i,h,f,o=a[1]&&Ve(a),u=((x=a[0])==null?void 0:x.steam)&&Re(a),g=((ee=a[0])==null?void 0:ee.download)&&ze(a),E=((te=a[0])==null?void 0:te.itch)&&Me(a),C=((ue=a[0])==null?void 0:ue.repo)&&Ue(a);return{c(){e=b("nav"),l=b("div"),o&&o.c(),n=A(),t=b("div"),u&&u.c(),r=A(),g&&g.c(),s=A(),E&&E.c(),i=A(),C&&C.c(),this.h()},l(S){e=$(S,"NAV",{class:!0});var y=w(e);l=$(y,"DIV",{class:!0});var U=w(l);o&&o.l(U),U.forEach(p),n=D(y),t=$(y,"DIV",{class:!0});var L=w(t);u&&u.l(L),r=D(L),g&&g.l(L),s=D(L),E&&E.l(L),i=D(L),C&&C.l(L),L.forEach(p),y.forEach(p),this.h()},h(){m(l,"class","left svelte-1p2vleo"),m(t,"class","right svelte-1p2vleo"),m(e,"class",h="links "+(a[3]?"inline":"")+" svelte-1p2vleo")},m(S,y){R(S,e,y),d(e,l),o&&o.m(l,null),d(e,n),d(e,t),u&&u.m(t,null),d(t,r),g&&g.m(t,null),d(t,s),E&&E.m(t,null),d(t,i),C&&C.m(t,null),f=!0},p(S,y){var U,L,ce,O;S[1]?o?(o.p(S,y),y&2&&v(o,1)):(o=Ve(S),o.c(),v(o,1),o.m(l,null)):o&&(Q(),k(o,1,1,()=>{o=null}),W()),(U=S[0])!=null&&U.steam?u?(u.p(S,y),y&1&&v(u,1)):(u=Re(S),u.c(),v(u,1),u.m(t,r)):u&&(Q(),k(u,1,1,()=>{u=null}),W()),(L=S[0])!=null&&L.download?g?(g.p(S,y),y&1&&v(g,1)):(g=ze(S),g.c(),v(g,1),g.m(t,s)):g&&(Q(),k(g,1,1,()=>{g=null}),W()),(ce=S[0])!=null&&ce.itch?E?(E.p(S,y),y&1&&v(E,1)):(E=Me(S),E.c(),v(E,1),E.m(t,i)):E&&(Q(),k(E,1,1,()=>{E=null}),W()),(O=S[0])!=null&&O.repo?C?(C.p(S,y),y&1&&v(C,1)):(C=Ue(S),C.c(),v(C,1),C.m(t,null)):C&&(Q(),k(C,1,1,()=>{C=null}),W()),(!f||y&8&&h!==(h="links "+(S[3]?"inline":"")+" svelte-1p2vleo"))&&m(e,"class",h)},i(S){f||(v(o),v(u),v(g),v(E),v(C),f=!0)},o(S){k(o),k(u),k(g),k(E),k(C),f=!1},d(S){S&&p(e),o&&o.d(),u&&u.d(),g&&g.d(),E&&E.d(),C&&C.d()}}}function Ve(a){let e,l,n,t=a[1].text+"",r,s,i,h,f;return l=new oe({props:{name:"award"}}),{c(){e=b("a"),B(l.$$.fragment),n=A(),r=Z(t),s=b("sup"),i=Z("th"),this.h()},l(o){e=$(o,"A",{href:!0,class:!0});var u=w(e);J(l.$$.fragment,u),n=D(u),r=G(u,t),s=$(u,"SUP",{});var g=w(s);i=G(g,"th"),g.forEach(p),u.forEach(p),this.h()},h(){m(e,"href",h=a[1].url),m(e,"class","ico-btn achievement svelte-1p2vleo")},m(o,u){R(o,e,u),q(l,e,null),d(e,n),d(e,r),d(e,s),d(s,i),f=!0},p(o,u){(!f||u&2)&&t!==(t=o[1].text+"")&&ie(r,t),(!f||u&2&&h!==(h=o[1].url))&&m(e,"href",h)},i(o){f||(v(l.$$.fragment,o),f=!0)},o(o){k(l.$$.fragment,o),f=!1},d(o){o&&p(e),F(l)}}}function Re(a){let e,l,n,t;return l=new oe({props:{name:"sites/steam"}}),{c(){e=b("a"),B(l.$$.fragment),this.h()},l(r){e=$(r,"A",{href:!0,class:!0});var s=w(e);J(l.$$.fragment,s),s.forEach(p),this.h()},h(){m(e,"href",n=a[0].steam),m(e,"class","ico-btn svelte-1p2vleo")},m(r,s){R(r,e,s),q(l,e,null),t=!0},p(r,s){(!t||s&1&&n!==(n=r[0].steam))&&m(e,"href",n)},i(r){t||(v(l.$$.fragment,r),t=!0)},o(r){k(l.$$.fragment,r),t=!1},d(r){r&&p(e),F(l)}}}function ze(a){let e,l,n,t;return l=new oe({props:{name:"download"}}),{c(){e=b("a"),B(l.$$.fragment),this.h()},l(r){e=$(r,"A",{href:!0,class:!0});var s=w(e);J(l.$$.fragment,s),s.forEach(p),this.h()},h(){m(e,"href",n=a[0].download),m(e,"class","ico-btn svelte-1p2vleo")},m(r,s){R(r,e,s),q(l,e,null),t=!0},p(r,s){(!t||s&1&&n!==(n=r[0].download))&&m(e,"href",n)},i(r){t||(v(l.$$.fragment,r),t=!0)},o(r){k(l.$$.fragment,r),t=!1},d(r){r&&p(e),F(l)}}}function Me(a){let e,l,n,t;return l=new oe({props:{name:"sites/itch",strokeWidth:"1"}}),{c(){e=b("a"),B(l.$$.fragment),this.h()},l(r){e=$(r,"A",{href:!0,class:!0});var s=w(e);J(l.$$.fragment,s),s.forEach(p),this.h()},h(){m(e,"href",n=a[0].itch),m(e,"class","ico-btn svelte-1p2vleo")},m(r,s){R(r,e,s),q(l,e,null),t=!0},p(r,s){(!t||s&1&&n!==(n=r[0].itch))&&m(e,"href",n)},i(r){t||(v(l.$$.fragment,r),t=!0)},o(r){k(l.$$.fragment,r),t=!1},d(r){r&&p(e),F(l)}}}function Ue(a){let e,l,n,t;return l=new oe({props:{name:"sites/github"}}),{c(){e=b("a"),B(l.$$.fragment),this.h()},l(r){e=$(r,"A",{href:!0,class:!0});var s=w(e);J(l.$$.fragment,s),s.forEach(p),this.h()},h(){m(e,"href",n=a[0].repo),m(e,"class","ico-btn svelte-1p2vleo")},m(r,s){R(r,e,s),q(l,e,null),t=!0},p(r,s){(!t||s&1&&n!==(n=r[0].repo))&&m(e,"href",n)},i(r){t||(v(l.$$.fragment,r),t=!0)},o(r){k(l.$$.fragment,r),t=!1},d(r){r&&p(e),F(l)}}}function lt(a){let e,l,n=a[2]&&Pe(a);return{c(){n&&n.c(),e=Ee()},l(t){n&&n.l(t),e=Ee()},m(t,r){n&&n.m(t,r),R(t,e,r),l=!0},p(t,[r]){t[2]?n?(n.p(t,r),r&4&&v(n,1)):(n=Pe(t),n.c(),v(n,1),n.m(e.parentNode,e)):n&&(Q(),k(n,1,1,()=>{n=null}),W())},i(t){l||(v(n),l=!0)},o(t){k(n),l=!1},d(t){n&&n.d(t),t&&p(e)}}}function rt(a,e,l){let{urls:n}=e,{achievement:t=void 0}=e,{visible:r}=e,{inline:s=!1}=e;return a.$$set=i=>{"urls"in i&&l(0,n=i.urls),"achievement"in i&&l(1,t=i.achievement),"visible"in i&&l(2,r=i.visible),"inline"in i&&l(3,s=i.inline)},[n,t,r,s]}class Ne extends ve{constructor(e){super(),_e(this,e,rt,lt,ge,{urls:0,achievement:1,visible:2,inline:3})}}function Oe(a,e,l){const n=a.slice();return n[3]=e[l],n}function He(a){let e,l,n,t,r=a[0].stargazers_count+"",s,i;return l=new oe({props:{name:"star"}}),{c(){e=b("i"),B(l.$$.fragment),n=A(),t=b("p"),s=Z(r),this.h()},l(h){e=$(h,"I",{class:!0});var f=w(e);J(l.$$.fragment,f),n=D(f),t=$(f,"P",{class:!0});var o=w(t);s=G(o,r),o.forEach(p),f.forEach(p),this.h()},h(){m(t,"class","svelte-4x6v3x"),m(e,"class","stargazers svelte-4x6v3x")},m(h,f){R(h,e,f),q(l,e,null),d(e,n),d(e,t),d(t,s),i=!0},p(h,f){(!i||f&1)&&r!==(r=h[0].stargazers_count+"")&&ie(s,r)},i(h){i||(v(l.$$.fragment,h),i=!0)},o(h){k(l.$$.fragment,h),i=!1},d(h){h&&p(e),F(l)}}}function Ze(a){let e,l,n;return{c(){e=b("i"),l=b("p"),n=Z("Private"),this.h()},l(t){e=$(t,"I",{class:!0});var r=w(e);l=$(r,"P",{class:!0});var s=w(l);n=G(s,"Private"),s.forEach(p),r.forEach(p),this.h()},h(){m(l,"class","private-tag svelte-4x6v3x"),m(e,"class","stargazers svelte-4x6v3x")},m(t,r){R(t,e,r),d(e,l),d(l,n)},d(t){t&&p(e)}}}function Ge(a){let e,l=a[0].desc+"",n;return{c(){e=b("div"),n=Z(l),this.h()},l(t){e=$(t,"DIV",{class:!0});var r=w(e);n=G(r,l),r.forEach(p),this.h()},h(){m(e,"class","description svelte-4x6v3x")},m(t,r){R(t,e,r),d(e,n)},p(t,r){r&1&&l!==(l=t[0].desc+"")&&ie(n,l)},d(t){t&&p(e)}}}function Be(a){let e,l,n;return l=new oe({props:{name:"langs/"+Ae(a[3],!0)}}),{c(){e=b("li"),B(l.$$.fragment),this.h()},l(t){e=$(t,"LI",{class:!0});var r=w(e);J(l.$$.fragment,r),r.forEach(p),this.h()},h(){m(e,"class","svelte-4x6v3x")},m(t,r){R(t,e,r),q(l,e,null),n=!0},p(t,r){const s={};r&2&&(s.name="langs/"+Ae(t[3],!0)),l.$set(s)},i(t){n||(v(l.$$.fragment,t),n=!0)},o(t){k(l.$$.fragment,t),n=!1},d(t){t&&p(e),F(l)}}}function Je(a){let e=!De(a[0].languages,a[3]),l,n,t=e&&Be(a);return{c(){t&&t.c(),l=Ee()},l(r){t&&t.l(r),l=Ee()},m(r,s){t&&t.m(r,s),R(r,l,s),n=!0},p(r,s){s&3&&(e=!De(r[0].languages,r[3])),e?t?(t.p(r,s),s&3&&v(t,1)):(t=Be(r),t.c(),v(t,1),t.m(l.parentNode,l)):t&&(Q(),k(t,1,1,()=>{t=null}),W())},i(r){n||(v(t),n=!0)},o(r){k(t),n=!1},d(r){t&&t.d(r),r&&p(l)}}}function nt(a){var Ie;let e,l,n,t,r,s,i,h,f=((Ie=a[0].owner)==null?void 0:Ie.name)+"",o,u,g,E,C=a[0].name+"",x,ee,te,ue,S,y,U,L,ce,O,be,K,X,fe=ke(a[0].created,!1)+"",$e,Se,he=ke(a[0].updated,!0)+"",we,Ce,le,H;n=new Ne({props:{urls:a[0].urls,achievement:a[0].achievement,visible:a[0].banner!==void 0}});let j=a[0].stargazers_count&&He(a),z=!a[0].github&&Ze();U=new Ne({props:{urls:a[0].urls,visible:a[0].banner===void 0,inline:!0}});let P=a[0].desc&&Ge(a),re=a[1],T=[];for(let c=0;c<re.length;c+=1)T[c]=Je(Oe(a,re,c));const Xe=c=>k(T[c],1,1,()=>{T[c]=null});return{c(){e=b("article"),l=b("div"),B(n.$$.fragment),t=A(),r=b("div"),s=b("div"),i=b("h3"),h=b("a"),o=Z(f),g=Z(" / "),E=b("a"),x=Z(C),ue=A(),j&&j.c(),S=A(),z&&z.c(),y=A(),B(U.$$.fragment),ce=A(),O=b("div"),P&&P.c(),be=A(),K=b("footer"),X=b("p"),$e=Z(fe),Se=Z(" \u2014\u2014 "),we=Z(he),Ce=A(),le=b("ul");for(let c=0;c<T.length;c+=1)T[c].c();this.h()},l(c){e=$(c,"ARTICLE",{class:!0});var _=w(e);l=$(_,"DIV",{class:!0,style:!0});var V=w(l);J(n.$$.fragment,V),t=D(V),r=$(V,"DIV",{class:!0});var M=w(r);s=$(M,"DIV",{class:!0});var Y=w(s);i=$(Y,"H3",{});var ne=w(i);h=$(ne,"A",{class:!0,href:!0});var me=w(h);o=G(me,f),me.forEach(p),g=G(ne," / "),E=$(ne,"A",{class:!0,style:!0,href:!0});var pe=w(E);x=G(pe,C),pe.forEach(p),ne.forEach(p),Y.forEach(p),ue=D(M),j&&j.l(M),S=D(M),z&&z.l(M),y=D(M),J(U.$$.fragment,M),M.forEach(p),V.forEach(p),ce=D(_),O=$(_,"DIV",{class:!0});var se=w(O);P&&P.l(se),be=D(se),K=$(se,"FOOTER",{class:!0});var ae=w(K);X=$(ae,"P",{class:!0});var I=w(X);$e=G(I,fe),Se=G(I," \u2014\u2014 "),we=G(I,he),I.forEach(p),Ce=D(ae),le=$(ae,"UL",{class:!0});var de=w(le);for(let ye=0;ye<T.length;ye+=1)T[ye].l(de);de.forEach(p),ae.forEach(p),se.forEach(p),_.forEach(p),this.h()},h(){var c,_,V,M,Y;m(h,"class","owner svelte-4x6v3x"),m(h,"href",u=(c=a[0].owner)==null?void 0:c.url),m(E,"class","repo svelte-4x6v3x"),m(E,"style",ee=!((_=a[0].urls)!=null&&_.repo)&&!((V=a[0].urls)!=null&&V.main)?"text-decoration: none;":void 0),m(E,"href",te=((M=a[0].urls)==null?void 0:M.repo)||((Y=a[0].urls)==null?void 0:Y.main)),m(s,"class","id svelte-4x6v3x"),m(r,"class","info svelte-4x6v3x"),m(l,"class","header svelte-4x6v3x"),m(l,"style",L=(a[0].enchanted?"":"--enchanted: none;")+(a[0].banner?`min-height: 190px; background-image: url('${a[0].banner}')`:"")),m(X,"class","time svelte-4x6v3x"),m(le,"class","svelte-4x6v3x"),m(K,"class","svelte-4x6v3x"),m(O,"class","body svelte-4x6v3x"),m(e,"class","card svelte-4x6v3x")},m(c,_){R(c,e,_),d(e,l),q(n,l,null),d(l,t),d(l,r),d(r,s),d(s,i),d(i,h),d(h,o),d(i,g),d(i,E),d(E,x),d(r,ue),j&&j.m(r,null),d(r,S),z&&z.m(r,null),d(r,y),q(U,r,null),d(e,ce),d(e,O),P&&P.m(O,null),d(O,be),d(O,K),d(K,X),d(X,$e),d(X,Se),d(X,we),d(K,Ce),d(K,le);for(let V=0;V<T.length;V+=1)T[V].m(le,null);H=!0},p(c,[_]){var Y,ne,me,pe,se,ae;const V={};_&1&&(V.urls=c[0].urls),_&1&&(V.achievement=c[0].achievement),_&1&&(V.visible=c[0].banner!==void 0),n.$set(V),(!H||_&1)&&f!==(f=((Y=c[0].owner)==null?void 0:Y.name)+"")&&ie(o,f),(!H||_&1&&u!==(u=(ne=c[0].owner)==null?void 0:ne.url))&&m(h,"href",u),(!H||_&1)&&C!==(C=c[0].name+"")&&ie(x,C),(!H||_&1&&ee!==(ee=!((me=c[0].urls)!=null&&me.repo)&&!((pe=c[0].urls)!=null&&pe.main)?"text-decoration: none;":void 0))&&m(E,"style",ee),(!H||_&1&&te!==(te=((se=c[0].urls)==null?void 0:se.repo)||((ae=c[0].urls)==null?void 0:ae.main)))&&m(E,"href",te),c[0].stargazers_count?j?(j.p(c,_),_&1&&v(j,1)):(j=He(c),j.c(),v(j,1),j.m(r,S)):j&&(Q(),k(j,1,1,()=>{j=null}),W()),c[0].github?z&&(z.d(1),z=null):z||(z=Ze(),z.c(),z.m(r,y));const M={};if(_&1&&(M.urls=c[0].urls),_&1&&(M.visible=c[0].banner===void 0),U.$set(M),(!H||_&1&&L!==(L=(c[0].enchanted?"":"--enchanted: none;")+(c[0].banner?`min-height: 190px; background-image: url('${c[0].banner}')`:"")))&&m(l,"style",L),c[0].desc?P?P.p(c,_):(P=Ge(c),P.c(),P.m(O,be)):P&&(P.d(1),P=null),(!H||_&1)&&fe!==(fe=ke(c[0].created,!1)+"")&&ie($e,fe),(!H||_&1)&&he!==(he=ke(c[0].updated,!0)+"")&&ie(we,he),_&3){re=c[1];let I;for(I=0;I<re.length;I+=1){const de=Oe(c,re,I);T[I]?(T[I].p(de,_),v(T[I],1)):(T[I]=Je(de),T[I].c(),v(T[I],1),T[I].m(le,null))}for(Q(),I=re.length;I<T.length;I+=1)Xe(I);W()}},i(c){if(!H){v(n.$$.fragment,c),v(j),v(U.$$.fragment,c);for(let _=0;_<re.length;_+=1)v(T[_]);H=!0}},o(c){k(n.$$.fragment,c),k(j),k(U.$$.fragment,c),T=T.filter(Boolean);for(let _=0;_<T.length;_+=1)k(T[_]);H=!1},d(c){c&&p(e),F(n),j&&j.d(),z&&z.d(),F(U),P&&P.d(),We(T,c)}}}function ke(a,e){return a?a.includes("-")?new Date(a).toDateString().substring(3):a:e?new Date().toDateString().substring(3):"unknown"}function st(a,e,l){let n;var t;let{repo:r}=e;return a.$$set=s=>{"repo"in s&&l(0,r=s.repo)},a.$$.update=()=>{a.$$.dirty&5&&l(1,n=Object.keys(l(2,t=r.languages)!==null&&t!==void 0?t:{}))},[r,n,t]}class at extends ve{constructor(e){super(),_e(this,e,st,nt,ge,{repo:0})}}const qe={emberry:{enchanted:!0,banner:N+"/img/banners/emberry.webp",languages:{Tauri:1}},youtile:{banner:N+"/img/banners/youtile.webp",urls:{download:"https://github.com/youtile/youtile/releases/latest"},languages:{Tauri:1}},ld49:{enchanted:!0,name:"Rogue Planets",banner:N+"/img/banners/rogue-planets.webp",urls:{itch:"https://roboolet.itch.io/rogue-planets"},desc:"Our game for the 49th Ludum Dare gamejam",achievement:{url:"https://ldjam.com/events/ludum-dare/49/rogue-planets",text:"39"}},VoxelGameEngine:{banner:N+"/img/banners/vge.webp",desc:"An unfinished Ray Marcher build using C++ and OpenGL"},miniturn:{banner:N+"/img/banners/miniturn.webp",urls:{main:"https://store.steampowered.com/app/1069220/Miniturn",steam:"https://store.steampowered.com/app/1069220/Miniturn"},desc:"Turn-based strategy game with a twist",languages:{Unity:2,"C#":1},created:"2020-03-03T07:32:24Z",updated:"2021-11-22T07:32:24Z"},"6502-Emulator":{banner:N+"/img/banners/mos6502.webp",desc:"A basic MOS 6502 processor emulator"},prompt_:{banner:N+"/img/banners/prompt.webp",desc:"A 2D puzzle platformer with an ascii art style",urls:{main:"https://maxcoppen.itch.io/prompt",itch:"https://maxcoppen.itch.io/prompt"},languages:{Unity:2,"C#":1},created:"2020",updated:"2021-11-26T07:32:24Z"},codex:{banner:N+"/img/banners/codex.webp",desc:"My attempt to create a flexible & lightweight code editor",languages:{Rust:5,Svelte:4,TypeScript:3,SCSS:2,Tauri:1},created:"2021-09-28"},CSNN:{banner:N+"/img/banners/csnn.webp",desc:"Small incomplete Neural Network library for C#"},barnstorm:{banner:N+"/img/banners/barnstorm-banner.jpg",desc:"A Frantic Co-op farming game my friends and I made",languages:{Unity:2,"C#":1},created:"2020-03-03T07:32:24Z",updated:"2021-11-22T07:32:24Z"},"Slash 'n Catch":{banner:N+"/img/banners/snc.webp",desc:"A project where I gained loads of gamedev experience.",languages:{Unity:2,"C#":1},created:"2018",updated:"2019"},AsciiEngine:{desc:"Simple little Game Engine made with C#."}};function it(a,e,l){const n={enchanted:!1,github:e!=null,name:l,owner:{name:"mxcop",url:"https://github.com/mxcop"},...a};return e?(n.languages={...e.languages,...n.languages},n.owner={...n.owner,...e.owner},n.urls={...n.urls,...e.urls},{...e,...n}):n}function Fe(a,e,l){const n=a.slice();return n[3]=e[l],n}function Qe(a){let e,l;return e=new at({props:{repo:a[3]}}),{c(){B(e.$$.fragment)},l(n){J(e.$$.fragment,n)},m(n,t){q(e,n,t),l=!0},p(n,t){const r={};t&1&&(r.repo=n[3]),e.$set(r)},i(n){l||(v(e.$$.fragment,n),l=!0)},o(n){k(e.$$.fragment,n),l=!1},d(n){F(e,n)}}}function ot(a){let e,l,n,t,r,s=a[0],i=[];for(let f=0;f<s.length;f+=1)i[f]=Qe(Fe(a,s,f));const h=f=>k(i[f],1,1,()=>{i[f]=null});return{c(){e=b("section"),l=b("div"),n=Z("Projects & Contributions"),t=A();for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=$(f,"SECTION",{class:!0});var o=w(e);l=$(o,"DIV",{class:!0});var u=w(l);n=G(u,"Projects & Contributions"),u.forEach(p),t=D(o);for(let g=0;g<i.length;g+=1)i[g].l(o);o.forEach(p),this.h()},h(){m(l,"class","title svelte-1ip7pzu"),m(e,"class","projects svelte-1ip7pzu")},m(f,o){R(f,e,o),d(e,l),d(l,n),d(e,t);for(let u=0;u<i.length;u+=1)i[u].m(e,null);r=!0},p(f,[o]){if(o&1){s=f[0];let u;for(u=0;u<s.length;u+=1){const g=Fe(f,s,u);i[u]?(i[u].p(g,o),v(i[u],1)):(i[u]=Qe(g),i[u].c(),v(i[u],1),i[u].m(e,null))}for(Q(),u=s.length;u<i.length;u+=1)h(u);W()}},i(f){if(!r){for(let o=0;o<s.length;o+=1)v(i[o]);r=!0}},o(f){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)k(i[o]);r=!1},d(f){f&&p(e),We(i,f)}}}function ut(a,e,l){let n,{repos:t}=e;function r(){const s=Object.keys(qe),i=[];for(let h=0;h<s.length;h++){const f=t.find(o=>o.name==s[h]);i.push(it(qe[s[h]],f,s[h]))}l(0,n=i)}return Ke(()=>{r(),Ye(s=>{l(1,t=s),r()})}),a.$$set=s=>{"repos"in s&&l(1,t=s.repos)},l(0,n=[]),[n,t]}class ct extends ve{constructor(e){super(),_e(this,e,ut,ot,ge,{repos:1})}}function ft(a){let e,l,n,t,r;return l=new et({}),t=new ct({props:{repos:a[0].repos}}),{c(){e=b("div"),B(l.$$.fragment),n=A(),B(t.$$.fragment),this.h()},l(s){e=$(s,"DIV",{class:!0});var i=w(e);J(l.$$.fragment,i),n=D(i),J(t.$$.fragment,i),i.forEach(p),this.h()},h(){m(e,"class","content svelte-1h2mek0")},m(s,i){R(s,e,i),q(l,e,null),d(e,n),q(t,e,null),r=!0},p(s,[i]){const h={};i&1&&(h.repos=s[0].repos),t.$set(h)},i(s){r||(v(l.$$.fragment,s),v(t.$$.fragment,s),r=!0)},o(s){k(l.$$.fragment,s),k(t.$$.fragment,s),r=!1},d(s){s&&p(e),F(l),F(t)}}}function ht(a,e,l){let{data:n}=e;return Ke(()=>{}),a.$$set=t=>{"data"in t&&l(0,n=t.data)},[n]}class vt extends ve{constructor(e){super(),_e(this,e,ht,ft,ge,{data:0})}}export{vt as default};
