import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import HomeView from '../views/users/HomeView.vue'

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
  {
    path: '/registrar_paciente',
    name: 'registrar_paciente',
    component: () => import( '../views/pacientes/RegistrarPaciente.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
