(self.webpackChunkvue_request_doc=self.webpackChunkvue_request_doc||[]).push([[5654],{957:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h1 id="起步"><a class="header-anchor" href="#起步">#</a> 起步</h1><div class="custom-container warning"><p class="custom-container-title">前提条件</p><p>确保 Vue 版本为 3.x</p></div><h2 id="安装"><a class="header-anchor" href="#安装">#</a> 安装</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vue-request\n\n<span class="token comment"># or with yarn</span>\n<span class="token function">yarn</span> <span class="token function">add</span> vue-request\n</code></pre></div><h3 id="cdn"><a class="header-anchor" href="#cdn">#</a> CDN</h3><div class="language-markup ext-html"><pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/vue-request<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>它将以 <code>window.VueRequest.useRequest</code> 暴露在全局</p><h2 id="用例"><a class="header-anchor" href="#用例">#</a> 用例</h2><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span><span class="token string">&#39;api/user&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div>',9),e={render:function(n,s){return t}}},2390:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-37781588",path:"/zh/guide/getting-started.html",title:"起步",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装",slug:"安装",children:[{level:3,title:"CDN",slug:"cdn",children:[]}]},{level:2,title:"用例",slug:"用例",children:[]}],filePathRelative:"zh/guide/getting-started.md",git:{updatedTime:1615028852e3,contributors:[]}}}}]);