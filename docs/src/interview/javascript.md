## E56性特性

1. let const
2. 模板字符串
3. Sst Map
4. 解构赋值
5. 展开运算符、剩余参数
6. 箭头函数、函数参数设置默认值
7. 模块化的导入导出
8. 数组方法的扩展（find、findIndex、reduce、some）
9. 字符串方法的扩展（startWidth、endWidth、repeat、padStart、padEnd、includes）
10. Class
11. Symbol
12. 迭代器、生成器
13. Promise

## var let const 区别

- 声明变量时都会发生变量提升
    - var会提到全局作用域或者函数作用域顶端
    - let cont 会提到当前作用域的顶端
- 重复申明问题
## MVVM

MVVM是view和vieModal通过数据绑定实现一个双向的通信，当modal发生变化时，viewModal会通知view进行更新，当view发生变化时，viewModal会将新的数据传递给modal

## 什么是原型链

原型链是实现继承和查找的一种机制，在JavaScript中每个对象都有一个指向其原型的链接，这个链接称为原型链

## 什么是构造函数

构造函数是用来创建对象的一种特殊函数，使用new关键字来调用

1. 创建一个新对象（实例对象）
2. 将实例对象的`__proto__`指向构造函数的`protoType`
3. 将构造函数的作用域赋值给新对象（this指向新对象）
4. 执行构造函数的内部代码，并给新对象赋值

## 箭头函数和普通函数的区别

- 语法不同
- this绑定：箭头函数的this是继承父级的作用域。普通函数的this是在运行时根据函数的调用方式决定的
- arguments：箭头函数没有arguments，但可以通过剩余参数来代替。普通函数可以通过arguments访问传递的参数
- 构造函数：箭头函数不能使用new关键字
- 返回值：箭头函数可以通过简洁的语法来返回表达式。普通函数需要使用return。

## async标记的函数和普通函数的区别

- async标记的函数返回的是一个Promise
- 判断一个函数是不是被async标记：

```js
Object.prototype.toString.call(fn) // [object AsyncFunction]
```

## 闭包

- 闭包是指函数与其相关的引用环境的组合体,这个环境包含了在函数声明时所能访问到的所有变量和参数,并在执行过程中始终存在

### 闭包的几种表现形式

1. 返回一个函数
2. 作为函数参数传递
3. 回调函数
4. 立即执行函数

## 防抖和节流

- [防抖](/src/frontEnd/javaScript/jsAdvanced.html#防抖)
- [节流](/src/frontEnd/javaScript/jsAdvanced.html#节流)

## 模拟微任务

```js
function createMicroTask(callback) {
    let text = document.createTextNode(0)
    let ob = new MutationObserver(() => {
        console.log('变化了')
        callback()
    })
    ob.observe(text, {
        characterData: true
    })
    text.textContent = '1'
}
```

## 假设前端需要发n请求,写一个方法同时只并发3个请求,直到n个请求完成

```js
async function sendRequests(requests, concurrency) {
    let results = [];
    let currentIndex = 0;
    let currentPromise = [];

    async function sendNestRequest() {
        let index = currentIndex++;
        if (index >= requests.length) return;
        let res = await sendRequest(requests[index])
        results[index] = res
        await sendNestRequest()
    }

    function sendRequest(request) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${request} is Complated`)
                resolve(request)
            }, 1000)
        })
    }

    for (let i = 0; i < concurrency; i++) {
        currentPromise.push(sendNestRequest())
    }
    await Promise.all(currentPromise)
    return results;
}

let requests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let concurrency = 3;
sendRequests(requests, concurrency).then((res) => {
    console.log(res)
})
```
