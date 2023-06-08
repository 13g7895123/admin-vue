import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// router
import route from "./router"

// pinia
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(route)
app.use(createPinia())
app.mount('#app')
