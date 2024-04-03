---
icon: css3
date: 2024-04-03
title: css媒体查询(布局根据设备进行变化)
category:
  - web
tag:
  - html
  - css
star: true
sticky: false
footer: 随地(窗口)大小变！
---

### CSS 属性 @media

[参考](https://www.runoob.com/cssref/css3-pr-mediaquery.html)

#### 1.媒体类型

| 媒体类型   | 描述                                                 |        |
| ---------- | ---------------------------------------------------- | ------ |
| all        | 表示所有的媒体设备                                   |
| screen     | 表示电脑显示器                                       |
| print      | 表示打印机                                           |
| speech     | 表示屏幕阅读器等发声设备                             |
| projection | 表示投影设备                                         | 已废弃 |
| tv         | 表示电视机类型的设备                                 | 已废弃 |
| handheld   | 表示小型手持设备，如手机、平板电脑                   | 已废弃 |
| aural      | （听觉的，听的）表示语音和音频合成器（听觉设备）     | 已废弃 |
| braille    | （用盲文写的）表示盲人用点字法触觉回馈设备           | 已废弃 |
| embossed   | 表示盲人用点字法打印机                               | 已废弃 |
| tty        | 表示使用固定密度字母栅格的媒体，比如打字机或终端设备 | 已废弃 |

```css
/* 只有在打印机或打印预览才应用的样式 */
@media print {
  h1 {
    background: transparent;
  }
}
```

#### 2.媒体特性

| 值                      | 描述                                                                     |
| ----------------------- | ------------------------------------------------------------------------ |
| aspect-ratio            | 定义输出设备中的页面可见区域宽度与高度的比率                             |
| color                   | 定义输出设备每一组彩色原件的个数。如果不是彩色设备，则值等于 0           |
| color-index             | 定义在输出设备的彩色查询表中的条目数。如果没有使用彩色查询表，则值等于 0 |
| device-aspect-ratio     | 定义输出设备的屏幕可见宽度与高度的比率。                                 |
| device-height           | 定义输出设备的屏幕可见高度。                                             |
| device-width            | 定义输出设备的屏幕可见宽度。                                             |
| grid                    | 用来查询输出设备是否使用栅格或点阵。                                     |
| height                  | 定义输出设备中的页面可见区域高度。                                       |
| max-aspect-ratio        | 定义输出设备的屏幕可见宽度与高度的最大比率。                             |
| max-color               | 定义输出设备每一组彩色原件的最大个数。                                   |
| max-color-index         | 定义在输出设备的彩色查询表中的最大条目数。                               |
| max-device-aspect-ratio | 定义输出设备的屏幕可见宽度与高度的最大比率。                             |
| max-device-height       | 定义输出设备的屏幕可见的最大高度。                                       |
| max-device-width        | 定义输出设备的屏幕最大可见宽度。                                         |
| max-height              | 定义输出设备中的页面最大可见区域高度。                                   |
| max-monochrome          | 定义在一个单色框架缓冲区中每像素包含的最大单色原件个数。                 |
| max-resolution          | 定义设备的最大分辨率。                                                   |
| max-width               | 定义输出设备中的页面最大可见区域宽度。                                   |
| min-aspect-ratio        | 定义输出设备中的页面可见区域宽度与高度的最小比率。                       |
| min-color               | 定义输出设备每一组彩色原件的最小个数。                                   |
| min-color-index         | 定义在输出设备的彩色查询表中的最小条目数。                               |
| min-device-aspect-ratio | 定义输出设备的屏幕可见宽度与高度的最小比率。                             |
| min-device-width        | 定义输出设备的屏幕最小可见宽度。                                         |
| min-device-height       | 定义输出设备的屏幕的最小可见高度。                                       |
| min-height              | 定义输出设备中的页面最小可见区域高度。                                   |
| min-monochrome          | 定义在一个单色框架缓冲区中每像素包含的最小单色原件个数                   |
| min-resolution          | 定义设备的最小分辨率。                                                   |
| min-width               | 定义输出设备中的页面最小可见区域宽度。                                   |
| monochrome              |
| orientation             | 定义输出设备中的页面可见区域高度是否大于或等于宽度。                     |
| resolution              | 定义设备的分辨率。如：96dpi, 300dpi, 118dpcm                             |
| scan                    | 定义电视类设备的扫描工序。                                               |
| width                   | 定义输出设备中的页面可见区域宽度。                                       |

以下为网页隐私协议/纯文本/简单自适应布局样式

```css
body {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
}

/* Customize container */
@media (min-width: 48em) {
  .container {
    max-width: 46rem;
  }
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
```
