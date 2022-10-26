import Atencion from '@/views/_createOrUpdate/Atenciones/AtencionView.vue';
import Acompanante from '@/views/_createOrUpdate/Atenciones/AcompananteView.vue';
import FactoresRiesgo from '@/views/_createOrUpdate/Atenciones/FactoresRiesgoView.vue';
import CentroMedico from '@/views/_createOrUpdate/Atenciones/CentroMedicoView.vue';

import SignosVitales from '@/views/_createOrUpdate/Pruebas/SignosVitales.vue';
import ResultadosAtencionIndex from '@/views/_indexes/Resultados/ResultadosIndexAtencion.vue';
import TratamientosAtencionIndex from '@/views/_indexes/Resultados/TratamientoIndexAtencion.vue';
import PruebasAtencionIndex from '@/views/_indexes/Pruebas/PruebasIndexInAtencion.vue';
import DiagnosticosAtencionIndex from '@/views/_indexes/Diagnosticos/DiagnosticosIndexInAtencionEdit.vue';

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
        PruebasAtencionIndex,
        TratamientosAtencionIndex,
        DiagnosticosAtencionIndex,
        PacientesIndexSearch,
        ResultadosAtencionIndex
    },
    data () {
      return {
        e1: 1,
        usuario:{
          id:localStorage.getItem("access_token"),
          nombres: localStorage.getItem("nombres"),
          rol:localStorage.getItem("rol")
        },
        //Atencion: Atencion.model,
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
    },
    beforeMount(){      
    },
    mounted(){
      console.log(this.usuario)
    },
    updated(){
    },
    methods:{
      ...mapActions('atencionModule',['getAtencion']),
      registrar(){
          let id = this.$route.params.id;
          let paciente= this.paciente
          delete paciente.edad;
  
          if (!id){
            this.$proxies.atencionProxy.register(this.atencion)
            .then(x => {
                this.alertType = this.tipos_alerta.s
                this.mensaje = "Paciente creado con éxito"
                this.cancelar = 'Ir a lista de pacientes'
                this.isLoading = false;
            }).catch(() => {
                this.alertType = this.tipos_alerta.e
                this.mensaje = "No se pudo crear paciente"
                this.isLoading = false;
            });
          }else{
            this.$proxies.atencionProxy.update(id,this.atencion)
            .then(x => {
                this.alertType = this.tipos_alerta.s
                this.mensaje = "Paciente actualizado con éxito"
                this.cancelar = 'Ir a lista de pacientes'
                this.isLoading = false;
            }).catch(() => {
                this.alertType = this.tipos_alerta.e
                this.mensaje = "No se pudo actualizar paciente"
                this.isLoading = false;
            });
          }
        }
    }
  }