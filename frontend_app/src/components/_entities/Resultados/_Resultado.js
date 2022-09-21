import Bars from '../../../views/Shared/Bars.vue';

import Resultado from '../../../views/_createOrUpdate/Resultados/ResultadoView.vue';
import Tratamiento from '../../../views/_createOrUpdate/Resultados/TratamientoView.vue';
import TratamientoXResultado from '../../../views/_createOrUpdate/Resultados/TratamientoXResultadoView.vue';

export default {
    name: 'RegistrarResultado',

    components: {
      //compartidos
        Bars,
      //inf. general
        Resultado,
        Tratamiento,
        TratamientoXResultado,
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