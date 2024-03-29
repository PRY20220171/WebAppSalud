import Vue from 'vue'
import Vuex from 'vuex'
import {PacienteModule} from './PacienteModule'
import {AtencionModule} from './AtencionModule'
import {PruebaModule} from './PruebaModule'
import {ResultadoModule} from './ResultadoModule'
import {DiagnosticoModule} from './DiagnosticoModule'
import {UsuarioModule} from './UsuarioModule'
import {TransferenciaModule} from './TransferenciaModule'

Vue.use(Vuex)
const state = {
  user: null
};
export default new Vuex.Store({
  modules: {
    pacienteModule: PacienteModule,
    atencionModule: AtencionModule,
    pruebaModule: PruebaModule,
    ResultadoModule: ResultadoModule,
    DiagnosticoModule: DiagnosticoModule,
    UsuarioModule:UsuarioModule,
    transferenciaModule:TransferenciaModule,
  },
})