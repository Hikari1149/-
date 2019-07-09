/*
完成函数 commafy，它接受一个数字作为参数，返回一个字符串，可以把整数部分从右到左每三位数添加一个逗号，如：12000000.11 转化为 12,000,000.11。


str.replace(regexp|substr, newSubStr|function)

newSubStr (replacement)
用于替换掉第一个参数在原字符串中的匹配部分的字符串。该字符串中可以内插一些特殊的变量名。参考下面的使用字符串作为参数。
$$	插入一个 "$"。
$&	插入匹配的子串。
$`	插入当前匹配的子串左边的内容。
$'	插入当前匹配的子串右边的内容

正则 
x(?=y)匹配x当且仅当x后面跟着y (先行断言)

*/
const commafy = (num)=>{
    const reg = /(\-?\d{1,3})(?=(\d{3})+$)/g
    const numPre=num.toString().split('.')[0]
    const numAft=num.toString().split('.')[1]
    const fraction = numAft?`.${numAft}`:''
    return numPre.replace(reg,'$&,') + fraction
}
console.log(commafy(9123000000))
