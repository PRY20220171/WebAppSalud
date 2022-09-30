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
        paciente: {},
        lugarnac: {},
        domicilioact: {},
        nino: {},
        antecedenteFamiliar: {},
        antecedentePatologico: {},
        antecedentePsicocial: {},
      }
    },
    mounted(){
    },
    updated(){
      this.paciente=this.$refs.Paciente.model
      this.lugarnac=this.$refs.Ubicacion.lugarnac
      this.domicilioact=this.$refs.Ubicacion.domicilioact 
      this.nino=this.$refs.Nino.model
      this.antecedenteFamiliar=this.$refs.AntecedenteFamiliar.model
      this.antecedentePatologico=this.$refs.AntecedentePatologico.model 
      this.antecedentePsicocial=this.$refs.AntecedentePsicocial.model 

      
      console.log(this.paciente)
      console.log(this.lugarnac)
      console.log(this.nino)
      console.log(this.antecedenteFamiliar)
      console.log(this.antecedentePatologico)
      console.log(this.antecedentePsicocial)
    },
    methods:{
      nextStep(){
        switch (this.e1) {
          case 1: 
            this.e1=2
            break;
          case 2: 
              this.e1=3
              break;     
          default:
            break;
        }
      }
    }
  }