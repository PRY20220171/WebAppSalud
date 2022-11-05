import Resultado from '../../../views/_createOrUpdate/Resultados/ResultadoView.vue';
import Tratamiento from '../../../views/_createOrUpdate/Resultados/TratamientoView.vue';
import TratamientoXResultado from '../../../views/_createOrUpdate/Resultados/TratamientoXResultadoView.vue';

import AtencionesIndexSearch from '@/views/_indexes/Atenciones/AtencionesIndexSearch.vue';
import ResultadosAtencionIndex from '@/views/_indexes/Resultados/ResultadosIndexAtencion.vue';

import {mapState, mapMutations, mapActions} from 'vuex'
export default {
    name: 'RegistrarResultado',

    components: {
      //compartidos
      //inf. general
        Resultado,
        Tratamiento,
        TratamientoXResultado,

        AtencionesIndexSearch,
        ResultadosAtencionIndex
    },
    
    data () {
      return {
      //  user: this.$store.state.user,
      //  isLoading: false,
        e1: 1,
        usuario:{
          id:localStorage.getItem("access_token"),
          nombres: localStorage.getItem("nombres"),
          rol:localStorage.getItem("rol")
        },
        tipos_alerta:{
          s:'success',
          i:'info',
          w:'warning',
          e:'error'
        },
        alertType:'info',
        mensaje:'Por favor completar la información necesaria antes de guardar',
        cancelar:'Cancelar',
      }
    },
    computed:{
      ...mapState('atencionModule',['atencion']),
      ...mapState('pacienteModule',['paciente']),
    },
    mounted(){
      console.log(this.paciente)
      this.getAtencion({id:null, proxy:this.$proxies.atencionProxy});
      this.getPaciente({id:null, proxy:this.$proxies.pacienteProxy});
      console.log(this.atencion)
    },
    methods:{
      ...mapActions('atencionModule',['getAtencion']),
      ...mapActions('pacienteModule',['getPaciente']),
    }
  }