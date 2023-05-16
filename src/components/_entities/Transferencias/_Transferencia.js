//import Transferencia from '../../../views/_createOrUpdate/Transferencias/TransferenciaView.vue';

import {mapState, mapMutations, mapActions} from 'vuex'
export default {
    name: 'RegistrarTransferencia',

    components: {
      //compartidos
      //inf. general
       // Transferencia
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

        
        model:{
          idtransferencia:'',
          fecharegistro:'',
          usuario:'',
          descripcion:'',
          estado:'',
          especialidadIni:'',
          especialidadFin:'',
        },

        estados: ['en proceso', 'esperando pruebas','finalizado'],
        }
    },
    computed:{
      ...mapState('pacienteModule',['paciente']),
    },
    mounted(){
      console.log(this.paciente)
      this.getPaciente({id:null, proxy:this.$proxies.pacienteProxy});
    },
    methods:{
      ...mapActions('pacienteModule',['getPaciente']),
    }
  }