## 去除input的type为number时后面的图标
```css
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
```

## 解决iOS滚动条卡住的问题
```css
body,html{
  -webkit-overflow-scrolling: touch;
}
```

## 页面处于灰色模式
```css
body{
  filter: grayscale(1);
}
```