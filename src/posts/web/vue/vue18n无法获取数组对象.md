---
icon: vuejs
date: 2023-12-12
category:
  - Vue
tag:
  - Vue3
  - Vue i18n
  - Vue国际化
footer: 想要国际化，先要说sao话。
---

# vue i18n 无法获取数组、对象

## 问题

使用 vue i18n 配置 en.js,zh.js,可能会使用以下配置

```js
foot: [
  { title: "Download", child: ["Android", "IOS", "Mac", "Windows", "Linux"] },
  { title: "Navigation", child: ["Home", "Product", "Help", "Contact Us"] },
  { title: "Handcent", child: ["About us", "Privacy Policy", "Legal", "Activity"] },
  { title: "Social", child: ["Youtobe", "Twitter", "Facebook"] }
],
```

此时使用

```ts
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const list: [{ title: string, child: string[] }] = tm("foot")
</script>
```

无法获取数组对象

## 解决方法

改用 tm

```ts
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { tm } = useI18n();
const list: [{ title: string, child: string[] }] = tm("foot")
</script>
```
