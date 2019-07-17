/*
编写一个 JavaScript 函数，接受一个仅包含数字的 多维数组 ，返回拍平以后的结果。例如传入：[1, [[2], 3, 4], 5]，返回 [1, 2, 3, 4, 5]。
*/


/*
Array.prototype.join()

join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。


*/
const flatten = (arr)=>{
    return arr.join('').split('').filter(item=>!isNaN(item)).map(item=>+item)
}
 //console.log(flatten([1, [[2], 3, 4], 5]))
 //console.log(flatten([[1],[2],[3],[4]]))