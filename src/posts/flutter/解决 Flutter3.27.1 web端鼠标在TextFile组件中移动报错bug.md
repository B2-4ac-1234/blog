---
date: 2025-02-27
title: 解决 Flutter3.27.1 web端鼠标在TextFile组件中移动报错bug
category:
  - Flutter
  - bug
tag:
  - Flutter
  - bug
footer: flutter官方只需要升级版本就好了，但是开发人员要修改的bug(代码)就多了。
---

问题在Flutter 3.27.1版本中出现

在web端运行时，鼠标处于textfield中移动会频繁报错:
targetElement == domElement
"The targeted input element must be the active input element"

虽然不影响使用，但是一定程度上会影响性能。

可参考[github链接](https://github.com/flutter/flutter/issues/156842)

总之，升级flutter版本就好，flutter3.27.2以上版本都没有这个bug。