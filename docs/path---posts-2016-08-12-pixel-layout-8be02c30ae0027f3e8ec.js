webpackJsonp([0x602cfcfef8c7],{472:function(p,n){p.exports={data:{markdownRemark:{html:"<h1>布局像素的辨析</h1>\n<p>下文主要介绍了一些关于分辨率的基础概念。</p>\n<h2>物理分辨率</h2>\n<p>所谓物理分辨率，是指一块屏幕上，横向有多少个像素点，纵向有多少个像素点，比如苹果5的分辨率是640x1136，代表它横向有640个像素点，纵向拥有1136个像素点。看官也听出来了，这个物理分辨率是屏幕自带的固定参数，无法更改。</p>\n<h2>屏幕尺寸</h2>\n<p>屏幕尺寸指屏幕对角线的长度，根据横向长度和纵向长度进一步计算得到，使用英寸为单位，比如苹果5的尺寸为4.0英寸。</p>\n<h2>像素密度</h2>\n<p>像素密度是一个重要的概念，指每英寸上有多少像素点，通过这个参数可以很明确的表示屏幕清晰程度。计算公式为屏幕上所有的物理像素点，除以屏幕尺寸(对角线长度，英寸)。</p>\n<p>常见的一个临界值是300ppi，这个数字来自于苹果4发布会，乔布斯宣称达到这个分辨率的手机，如果正常距离使用，人眼已经无法分辨屏幕上细微的方格了，苹果一向是善于包装旧概念的，retina display 一词就是被乔布斯创造出来，翻译过来就是这几年经常听到的视网膜显示屏。</p>\n<h2>逻辑像素</h2>\n<p>逻辑像素对于开发人员极其重要，是开发过程中表示界面尺寸的一种尺寸，这个需要和物理像素，即物理分辨率做区分。经常听到的一句话就是——物理像素是设备硬件支持的，逻辑像素是软件可以达到的。</p>\n<p>这句话很好理解，举个简单的例子，之前的苹果3gs，分辨率是480x320，3.5英寸，风靡世界的苹果4，分辨率为它的2倍，960x640。注意，这里表达的分辨率就是指物理像素。</p>\n<p>在苹果4上，纵向有960个像素点组成，横向则为640个像素点。\n此时如果在这两部手机上开发，继续使用px布局，即使用物理像素进行开发，就会遇到一些问题，在苹果3gs上开发的布局，在苹果4上无法充满屏幕。</p>\n<p>苹果此时引入一个概念，pt，即点(point)，在这之前，1pt是等于一个像素的，逻辑像素与物理像素是相同的。</p>\n<p>在苹果4上出现了不同，1pt = 2px，也就是说，一个英寸上的物理像素数目，是逻辑像素的二倍。举个例子，在开发过程中，我们使用14pt的高度，在3gs上面，显示就是14px，也即上面说的物理像素和逻辑像素是相同的，但是在苹果4上面，显示为28px，他们所占的物理尺寸是相同的(我们肉眼看到的尺寸)，我们可以可以看到14pt的逻辑尺寸，既充满了3gs，也充满了苹果4，但事实上每单位物理尺寸上的物理像素已经不同了。\n物理分辨率可以不同，但是他们通过逻辑像素这个概念(pt)，在显示结果上得到了统一。</p>\n<h2>DPI</h2>\n<p>如果明确了上面的这些概念，那么对于dpi的概念就手到擒来了，所谓dpi，是指每英寸上点的数目，这里的点自然是指pt了，于是很容易理解这样的现象：</p>\n<p>在3gs上，使用20x20个像素来表示20x20个点，但是到了4上，使用40x40个像素来表示这20x20个点，他们所用到的物理像素数量不同，但是表示点的数目是相同的，而dpi是指每英寸上具有点的数目，于是我们可以得到3gs和4的dpi是相同的，均为162dpi。</p>\n<p>以上</p>",frontmatter:{title:"布局像素的辨析",date:"2016-08-12",tags:["CSS"]}}},pathContext:{slug:"/2016-08-12---pixel-layout/"}}}});
//# sourceMappingURL=path---posts-2016-08-12-pixel-layout-8be02c30ae0027f3e8ec.js.map