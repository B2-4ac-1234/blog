---
icon: vuejs
date: 2023-12-12
category:
  - Vue
tag:
  - Vue3
  - Vue i18n
  - Vue国际化
footer: 上铺的蚊子给下铺的蚊子打电话——联系上下文
---

# vue i18n 可以正常使用,但是提示没有配置对应文本

## 原因

被后续同名属性覆盖了，
例如:

```js
const en = {
  home: "Home",
  // ...
  home: {
    title: "title",
    content: "content",
  },
};
```
