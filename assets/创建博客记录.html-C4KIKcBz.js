import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as g,a as s,e as h,b as l,f as a,w as e,r as p,o as k}from"./app-CHLL3t7Y.js";const c={};function u(m,i){const o=p("font"),r=p("CodeTabs");return k(),g("div",null,[i[7]||(i[7]=s("h1",{id:"搭建博客项目记录-本项目",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#搭建博客项目记录-本项目"},[s("span",null,"搭建博客项目记录（本项目)")])],-1)),i[8]||(i[8]=s("h2",{id:"项目介绍",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#项目介绍"},[s("span",null,"项目介绍")])],-1)),s("p",null,[i[1]||(i[1]=a("本项目基于 vuepress 搭建，使用 github 作为部署平台，用 sourcetree 作为 git 可视化工具")),l(o,{color:"transport"},{default:e(()=>i[0]||(i[0]=[s("s",null,"(主要是本人 git 水平较低)",-1)])),_:1}),i[2]||(i[2]=a("。"))]),i[9]||(i[9]=h('<h2 id="项目参考" tabindex="-1"><a class="header-anchor" href="#项目参考"><span>项目参考</span></a></h2><ul><li><a href="https://www.51cto.com/article/761976.html" target="_blank" rel="noopener noreferrer">萌萌哒草头将军</a>大佬的文章</li><li><a href="https://github.com/mmdctjj/blogs2" target="_blank" rel="noopener noreferrer">萌萌哒草头将军的项目</a></li><li><a href="https://theme-hope.vuejs.press/zh/get-started/" target="_blank" rel="noopener noreferrer"><s>至少在项目搭建没什么用的 vuepress 文档</s></a></li></ul><h2 id="项目搭建" tabindex="-1"><a class="header-anchor" href="#项目搭建"><span>项目搭建</span></a></h2><p>问题主要分布在/SourceTree/Git Action 上</p><p>这里默认已经装好了 nodejs,git,sourcetree,vscode</p><h3 id="_1-先创建好-git-仓库" tabindex="-1"><a class="header-anchor" href="#_1-先创建好-git-仓库"><span>1. 先创建好 git 仓库</span></a></h3><h3 id="_2-通过-sourcetree-获取到本地目录" tabindex="-1"><a class="header-anchor" href="#_2-通过-sourcetree-获取到本地目录"><span>2. 通过 SourceTree 获取到本地目录</span></a></h3><h4 id="q2-1" tabindex="-1"><a class="header-anchor" href="#q2-1"><span>Q2.1</span></a></h4><p>如果出现权限相关问题，可通过配置 sourcetree 的 ssh 密钥的方式解决: 先打开 sourcetree 的设置-&gt;账户-&gt;添加/编辑-&gt;连接账号(建议 OAuth)-&gt;复制到剪切板(这里就复制了 ssh 密钥)-&gt;打开自己的 github 设置-&gt;SSH and GPG keys-&gt;SSH keys-&gt;添加 ssh 密钥-&gt;粘贴密钥-&gt;保存</p><h3 id="_3-安装-vuepress" tabindex="-1"><a class="header-anchor" href="#_3-安装-vuepress"><span>3. 安装 vuepress</span></a></h3>',10)),l(r,{id:"53",data:[{id:"npm"}],active:0},{title0:e(({value:n,isActive:t})=>i[3]||(i[3]=[a("npm")])),tab0:e(({value:n,isActive:t})=>i[4]||(i[4]=[s("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," install"),s("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -g"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," vuepress")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1)])),_:1}),i[10]||(i[10]=s("h3",{id:"_4-创建项目",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_4-创建项目"},[s("span",null,"4. 创建项目")])],-1)),l(r,{id:"61",data:[{id:"npm"}],active:0},{title0:e(({value:n,isActive:t})=>i[5]||(i[5]=[a("npm")])),tab0:e(({value:n,isActive:t})=>i[6]||(i[6]=[s("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"#blogs为文件夹名称")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," init"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," vuepress-theme-hope"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," blogs")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"#是否需要一个自动部署文档到 GitHub Pages 的工作流？ Yes")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1}),i[11]||(i[11]=h(`<h4 id="q4-1" tabindex="-1"><a class="header-anchor" href="#q4-1"><span>Q4.1</span></a></h4><p>要保证文件夹的目录到 src 只有一层，例如(blog/src)，而不是(blog/blog/src)，否则会导致之后上传后 gitaction 运行失败</p><h4 id="q4-2" tabindex="-1"><a class="header-anchor" href="#q4-2"><span>Q4.2</span></a></h4><p>如果是在其他目录生成项目后拷贝过来,则务必将.gitigore 文件和.github 文件夹一起拷贝，否则会导致推送时出问题</p><h3 id="_5-配置" tabindex="-1"><a class="header-anchor" href="#_5-配置"><span>5. 配置</span></a></h3><h4 id="_5-1-修改配置文件" tabindex="-1"><a class="header-anchor" href="#_5-1-修改配置文件"><span>5.1 修改配置文件</span></a></h4><p>修改 src/.vuepress/config.ts -&gt; base: &quot;/blogs/&quot;</p><h4 id="_5-2-修改-git-action-配置" tabindex="-1"><a class="header-anchor" href="#_5-2-修改-git-action-配置"><span>5.2 修改 Git Action 配置</span></a></h4><p>修改 .github/workflows/deploy-docs.yml</p><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">部署文档</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    branches</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 确保这是你正在使用的分支名称</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">permissions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  contents</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">write</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">jobs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  deploy-gh-pages</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    runs-on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    steps</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Checkout</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        uses</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">actions/checkout@v3</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          fetch-depth</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 如果你文档需要 Git 子模块，取消注释下一行</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # submodules: true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">设置 Node.js</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        uses</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">actions/setup-node@v3</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          node-version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">18</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # cache: npm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">安装依赖</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">npm install --frozen-lockfile</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">构建文档</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        env</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          NODE_OPTIONS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">--max_old_space_size=8192</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">|-</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          npm run docs:build</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &gt; src/.vuepress/dist/.nojekyll</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">部署文档</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        uses</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">JamesIves/github-pages-deploy-action@v4</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 这是文档部署到的分支名称</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          branch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">gh-pages</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          folder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">src/.vuepress/dist</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-通过-sourcetree-推送到-main-分支" tabindex="-1"><a class="header-anchor" href="#_6-通过-sourcetree-推送到-main-分支"><span>6. 通过 sourcetree 推送到 main 分支</span></a></h3><h4 id="_6-1-配置-gitpages" tabindex="-1"><a class="header-anchor" href="#_6-1-配置-gitpages"><span>6.1 配置 GitPages</span></a></h4><p>如果配置成功，GitAction 会自动部署，创建分支 gh-pages,然后在仓库的 Settings-&gt;Pages-&gt;Branch-&gt;选择 gh-pages 和/(root)-&gt;save，刷新页面后，点击 Visit site 即可看到博客了</p><h3 id="_7-添加评论功能" tabindex="-1"><a class="header-anchor" href="#_7-添加评论功能"><span>7. 添加评论功能</span></a></h3><p>不管哪种评论插件,最重要,不要使用 Vercel 部署,巨坑,没梯子就用不了！！！</p><ul><li><s><a href="https://theme-hope.vuejs.press/zh/guide/feature/comment.html#twikoo" target="_blank" rel="noopener noreferrer">官网评论 Twikoo 文章</a></s></li><li><a href="https://ecosystem.vuejs.press/zh/plugins/blog/comment/giscus/" target="_blank" rel="noopener noreferrer">官网评论 Giscus</a></li></ul><h4 id="_7-1-github安装giscus插件" tabindex="-1"><a class="header-anchor" href="#_7-1-github安装giscus插件"><span>7.1 GitHub安装Giscus插件</span></a></h4><p>其实就是<a href="https://github.com/apps/giscus" target="_blank" rel="noopener noreferrer">页面</a>上点个安装，和本地无关。</p><h4 id="_7-2-获取配置参数" tabindex="-1"><a class="header-anchor" href="#_7-2-获取配置参数"><span>7.2 获取配置参数</span></a></h4><p><a href="https://giscus.app/zh-CN" target="_blank" rel="noopener noreferrer">获取页面</a><br> 需要填写仓库和 Discussion 分类，之后滚动到页面下部的 “启用 giscus” 部分，获取 data-repo, data-repo-id, data-category 和 data-category-id 这四个属性。</p><p>如果填写仓库时后提示不满足条件，就要到残酷页面的设置界面，开启评论功能。</p><h4 id="_7-1-npm" tabindex="-1"><a class="header-anchor" href="#_7-1-npm"><span><s>7.1 npm</s></span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>npm i twikoo</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_7-2-hugging-face-部署" tabindex="-1"><a class="header-anchor" href="#_7-2-hugging-face-部署"><span><s>7.2 <a href="https://twikoo.js.org/backend.html#hugging-face-%E9%83%A8%E7%BD%B2" target="_blank" rel="noopener noreferrer">Hugging Face 部署</a></s></span></a></h4><ol><li>申请 <a href="https://www.mongodb.com/cloud/atlas/register" target="_blank" rel="noopener noreferrer">MongoDB</a> 账号</li><li>创建免费 MongoDB 数据库</li><li>在 Database Access 页面点击 Add New Database User 创建数据库用户，Authentication Method 选 Password，在 Password Authentication 下设置数据库用户名和密码，用户名和密码可包含数字和大小写字母，请勿包含特殊符号。点击 Database User Privileges 下方的 Add Built In Role，Select Role 选择 Atlas Admin，最后点击 Add User</li></ol><figure><img src="https://twikoo.js.org/assets/mongodb-1.JM5sAL8N.png" alt="创建MongoDB数据库" tabindex="0" loading="lazy"><figcaption>创建MongoDB数据库</figcaption></figure><ol start="4"><li>在 Network Access 页面点击 Add IP Address，Access List Entry 输入 0.0.0.0/0（允许所有 IP 地址的连接），点击 Confirm</li></ol><figure><img src="https://twikoo.js.org/assets/mongodb-2.MBgtne_z.png" alt="修改ip地址链接" tabindex="0" loading="lazy"><figcaption>修改ip地址链接</figcaption></figure><ol start="5"><li>在 Database 页面点击 Connect，连接方式选择 Drivers，并记录数据库连接字符串，请将连接字符串中的 <code>&lt;username&gt;:&lt;password&gt;</code> 修改为刚刚创建的数据库 用户名:密码</li></ol><figure><img src="https://twikoo.js.org/assets/mongodb-3.ZQmwcPKb.png" alt="记录数据库密码" tabindex="0" loading="lazy"><figcaption>记录数据库密码</figcaption></figure><ol start="6"><li>申请 <a href="https://huggingface.co/join" target="_blank" rel="noopener noreferrer">Hugging Face</a> 账号</li><li>登录，点击 Spaces - Create new Space</li></ol><figure><img src="https://twikoo.js.org/assets/hugging-1.KspB7HHc.png" alt="Create new Space" tabindex="0" loading="lazy"><figcaption>Create new Space</figcaption></figure><ol start="8"><li>输入 Space name，Select the Space SDK 选择 Docker，Choose a Docker template 选择 Blank，Space hardware 选择 FREE，选择 Public，点击 Create Space</li></ol><figure><img src="https://twikoo.js.org/assets/hugging-2.WS7dwBRg.png" alt=" Create Space" tabindex="0" loading="lazy"><figcaption> Create Space</figcaption></figure><ol start="9"><li>进入刚刚创建的 Space，点击页面上方的 Settings，滚动到 Variables and secrets 部分，点击 New secret，Name 输入 MONGODB_URI，Value 输入前面记录的数据库连接字符串，点击 Save</li></ol><figure><img src="https://twikoo.js.org/assets/hugging-3.RO21f8fa.png" alt="链接MongoDB数据库uri" tabindex="0" loading="lazy"><figcaption>链接MongoDB数据库uri</figcaption></figure><ol start="10"><li>点击页面上方的 Files - Add file - Create a new file</li></ol><figure><img src="https://twikoo.js.org/assets/hugging-4.CGQ0_GEa.png" alt="链接MongoDB数据库uri" tabindex="0" loading="lazy"><figcaption>链接MongoDB数据库uri</figcaption></figure><ol start="11"><li>在 Name your file 中输入 Dockerfile，在 Edit 区域输入以下内容</li></ol><div class="language-docker line-numbers-mode" data-highlighter="shiki" data-ext="docker" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> imaegoo/twikoo</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ENV</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> TWIKOO_PORT 7860</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">EXPOSE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 7860</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://twikoo.js.org/assets/hugging-5.sOG7KA-2.png" alt="配置dockerfile" tabindex="0" loading="lazy"><figcaption>配置dockerfile</figcaption></figure><ol start="12"><li>点击 Commit new file to main 13. 点击右上角 Settings 右方的菜单（三个点）图标 - Embed this Space，Direct URL 下的内容（例如 <a href="https://xxx-xxx.hf.space" target="_blank" rel="noopener noreferrer">https://xxx-xxx.hf.space</a>）即为您的环境 id</li></ol><figure><img src="https://twikoo.js.org/assets/hugging-6.sbFT8BYZ.png" alt="复制重链接" tabindex="0" loading="lazy"><figcaption>复制重链接</figcaption></figure><h4 id="_7-3-修改-theme-ts" tabindex="-1"><a class="header-anchor" href="#_7-3-修改-theme-ts"><span><s>7.3 修改 theme.ts</s></span></a></h4><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">comment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">      provider</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Twikoo&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">      envId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://xxx-xxx.hf.space&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45))])}const y=d(c,[["render",u]]),v=JSON.parse('{"path":"/posts/web/%E5%88%9B%E5%BB%BA%E5%8D%9A%E5%AE%A2%E8%AE%B0%E5%BD%95.html","title":"搭建博客项目记录","lang":"zh-CN","frontmatter":{"cover":"/assets/images/cover2.jpg","icon":"vuejs","date":"2023-12-11T00:00:00.000Z","title":"搭建博客项目记录","category":["web"],"tag":["vue3","vuepress","github","twikoo","MongoDB","Hugging Face"],"star":true,"sticky":true,"footer":"世界上本没有路,踩的坑多了,也就有了路","description":"搭建博客项目记录（本项目) 项目介绍 本项目基于 vuepress 搭建，使用 github 作为部署平台，用 sourcetree 作为 git 可视化工具。 项目参考 萌萌哒草头将军大佬的文章 萌萌哒草头将军的项目 项目搭建 问题主要分布在/SourceTree/Git Action 上 这里默认已经装好了 nodejs,git,sourcetre...","head":[["meta",{"property":"og:url","content":"https://B2-4AC-1234.github.io/blog/posts/web/%E5%88%9B%E5%BB%BA%E5%8D%9A%E5%AE%A2%E8%AE%B0%E5%BD%95.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"搭建博客项目记录"}],["meta",{"property":"og:description","content":"搭建博客项目记录（本项目) 项目介绍 本项目基于 vuepress 搭建，使用 github 作为部署平台，用 sourcetree 作为 git 可视化工具。 项目参考 萌萌哒草头将军大佬的文章 萌萌哒草头将军的项目 项目搭建 问题主要分布在/SourceTree/Git Action 上 这里默认已经装好了 nodejs,git,sourcetre..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://B2-4AC-1234.github.io/blog/assets/images/cover2.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-07T03:51:41.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://B2-4AC-1234.github.io/blog/assets/images/cover2.jpg"}],["meta",{"name":"twitter:image:alt","content":"搭建博客项目记录"}],["meta",{"property":"article:tag","content":"vue3"}],["meta",{"property":"article:tag","content":"vuepress"}],["meta",{"property":"article:tag","content":"github"}],["meta",{"property":"article:tag","content":"twikoo"}],["meta",{"property":"article:tag","content":"MongoDB"}],["meta",{"property":"article:tag","content":"Hugging Face"}],["meta",{"property":"article:published_time","content":"2023-12-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-07T03:51:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"搭建博客项目记录\\",\\"image\\":[\\"https://twikoo.js.org/assets/mongodb-1.JM5sAL8N.png\\",\\"https://twikoo.js.org/assets/mongodb-2.MBgtne_z.png\\",\\"https://twikoo.js.org/assets/mongodb-3.ZQmwcPKb.png\\",\\"https://twikoo.js.org/assets/hugging-1.KspB7HHc.png\\",\\"https://twikoo.js.org/assets/hugging-2.WS7dwBRg.png\\",\\"https://twikoo.js.org/assets/hugging-3.RO21f8fa.png\\",\\"https://twikoo.js.org/assets/hugging-4.CGQ0_GEa.png\\",\\"https://twikoo.js.org/assets/hugging-5.sOG7KA-2.png\\",\\"https://twikoo.js.org/assets/hugging-6.sbFT8BYZ.png\\"],\\"datePublished\\":\\"2023-12-11T00:00:00.000Z\\",\\"dateModified\\":\\"2025-04-07T03:51:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"B2-4AC\\",\\"url\\":\\"https://github.com/B2-4ac-1234?tab=repositories\\"}]}"]]},"git":{"createdTime":1702352669000,"updatedTime":1743997901000,"contributors":[{"name":"hc","username":"hc","email":"hc@example.com","commits":8,"url":"https://github.com/hc"},{"name":"B2-4AC","username":"B2-4AC","email":"tg409627310@outlook.com","commits":1,"url":"https://github.com/B2-4AC"}]},"readingTime":{"minutes":4.33,"words":1299},"filePathRelative":"posts/web/创建博客记录.md","localizedDate":"2023年12月11日","excerpt":"\\n<h2>项目介绍</h2>\\n<p>本项目基于 vuepress 搭建，使用 github 作为部署平台，用 sourcetree 作为 git 可视化工具。</p>\\n<h2>项目参考</h2>\\n<ul>\\n<li><a href=\\"https://www.51cto.com/article/761976.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">萌萌哒草头将军</a>大佬的文章</li>\\n<li><a href=\\"https://github.com/mmdctjj/blogs2\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">萌萌哒草头将军的项目</a></li>\\n<li><a href=\\"https://theme-hope.vuejs.press/zh/get-started/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><s>至少在项目搭建没什么用的 vuepress 文档</s></a></li>\\n</ul>","autoDesc":true}');export{y as comp,v as data};
