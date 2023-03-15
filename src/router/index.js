import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/jetur/modelos',
    name: 'jetur-modelos',
    component: () => import('../views/CarroJeturView.vue')
  },
  {
    path: '/jetur/modelo/:id',
    name: 'jetur-modelo',
    component: () => import('../views/InfoCarro.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
