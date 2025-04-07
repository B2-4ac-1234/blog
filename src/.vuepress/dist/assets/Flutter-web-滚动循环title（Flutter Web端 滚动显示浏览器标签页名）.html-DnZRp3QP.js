import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e as t,o as n}from"./app-1-qcP78a.js";const l={};function e(h,i){return n(),a("div",null,i[0]||(i[0]=[t(`<p>应用场景：一般用于页面收到新消息通知时，或者正在播放音视频时浏览器标签页会循环显示标签名称，以达到提醒或表示正在进行的效果。</p><h2 id="flutter-代码" tabindex="-1"><a class="header-anchor" href="#flutter-代码"><span>Flutter 代码</span></a></h2><div class="language-dart line-numbers-mode" data-highlighter="shiki" data-ext="dart" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * 修改html的title {repeat 为true则滚动循环显示title}</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   * 使用方法 editWebTitle(title: &quot;这是需要滚动显示的标题&quot;,repeat: true); / editWebTitle(title: &quot;这是不滚动的标题&quot;);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   */</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">  Timer</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> _timer;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> editWebTitle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    required</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> title,</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    bool</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> repeat </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//默认不滚动循环</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }){</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;update title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">title);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    _timer</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cancel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(repeat){</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Dynamically update the title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">      String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> title </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;     &quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//避免循环时后面的字符直接连接，出现345612的情况</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 通过**定时器**重复设置title达到类似递归的效果</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 假设目标为&quot;123456  &quot;进行循环，则第一次效果为&quot;23456  1&quot;,第二次效果为&quot;3456  12&quot;,如此循环</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // PS: 降低duration貌似并不会提升循环流畅度...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      _timer </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Timer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">periodic</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Duration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(milliseconds</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 150</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">), (timer) {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> str </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> first </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> result.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">split</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).first;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        result.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">split</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">reduce</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">((value, element) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">          return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> str</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">element;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> str </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> first;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//将之前的首个字符拼接到末尾</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // print(&quot;result&quot;);</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        SystemChrome</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setApplicationSwitcherDescription</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ApplicationSwitcherDescription</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          label</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> result,</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//设置web的title即标签页名称</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        ));</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      });</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 用于停止标签滚动的简单处理，此处也可以使用 _timer?.cancel();</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">      SystemChrome</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setApplicationSwitcherDescription</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ApplicationSwitcherDescription</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        label</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> title,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      ));</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有效果更好(更易实现)的方法欢迎留言。</p>`,4)]))}const r=s(l,[["render",e]]),d=JSON.parse('{"path":"/posts/flutter/Flutter-web-%E6%BB%9A%E5%8A%A8%E5%BE%AA%E7%8E%AFtitle%EF%BC%88Flutter%20Web%E7%AB%AF%20%E6%BB%9A%E5%8A%A8%E6%98%BE%E7%A4%BA%E6%B5%8F%E8%A7%88%E5%99%A8%E6%A0%87%E7%AD%BE%E9%A1%B5%E5%90%8D%EF%BC%89.html","title":"Flutter-web-滚动循环title（Flutter Web端 滚动显示浏览器标签页名）","lang":"zh-CN","frontmatter":{"icon":"js","date":"2023-02-07T00:00:00.000Z","title":"Flutter-web-滚动循环title（Flutter Web端 滚动显示浏览器标签页名）","category":["flutter"],"tag":["flutter","web","js"],"star":true,"footer":"滚动吧,标签页！","description":"应用场景：一般用于页面收到新消息通知时，或者正在播放音视频时浏览器标签页会循环显示标签名称，以达到提醒或表示正在进行的效果。 Flutter 代码 有效果更好(更易实现)的方法欢迎留言。","head":[["meta",{"property":"og:url","content":"https://B2-4AC-1234.github.io/posts/flutter/Flutter-web-%E6%BB%9A%E5%8A%A8%E5%BE%AA%E7%8E%AFtitle%EF%BC%88Flutter%20Web%E7%AB%AF%20%E6%BB%9A%E5%8A%A8%E6%98%BE%E7%A4%BA%E6%B5%8F%E8%A7%88%E5%99%A8%E6%A0%87%E7%AD%BE%E9%A1%B5%E5%90%8D%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"Flutter-web-滚动循环title（Flutter Web端 滚动显示浏览器标签页名）"}],["meta",{"property":"og:description","content":"应用场景：一般用于页面收到新消息通知时，或者正在播放音视频时浏览器标签页会循环显示标签名称，以达到提醒或表示正在进行的效果。 Flutter 代码 有效果更好(更易实现)的方法欢迎留言。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-05T07:19:42.000Z"}],["meta",{"property":"article:tag","content":"flutter"}],["meta",{"property":"article:tag","content":"web"}],["meta",{"property":"article:tag","content":"js"}],["meta",{"property":"article:published_time","content":"2023-02-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-05T07:19:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Flutter-web-滚动循环title（Flutter Web端 滚动显示浏览器标签页名）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-07T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-05T07:19:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"B2-4AC\\",\\"url\\":\\"https://github.com/B2-4ac-1234?tab=repositories\\"}]}"]]},"git":{"createdTime":1709623182000,"updatedTime":1709623182000,"contributors":[{"name":"B2-4AC","username":"B2-4AC","email":"tg409627310@outlook.com","commits":1,"url":"https://github.com/B2-4AC"}]},"readingTime":{"minutes":1.26,"words":377},"filePathRelative":"posts/flutter/Flutter-web-滚动循环title（Flutter Web端 滚动显示浏览器标签页名）.md","localizedDate":"2023年2月7日","excerpt":"<p>应用场景：一般用于页面收到新消息通知时，或者正在播放音视频时浏览器标签页会循环显示标签名称，以达到提醒或表示正在进行的效果。</p>\\n<h2>Flutter 代码</h2>\\n<div class=\\"language-dart line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"dart\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">  /**</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">   * 修改html的title {repeat 为true则滚动循环显示title}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">   * 使用方法 editWebTitle(title: \\"这是需要滚动显示的标题\\",repeat: true); / editWebTitle(title: \\"这是不滚动的标题\\");</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">   */</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">  Timer</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#C678DD\\">?</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> _timer;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">  void</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\"> editWebTitle</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">({</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    required</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> String</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> title,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">    bool</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> repeat </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> false</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">//默认不滚动循环</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  }){</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">    print</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"update title\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">+</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">title);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    _timer</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#C678DD\\">?</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">cancel</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">();</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    if</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(repeat){</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">      print</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"Dynamically update the title\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">      String</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> result </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> title </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">+</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"     \\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">//避免循环时后面的字符直接连接，出现345612的情况</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">      // 通过**定时器**重复设置title达到类似递归的效果</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">      // 假设目标为\\"123456  \\"进行循环，则第一次效果为\\"23456  1\\",第二次效果为\\"3456  12\\",如此循环</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">      // PS: 降低duration貌似并不会提升循环流畅度...</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">      _timer </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> Timer</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">periodic</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Duration</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(milliseconds</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#C678DD\\">:</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 150</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">), (timer) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">        String</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> str </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">        String</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> first </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> result.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">split</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">).first;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">        result.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">split</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">).</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">reduce</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">((value, element) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">          return</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> str</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">+=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">element;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">        },);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">        result </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> str </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">+</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> first;</span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">//将之前的首个字符拼接到末尾</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">        // print(\\"result\\");</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">        SystemChrome</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">setApplicationSwitcherDescription</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">ApplicationSwitcherDescription</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">          label</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#C678DD\\">:</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> result,</span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">//设置web的title即标签页名称</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">        ));</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">      });</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    }</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">else</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">      // 用于停止标签滚动的简单处理，此处也可以使用 _timer?.cancel();</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">      SystemChrome</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">setApplicationSwitcherDescription</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">ApplicationSwitcherDescription</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">        label</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#C678DD\\">:</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> title,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">      ));</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  }</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{r as comp,d as data};
