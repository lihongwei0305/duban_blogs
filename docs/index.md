:::: code-group

::: code-group-item Vite

```ts {7-11}
// vite.config.ts
import VueMacros from 'unplugin-vue-macros/vite'
import Vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [
    VueMacros(),
    Vue({
      include: [/\.vue$/, /setup\.[cm]?[jt]sx?$/],
      //                   ⬆️ setupSFC pattern need to be added
    }),
  ],
})
```

:::

::: code-group-item Rollup

```ts {6-13}
import Vue from 'unplugin-vue/rollup'
import VueMacros from 'unplugin-vue-macros/rollup'
export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /setup\.[cm]?[jt]sx?$/],
          //                   ⬆️ setupSFC pattern need to be added
        }),
      },
    }),
  ],
})
```

:::

::: code-group-item 🚧 esbuild

:construction:

:::

::: code-group-item 🚧 Webpack

:construction:

:::

::::