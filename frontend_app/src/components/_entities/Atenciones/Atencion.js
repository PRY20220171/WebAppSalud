import Sintoma from '../../../views/_createOrUpdate/Atenciones/SintomaView.vue';

export default {
    name: 'Atencion',

    components: {
      Sintoma,
    },
    
    data () {
      return {
        
        model:{
            idatencion: '',
            idpaciente: '',
            idusuarioregistro: '',
            idsignosvitales: '',
            fecharegistro: '',
            motivoconsulta: '',
            observaciones: '',
            tiempoenfermedad: '',
            formainicio: '',
            curso: '',
            signossintomas: '',
            idacompanante: '',
            idfacriesgo: '',
            idcentromedic: '',
        },

      }
    },
    
    methods:{
    }
  }