if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,i,t)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}})).then(e=>{const s=t(...e);return r.default||(r.default=s),r})}))}}define("./service-worker.js",["./workbox-8c00d256"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"/index.html",revision:"3d72a9050581ee91f2207d74533113e9"},{url:"/static/css/2.24a6e1da.chunk.css",revision:"dcd8c2a162536794d7ed1e78cb9b1794"},{url:"/static/css/main.c8794d29.chunk.css",revision:"5de00d9aa736543a4fe7b1be1019a1f5"},{url:"/static/js/2.022c8682.chunk.js.LICENSE.txt",revision:"31469834f720a40a1040c1cf65cb0a66"},{url:"/static/js/main.a532ad53.chunk.js",revision:"1b6114ee968f7619e4680ada402d29ed"},{url:"/static/js/runtime-main.e6e668a3.js",revision:"f621ed42dc14d98be0cda0aa87279521"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("public/index.html"),{denylist:[/^\/_/,/\/[^\/?]+\.[^\/]+$/]}))}));
