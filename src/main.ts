// import "core-js/stable";
// import 'regenerator-runtime/runtime'
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './routes'
import { i18n } from './locales'

createApp(App).use(i18n).use(router).mount('#app')
