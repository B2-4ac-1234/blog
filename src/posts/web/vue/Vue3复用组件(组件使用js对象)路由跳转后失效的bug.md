---
icon: js
date: 2023-12-13
title: Vue3复用组件(组件使用js对象)路由跳转后失效的bug
category:
  - web
tag:
  - vue3
  - javascript
  - bug
  - fixed
star: false
sticky: false
footer: 神说，要有光，世界就有了光；我写，看效果，项目就有了bug。
---

<!-- ![vue_title_hover_bug.gif](/blog/assets/images/vue/vue_title_hover_bug.gif) -->
<iframe height=55 width=569 :src="$withBase('/assets/images/vue/vue_title_hover_bug.gif')"></iframe>

## 问题复现

如图，点击“首页”之后，路由跳转，下划线动画失效

组件代码如下:

```vue
<template>
  <div id="slot">
    <slot></slot>
    <!-- 插槽位置 -->
    <div class="indicator touch-none" :style="indicator"></div>
  </div>
</template>

<script setup lang="ts">
const indicator = ref();
onMounted(() => {
  // 获取插槽中的所有对象
  var slot = document.getElementById("slot");
  var children: NodeListOf<HTMLElement> | HTMLElement | null =
    slot?.querySelectorAll("*").length
      ? slot?.querySelectorAll("*").length > 0
        ? slot?.querySelectorAll("*")
        : slot
      : slot;
  if (children == null || children instanceof HTMLElement || null) {
    return;
  }
  children.forEach(
    (element: HTMLElement, key: number, parent: NodeListOf<Element>) => {
      element.classList.add("tabs");
      element.addEventListener("mouseenter", () => {
        indicate(element, false);
      });
      element.addEventListener("mouseleave", () => {
        indicate(element, true);
      });
      element.addEventListener("click", () => {
        children instanceof NodeList
          ? children!.forEach((_element: HTMLElement) => {
              if (_element != element) {
                _element.classList.remove("active");
              }
            })
          : null;
        element.classList.add("active");
      });
    }
  );
});

var indicate = function indicate(_element: HTMLElement, current: boolean) {
  // 获取元素的位置信息
  var h = _element.clientHeight,
    w = _element.clientWidth,
    // 计算indicator的位置
    t = (_element.offsetTop + h - 5).toFixed(2),
    l = _element.offsetLeft.toFixed(2),
    c = _element.style.color || "rgba(255,255,255,1)";
  // 更新indicator的位置
  indicator.value = {
    top: current ? t + "px" : t + "px",
    left: l + "px",
    width: w + "px",
    height: current ? "0.2em" : "0.2em",
    "background-color": current ? "rgba(255,255,255,0)" : c,
  };
};
</script>

<style scoped>
.tabs {
  text-transform: uppercase;
  -webkit-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}

.indicator {
  pointer-events: none;
  position: fixed;
  -webkit-transition: all 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}
</style>
```

## 原因

vue 跳转时，虽然跳转后页面也出了 onMounted 事件，但是事件中的 js 没有正常获取，通过 F12 可以发现，页面元素 indicator 的 css 并没有发生变化。

## 解决方法

为组件添加 id

修改后代码如下:

```vue
<template>
  <div :id="slot_id">
    <slot></slot>
    <!-- 插槽位置 -->
    <div :id="indicator_id" ref="indicator" class="indicator touch-none"></div>
  </div>
</template>

<script setup lang="ts">
const indicator_id = "indicator_" + Math.random().toFixed(2);
const slot_id = "slot_" + Math.random().toFixed(2);
onMounted(() => {
  // console.log(`output->idndicator.value`, indicator.value)
  // 获取插槽中的所有对象
  var slot = document.getElementById(slot_id);
  var children: NodeListOf<HTMLElement> | HTMLElement | null =
    slot?.querySelectorAll("*").length
      ? slot?.querySelectorAll("*").length > 0
        ? slot?.querySelectorAll("*")
        : slot
      : slot;
  if (children == null || children instanceof HTMLElement || null) {
    return;
  }
  children.forEach(
    (element: HTMLElement, key: number, parent: NodeListOf<Element>) => {
      element.classList.add("tabs");
      element.addEventListener("mouseenter", () => {
        indicate(element, false);
      });
      element.addEventListener("mouseleave", () => {
        indicate(element, true);
      });
      element.addEventListener("click", () => {
        children instanceof NodeList
          ? children!.forEach((_element: HTMLElement) => {
              if (_element != element) {
                _element.classList.remove("active");
              }
            })
          : null;
        element.classList.add("active");
      });
    }
  );
});

var indicate = function indicate(_element: HTMLElement, current: boolean) {
  // 获取元素的位置信息
  var h = _element.clientHeight,
    w = _element.clientWidth,
    // 计算indicator的位置
    t = (_element.offsetTop + h - 5).toFixed(2),
    l = _element.offsetLeft.toFixed(2),
    c = _element.style.color || "rgba(255,255,255,1)";
  // 更新indicator的位置
  const indicator = document.getElementById(indicator_id);
  indicator?.setAttribute(
    "style",
    `
  top:${current ? t : t}px;
  left:${l}px;
  width:${w}px;
  height:${current ? 0.2 : 0.2}em;
  background-color:${current ? "rbga(255,255,255,0)" : c};
  `
  );
};
</script>

<style scoped>
.tabs {
  text-transform: uppercase;
  -webkit-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}

.indicator {
  pointer-events: none;
  position: fixed;
  -webkit-transition: all 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}
</style>
```

## 效果

![vue_title_hover_bug_fix.gif](/blog/assets/images/vue/vue_title_hover_bug_fix.gif)
