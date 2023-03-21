
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
  },
  {
    path: '/galeria',
    name: 'galeria',
    component: () => import('../views/GaleriaView.vue')
  },
  {
    path: '/catalogos',
    name: 'catalogo',
    component: () => import('../views/CatalogosView.vue')
  },
  {
    path: '/noticias',
    name: 'noticias',
    component: () => import('../views/NoticiasView.vue')

  },
  {
    path: '/noticia/:id',
    name: 'noticia',
    component: () => import('../views/NoticiaView.vue')

  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../views/SobreView.vue')
  },
  {
    path: '/pos-venda',
    name: 'posvenda',
    component: () => import('../views/PosVendaView.vue')
  },
  {
    path: '/fazer-test-driver',
    name: 'testedrive',
    component: () => import('../views/TestDriveView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
