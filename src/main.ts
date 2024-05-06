// import "core-js/stable";
// import 'regenerator-runtime/runtime'
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './routes'

createApp(App).use(router).mount('#app')
