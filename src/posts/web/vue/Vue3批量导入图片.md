---
icon: vuejs
date: 2024-03-07
title: Vue3批量导入图片
category:
  - web
tag:
  - vue3
  - typescript
  - vite
star: false
sticky: false
footer: 多多益善！
---

参考来自
[vue3 批量引入本地资源图片](https://blog.51cto.com/u_16293548/7778284)
和[vue3+vite 批量引入图片文件](https://blog.csdn.net/weixin_43553448/article/details/130507963)

```vue
<script setup lang="ts">
const inconList = Object.values(
  import.meta.glob("@/assets/images/*.*", { eager: true })
).map((v: any) => v.default);
console.log(`output->inconList`, inconList);
</script>
```
