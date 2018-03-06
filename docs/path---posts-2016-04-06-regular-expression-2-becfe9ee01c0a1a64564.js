webpackJsonp([42203124596742],{466:function(e,d){e.exports={data:{markdownRemark:{html:"<h1>正则表达式进阶</h1>\n<p>接上一篇内容，上一篇主要介绍了正则表达式的核心内容，非常的简单易懂，现在对核心内容进行拓展。</p>\n<h2>界定符</h2>\n<p>表示正则表达式的开始和结束，具体的由解析器决定</p>\n<ul>\n<li><code>/[0-9]/</code></li>\n<li><code>#[0-9]#</code></li>\n</ul>\n<h2>元字符</h2>\n<p>元字符定义了原子的筛选方式，可以将某一类原子归类，并且给出缩写，简化正则：</p>\n<ul>\n<li><code>|</code>匹配两个或者多个分支</li>\n<li><code>[]</code>中括号内部的任意一个原子</li>\n<li><code>[^]</code>匹配除括号内部原子之外的任何字符</li>\n</ul>\n<h3>原子的筛选</h3>\n<p>使用<code>[]</code>可以进行原子的筛选，代表或者的关系，<code>[^]</code>代表非的关系</p>\n<ul>\n<li><code>[Dd]uang</code></li>\n<li><code>(D|d)uang</code></li>\n</ul>\n<p>这两种方法都可以匹配到想要的内容，但具体有什么区别呢？\n请注意在<code>[]</code>中出现的，只能是单个原子，每个原子之间都是或的关系，而使用<code>|</code>元字符，两边可以由多个原子组成来进行匹配。</p>\n<h3>原子集合</h3>\n<p>之所以定义了原子集合，主要是为了用来简化书写，一般原子集合，都可以通过原子筛选的方式给出，除了换行符的原子:</p>\n<ul>\n<li><code>\\d</code>数字<code>[0-9]</code></li>\n<li><code>\\D</code>非数字<code>[^0-9]</code></li>\n<li><code>\\s</code>不可见原子<code>[\\f\\n\\r\\t]</code></li>\n<li><code>\\S</code>可见的原子</li>\n<li><code>\\w</code>数字字母下划线<code>[0-9a-zA-Z_]</code></li>\n<li><code>\\W</code>任意一个非下划线，数字字母<code>[^0-9a-zA-Z_]</code></li>\n</ul>\n<h2>量词</h2>\n<p>所谓量词，就是表示它前面的原子重复多少次</p>\n<ul>\n<li><code>{d}</code>重复<code>d</code>次</li>\n<li><code>{d,}</code> 最少重复<code>d</code>次</li>\n<li><code>{d,b}</code> 重复<code>d</code>到<code>b</code>次</li>\n</ul>\n<h3>量词集合</h3>\n<p>参考原子集合，是为了简化筛选元素。量词集合的出现也是同样的道理</p>\n<ul>\n<li><code>{0,}</code> 最少重复<code>0</code>次，包含<code>0</code>次</li>\n<li><code>{1,}</code> 最少重复<code>1</code>次，包含<code>1</code>次</li>\n<li><code>{0,1}</code> 重复<code>0</code>次或者<code>1</code>次</li>\n</ul>\n<h3>修正模式</h3>\n<ul>\n<li><code>U</code>表示贪婪模式</li>\n<li><code>i</code>忽略大小写，用在正则中</li>\n<li><code>x</code>忽略正则中的空格，<code>tab</code>制表符</li>\n</ul>\n<h2>转义</h2>\n<p>转译，当正则占用了需要的输入</p>\n<ul>\n<li><code>\\</code></li>\n</ul>",frontmatter:{title:"正则表达式进阶",date:"2016-04-06",tags:["regular expression"]}}},pathContext:{slug:"/2016-04-06---regular-expression-2/"}}}});
//# sourceMappingURL=path---posts-2016-04-06-regular-expression-2-becfe9ee01c0a1a64564.js.map