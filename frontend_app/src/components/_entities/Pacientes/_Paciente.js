// import TopBar from '../Bars/TopBar.vue';

import * as Paciente from './Paciente.js';

import TopBar from '../../../views/Shared/TopBar.vue';
import PacienteView from '../../../views/_createOrUpdate/Pacientes/PacienteView.vue';

export default {
    name: 'RegistrarPaciente',

    components: {
        TopBar,
        PacienteView
    },
    
    data () {
      return {
        e1: 1,
        paciente: Paciente.model,
      }
    },
    
    methods:{
    }
  }