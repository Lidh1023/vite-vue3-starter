//路由配置文件
import { createRouter, createWebHistory } from "vue-router";;

import demoRouters from './modules/demo';

const routes = [...demoRouters];

const router = createRouter({
  history: createWebHistory(import.meta.evn.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior:'smooth',
    };
  },
});

export default router;