/*
完成 getPageTags 函数，判断你的代码所执行的页面用到了哪些标签。

例如，如果页面中：

<html>
  <head></head>
  <body></body>
  <script>...</script>
</html>
那么 getPageTags() 则返回数组 ['html', 'head' 'body', 'script']（顺序不重要）。
*/

/*
var elements = document.getElementsByTagName(name);
elements 是一个由发现的元素出现在树中的顺序构成的动态的HTML集合 HTMLCollection (但是看下面的提示) 。
name 是一个代表元素的名称的字符串。特殊字符 "*" 代表了所有元素。

*/

const getPageTags = () =>{
    let allDom = document.getElementsByTagName('*')
    return [...new Set([...allDom].map(dom=>dom.tagName))]
}