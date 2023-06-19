## BFC

BFC(Block Formatting Context)块级格式化上下文，按照块级盒子布局。
BFC是一个独立的布局空间，其中元素不会受到外界的影响。

### BFC特点

- 内部的元素垂直方向上会一个接一个地排列，形成一个垂直的流。
- 可以包含浮动元素，从而避免浮动元素对其他元素的影响。
- 可以防止 margin 塌陷现象的发生。
- BFC的边缘与页面边缘或其他 BFC 的边缘相接触时，会发生一些特殊的布局规则。

### 触发BFC的条件

- 根元素，即HTML
- overflow不为visible
- float不为none
- position为absolute、fixed
- display为flex、inline-block、grid、table、table-cell、inline-flex

## 渐进增强和优雅降级

- 渐进增强是针对低版本浏览器就行后构建页面，保证最基本的功能，然后在针对高版本浏览器进行效果、交互等功能达到更好的用户体验。
- 优雅降级是一开始使用高版本浏览器就行构建页面，然后在对低版本浏览器进行兼容。

## iframe

### 优点

- 可以把一个网页嵌入到页面上
- 可以在多个页面中重复使用一个页面

### 缺点

- 会阻塞主页的onload事件，建议动态创建iframe
- 不利于seo
- 需要额为的http请求，影响页面加载速度

## 设置小于12px的字体

- transfer:scale(0.5)
- 利用 `<svg> <text style="font-size=8px"></text> </svg>`

## css盒模型

可以把每一个元素看作一个盒子，都由内容区（content）、内边距（padding）、边框（border）、外边距（margin）组成

### W3C标准和盒模型

- 宽度：width + padding + border

### IE盒模型

- 宽度： width

## HTML5新特性

- 语义化标签
- 视频和音频
- canvas绘图
- 地理定位
- 本地存储
- web workers
- web socket

