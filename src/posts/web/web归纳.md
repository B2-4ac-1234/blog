---
icon: html5
date: 2024-01-5
title: web归纳
category:
  - web
tag:
  - vue3
  - html
  - css
  - js/ts
star: true
sticky: false
footer: 我虽无意归纳,却知查询苦楚
---

## a 标签点击调用邮箱

```html
<a href="mailto:123456789@XX.com">123456789@XX.com</a>
```

## css 美化滚动条

### 效果

![美化后滚动条](/blog/assets/images/html_scrollbar.gif)

### 代码

```css
::-webkit-scrollbar {
  /*滚动条整体部分，其中的属性有width,height,background,border等（就和一个块级元素一样）（位置1）*/
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-button {
  /*滚动条两端的按钮，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置2）*/
  display: none;
  background: transparent;
}

::-webkit-scrollbar-track {
  /*外层轨道，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置3）*/
  background: transparent;
}

::-webkit-scrollbar-track-piece {
  /*内层轨道，滚动条中间部分（位置4）*/
  background: transparent;
}

::-webkit-scrollbar-thumb {
  /*滚动条里面可以拖动的那部分（位置5）*/
  background: #c7c9cc;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  /*滚动条里面可以拖动的那部分（位置5）*/
  background: rgb(210, 221, 251);
  border-radius: 3px;
}

::-webkit-scrollbar-corner {
  /*边角（位置6）*/
  background: #82afff;
}

::-webkit-scrollbar-resizer {
  /*定义右下角拖动块的样式（位置7）*/
  background: #ff0bee;
}
```

## ts 复制内容到剪切板

```ts
export default {
  /** 复制到剪切板 */
  copyToClipboard: (text: string) => {
    navigator.clipboard.writeText(text).catch((e) => console.log(e));
  },
};
```

## 打包出现 RangeError: Maximum call stack size exceeded 问题

```vue
1、死循环 2、范型与属性同名产生冲突
```
