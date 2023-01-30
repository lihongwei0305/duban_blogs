# 工具
## 复制
```js
function copy(content) {
    let doc = window.document
    let copyElem;

    function handleText(content) {
        if (!copyElem) {
            copyElem = doc.createElement('textarea')
            copyElem.id = '$XECopy'
            let styles = copyElem.style
            styles.width = '48px'
            styles.height = '24px'
            styles.position = 'fixed'
            styles.zIndex = '0'
            styles.left = '-500px'
            styles.top = '-500px'
            doc.body.appendChild(copyElem)
        }
        copyElem.value = content === null || content === undefined ? '' : ('' + content)
    }

    function copyText(content) {
        let result = false
        try {
            handleText(content)
            copyElem.select()
            copyElem.setSelectionRange(0, copyElem.value.length)
            result = doc.execCommand('copy')
            copyElem.blur()
        } catch (e) {
        }
        return result
    }

    return copyText(content)
}




```