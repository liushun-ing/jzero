import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,a as k,w as a,e as i,b as p,r,o as d,d as s}from"./app-CWgerXHd.js";const c={},g=i("h2",{id:"自动生成-go-http-sdk",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#自动生成-go-http-sdk"},[i("span",null,"自动生成 go http sdk")])],-1),o=i("ul",null,[i("li",null,"kubernetes client-go style"),i("li",null,"根据 api group 和 proto service 进行业务分组"),i("li",null,"链式调用, 调用逻辑清晰"),i("li",null,"自带 fake client 支持单元测试"),i("li",null,"可自定义接口进行扩展")],-1),y=i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#56B6C2"}},"cd"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," your_project")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"jzero"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," gen"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," sdk")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#56B6C2"}},"cd"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," your_project_go")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"go"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," mod"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," tidy")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),u=i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#56B6C2"}},"cd"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," your_project")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"docker"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," --rm"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -v"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," ${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}},"PWD"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},":/app"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," jaronnie/jzero:latest"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," gen"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," sdk")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#56B6C2"}},"cd"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," your_project-go")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"go"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," mod"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," tidy")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),B=p(`<h3 id="使用实例" tabindex="-1"><a class="header-anchor" href="#使用实例"><span>使用实例</span></a></h3><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">context</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">fmt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">your_project-go</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">your_project-go/model/quickstart/types</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">your_project-go/rest</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	clientset</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> your_project</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">NewClientWithOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">		rest</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">WithAddr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;127.0.0.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">		rest</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">WithPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;8001&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">		rest</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">WithProtocol</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;http&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">	if</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> err</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> !=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> nil</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">		panic</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	result</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> clientset</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Hello</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">HelloPathHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">context</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Background</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(), </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">types</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">PathRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">		Name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;jzero&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	})</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">	if</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> err</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> !=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> nil</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">		panic</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">	fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Message</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自动生成-ts-http-sdk" tabindex="-1"><a class="header-anchor" href="#自动生成-ts-http-sdk"><span>自动生成 ts http sdk</span></a></h2><div class="hint-container tip"><p class="hint-container-title">working...</p></div><h2 id="自动生成-zrpc-client" tabindex="-1"><a class="header-anchor" href="#自动生成-zrpc-client"><span>自动生成 zrpc client</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">jzero</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gen</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> zrpcclient</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,6);function F(C,m){const e=r("CodeTabs");return d(),h("div",null,[g,o,k(e,{id:"30",data:[{id:"jzero"},{id:"Docker"}],"tab-id":"shell"},{title0:a(({value:n,isActive:t})=>[s("jzero")]),title1:a(({value:n,isActive:t})=>[s("Docker")]),tab0:a(({value:n,isActive:t})=>[y]),tab1:a(({value:n,isActive:t})=>[u]),_:1}),B])}const b=l(c,[["render",F],["__file","gensdk.html.vue"]]),A=JSON.parse('{"path":"/guide/gensdk.html","title":"生成客户端 SDK","lang":"zh-CN","frontmatter":{"title":"生成客户端 SDK","icon":"carbon:sdk","order":5,"description":"自动生成 go http sdk kubernetes client-go style 根据 api group 和 proto service 进行业务分组 链式调用, 调用逻辑清晰 自带 fake client 支持单元测试 可自定义接口进行扩展 使用实例 自动生成 ts http sdk working... 自动生成 zrpc client","head":[["meta",{"property":"og:url","content":"https://jzero.jaronnie.com/guide/gensdk.html"}],["meta",{"property":"og:site_name","content":"Jzero Framework"}],["meta",{"property":"og:title","content":"生成客户端 SDK"}],["meta",{"property":"og:description","content":"自动生成 go http sdk kubernetes client-go style 根据 api group 和 proto service 进行业务分组 链式调用, 调用逻辑清晰 自带 fake client 支持单元测试 可自定义接口进行扩展 使用实例 自动生成 ts http sdk working... 自动生成 zrpc client"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-08T13:29:14.000Z"}],["meta",{"property":"article:author","content":"jaronnie"}],["meta",{"property":"article:modified_time","content":"2024-07-08T13:29:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"生成客户端 SDK\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-08T13:29:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"jaronnie\\",\\"url\\":\\"https://github.com/jaronnie\\"}]}"]]},"headers":[{"level":2,"title":"自动生成 go http sdk","slug":"自动生成-go-http-sdk","link":"#自动生成-go-http-sdk","children":[{"level":3,"title":"使用实例","slug":"使用实例","link":"#使用实例","children":[]}]},{"level":2,"title":"自动生成 ts http sdk","slug":"自动生成-ts-http-sdk","link":"#自动生成-ts-http-sdk","children":[]},{"level":2,"title":"自动生成 zrpc client","slug":"自动生成-zrpc-client","link":"#自动生成-zrpc-client","children":[]}],"git":{"createdTime":1713956544000,"updatedTime":1720445354000,"contributors":[{"name":"jaronnie","email":"jaron@jaronnie.com","commits":17}]},"readingTime":{"minutes":0.56,"words":169},"filePathRelative":"guide/gensdk.md","localizedDate":"2024年4月24日","autoDesc":true}');export{b as comp,A as data};