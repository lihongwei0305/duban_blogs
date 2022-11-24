# vue3

## ref 与 shallowRef
- ref：创建一个ref对象，其任意深度的属性都会被注册为vue的响应式数据。
- shallowRef：与ref不同，是浅响应，若想视图更新，需重新赋值或者调用`triggerRef`。