---
title: "为什么选择GatsbyJS？"
date: "2018-02-12"
tags: ["React", "JavaScript"]
popular: true
nopublish: true
---
# 为什么选择GatsbyJS（待完善）

熟悉React技术栈的开发者，应该会喜欢GatsbyJS，它基于React，在此基础之上，有些场景下，可以完全摆脱后端自己处理数据，之后使用React那一套`props`组件传递，将数据逐层分配下去。
GatsbyJS在2015年中由Kyle Mathews开源，项目后来不断壮大，目前已经拥有了13k的star。

谁也不喜欢对着一个没有交互，加载速度又很慢的网站，

网站的内容多久能被看到（速度指数，Speed Index），网站多久能真正可用，指能与用户交互（交互时间，Time to Interactive-TTI）。

## 一些改善网站性能的方法

下面讨论一些可以改进网站性能的方法。

### 避免在客户端下载本不需要的资源

不要去加载不必要的JS,CSS，图片等等。

### 不需要立马加载的资源

遇到不需要立马加载的资源，就defer它，让骨架先加载，页面显示部分内容，不断完善。别让不需要立马加载的资源阻塞了页面，避免出现长时间的白屏。

基本的观点是仅仅加载要立即在首页显示的资源，推迟加载其他页面的JS，推迟加载可选的页面（比如页面的小部件）等等，先加载尽可能少的JS，让网站可用。

### 拆分代码

用webpack等技术的开发者，往往都喜欢将所有的JS代码打包到一个文件中，认为这样只需要一次请求就可以收到所有JS资源，是非常棒的事情，但其实不如拆分这个巨大的包。

## 为什么GatsbyJS会很快

大部分的前端框架，运行起来都很简单，但是想要优化，则需要开发者有较强的代码功底，而在GatsbyJS中，则将这些优化尽可能的对用户透明，放在内部来做。

- 内联关键部分的CSS
- 自动设置preload

> `<link>` 元素的 rel 属性的属性值preload能够让你在你的HTML页面中 `<head>`元素内部书写一些声明式的资源获取请求，可以指明哪些资源是在页面加载完成后即刻需要的。对于这种即刻需要的资源，你可能希望在页面加载的生命周期的早期阶段就开始获取，在浏览器的主渲染机制介入前就进行预加载。这一机制使得资源可以更早的得到加载并可用，且更不易阻塞页面的初步渲染，进而提升性能。本文提供了一个如何有效使用preload机制的基本说明。

- 预加载后续会被用到的资源