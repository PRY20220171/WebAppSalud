import Atencion from '@/views/_createOrUpdate/Atenciones/AtencionView.vue';
import Acompanante from '@/views/_createOrUpdate/Atenciones/AcompananteView.vue';
import FactoresRiesgo from '@/views/_createOrUpdate/Atenciones/FactoresRiesgoView.vue';
import CentroMedico from '@/views/_createOrUpdate/Atenciones/CentroMedicoView.vue';

import SignosVitales from '@/views/_createOrUpdate/Pruebas/SignosVitales.vue';
import Tratamientos from '@/views/_indexes/Resultados/TratamientoIndex.vue';
import Pruebas from '@/views/_indexes/Pruebas/PruebasIndex.vue';
import Diagnosticos from '@/views/_indexes/Diagnosticos/DiagnosticosIndexInAtencionEdit.vue';

import PacientesIndexSearch from '@/views/_indexes/Pacientes/PacientesIndexSearch.vue'

import {mapState, mapMutations, mapActions} from 'vuex'

export default {
    name: 'RegistrarAtencion',

    components: {
      //compartidos
      //detalle
        Atencion,
        Acompanante,
        FactoresRiesgo,
        CentroMedico,
      //de otros modulos
        SignosVitales,
        Pruebas,
        Tratamientos,
        Diagnosticos,
        PacientesIndexSearch
    },
    data () {
      return {
        e1: 1,
        //Atencion: Atencion.model,
      }
    },
    computed:{
      ...mapState('atencionModule',['atencion']),
      ...mapState('pacienteModule',['paciente']),
    },
    created(){
      let id = this.$route.params.id;
      this.getAtencion({
        id:id,
        proxy:this.$proxies.atencionProxy
      });
      if (id){
        this.e1 = 2;
      }
    },
    watch: {
      'e1': {
        handler(newValue, oldValue) {
          this.camposCompletos(newValue-1)
          console.log('a:', newValue,' desde:', oldValue, ' ',this.stepAlert[oldValue-1])
        },
        deep: true
      },
      'atencion': {
        handler(val) {
          this.cancelar='Cancelar'
        },
        deep: true
      }
    },
    beforeMount(){      
    },
    mounted(){
    },
    updated(){
    },
    methods:{
      ...mapActions('atencionModule',['getAtencion']),
    }
  }