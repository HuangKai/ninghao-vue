import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

/**
 * 定义路由
 */
// 定义 routes，类型是 Array，其中的数据项类型是 RouteRecordRaw
const routes: Array<RouteRecordRaw> = [];

/**
 * 创建路由器
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

/**
 * 导出路由
 */
export default router;
