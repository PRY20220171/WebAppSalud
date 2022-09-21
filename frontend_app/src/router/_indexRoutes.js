import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/Usuario/HomeView.vue'

import * as AtencionesRoutes from  './AtencionesRoutes'
import * as DiagnosticosRoutes from  './DiagnosticosRoutes'
import * as PacientesRoutes from  './PacientesRoutes'
import * as PruebasRoutes from  './PruebasRoutes'
import * as ResultadosRoutes from  './ResultadosRoutes'
import * as UsuariosRoutes from  './UsuariosRoutes'

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
  PacientesRoutes.RegistrarPacienteRoute(),
  PacientesRoutes.EditarPacienteRoute(),
  PacientesRoutes.ListarPacientesRoute(),

  AtencionesRoutes.RegistrarAtencionRoute(),
  AtencionesRoutes.EditarAtencionRoute(),
  AtencionesRoutes.ListaAtencionesRoute(),

  DiagnosticosRoutes.RegistrarDiagnosticoRoute(),
  DiagnosticosRoutes.EditarDiagnosticoRoute(),
  DiagnosticosRoutes.ListarDiagnosticosRoute(),

  PruebasRoutes.RegistrarPruebaRoute(),
  PruebasRoutes.EditarPruebaRoute(),
  PruebasRoutes.ListarPruebasRoute(), 
  
  ResultadosRoutes.RegistrarResultadosRoute(),
  ResultadosRoutes.EditarResultadosRoute(),
  ResultadosRoutes.ListarResultadossRoute(),

  UsuariosRoutes.RegistrarUsuarioRoute(),
  UsuariosRoutes.EditarUsuarioRoute(),
  UsuariosRoutes.ListarUsuariosRoute(),
]


const router = new VueRouter({
  routes
})

export default router
