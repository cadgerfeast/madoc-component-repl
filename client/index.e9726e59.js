function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function i(t,n,e){t.$$.on_destroy.push(u(n,e))}function a(t,n,e,o){if(t){const r=f(t,n,e,o);return t[0](r)}}function f(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function l(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function d(t){return null==t?"":t}function h(t,n){t.appendChild(n)}function p(t,n,e){t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function g(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function $(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function y(){return b(" ")}function x(){return b("")}function v(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function _(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function w(t){return Array.from(t.childNodes)}function k(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){let n=0;for(;n<r.attributes.length;){const t=r.attributes[n];e[t.name]?n++:r.removeAttribute(t.name)}return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):$(n)}function E(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return b(n)}function A(t){return E(t," ")}function N(t,n){n=""+n,t.data!==n&&(t.data=n)}function j(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function T(t,n,e){t.classList[e?"add":"remove"](n)}function L(t,n=document.body){return Array.from(n.querySelectorAll(t))}class S{constructor(t,n=null){this.e=$("div"),this.a=n,this.u(t)}m(t,n=null){for(let e=0;e<this.n.length;e+=1)p(t,this.n[e],n);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach(m)}}let M;function q(t){M=t}function C(){if(!M)throw new Error("Function called outside component initialization");return M}function O(t){C().$$.on_mount.push(t)}function P(t){C().$$.after_update.push(t)}function z(t,n){C().$$.context.set(t,n)}function B(t){return C().$$.context.get(t)}const F=[],H=[],D=[],G=[],I=Promise.resolve();let J=!1;function K(t){D.push(t)}let Q=!1;const R=new Set;function U(){if(!Q){Q=!0;do{for(let t=0;t<F.length;t+=1){const n=F[t];q(n),V(n.$$)}for(F.length=0;H.length;)H.pop()();for(let t=0;t<D.length;t+=1){const n=D[t];R.has(n)||(R.add(n),n())}D.length=0}while(F.length);for(;G.length;)G.pop()();J=!1,Q=!1,R.clear()}}function V(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(K)}}const W=new Set;let X;function Y(){X={r:0,c:[],p:X}}function Z(){X.r||r(X.c),X=X.p}function tt(t,n){t&&t.i&&(W.delete(t),t.i(n))}function nt(t,n,e,o){if(t&&t.o){if(W.has(t))return;W.add(t),X.c.push(()=>{W.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function et(t,n){const e=n.token={};function o(t,o,r,c){if(n.token!==e)return;n.resolved=c;let s=n.ctx;void 0!==r&&((s=s.slice())[r]=c);const u=t&&(n.current=t)(s);let i=!1;n.block&&(n.blocks?n.blocks.forEach((t,e)=>{e!==o&&t&&(Y(),nt(t,1,1,()=>{n.blocks[e]=null}),Z())}):n.block.d(1),u.c(),tt(u,1),u.m(n.mount(),n.anchor),i=!0),n.block=u,n.blocks&&(n.blocks[o]=u),i&&U()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const e=C();if(t.then(t=>{q(e),o(n.then,1,n.value,t),q(null)},t=>{q(e),o(n.catch,2,n.error,t),q(null)}),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var r}const ot="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function rt(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],u=n[c];if(u){for(const t in s)t in u||(o[t]=1);for(const t in u)r[t]||(e[t]=u[t],r[t]=1);t[c]=u}else for(const t in s)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function ct(t){return"object"==typeof t&&null!==t?t:{}}function st(t){t&&t.c()}function ut(t,n){t&&t.l(n)}function it(t,n,o){const{fragment:s,on_mount:u,on_destroy:i,after_update:a}=t.$$;s&&s.m(n,o),K(()=>{const n=u.map(e).filter(c);i?i.push(...n):r(n),t.$$.on_mount=[]}),a.forEach(K)}function at(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ft(t,n){-1===t.$$.dirty[0]&&(F.push(t),J||(J=!0,I.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function lt(n,e,c,s,u,i,a=[-1]){const f=M;q(n);const l=e.props||{},d=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:a};let h=!1;if(d.ctx=c?c(n,l,(t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&u(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),h&&ft(n,t)),e}):[],d.update(),h=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),e.target){if(e.hydrate){const t=w(e.target);d.fragment&&d.fragment.l(t),t.forEach(m)}else d.fragment&&d.fragment.c();e.intro&&tt(n.$$.fragment),it(n,e.target,e.anchor),U()}q(f)}class dt{$destroy(){at(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{u as A,O as B,ot as C,b as D,E,N as F,n as G,S as H,rt as I,ct as J,z as K,B as L,T as M,v as N,i as O,d as P,P as Q,H as R,dt as S,et as T,j as U,r as V,p as a,m as b,st as c,g as d,x as e,ut as f,Y as g,at as h,lt as i,Z as j,tt as k,a as l,it as m,t as n,y as o,$ as p,L as q,A as r,s,nt as t,k as u,w as v,_ as w,h as x,f as y,l as z};