# Object

## defineProperty
- 修改属性的默认特性
    - [[Configurable]]: 表示属性是否可以通过delete 删除并重新定义，是否可以修改它的特 性，以及是否可以把它改为访问器属性。
    - [Enumerable]]：表示属性是否可以通过for-in 循环返回。
    - [[Writable]]：表示属性的值是否可以被修改。
    - [[Value]]：包含属性实际的值。
    - [[Get]]：获取函数，在读取属性时调用。默认值为undefined。
    - [[Set]]：设置函数，在写入属性时调用。默认值为undefined。
- 调用该方法时时，configurable、enumerable 和writable 的值如果不 指定，则都默认为false

```js
let person = {}
Object.defineProperty(person, 'name', {
    Configurable: false,
    Enumerable: false,
    Writable: false,
    Value: 'zhangsan'
})
```

## defineProperties

- 在一个对象上同时定义多个属性

## getOwnPropertyDescriptor

- 可以取得指定属性的属性描述符

## getOwnPropertyDescriptors

- 这个方法实际上会在每个自有属性上调用Object.getOwnPropertyDescriptor()并在一个新对象中返回它们。

## asOwnProperty

- 方法用于确定某个属性是在实例上还是在原型对象上

## 对象解构

```js
//解构赋值的同时定义默认值
let {name, job = 'Software engineer'} = person;

//如果是给事先声明的变量赋值，则赋值表达式必须包含在一对括号中：
let personName, personAge;
let person = {
    name: 'Matt',
    age: 27
};
({name: personName, age: personAge} = person);
console.log(personName, personAge); // Matt, 27
```

```js
// 嵌套解构
// 解构对于引用嵌套的属性或赋值目标没有限制。为此，可以通过解构来复制对象属性：
let person = {
    name: 'Matt',
    age: 27,
    job: {
        title: 'Software engineer'
    }
};
let personCopy = {};
({
    name: personCopy.name,
    age: personCopy.age,
    job: personCopy.job
} = person);
```