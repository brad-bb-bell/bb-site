import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'me'
    },
    {
      path: '/words',
      name: 'words'
    },
    {
      path: '/learn',
      name: 'learn'
    },
    {
      path: '/contact',
      name: 'contact'
    }
  ]
})

export default router
