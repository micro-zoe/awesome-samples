import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// 微应用
import microApp from '@micro-zoe/micro-app'
microApp.start({ iframe: true })
