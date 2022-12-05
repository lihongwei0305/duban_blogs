# vue3

## ref 与 shallowRef
- ref：创建一个ref对象，其任意深度的属性都会被注册为vue的响应式数据。
- shallowRef：与ref不同，是浅响应，若想视图更新，需重新赋值或者调用`triggerRef`。

## 虚拟滚动 [参考](https://juejin.cn/post/7168645862296879117)
```vue
<template>
  <div class="container" ref="virtualListRef">
    <div class="phantom" :style="{ height: listHeight + 'px' }"></div>
    <div class="content" ref="contentRef" :style="{ transform: `translate3d(0, ${state.currentOffset}px, 0)` }">
      <div v-for="(item,index) in visibleData" :key="item.id" :id="item.id" ref="itemsRef" class="list-item">
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, shallowRef, onUpdated, nextTick, reactive,ref} from "vue";

const virtualListRef = ref(null)
const contentRef = ref(null)
const itemsRef = ref(null)

const state = reactive({
  perItemSize: 50,
  position: [],
  list: [],
  screenHeight: 0,
  start: 0,
  end: 0,
  currentOffset: 0,
  bufferPercent: 0.5
})

const initPosition = (initData, itemSize) => {
  state.position = initData.map((v, i) => {
    return {
      index: i,
      top: i * itemSize,
      bottom: (i + 1) * itemSize,
      height: itemSize
    }
  })
}

const listHeight = computed(() => {
  return state.position.at(-1).bottom
})

const visibleCount = computed(() => {
  return Math.ceil(state.screenHeight / state.perItemSize)
})

const bufferCount = computed(()=>{
  return visibleCount.value * state.bufferPercent >> 0 // 向下取整

})
const aboveCount = computed(()=>{
  return Math.min(state.start, bufferCount.value)
})

const belowCount = computed(()=>{
  return Math.min(state.list.length - state.end, bufferCount.value);

})

const visibleData = computed(()=>{
  return state.list.slice(state.start - aboveCount.value, state.end + belowCount.value);
})


const scrollEvent = (target) => {
  let {scrollTop,clientHeight,scrollHeight} = target
  state.start = getStartIndex(scrollTop)
  state.end = state.start + visibleCount.value
  state.currentOffset = getCurrentOffset()

  // 触底
  if ((scrollTop +  clientHeight) === scrollHeight) {
    // 模拟数据请求
    let len = state.list.length + 1
    for (let i = len; i <= len + 20; i++) {
      state.list.push({id: i, value: i + '字符内容'.repeat(Math.random() * 20) })
    }
    initPosition(state.list, state.perItemSize)
  }


}

const getStartIndex = (scrollTop = 0) => {
  return binarySearch(state.position, scrollTop)
}

const getCurrentOffset = () => {
  if (state.start >= 1) {
    // 计算偏移量时包括上缓冲区的列表项
    let size = state.position[state.start].top - (state.position[state.start - aboveCount.value] ?
        state.position[state.start - aboveCount.value].top : 0);
    return state.position[state.start - 1].bottom - size;

  } else {
    return 0;
  }
}

const binarySearch = (list, target) => {
  const len = list.length
  let left = 0, right = len - 1
  let tempIndex = null

  while (left <= right) {
    let midIndex = (left + right) >> 1
    let midVal = list[midIndex].bottom

    if (midVal === target) {
      return midIndex
    } else if (midVal < target) {
      left = midIndex + 1
    } else {
      // list不一定存在与target相等的项，不断收缩右区间，寻找最匹配的项
      if (tempIndex === null || tempIndex > midIndex) {
        tempIndex = midIndex
      }
      right--
    }
  }
  // 如果没有搜索到完全匹配的项 就返回最匹配的项
  return tempIndex
}


// 渲染后更新positions
const updatePositions = () => {
  let nodes = itemsRef.value;
  nodes.forEach((node) => {
    // 获取 真实DOM高度
    const {height} = node?.getBoundingClientRect();
    // 根据 元素索引 获取 缓存列表对应的列表项
    const index = node.id - 1
    let oldHeight = state.position[index].height;
    // dValue：真实高度与预估高度的差值 决定该列表项是否要更新
    let dValue = oldHeight - height;
    // 如果有高度差 !!dValue === true
    if (dValue) {
      // 更新对应列表项的 bottom 和 height
      state.position[index].bottom = state.position[index].bottom - dValue;
      state.position[index].height = height;
      // 依次更新positions中后续元素的 top bottom
      for (let k = index + 1; k < state.position.length; k++) {
        state.position[k].top = state.position[k - 1].bottom;
        state.position[k].bottom = state.position[k].bottom - dValue;
      }
    }
  })
}

const init = () => {
  for (let i = 1; i <= 50; i++) {
    state.list.push({id: i, value: i + '字符内容'.repeat(Math.random() * 20)})
  }
  initPosition(state.list, state.perItemSize)

}

init()

onMounted(() => {
  state.screenHeight = virtualListRef.value.clientHeight
  state.start = 0
  state.end = state.start + visibleCount.value

  let target = virtualListRef.value
  let scrollFn = (event) => scrollEvent(event.target)

  target.addEventListener('scroll', scrollFn)
})

onUpdated(() => {
  nextTick(() => {
    if (!itemsRef.value || !itemsRef.value.length) {
      return;
    }
    // 根据真实元素大小，修改对应的缓存列表
    updatePositions()
    // 更新完缓存列表后，重新赋值偏移量
    state.currentOffset = getCurrentOffset()
  })
})


</script>

<style scoped>
.container {
  position: relative;
  height: 90vh;
  overflow: auto;
}

.phantom {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}

.content {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  text-align: center;
}

.list-item {
  padding: 10px;
  border: 1px solid #999;
}
</style>
```
