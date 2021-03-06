---
title: "JS 中的逻辑运算总结，FOR效率"
date: "2016-05-07"
tags: ["JS"]
---
# JS 中的逻辑运算总结，FOR效率

在编程中，布尔操作符占了很大一部分，判断语句除了依赖相等操作符，还严重依赖这些布尔操作符，逻辑运算中的布尔操作符也有很多“奇淫巧计”。最近我抱着学习的态度不断浏览一些简单开源的项目，发现对于这一块太不熟练了，急需做个学习整理。

在正式开始之前，先需要区分`&&`、`||` 与`if`语句，他们完全是没有关联，`if`语句关注的是括号内的处理结果转换成布尔值后是否为真，至于括号内部进行了什么运算，它是一概不管的，所以我们讨论的是`&&`操作符是否有返回值，返回值是布尔值还是其他类型的。

当`&&` 用于布尔值判断时，是比较简单的，根据高中的知识，我们知道同真为真，同假为假，一真一假为假。我们也可以猜测到布尔操作符应该应该是短路的，这意味着如果第一个操作数可以给出结果，就不会去判断第二个操作数了。

## 逻辑与&&

很明确，这个操作符一定有返回值，而且返回值不一定都是布尔值。
先看对象的情况，对象是JS中最常用的类型，一般如果初始化一个变量的目的是为了将来引用一个对象，那么会显式的为它初始化为`null`。
OK，如果第一个操作数是对象，那么JS会继续查看第二个操作数，如果还是对象，那么返回第二个对象的值。在`JS`中，`null`也算是对象，对于它在`&&`操作符的行为是否可以参照它本身转成布尔值的情况呢，事实上可以参考的:

```js
Boolean(null);
//false
var a = {};
var b = null;
a && b
// {}
```

类比对象，基本值的判断是很容易的，剩余还有两个特殊值，分别是`NaN`和`undefined`，如果操作数是这两个特殊值，那么结论和`null`是一样的，直接返回特殊值。

## 逻辑或||

逻辑或针对布尔值的处理也很轻松，只要遇到`true`，那么这个运算就结束了。
如果第一个操作数是对象或者`String`，`number`(非0) 等等，那么返回第一个操作数。若第一种情况不满足，继续判断第二个操作数。下面的这个例子很常用：

```js
var a = b.c || 1;
// 查看 b 对象的 c 属性是否为 undefined，如果不是，直接会短路，判断结束；如果 undefined，则取1
//但是需要留意 c 属性的值不能为0，如果是0的话，会直接取1
function a (options) {
options || (options = {});
}
// 函数 a 接受一个参数，当这个参数为undefined的时候，将其初始化为一个对象
```