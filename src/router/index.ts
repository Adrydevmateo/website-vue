import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: () => import('@views/About.view.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('@/views/portfolio/Portfolio.view.vue')
    }
  ]
})

export default router
