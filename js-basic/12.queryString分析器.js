/*

在开发当中，我们经常要处理 url。而 url 上的 query string 是我们重点要处理的对象，完成一个 parseQueryString 函数。它接受一个 url 字符串作为参数，返回一个对象，这个对象包含 query string 上的键值对。例如：

parseQueryString('https://scriptoj.com/problems?offset=100&limit=10')
返回:

{ offset: '100', limit: '10'}
特殊情况说明：如果出现 ?name=&age=12 则返回 { name: '', age: '12' }，如果 ?name&age=12 则返回 { name: null, age: '12' }。

请考虑清楚 query string 可能出现的各种情况，包括可能的出现 hash 的情况（?name=jerry#nice）。




match() 方法检索返回一个字符串匹配正则表达式的的结果。

str.match(regexp)
如果传入一个非正则表达式对象，则会隐式地使用 new RegExp(obj) 将其转换为一个 RegExp 。如果你没有给出任何参数并直接使用match() 方法 ，你将会得到一 个包含空字符串的 Array ：[""] 。
返回值
如果使用g标志，则将返回与完整正则表达式匹配的所有结果（Array），但不会返回捕获组，或者未匹配 null。
如果未使用g标志，则仅返回第一个完整匹配及其相关的捕获组（Array）。 在这种情况下，返回的项目将具有如下所述的其他属性，或者未匹配 null。




split() 方法使用指定的分隔符字符串将一个String对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。 

str.split(x)
若str不包含x 返回结果为[str]
*/

const parseQueryString = url =>{
    let flag=false,noHashUrl = url.split('#')[0]
    // ?k1=v1&k2=v2...
    let qsStr = ''
    for(let i=0;i<noHashUrl.length;i++){
        if(flag)  qsStr =qsStr +noHashUrl[i]  
        if(noHashUrl[i]==='?') flag=true
    }
    if(!flag)   return {}
    // k1=v1&k2=v2
    let qsArr = qsStr.split('&')
    //[k1=v1,k2=v2]
    return qsArr.reduce((res,cur)=>{
        let item = cur.split('=')
        let k1 = item[0]
        if(item.length===1 || item[1]===''){
            if(item[1] === '')  res[k1]=''
            else res[k1]=null    
        }else{
            let v1 =cur.match(/[=]\S+/)[0].substr(1)
            res[k1]=v1
        }
        return res
    }
    ,{})
}
//console.log(parseQueryString('https://scriptoj.com/problems/?offset=&limit=100#name=jerry'))
//console.log(parseQueryString("https://scriptoj.com?offset=10&limit=100"))
//console.log(parseQueryString("https://scriptoj.com/"))
//console.log(parseQueryString("https://scriptoj.com/?offset=&limit=100"))
//console.log(parseQueryString("https://scriptoj.comproblems/?offset=10&limit=100&tag=all?name=lucy"))