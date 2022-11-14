# Array
## 数组
```text
创建数组的几种方式：
    1. 数组字面量
    2. new Array // 传入数字时为数组的长度
    3. Array.form(ES6)
    4. Array.of(ES6)
    5. Array.prototype.slice
    5. Array.prototype.concat
```
## 类数组
```text
有一个length属性，和从零开始索引的属性，但是没有Array的内置方法
常见的类数组：
    1. arguments
    2. NodeList，HTMLCollection，DOMTokenList
类数组转换为数组：
    1. slice，concat
    2. Array.form
```

## 交集 差集 并集

```js
  let arr1 = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 3, name: 'c'},
    {id: 4, name: 'd'},
]
let arr2 = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 13, name: 'c3'},
    {id: 14, name: 'd4'},
]
// ES6写法
// arr1 与 arr2 的交集
let arr3 = arr1.filter(v => arr2.some(y => v.id === y.id))
// arr1 与 arr2 的差集
let arr4 = arr1.filter(v => !arr2.some(y => v.id === y.id))
// arr1 与 arr2 的并集
let arr5 = arr1.concat(arr2.filter(v => !arr1.some(y => v.id === y.id)))
```

::: tip 提示 并集 : arr1 拼接 arr2 与 arr1 的差集
:::

## 去重

```js
let arr = [1, 1, 2, 2, 3, 3,]
// 1.
let a = Array.from(new Set(arr))
// 2. 
let b = [...new Set(arr)]
// 3.   
let c = arr.reduce((p, c) => {
    return p.includes(c) ? p : [...p, c]
}, [])


```

```js
// 数组对象去重
let arr1 = [
    {id: 1, name: 'a'},
    {id: 1, name: 'c'},
    {id: 2, name: 'd'},
    {id: 3, name: 'e'},
    {id: 3, name: 'f'},
]

let obj = {}
let e = arr1.reduce((p, c) => {
    obj[c.id] ? '' : obj[c.id] = p.push(c)
    return p
}, [])
```

