import Vue from 'vue'
import Vuex from 'vuex'
import {PacienteModule} from './PacienteModule'
import {AtencionModule} from './AtencionModule'
Vue.use(Vuex)
const state = {
  user: null
};
export default new Vuex.Store({
  modules: {
    pacienteModule: PacienteModule,
    atencionModule: AtencionModule,
  },
})