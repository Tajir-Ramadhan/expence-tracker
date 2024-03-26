import { createApp } from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css' 
import router from './router'
import './assets/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(Toast)
app.mount('#app')
