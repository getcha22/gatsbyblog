webpackJsonp([0x5f06e501dc3e],{483:function(s,n){s.exports={data:{markdownRemark:{html:'<h1>MySQL常用操作</h1>\n<p>下文整理一些常用的操作</p>\n<h2>初始信息</h2>\n<p>MySQL默认的端口号码是3306，服务器是本地localhost\n查看MySQL版本</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code><span class="token keyword">SELECT</span> VERSION<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">+</span><span class="token comment">------------+</span>\n<span class="token operator">|</span> VERSION<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">------------+</span>\n<span class="token operator">|</span> <span class="token number">5.7</span><span class="token punctuation">.</span><span class="token number">17</span><span class="token operator">-</span>log <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">------------+</span>\n<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h2>常用规范</h2>\n<ul>\n<li>关键字函数名一律使用大写（但使用小写不会报错）</li>\n<li>数据库名，变量名使用小写</li>\n<li>末尾要加分号</li>\n</ul>\n<h2>数据库</h2>\n<p>数据库广义上说应该是一个框架，我们针对这个框架创造它所包含的数据库文件。</p>\n<h3>创建数据库</h3>\n<blockquote>\n<p>CREATE DATABASE [IF NOT EXSITS] database<em>name\n[CHARACTER SET character</em>set]</p>\n</blockquote>\n<p>其中留意[]里面的内容，这部分的内容为可选项。如果使用了中括号的关键字，表示如果创建的数据库和之前的数据库同名，那么不会报错，数据库会将这个错误归类到warnings中，比如我创建一个已经存在的数据books</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code>root<span class="token variable">@localhost</span> <span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> BOOKS<span class="token punctuation">;</span>\nQuery OK<span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">row</span> affected <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>\nroot<span class="token variable">@localhost</span> <span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> books<span class="token punctuation">;</span>\nQuery OK<span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">row</span> affected<span class="token punctuation">,</span> <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>\nroot<span class="token variable">@localhost</span> <span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token keyword">SHOW</span> <span class="token keyword">WARNINGS</span> <span class="token punctuation">;</span>\n<span class="token operator">+</span><span class="token comment">-------+------+------------------------------------------------+</span>\n<span class="token operator">|</span> Level <span class="token operator">|</span> Code <span class="token operator">|</span> Message                                        <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">-------+------+------------------------------------------------+</span>\n<span class="token operator">|</span> Note  <span class="token operator">|</span> <span class="token number">1007</span> <span class="token operator">|</span> Can<span class="token string">\'t create database \'</span>books\'<span class="token punctuation">;</span> <span class="token keyword">database</span> <span class="token keyword">exists</span> <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">-------+------+------------------------------------------------+</span>\n</code></pre>\n      </div>\n<h3>数据库编码</h3>\n<p>数据库的编码可以在创建时，通过第二个方括号中的内容来指定，同时也有对应的命令可以检测已经创建好的数据库的编码</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code>root<span class="token variable">@localhost</span> <span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> t2 <span class="token keyword">CHARACTER SET</span> gbk<span class="token punctuation">;</span>\nQuery OK<span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">row</span> affected <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>\nroot<span class="token variable">@localhost</span> <span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> t2<span class="token punctuation">;</span>\n<span class="token operator">+</span><span class="token comment">----------+------------------------------------------------------------+</span>\n<span class="token operator">|</span> <span class="token keyword">Database</span> <span class="token operator">|</span> <span class="token keyword">Create</span> <span class="token keyword">Database</span>                                            <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">----------+------------------------------------------------------------+</span>\n<span class="token operator">|</span> t2       <span class="token operator">|</span> <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token punctuation">`</span>t2<span class="token punctuation">`</span> <span class="token comment">/*!40100 DEFAULT CHARACTER SET gbk */</span> <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">----------+------------------------------------------------------------+</span>\n<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>如果需要修改已经创建好的数据库的编码，可以使用ALTER命令，这个命令的语法结构与CREATE DATABASE非常相似。</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code>root<span class="token variable">@localhost</span> <span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> t2 <span class="token keyword">CHARACTER SET</span> <span class="token operator">=</span> utf8\n    <span class="token operator">-</span><span class="token operator">></span> <span class="token punctuation">;</span>\nQuery OK<span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">row</span> affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>修改之后继续查看结果</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code>root<span class="token variable">@localhost</span> <span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> t2<span class="token punctuation">;</span>\n<span class="token operator">+</span><span class="token comment">----------+-------------------------------------------------------------+</span>\n<span class="token operator">|</span> <span class="token keyword">Database</span> <span class="token operator">|</span> <span class="token keyword">Create</span> <span class="token keyword">Database</span>                                             <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">----------+-------------------------------------------------------------+</span>\n<span class="token operator">|</span> t2       <span class="token operator">|</span> <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token punctuation">`</span>t2<span class="token punctuation">`</span> <span class="token comment">/*!40100 DEFAULT CHARACTER SET utf8 */</span> <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">----------+-------------------------------------------------------------+</span>\n<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h3>查看已有数据库</h3>\n<p>使用下面的命令，会显示出目前所有的数据库</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code> root<span class="token variable">@localhost</span> <span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span><span class="token punctuation">;</span>\n<span class="token operator">+</span><span class="token comment">--------------------+</span>\n<span class="token operator">|</span> <span class="token keyword">Database</span>           <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">--------------------+</span>\n<span class="token operator">|</span> information_schema <span class="token operator">|</span>\n<span class="token operator">|</span> books              <span class="token operator">|</span>\n<span class="token operator">|</span> performance_schema <span class="token operator">|</span>\n<span class="token operator">|</span> sys                <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">--------------------+</span>\n</code></pre>\n      </div>\n<h2>数据表</h2>\n<p>一个数据库中可以有多个数据表，数据表经常可以使用query等等字串来进行查询。</p>\n<h3>创建数据表</h3>\n<p>我想在数据库test下面创建了一张数据表，首先需要打开一个数据库，使用USE命令，之后使用函数查看当前在使用的数据库，确认无误。</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">USE</span> test<span class="token punctuation">;</span>\n<span class="token keyword">Database</span> changed\nmysql<span class="token operator">></span> <span class="token keyword">SELECT</span> <span class="token keyword">DATABASE</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">+</span><span class="token comment">------------+</span>\n<span class="token operator">|</span> <span class="token keyword">DATABASE</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">------------+</span>\n<span class="token operator">|</span> test       <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">------------+</span>\n<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>现在开始创建一张数据表，创建数据库使用的是 CREATE DATABASE，相应的创建数据表使用相似的语法</p>\n<blockquote>\n<p>CREATE TABLE table_name()</p>\n</blockquote>\n<p>括号中填写的内容为需要存储的键值对，以及控制信息，现在是例子</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> tb1<span class="token punctuation">(</span>\n    <span class="token operator">-</span><span class="token operator">></span> username <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token operator">-</span><span class="token operator">></span> age <span class="token keyword">TINYINT</span> UNSIGNED<span class="token punctuation">,</span>\n    <span class="token operator">-</span><span class="token operator">></span> salary <span class="token keyword">FLOAT</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> UNSIGNED\n    <span class="token operator">-</span><span class="token operator">></span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\nQuery OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.07</span> sec<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>这里在数据表tb1中创建变长的字符串类型变量username，创建TINYINT 无符号类型的变量age，之后创建无符号浮点类型的变量salary。这里的TINYINT 指1个byte（8bit）足够存储年龄了，FLOAT(8,2) UNSIGNED 指一个小数，它的小数点左侧为8位，有个两位。</p>\n<p>创建成功之后，查看一下数据表，这个函数和SHOW DATABASE函数类似：</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SHOW</span> <span class="token keyword">TABLES</span><span class="token punctuation">;</span>\n<span class="token operator">+</span><span class="token comment">----------------+</span>\n<span class="token operator">|</span> Tables_in_test <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">----------------+</span>\n<span class="token operator">|</span> tb1            <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">----------------+</span>\n<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>如果想要再确认一下数据表的结构，可以使用下面的操作：</p>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SHOW</span> <span class="token keyword">COLUMNS</span> <span class="token keyword">FROM</span> tb1<span class="token punctuation">;</span>\n<span class="token operator">+</span><span class="token comment">----------+---------------------+------+-----+---------+-------+</span>\n<span class="token operator">|</span> Field    <span class="token operator">|</span> <span class="token keyword">Type</span>                <span class="token operator">|</span> <span class="token boolean">Null</span> <span class="token operator">|</span> <span class="token keyword">Key</span> <span class="token operator">|</span> <span class="token keyword">Default</span> <span class="token operator">|</span> Extra <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">----------+---------------------+------+-----+---------+-------+</span>\n<span class="token operator">|</span> username <span class="token operator">|</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>         <span class="token operator">|</span> YES  <span class="token operator">|</span>     <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>       <span class="token operator">|</span>\n<span class="token operator">|</span> age      <span class="token operator">|</span> <span class="token keyword">tinyint</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> unsigned <span class="token operator">|</span> YES  <span class="token operator">|</span>     <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>       <span class="token operator">|</span>\n<span class="token operator">|</span> salary   <span class="token operator">|</span> <span class="token keyword">float</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> unsigned <span class="token operator">|</span> YES  <span class="token operator">|</span>     <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>       <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">----------+---------------------+------+-----+---------+-------+</span>\n<span class="token number">3</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.02</span> sec<span class="token punctuation">)</span>\n</code></pre>\n      </div>',frontmatter:{title:" MySQL常用操作",date:"2017-02-12",tags:["MySQL"]}}},pathContext:{slug:"/2017-02-12---mysql-operation/"}}}});
//# sourceMappingURL=path---posts-2017-02-12-mysql-operation-fe179545f19806fede4f.js.map