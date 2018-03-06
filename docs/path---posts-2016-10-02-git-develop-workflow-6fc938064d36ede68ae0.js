webpackJsonp([0xc5a193d4daa0],{479:function(e,o){e.exports={data:{markdownRemark:{html:'<h1>Git 学习小记之开发工作流</h1>\n<p>经过上面几次学习，再结合日常的使用，现在对于分支已经有了比较细致的了解，今天补充的是利用分支进行开发的工作流，有利于帮助工程更快更安全的开发。</p>\n<h2>长期分支</h2>\n<p>浏览GitHub上的仓库，很多都是在<code>master</code>分支上保留着稳定代码，这部分可能是需要发布或者已经在使用的代码。在此基础上，可能还会有<code>dev</code>开发分支，<code>staging</code>测试分支等等，这些分支专门用来开发测试，当这些开发分支到达一定程度，可以提供稳定的特性；或者完成了开发任务，就可以合并到<code>master</code>分支上，随着项目的开展，<code>master</code>分支上指向过的<code>commit</code>对象越来越多，分支分支指针不断的右推。\n这样的项目拥有不同层次的稳定性，当稳定性达到某一个阶段，就可以合并到上一个层级的上，整个开发进程不断推进。</p>\n<p><img src="https://coding.net/u/getcha22/p/gatsbyblog/git/raw/master/src/pages/posts/2016-10-02---git-develop-workflow/a.png" alt="长期分支开发"></p>\n<h2>特性分支</h2>\n<p>所谓特性分支，与之前的长期分支做区别，它主要是不断的创建一些短期的，专门用来实现单一特性的分支，可以被频繁的创建和合并。</p>\n<h3>一个相对复杂的开发过程</h3>\n<p>这种开发方式更加适合大型项目和多人开发，如下面的例子：</p>\n<p><img src="https://coding.net/u/getcha22/p/gatsbyblog/git/raw/master/src/pages/posts/2016-10-02---git-develop-workflow/b.png" alt="多个特性分支的提交历史"></p>\n<p>从下面往上面看，一开始处于<code>master</code>分支上进行开发，到<code>c1</code>时，出现了一个比较严重，但是又不影响主分支继续开发的问题，于是新建一个<code>iss</code>分支，专门用来修改这个问题，在图上就是右侧的<code>iss91</code>分支。此时两分支继续开发，<code>iss91</code>分支开发到<code>C6</code>时，发现开发有些不合适的地方，可能会有更加简便安全的处理方式，于是从某个合适的<code>commit</code>对象上，新建一个新分支<code>iss91v2</code>，专门用来尝试是否有更加简单的方法，在 <code>iss91v2</code>经过多次开发，发现新方法可以，就一直留在<code>iss91v2</code>分支上解决问题。</p>\n<p>开发依然继续，<code>master</code>分支提交了<code>c9</code>，<code>c10</code>，<code>iss91v2</code>分支提交了<code>c11</code>。但在此时，发现又有一个不确定是否可以成功的想法，于是分出一个<code>dumbidea</code>分支做试验。</p>\n<p>再开发几次后，我们发现在<code>iss91v2</code>上，问题得到了解决。另外，在把<code>dumbidea</code>分支让别人<code>review</code>后，发现它太棒了。此时该如何合并和整理这些分支呢？</p>\n<p>毫无疑问，先将它直接合并到<code>master</code>分支上。再看其他分支，之前发现的问题在<code>iss91v2</code>上获得了解决，虽然<code>iss91</code>这个分支上我们曾经也有过多次开发，但是这些代码已经没有用了，直接抛弃掉<code>iss91</code>分支，之后将<code>iss91v2</code>上的代码再合并到主分支上。</p>\n<p><img src="https://coding.net/u/getcha22/p/gatsbyblog/git/raw/master/src/pages/posts/2016-10-02---git-develop-workflow/c.png" alt="处理方案"></p>\n<p>以上的所有操作都是在本地进行的，非常便捷高效，不需要与服务器进行任何交互。两种开发方式并没有互斥，可以结合使用，明白原理最重要。</p>',frontmatter:{title:"Git 学习小记之开发工作流",date:"2017-10-02",tags:["Git"]}}},pathContext:{slug:"/2016-10-02---git-develop-workflow/"}}}});
//# sourceMappingURL=path---posts-2016-10-02-git-develop-workflow-6fc938064d36ede68ae0.js.map