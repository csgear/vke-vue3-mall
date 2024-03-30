import { createApp } from 'vue'
import App from '@/App.vue'
//引入模板的全局的样式
import '@/styles/index.scss'
//引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
import gloalComponent from '@/components'
//配置element-plus国际化
//@ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//暗黑模式需要的样式
import 'element-plus/theme-chalk/dark/css-vars.css'
import router from './router'
import pinia from './store'

//获取应用实例对象
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn, //element-plus国际化配置
})

app.use(gloalComponent)

app.use(pinia)
app.use(router)

app.mount('#app')
