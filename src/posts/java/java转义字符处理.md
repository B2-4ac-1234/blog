---
icon: java
date: 2024-07-26
title: java转义字符处理
category:
  - java
tag:
  - java
footer: 用轮子一时爽，一直用一直爽。
---

请直接使用 StringEscapeUtils 工具类

### 1. 转义字符

以下是 Java 中常见的转义序列：
\"：双引号
\'：单引号
\\：反斜杠本身
\b：退格符
\f：换页符
\n：换行符
\r：回车符
\t：制表符
\uXXXX：Unicode 字符（其中 XXXX 是 16 进制数字序列）

### 2. StringEscapeUtils

遇到转义字符，不论是对 java 还是 mysql 亦或是 html 都可以使用 StringEscapeUtils.escape\*()方法进行转义。

StringEscapeUtils.escapeJava()：转义 Java 字符串中的特殊字符，如：\n、\t、\r、\b、\f、\’、\”、\\、\uXXXX 等。

StringEscapeUtils.escapeJavaScript()：转义 JavaScript 字符串中的特殊字符，如：\n、\t、\r、\b、\f、\’、\”、\\、\uXXXX 等。

StringEscapeUtils.escapeSql()：转义 SQL 字符串中的特殊字符
