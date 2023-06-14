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

## 重汇和回流

重绘（Repaint）和回流（Reflow）是浏览器渲染页面时的两个关键过程。

重绘是指当元素样式发生改变，但不影响其布局的情况下，浏览器会重新绘制（重绘）这个元素，将新的样式应用到元素上。重绘不会引起元素的位置或尺寸的变化，只会改变元素的外观。

回流是指当页面布局（大小、位置）发生改变时，浏览器需要重新计算并更新元素的布局信息，然后重新绘制页面。回流会导致元素的位置、尺寸等属性发生变化，可能涉及到其他元素的位置和尺寸的调整。

回流的代价比重绘更高，因为回流涉及到重新计算布局信息和重新绘制页面，而重绘只需要重新绘制元素的外观。因此，频繁的回流操作会影响页面性能，特别是在大型复杂的页面上。

常见触发回流的操作包括：

修改页面的结构（添加、删除、修改元素）
修改元素的布局属性（尺寸、位置、边距等）
获取某些属性值（如 offsetTop、offsetLeft、offsetWidth、offsetHeight、scrollTop、scrollLeft 等）
为了减少回流的次数，可以采取以下优化策略：

使用 CSS3 的 transform 属性代替修改元素的位置属性（如 top、left）
批量修改元素样式，或者使用 CSS 类名的方式进行一次性的样式变更
避免频繁获取需要触发回流的属性值，尽量将需要获取的属性值缓存起来
使用文档片段（DocumentFragment）进行多个 DOM 操作，然后一次性将文档片段添加到页面中
通过减少回流的次数，可以提高页面的渲染性能，提升用户体验。