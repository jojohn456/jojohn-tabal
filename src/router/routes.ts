import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/views/index_page.vue') },
    ],
  },
  {
    path: '/projects',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/views/project_page.vue') },
    ],
  },
  {
    path: '/freelance',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/views/freelance_page.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/views/error404.vue'),
  },
];

export default routes;
