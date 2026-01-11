import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/App.vue'),
  },
  // Add more routes here as needed
  // Example:
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('@/views/About.vue'),
  // },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0 }
    }
  },
})

export default router
