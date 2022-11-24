import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    // 添加 JSX 插件
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    // 添加 UnoCss 插件
  ],
})
