import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createMetaManager } from 'vue-meta'
import { plugin as vueMetaPlugin } from 'vue-meta'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App)
.use(VueAxios, axios)
.use(router)
.use(vueMetaPlugin)
.use(createMetaManager())
.mount('#app')
