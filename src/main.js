import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import 'boxicons/css/boxicons.min.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import '@/assets/css/bootstrap.min.css'
import '@/assets/css/icons.min.css'
import '@/assets/css/app.min.css'

import '@/assets/web-assets/assets/css/kit.css'
import '@/assets/web-assets/assets/css/style.css'
import '@/assets/web-assets/assets/css/Pages/about.css'
import '@/assets/web-assets/assets/css/Pages/chats.css'
import '@/assets/web-assets/assets/css/Pages/terms-condition.css'

import '@/components/css/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
