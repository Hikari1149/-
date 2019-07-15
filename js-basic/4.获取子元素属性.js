/*
完成 getChildAttributes 函数，它接受一个 DOM 元素作为参数和一个属性名作为参数，你需要返回这个 DOM 的 直接 子元素的特定属性列表。例如：

<ul id='list'>
  <li data-name="Jerry" class="item"><span>1</span></li>
  <li data-name="Lucy" class="item"><span>2</span></li>
  <li data-name="Tomy"><span>3</span></li>
</ul>
getChildAttributes(el, 'data-name') // => ['Jerry', 'Lucy', 'Tomy']
getChildAttributes(el, 'class') // => ['item', 'item', null]    
*/


/*
getAttribute() 返回元素上一个指定的属性值。如果指定的属性不存在，则返回  null 或 "" （空字符串）；具体细节, 请参阅  Notes 部分。
*/

const getChildAttributes = (el,attr) =>{
    return [...el.children].map(x=>x.getAttribute(attr))
}
console.log(getChildAttributes(document.getElementById('list'),'class'))