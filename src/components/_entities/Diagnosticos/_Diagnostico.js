import Diagnostico from '../../../views/_createOrUpdate/Diagnosticos/DiagnosticoView.vue';
import DiagnosticoXPrueba from '../../../views/_createOrUpdate/Diagnosticos/DiagnosticoXPruebaView.vue';
import DiagnosticoXResultado from '../../../views/_createOrUpdate/Diagnosticos/DiagnosticoXResultadoView.vue';

export default {
    name: 'RegistrarDiagnostico',

    components: {
      //compartidos
      //inf. general
        Diagnostico,
        DiagnosticoXPrueba,
        DiagnosticoXResultado,
    },
    
    data () {
      return {
      //  user: this.$store.state.user,
      //  isLoading: false,
        e1: 1,
      }
    },
    mounted(){
      console.log(this.paciente)
    },
    methods:{
    }
  }