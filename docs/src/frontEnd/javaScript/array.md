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

## 交集
:::: code-group
```js
// 使用循环和条件判断
function differenceBy(arr1, arr2, key) {
    let arr3 = []
    arr1.forEach(v=>{
        const item2 = arr2.find(y=> v[key] === y[key])
        if (item2) {
            arr3.push(v)
        }
    })
    return arr3
}

```

```js
// 使用filter
function differenceBy(arr1, arr2, key) {
   return arr1.filter(v=> arr2.some(y=> v[key] === y[key]))
}


```

```js
// 使用ES6 Map
function differenceBy(arr1, arr2, key) {
    const map = new Map(arr1.map(v => [v[key], v]))
    return arr2.filter(v=> map.has(v[key]))
}
```

::::

## 差集
:::: code-group
```js
// 使用循环和条件判断
function differenceBy(arr1, arr2, key) {
    let arr3 = []
    arr1.forEach(v=>{
        const item2 = arr2.find(y=> v[key] === y[key])
        if (!item2) {
            arr3.push(v)
        }
    })
    return arr3
}

```

```js
// 使用filter
function differenceBy(arr1, arr2, key) {
   return arr1.filter(v=> !arr2.some(y=> v[key] === y[key]))
}


```

```js
// 使用ES6 Map
function differenceBy(arr1, arr2, key) {
    const map = new Map(arr1.map(v => [v[key], v]))
    return arr2.filter(v=> !map.has(v[key]))
}
```

::::




## 并集
:::: code-group
```js
// 使用concact和reduce
function unionBy(arr1, arr2, key) {
    const unio = arr1.concat(arr2)
    unio.reduce((p, c) => {
        if (!p.some(v => v[key] === c[key])) {
            p.push(c)
        }
        return p;
    }, [])
}
```

```js
// 使用Map
function unionBy(arr1, arr2, key) {
    const map = new Map()
    arr1.forEach(v=> map.set(v[key],v))
    arr2.forEach(v=> map.set(v[key],v))
    return [...map.values()]
}
```
::::


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


