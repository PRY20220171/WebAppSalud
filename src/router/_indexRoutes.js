import Vue from 'vue'
import VueRouter from 'vue-router'

//import HomeView from '../views/Usuario/HomeView.vue'

import * as AtencionesRoutes from  './AtencionesRoutes'
import * as DiagnosticosRoutes from  './DiagnosticosRoutes'
import * as PacientesRoutes from  './PacientesRoutes'
import * as PruebasRoutes from  './PruebasRoutes'
import * as ResultadosRoutes from  './ResultadosRoutes'
import * as UsuariosRoutes from  './UsuariosRoutes'
import * as TransferenciasRoutes from  './TransferenciasRoutes'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'No encontrado',
    component: () => import("../views/Shared/404Error.vue")
  },{
    path: '/',
    name: 'Inicio',
    component: () => import("../views/Usuario/HomeView.vue")
  },
  // {
  //   path: '/perfil',
  //   name: 'MiPerfil',
  //   component: () => import('../views/Usuario/PerfilView.vue')
  //   //Esta ruto está dentro del routing de usuarios (UsuariosRoutes)-> revisar
  // },
  // {
  //   path: '/miperfil/editar',
  //   name: 'EditarPerfil',
  //   component: () => import('../views/Usuario/EditarPerfilView.vue')
  //   //Esta ruto está dentro del routing de usuarios (UsuariosRoutes)-> revisar
  // },
  {
    path: '/about',
    name: 'Sobre nosotros',
    component: () => import('../views/AboutView.vue')
  },
  PacientesRoutes.RegistrarPacienteRoute(),
  PacientesRoutes.EditarPacienteRoute(),
  PacientesRoutes.ListarPacientesRoute(),
  PacientesRoutes.ListarPacientesSinEditarRoute(),

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
  UsuariosRoutes.VerPerfilRoute(),
  UsuariosRoutes.EditarPerfilRoute(),

  TransferenciasRoutes.RegistrarTransferenciasRoute(),
  TransferenciasRoutes.EditarTransferenciasRoute(),
  TransferenciasRoutes.ListarTransferenciasRoute(),

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
