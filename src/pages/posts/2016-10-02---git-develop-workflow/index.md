---
title: "Git 学习小记之开发工作流"
date: "2017-10-02"
tags: ["Git"]
---
# Git 学习小记之开发工作流

经过上面几次学习，再结合日常的使用，现在对于分支已经有了比较细致的了解，今天补充的是利用分支进行开发的工作流，有利于帮助工程更快更安全的开发。

## 长期分支

浏览GitHub上的仓库，很多都是在`master`分支上保留着稳定代码，这部分可能是需要发布或者已经在使用的代码。在此基础上，可能还会有`dev`开发分支，`staging`测试分支等等，这些分支专门用来开发测试，当这些开发分支到达一定程度，可以提供稳定的特性；或者完成了开发任务，就可以合并到`master`分支上，随着项目的开展，`master`分支上指向过的`commit`对象越来越多，分支分支指针不断的右推。
这样的项目拥有不同层次的稳定性，当稳定性达到某一个阶段，就可以合并到上一个层级的上，整个开发进程不断推进。

![长期分支开发](https://coding.net/u/getcha22/p/gatsbyblog/git/raw/master/src/pages/posts/2016-10-02---git-develop-workflow/a.png)

## 特性分支

所谓特性分支，与之前的长期分支做区别，它主要是不断的创建一些短期的，专门用来实现单一特性的分支，可以被频繁的创建和合并。

### 一个相对复杂的开发过程

这种开发方式更加适合大型项目和多人开发，如下面的例子：

![多个特性分支的提交历史](https://coding.net/u/getcha22/p/gatsbyblog/git/raw/master/src/pages/posts/2016-10-02---git-develop-workflow/b.png)

从下面往上面看，一开始处于`master`分支上进行开发，到`c1`时，出现了一个比较严重，但是又不影响主分支继续开发的问题，于是新建一个`iss`分支，专门用来修改这个问题，在图上就是右侧的`iss91`分支。此时两分支继续开发，`iss91`分支开发到`C6`时，发现开发有些不合适的地方，可能会有更加简便安全的处理方式，于是从某个合适的`commit`对象上，新建一个新分支`iss91v2`，专门用来尝试是否有更加简单的方法，在 `iss91v2`经过多次开发，发现新方法可以，就一直留在`iss91v2`分支上解决问题。

开发依然继续，`master`分支提交了`c9`，`c10`，`iss91v2`分支提交了`c11`。但在此时，发现又有一个不确定是否可以成功的想法，于是分出一个`dumbidea`分支做试验。

再开发几次后，我们发现在`iss91v2`上，问题得到了解决。另外，在把`dumbidea`分支让别人`review`后，发现它太棒了。此时该如何合并和整理这些分支呢？

毫无疑问，先将它直接合并到`master`分支上。再看其他分支，之前发现的问题在`iss91v2`上获得了解决，虽然`iss91`这个分支上我们曾经也有过多次开发，但是这些代码已经没有用了，直接抛弃掉`iss91`分支，之后将`iss91v2`上的代码再合并到主分支上。

![处理方案](https://coding.net/u/getcha22/p/gatsbyblog/git/raw/master/src/pages/posts/2016-10-02---git-develop-workflow/c.png)

以上的所有操作都是在本地进行的，非常便捷高效，不需要与服务器进行任何交互。两种开发方式并没有互斥，可以结合使用，明白原理最重要。