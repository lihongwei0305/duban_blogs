# vue

## 创建函数式组件
:::: code-group
```vue2

// index.js
import component from './index.vue';
import store from '@/store';

const com = {};
com.install = function (Vue) {
  const comExtend = Vue.extend(component);
  const instance = new comExtend({
    store,
  });
  instance.$mount(document.createElement('div'));
  Vue.prototype.$com = (params) => {
    document.body.appendChild(instance.$el);
    instance.init(params, instance);
    return instance; // 返回实例
  };
};
export default com;


<!-- index.vue -->
<template>
  <compont></compont>
</template>

<script>
import compont from './compont.vue';

export default {
  name: 'com',
  components: {
    compont,
  },
  data() {
    return {
      visible: false,
      parmas: {},
    };
  },
  methods: {
    async init(params, instance) {
      this.parmas = params;
      this.visible = true;
    },
    close() {
      this.visible = false;
      this.$el.remove();
    },
  },
};
</script>

<style scoped>

</style>

```
```vue3 
function mountFunctionComponents(component: any, name: any, unmountAfter?: any) {
  APP.config.globalProperties[`$${name}`] = (option = {} as any) => {
    const dom = document.createElement('div');
    document.body.appendChild(dom);
    const app = createApp(component, {
      unmount: () => {
        app.unmount();
        document.body.removeChild(dom);
        unmountAfter && unmountAfter instanceof Function && unmountAfter();
      },
      ...option
    });
    app.use(useModule);
    components(app);
    return app.mount(dom);
  };
}
// 使用
import com from 'com.vue';

mountFunctionComponents(com, 'compontName');

```
