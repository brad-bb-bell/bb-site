import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'me',
      component: () => import('../views/Me.vue')
    },
    {
      path: '/words',
      name: 'words',
      component: () => import('../views/Words.vue')
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('../views/Learn.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    }
  ]
})

export default router
