import{S as y,i as E,s as $,k as f,q as h,l as d,m as v,r as m,h as u,n as g,b as j,E as _,u as x,A as b,C as q}from"../../chunks/index-145ba0af.js";import{p as C}from"../../chunks/stores-90c284ad.js";import"../../chunks/singletons-83ae0d85.js";function S(l){let e,t,s=l[0].status+"",o,p,n=l[0].error.message+"",i;return{c(){e=f("div"),t=f("h1"),o=h(s),p=h(": "),i=h(n),this.h()},l(a){e=d(a,"DIV",{class:!0});var r=v(e);t=d(r,"H1",{class:!0});var c=v(t);o=m(c,s),p=m(c,": "),i=m(c,n),c.forEach(u),r.forEach(u),this.h()},h(){g(t,"class","fixed bottom-1/2 text-5xl text-white font-bold"),g(e,"class","error-page flex justify-center svelte-1nv8jy8")},m(a,r){j(a,e,r),_(e,t),_(t,o),_(t,p),_(t,i)},p(a,[r]){r&1&&s!==(s=a[0].status+"")&&x(o,s),r&1&&n!==(n=a[0].error.message+"")&&x(i,n)},i:b,o:b,d(a){a&&u(e)}}}function k(l,e,t){let s;return q(l,C,o=>t(0,s=o)),[s]}class H extends y{constructor(e){super(),E(this,e,k,S,$,{})}}export{H as default};
