// desc:变量名首尾的下划线不需要做处理，中间的下划线全部删除并且处理成驼峰。

/*
str.replace(regexp|substr, newSubStr|function)
function 参数
match	匹配的子串。（对应于上述的$&。）
p1,p2, ...	
假如replace()方法的第一个参数是一个RegExp 对象，则代表第n个括号匹配的字符串。（对应于上述的$1，$2等。）例如，如果是用 /(\a+)(\b+)/ 这个来匹配，p1 就是匹配的 \a+，p2 就是匹配的 \b+。


(x) 匹配 'x' 并且记住匹配项，就像下面的例子展示的那样。括号被称为 捕获括号。

(?:x) 匹配 'x' 但是不记住匹配项。这种叫作非捕获括号，
*/

const toCamelCaseVar = (variable) =>{
    return variable.replace(/([^_])(?:_+([^_]))/gi,(match,p1,p2)=>{
        return p1+p2.toUpperCase()
    })
}
console.log(toCamelCaseVar('__this__is_my__name__'))