import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router';
import Index from './components/index.vue';
import About from './components/about.vue';

/**
 * 定义路由
 */
// 定义 routes，类型是 Array，其中的数据项类型是 RouteRecordRaw
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/about',
    component: About,
  }
];

/**
 * 创建路由器
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
});

/**
 * 导出路由
 */
export default router;
