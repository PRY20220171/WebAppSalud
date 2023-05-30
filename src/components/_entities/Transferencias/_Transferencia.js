import Transferencia from '@/views/_createOrUpdate/Transferencias/TransferenciaView.vue';
import AtencionesIndexSearch from '@/views/_indexes/Atenciones/AtencionesIndexSearch.vue';

import {mapState, mapMutations, mapActions} from 'vuex'
export default {
    name: 'RegistrarTransferencia',

    components: {
      //compartidos
      //inf. general
        Transferencia,
        AtencionesIndexSearch,
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

        
        

        estados: ['en proceso', 'esperando pruebas','finalizado'],
        }
    },
    computed:{
      ...mapState('atencionModule',['atencion']),
      ...mapState('pacienteModule',['paciente']),
      ...mapState('transferenciaModule',['transferencia']),
    },
    mounted(){
      console.log(this.paciente)
      this.getAtencion({id:null, proxy:this.$proxies.atencionProxy});
      this.getPaciente({id:null, proxy:this.$proxies.pacienteProxy});
      console.log(this.atencion)
    },
    
    created() {
      let id = this.$route.params.id;
      this.getAtencion({
        id: id,
        proxy: this.$proxies.atencionProxy
      });
      this.getIdAtencion(this.atencion.id);
    },
    methods:{
      
     
      crearConsulta(){
        this.$router.push('/consultas/create');
      },
    }
  }