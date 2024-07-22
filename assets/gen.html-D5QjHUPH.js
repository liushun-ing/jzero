import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,a as r,w as e,e as i,b as d,r as o,o as c,d as s}from"./app-DszJ6CqW.js";const k={},p=i("p",null,"jzero gen 根据 desc/api, desc/proto, desc/sql 文件夹下的文件生成代码. 生成代码的逻辑是调用 goctl 工具完成.",-1),g=i("p",null,"jzero 会自动检测对应文件夹下的内容, 然后进行自动生成, 使用者无需关心.",-1),u=i("h2",{id:"生成代码",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#生成代码"},[i("span",null,"生成代码")])],-1),m=i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#56B6C2"}},"cd"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," your_project")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"jzero"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," gen")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),b=i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#56B6C2"}},"cd"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," your_project")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"docker"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," --rm"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -v"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," ${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}},"PWD"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},":/app"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," jaronnie/jzero:latest"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," gen")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),v=d(`<h3 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法"><span>高级用法</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 删除多余的生成的文件中后缀带 logic 和 handler 和 server. 以及在文件内容中多余的 Logic 和 Handler 和 Server</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">jzero</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gen</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --remove--suffix</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下载依赖" tabindex="-1"><a class="header-anchor" href="#下载依赖"><span>下载依赖</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> mod</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tidy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="运行项目" tabindex="-1"><a class="header-anchor" href="#运行项目"><span>运行项目</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> main.go</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,6);function y(f,C){const l=o("CodeTabs");return c(),h("div",null,[p,g,u,r(l,{id:"9",data:[{id:"jzero"},{id:"Docker"}],"tab-id":"shell"},{title0:e(({value:a,isActive:t})=>[s("jzero")]),title1:e(({value:a,isActive:t})=>[s("Docker")]),tab0:e(({value:a,isActive:t})=>[m]),tab1:e(({value:a,isActive:t})=>[b]),_:1}),v])}const j=n(k,[["render",y],["__file","gen.html.vue"]]),x=JSON.parse('{"path":"/guide/gen.html","title":"生成服务端代码","lang":"zh-CN","frontmatter":{"title":"生成服务端代码","icon":"vscode-icons:folder-type-api-opened","order":4,"description":"jzero gen 根据 desc/api, desc/proto, desc/sql 文件夹下的文件生成代码. 生成代码的逻辑是调用 goctl 工具完成. jzero 会自动检测对应文件夹下的内容, 然后进行自动生成, 使用者无需关心. 生成代码 高级用法 下载依赖 运行项目","head":[["meta",{"property":"og:url","content":"https://jzero.jaronnie.com/guide/gen.html"}],["meta",{"property":"og:site_name","content":"Jzero Framework"}],["meta",{"property":"og:title","content":"生成服务端代码"}],["meta",{"property":"og:description","content":"jzero gen 根据 desc/api, desc/proto, desc/sql 文件夹下的文件生成代码. 生成代码的逻辑是调用 goctl 工具完成. jzero 会自动检测对应文件夹下的内容, 然后进行自动生成, 使用者无需关心. 生成代码 高级用法 下载依赖 运行项目"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-07T15:53:45.000Z"}],["meta",{"property":"article:author","content":"jaronnie"}],["meta",{"property":"article:modified_time","content":"2024-07-07T15:53:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"生成服务端代码\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-07T15:53:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"jaronnie\\",\\"url\\":\\"https://github.com/jaronnie\\"}]}"]]},"headers":[{"level":2,"title":"生成代码","slug":"生成代码","link":"#生成代码","children":[{"level":3,"title":"高级用法","slug":"高级用法","link":"#高级用法","children":[]}]},{"level":2,"title":"下载依赖","slug":"下载依赖","link":"#下载依赖","children":[]},{"level":2,"title":"运行项目","slug":"运行项目","link":"#运行项目","children":[]}],"git":{"createdTime":1713163888000,"updatedTime":1720367625000,"contributors":[{"name":"jaronnie","email":"jaron@jaronnie.com","commits":24}]},"readingTime":{"minutes":0.57,"words":172},"filePathRelative":"guide/gen.md","localizedDate":"2024年4月15日","excerpt":"<p>jzero gen 根据 desc/api, desc/proto, desc/sql 文件夹下的文件生成代码. 生成代码的逻辑是调用 goctl 工具完成.</p>\\n<p>jzero 会自动检测对应文件夹下的内容, 然后进行自动生成, 使用者无需关心.</p>\\n<h2>生成代码</h2>\\n\\n<h3>高级用法</h3>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\"># 删除多余的生成的文件中后缀带 logic 和 handler 和 server. 以及在文件内容中多余的 Logic 和 Handler 和 Server</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">jzero</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> gen</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --remove--suffix</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{j as comp,x as data};