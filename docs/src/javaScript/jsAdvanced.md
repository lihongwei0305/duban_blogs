# JS高级

## 工厂模式

```text
工厂模式是一种众所周知的设计模式，广泛应用于软件工程领域，用于抽象创建特定对象的过程。
```


## 下载 txt 文件

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<input type="file">

<script>
    let input = document.querySelector('input')
    input.addEventListener('input', function (e) {
        let file = e.target.files[0]
        let fileReader = new FileReader()
        // 将 File 装成 ArrayBuffer
        fileReader.readAsArrayBuffer(file)
        // fileReader.readAsBinaryString(file) 已废弃
        // fileReader.readAsText(file)

        fileReader.onload = async (res) => {  // 加载完毕
            let arrayBuffer = res.target.result
            // 将获取到的 二进制数组 转出 Blob, (\ufeff 表示 utf-8格式,防止乱码)
            let blob = new Blob(["\ufeff", arrayBuffer], {type: 'text/plain'})
            let url = window.URL.createObjectURL(blob)
            //createObjectURL 也可以传入 File 对象, File对象是特殊类型的Blob
            // let url = window.URL.createObjectURL(file) 
            let a = document.createElement('a')
            a.href = url
            // a.href = window.URL.createObjectURL(file)
            a.download = file.name
            a.click()
            //释放一个之前已经存在的、通过调用 URL.createObjectURL() 创建的 URL 对象
            window.URL.revokeObjectURL(url);
        }
    });
</script>
</body>
</html>
```

::: tip 提示

1. Blob表示一个不可变、原始数据的类文件对象,它的数据可以按文本或二进制的格式进行读取
2. File对象是特殊类型的Blob
3. URL.revokeObjectURL() 静态方法用来释放一个之前已经存在的、通过调用 URL.createObjectURL() 创建的 URL 对象。
   :::



## 异步变同步

```js
function fn() {
    let timer;
    return new Promise((resolve) => {
        console.log(1);
        timer = setTimeout(() => {
            clearTimeout(timer);
            timer = null;
            resolve();
        }, 300);
    });
}

async function fn1() {
    await fn();
    console.log(2);
}

fn1()


```

## 防抖 节流(简易版)

```js
//防抖
function debounce(fun, delay) {
    return (arg) => {
        clearTimeout(fun.id)
        fun.id = setTimeout(() => {
            fun.call(this, arg)
        }, delay)
    }
}

//节流
function throttle(fun, delay) {
    return (arg) => {
        if (fun.id) return
        fun.id = setTimeout(() => {
            fun.call(this, delay)
            fun.id = null
            clearTimeout(fun.id)
        }, delay)
    }
}
```

## 防抖 节流(进阶版)

```js
// 防抖
let inputEl = document.querySelector('input')
const inputChange = (e) => {
    console.log('输入的值为:', e.target.value)
    return `结果${e.target.value}`
}
inputEl.oninput = (arg) => {
    debounce(inputChange, 300, false).call(this, arg).then(res => {
        console.log(res);
    });
};

function debounce(fun, delay, isImmediate = false) {
    let isExcute = isImmediate
    return (args) => {
        return new Promise((resolve, reject) => {
            if (isExcute) {
                let res = fun.call(this, args)
                resolve(res)
                isExcute = false
            }
            if (fun.id) {
                clearTimeout(fun.id)
            }
            fun.id = setTimeout(() => {
                let res = fun.call(this, args)
                resolve(res)
                fun.id = null
                isExcute = isImmediate
            }, delay);
        })

    }
}

// 节流

let scrollFn = () => {
    console.log("当前位置:", document.documentElement.scrollTop)
    return `结果:${document.documentElement.scrollTop}`
}

document.onscroll = (args) => {
    throttle(scrollFn, 500).call(this, args).then(res => {
        console.log(rse)
    })
}

function throttle(func, delay, isImmediate = false) {
    let isExcute = isImmediate
    return (args) => {
        return new Promise((resolve, reject) => {
            if (isExcute) {
                let res = func.call(this, args);
                resolve(res)
                isExcute = false
            }
            if (func.id) return
            setTimeout(() => {
                let res = func.call(this, args)
                resolve(res)
                func.id = null
                isExcute = isImmediate
            }, delay)
        })
    }
}

```

# 定时器
```text
 默认为1ms，多层嵌套（5层）时为4ms
```


## 判断页面的状态
```js
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      console.log('page is visible'); 
    } else {
      console.log('page is hidden');
    }
});
```

## JS操作DOM

### JS拖拽

````text
拖拽的实现原理：通过事件mousedown（事件的触发） →mousemove（事件的控制） →mouseup（事件的清除），拖拽的过程就是mousemove阶段；
问题产生的原因：因为mousemove 的间隔性触发，当两次mousemove事件触发的间隔中，鼠标移动距离出了element的范围，就会产生鼠标脱离element范围，拖拽就停止，
解决方法： 将mousemove事件挂在docment，而不是对应的element，此时鼠标滑动只要不出docment范围就不会触发上述情况。


````

## JS打印
```js
// 1. 不允许打印
window.matchMedia("print").addListener(function() {
  window.alert("当前页面不允许打印");
})
```