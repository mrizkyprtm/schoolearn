import HomePage from '@/pages/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('../pages/Auth/LoginPage.vue'),
    },
    {
      path: '/dashboard/admin',
      name: 'admin',
      component: () => import('../pages/Dashboard/AdminPage.vue'),
    },
    {
      path: '/:catchAll(.*)*',
      name: 'not-found',
      component: () => import('../pages/NotFoundPage.vue'),
    },
  ],
})

export default router
