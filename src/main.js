import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './http/axios'

const app = createApp(App)
app.config.globalProperties.$http = axios
createApp(App).use(store).use(router).mount('#app')