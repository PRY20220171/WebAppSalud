import Bars from '../../../views/Shared/Bars.vue';

import Atencion from '../../../views/_createOrUpdate/Atenciones/AtencionView.vue';
import CentroMedico from '../../../views/_createOrUpdate/Atenciones/CentroMedicoView.vue';
import Acompanante from '../../../views/_createOrUpdate/Atenciones/AcompananteView.vue';
import FactoresRiesgo from '../../../views/_createOrUpdate/Atenciones/FactoresRiesgoView.vue';
import Sintoma from '../../../views/_createOrUpdate/Atenciones/SintomaView.vue';

export default {
    name: 'RegistrarAtencion',

    components: {
      //compartidos
        Bars,
      //detalle
        Atencion,
        CentroMedico,
        Acompanante,
        FactoresRiesgo,
        Sintoma,
    },
    
    data () {
      return {
        e1: 1,
        Atencion: Atencion.model,
      }
    },
    mounted(){
      console.log(this.Atencion)
    },
    methods:{
    }
  }