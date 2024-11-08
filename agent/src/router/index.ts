import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/collections',
    name: 'collections',
    component: () => import('../views/collections/index.vue'),
  },
  {
    path: '/chats',
    name: 'chats',
    component: () => import('../views/chats/index.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/settings/user.vue'),
  },
  {
    path: '/dev',
    name: 'dev',
    component: () => import('../views/dev/index.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'finder',
    component: () => import('../views/collections/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
