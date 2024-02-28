import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,a as t,f as n}from"./app-DayeM4AA.js";const p={},c=n(`<h2 id="a-标签点击调用邮箱" tabindex="-1"><a class="header-anchor" href="#a-标签点击调用邮箱" aria-hidden="true">#</a> a 标签点击调用邮箱</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mailto:123456789@XX.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>123456789@XX.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="css-美化滚动条" tabindex="-1"><a class="header-anchor" href="#css-美化滚动条" aria-hidden="true">#</a> css 美化滚动条</h2><h3 id="效果" tabindex="-1"><a class="header-anchor" href="#效果" aria-hidden="true">#</a> 效果</h3>`,4),i=n(`<figure><img src="https://github.com/B2-4ac-1234/blog/blob/main/src/.vuepress/public/assets/images/html_scrollbar.gif?raw=true" alt="美化后滚动条" tabindex="0" loading="lazy"><figcaption>美化后滚动条</figcaption></figure><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>
  <span class="token comment">/*滚动条整体部分，其中的属性有width,height,background,border等（就和一个块级元素一样）（位置1）*/</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">::-webkit-scrollbar-button</span> <span class="token punctuation">{</span>
  <span class="token comment">/*滚动条两端的按钮，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置2）*/</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
  <span class="token comment">/*外层轨道，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置3）*/</span>
  <span class="token property">background</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">::-webkit-scrollbar-track-piece</span> <span class="token punctuation">{</span>
  <span class="token comment">/*内层轨道，滚动条中间部分（位置4）*/</span>
  <span class="token property">background</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
  <span class="token comment">/*滚动条里面可以拖动的那部分（位置5）*/</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #c7c9cc<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">::-webkit-scrollbar-thumb:hover</span> <span class="token punctuation">{</span>
  <span class="token comment">/*滚动条里面可以拖动的那部分（位置5）*/</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>210<span class="token punctuation">,</span> 221<span class="token punctuation">,</span> 251<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">::-webkit-scrollbar-corner</span> <span class="token punctuation">{</span>
  <span class="token comment">/*边角（位置6）*/</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #82afff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">::-webkit-scrollbar-resizer</span> <span class="token punctuation">{</span>
  <span class="token comment">/*定义右下角拖动块的样式（位置7）*/</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #ff0bee<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ts-复制内容到剪切板" tabindex="-1"><a class="header-anchor" href="#ts-复制内容到剪切板" aria-hidden="true">#</a> ts 复制内容到剪切板</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 复制到剪切板 */</span>
  <span class="token function-variable function">copyToClipboard</span><span class="token operator">:</span> <span class="token punctuation">(</span>text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">writeText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打包出现-rangeerror-maximum-call-stack-size-exceeded-问题" tabindex="-1"><a class="header-anchor" href="#打包出现-rangeerror-maximum-call-stack-size-exceeded-问题" aria-hidden="true">#</a> 打包出现 RangeError: Maximum call stack size exceeded 问题</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>1、死循环 2、范型与属性同名产生冲突
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7);function o(l,u){return a(),e("div",null,[c,t(" ![美化后滚动条](/blog/assets/images/html_scrollbar.gif) "),i])}const k=s(p,[["render",o],["__file","web归纳.html.vue"]]);export{k as default};
