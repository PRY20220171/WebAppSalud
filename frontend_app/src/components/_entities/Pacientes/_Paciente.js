// import Bars from '../Bars/Bars.vue';
//import * as Paciente from './Paciente.js';

import Bars from '../../../views/Shared/Bars.vue';

import Paciente from '../../../views/_createOrUpdate/Pacientes/PacienteView.vue';
import Ubicacion from '../../../views/_createOrUpdate/Pacientes/UbicacionView.vue';
import Consentimiento from '../../../views/_createOrUpdate/Pacientes/ConsentimientoView.vue';

import AntecedenteFamiliar from '../../../views/_createOrUpdate/Pacientes/AntecedenteFamiliarView.vue';
import AntecedentePatologico from '../../../views/_createOrUpdate/Pacientes/AntecedentePatologicoView.vue';
import AntecedentePsicocial from '../../../views/_createOrUpdate/Pacientes/AntecedentePsicocialView.vue';
import Nino from '../../../views/_createOrUpdate/Pacientes/NinoView.vue';

export default {
    name: 'RegistrarPaciente',

    components: {
      //compartidos
        Bars,
      //inf. general
        Paciente:Paciente,
        Ubicacion,
      //antecedentes
        Nino,
        AntecedenteFamiliar,
        AntecedentePatologico,
        AntecedentePsicocial,
        Consentimiento,
    },
    
    data () {
      return {
      //  user: this.$store.state.user,
      //  isLoading: false,
        e1: 1,
        paciente: Paciente.model,
        lugarnac: Ubicacion.lugarnac,
        lugarnac: Ubicacion.domicilioact,
      }
    },
    mounted(){
      console.log(this.paciente)
    },
    methods:{
    }
  }