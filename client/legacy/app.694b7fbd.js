import{_ as t}from"./typeof.321bbc66.js";import{_ as e}from"./slicedToArray.e76636dd.js";import{_ as n,a as r}from"./asyncToGenerator.332733a3.js";import{g as a,_ as s,a as o,i,s as c,S as u,e as f,b as l,H as p,d as m,c as h,f as d,h as v,m as g,j as b,t as $,k as x,l as y,o as w,p as S,q as k,r as E,u as _,v as j,w as R,x as P,y as N,z as A,A as L,B as C,C as U,D as q,n as O,E as I,F as T,G as D,I as B,J as H,K as J,L as z,M as K}from"./index.d9729fef.js";import V from"@babel/runtime/helpers/esm/createSuper";import{w as G}from"./index.ce0bcf92.js";import{_ as M}from"./assertThisInitialized.bd636108.js";import{s as F}from"./utils.d6eaadca.js";var W={},X=a.document;function Y(t,e,n){var r=t.slice();return r[13]=e[n],r}function Q(t){for(var e,n=t[0].head,r=[],a=0;a<n.length;a+=1)r[a]=Z(Y(t,n,a));return{c:function(){for(var t=0;t<r.length;t+=1)r[t].c();e=f()},l:function(t){for(var n=0;n<r.length;n+=1)r[n].l(t);e=f()},m:function(t,n){for(var a=0;a<r.length;a+=1)r[a].m(t,n);l(t,e,n)},p:function(t,a){if(1&a){var s;for(n=t[0].head,s=0;s<n.length;s+=1){var o=Y(t,n,s);r[s]?r[s].p(o,a):(r[s]=Z(o),r[s].c(),r[s].m(e.parentNode,e))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d:function(t){m(r,t),t&&h(e)}}}function Z(t){var e,n=t[13]+"";return{c:function(){this.h()},l:function(t){this.h()},h:function(){e=new p(n,null)},m:function(t,n){e.m(t,n)},p:function(t,r){1&r&&n!==(n=t[13]+"")&&e.p(n)},d:function(t){t&&e.d()}}}function tt(t){var e,n,r=t[3];function a(t){return{props:{navbar:t[1]}}}if(r)var s=new r(a(t));return{c:function(){s&&d(s.$$.fragment),e=f()},l:function(t){s&&v(s.$$.fragment,t),e=f()},m:function(t,r){s&&g(s,t,r),l(t,e,r),n=!0},p:function(t,n){var o={};if(2&n&&(o.navbar=t[1]),r!==(r=t[3])){if(s){b();var i=s;$(i.$$.fragment,1,0,function(){x(i,1)}),y()}r?(s=new r(a(t)),d(s.$$.fragment),w(s.$$.fragment,1),g(s,e.parentNode,e)):s=null}else r&&s.$set(o)},i:function(t){n||(s&&w(s.$$.fragment,t),n=!0)},o:function(t){s&&$(s.$$.fragment,t),n=!1},d:function(t){t&&h(e),s&&x(s,t)}}}function et(t){var e,n,r=t[4];function a(t){return{props:{links:t[5]}}}if(r)var s=new r(a(t));return{c:function(){s&&d(s.$$.fragment),e=f()},l:function(t){s&&v(s.$$.fragment,t),e=f()},m:function(t,r){s&&g(s,t,r),l(t,e,r),n=!0},p:function(t,n){var o={};if(32&n&&(o.links=t[5]),r!==(r=t[4])){if(s){b();var i=s;$(i.$$.fragment,1,0,function(){x(i,1)}),y()}r?(s=new r(a(t)),d(s.$$.fragment),w(s.$$.fragment,1),g(s,e.parentNode,e)):s=null}else r&&s.$set(o)},i:function(t){n||(s&&w(s.$$.fragment,t),n=!0)},o:function(t){s&&$(s.$$.fragment,t),n=!1},d:function(t){t&&h(e),s&&x(s,t)}}}function nt(t){var n,r,a,s,o,i,c,u=t[0].head&&t[0].head.length&&Q(t),p=t[1]&&tt(t),m=t[5]&&et(t),d=t[12].default,v=S(d,t,t[11],null);return{c:function(){u&&u.c(),n=f(),r=k(),p&&p.c(),a=k(),s=E("main"),o=E("div"),m&&m.c(),i=k(),v&&v.c(),this.h()},l:function(t){var e=_('[data-svelte="svelte-145sgac"]',X.head);u&&u.l(e),n=f(),e.forEach(h),r=j(t),p&&p.l(t),a=j(t),s=R(t,"MAIN",{});var c=P(s);o=R(c,"DIV",{class:!0});var l=P(o);m&&m.l(l),i=j(l),v&&v.l(l),l.forEach(h),c.forEach(h),this.h()},h:function(){N(o,"class","app-container")},m:function(t,e){u&&u.m(X.head,null),A(X.head,n),l(t,r,e),p&&p.m(t,e),l(t,a,e),l(t,s,e),A(s,o),m&&m.m(o,null),A(o,i),v&&v.m(o,null),c=!0},p:function(t,r){var s=e(r,1)[0];t[0].head&&t[0].head.length?u?u.p(t,s):((u=Q(t)).c(),u.m(n.parentNode,n)):u&&(u.d(1),u=null),t[1]?p?(p.p(t,s),2&s&&w(p,1)):((p=tt(t)).c(),w(p,1),p.m(a.parentNode,a)):p&&(b(),$(p,1,1,function(){p=null}),y()),t[5]?m?(m.p(t,s),32&s&&w(m,1)):((m=et(t)).c(),w(m,1),m.m(o,i)):m&&(b(),$(m,1,1,function(){m=null}),y()),v&&v.p&&2048&s&&v.p(L(d,t,t[11],null),C(d,t[11],s,null))},i:function(t){c||(w(p),w(m),w(v,t),c=!0)},o:function(t){$(p),$(m),$(v,t),c=!1},d:function(t){u&&u.d(t),h(n),t&&h(r),p&&p.d(t),t&&h(a),t&&h(s),m&&m.d(),v&&v.d(t)}}}function rt(){return at.apply(this,arguments)}function at(){return(at=n(r.mark(function t(){var e,n;return r.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("_config.json");case 2:return e=t.sent,t.next=5,e.json();case 5:if(n=t.sent,200!==e.status){t.next=10;break}return t.abrupt("return",{config:n.config,navbar:n.navbar,sidebar:n.sidebar});case 10:this.error(e.status,n.message);case 11:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function st(t,e,a){var s,o=O,i=function(){return o(),o=U(u,function(t){return a(9,s=t)}),u};t.$$.on_destroy.push(function(){return o()});var c,u,f,l,p=se().page;i(),q(n(r.mark(function t(){return r.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,import("./theme.aff6b311.js");case 2:return c=t.sent.theme,t.t0=i,t.t1=a,t.next=7,import("./theme.aff6b311.js");case 7:return t.t2=u=t.sent.themes,t.t3=(0,t.t1)(2,t.t2),(0,t.t0)(t.t3),t.t4=a,t.next=13,import("./Navbar.08f79afb.js");case 13:return t.t5=f=t.sent.default,(0,t.t4)(3,t.t5),t.t6=a,t.next=18,import("./Sidebar.3149de07.js");case 18:t.t7=l=t.sent.default,(0,t.t6)(4,t.t7),c.subscribe(function(t){document.getElementsByTagName("html")[0].setAttribute("theme",t),document.getElementsByTagName("html")[0].setAttribute("theme-type",s[t].type)});case 21:case"end":return t.stop()}},t)})));var m=e.config,h=e.navbar,d=e.sidebar,v=e.segment,g=d&&d.links;F.subscribe(function(t){t&&t.sidebar?a(5,g=t.sidebar):a(5,g=d&&d.links)});var b=e.$$slots,$=void 0===b?{}:b,x=e.$$scope;return t.$set=function(t){"config"in t&&a(0,m=t.config),"navbar"in t&&a(1,h=t.navbar),"sidebar"in t&&a(6,d=t.sidebar),"segment"in t&&a(7,v=t.segment),"$$scope"in t&&a(11,x=t.$$scope)},[m,h,u,f,l,g,d,v,c,s,p,x,$]}var ot=function(t){s(n,u);var e=V(n);function n(t){var r;return o(this,n),r=e.call(this),i(M(r),t,st,nt,c,{config:0,navbar:1,sidebar:6,segment:7}),r}return n}();function it(t){var e,n,r=t[1].stack+"";return{c:function(){e=E("pre"),n=I(r)},l:function(t){e=R(t,"PRE",{});var a=P(e);n=T(a,r),a.forEach(h)},m:function(t,r){l(t,e,r),A(e,n)},p:function(t,e){2&e&&r!==(r=t[1].stack+"")&&D(n,r)},d:function(t){t&&h(e)}}}function ct(t){var n,r,a,s,o,i,c,u,p,m=t[1].message+"";document.title=n=t[0];var d=t[2]&&t[1].stack&&it(t);return{c:function(){r=k(),a=E("h1"),s=I(t[0]),o=k(),i=E("p"),c=I(m),u=k(),d&&d.c(),p=f(),this.h()},l:function(e){_('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(h),r=j(e),a=R(e,"H1",{class:!0});var n=P(a);s=T(n,t[0]),n.forEach(h),o=j(e),i=R(e,"P",{class:!0});var l=P(i);c=T(l,m),l.forEach(h),u=j(e),d&&d.l(e),p=f(),this.h()},h:function(){N(a,"class","svelte-1hjjbzs"),N(i,"class","svelte-1hjjbzs")},m:function(t,e){l(t,r,e),l(t,a,e),A(a,s),l(t,o,e),l(t,i,e),A(i,c),l(t,u,e),d&&d.m(t,e),l(t,p,e)},p:function(t,r){var a=e(r,1)[0];1&a&&n!==(n=t[0])&&(document.title=n),1&a&&D(s,t[0]),2&a&&m!==(m=t[1].message+"")&&D(c,m),t[2]&&t[1].stack?d?d.p(t,a):((d=it(t)).c(),d.m(p.parentNode,p)):d&&(d.d(1),d=null)},i:O,o:O,d:function(t){t&&h(r),t&&h(a),t&&h(o),t&&h(i),t&&h(u),d&&d.d(t),t&&h(p)}}}function ut(t,e,n){var r=e.status,a=e.error;return t.$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,a=t.error)},[r,a,!1]}var ft=function(t){s(n,u);var e=V(n);function n(t){var r;return o(this,n),r=e.call(this),i(M(r),t,ut,ct,c,{status:0,error:1}),r}return n}();function lt(t){var e,n,r=[t[4].props],a=t[4].component;function s(t){for(var e={},n=0;n<r.length;n+=1)e=B(e,r[n]);return{props:e}}if(a)var o=new a(s());return{c:function(){o&&d(o.$$.fragment),e=f()},l:function(t){o&&v(o.$$.fragment,t),e=f()},m:function(t,r){o&&g(o,t,r),l(t,e,r),n=!0},p:function(t,n){var i=16&n?H(r,[J(t[4].props)]):{};if(a!==(a=t[4].component)){if(o){b();var c=o;$(c.$$.fragment,1,0,function(){x(c,1)}),y()}a?(o=new a(s()),d(o.$$.fragment),w(o.$$.fragment,1),g(o,e.parentNode,e)):o=null}else a&&o.$set(i)},i:function(t){n||(o&&w(o.$$.fragment,t),n=!0)},o:function(t){o&&$(o.$$.fragment,t),n=!1},d:function(t){t&&h(e),o&&x(o,t)}}}function pt(t){var e,n=new ft({props:{error:t[0],status:t[1]}});return{c:function(){d(n.$$.fragment)},l:function(t){v(n.$$.fragment,t)},m:function(t,r){g(n,t,r),e=!0},p:function(t,e){var r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i:function(t){e||(w(n.$$.fragment,t),e=!0)},o:function(t){$(n.$$.fragment,t),e=!1},d:function(t){x(n,t)}}}function mt(t){var e,n,r,a,s=[pt,lt],o=[];function i(t,e){return t[0]?0:1}return e=i(t),n=o[e]=s[e](t),{c:function(){n.c(),r=f()},l:function(t){n.l(t),r=f()},m:function(t,n){o[e].m(t,n),l(t,r,n),a=!0},p:function(t,a){var c=e;(e=i(t))===c?o[e].p(t,a):(b(),$(o[c],1,1,function(){o[c]=null}),y(),(n=o[e])||(n=o[e]=s[e](t)).c(),w(n,1),n.m(r.parentNode,r))},i:function(t){a||(w(n),a=!0)},o:function(t){$(n),a=!1},d:function(t){o[e].d(t),t&&h(r)}}}function ht(t){for(var n,r=[{segment:t[2][0]},t[3].props],a={$$slots:{default:[mt]},$$scope:{ctx:t}},s=0;s<r.length;s+=1)a=B(a,r[s]);var o=new ot({props:a});return{c:function(){d(o.$$.fragment)},l:function(t){v(o.$$.fragment,t)},m:function(t,e){g(o,t,e),n=!0},p:function(t,n){var a=e(n,1)[0],s=12&a?H(r,[4&a&&{segment:t[2][0]},8&a&&J(t[3].props)]):{};83&a&&(s.$$scope={dirty:a,ctx:t}),o.$set(s)},i:function(t){n||(w(o.$$.fragment,t),n=!0)},o:function(t){$(o.$$.fragment,t),n=!1},d:function(t){x(o,t)}}}function dt(t,e,n){var r=e.stores,a=e.error,s=e.status,o=e.segments,i=e.level0,c=e.level1,u=void 0===c?null:c;return z(W,r),t.$set=function(t){"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,a=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,o=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,u=t.level1)},[a,s,o,i,u,r]}var vt,gt=function(t){s(n,u);var e=V(n);function n(t){var r;return o(this,n),r=e.call(this),i(M(r),t,dt,ht,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4}),r}return n}(),bt=[/^\/sitemap.json$/,/^\/(.+).json$/],$t=[{js:function(){return import("./index.9121e861.js")},css:["legacy/index.9121e861.css"]},{js:function(){return import("./sitemap.4c1e5d22.js")},css:[]},{js:function(){return import("./[...slug].0b724a79.js")},css:["legacy/[...slug].0b724a79.css"]}],xt=(vt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/sitemap\/?$/,parts:[{i:1}]},{pattern:/^\/(.+)\/?$/,parts:[{i:2,params:function(t){return{slug:vt(t[1]).split("/")}}}]}]);function yt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},n=Bt(new URL(t,document.baseURI));return n?(It[e.replaceState?"replaceState":"pushState"]({id:Ut},"",t),Jt(n,null).then(function(){})):(location.href=t,new Promise(function(t){}))}var wt,St,kt,Et,_t,jt="undefined"!=typeof __SAPPER__&&__SAPPER__,Rt=!1,Pt=[],Nt="{}",At={page:G({}),preloading:G(null),session:G(jt&&jt.session)};At.session.subscribe(function(){var t=n(r.mark(function t(e){var n,a,s,o,i,c;return r.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(Et=e,Rt){t.next=3;break}return t.abrupt("return");case 3:return _t=!0,n=Bt(new URL(location.href)),a=St={},t.next=8,Mt(n);case 8:if(s=t.sent,o=s.redirect,i=s.props,c=s.branch,a===St){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,Kt(o,c,i,n.page);case 16:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());var Lt,Ct=null;var Ut,qt=1;var Ot,It="undefined"!=typeof history?history:{pushState:function(t,e,n){},replaceState:function(t,e,n){},scrollRestoration:""},Tt={};function Dt(n){var r=Object.create(null);return n.length>0&&n.slice(1).split("&").forEach(function(n){var a=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(n.replace(/\+/g," "))),s=e(a,3),o=s[1],i=s[2],c=void 0===i?"":i;"string"==typeof r[o]&&(r[o]=[r[o]]),"object"===t(r[o])?r[o].push(c):r[o]=c}),r}function Bt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(jt.baseUrl))return null;var e=t.pathname.slice(jt.baseUrl.length);if(""===e&&(e="/"),!bt.some(function(t){return t.test(e)}))for(var n=0;n<xt.length;n+=1){var r=xt[n],a=r.pattern.exec(e);if(a){var s=Dt(t.search),o=r.parts[r.parts.length-1],i=o.params?o.params(a):{},c={host:location.host,path:e,query:s,params:i};return{href:t.href,route:r,match:a,page:c}}}}function Ht(){return{x:pageXOffset,y:pageYOffset}}function Jt(t,e,n,r){return zt.apply(this,arguments)}function zt(){return(zt=n(r.mark(function t(e,n,a,s){var o,i,c,u,f,l,p,m,h;return r.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n?Ut=n:(o=Ht(),Tt[Ut]=o,n=Ut=++qt,Tt[Ut]=a?o:{x:0,y:0}),Ut=n,wt&&At.preloading.set(!0),i=Ct&&Ct.href===e.href?Ct.promise:Mt(e),Ct=null,c=St={},t.next=8,i;case 8:if(u=t.sent,f=u.redirect,l=u.props,p=u.branch,c===St){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,Kt(f,p,l,e.page);case 16:document.activeElement&&document.activeElement.blur(),a||(m=Tt[n],s&&(h=document.getElementById(s.slice(1)))&&(m={x:0,y:h.getBoundingClientRect().top}),Tt[Ut]=m,m&&scrollTo(m.x,m.y));case 18:case"end":return t.stop()}},t)}))).apply(this,arguments)}function Kt(t,e,n,r){return Vt.apply(this,arguments)}function Vt(){return(Vt=n(r.mark(function t(e,n,a,s){var o,i;return r.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",yt(e.location,{replaceState:!0}));case 2:if(At.page.set(s),At.preloading.set(!1),!wt){t.next=8;break}wt.$set(a),t.next=17;break;case 8:return a.stores={page:{subscribe:At.page.subscribe},preloading:{subscribe:At.preloading.subscribe},session:At.session},t.next=11,kt;case 11:if(t.t0=t.sent,a.level0={props:t.t0},o=document.querySelector("#sapper-head-start"),i=document.querySelector("#sapper-head-end"),o&&i){for(;o.nextSibling!==i;)Yt(o.nextSibling);Yt(o),Yt(i)}wt=new gt({target:Lt,props:a,hydrate:!0});case 17:Pt=n,Nt=JSON.stringify(s.query),Rt=!0,_t=!1;case 21:case"end":return t.stop()}},t)}))).apply(this,arguments)}function Gt(t,e,n,r){if(r!==Nt)return!0;var a=Pt[t];return!!a&&(e!==a.segment||(!(!a.match||JSON.stringify(a.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function Mt(t){return Ft.apply(this,arguments)}function Ft(){return(Ft=n(r.mark(function t(e){var a,s,o,i,c,u,f,l,p,m,h;return r.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.route,s=e.page,o=s.path.split("/").filter(Boolean),i=null,c={error:null,status:200,segments:[o[0]]},u={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t,e){return fetch(t,e)}),redirect:function(t,e){if(i&&(i.statusCode!==t||i.location!==e))throw new Error("Conflicting redirects");i={statusCode:t,location:e}},error:function(t,e){c.error="string"==typeof e?new Error(e):e,c.status=t}},kt||(kt=jt.preloaded[0]||rt.call(u,{host:s.host,path:s.path,query:s.query,params:{}},Et)),l=1,t.prev=7,p=JSON.stringify(s.query),m=a.pattern.exec(s.path),h=!1,t.next=13,Promise.all(a.parts.map(function(){var t=n(r.mark(function t(n,a){var i,f,d,v,g,b;return r.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=o[a],Gt(a,i,m,p)&&(h=!0),c.segments[l]=o[a+1],n){t.next=5;break}return t.abrupt("return",{segment:i});case 5:if(f=l++,_t||h||!Pt[a]||Pt[a].part!==n.i){t.next=8;break}return t.abrupt("return",Pt[a]);case 8:return h=!1,t.next=11,Xt($t[n.i]);case 11:if(d=t.sent,v=d.default,g=d.preload,!Rt&&jt.preloaded[a+1]){t.next=25;break}if(!g){t.next=21;break}return t.next=18,g.call(u,{host:s.host,path:s.path,query:s.query,params:n.params?n.params(e.match):{}},Et);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:b=t.t0,t.next=26;break;case 25:b=jt.preloaded[a+1];case 26:return t.abrupt("return",c["level".concat(f)]={component:v,props:b,segment:i,match:m,part:n.i});case 27:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()));case 13:f=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),c.error=t.t0,c.status=500,f=[];case 21:return t.abrupt("return",{redirect:i,props:c,branch:f});case 22:case"end":return t.stop()}},t,null,[[7,16]])}))).apply(this,arguments)}function Wt(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise(function(t,n){var r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=function(){return t()},r.onerror=n,document.head.appendChild(r)})}function Xt(t){var e="string"==typeof t.css?[]:t.css.map(Wt);return e.unshift(t.js()),Promise.all(e).then(function(t){return t[0]})}function Yt(t){t.parentNode.removeChild(t)}function Qt(t){var e=Bt(new URL(t,document.baseURI));if(e)return Ct&&t===Ct.href||function(t,e){Ct={href:t,promise:e}}(t,Mt(e)),Ct.promise}function Zt(t){var e;return"scrollRestoration"in It&&(It.scrollRestoration="manual"),e=t.target,Lt=e,addEventListener("click",ne),addEventListener("popstate",ae),addEventListener("touchstart",ee),addEventListener("mousemove",te),Promise.resolve().then(function(){var t=location,e=t.hash,n=t.href;It.replaceState({id:qt},"",n);var r,a,s,o,i,c,u,f,l=new URL(location.href);if(jt.error)return r=location,a=r.host,s=r.pathname,o=r.search,i=jt.session,c=jt.preloaded,u=jt.status,f=jt.error,kt||(kt=c&&c[0]),void Kt(null,[],{error:f,status:u,session:i,level0:{props:kt},level1:{props:{status:u,error:f},component:ft},segments:c},{host:a,path:s,query:Dt(o),params:{}});var p=Bt(l);return p?Jt(p,qt,!0,e):void 0})}function te(t){clearTimeout(Ot),Ot=setTimeout(function(){ee(t)},20)}function ee(t){var e=re(t.target);e&&"prefetch"===e.rel&&Qt(e.href)}function ne(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var n=re(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,a=String(r?n.href.baseVal:n.href);if(a!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&(r?!n.target.baseVal:!n.target)){var s=new URL(a);if(s.pathname!==location.pathname||s.search!==location.search){var o=Bt(s);if(o)Jt(o,null,n.hasAttribute("sapper-noscroll"),s.hash),e.preventDefault(),It.pushState({id:Ut},"",s.href)}}}else location.hash||e.preventDefault()}}}function re(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ae(t){if(Tt[Ut]=Ht(),t.state){var e=Bt(new URL(location.href));e?Jt(e,t.state.id):location.href=location.href}else(function(t){Ut=t})(qt=qt+1),It.replaceState({id:Ut},"",location.href)}var se=function(){return K(W)};export{se as a,Zt as s};
