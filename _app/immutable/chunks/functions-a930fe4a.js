const C=/^[a-z0-9]+(-[a-z0-9]+)*$/,L=(e,t,o,r="")=>{const n=e.split(":");if(e.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;r=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const c=n.pop(),l=n.pop(),u={provider:n.length>0?n[0]:r,prefix:l,name:c};return t&&!F(u)?null:u}const i=n[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!F(c)?null:c}if(o&&r===""){const c={provider:r,prefix:"",name:i};return t&&!F(c,o)?null:c}return null},F=(e,t)=>e?!!((e.provider===""||e.provider.match(C))&&(t&&e.prefix===""||e.prefix.match(C))&&e.name.match(C)):!1,de=Object.freeze({left:0,top:0,width:16,height:16}),O=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),A=Object.freeze({...de,...O}),z=Object.freeze({...A,body:"",hidden:!1});function je(e,t){const o={};!e.hFlip!=!t.hFlip&&(o.hFlip=!0),!e.vFlip!=!t.vFlip&&(o.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(o.rotate=r),o}function Z(e,t){const o=je(e,t);for(const r in z)r in O?r in e&&!(r in o)&&(o[r]=O[r]):r in t?o[r]=t[r]:r in e&&(o[r]=e[r]);return o}function Ee(e,t){const o=e.icons,r=e.aliases||{},n=Object.create(null);function i(s){if(o[s])return n[s]=[];if(!(s in n)){n[s]=null;const c=r[s]&&r[s].parent,l=c&&i(c);l&&(n[s]=[c].concat(l))}return n[s]}return(t||Object.keys(o).concat(Object.keys(r))).forEach(i),n}function Fe(e,t,o){const r=e.icons,n=e.aliases||{};let i={};function s(c){i=Z(r[c]||n[c],i)}return s(t),o.forEach(s),Z(e,i)}function pe(e,t){const o=[];if(typeof e!="object"||typeof e.icons!="object")return o;e.not_found instanceof Array&&e.not_found.forEach(n=>{t(n,null),o.push(n)});const r=Ee(e);for(const n in r){const i=r[n];i&&(t(n,Fe(e,n,i)),o.push(n))}return o}const Me={provider:"",aliases:{},not_found:{},...de};function R(e,t){for(const o in t)if(o in e&&typeof e[o]!=typeof t[o])return!1;return!0}function he(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!R(e,Me))return null;const o=t.icons;for(const n in o){const i=o[n];if(!n.match(C)||typeof i.body!="string"||!R(i,z))return null}const r=t.aliases||{};for(const n in r){const i=r[n],s=i.parent;if(!n.match(C)||typeof s!="string"||!o[s]&&!r[s]||!R(i,z))return null}return t}const ee=Object.create(null);function Oe(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function S(e,t){const o=ee[e]||(ee[e]=Object.create(null));return o[t]||(o[t]=Oe(e,t))}function V(e,t){return he(t)?pe(t,(o,r)=>{r?e.icons[o]=r:e.missing.add(o)}):[]}function Le(e,t,o){try{if(typeof o.body=="string")return e.icons[t]={...o},!0}catch{}return!1}let T=!1;function ge(e){return typeof e=="boolean"&&(T=e),T}function Ae(e){const t=typeof e=="string"?L(e,!0,T):e;if(t){const o=S(t.provider,t.prefix),r=t.name;return o.icons[r]||(o.missing.has(r)?null:void 0)}}function Ne(e,t){const o=L(e,!0,T);if(!o)return!1;const r=S(o.provider,o.prefix);return Le(r,o.name,t)}function De(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),T&&!t&&!e.prefix){let n=!1;return he(e)&&(e.prefix="",pe(e,(i,s)=>{s&&Ne(i,s)&&(n=!0)})),n}const o=e.prefix;if(!F({provider:t,prefix:o,name:"a"}))return!1;const r=S(t,o);return!!V(r,e)}const me=Object.freeze({width:null,height:null}),ye=Object.freeze({...me,...O}),Re=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Be=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function te(e,t,o){if(t===1)return e;if(o=o||100,typeof e=="number")return Math.ceil(e*t*o)/o;if(typeof e!="string")return e;const r=e.split(Re);if(r===null||!r.length)return e;const n=[];let i=r.shift(),s=Be.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?n.push(i):n.push(Math.ceil(c*t*o)/o)}else n.push(i);if(i=r.shift(),i===void 0)return n.join("");s=!s}}function ze(e,t){const o={...A,...e},r={...ye,...t},n={left:o.left,top:o.top,width:o.width,height:o.height};let i=o.body;[o,r].forEach(b=>{const m=[],I=b.hFlip,g=b.vFlip;let a=b.rotate;I?g?a+=2:(m.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),m.push("scale(-1 1)"),n.top=n.left=0):g&&(m.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),m.push("scale(1 -1)"),n.top=n.left=0);let y;switch(a<0&&(a-=Math.floor(a/4)*4),a=a%4,a){case 1:y=n.height/2+n.top,m.unshift("rotate(90 "+y.toString()+" "+y.toString()+")");break;case 2:m.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:y=n.width/2+n.left,m.unshift("rotate(-90 "+y.toString()+" "+y.toString()+")");break}a%2===1&&(n.left!==n.top&&(y=n.left,n.left=n.top,n.top=y),n.width!==n.height&&(y=n.width,n.width=n.height,n.height=y)),m.length&&(i='<g transform="'+m.join(" ")+'">'+i+"</g>")});const s=r.width,c=r.height,l=n.width,u=n.height;let f,d;return s===null?(d=c===null?"1em":c==="auto"?u:c,f=te(d,l/u)):(f=s==="auto"?l:s,d=c===null?te(f,u/l):c==="auto"?u:c),{attributes:{width:f.toString(),height:d.toString(),viewBox:n.left.toString()+" "+n.top.toString()+" "+l.toString()+" "+u.toString()},body:i}}const Qe=/\sid="(\S+)"/g,qe="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let _e=0;function $e(e,t=qe){const o=[];let r;for(;r=Qe.exec(e);)o.push(r[1]);return o.length&&o.forEach(n=>{const i=typeof t=="function"?t(n):t+(_e++).toString(),s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+i+"$3")}),e}const Q=Object.create(null);function He(e,t){Q[e]=t}function q(e){return Q[e]||Q[""]}function G(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const K=Object.create(null),k=["https://api.simplesvg.com","https://api.unisvg.com"],M=[];for(;k.length>0;)k.length===1||Math.random()>.5?M.push(k.shift()):M.push(k.pop());K[""]=G({resources:["https://api.iconify.design"].concat(M)});function Ue(e,t){const o=G(t);return o===null?!1:(K[e]=o,!0)}function J(e){return K[e]}const Ve=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let ne=Ve();function Ge(e,t){const o=J(e);if(!o)return 0;let r;if(!o.maxURL)r=0;else{let n=0;o.resources.forEach(s=>{n=Math.max(n,s.length)});const i=t+".json?icons=";r=o.maxURL-n-o.path.length-i.length}return r}function Ke(e){return e===404}const Je=(e,t,o)=>{const r=[],n=Ge(e,t),i="icons";let s={type:i,provider:e,prefix:t,icons:[]},c=0;return o.forEach((l,u)=>{c+=l.length+1,c>=n&&u>0&&(r.push(s),s={type:i,provider:e,prefix:t,icons:[]},c=l.length),s.icons.push(l)}),r.push(s),r};function We(e){if(typeof e=="string"){const t=J(e);if(t)return t.path}return"/"}const Xe=(e,t,o)=>{if(!ne){o("abort",424);return}let r=We(t.provider);switch(t.type){case"icons":{const i=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});r+=i+".json?"+l.toString();break}case"custom":{const i=t.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:o("abort",400);return}let n=503;ne(e+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{o(Ke(s)?"abort":"next",s)});return}return n=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{o("next",n)});return}setTimeout(()=>{o("success",i)})}).catch(()=>{o("next",n)})},Ye={prepare:Je,send:Xe};function Ze(e){const t={loaded:[],missing:[],pending:[]},o=Object.create(null);e.sort((n,i)=>n.provider!==i.provider?n.provider.localeCompare(i.provider):n.prefix!==i.prefix?n.prefix.localeCompare(i.prefix):n.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return e.forEach(n=>{if(r.name===n.name&&r.prefix===n.prefix&&r.provider===n.provider)return;r=n;const i=n.provider,s=n.prefix,c=n.name,l=o[i]||(o[i]=Object.create(null)),u=l[s]||(l[s]=S(i,s));let f;c in u.icons?f=t.loaded:s===""||u.missing.has(c)?f=t.missing:f=t.pending;const d={provider:i,prefix:s,name:c};f.push(d)}),t}function be(e,t){e.forEach(o=>{const r=o.loaderCallbacks;r&&(o.loaderCallbacks=r.filter(n=>n.id!==t))})}function et(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let o=!1;const r=e.provider,n=e.prefix;t.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==n)return!0;const u=l.name;if(e.icons[u])s.loaded.push({provider:r,prefix:n,name:u});else if(e.missing.has(u))s.missing.push({provider:r,prefix:n,name:u});else return o=!0,!0;return!1}),s.pending.length!==c&&(o||be([e],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let tt=0;function nt(e,t,o){const r=tt++,n=be.bind(null,o,r);if(!t.pending.length)return n;const i={id:r,icons:t,callback:e,abort:n};return o.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),n}function ot(e,t=!0,o=!1){const r=[];return e.forEach(n=>{const i=typeof n=="string"?L(n,t,o):n;i&&r.push(i)}),r}var rt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function it(e,t,o,r){const n=e.resources.length,i=e.random?Math.floor(Math.random()*n):e.index;let s;if(e.random){let p=e.resources.slice(0);for(s=[];p.length>1;){const w=Math.floor(Math.random()*p.length);s.push(p[w]),p=p.slice(0,w).concat(p.slice(w+1))}s=s.concat(p)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const c=Date.now();let l="pending",u=0,f,d=null,h=[],b=[];typeof r=="function"&&b.push(r);function m(){d&&(clearTimeout(d),d=null)}function I(){l==="pending"&&(l="aborted"),m(),h.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),h=[]}function g(p,w){w&&(b=[]),typeof p=="function"&&b.push(p)}function a(){return{startTime:c,payload:t,status:l,queriesSent:u,queriesPending:h.length,subscribe:g,abort:I}}function y(){l="failed",b.forEach(p=>{p(void 0,f)})}function Y(){h.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),h=[]}function Pe(p,w,v){const j=w!=="success";switch(h=h.filter(x=>x!==p),l){case"pending":break;case"failed":if(j||!e.dataAfterTimeout)return;break;default:return}if(w==="abort"){f=v,y();return}if(j){f=v,h.length||(s.length?D():y());return}if(m(),Y(),!e.random){const x=e.resources.indexOf(p.resource);x!==-1&&x!==e.index&&(e.index=x)}l="completed",b.forEach(x=>{x(v)})}function D(){if(l!=="pending")return;m();const p=s.shift();if(p===void 0){if(h.length){d=setTimeout(()=>{m(),l==="pending"&&(Y(),y())},e.timeout);return}y();return}const w={status:"pending",resource:p,callback:(v,j)=>{Pe(w,v,j)}};h.push(w),u++,d=setTimeout(D,e.rotate),o(p,t,w.callback)}return setTimeout(D),a}function we(e){const t={...rt,...e};let o=[];function r(){o=o.filter(c=>c().status==="pending")}function n(c,l,u){const f=it(t,c,l,(d,h)=>{r(),u&&u(d,h)});return o.push(f),f}function i(c){return o.find(l=>c(l))||null}return{query:n,find:i,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function oe(){}const B=Object.create(null);function st(e){if(!B[e]){const t=J(e);if(!t)return;const o=we(t),r={config:t,redundancy:o};B[e]=r}return B[e]}function ct(e,t,o){let r,n;if(typeof e=="string"){const i=q(e);if(!i)return o(void 0,424),oe;n=i.send;const s=st(e);s&&(r=s.redundancy)}else{const i=G(e);if(i){r=we(i);const s=e.resources?e.resources[0]:"",c=q(s);c&&(n=c.send)}}return!r||!n?(o(void 0,424),oe):r.query(t,n,o)().abort}const re="iconify2",P="iconify",xe=P+"-count",ie=P+"-version",Se=36e5,lt=168;function _(e,t){try{return e.getItem(t)}catch{}}function W(e,t,o){try{return e.setItem(t,o),!0}catch{}}function se(e,t){try{e.removeItem(t)}catch{}}function $(e,t){return W(e,xe,t.toString())}function H(e){return parseInt(_(e,xe))||0}const N={local:!0,session:!0},Ie={local:new Set,session:new Set};let X=!1;function ft(e){X=e}let E=typeof window>"u"?{}:window;function ve(e){const t=e+"Storage";try{if(E&&E[t]&&typeof E[t].length=="number")return E[t]}catch{}N[e]=!1}function ke(e,t){const o=ve(e);if(!o)return;const r=_(o,ie);if(r!==re){if(r){const c=H(o);for(let l=0;l<c;l++)se(o,P+l.toString())}W(o,ie,re),$(o,0);return}const n=Math.floor(Date.now()/Se)-lt,i=c=>{const l=P+c.toString(),u=_(o,l);if(typeof u=="string"){try{const f=JSON.parse(u);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>n&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&t(f,c))return!0}catch{}se(o,l)}};let s=H(o);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,$(o,s)):Ie[e].add(c))}function Ce(){if(!X){ft(!0);for(const e in N)ke(e,t=>{const o=t.data,r=t.provider,n=o.prefix,i=S(r,n);if(!V(i,o).length)return!1;const s=o.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function ut(e,t){const o=e.lastModifiedCached;if(o&&o>=t)return o===t;if(e.lastModifiedCached=t,o)for(const r in N)ke(r,n=>{const i=n.data;return n.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t});return!0}function at(e,t){X||Ce();function o(r){let n;if(!N[r]||!(n=ve(r)))return;const i=Ie[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=H(n),!$(n,s+1))return;const c={cached:Math.floor(Date.now()/Se),provider:e.provider,data:t};return W(n,P+s.toString(),JSON.stringify(c))}t.lastModified&&!ut(e,t.lastModified)||!Object.keys(t.icons).length||(t.not_found&&(t=Object.assign({},t),delete t.not_found),o("local")||o("session"))}function ce(){}function dt(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,et(e)}))}function pt(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:o,prefix:r}=e,n=e.iconsToLoad;delete e.iconsToLoad;let i;if(!n||!(i=q(o)))return;i.prepare(o,r,n).forEach(c=>{ct(o,c,(l,u)=>{if(typeof l!="object"){if(u!==404)return;c.icons.forEach(f=>{e.missing.add(f)})}else try{const f=V(e,l);if(!f.length)return;const d=e.pendingIcons;d&&f.forEach(h=>{d.delete(h)}),at(e,l)}catch(f){console.error(f)}dt(e)})})}))}const ht=(e,t)=>{const o=ot(e,!0,ge()),r=Ze(o);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,ce)}),()=>{l=!1}}const n=Object.create(null),i=[];let s,c;return r.pending.forEach(l=>{const{provider:u,prefix:f}=l;if(f===c&&u===s)return;s=u,c=f,i.push(S(u,f));const d=n[u]||(n[u]=Object.create(null));d[f]||(d[f]=[])}),r.pending.forEach(l=>{const{provider:u,prefix:f,name:d}=l,h=S(u,f),b=h.pendingIcons||(h.pendingIcons=new Set);b.has(d)||(b.add(d),n[u][f].push(d))}),i.forEach(l=>{const{provider:u,prefix:f}=l;n[u][f].length&&pt(l,n[u][f])}),t?nt(t,r,i):ce};function gt(e,t){const o={...e};for(const r in t){const n=t[r],i=typeof n;r in me?(n===null||n&&(i==="string"||i==="number"))&&(o[r]=n):i===typeof o[r]&&(o[r]=r==="rotate"?n%4:n)}return o}const mt=/[\s,]+/;function yt(e,t){t.split(mt).forEach(o=>{switch(o.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function bt(e,t=0){const o=e.replace(/^-?[0-9.]*/,"");function r(n){for(;n<0;)n+=4;return n%4}if(o===""){const n=parseInt(e);return isNaN(n)?0:r(n)}else if(o!==e){let n=0;switch(o){case"%":n=25;break;case"deg":n=90}if(n){let i=parseFloat(e.slice(0,e.length-o.length));return isNaN(i)?0:(i=i/n,i%1===0?r(i):0)}}return t}function wt(e,t){let o=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)o+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+o+">"+e+"</svg>"}function xt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function St(e){return'url("data:image/svg+xml,'+xt(e)+'")'}const le={...ye,inline:!1},It={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},vt={display:"inline-block"},U={"background-color":"currentColor"},Te={"background-color":"transparent"},fe={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},ue={"-webkit-mask":U,mask:U,background:Te};for(const e in ue){const t=ue[e];for(const o in fe)t[e+"-"+o]=fe[o]}function ae(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function kt(e,t){const o=gt(le,t),r=t.mode||"svg",n=r==="svg"?{...It}:{};let i=typeof t.style=="string"?t.style:"";for(let g in t){const a=t[g];if(a!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":o[g]=a===!0||a==="true"||a===1;break;case"flip":typeof a=="string"&&yt(o,a);break;case"color":i=i+(i.length>0&&i.trim().slice(-1)!==";"?";":"")+"color: "+a+"; ";break;case"rotate":typeof a=="string"?o[g]=bt(a):typeof a=="number"&&(o[g]=a);break;case"ariaHidden":case"aria-hidden":a!==!0&&a!=="true"&&delete n["aria-hidden"];break;default:if(g.slice(0,3)==="on:")break;le[g]===void 0&&(n[g]=a)}}const s=ze(e,o),c=s.attributes;if(o.inline&&(i="vertical-align: -0.125em; "+i),r==="svg"){Object.assign(n,c),i!==""&&(n.style=i);let g=0,a=t.id;return typeof a=="string"&&(a=a.replace(/-/g,"_")),{svg:!0,attributes:n,body:$e(s.body,a?()=>a+"ID"+g++:"iconifySvelte")}}const{body:l,width:u,height:f}=e,d=r==="mask"||(r==="bg"?!1:l.indexOf("currentColor")!==-1),h=wt(l,{...c,width:u+"",height:f+""}),m={"--svg":St(h),width:ae(c.width),height:ae(c.height),...vt,...d?U:Te};let I="";for(const g in m)I+=g+": "+m[g]+";";return n.style=I+i,{svg:!1,attributes:n}}ge(!0);He("",Ye);if(typeof document<"u"&&typeof window<"u"){Ce();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,o="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!De(r))&&console.error(o)}catch{console.error(o)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let o in t){const r="IconifyProviders["+o+"] is invalid.";try{const n=t[o];if(typeof n!="object"||!n||n.resources===void 0)continue;Ue(o,n)||console.error(r)}catch{console.error(r)}}}}function Ct(e,t,o,r,n){function i(){t.loading&&(t.loading.abort(),t.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return t.name="",i(),{data:{...A,...e}};let s;if(typeof e!="string"||(s=L(e,!1,!0))===null)return i(),null;const c=Ae(s);if(!c)return o&&(!t.loading||t.loading.name!==e)&&(i(),t.name="",t.loading={name:e,abort:ht([s],r)}),null;i(),t.name!==e&&(t.name=e,n&&!t.destroyed&&n(e));const l=["iconify"];return s.prefix!==""&&l.push("iconify--"+s.prefix),s.provider!==""&&l.push("iconify--"+s.provider),{data:c,classes:l}}function Tt(e,t){return e?kt({...A,...e},t):null}export{De as a,Ct as c,Tt as g};
