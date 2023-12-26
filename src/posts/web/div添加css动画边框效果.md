---
icon: css3
date: 2023-12-26
title: div添加css动画边框效果
category:
  - web
tag:
  - html
  - css
  - transition
  - 动画
star: true
sticky: false
footer: 是特技，我加了特技！
---

![动画边框效果](/blog/assets/images/html_border_transition.gif)

# div 添加 css 动画边框效果

## 效果演示

## 代码如下

```vue
<template>
  <div id="transition_border" class="flex-none inline-block">Contact Us</div>
</template>

<style lang="less" scoped>
#transition_border {
  // width: 200px;
  // height: 2em;
  padding: 10px;
  border: 0;
  background: none;
  color: white;
  // font-weight: bold;
  position: relative;
  outline: none;
  box-sizing: border-box;
  // background-image: url('@/assets/images/nav_logo_handcent.png');
  background-repeat: no-repeat;
  background-size: cover;
}

#transition_border::before,
#transition_border::after {
  box-sizing: inherit;
  position: absolute;
  content: "";
  border: 2px solid transparent;
  width: 0;
  height: 0;
}

#transition_border::after {
  bottom: 0;
  right: 0;
}

#transition_border::before {
  top: 0;
  left: 0;
}

#transition_border:hover::before,
#transition_border:hover::after {
  width: 100%;
  height: 100%;
}

#transition_border:hover::before {
  border-top-color: white;
  border-right-color: white;
  transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
}

#transition_border:hover::after {
  border-bottom-color: white;
  border-left-color: white;
  transition: border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s,
    height 0.3s ease-out 1s;
}
</style>
```
