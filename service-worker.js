if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-fa316fc2"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"0bb2d22a96035e5317f6acc038ca0dfa"},{url:"api/global-options.html",revision:"5e5ca6dd8beb5467ee0ca35194a733c4"},{url:"api/index.html",revision:"9d30f93d707a1eed47aa32adf35ef80b"},{url:"api/loadMore.html",revision:"cfeb2d9ef9232839e7d45e98deee1646"},{url:"api/pagination.html",revision:"1571cce5808d26490026f20ecf8a8936"},{url:"assets/css/styles.4ba93492.css",revision:null},{url:"assets/js/197.174510a1.js",revision:null},{url:"assets/js/217.f1ec6f1b.js",revision:null},{url:"assets/js/626.55cd6717.js",revision:null},{url:"assets/js/887.91afcfa2.js",revision:null},{url:"assets/js/app.c1ef5fea.js",revision:null},{url:"assets/js/runtime~app.18a3faad.js",revision:null},{url:"assets/js/v-041f880a.5d070ac2.js",revision:null},{url:"assets/js/v-0825d054.8e62fae9.js",revision:null},{url:"assets/js/v-0b36a592.9627b154.js",revision:null},{url:"assets/js/v-1324f911.041366a1.js",revision:null},{url:"assets/js/v-141987ca.f21b17d1.js",revision:null},{url:"assets/js/v-1c7b2593.57bb00dc.js",revision:null},{url:"assets/js/v-3706649a.65f28f38.js",revision:null},{url:"assets/js/v-3d6dd5d7.4195c40e.js",revision:null},{url:"assets/js/v-4b535f1b.bf69f7e3.js",revision:null},{url:"assets/js/v-4bd15160.ea4c4bac.js",revision:null},{url:"assets/js/v-5d1e647b.2763d519.js",revision:null},{url:"assets/js/v-5e1b0e12.2ae57848.js",revision:null},{url:"assets/js/v-62cf96d0.9143a451.js",revision:null},{url:"assets/js/v-6fa8152f.ee45ff75.js",revision:null},{url:"assets/js/v-744497ce.a095e253.js",revision:null},{url:"assets/js/v-74534cee.77bdf15e.js",revision:null},{url:"assets/js/v-77327eb8.f71e876b.js",revision:null},{url:"assets/js/v-7f1d6617.40cab559.js",revision:null},{url:"assets/js/v-8daa1a0e.848e1f18.js",revision:null},{url:"assets/js/v-964bff12.1c283f54.js",revision:null},{url:"assets/js/v-bb9fcf52.85d1d65d.js",revision:null},{url:"assets/js/v-e260681e.fe7a0643.js",revision:null},{url:"assets/js/v-fb0f0066.d15f7c39.js",revision:null},{url:"guide/documentation/advancedUsage.html",revision:"dae47ea8100332df0c2bb9003f5c2ccd"},{url:"guide/documentation/cacheKey.html",revision:"39bdb0787b29d9fe4ffb90a6790cc613"},{url:"guide/documentation/debounce.html",revision:"c05deb888654bc9cf3b1969f09a4a3f8"},{url:"guide/documentation/default-request.html",revision:"678f49412f2e0b25301ab26ad226ee52"},{url:"guide/documentation/errorRetry.html",revision:"b75f95c74a17caf1df030a6157139875"},{url:"guide/documentation/global-options.html",revision:"43b63f0272ce0ed69833aeae103f40d7"},{url:"guide/documentation/loadingDelay.html",revision:"a78b042562feb4c7e1b5b699918f3c6f"},{url:"guide/documentation/manual.html",revision:"71ddc76c533bec14eed5deed9f2f2065"},{url:"guide/documentation/mutate.html",revision:"507828edb1c203fd5785bf5d1d7813ba"},{url:"guide/documentation/polling.html",revision:"2cbafd48823928dd2a42fe8658d860c9"},{url:"guide/documentation/queries.html",revision:"8dde034407fbe377f2daa07819095b9e"},{url:"guide/documentation/ready.html",revision:"65441ba177c05907918174dd81b71438"},{url:"guide/documentation/refreshDeps.html",revision:"e0298500054e1467ed084ee343d5e202"},{url:"guide/documentation/refreshOnWindowFocus.html",revision:"9dfb2d4249d1b8ac546cd1217237be57"},{url:"guide/documentation/throttle.html",revision:"688e7d8f62a149e34bb63b8ade5a4662"},{url:"guide/getting-started.html",revision:"3d467f657ead3cce1d1f9f05bb93b362"},{url:"guide/introduction.html",revision:"6a5398bae6f2538d639ba9fad731c30c"},{url:"index.html",revision:"90d7802b6522ace872c72d3d3dce158a"},{url:"logo.png",revision:"9af3385e0cb4a6533cfa8b580366f079"},{url:"logo@100px.png",revision:"67c1615b1ae41080a16b14aaff5375a3"},{url:"logo@16px.png",revision:"dea19892dbc99ddcdf8b780d8692200f"},{url:"logo@32px.png",revision:"7fc0123b02e45f0e23b16d3fd3d023b2"}],{})}));
