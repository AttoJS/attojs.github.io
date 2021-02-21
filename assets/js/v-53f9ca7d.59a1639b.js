(self.webpackChunkvue_request_doc=self.webpackChunkvue_request_doc||[]).push([[923],{1365:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>Qa});var e=s(8133);const t=(0,e.uE)('<h1 id="公共-api"><a class="header-anchor" href="#公共-api">#</a> 公共 API</h1><p>VueRequest 通常由 <a href="#return-values">Return Values</a>、<a href="#service">Service</a> 和 <a href="#options">Options</a> 三个部分组成</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token operator">...</span>ReturnValues <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRequest</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token punctuation">,</span> <span class="token constant">P</span><span class="token punctuation">,</span> <span class="token constant">FR</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>Service<span class="token punctuation">,</span> Options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TS 泛型说明</p><p><code>R</code> 是返回 <a href="#data"><code>data</code></a> 的泛型</p><p><code>P</code> 是 <a href="#params"><code>params</code></a> 的泛型 <em>（注：该泛型受到 <code>unknown[]</code> 的约束）</em></p><p><code>FR</code> 是 <a href="#formatresult"><code>formatresult</code></a> 返回的 <code>data</code> 的类型 <em>（注：后面文档提到的 <code>R</code> 泛型，在使用了 <code>formatresult</code> 后均要使用 <code>FR</code> 代替）</em></p></div><h2 id="return-values"><a class="header-anchor" href="#return-values">#</a> Return Values</h2><h3 id="data"><a class="header-anchor" href="#data">#</a> data</h3><ul><li><p><strong>类型：</strong> <code>Ref&lt;R | undefined&gt;</code></p></li><li><p><strong>默认值：</strong> <code>undefined</code></p><p>接口返回的数据，如果有传入 <a href="#formatresult">formatResult</a>，则为格式化后的 <code>data</code></p></li></ul><h3 id="loading"><a class="header-anchor" href="#loading">#</a> loading</h3><ul><li><p><strong>类型：</strong> <code>Ref&lt;boolean&gt;</code></p></li><li><p><strong>默认值：</strong> <code>false</code></p><p><a href="#service"><strong>Service</strong></a> 请求的执行状态</p></li></ul><h3 id="params"><a class="header-anchor" href="#params">#</a> params</h3><ul><li><p><strong>类型：</strong> <code>Ref&lt;P[]&gt;</code></p></li><li><p><strong>默认值：</strong> <code>[]</code></p><p><a href="#service"><strong>Service</strong></a> 的请求参数</p></li><li><p><strong>示例：</strong></p></li></ul><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getUser</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;api/user?&#39;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> params<span class="token punctuation">,</span> run <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getUser<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  defaultParams<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;John&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 默认请求时，如果存在 defaultParams， 则 params.value 将会等于 defaultParams，否则为空数组</span>\n\n<span class="token comment">// 当 run 传入参数时，此时的参数将会同步到 params 里面</span>\n<span class="token function">run</span><span class="token punctuation">(</span><span class="token string">&#39;Benny&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// params.value 等于 [&#39;Benny&#39;]</span>\n</code></pre></div><h3 id="error"><a class="header-anchor" href="#error">#</a> error</h3><ul><li><p><strong>类型：</strong> <code>Ref&lt;Error | undefined&gt;</code></p></li><li><p><strong>默认值：</strong> <code>undefined</code></p><p>如果在内部抛出了一个错误，则会被 <code>error</code> 接收并返回</p></li></ul><h3 id="queries"><a class="header-anchor" href="#queries">#</a> queries</h3>',15),o=(0,e.uE)('<li><p><strong>类型：</strong> <code>Queries&lt;R, P&gt;</code></p></li><li><p><strong>默认值：</strong> <code>Object</code></p><p>默认情况下，新请求的数据将会覆盖旧请求的数据。当启用 <a href="#querykey">queryKey</a> 后， <code>queries</code> 能够同时存储多次请求的结果，实现并行的效果</p><p><code>Queries</code> 的类型如下</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Queries<span class="token operator">&lt;</span><span class="token constant">R</span><span class="token punctuation">,</span> <span class="token constant">P</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  loading<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  data<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token constant">R</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  error<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>Error <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  params<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token constant">P</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">run</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token operator">...</span>params<span class="token operator">:</span> <span class="token constant">P</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">cancel</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">refresh</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">mutate</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token function-variable function">arg</span><span class="token operator">:</span> <span class="token punctuation">(</span>oldData<span class="token operator">:</span> <span class="token constant">R</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">R</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token punctuation">(</span>newData<span class="token operator">:</span> <span class="token constant">R</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div></li>',2),l=(0,e.Wm)("strong",null,"参考：",-1),p=(0,e.Uk)("并行请求"),r=(0,e.uE)('<h3 id="run"><a class="header-anchor" href="#run">#</a> run</h3><ul><li><p><strong>类型：</strong> <code>(...params: P[]) =&gt; Promise&lt;R&gt;</code></p><p>手动触发 <a href="#service"><strong>Service</strong></a> 的请求</p><div class="custom-container tip"><p class="custom-container-title">注意</p><p>当开启了 <a href="#debounceinterval">debounceInterval</a> 或者 <a href="#throttleinterval">throttleInterval</a> 模式后 <code>run</code> 的返回结果有可能是 <code>Promise&lt;null&gt;</code></p></div></li></ul><h3 id="cancel"><a class="header-anchor" href="#cancel">#</a> cancel</h3><ul><li><p><strong>类型：</strong> <code>() =&gt; void</code></p><ul><li>手动取消本次请求</li><li>停止<a href="#pollinginterval">轮询</a>功能</li></ul><div class="custom-container tip"><p class="custom-container-title">注意</p><p>这里说的取消<strong>并不是真正的停止请求</strong>，只是取消了对 <a href="#data">data</a> 的赋值以及 <a href="#loading">loading</a> 重置为 <code>false</code> 当前<strong>已发出</strong>的接口请求依旧会继续进行</p></div></li></ul><h3 id="refresh"><a class="header-anchor" href="#refresh">#</a> refresh</h3><ul><li><p><strong>类型：</strong> <code>() =&gt; Promise&lt;R&gt;</code></p><p>使用当前的 <a href="#params">params</a> 重新调用 <a href="#run">run</a></p></li></ul><h3 id="mutate"><a class="header-anchor" href="#mutate">#</a> mutate</h3>',7),c=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Wm)("strong",null,"类型："),(0,e.Uk)(),(0,e.Wm)("code",null,"(arg: (oldData: R) => R) => void | (newData: R) => void")]),(0,e.Wm)("p",null,[(0,e.Uk)("直接修改 "),(0,e.Wm)("a",{href:"#data"},"data"),(0,e.Uk)(" 的结果")])],-1),u=(0,e.Wm)("strong",null,"参考：",-1),i=(0,e.Uk)("突变"),d=(0,e.Wm)("h2",{id:"service"},[(0,e.Wm)("a",{class:"header-anchor",href:"#service"},"#"),(0,e.Uk)(" Service")],-1),k=(0,e.Uk)("用于发起获取资源的请求 ，可参考 "),g=(0,e.Uk)("默认请求"),m=(0,e.uE)('<h3 id="请求函数"><a class="header-anchor" href="#请求函数">#</a> 请求函数</h3><ul><li><p><strong>类型：</strong> <code>() =&gt; Promise&lt;R&gt; | () =&gt; string | () =&gt; ({ url: string; [key: string]: any; })</code></p></li><li><p><strong>详情：</strong></p><p>可以通过传入一个返回值为 <code>Promise</code> 、<a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2">字符串</a> 或者 <a href="#%E5%AF%B9%E8%B1%A1">对象</a> 的函数。这里我们更加推荐返回一个 <code>Promise</code>。你可以借助<strong>第三方的请求库</strong>（如 <code>axios</code> ）来帮你生成一个用于发起获取资源的请求 <code>Promise</code> 函数。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">getUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;api/user&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getUser<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></li></ul><h3 id="字符串"><a class="header-anchor" href="#字符串">#</a> 字符串</h3>',3),h=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Wm)("strong",null,"类型："),(0,e.Uk)(),(0,e.Wm)("code",null,"string")])],-1),f=(0,e.Wm)("p",null,[(0,e.Wm)("strong",null,"详情：")],-1),W=(0,e.Uk)("如果你传入一个字符串，或者通过"),v=(0,e.Wm)("a",{href:"#%E8%AF%B7%E6%B1%82%E5%87%BD%E6%95%B0"},"请求函数",-1),y=(0,e.Uk)("返回一个字符串的方式调用，那么我们将会使用全局下的 "),U={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch",target:"_blank",rel:"noopener noreferrer"},E=(0,e.Wm)("code",null,"fetch()",-1),w=(0,e.Uk)(" 方法发起获取资源的请求，该字符串将会作为获取资源的 "),R=(0,e.Wm)("strong",null,"URL",-1),b=(0,e.Wm)("h3",{id:"对象"},[(0,e.Wm)("a",{class:"header-anchor",href:"#对象"},"#"),(0,e.Uk)(" 对象")],-1),B=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Wm)("strong",null,"类型："),(0,e.Uk)(),(0,e.Wm)("code",null,"{ url: string; [key: string]: any; }")])],-1),P=(0,e.Wm)("p",null,[(0,e.Wm)("strong",null,"详情：")],-1),_=(0,e.Uk)("如果你传入一个对象，或者通过"),A=(0,e.Wm)("a",{href:"#%E8%AF%B7%E6%B1%82%E5%87%BD%E6%95%B0"},"请求函数",-1),q=(0,e.Uk)("返回一个对象的方式调用，那么我们将会使用全局下的 "),z={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch",target:"_blank",rel:"noopener noreferrer"},D=(0,e.Wm)("code",null,"fetch()",-1),F=(0,e.Uk)(" 方法发起获取资源的请求。该对象必须包含一个属性名为 "),I=(0,e.Wm)("strong",null,"URL",-1),x=(0,e.Uk)(" 的键值对，该值将会作为获取资源的 "),C=(0,e.Wm)("strong",null,"URL",-1),S=(0,e.Wm)("h2",{id:"options"},[(0,e.Wm)("a",{class:"header-anchor",href:"#options"},"#"),(0,e.Uk)(" Options")],-1),O=(0,e.Wm)("h3",{id:"loadingdelay"},[(0,e.Wm)("a",{class:"header-anchor",href:"#loadingdelay"},"#"),(0,e.Uk)(" loadingDelay")],-1),j=(0,e.uE)('<li><p><strong>类型：</strong> <code>number</code></p></li><li><p><strong>默认值：</strong> <code>0</code></p></li><li><p><strong>详情：</strong></p><p>通过设置延迟的毫秒数，可以延迟 <a href="#loading"><strong>loading</strong></a> 变成 <code>true</code> 的时间，有效防止闪烁。</p></li>',3),K=(0,e.Wm)("strong",null,"参考：",-1),T=(0,e.Uk)(),L=(0,e.Uk)("延迟加载状态"),V=(0,e.Wm)("h3",{id:"pollinginterval"},[(0,e.Wm)("a",{class:"header-anchor",href:"#pollinginterval"},"#"),(0,e.Uk)(" pollingInterval")],-1),N=(0,e.uE)('<li><p><strong>类型：</strong> <code>number</code></p></li><li><p><strong>默认值：</strong> <code>undefined</code></p></li><li><p><strong>详情：</strong></p><p>通过设置轮询间隔毫秒值，可以进入轮询模式，定时触发请求。可以通过 <a href="#run"><code>run</code></a> / <a href="#cancel"><code>cancel</code></a> 来 <strong>开启</strong>/<strong>停止</strong> 轮询。在 <a href="#manual"><code>manual</code></a>设置为<code>true</code> 时，需要手动执行一次 <code>run</code> 后，才开始轮询。</p><ul><li>间隔值必须大于 <code>0</code> 才会生效</li></ul></li>',3),H=(0,e.Wm)("strong",null,"参考：",-1),Q=(0,e.Uk)(),J=(0,e.Uk)("轮询"),M=(0,e.Wm)("h3",{id:"pollingwhenhidden"},[(0,e.Wm)("a",{class:"header-anchor",href:"#pollingwhenhidden"},"#"),(0,e.Uk)(" pollingWhenHidden")],-1),Y=(0,e.uE)('<li><p><strong>类型：</strong> <code>boolean</code></p></li><li><p><strong>默认值：</strong> <code>false</code></p></li><li><p><strong>详情：</strong></p><p>当 <a href="#pollingInterval"><code>pollingInterval</code></a> 大于 <code>0</code> 时才生效。默认情况下，轮询在屏幕不可见时，会暂停轮询。当设置成 <code>true</code> 时，在屏幕不可见时，轮询任务依旧会定时执行。</p></li>',3),G=(0,e.Wm)("strong",null,"参考：",-1),X=(0,e.Uk)(),Z=(0,e.Uk)("屏幕不可见时轮询"),$=(0,e.Wm)("h3",{id:"pollingwhenoffline"},[(0,e.Wm)("a",{class:"header-anchor",href:"#pollingwhenoffline"},"#"),(0,e.Uk)(" pollingWhenOffline")],-1),nn=(0,e.uE)('<li><p><strong>类型：</strong> <code>boolean</code></p></li><li><p><strong>默认值：</strong> <code>false</code></p></li><li><p><strong>详情：</strong></p><p>当 <a href="#pollingInterval"><code>pollingInterval</code></a> 大于 <code>0</code> 时才生效。默认情况下，轮询在网络不可用时，会暂停轮询。当设置成 <code>true</code> 时，在网络不可用时，轮询任务依旧会定时执行。</p></li>',3),an=(0,e.Wm)("strong",null,"参考：",-1),sn=(0,e.Uk)(),en=(0,e.Uk)("网络离线时轮询"),tn=(0,e.Wm)("h3",{id:"debounceinterval"},[(0,e.Wm)("a",{class:"header-anchor",href:"#debounceinterval"},"#"),(0,e.Uk)(" debounceInterval")],-1),on=(0,e.uE)('<li><p><strong>类型：</strong> <code>number</code></p></li><li><p><strong>默认值：</strong> <code>undefined</code></p></li><li><p><strong>详情：</strong></p><p>通过设置需要延迟的毫秒数，进入防抖模式。此时如果频繁触发 <a href="#run"><code>run</code></a> ，则会以防抖策略进行请求。</p></li>',3),ln=(0,e.Wm)("strong",null,"参考：",-1),pn=(0,e.Uk)(),rn=(0,e.Uk)("防抖"),cn=(0,e.Wm)("h3",{id:"throttleinterval"},[(0,e.Wm)("a",{class:"header-anchor",href:"#throttleinterval"},"#"),(0,e.Uk)(" throttleInterval")],-1),un=(0,e.uE)('<li><p><strong>类型：</strong> <code>number</code></p></li><li><p><strong>默认值：</strong> <code>undefined</code></p></li><li><p><strong>详情：</strong></p><p>通过设置需要节流的毫秒数，进入节流模式。此时如果频繁触发 <a href="#run"><code>run</code></a> ，则会以节流策略进行请求。</p></li>',3),dn=(0,e.Wm)("strong",null,"参考：",-1),kn=(0,e.Uk)(),gn=(0,e.Uk)("节流"),mn=(0,e.Wm)("h3",{id:"refreshonwindowfocus"},[(0,e.Wm)("a",{class:"header-anchor",href:"#refreshonwindowfocus"},"#"),(0,e.Uk)(" refreshOnWindowFocus")],-1),hn=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Wm)("strong",null,"类型："),(0,e.Uk)(),(0,e.Wm)("code",null,"boolean")])],-1),fn=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Wm)("strong",null,"默认值："),(0,e.Uk)(),(0,e.Wm)("code",null,"false")])],-1),Wn=(0,e.Wm)("p",null,[(0,e.Wm)("strong",null,"详情：")],-1),vn=(0,e.Uk)("当设置为 "),yn=(0,e.Wm)("code",null,"true",-1),Un=(0,e.Uk)(" 时，则在浏览器窗口触发 "),En={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/focus",target:"_blank",rel:"noopener noreferrer"},wn=(0,e.Uk)("focus"),Rn=(0,e.Uk)(" 和 "),bn={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document/visibilitychange_event",target:"_blank",rel:"noopener noreferrer"},Bn=(0,e.Uk)("visibilitychange"),Pn=(0,e.Uk)(" 时，会重新发起请求。"),_n=(0,e.Wm)("strong",null,"参考：",-1),An=(0,e.Uk)(),qn=(0,e.Uk)("屏幕聚焦重新请求"),zn=(0,e.Wm)("h3",{id:"refocustimespan"},[(0,e.Wm)("a",{class:"header-anchor",href:"#refocustimespan"},"#"),(0,e.Uk)(" refocusTimespan")],-1),Dn=(0,e.uE)('<li><p><strong>类型：</strong> <code>number</code></p></li><li><p><strong>默认值：</strong> <code>5000</code></p></li><li><p><strong>详情：</strong></p><p>当 <a href="#refreshonwindowfocus">refreshOnWindowFocus</a> 设置为 <code>true</code> 时，你可以通过设置间隔的毫秒数，来限制 <a href="#refresh"><code>refresh</code></a> 的执行间隔，默认为 5000ms</p></li>',3),Fn=(0,e.Wm)("strong",null,"参考：",-1),In=(0,e.Uk)(),xn=(0,e.Uk)("重新聚焦间隔时间"),Cn=(0,e.Wm)("h3",{id:"cachekey"},[(0,e.Wm)("a",{class:"header-anchor",href:"#cachekey"},"#"),(0,e.Uk)(" cacheKey")],-1),Sn=(0,e.uE)('<li><p><strong>类型：</strong> <code>string</code></p></li><li><p><strong>默认值：</strong> <code>undefined</code></p></li><li><p><strong>详情：</strong></p><ul><li>我们会缓存每次请求的 <a href="#data"><code>data</code></a> , <a href="#error"><code>error</code></a> , <a href="#params"><code>params</code></a> , <a href="#loading"><code>loading</code></a></li><li>如果设置了 <code>cacheKey</code> ， VueRequest 会将当前请求数据缓存起来。当下次组件初始化时，如果有缓存数据，我们会优先返回缓存数据，然后在背后发送新请求，待新数据返回后，重新触发数据更新并更新缓存数据，也就是 <strong>SWR</strong> 的能力。</li><li>同一个 <code>cacheKey</code> 的请求，是全局共享的，也就是你可以提前加载数据。利用该特性，可以很方便的实现预加载。</li></ul></li>',3),On=(0,e.Wm)("strong",null,"参考：",-1),jn=(0,e.Uk)(),Kn=(0,e.Uk)("缓存"),Tn=(0,e.Wm)("h3",{id:"cachetime"},[(0,e.Wm)("a",{class:"header-anchor",href:"#cachetime"},"#"),(0,e.Uk)(" cacheTime")],-1),Ln=(0,e.uE)("<li><p><strong>类型：</strong> <code>number</code></p></li><li><p><strong>默认值：</strong> <code>600000</code></p></li><li><p><strong>详情：</strong></p><p>当开启缓存后，你可以通过设置 <code>cacheTime</code> 来告诉我们缓存的过期时间。当缓存过期后，我们会将其删除。默认为 <strong>600000 毫秒</strong>，即 10 分钟</p></li>",3),Vn=(0,e.Wm)("strong",null,"参考：",-1),Nn=(0,e.Uk)(),Hn=(0,e.Uk)("缓存时间"),Qn=(0,e.Wm)("h3",{id:"staletime"},[(0,e.Wm)("a",{class:"header-anchor",href:"#staletime"},"#"),(0,e.Uk)(" staleTime")],-1),Jn=(0,e.uE)("<li><p><strong>类型：</strong> <code>number</code></p></li><li><p><strong>默认值：</strong> <code>0</code></p></li><li><p><strong>详情：</strong></p><p>如果你能确保缓存下来的数据，在一定时间内不会有任何更新的，我们建议你设置一个合理的毫秒数</p><ul><li>默认为 <code>0</code>，意味着不保鲜，每次都会重新发起请求</li><li>设置为 <code>-1</code> 则意味着缓存永不过期</li></ul></li>",3),Mn=(0,e.Wm)("strong",null,"参考：",-1),Yn=(0,e.Uk)(),Gn=(0,e.Uk)("保鲜时间"),Xn=(0,e.Wm)("h3",{id:"errorretrycount"},[(0,e.Wm)("a",{class:"header-anchor",href:"#errorretrycount"},"#"),(0,e.Uk)(" errorRetryCount")],-1),Zn=(0,e.uE)("<li><p><strong>类型：</strong> <code>number</code></p></li><li><p><strong>默认值：</strong> <code>0</code></p></li><li><p><strong>详情：</strong></p><p>最大错误重试次数</p></li>",3),$n=(0,e.Wm)("strong",null,"参考：",-1),na=(0,e.Uk)(),aa=(0,e.Uk)("错误重试次数"),sa=(0,e.Wm)("h3",{id:"errorretryinterval"},[(0,e.Wm)("a",{class:"header-anchor",href:"#errorretryinterval"},"#"),(0,e.Uk)(" errorRetryInterval")],-1),ea=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Wm)("strong",null,"类型："),(0,e.Uk)(),(0,e.Wm)("code",null,"number")])],-1),ta=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Wm)("strong",null,"默认值："),(0,e.Uk)(),(0,e.Wm)("code",null,"0")])],-1),oa=(0,e.Wm)("p",null,[(0,e.Wm)("strong",null,"详情：")],-1),la=(0,e.Uk)("默认情况下，VueRequest 使用"),pa={href:"https://en.wikipedia.org/wiki/Exponential_backoff",target:"_blank",rel:"noopener noreferrer"},ra=(0,e.Wm)("strong",null,"二进制指数退避算法",-1),ca=(0,e.Uk)(" 来帮你计算出合适的间隔时间，你也可以通过设置 "),ua=(0,e.Wm)("code",null,"errorRetryInterval",-1),ia=(0,e.Uk)(" 来覆盖默认行为"),da=(0,e.Wm)("strong",null,"参考：",-1),ka=(0,e.Uk)(),ga=(0,e.Uk)("错误重试间隔时间"),ma=(0,e.Wm)("h3",{id:"manual"},[(0,e.Wm)("a",{class:"header-anchor",href:"#manual"},"#"),(0,e.Uk)(" manual")],-1),ha=(0,e.uE)('<li><p><strong>类型：</strong> <code>boolean</code></p></li><li><p><strong>默认值：</strong> <code>false</code></p></li><li><p><strong>详情：</strong></p><p>当 <code>manual</code> 设置为 <code>true</code> 时，你需要手动触发 <a href="#run"><code>run</code></a> 才会发起请求</p></li>',3),fa=(0,e.Wm)("strong",null,"参考：",-1),Wa=(0,e.Uk)(),va=(0,e.Uk)("手动请求"),ya=(0,e.uE)('<h3 id="defaultparams"><a class="header-anchor" href="#defaultparams">#</a> defaultParams</h3><ul><li><p><strong>类型：</strong> <code>P[]</code></p></li><li><p><strong>默认值：</strong> <code>[]</code></p></li><li><p><strong>详情：</strong></p><p>如果 <a href="#manual"><code>manual</code></a> 设置为 <code>false</code> ，在自动执行 run 的时候，将会把 <code>defaultParams</code> 作为请求参数</p></li></ul><h3 id="ready"><a class="header-anchor" href="#ready">#</a> ready</h3>',3),Ua=(0,e.uE)('<li><p><strong>类型：</strong> <code>Ref&lt;boolean&gt;</code></p></li><li><p><strong>默认值：</strong> <code>true</code></p></li><li><p><strong>详情：</strong></p><p>只有当 <code>ready</code> 为 <code>true</code> 时，才会发起请求。</p><ul><li>该行为<strong>只会触发一次</strong>。如果想要多次触发，建议使用 <a href="#refreshdeps"><code>refreshDeps</code></a> 或者自己实现相关逻辑</li></ul></li>',3),Ea=(0,e.Wm)("strong",null,"参考：",-1),wa=(0,e.Uk)(),Ra=(0,e.Uk)("依赖请求"),ba=(0,e.uE)('<h3 id="initialdata"><a class="header-anchor" href="#initialdata">#</a> initialData</h3><ul><li><p><strong>类型：</strong> <code>R</code></p></li><li><p><strong>默认值：</strong> <code>undefined</code></p></li><li><p><strong>详情：</strong></p><p>默认的 <a href="#data"><code>data</code></a></p></li></ul><h3 id="refreshdeps"><a class="header-anchor" href="#refreshdeps">#</a> refreshDeps</h3>',3),Ba=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Wm)("strong",null,"类型："),(0,e.Uk)(),(0,e.Wm)("code",null,"WatchSource<any>[]")])],-1),Pa=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Wm)("strong",null,"默认值："),(0,e.Uk)(),(0,e.Wm)("code",null,"[]")])],-1),_a=(0,e.Wm)("p",null,[(0,e.Wm)("strong",null,"详情：")],-1),Aa=(0,e.Wm)("code",null,"refreshDeps",-1),qa=(0,e.Uk)(" 的变化，会触发 "),za=(0,e.Wm)("code",null,"refresh",-1),Da=(0,e.Uk)(" 的重新执行。其本质只是对 "),Fa={href:"https://v3.vuejs.org/guide/computed.html#watchers",target:"_blank",rel:"noopener noreferrer"},Ia=(0,e.Wm)("code",null,"watch",-1),xa=(0,e.Uk)(" 的封装"),Ca=(0,e.uE)('<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">watch</span><span class="token punctuation">(</span>refreshDeps<span class="token punctuation">,</span> refresh<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',1),Sa=(0,e.Wm)("strong",null,"参考：",-1),Oa=(0,e.Uk)(),ja=(0,e.Uk)("依赖刷新"),Ka=(0,e.Wm)("h3",{id:"querykey"},[(0,e.Wm)("a",{class:"header-anchor",href:"#querykey"},"#"),(0,e.Uk)(" queryKey")],-1),Ta=(0,e.uE)('<li><p><strong>类型：</strong> <code>(...params: P[]) =&gt; string</code></p></li><li><p><strong>详情：</strong></p><p>根据 params，获取当前请求的 <strong>key</strong>，设置之后，我们会在 <a href="#queries"><code>queries</code></a> 中同时维护不同 <strong>key</strong> 值的请求状态。</p></li>',2),La=(0,e.Wm)("strong",null,"参考：",-1),Va=(0,e.Uk)(),Na=(0,e.Uk)("并行请求"),Ha=(0,e.uE)('<h3 id="formatresult"><a class="header-anchor" href="#formatresult">#</a> formatResult</h3><ul><li><p><strong>类型：</strong> <code>(data: R) =&gt; FR</code></p></li><li><p><strong>详情：</strong></p><p>格式化请求结果，入参为原本接口返回的 <code>data</code>，出参为处理过后的 <code>data</code></p><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRequest</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;api/timestramp&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      <span class="token function-variable function">formatResult</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></li></ul><h3 id="onsuccess"><a class="header-anchor" href="#onsuccess">#</a> onSuccess</h3><ul><li><p><strong>类型：</strong> <code>(data: R, params: P[]) =&gt; void</code></p></li><li><p><strong>详情：</strong></p><p>当 <a href="#service">Service</a> <code>resolve</code> 时触发，参数为 <a href="#data"><code>data</code></a> 和 <a href="#params"><code>params</code></a></p><ul><li>如果有 <a href="#formatresult"><code>formatResult</code></a> ，则 <a href="#data"><code>data</code></a> 为格式化后数据。</li></ul></li></ul><h3 id="onerror"><a class="header-anchor" href="#onerror">#</a> onError</h3><ul><li><p><strong>类型：</strong> <code>(error: Error, params: P[]) =&gt; void</code></p></li><li><p><strong>详情：</strong></p><p>当 <a href="#service">Service</a> <code>reject</code> 时触发，参数为 <a href="#error"><code>error</code></a> 和 <a href="#params"><code>params</code></a></p></li></ul>',6),Qa={render:function(n,a){const s=(0,e.up)("RouterLink"),Qa=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("ul",null,[o,(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[l,(0,e.Wm)(s,{to:"/zh/guide/documentation/queries.html"},{default:(0,e.w5)((()=>[p])),_:1})])])]),r,(0,e.Wm)("ul",null,[c,(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[u,(0,e.Wm)(s,{to:"/zh/guide/documentation/mutate.html"},{default:(0,e.w5)((()=>[i])),_:1})])])]),d,(0,e.Wm)("p",null,[k,(0,e.Wm)(s,{to:"/zh/guide/documentation/default-request.html"},{default:(0,e.w5)((()=>[g])),_:1})]),m,(0,e.Wm)("ul",null,[h,(0,e.Wm)("li",null,[f,(0,e.Wm)("p",null,[W,v,y,(0,e.Wm)("a",U,[E,(0,e.Wm)(Qa)]),w,R])])]),b,(0,e.Wm)("ul",null,[B,(0,e.Wm)("li",null,[P,(0,e.Wm)("p",null,[_,A,q,(0,e.Wm)("a",z,[D,(0,e.Wm)(Qa)]),F,I,x,C])])]),S,O,(0,e.Wm)("ul",null,[j,(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[K,T,(0,e.Wm)(s,{to:"/zh/guide/documentation/loadingDelay.html"},{default:(0,e.w5)((()=>[L])),_:1})])])]),V,(0,e.Wm)("ul",null,[N,(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[H,Q,(0,e.Wm)(s,{to:"/zh/guide/documentation/polling.html"},{default:(0,e.w5)((()=>[J])),_:1})])])]),M,(0,e.Wm)("ul",null,[Y,(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[G,X,(0,e.Wm)(s,{to:"/zh/guide/documentation/polling.html#%E5%B1%8F%E5%B9%95%E4%B8%8D%E5%8F%AF%E8%A7%81%E6%97%B6%E8%BD%AE%E8%AF%A2"},{default:(0,e.w5)((()=>[Z])),_:1})])])]),$,(0,e.Wm)("ul",null,[nn,(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[an,sn,(0,e.Wm)(s,{to:"/zh/guide/documentation/polling.html#%E7%BD%91%E7%BB%9C%E7%A6%BB%E7%BA%BF%E6%97%B6%E8%BD%AE%E8%AF%A2"},{default:(0,e.w5)((()=>[en])),_:1})])])]),tn,(0,e.Wm)("ul",null,[on,(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[ln,pn,(0,e.Wm)(s,{to:"/zh/guide/documentation/debounce.html"},{default:(0,e.w5)((()=>[rn])),_:1})])])]),cn,(0,e.Wm)("ul",null,[un,(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[dn,kn,(0,e.Wm)(s,{to:"/zh/guide/documentation/throttle.html"},{default:(0,e.w5)((()=>[gn])),_:1})])])]),mn,(0,e.Wm)("ul",null,[hn,fn,(0,e.Wm)("li",null,[Wn,(0,e.Wm)("p",null,[vn,yn,Un,(0,e.Wm)("a",En,[wn,(0,e.Wm)(Qa)]),Rn,(0,e.Wm)("a",bn,[Bn,(0,e.Wm)(Qa)]),Pn])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[_n,An,(0,e.Wm)(s,{to:"/zh/guide/documentation/refreshOnWindowFocus.html"},{default:(0,e.w5)((()=>[qn])),_:1})])])]),zn,(0,e.Wm)("ul",null,[Dn,(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[Fn,In,(0,e.Wm)(s,{to:"/zh/guide/documentation/refreshOnWindowFocus.html#%E9%87%8D%E6%96%B0%E8%81%9A%E7%84%A6%E9%97%B4%E9%9A%94%E6%97%B6%E9%97%B4"},{default:(0,e.w5)((()=>[xn])),_:1})])])]),Cn,(0,e.Wm)("ul",null,[Sn,(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[On,jn,(0,e.Wm)(s,{to:"/zh/guide/documentation/cacheKey.html"},{default:(0,e.w5)((()=>[Kn])),_:1})])])]),Tn,(0,e.Wm)("ul",null,[Ln,(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[Vn,Nn,(0,e.Wm)(s,{to:"/zh/guide/documentation/cacheKey.html#%E7%BC%93%E5%AD%98%E6%97%B6%E9%97%B4"},{default:(0,e.w5)((()=>[Hn])),_:1})])])]),Qn,(0,e.Wm)("ul",null,[Jn,(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[Mn,Yn,(0,e.Wm)(s,{to:"/zh/guide/documentation/cacheKey.html#%E4%BF%9D%E9%B2%9C%E6%97%B6%E9%97%B4"},{default:(0,e.w5)((()=>[Gn])),_:1})])])]),Xn,(0,e.Wm)("ul",null,[Zn,(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[$n,na,(0,e.Wm)(s,{to:"/zh/guide/documentation/errorRetry.html#%E9%87%8D%E8%AF%95%E6%AC%A1%E6%95%B0"},{default:(0,e.w5)((()=>[aa])),_:1})])])]),sa,(0,e.Wm)("ul",null,[ea,ta,(0,e.Wm)("li",null,[oa,(0,e.Wm)("p",null,[la,(0,e.Wm)("a",pa,[ra,(0,e.Wm)(Qa)]),ca,ua,ia])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[da,ka,(0,e.Wm)(s,{to:"/zh/guide/documentation/errorRetry.html#%E9%87%8D%E8%AF%95%E9%97%B4%E9%9A%94%E6%97%B6%E9%97%B4"},{default:(0,e.w5)((()=>[ga])),_:1})])])]),ma,(0,e.Wm)("ul",null,[ha,(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[fa,Wa,(0,e.Wm)(s,{to:"/zh/guide/documentation/manual.html"},{default:(0,e.w5)((()=>[va])),_:1})])])]),ya,(0,e.Wm)("ul",null,[Ua,(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[Ea,wa,(0,e.Wm)(s,{to:"/zh/guide/documentation/ready.html"},{default:(0,e.w5)((()=>[Ra])),_:1})])])]),ba,(0,e.Wm)("ul",null,[Ba,Pa,(0,e.Wm)("li",null,[_a,(0,e.Wm)("p",null,[Aa,qa,za,Da,(0,e.Wm)("a",Fa,[Ia,(0,e.Wm)(Qa)]),xa]),Ca]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[Sa,Oa,(0,e.Wm)(s,{to:"/zh/guide/documentation/refreshDeps.html"},{default:(0,e.w5)((()=>[ja])),_:1})])])]),Ka,(0,e.Wm)("ul",null,[Ta,(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[La,Va,(0,e.Wm)(s,{to:"/zh/guide/documentation/queries.html"},{default:(0,e.w5)((()=>[Na])),_:1})])])]),Ha],64)}}},6266:(n,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>e});const e={key:"v-53f9ca7d",path:"/zh/api/",title:"公共 API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Return Values",slug:"return-values",children:[{level:3,title:"data",slug:"data",children:[]},{level:3,title:"loading",slug:"loading",children:[]},{level:3,title:"params",slug:"params",children:[]},{level:3,title:"error",slug:"error",children:[]},{level:3,title:"queries",slug:"queries",children:[]},{level:3,title:"run",slug:"run",children:[]},{level:3,title:"cancel",slug:"cancel",children:[]},{level:3,title:"refresh",slug:"refresh",children:[]},{level:3,title:"mutate",slug:"mutate",children:[]}]},{level:2,title:"Service",slug:"service",children:[{level:3,title:"请求函数",slug:"请求函数",children:[]},{level:3,title:"字符串",slug:"字符串",children:[]},{level:3,title:"对象",slug:"对象",children:[]}]},{level:2,title:"Options",slug:"options",children:[{level:3,title:"loadingDelay",slug:"loadingdelay",children:[]},{level:3,title:"pollingInterval",slug:"pollinginterval",children:[]},{level:3,title:"pollingWhenHidden",slug:"pollingwhenhidden",children:[]},{level:3,title:"pollingWhenOffline",slug:"pollingwhenoffline",children:[]},{level:3,title:"debounceInterval",slug:"debounceinterval",children:[]},{level:3,title:"throttleInterval",slug:"throttleinterval",children:[]},{level:3,title:"refreshOnWindowFocus",slug:"refreshonwindowfocus",children:[]},{level:3,title:"refocusTimespan",slug:"refocustimespan",children:[]},{level:3,title:"cacheKey",slug:"cachekey",children:[]},{level:3,title:"cacheTime",slug:"cachetime",children:[]},{level:3,title:"staleTime",slug:"staletime",children:[]},{level:3,title:"errorRetryCount",slug:"errorretrycount",children:[]},{level:3,title:"errorRetryInterval",slug:"errorretryinterval",children:[]},{level:3,title:"manual",slug:"manual",children:[]},{level:3,title:"defaultParams",slug:"defaultparams",children:[]},{level:3,title:"ready",slug:"ready",children:[]},{level:3,title:"initialData",slug:"initialdata",children:[]},{level:3,title:"refreshDeps",slug:"refreshdeps",children:[]},{level:3,title:"queryKey",slug:"querykey",children:[]},{level:3,title:"formatResult",slug:"formatresult",children:[]},{level:3,title:"onSuccess",slug:"onsuccess",children:[]},{level:3,title:"onError",slug:"onerror",children:[]}]}],filePathRelative:"zh/api/index.md",git:{updatedTime:161390377e4,contributors:[]}}}}]);