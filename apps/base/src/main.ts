import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import microApp from '@micro-zoe/micro-app';
createApp(App).use(router).mount('#app')

microApp.start({
    'router-mode': 'native',
});