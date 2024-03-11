---
icon: vuejs
date: 2024-03-11
title: vite(批量)导入图片url变base64导致图标失效的bug
category:
  - web
tag:
  - typescript
  - vite
star: false
sticky: false
footer: 小配置,大问题,官方挖坑我来踩👎
---

![效果图](https://github.com/B2-4ac-1234/blog/blob/main/src/.vuepress/public/assets/images/vue/vue_import_img_base64_bug.png?raw=true)

![控制台输出路径](https://github.com/B2-4ac-1234/blog/blob/main/src/.vuepress/public/assets/images/vue/vue_import_img_no_show.png?raw=true)

```vue
<script setup lang="ts">
import.meta.glob("@/assets/images/*.*", { eager: true, as: "url" }); //导入的图标部分显示,部分不显示
</script>
```

[解决方法(问题来源)](https://cn.vitejs.dev/config/build-options.html#build-assetsinlinelimit)

官方配置的小于 4kb 的图片,导入时会默认内联将图片解析为 base64 编码,造成批量导入的部分图标不显示。

```ts
export default defineConfig({
  //...
  build: {
    assetsInlineLimit: 0, //默认:4096 (4 KiB)小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。
  },
  //...
});
```
