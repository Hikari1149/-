/*
在函数式编程当中有一个很重要的概念就是函数组合，实际上就是把处理数据的函数像管道一样连接起来，然后让数据穿过管道得到最终的结果。例如：

const add1 = (x) => x + 1
const mul3 = (x) => x * 3
const div2 = (x) => x / 2

div2(mul3(add1(add1(0)))) // => 3
而这样的写法可读性明显太差了。我们可以构建一个 compose 函数，它接受任意多个函数作为参数（这些函数都只接受一个参数），然后 compose 返回的也是一个函数，达到以下的效果：

const operate = compose(div2, mul3, add1, add1)
operate(0) // => 相当于 div2(mul3(add1(add1(0))))
operate(2) // => 相当于 div2(mul3(add1(add1(2))))
简而言之：compose 可以把类似于 f(g(h(x))) 这种写法简化成 compose(f, g, h)(x)。请你完成 compose 函数的编写。

*/

/*
arr.reduceRight(callback[, initialValue])
参数
callback
一个回调函数，用来操作数组中的每个元素，可接受四个参数：
    previousValue
    上一次调用回调的返回值，或提供的 initialValue
    currentValue
    当前被处理的元素
    index
    当前处理元素的索引
    array
    调用 reduce 的数组
initialValue
可作为第一次调用回调 callback 的第一个参数
返回值
执行之后的返回值

*/

const compose = (...args) =>{
    return x=> args.reduceRight((v,f)=>f(v),x)
}