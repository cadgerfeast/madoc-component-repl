import{S as e,i as t,s as n,p as s,D as o,u as i,v as a,b as c,E as l,w as r,P as u,M as d,a as h,x as f,N as m,F as v,o as p,r as y,U as w,V as g,n as $,d as b,A as j,B as E,C as x,R as C}from"./index.e9726e59.js";async function I(e=1){return new Promise(t=>{setTimeout(()=>{t()},e)})}function V(e,t){const{[t]:n,...s}=e;return s}const{window:k}=x;function D(e,t,n){const s=e.slice();return s[40]=t[n],s[42]=n,s}function M(e){let t,n,p,y,w,g,$,b,j=e[40].name+"";function E(...t){return e[33](e[42],...t)}return{c(){t=s("li"),n=s("i"),y=s("span"),w=o(j),g=s("i"),this.h()},l(e){t=i(e,"LI",{class:!0});var s=a(t);n=i(s,"I",{class:!0}),a(n).forEach(c),y=i(s,"SPAN",{class:!0});var o=a(y);w=l(o,j),o.forEach(c),g=i(s,"I",{class:!0}),a(g).forEach(c),s.forEach(c),this.h()},h(){r(n,"class",p=u(`icon ${e[40].lang}`)+" svelte-1iyw5jb"),r(y,"class","svelte-1iyw5jb"),r(g,"class",$=u("circle")+" svelte-1iyw5jb"),d(g,"active",e[12](e[40].name)),r(t,"class","svelte-1iyw5jb"),d(t,"active",e[13]().name===e[40].name)},m(e,s,o){h(e,t,s),f(t,n),f(t,y),f(y,w),f(t,g),o&&b(),b=m(t,"click",E)},p(s,o){e=s,16384&o[0]&&p!==(p=u(`icon ${e[40].lang}`)+" svelte-1iyw5jb")&&r(n,"class",p),16384&o[0]&&j!==(j=e[40].name+"")&&v(w,j),20480&o[0]&&d(g,"active",e[12](e[40].name)),24576&o[0]&&d(t,"active",e[13]().name===e[40].name)},d(e){e&&c(t),b()}}}function L(e){let t,n,o,l,u,v,j,E,x,C,I,V,L,A,B,K,N,W=e[14](),F=[];for(let t=0;t<W.length;t+=1)F[t]=M(D(e,W,t));return{c(){t=s("div"),n=s("div"),o=s("div"),l=p(),u=s("div"),v=s("nav"),j=s("ul");for(let e=0;e<F.length;e+=1)F[e].c();E=p(),x=s("div"),C=p(),I=s("div"),V=s("div"),L=p(),A=s("div"),B=s("iframe"),this.h()},l(e){t=i(e,"DIV",{class:!0,style:!0});var s=a(t);n=i(s,"DIV",{class:!0,style:!0});var r=a(n);o=i(r,"DIV",{class:!0}),a(o).forEach(c),l=y(r),u=i(r,"DIV",{class:!0});var d=a(u);v=i(d,"NAV",{class:!0});var h=a(v);j=i(h,"UL",{class:!0});var f=a(j);for(let e=0;e<F.length;e+=1)F[e].l(f);f.forEach(c),h.forEach(c),E=y(d),x=i(d,"DIV",{class:!0}),a(x).forEach(c),d.forEach(c),C=y(r),I=i(r,"DIV",{class:!0});var m=a(I);V=i(m,"DIV",{class:!0}),a(V).forEach(c),m.forEach(c),L=y(r),A=i(r,"DIV",{class:!0});var p=a(A);B=i(p,"IFRAME",{src:!0,class:!0,title:!0,frameBorder:!0,width:!0,height:!0}),a(B).forEach(c),p.forEach(c),r.forEach(c),s.forEach(c),this.h()},h(){r(o,"class","dummy-catcher svelte-1iyw5jb"),d(o,"active",e[9]),r(j,"class","svelte-1iyw5jb"),r(v,"class","svelte-1iyw5jb"),r(x,"class","editor-container svelte-1iyw5jb"),r(u,"class","editor svelte-1iyw5jb"),r(V,"class","border svelte-1iyw5jb"),r(I,"class","slider svelte-1iyw5jb"),B.src!==(K="javascript:void(0);")&&r(B,"src","javascript:void(0);"),r(B,"class","repl-view svelte-1iyw5jb"),r(B,"title","REPL"),r(B,"frameborder","0"),r(B,"width","100%"),r(B,"height","100%"),r(A,"class","iframe svelte-1iyw5jb"),r(n,"class","repl-container svelte-1iyw5jb"),w(n,"width",e[11]),d(n,"fullscreen",e[8]),r(t,"class","repl-wrapper svelte-1iyw5jb"),w(t,"height",e[10])},m(s,i,a){h(s,t,i),f(t,n),f(n,o),f(n,l),f(n,u),f(u,v),f(v,j);for(let e=0;e<F.length;e+=1)F[e].m(j,null);f(u,E),f(u,x),e[34](x),e[35](u),f(n,C),f(n,I),f(I,V),e[36](I),f(n,L),f(n,A),f(A,B),e[37](B),e[38](A),e[39](n),a&&g(N),N=[m(k,"keydown",e[19]),m(k,"mouseup",e[18]),m(k,"mousemove",e[32]),m(I,"mousedown",e[16])]},p(e,s){if(512&s[0]&&d(o,"active",e[9]),61440&s[0]){let t;for(W=e[14](),t=0;t<W.length;t+=1){const n=D(e,W,t);F[t]?F[t].p(n,s):(F[t]=M(n),F[t].c(),F[t].m(j,null))}for(;t<F.length;t+=1)F[t].d(1);F.length=W.length}2048&s[0]&&w(n,"width",e[11]),256&s[0]&&d(n,"fullscreen",e[8]),1024&s[0]&&w(t,"height",e[10])},i:$,o:$,d(n){n&&c(t),b(F,n),e[34](null),e[35](null),e[36](null),e[37](null),e[38](null),e[39](null),g(N)}}}function A(e,t,n){let s,o,i=$,a=()=>(i(),i=j(w,e=>n(26,s=e)),w),c=$,l=()=>(c(),c=j(u,e=>n(27,o=e)),u);e.$$.on_destroy.push(()=>i()),e.$$.on_destroy.push(()=>c());let{context:r}=t,{theme:u}=t;l();let d,h,f,m,v,p,y,{themes:w}=t;a();let g=!1,b=0,x=0,k={};function D(){for(const e of r.projects)for(const t of e.files)t.userCode=t.content}function M(){return"dark"===s[o].type}function L(){u.subscribe(e=>{window.monaco.editor.setTheme(M()?"vs-dark":"vs")}),(p=window.monaco.editor.create(f,{value:S().content,language:S().lang,theme:M()?"vs-dark":"vs",automaticLayout:!0,minimap:{enabled:!1},scrollBeyondLastLine:!1,contextmenu:!1})).onDidChangeModelContent(async e=>{await I();let t=S();const s=`${t.name}-${b}-${x}`;p.getValue()===S().userCode?n(24,k=V(k,s)):n(24,k={...t,[s]:p.getValue()})}),p.addAction({id:"save",label:"Save",keybindings:[monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd|monaco.KeyCode.KEY_S)],precondition:null,keybindingContext:null,contextMenuGroupId:"navigation",contextMenuOrder:1.5,run:()=>{let e=S();e.userCode=p.getValue(),n(24,k=V(k,`${e.name}-${b}-${x}`)),A()}}),p.addAction({id:"fullscreen",label:"Fullscreen",keybindings:[monaco.KeyCode.F11],precondition:null,keybindingContext:null,contextMenuGroupId:"navigation",contextMenuOrder:1.5,run:async()=>{n(8,g=!g),await I(),p.layout()}})}function A(){const e=r.projects[b].template;r.projects[b].files;y.contentWindow.document.removeEventListener("keydown",W),n(7,y=function(e,t){const n=document.createElement("iframe");n.src="javascript:void(0);",n.title=e.getAttribute("title"),n.frameBorder="0",n.className=e.className,n.width=e.width,n.height=e.height;const s=e.parentElement;return s.removeChild(e),s.appendChild(n),n.contentWindow.document.open(),n.contentWindow.document.write(t),n.contentWindow.document.close(),n}(y,function(e,t){let n=e;for(const e in t)for(;n.includes(e);)n=n.replace(e,t[e]);return n}(e,q()))),y.contentWindow.document.addEventListener("keydown",W)}function B(e){r.projects.length>1?n(22,b=e):n(23,x=e);const t=k[`${S().name}-${b}-${x}`]||S().userCode;p.setValue(t),monaco.editor.setModelLanguage(p.getModel(),S().lang),r["run-on-switch"]&&A()}E(async()=>{require.config({paths:{vs:"/assets/monaco-editor/vs"}}),require(["vs/editor/editor.main"],()=>{D(),L(),A()})});let K=!1;function N(e){if(K){const t=d.getBoundingClientRect(),s=e.clientX-t.left;s<=t.width-150&&s>=150&&(n(3,h.style.left=`${s-4}px`,h),n(5,m.style.width=`${s}px`,m),n(4,f.style.width=`${s}px`,f))}}async function W(e){122===e.keyCode&&g&&(e.preventDefault(),n(8,g=!1),await I(),p.layout())}let F,P,R,S,_,q;return e.$set=(e=>{"context"in e&&n(20,r=e.context),"theme"in e&&l(n(0,u=e.theme)),"themes"in e&&a(n(1,w=e.themes))}),e.$$.update=(()=>{1048576&e.$$.dirty[0]&&n(10,F=r.height||"300px"),1048576&e.$$.dirty[0]&&n(11,P=r.width||"100%"),29360128&e.$$.dirty[0]&&n(12,R=(e=>k[`${e}-${b}-${x}`])),13631488&e.$$.dirty[0]&&n(13,S=(()=>r.projects[b].files[x])),1048576&e.$$.dirty[0]&&n(14,_=(()=>{if(r.projects.length>1){const e=[];for(const t of r.projects)e.push(t.files[0]);return e}return r.projects[0].files})),5242880&e.$$.dirty[0]&&(q=(()=>{const e={};for(const t of r.projects[b].files)e[t.tpl]=t.userCode;return e}))}),[u,w,d,h,f,m,v,y,g,K,F,P,R,S,_,B,function(){n(9,K=!0)},N,function(){n(9,K=!1)},W,r,p,b,x,k,q,s,o,D,M,L,A,e=>{N(e)},e=>{B(e)},function(e){C[e?"unshift":"push"](()=>{n(4,f=e)})},function(e){C[e?"unshift":"push"](()=>{n(5,m=e)})},function(e){C[e?"unshift":"push"](()=>{n(3,h=e)})},function(e){C[e?"unshift":"push"](()=>{n(7,y=e)})},function(e){C[e?"unshift":"push"](()=>{n(6,v=e)})},function(e){C[e?"unshift":"push"](()=>{n(2,d=e)})}]}export default class extends e{constructor(e){super(),t(this,e,A,L,n,{context:20,theme:0,themes:1},[-1,-1])}}
