import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/Usuario/HomeView.vue'

import * as PacientesRoutes from  './PacientesRoutes.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  PacientesRoutes.PacienteRoute(),
  PacientesRoutes.ListaPacientesRoute(),
]

const router = new VueRouter({
  routes
})

export default router
