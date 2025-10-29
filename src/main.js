import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// External libraries
import 'boxicons/css/boxicons.min.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Bootstrap and Admin Template CSS
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/icons.min.css'
import '@/assets/css/app.min.css'

// Web Assets CSS
import '@/assets/web-assets/assets/css/kit.css'
import '@/assets/web-assets/assets/css/style.css'

// Component Styles
import '@/components/css/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
