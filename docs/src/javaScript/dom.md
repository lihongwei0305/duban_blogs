# Dom

## 视口

- innerHeight
    - `windown.innerHeight` DOM视口的大小，包括滚动条。
- outerHeight
    - `windown.outerHeight` 是整个浏览器窗口的大小，包括窗口标题、工具栏、状态栏等。

获取窗口大小存在浏览器兼容问题，通常使用下面的代码来兼容所有浏览器:

```js
var height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
```

```text
实上后两种方式获取的高度和window.innerHeight是不一样的，这3个属性的值逐个变小。具体说来，window.innerHeight包括整个DOM：内容、边框以及滚动条。

1. documentElement.clientHeight不包括整个文档的滚动条，但包括<html>元素的边框。
2. body.clientHeight不包括整个文档的滚动条，也不包括<html>元素的边框，也不包括<body>的边框和滚动条

```

## 滚动高度

- `clientHeight`: 内部可视区域大小。
- `offsetHeight`：整个可视区域大小，包括border和scrollbar在内。
- `scrollHeight`：元素内容的高度，包括溢出部分。
- `scrollTop`：元素内容向上滚动了多少像素，如果没有滚动则为0。

## JS拖拽

```text
拖拽的实现原理：通过事件mousedown（事件的触发） →mousemove（事件的控制） →mouseup（事件的清除），拖拽的过程就是mousemove阶段；
问题产生的原因：因为mousemove 的间隔性触发，当两次mousemove事件触发的间隔中，鼠标移动距离出了element的范围，就会产生鼠标脱离element范围，拖拽就停止，
解决方法： 将mousemove事件挂在docment，而不是对应的element，此时鼠标滑动只要不出docment范围就不会触发上述情况。
```