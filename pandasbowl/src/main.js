import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './axios'
import './index.css'
import 'flowbite';
import 'tw-elements';


createApp(App).use(router).mount('#app')
