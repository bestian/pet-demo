if(!self.define){let e,s={};const o=(o,t)=>(o=new URL(o+".js",t).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(t,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let n={};const l=e=>o(e,i),c={module:{uri:i},exports:n,require:l};s[i]=Promise.all(t.map((e=>c[e]||l(e)))).then((e=>(r(...e),n)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"pet-demo"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/pet-demo/css/app.aea16aa4.css",revision:null},{url:"/pet-demo/index.html",revision:"7460c21219a50089136dcef13e2a5160"},{url:"/pet-demo/js/about.0740bbd5.js",revision:null},{url:"/pet-demo/js/app.f066772d.js",revision:null},{url:"/pet-demo/js/chunk-vendors.0e1d378a.js",revision:null},{url:"/pet-demo/manifest.json",revision:"4427bb6728950910580d1bce65c9c9ae"},{url:"/pet-demo/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
