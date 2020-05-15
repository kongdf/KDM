import { createApp } from 'vue';
import './plugins/axios'
import App from './App.vue'
import router from './plugins/router'
import store from './plugins/store'
// import './plugins/element.js'

createApp(App).use(router).use(store).mount('#app')
