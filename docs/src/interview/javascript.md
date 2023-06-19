## 模拟微任务
```js
function createMicroTask(callback) {
    let text = document.createTextNode(0)
    let ob = new MutationObserver(() => {
        console.log('变化了')
        callback()
    })
    ob.observe(text, {
        characterData: true
    })
    text.textContent = '1'
}
```
## 假设前端需要发n请求,写一个方法同时只并发3个请求,直到n个请求完成

```js
async function sendRequests(requests, concurrency) {
    let results = [];
    let currentIndex = 0;
    let currentPromise = [];

    async function sendNestRequest() {
        let index = currentIndex++;
        if (index >= requests.length) return;
        let res = await sendRequest(requests[index])
        results[index] = res
        await sendNestRequest()
    }

    function sendRequest(request) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${request} is Complated`)
                resolve(request)
            }, 1000)
        })
    }

    for (let i = 0; i < concurrency; i++) {
        currentPromise.push(sendNestRequest())
    }
    await Promise.all(currentPromise)
    return results;
}

let requests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let concurrency = 3;
sendRequests(requests, concurrency).then((res) => {
    console.log(res)
})
```