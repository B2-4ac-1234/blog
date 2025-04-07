import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,e as a,o as n}from"./app-1-qcP78a.js";const d={};function e(l,s){return n(),t("div",null,s[0]||(s[0]=[a(`<h3 id="css-属性-media" tabindex="-1"><a class="header-anchor" href="#css-属性-media"><span>CSS 属性 @media</span></a></h3><p><a href="https://www.runoob.com/cssref/css3-pr-mediaquery.html" target="_blank" rel="noopener noreferrer">参考</a></p><h4 id="_1-媒体类型" tabindex="-1"><a class="header-anchor" href="#_1-媒体类型"><span>1.媒体类型</span></a></h4><table><thead><tr><th>媒体类型</th><th>描述</th><th></th></tr></thead><tbody><tr><td>all</td><td>表示所有的媒体设备</td><td></td></tr><tr><td>screen</td><td>表示电脑显示器</td><td></td></tr><tr><td>print</td><td>表示打印机</td><td></td></tr><tr><td>speech</td><td>表示屏幕阅读器等发声设备</td><td></td></tr><tr><td>projection</td><td>表示投影设备</td><td>已废弃</td></tr><tr><td>tv</td><td>表示电视机类型的设备</td><td>已废弃</td></tr><tr><td>handheld</td><td>表示小型手持设备，如手机、平板电脑</td><td>已废弃</td></tr><tr><td>aural</td><td>（听觉的，听的）表示语音和音频合成器（听觉设备）</td><td>已废弃</td></tr><tr><td>braille</td><td>（用盲文写的）表示盲人用点字法触觉回馈设备</td><td>已废弃</td></tr><tr><td>embossed</td><td>表示盲人用点字法打印机</td><td>已废弃</td></tr><tr><td>tty</td><td>表示使用固定密度字母栅格的媒体，比如打字机或终端设备</td><td>已废弃</td></tr></tbody></table><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 只有在打印机或打印预览才应用的样式 */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@media</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    background: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">transparent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-媒体特性" tabindex="-1"><a class="header-anchor" href="#_2-媒体特性"><span>2.媒体特性</span></a></h4><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>aspect-ratio</td><td>定义输出设备中的页面可见区域宽度与高度的比率</td></tr><tr><td>color</td><td>定义输出设备每一组彩色原件的个数。如果不是彩色设备，则值等于 0</td></tr><tr><td>color-index</td><td>定义在输出设备的彩色查询表中的条目数。如果没有使用彩色查询表，则值等于 0</td></tr><tr><td>device-aspect-ratio</td><td>定义输出设备的屏幕可见宽度与高度的比率。</td></tr><tr><td>device-height</td><td>定义输出设备的屏幕可见高度。</td></tr><tr><td>device-width</td><td>定义输出设备的屏幕可见宽度。</td></tr><tr><td>grid</td><td>用来查询输出设备是否使用栅格或点阵。</td></tr><tr><td>height</td><td>定义输出设备中的页面可见区域高度。</td></tr><tr><td>max-aspect-ratio</td><td>定义输出设备的屏幕可见宽度与高度的最大比率。</td></tr><tr><td>max-color</td><td>定义输出设备每一组彩色原件的最大个数。</td></tr><tr><td>max-color-index</td><td>定义在输出设备的彩色查询表中的最大条目数。</td></tr><tr><td>max-device-aspect-ratio</td><td>定义输出设备的屏幕可见宽度与高度的最大比率。</td></tr><tr><td>max-device-height</td><td>定义输出设备的屏幕可见的最大高度。</td></tr><tr><td>max-device-width</td><td>定义输出设备的屏幕最大可见宽度。</td></tr><tr><td>max-height</td><td>定义输出设备中的页面最大可见区域高度。</td></tr><tr><td>max-monochrome</td><td>定义在一个单色框架缓冲区中每像素包含的最大单色原件个数。</td></tr><tr><td>max-resolution</td><td>定义设备的最大分辨率。</td></tr><tr><td>max-width</td><td>定义输出设备中的页面最大可见区域宽度。</td></tr><tr><td>min-aspect-ratio</td><td>定义输出设备中的页面可见区域宽度与高度的最小比率。</td></tr><tr><td>min-color</td><td>定义输出设备每一组彩色原件的最小个数。</td></tr><tr><td>min-color-index</td><td>定义在输出设备的彩色查询表中的最小条目数。</td></tr><tr><td>min-device-aspect-ratio</td><td>定义输出设备的屏幕可见宽度与高度的最小比率。</td></tr><tr><td>min-device-width</td><td>定义输出设备的屏幕最小可见宽度。</td></tr><tr><td>min-device-height</td><td>定义输出设备的屏幕的最小可见高度。</td></tr><tr><td>min-height</td><td>定义输出设备中的页面最小可见区域高度。</td></tr><tr><td>min-monochrome</td><td>定义在一个单色框架缓冲区中每像素包含的最小单色原件个数</td></tr><tr><td>min-resolution</td><td>定义设备的最小分辨率。</td></tr><tr><td>min-width</td><td>定义输出设备中的页面最小可见区域宽度。</td></tr><tr><td>monochrome</td><td></td></tr><tr><td>orientation</td><td>定义输出设备中的页面可见区域高度是否大于或等于宽度。</td></tr><tr><td>resolution</td><td>定义设备的分辨率。如：96dpi, 300dpi, 118dpcm</td></tr><tr><td>scan</td><td>定义电视类设备的扫描工序。</td></tr><tr><td>width</td><td>定义输出设备中的页面可见区域宽度。</td></tr></tbody></table><p>以下为网页隐私协议/纯文本/简单自适应布局样式</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  padding-top: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1.5</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">rem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  padding-bottom: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1.5</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">rem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.container</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  margin-right: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">auto</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  margin-left: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">auto</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  padding-right: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">15</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  padding-left: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">15</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* Customize container */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@media</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (min-width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">48</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">em</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  .container</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    max-width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">46</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">rem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@media</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (min-width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">576</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  .container</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    max-width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">540</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@media</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (min-width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">768</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  .container</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    max-width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">720</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@media</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (min-width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">992</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  .container</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    max-width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">960</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@media</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (min-width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  .container</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    max-width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1140</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const p=i(d,[["render",e]]),k=JSON.parse('{"path":"/posts/web/css%E5%AA%92%E4%BD%93%E6%9F%A5%E8%AF%A2.html","title":"css媒体查询(布局根据设备进行变化)","lang":"zh-CN","frontmatter":{"icon":"css3","date":"2024-04-03T00:00:00.000Z","title":"css媒体查询(布局根据设备进行变化)","category":["web"],"tag":["html","css"],"star":true,"sticky":false,"footer":"随地(窗口)大小变！","description":"CSS 属性 @media 参考 1.媒体类型 2.媒体特性 以下为网页隐私协议/纯文本/简单自适应布局样式","head":[["meta",{"property":"og:url","content":"https://B2-4AC-1234.github.io/posts/web/css%E5%AA%92%E4%BD%93%E6%9F%A5%E8%AF%A2.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"css媒体查询(布局根据设备进行变化)"}],["meta",{"property":"og:description","content":"CSS 属性 @media 参考 1.媒体类型 2.媒体特性 以下为网页隐私协议/纯文本/简单自适应布局样式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-03T07:15:47.000Z"}],["meta",{"property":"article:tag","content":"html"}],["meta",{"property":"article:tag","content":"css"}],["meta",{"property":"article:published_time","content":"2024-04-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-03T07:15:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"css媒体查询(布局根据设备进行变化)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-03T07:15:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"B2-4AC\\",\\"url\\":\\"https://github.com/B2-4ac-1234?tab=repositories\\"}]}"]]},"git":{"createdTime":1712128547000,"updatedTime":1712128547000,"contributors":[{"name":"B2-4AC","username":"B2-4AC","email":"tg409627310@outlook.com","commits":1,"url":"https://github.com/B2-4AC"}]},"readingTime":{"minutes":3.41,"words":1023},"filePathRelative":"posts/web/css媒体查询.md","localizedDate":"2024年4月3日","excerpt":"<h3>CSS 属性 @media</h3>\\n<p><a href=\\"https://www.runoob.com/cssref/css3-pr-mediaquery.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">参考</a></p>\\n<h4>1.媒体类型</h4>\\n<table>\\n<thead>\\n<tr>\\n<th>媒体类型</th>\\n<th>描述</th>\\n<th></th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>all</td>\\n<td>表示所有的媒体设备</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>screen</td>\\n<td>表示电脑显示器</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>print</td>\\n<td>表示打印机</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>speech</td>\\n<td>表示屏幕阅读器等发声设备</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>projection</td>\\n<td>表示投影设备</td>\\n<td>已废弃</td>\\n</tr>\\n<tr>\\n<td>tv</td>\\n<td>表示电视机类型的设备</td>\\n<td>已废弃</td>\\n</tr>\\n<tr>\\n<td>handheld</td>\\n<td>表示小型手持设备，如手机、平板电脑</td>\\n<td>已废弃</td>\\n</tr>\\n<tr>\\n<td>aural</td>\\n<td>（听觉的，听的）表示语音和音频合成器（听觉设备）</td>\\n<td>已废弃</td>\\n</tr>\\n<tr>\\n<td>braille</td>\\n<td>（用盲文写的）表示盲人用点字法触觉回馈设备</td>\\n<td>已废弃</td>\\n</tr>\\n<tr>\\n<td>embossed</td>\\n<td>表示盲人用点字法打印机</td>\\n<td>已废弃</td>\\n</tr>\\n<tr>\\n<td>tty</td>\\n<td>表示使用固定密度字母栅格的媒体，比如打字机或终端设备</td>\\n<td>已废弃</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{p as comp,k as data};
