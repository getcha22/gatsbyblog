webpackJsonp([0x9ba5c018a4cb],{472:function(c,o){c.exports={data:{markdownRemark:{html:'<h1>Git学习小记之分支原理</h1>\n<p>如果想要熟练使用Git，没有分支理念是绝对行不通的，在用 Git 管理项目的时候，经常需要使用<code>commit</code>这个命令，那么这个<code>commit</code>到底是指什么呢？</p>\n<p>按照官方的解释，这应该成为一个对象，它包含着一个指向暂存内容(被<code>add</code>的文件)快照的指针，包含本次提交的附属信息，比如说作者等等，指向父<code>commit</code>对象(如果被<code>merge</code>而成，可能有多个父<code>commit</code>对象)的指针。</p>\n<p>举下面这个例子来分析：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">git</span> add README test.rb LICENSE\n<span class="token function">git</span> commit -m <span class="token string">\'initial commit of my project\'</span>\n</code></pre>\n      </div>\n<ul>\n<li><code>add</code>：暂存操作会对文件计算校验和(SHA-1哈希字串)，然后与当前版本的文件快照(用<code>blob</code>对象存储)一起存入到暂存区域中。</li>\n<li><code>commit</code>：正式建立提交对象前：Git先计算出每一个子目录的校验和，然后在Git仓库中，将这些目录保存为树对象。</li>\n</ul>\n<p>建立提交对象的过程主要如下：</p>\n<p>携带相关提交信息，包含一个指向该树的指针，这样就代表如果将来需要，可以重现此次快照内容。\n来看看现在仓库中有什么：\n一个表示文件快照内容的<code>blob</code>对象，一个记录着目录树内容，以及其中各个文件具体对应哪个<code>blob</code>对象的索引<code>tree</code>对象。以及一个包含着指向索引<code>tree</code>对象，以及其他提交信息元数据的<code>commit</code>对象。如图：</p>\n<p><img src="https://coding.net/u/getcha22/p/gatsbyblog/git/raw/master/src/pages/posts/2016-09-01---git-branch/a.png" alt="首次提交对象及其树结构"></p>\n<p>如果我们做一些修改，再次进行提交，此时就开始发生变化，<code>commit</code>提交对象会再多包含一个指向上次<code>commit</code>提交对象的指针。</p>\n<p>如官方图：</p>\n<p><img src="https://coding.net/u/getcha22/p/gatsbyblog/git/raw/master/src/pages/posts/2016-09-01---git-branch/b.png" alt="更新"></p>\n<h2>分支</h2>\n<p>有了上面的准备知识，我们可以开始学习分支了。先回顾现在的提交模型：\n每次提交都会生成一个新的<code>commit</code>对象，还有一个指向上次提交，也就是父对象的指针。\nGit 中的分支的本质上就仅仅是指向<code>commit</code>对象的指针，如果Git分支这个指针指向某次<code>commit</code>，它就拥有了此次<code>commit</code>对象，这意味着很多。\nGit中默认的都会有一个分支，这个分支叫做<code>master</code>，若干次提交之后，实际上有一个最新的<code>commit</code>对象，以及指向这个对象的<code>master</code>分支，伴随着每次提交，<code>master</code>对象要做的就是不断指向新<code>commit</code>对象。</p>\n<h3>创建分支</h3>\n<p>现在有些清晰了，其实在 Git 中创建分支，就是创建一个指向某次<code>commit</code>对象的可变指针，我们来新建一个开发分支：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">git</span> branch testing\n</code></pre>\n      </div>\n<h3>Git如何做到分支互不影响</h3>\n<p>按照之前的理解，在当前<code>commit</code>上，会有一个指针依附它，这个指针就是<code>testing</code>分支指针。\n我们知道在我们开发中，如果建立了分支，就意味着互不影响，按照上面说的， 轻松建立了分支。</p>\n<p><img src="https://coding.net/u/getcha22/p/gatsbyblog/git/raw/master/src/pages/posts/2016-09-01---git-branch/c.png" alt="分支"></p>\n<h3>Git如何辨别我们工作的分支</h3>\n<p>既然只要新建了分支，我们的开发就和其他分支互不影响了，Git是如何分辨我们到底在哪个分支上工作呢？\n其实答案比较简单，Git包含着一个名为<code>HEAD</code>的特别指针，在Git中，它会指向你正在工作的本地分支指针上(将<code>HEAD</code>想象成当前分支指针的别名)。\n上面使用<code>git branch</code>创建了一个分支，此时仅仅建立了一个分支指针，HEAD 指针未出现过移动，依然指向之前的<code>master</code>。要切换<code>HEAD</code>指针的指向，使用<code>切糕</code>命令。</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">git</span> checkout testing\n</code></pre>\n      </div>\n<p>此时<code>HEAD</code>指向之前新建的<code>testing</code>分支，但是<code>master</code>分支依然指向<code>checkout</code>时所在的那个<code>commit</code>对象。这个的确太有意思了。。\n所谓分支，从当前分支建立(默认是<code>master</code>分支)，使用切糕命令，本质上做的就是切换<code>HEAD</code>对象的指针的位置,并且把当前工作目录上的文件替换成分支所指向的快照内容。</p>\n<p>此时如果进行一次<code>commit</code>，那么最新的<code>commit</code>对象指向上次的提交，分支指针指向本次<code>commit</code>，<code>HEAD</code>指针又指向本次分支。</p>\n<p>继续再进行切换</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">git</span> checkout master\n</code></pre>\n      </div>\n<p>此时就到了重点，<code>HEAD</code>指针指向<code>master</code>分支，<code>master</code>分支指针指向某次<code>commit</code>，同时<code>checkout</code>还会将当前工作目录中的文件替换成<code>master</code>分支所指向的快照内容(实际上在切糕命令执行时，我们完全可以认为快照会不断的改变，也由于此时指向的是快照内容，所以切糕之前未暂存的文件是无法经过切换来恢复了)。</p>\n<h3>分叉出现了</h3>\n<p>我们修改<code>master</code>分支上面的文件，并且创建提交。由于我们之前已经创建过一次分支，并且提交过一次，然后才回到<code>master</code>分支开发的，就会造成这样一种情况，这两次分支虽然指向的<code>commit</code>对象的父对象个数是相同的，但是他们在此时出现了分歧，从<code>master</code>分支开始，他们有不同的流向了，此时也就开始出现分叉了，我们可以不断的切换分支，等待合适的时机，将它们合并到一起。\n如上所见，在各个分支中无拘无束的开发，不断的切换，仅仅只需要<code>branch</code>，切糕两个命令即可。</p>\n<h2>总结</h2>\n<p>所谓分支，就是一个指向某个对象的指针，这个指针是一个校验和文件(40 个字符长度<code>SHA-1</code>字串)，所以新建和销毁指针是非常廉价的事情，也就解释了为什么切换起来那么快，那么方便了。Git鼓励频繁的使用分支。</p>\n<h3>待解决的问题</h3>\n<ol>\n<li>所谓校验和文件是什么？是一个独一无二的字符串？为什么又说它是指针呢？这个指针是根据什么生成的？既然它指向<code>commit</code>文件，那么是不是根据<code>commit</code>文件计算出的呢，<code>commit</code>对象之间是相连的，那么如果通过<code>commit</code>文件计算出的，那么应该说的通。</li>\n<li>所谓合并，到底是做了什么，开启了一个新分支？貌似并没有，因为开发过程只有一个master，不会因为合并不断的建立新分支。</li>\n<li>合并之后会有一次<code>commit</code>，此时的<code>commit</code>对象就有两个父对象了，好奇<code>commit</code>历史里面在合并之前只有master对象？还是里面乱乱的，根据时间会出现很多分支的<code>commit</code>对象，哈哈，等本少年去试试，不过前者的可能性貌似大些吧。</li>\n</ol>',frontmatter:{title:"Git学习小记之分支原理",date:"2016-09-01",tags:["Git"]}}},pathContext:{slug:"/2016-09-01---git-branch/"}}}});
//# sourceMappingURL=path---posts-2016-09-01-git-branch-7db37387bdb9235a7baa.js.map