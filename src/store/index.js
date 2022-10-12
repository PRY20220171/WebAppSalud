import Vue from 'vue'
import Vuex from 'vuex'
import {PacienteModule} from './PacienteModule'

Vue.use(Vuex)
const state = {
  user: null
};
export default new Vuex.Store({
  modules: {
    pacienteModule: PacienteModule,
}
})
