import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 把 @ 指向到 src 目录去
    },
  },
  //scss全局变量一个配置
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/variable.scss";',
      },
    },
  },
  server: {
    host: true,
    port: 3002,
    open: true,
    cors: true,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8888/',
        changeOrigin: true, // 允许跨域
        rewrite: (path) => path.replace('/api/', '/'),
      },
    },
  },
})
