var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function o(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e,n,s){return t[1]&&s?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](s(e))):n.ctx}function c(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function f(){return $(" ")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let g;function m(t){g=t}const h=[],v=[],b=[],x=[],w=Promise.resolve();let y=!1;function _(t){b.push(t)}function k(t){x.push(t)}const S=new Set;let q=0;function E(){const t=g;do{for(;q<h.length;){const t=h[q];q++,m(t),M(t.$$)}for(m(null),h.length=0,q=0;v.length;)v.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];S.has(e)||(S.add(e),e())}b.length=0}while(h.length);for(;x.length;)x.pop()();y=!1,S.clear(),m(t)}function M(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const T=new Set;function A(t,e){t&&t.i&&(T.delete(t),t.i(e))}function L(t,e,n,s){if(t&&t.o){if(T.has(t))return;T.add(t),undefined.c.push((()=>{T.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function C(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function N(t){t&&t.c()}function O(t,n,l,r){const{fragment:c,on_mount:u,on_destroy:a,after_update:i}=t.$$;c&&c.m(n,l),r||_((()=>{const n=u.map(e).filter(o);a?a.push(...n):s(n),t.$$.on_mount=[]})),i.forEach(_)}function j(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function z(t,e){-1===t.$$.dirty[0]&&(h.push(t),y||(y=!0,w.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(e,o,l,r,c,u,i,$=[-1]){const f=g;m(e);const d=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(f?f.$$.context:[])),callbacks:n(),dirty:$,skip_bound:!1,root:o.target||f.$$.root};i&&i(d.root);let p=!1;if(d.ctx=l?l(e,o.props||{},((t,n,...s)=>{const o=s.length?s[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),p&&z(e,t)),n})):[],d.update(),p=!0,s(d.before_update),d.fragment=!!r&&r(d.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);d.fragment&&d.fragment.l(t),t.forEach(a)}else d.fragment&&d.fragment.c();o.intro&&A(e.$$.fragment),O(e,o.target,o.anchor,o.customElement),E()}m(f)}class F{$destroy(){j(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const H=[];function P(e){let n,s,o,l,r,g,m;return{c(){n=i("div"),s=i("h4"),o=$(e[1]),l=f(),r=i("input"),d(s,"class","title svelte-106dpvn"),d(r,"type","number"),d(r,"min","0"),r.disabled=e[2],r.value=e[0],d(r,"class","svelte-106dpvn"),d(n,"class","element svelte-106dpvn")},m(t,a){var i,$,f,d;u(t,n,a),c(n,s),c(s,o),c(n,l),c(n,r),g||(i=r,$="input",f=e[3],i.addEventListener($,f,d),m=()=>i.removeEventListener($,f,d),g=!0)},p(t,[e]){2&e&&p(o,t[1]),4&e&&(r.disabled=t[2]),1&e&&r.value!==t[0]&&(r.value=t[0])},i:t,o:t,d(t){t&&a(n),g=!1,m()}}}function B(t,e,n){let{label:s}=e,{disabled:o=!1}=e,{value:l}=e;return t.$$set=t=>{"label"in t&&n(1,s=t.label),"disabled"in t&&n(2,o=t.disabled),"value"in t&&n(0,l=t.value)},[l,s,o,t=>{n(0,l=t.target.value)}]}class I extends F{constructor(t){super(),D(this,t,B,P,l,{label:1,disabled:2,value:0})}}function J(t){let e,n;return{c(){e=i("h4"),n=$(t[0]),d(e,"class","svelte-1lc8xq4")},m(t,s){u(t,e,s),c(e,n)},p(t,e){1&e&&p(n,t[0])},d(t){t&&a(e)}}}function X(t){let e,n;return{c(){e=i("h5"),n=$(t[1]),d(e,"class","svelte-1lc8xq4")},m(t,s){u(t,e,s),c(e,n)},p(t,e){2&e&&p(n,t[1])},d(t){t&&a(e)}}}function Y(t){let e,n,s,o,l,$=null!=t[0]&&J(t),p=null!=t[1]&&X(t);const g=t[3].default,m=function(t,e,n,s){if(t){const o=r(t,e,n,s);return t[0](o)}}(g,t,t[2],null);return{c(){e=i("div"),n=i("div"),$&&$.c(),s=f(),p&&p.c(),o=f(),m&&m.c(),d(n,"class","title svelte-1lc8xq4"),d(e,"class","group svelte-1lc8xq4")},m(t,r){u(t,e,r),c(e,n),$&&$.m(n,null),c(n,s),p&&p.m(n,null),c(e,o),m&&m.m(e,null),l=!0},p(t,[e]){null!=t[0]?$?$.p(t,e):($=J(t),$.c(),$.m(n,s)):$&&($.d(1),$=null),null!=t[1]?p?p.p(t,e):(p=X(t),p.c(),p.m(n,null)):p&&(p.d(1),p=null),m&&m.p&&(!l||4&e)&&function(t,e,n,s,o,l){if(o){const c=r(e,n,s,l);t.p(c,o)}}(m,g,t,t[2],l?function(t,e,n,s){if(t[2]&&s){const o=t[2](s(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|o[s];return t}return e.dirty|o}return e.dirty}(g,t[2],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[2]),null)},i(t){l||(A(m,t),l=!0)},o(t){L(m,t),l=!1},d(t){t&&a(e),$&&$.d(),p&&p.d(),m&&m.d(t)}}}function Z(t,e,n){let{$$slots:s={},$$scope:o}=e,{title:l}=e,{hint:r}=e;return t.$$set=t=>{"title"in t&&n(0,l=t.title),"hint"in t&&n(1,r=t.hint),"$$scope"in t&&n(2,o=t.$$scope)},[l,r,o,s]}class R extends F{constructor(t){super(),D(this,t,Z,Y,l,{title:0,hint:1})}}function G(e){let n,s,o,l,r,d,g=e[1]?.toFixed(8)+"";return{c(){n=i("tr"),s=i("th"),o=$(e[0]),l=f(),r=i("td"),d=$(g)},m(t,e){u(t,n,e),c(n,s),c(s,o),c(n,l),c(n,r),c(r,d)},p(t,[e]){1&e&&p(o,t[0]),2&e&&g!==(g=t[1]?.toFixed(8)+"")&&p(d,g)},i:t,o:t,d(t){t&&a(n)}}}function K(t,e,n){let{plane:s}=e,{tangent:o}=e;return t.$$set=t=>{"plane"in t&&n(0,s=t.plane),"tangent"in t&&n(1,o=t.tangent)},[s,o]}class Q extends F{constructor(t){super(),D(this,t,K,G,l,{plane:0,tangent:1})}}function U(t){let e,n,s,o,l,r;function c(e){t[5](e)}let i={label:"A"};function $(e){t[6](e)}void 0!==t[1].a&&(i.value=t[1].a),e=new I({props:i}),v.push((()=>C(e,"value",c)));let d={label:"B"};return void 0!==t[1].b&&(d.value=t[1].b),o=new I({props:d}),v.push((()=>C(o,"value",$))),{c(){N(e.$$.fragment),s=f(),N(o.$$.fragment)},m(t,n){O(e,t,n),u(t,s,n),O(o,t,n),r=!0},p(t,s){const r={};!n&&2&s&&(n=!0,r.value=t[1].a,k((()=>n=!1))),e.$set(r);const c={};!l&&2&s&&(l=!0,c.value=t[1].b,k((()=>l=!1))),o.$set(c)},i(t){r||(A(e.$$.fragment,t),A(o.$$.fragment,t),r=!0)},o(t){L(e.$$.fragment,t),L(o.$$.fragment,t),r=!1},d(t){j(e,t),t&&a(s),j(o,t)}}}function V(t){let e,n,s,o,l,r;function c(e){t[7](e)}let i={label:"C"};function $(e){t[8](e)}void 0!==t[1].c&&(i.value=t[1].c),e=new I({props:i}),v.push((()=>C(e,"value",c)));let d={label:"D"};return void 0!==t[1].d&&(d.value=t[1].d),o=new I({props:d}),v.push((()=>C(o,"value",$))),{c(){N(e.$$.fragment),s=f(),N(o.$$.fragment)},m(t,n){O(e,t,n),u(t,s,n),O(o,t,n),r=!0},p(t,s){const r={};!n&&2&s&&(n=!0,r.value=t[1].c,k((()=>n=!1))),e.$set(r);const c={};!l&&2&s&&(l=!0,c.value=t[1].d,k((()=>l=!1))),o.$set(c)},i(t){r||(A(e.$$.fragment,t),A(o.$$.fragment,t),r=!0)},o(t){L(e.$$.fragment,t),L(o.$$.fragment,t),r=!1},d(t){j(e,t),t&&a(s),j(o,t)}}}function W(t){let e,n,s,o,l,r;function c(e){t[9](e)}let i={label:"E"};function $(e){t[10](e)}void 0!==t[1].e&&(i.value=t[1].e),e=new I({props:i}),v.push((()=>C(e,"value",c)));let d={label:"F"};return void 0!==t[1].f&&(d.value=t[1].f),o=new I({props:d}),v.push((()=>C(o,"value",$))),{c(){N(e.$$.fragment),s=f(),N(o.$$.fragment)},m(t,n){O(e,t,n),u(t,s,n),O(o,t,n),r=!0},p(t,s){const r={};!n&&2&s&&(n=!0,r.value=t[1].e,k((()=>n=!1))),e.$set(r);const c={};!l&&2&s&&(l=!0,c.value=t[1].f,k((()=>l=!1))),o.$set(c)},i(t){r||(A(e.$$.fragment,t),A(o.$$.fragment,t),r=!0)},o(t){L(e.$$.fragment,t),L(o.$$.fragment,t),r=!1},d(t){j(e,t),t&&a(s),j(o,t)}}}function tt(t){let e,n,s,o,l,r;return e=new R({props:{hint:"xy",$$slots:{default:[U]},$$scope:{ctx:t}}}),s=new R({props:{hint:"xz",$$slots:{default:[V]},$$scope:{ctx:t}}}),l=new R({props:{hint:"yz",$$slots:{default:[W]},$$scope:{ctx:t}}}),{c(){N(e.$$.fragment),n=f(),N(s.$$.fragment),o=f(),N(l.$$.fragment)},m(t,c){O(e,t,c),u(t,n,c),O(s,t,c),u(t,o,c),O(l,t,c),r=!0},p(t,n){const o={};8194&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const r={};8194&n&&(r.$$scope={dirty:n,ctx:t}),s.$set(r);const c={};8194&n&&(c.$$scope={dirty:n,ctx:t}),l.$set(c)},i(t){r||(A(e.$$.fragment,t),A(s.$$.fragment,t),A(l.$$.fragment,t),r=!0)},o(t){L(e.$$.fragment,t),L(s.$$.fragment,t),L(l.$$.fragment,t),r=!1},d(t){j(e,t),t&&a(n),j(s,t),t&&a(o),j(l,t)}}}function et(t){let e,n,s,o,l,r,$,p,g,m,h,v,b,x,w,y,_,k,S,q,E,M,T,C;return h=new R({props:{title:"Edges",hint:"",$$slots:{default:[tt]},$$scope:{ctx:t}}}),S=new Q({props:{plane:"XY",tangent:t[2]}}),E=new Q({props:{plane:"XZ",tangent:t[3]}}),T=new Q({props:{plane:"YZ",tangent:t[4]}}),{c(){e=i("main"),n=i("div"),n.innerHTML='<div class="title svelte-t4dkbw"><h1>Skew it</h1> \n      <h2>A simple tool for calculating 3D printer skew</h2></div>',s=f(),o=i("div"),l=i("div"),l.innerHTML='<h3>Step 1: Print</h3> \n      <img class="skube svelte-t4dkbw" src="skube_540.png"/> \n      <div class="print"><a class="download svelte-t4dkbw" href="skube.stl">Download STL</a></div>',r=f(),$=i("div"),p=i("h3"),p.textContent="Step 2: Measure",g=f(),m=i("div"),N(h.$$.fragment),v=f(),b=i("div"),x=i("h3"),x.textContent="Step 3: Results",w=f(),y=i("table"),_=i("tr"),_.innerHTML='<th class="svelte-t4dkbw"></th> \n          <th class="svelte-t4dkbw">Tangent</th>',k=f(),N(S.$$.fragment),q=f(),N(E.$$.fragment),M=f(),N(T.$$.fragment),d(n,"class","header svelte-t4dkbw"),d(l,"class","step-1 svelte-t4dkbw"),d(m,"class","form svelte-t4dkbw"),d($,"class","step-2 svelte-t4dkbw"),d(b,"class","step-3 svelte-t4dkbw"),d(o,"class","content svelte-t4dkbw"),d(e,"class","svelte-t4dkbw")},m(t,a){u(t,e,a),c(e,n),c(e,s),c(e,o),c(o,l),c(o,r),c(o,$),c($,p),c($,g),c($,m),O(h,m,null),c(o,v),c(o,b),c(b,x),c(b,w),c(b,y),c(y,_),c(y,k),O(S,y,null),c(y,q),O(E,y,null),c(y,M),O(T,y,null),C=!0},p(t,[e]){const n={};8194&e&&(n.$$scope={dirty:e,ctx:t}),h.$set(n);const s={};4&e&&(s.tangent=t[2]),S.$set(s);const o={};8&e&&(o.tangent=t[3]),E.$set(o);const l={};16&e&&(l.tangent=t[4]),T.$set(l)},i(t){C||(A(h.$$.fragment,t),A(S.$$.fragment,t),A(E.$$.fragment,t),A(T.$$.fragment,t),C=!0)},o(t){L(h.$$.fragment,t),L(S.$$.fragment,t),L(E.$$.fragment,t),L(T.$$.fragment,t),C=!1},d(t){t&&a(e),j(h),j(S),j(E),j(T)}}}function nt(t,e){if(null!==t&&null!==e)return Math.tan(2*Math.atan(t/e)-Math.PI/2)}function st(e,n,s){let o,r=t;var c;e.$$.on_destroy.push((()=>r()));const u=function(e,n=t){let s;const o=new Set;function r(t){if(l(e,t)&&(e=t,s)){const t=!H.length;for(const t of o)t[1](),H.push(t,e);if(t){for(let t=0;t<H.length;t+=2)H[t][0](H[t+1]);H.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(l,c=t){const u=[l,c];return o.add(u),1===o.size&&(s=n(r)||t),l(e),()=>{o.delete(u),0===o.size&&(s(),s=null)}}}}(null!==(c=JSON.parse(localStorage.getItem("dimensions")))&&void 0!==c?c:new class{});let a,i,$;return r(),r=function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(u,(t=>s(1,o=t))),console.log(u),u.subscribe((t=>localStorage.dimensions=JSON.stringify(t))),e.$$.update=()=>{2&e.$$.dirty&&s(2,a=nt(o.a,o.b)),2&e.$$.dirty&&s(3,i=nt(o.c,o.d)),2&e.$$.dirty&&s(4,$=nt(o.f,o.e))},[u,o,a,i,$,function(t){e.$$.not_equal(o.a,t)&&(o.a=t,u.set(o))},function(t){e.$$.not_equal(o.b,t)&&(o.b=t,u.set(o))},function(t){e.$$.not_equal(o.c,t)&&(o.c=t,u.set(o))},function(t){e.$$.not_equal(o.d,t)&&(o.d=t,u.set(o))},function(t){e.$$.not_equal(o.e,t)&&(o.e=t,u.set(o))},function(t){e.$$.not_equal(o.f,t)&&(o.f=t,u.set(o))}]}return new class extends F{constructor(t){super(),D(this,t,st,et,l,{dimensions:0})}get dimensions(){return this.$$.ctx[0]}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
