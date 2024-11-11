import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// 地图插件
import microPluginMap from '@micro-zoe/micro-plugin-map'
import microApp from '@micro-zoe/micro-app'

createApp(App).mount('#app')


microApp.start({
  plugins: {
    modules: {
      'app': [microPluginMap]
    }
  }
 })
