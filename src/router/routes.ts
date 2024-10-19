import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  { path: '/login', component: () => import('@/views/user/login.vue') },
  {
    path: '/',
    redirect: '/system/user',
    component: () => import('@/components/layout/Index.vue'),
    children: [
      { path: '/system/user', component: () => import('@/views/system/user.vue') },
      { path: '/system/role', component: () => import('@/views/system/role.vue') },
    ],
  },
];

export default routes;
