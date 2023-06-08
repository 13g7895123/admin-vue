import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// router
import route from "./router"

// pinia
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(ElementPlus)
app.use(route)
app.use(createPinia())
app.mount('#app')
