---
icon: js
date: 2026-04-07
title: Nuxt部署后刷新数据库相关页面没有正常加载的bug
category:
  - js
  - ts
tag:
  - js/ts
star: false
sticky: false
footer: 
---

## 问题描述

开发环境下，刷新“需要数据库连接的相关页面”可以正常加载，但部署后刷新该页面，需要获取数据的部分显示空白，如果是从其他页面跳转到该页面，可以正常显示数据。

## 原因分析

nodejs版本问题，开发环境和部署环境的nodejs版本不一致，导致nuxt无法正确处理。

## 解决方案

开发环境使用nvm管理nodejs版本，确保开发环境和部署环境的nodejs版本一致。

```bash
# 具体按部署环境版本
nvm use 20.19.6
rm -rf node_modules
npm install
npm run build
cd .output/server && node index.mjs
```