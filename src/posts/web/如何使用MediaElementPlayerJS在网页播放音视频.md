---
icon: js
date: 2024-10-22
title: 如何使用MediaElementPlayerJS(7.0.5)在vue&ts网页播放音视频
category:
  - web
  - ts
  - js
  - html
  - vue
tag:
  - js
  - ts
star: true
footer: 这一击,贯穿vue！(误)
---

## 1.安装 MediaElementPlayerJS

```bash

npm install mediaelementplayer

```

## 2.通过 ts(如果不用 ts 省略这一步) 引入

这一步是用来避免在 vue 里使用 declare 可能导致代码工具检查不过。

```ts
declare let MediaElementPlayer: any;
export default MediaElementPlayer;
```

## 3.在 vue 中引入 MediaElementPlayer

问题关键点是没有找到适配 vue3 的 MediaElementPlayer 组件,不能简单的(在 main.js/main.ts 中)使用 app.user(MediaElementPlayer)使用。如下方式引入后,可以用 ref 绑定对象,也可以用 document.getElementById("player")来获取对象,但需要注意如果用 document.getElementById 的方式,最好在 onMounted 中使用或者用 settimeout(()=>{},time)的方式来延迟执行,否则会出现获取不到对象导致无法使用的 bug。

```vue
<template>
  <div style="width: 600px;">
    <div>
      <input v-model="url" style="width:500px;" placeholder="输入音频地址" />
      <button style="width:100px" @click="load()">确认</button>
    </div>
    <video
      ref="player"
      width="500"
      height="300"
      id="player"
      controls
      preload="auto"
      controlslist="nodownload"
    >
      <!-- 也可以选视频文件 -->
      <source :src="url" />
    </video>
  </div>
</template>
<script setup lang="ts">
import "mediaelement/build/mediaelementplayer.css";
import "mediaelement/build/mediaelement-and-player"; //因为7.0.5版本没有默认导出，所以需要这种方式引入
import MediaElementPlayer from "@/utils/MediaElementPlayer"; //可以尝试直接定义declare let MediaElementPlayer: any;如果没报错,这里可以代替这一步
import icon from "mediaelement/build/mejs-controls.svg"; //引入图标,避免按钮黑色,能点击有效果但没有样式
const url = ref("https://www.xzmp3.com/down/ca50c6b6a9c8.mp3"); //默认mp3播放路径
const player = ref(); //也可以在onMounted中使用document.getElementById("player")来获取对象
var media: any = ref();
onMounted(() => {
  //具体api参考 https://github.com/mediaelement/mediaelement/blob/master/docs/api.md
  media = new MediaElementPlayer(player.value, {
    controls: true,
    // poster: getImageUrl("ic_icon.png"),
    stretching: "fill",
    iconSprite: icon,
    // autosizeProgress: false,
    success: function (mediaElement, originalNode) {
      console.log("Player initialized successfully!");
    },
    error: function (mediaElement, originalNode, error) {
      console.error("Error initializing player:", error);
    },
  });
});
function load() {
  media.setSrc(url.value); //设置新播放源
  media.load(); //重新载入
  media.play(); //播放
}
onUnmounted(() => {
  media.remove();
});
</script>
```

## 4.效果展示

[点此查看](https://b2-4ac-1234.github.io/project/#/MediaElementPlayer)
