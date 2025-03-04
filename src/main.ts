import { createApp } from 'vue'

import App from './App.vue'
import './assets/index.css'
import 'tailwindcss/tailwind.css';
import router from './router';

createApp(App).use(router).mount('#app');