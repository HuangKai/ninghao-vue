import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router';
import Index from './components/index.vue';
import About from './components/about.vue';
import postRoutes from '../post/post.routes';

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
    name: 'about',
    component: About,
  },
  {
    path: '/about-us',

    // 使用路由的地址
    // redirect: '/about',

    // 使用路由的名字
    // redirect: { name: 'about' },

    // 使用方法来判断
    redirect: to => {
      console.log(to);
      return '/about';
    }
  },
  ...postRoutes,
];

/**
 * 创建路由器
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
});

/**
 * 导航守卫
 */
router.beforeEach((to, from, next) => {
  console.log('👮🏻');
  console.log('to: ', to);
  console.log('from: ', from);

  // 控制路由
  // if (to.name == 'postIndex') {
  //   next('/');
  // } else {
  //   next();
  // }

  next();
});

/**
 * 导出路由
 */
export default router;
