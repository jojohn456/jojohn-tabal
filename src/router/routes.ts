import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/Master.vue'),
    children: [{ path: '', component: () => import('src/pages/Index.vue') }],
  },
  {
    path: '/projects',
    component: () => import('src/layouts/Master.vue'),
    children: [{ path: '', component: () => import('src/pages/Projects.vue') }],
  },
  {
    path: '/work',
    component: () => import('src/layouts/Master.vue'),
    children: [{ path: '', component: () => import('src/pages/Work.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
