## HTML5新特性

- 语义化标签(header,nav,aside,section,footer)
- 视频和音频(audit,radio)
- canvas绘图
- 地理定位
- Web Storage
- web workers
- web socket
  ``

## css3新特性

1. 伪类选择器和伪元素选择器
2. [盒模型](/src/interview/css.html#css盒模型)
3. 边框样式
    - `border-radius`
    - `box-shadow`
4. 渐变
5. 过渡和动画
6. 弹性盒子布局
7. 响应式设计
    - 媒体查询
    - 响应式单位(rem,vw,vh)
8. 字体和文本样式
    - `@font-face`自定义字体
    - `text-overflow`

## css盒模型

可以把每一个元素看作一个盒子，都由内容区（content）、内边距（padding）、边框（border）、外边距（margin）组成

### W3C标准盒模型(box-sizing: content-box)

- 宽度：content

### IE盒模型(box-sizing: border-box)

- 宽度： content + padding + border

## BFC

BFC(Block Formatting Context)块级格式化上下文，BFC是一个独立的布局空间，其中元素不会受到外界的影响。

### BFC特点

- BGC是页面中一个隔离的独立容器，容器李的元素不会印象外部
- 垂直方向的距离由margin决定，同一个BFC内部的两个相邻的元素会发生边距重叠问题
- 计算BFC元素高度时，浮动元素也会参与运算

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

## 盒子垂直水平居中

::::code-group

```css[相对于自身]
.box{
    width: 100px;
    height: 100px;
    background-color: #6ee7b7;

    /*  第一种 */
    position: absolute;
    inset: 0;
    margin: auto;

     /*  第二种 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

```css[相对于父级]
.container{
     /*  第一种 */    
    display: flex;
    justify-content: center;
    align-items: center;
     /*  第二种 */
    display: grid;
    place-content: center;
}
.box{
    width: 100px;
    height: 100px;
    background-color: #6ee7b7;

}
```

::::
