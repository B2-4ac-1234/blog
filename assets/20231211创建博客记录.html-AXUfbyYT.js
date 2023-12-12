import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as t,c as l,b as e,d as n,e as i,w as c,f as o}from"./app-cnqHcpBT.js";const h={},u=e("h1",{id:"搭建博客项目记录-本项目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#搭建博客项目记录-本项目","aria-hidden":"true"},"#"),n(" 搭建博客项目记录（本项目)")],-1),v=e("h2",{id:"项目介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#项目介绍","aria-hidden":"true"},"#"),n(" 项目介绍")],-1),b=e("s",null,"(主要是本人 git 水平较低)",-1),m=e("h2",{id:"项目参考",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#项目参考","aria-hidden":"true"},"#"),n(" 项目参考")],-1),p={href:"https://www.51cto.com/article/761976.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/mmdctjj/blogs2",target:"_blank",rel:"noopener noreferrer"},_={href:"https://theme-hope.vuejs.press/zh/get-started/",target:"_blank",rel:"noopener noreferrer"},f=e("s",null,"至少在项目搭建没什么用的 vuepress 文档",-1),x=o(`<h2 id="项目搭建" tabindex="-1"><a class="header-anchor" href="#项目搭建" aria-hidden="true">#</a> 项目搭建</h2><p>各有各的坑,我踩的坑主要分布在/SourceTree/Git Action 上</p><p>这里默认已经装好了 nodejs,git,sourcetree,vscode</p><h3 id="_1-先创建好-git-仓库" tabindex="-1"><a class="header-anchor" href="#_1-先创建好-git-仓库" aria-hidden="true">#</a> 1. 先创建好 git 仓库</h3><h3 id="_2-通过-sourcetree-获取到本地目录" tabindex="-1"><a class="header-anchor" href="#_2-通过-sourcetree-获取到本地目录" aria-hidden="true">#</a> 2. 通过 SourceTree 获取到本地目录</h3><h4 id="q2-1" tabindex="-1"><a class="header-anchor" href="#q2-1" aria-hidden="true">#</a> Q2.1</h4><p>如果出现权限相关问题，可通过配置 sourcetree 的 ssh 密钥的方式解决: 先打开 sourcetree 的设置-&gt;账户-&gt;添加/编辑-&gt;连接账号(建议 OAuth)-&gt;复制到剪切板(这里就复制了 ssh 密钥)-&gt;打开自己的 github 设置-&gt;SSH and GPG keys-&gt;SSH keys-&gt;添加 ssh 密钥-&gt;粘贴密钥-&gt;保存</p><h3 id="_3-安装-vuepress" tabindex="-1"><a class="header-anchor" href="#_3-安装-vuepress" aria-hidden="true">#</a> 3. 安装 vuepress</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-创建项目" tabindex="-1"><a class="header-anchor" href="#_4-创建项目" aria-hidden="true">#</a> 4. 创建项目</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- blogs为文件夹名称 --&gt;
npm init vuepress-theme-hope blogs
&lt;!-- 是否需要一个自动部署文档到 GitHub Pages 的工作流？ Yes --&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="q4-1" tabindex="-1"><a class="header-anchor" href="#q4-1" aria-hidden="true">#</a> Q4.1</h4><p>要保证文件夹的目录到 src 只有一层，例如(blog/src)，而不是(blog/blog/src)，否则会导致之后上传后 gitaction 运行失败</p><h4 id="q4-2" tabindex="-1"><a class="header-anchor" href="#q4-2" aria-hidden="true">#</a> Q4.2</h4><p>如果是在其他目录生成项目后拷贝过来,则务必将.gitigore 文件和.github 文件夹一起拷贝，否则会导致推送时出问题</p><h3 id="_5-配置" tabindex="-1"><a class="header-anchor" href="#_5-配置" aria-hidden="true">#</a> 5. 配置</h3><h4 id="_5-1-修改配置文件" tabindex="-1"><a class="header-anchor" href="#_5-1-修改配置文件" aria-hidden="true">#</a> 5.1 修改配置文件</h4><p>修改 src/.vuepress/config.ts -&gt; base: &quot;/blogs/&quot;</p><h4 id="_5-2-修改-git-action-配置" tabindex="-1"><a class="header-anchor" href="#_5-2-修改-git-action-配置" aria-hidden="true">#</a> 5.2 修改 Git Action 配置</h4><p>修改 .github/workflows/deploy-docs.yml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>name: 部署文档

on:
  push:
    branches:
      # 确保这是你正在使用的分支名称
      - main

permissions:
  contents: write

jobs:
  deploy-gh-pages:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
          # 如果你文档需要 Git 子模块，取消注释下一行
          # submodules: true

      - name: 设置 Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          # cache: npm

      - name: 安装依赖
        run: npm install --frozen-lockfile

      - name: 构建文档
        env:
          NODE_OPTIONS: --max_old_space_size=8192
        run: |-
          npm run docs:build
          &gt; src/.vuepress/dist/.nojekyll

      - name: 部署文档
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 这是文档部署到的分支名称
          branch: gh-pages
          folder: src/.vuepress/dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-通过-sourcetree-推送到-main-分支" tabindex="-1"><a class="header-anchor" href="#_6-通过-sourcetree-推送到-main-分支" aria-hidden="true">#</a> 6. 通过 sourcetree 推送到 main 分支</h3><h4 id="_6-1-配置-gitpages" tabindex="-1"><a class="header-anchor" href="#_6-1-配置-gitpages" aria-hidden="true">#</a> 6.1 配置 GitPages</h4><p>如果配置成功，GitAction 会自动部署，创建分支 gh-pages,然后在仓库的 Settings-&gt;Pages-&gt;Branch-&gt;选择 gh-pages 和/(root)-&gt;save，刷新页面后，点击 Visit site 即可看到博客了</p>`,24);function k(w,S){const r=a("font"),s=a("ExternalLinkIcon");return t(),l("div",null,[u,v,e("p",null,[n("本项目基于 vuepress 搭建，使用 github 作为部署平台，用 sourcetree 作为 git 可视化工具"),i(r,{color:"transport"},{default:c(()=>[b]),_:1}),n("。")]),m,e("ul",null,[e("li",null,[e("a",p,[n("萌萌哒草头将军"),i(s)]),n("大佬的文章")]),e("li",null,[e("a",g,[n("大佬的项目"),i(s)])]),e("li",null,[e("a",_,[f,i(s)])])]),x])}const j=d(h,[["render",k],["__file","20231211创建博客记录.html.vue"]]);export{j as default};
