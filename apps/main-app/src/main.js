
import { createApp } from 'vue'
import App from './App.vue'
import microApp from "@micro-zoe/micro-app";


createApp(App).mount('#app')

microApp.start({
    plugins: {
        modules: {
            'cesium-map': [{
                loader(code, url) {
                    // TODO 根据 实际情况再调整限制
                    if(url.indexOf("assets/mars3d-cesium/Cesium.js") > 0 && code.indexOf('var Cesium=')> -1) {
                        code = code.replace('var Cesium=', 'window.Cesium=')
                    }
                    return code
                }
            }]
        }
    }
})


