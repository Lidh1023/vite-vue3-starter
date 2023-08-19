import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store';
import 'tdesign-vue-next/es/style/index.css'; // 引入组件库全局样式资源

createApp(App).use(router).use(store).mount('#app')
