import{_ as v}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as h,c as b,b as n,a as u,d as a,e,f as o,w as p}from"./app-B68wvaDn.js";const g={},f={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},w={class:"hint-container info"},y={href:"https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#front-matter",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},A={href:"https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://plugin-md-enhance.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://theme-hope.vuejs.press/zh/guide/markdown/hint.html",target:"_blank",rel:"noopener noreferrer"},B={href:"https://theme-hope.vuejs.press/zh/guide/markdown/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},M={href:"https://theme-hope.vuejs.press/zh/guide/markdown/sup-sub.html",target:"_blank",rel:"noopener noreferrer"},V={href:"https://theme-hope.vuejs.press/zh/guide/markdown/align.html",target:"_blank",rel:"noopener noreferrer"},F={href:"https://theme-hope.vuejs.press/zh/guide/markdown/attrs.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://theme-hope.vuejs.press/zh/guide/markdown/footnote.html",target:"_blank",rel:"noopener noreferrer"},T={href:"https://theme-hope.vuejs.press/zh/guide/markdown/mark.html",target:"_blank",rel:"noopener noreferrer"},D={href:"https://theme-hope.vuejs.press/zh/guide/markdown/tasklist.html",target:"_blank",rel:"noopener noreferrer"},P={href:"https://theme-hope.vuejs.press/zh/guide/markdown/image.html",target:"_blank",rel:"noopener noreferrer"},H={href:"https://theme-hope.vuejs.press/zh/guide/markdown/component.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://theme-hope.vuejs.press/zh/guide/markdown/include.html",target:"_blank",rel:"noopener noreferrer"},W={href:"https://theme-hope.vuejs.press/zh/guide/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},I={href:"https://theme-hope.vuejs.press/zh/guide/markdown/stylize.html",target:"_blank",rel:"noopener noreferrer"},N={href:"https://theme-hope.vuejs.press/zh/guide/markdown/playground.html",target:"_blank",rel:"noopener noreferrer"},X={href:"https://theme-hope.vuejs.press/zh/guide/markdown/chartjs.html",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://theme-hope.vuejs.press/zh/guide/markdown/echarts.html",target:"_blank",rel:"noopener noreferrer"},K={href:"https://theme-hope.vuejs.press/zh/guide/markdown/flowchart.html",target:"_blank",rel:"noopener noreferrer"},O={href:"https://theme-hope.vuejs.press/zh/guide/markdown/mermaid.html",target:"_blank",rel:"noopener noreferrer"},U={href:"https://theme-hope.vuejs.press/zh/guide/markdown/tex.html",target:"_blank",rel:"noopener noreferrer"},$={href:"https://theme-hope.vuejs.press/zh/guide/markdown/vue-playground.html",target:"_blank",rel:"noopener noreferrer"},J={href:"https://mister-hope.com",target:"_blank",rel:"noopener noreferrer"},R={href:"https://theme-hope.vuejs.press/zh/guide/markdown/revealjs.html",target:"_blank",rel:"noopener noreferrer"};function G(L,s){const t=i("ExternalLinkIcon"),d=i("CodeTabs"),c=i("CodeDemo"),k=i("Badge"),m=i("Playground");return h(),b("div",null,[s[60]||(s[60]=n("p",null,"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。",-1)),s[61]||(s[61]=n("p",null,"你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。",-1)),u(" more "),s[62]||(s[62]=n("h2",{id:"markdown-介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-介绍","aria-hidden":"true"},"#"),a(" Markdown 介绍")],-1)),n("p",null,[s[2]||(s[2]=a("如果你是一个新手，还不会编写 Markdown，请先阅读 ")),n("a",f,[s[0]||(s[0]=a("Markdown 介绍")),e(t)]),s[3]||(s[3]=a(" 和 ")),n("a",q,[s[1]||(s[1]=a("Markdown 演示")),e(t)]),s[4]||(s[4]=a("。"))]),s[63]||(s[63]=n("h2",{id:"markdown-配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-配置","aria-hidden":"true"},"#"),a(" Markdown 配置")],-1)),s[64]||(s[64]=n("p",null,"VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。",-1)),n("div",w,[s[8]||(s[8]=n("p",{class:"hint-container-title"},"相关信息",-1)),n("p",null,[s[6]||(s[6]=a("Frontmatter 是 VuePress 中很重要的一个概念，如果你不了解它，你需要阅读 ")),n("a",y,[s[5]||(s[5]=a("Frontmatter 介绍")),e(t)]),s[7]||(s[7]=a("。"))])]),s[65]||(s[65]=n("h2",{id:"markdown-扩展",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-扩展","aria-hidden":"true"},"#"),a(" Markdown 扩展")],-1)),n("p",null,[s[11]||(s[11]=a("VuePress 会使用 ")),n("a",x,[s[9]||(s[9]=a("markdown-it")),e(t)]),s[12]||(s[12]=a(" 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 ")),n("a",j,[s[10]||(s[10]=a("语法扩展")),e(t)]),s[13]||(s[13]=a(" 。"))]),s[66]||(s[66]=n("h3",{id:"vuepress-扩展",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress-扩展","aria-hidden":"true"},"#"),a(" VuePress 扩展")],-1)),s[67]||(s[67]=n("p",null,"为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。",-1)),n("p",null,[s[15]||(s[15]=a("关于这些扩展，请阅读 ")),n("a",A,[s[14]||(s[14]=a("VuePress 中的 Markdown 扩展")),e(t)]),s[16]||(s[16]=a("。"))]),s[68]||(s[68]=n("h3",{id:"主题扩展",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#主题扩展","aria-hidden":"true"},"#"),a(" 主题扩展")],-1)),n("p",null,[s[18]||(s[18]=a("通过 ")),n("a",E,[s[17]||(s[17]=n("code",null,"vuepress-plugin-md-enhance",-1)),e(t)]),s[19]||(s[19]=a("，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。"))]),s[69]||(s[69]=o(`<h4 id="提示容器" tabindex="-1"><a class="header-anchor" href="#提示容器" aria-hidden="true">#</a> 提示容器</h4><div><p>安全的在 Markdown 中使用 {{ variable }}。</p></div><div class="hint-container info"><p class="hint-container-title">自定义标题</p><p>信息容器，包含 <code>代码</code> 与 <a href="#%E6%8F%90%E7%A4%BA%E5%AE%B9%E5%99%A8">链接</a>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">自定义标题</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">自定义标题</p><p>警告容器</p></div><div class="hint-container caution"><p class="hint-container-title">自定义标题</p><p>危险容器</p></div><details class="hint-container details"><summary>自定义标题</summary><p>详情容器</p></details>`,7)),n("ul",null,[n("li",null,[n("a",z,[s[20]||(s[20]=a("查看详情")),e(t)])])]),s[70]||(s[70]=n("h4",{id:"代码块",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#代码块","aria-hidden":"true"},"#"),a(" 代码块")],-1)),e(d,{id:"89",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:2},{title0:p(({value:r,isActive:l})=>s[21]||(s[21]=[a("pnpm")])),title1:p(({value:r,isActive:l})=>s[22]||(s[22]=[a("yarn")])),title2:p(({value:r,isActive:l})=>s[23]||(s[23]=[a("npm")])),tab0:p(({value:r,isActive:l})=>s[24]||(s[24]=[n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"-D"),a(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1)])),tab1:p(({value:r,isActive:l})=>s[25]||(s[25]=[n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"-D"),a(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1)])),tab2:p(({value:r,isActive:l})=>s[26]||(s[26]=[n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),a(" i "),n("span",{class:"token parameter variable"},"-D"),a(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1)])),_:1}),n("ul",null,[n("li",null,[n("a",B,[s[27]||(s[27]=a("查看详情")),e(t)])])]),s[71]||(s[71]=n("h4",{id:"上下角标",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#上下角标","aria-hidden":"true"},"#"),a(" 上下角标")],-1)),s[72]||(s[72]=n("p",null,[a("19"),n("sup",null,"th"),a(" H"),n("sub",null,"2"),a("O")],-1)),n("ul",null,[n("li",null,[n("a",M,[s[28]||(s[28]=a("查看详情")),e(t)])])]),s[73]||(s[73]=n("h4",{id:"自定义对齐",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义对齐","aria-hidden":"true"},"#"),a(" 自定义对齐")],-1)),s[74]||(s[74]=n("div",{style:{"text-align":"center"}},[n("p",null,"我是居中的")],-1)),s[75]||(s[75]=n("div",{style:{"text-align":"right"}},[n("p",null,"我在右对齐")],-1)),n("ul",null,[n("li",null,[n("a",V,[s[29]||(s[29]=a("查看详情")),e(t)])])]),s[76]||(s[76]=n("h4",{id:"attrs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#attrs","aria-hidden":"true"},"#"),a(" Attrs")],-1)),s[77]||(s[77]=n("p",null,[a("一个拥有 ID 的 "),n("strong",{id:"word"},"单词"),a("。")],-1)),n("ul",null,[n("li",null,[n("a",F,[s[30]||(s[30]=a("查看详情")),e(t)])])]),s[78]||(s[78]=n("h4",{id:"脚注",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#脚注","aria-hidden":"true"},"#"),a(" 脚注")],-1)),s[79]||(s[79]=n("p",null,[a("此文字有脚注"),n("a",{href:"%E8%BF%99%E6%98%AF%E8%84%9A%E6%B3%A8%E5%86%85%E5%AE%B9"},"^first"),a(".")],-1)),n("ul",null,[n("li",null,[n("a",C,[s[31]||(s[31]=a("查看详情")),e(t)])])]),s[80]||(s[80]=n("h4",{id:"标记",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#标记","aria-hidden":"true"},"#"),a(" 标记")],-1)),s[81]||(s[81]=n("p",null,[a("你可以标记 "),n("mark",null,"重要的内容"),a(" 。")],-1)),n("ul",null,[n("li",null,[n("a",T,[s[32]||(s[32]=a("查看详情")),e(t)])])]),s[82]||(s[82]=n("h4",{id:"任务列表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#任务列表","aria-hidden":"true"},"#"),a(" 任务列表")],-1)),n("ul",null,[s[34]||(s[34]=n("li",null,[n("p",null,"[x] 计划 1")],-1)),s[35]||(s[35]=n("li",null,[n("p",null,"[ ] 计划 2")],-1)),n("li",null,[n("p",null,[n("a",D,[s[33]||(s[33]=a("查看详情")),e(t)])])])]),s[83]||(s[83]=n("h4",{id:"图片增强",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#图片增强","aria-hidden":"true"},"#"),a(" 图片增强")],-1)),s[84]||(s[84]=n("p",null,"支持为图片设置颜色模式和大小",-1)),n("ul",null,[n("li",null,[n("a",P,[s[36]||(s[36]=a("查看详情")),e(t)])])]),s[85]||(s[85]=o(`<h4 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h4><div class="language-component line-numbers-mode" data-ext="component"><pre class="language-component"><code>title: Mr.Hope
desc: Where there is light, there is hope
logo: https://mister-hope.com/logo.svg
link: https://mister-hope.com
color: rgba(253, 230, 138, 0.15)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),n("ul",null,[n("li",null,[n("a",H,[s[37]||(s[37]=a("查看详情")),e(t)])])]),s[86]||(s[86]=n("h4",{id:"导入文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#导入文件","aria-hidden":"true"},"#"),a(" 导入文件")],-1)),u(" @include: ./README.md{11-17} "),n("ul",null,[n("li",null,[n("a",S,[s[38]||(s[38]=a("查看详情")),e(t)])])]),s[87]||(s[87]=n("h4",{id:"代码演示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#代码演示","aria-hidden":"true"},"#"),a(" 代码演示")],-1)),e(c,{id:"code-demo-237",type:"normal",title:"%E4%B8%80%E4%B8%AA%E6%99%AE%E9%80%9A%20Demo",code:"eJwljrGKAjEQhl9lbq5REJdrvZju4IorDhSrNEsysKvZZE2ygoiPopXgK4j4Olv4Fk7cZor5v3++OWCVGoszFNWXXHX0HyhGWFbUEPz6lkTBe+VEK0VsSwe1mSvcUdgrlM/Tub/dRJED2T/u/eX6IYqWcZzgOvJR43XXkEvTbceVBVnSyYeRws/hxHhaGvOzY+Kvjokc5UzbWm8UTmA0hrmEg3IApaWQOBuUg4vr38od82Cfjln4/vHd0N76MINAJkOMHF8ck1dC"},{default:p(()=>s[39]||(s[39]=[n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h1")]),n("span",{class:"token punctuation"},">")]),a("VuePress Theme Hope"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h1")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("very"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("非常"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a("强大!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[a("document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"#very"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"click"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"非常强大"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"span"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" red"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),n("ul",null,[n("li",null,[n("a",W,[s[40]||(s[40]=a("查看详情")),e(t)])])]),s[88]||(s[88]=n("h4",{id:"样式化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#样式化","aria-hidden":"true"},"#"),a(" 样式化")],-1)),n("p",null,[s[42]||(s[42]=a("向 Mr.Hope 捐赠一杯咖啡。 ")),e(k,{type:"tip"},{default:p(()=>s[41]||(s[41]=[a("Recommended")])),_:1})]),n("ul",null,[n("li",null,[n("a",I,[s[43]||(s[43]=a("查看详情")),e(t)])])]),s[89]||(s[89]=n("h4",{id:"交互演示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#交互演示","aria-hidden":"true"},"#"),a(" 交互演示")],-1)),e(m,{title:"TS%20%E6%A1%88%E4%BE%8B",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FMYewdgzgLgBAthA5jAvDARACwKYBtcgwDuIATrgCboDcAULaJLBAA7YCGA1qjABQKIAXDGikAlmEQBKVAD4YjCCFzYAdAUT8kUurVYdOW6XSA"}),n("ul",null,[n("li",null,[n("a",N,[s[44]||(s[44]=a("查看详情")),e(t)])])]),s[90]||(s[90]=o(`<h4 id="图表" tabindex="-1"><a class="header-anchor" href="#图表" aria-hidden="true">#</a> 图表</h4><p>::: chart 一个散点图案例</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scatter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;datasets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;散点数据集&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">-10</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">5.5</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgb(255, 99, 132)&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;scales&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linear&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bottom&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,4)),n("ul",null,[n("li",null,[n("a",X,[s[45]||(s[45]=a("查看详情")),e(t)])])]),s[91]||(s[91]=o(`<h4 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts" aria-hidden="true">#</a> Echarts</h4><p>::: echarts 一个折线图案例</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;xAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Mon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Wed&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Thu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Fri&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sun&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;yAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;series&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">218</span><span class="token punctuation">,</span> <span class="token number">135</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">260</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,4)),n("ul",null,[n("li",null,[n("a",Y,[s[46]||(s[46]=a("查看详情")),e(t)])])]),s[92]||(s[92]=o(`<h4 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图" aria-hidden="true">#</a> 流程图</h4><div class="language-flow line-numbers-mode" data-ext="flow"><pre class="language-flow"><code>cond<span class="token operator">=&gt;</span>condition<span class="token operator">:</span> 是否执行操作<span class="token operator">?</span>
process<span class="token operator">=&gt;</span>operation<span class="token operator">:</span> 操作
e<span class="token operator">=&gt;</span>end<span class="token operator">:</span> 结束

<span class="token function">cond</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>process<span class="token operator">-</span><span class="token operator">&gt;</span>e
<span class="token function">cond</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),n("ul",null,[n("li",null,[n("a",K,[s[47]||(s[47]=a("查看详情")),e(t)])])]),s[93]||(s[93]=o(`<h4 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid" aria-hidden="true">#</a> Mermaid</h4><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token arrow operator">---</span>
title<span class="token operator">:</span> Flowchart
<span class="token arrow operator">---</span>
<span class="token keyword">flowchart</span> TB
    c1<span class="token arrow operator">--&gt;</span>a2
    <span class="token keyword">subgraph</span> one
    a1<span class="token arrow operator">--&gt;</span>a2
    <span class="token keyword">end</span>
    <span class="token keyword">subgraph</span> two
    b1<span class="token arrow operator">--&gt;</span>b2
    <span class="token keyword">end</span>
    <span class="token keyword">subgraph</span> three
    c1<span class="token arrow operator">--&gt;</span>c2
    <span class="token keyword">end</span>
    one <span class="token arrow operator">--&gt;</span> two
    three <span class="token arrow operator">--&gt;</span> two
    two <span class="token arrow operator">--&gt;</span> c2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),n("ul",null,[n("li",null,[n("a",O,[s[48]||(s[48]=a("查看详情")),e(t)])])]),s[94]||(s[94]=n("h4",{id:"tex-语法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tex-语法","aria-hidden":"true"},"#"),a(" Tex 语法")],-1)),s[95]||(s[95]=n("p",null,"$$ \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right} $$",-1)),n("ul",null,[n("li",null,[n("a",U,[s[49]||(s[49]=a("查看详情")),e(t)])])]),s[96]||(s[96]=n("h4",{id:"vue-交互演示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-交互演示","aria-hidden":"true"},"#"),a(" Vue 交互演示")],-1)),s[97]||(s[97]=n("p",null,"::: vue-playground Vue 交互演示",-1)),n("template",null,[s[55]||(s[55]=o(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,2)),n("ul",null,[n("li",null,[n("a",$,[s[50]||(s[50]=a("查看详情")),e(t)])])]),s[56]||(s[56]=n("h4",{id:"幻灯片",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#幻灯片","aria-hidden":"true"},"#"),a(" 幻灯片")],-1)),s[57]||(s[57]=n("p",null,"@slidestart",-1)),s[58]||(s[58]=n("h2",{id:"幻灯片-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#幻灯片-1","aria-hidden":"true"},"#"),a(" 幻灯片 1")],-1)),n("p",null,[s[52]||(s[52]=a("一个有文字和 ")),n("a",J,[s[51]||(s[51]=a("链接")),e(t)]),s[53]||(s[53]=a(" 的段落"))]),s[59]||(s[59]=o(`<hr><h2 id="幻灯片-2" tabindex="-1"><a class="header-anchor" href="#幻灯片-2" aria-hidden="true">#</a> 幻灯片 2</h2><ul><li>项目 1</li><li>项目 2</li></ul><hr><h2 id="幻灯片-3-1" tabindex="-1"><a class="header-anchor" href="#幻灯片-3-1" aria-hidden="true">#</a> 幻灯片 3.1</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>--</p><h2 id="幻灯片-3-2" tabindex="-1"><a class="header-anchor" href="#幻灯片-3-2" aria-hidden="true">#</a> 幻灯片 3.2</h2><p>$$ J(\\theta_0,\\theta_1) = \\sum_{i=0} $$</p><p>@slideend</p>`,10)),n("ul",null,[n("li",null,[n("a",R,[s[54]||(s[54]=a("查看详情")),e(t)])])])])])}const _=v(g,[["render",G],["__file","markdown.html.vue"]]);export{_ as default};