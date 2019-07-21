/*
完成 cookieJar 单例，它有三个方法：

set(name, value, days)：设置 cookie 的值，days 为多少天以后过期。
get(name)：获取 cookie 的值。
remove(name)：删除 cookie 的值。


------------------------
Singleton pattern: 确保一个类仅有一个实例，并提供一个访问它的全局访问点。

The Document property cookie lets you read and write cookies associated with the document. It serves as a getter and setter for the actual values of the cookies.

[^ ] 一个反向字符集。也就是说， 它匹配任何没有包含在方括号中的字符
*/

const cookieJar = {
    set(name,value,days){
        document.cookie = `${name}=${value};expires=${new Date(Date.now()+days*1000*60*60*24)}`
    },
    get(name){
        let Allcookie = document.cookie
        let reg = new RegExp(`${name}=([^;]+)`)
        let val = reg.exec(Allcookie)[1]
        return val
    },
    remove(name){
        document.cookie = `${name}=outdate;expires=${new Date(Date.now()-1000*60*60*24)}`
    }
}