import Bars from '../../../views/Shared/Bars.vue';

import Atencion from '../../../views/_createOrUpdate/Atenciones/AtencionView.vue';
import Acompanante from '../../../views/_createOrUpdate/Atenciones/AcompananteView.vue';
import FactoresRiesgo from '../../../views/_createOrUpdate/Atenciones/FactoresRiesgoView.vue';
import CentroMedico from '../../../views/_createOrUpdate/Atenciones/CentroMedicoView.vue';

import SignosVitales from '../../../views/_createOrUpdate/Pruebas/SignosVitales';
import Tratamientos from '../../../views/_indexes/Pruebas/TratamientoIndex';
import Pruebas from '../../../views/_indexes/Pruebas/PruebasIndex';
import Diagnosticos from '../../../views/_indexes/DiagnosticosIndex';

export default {
    name: 'RegistrarAtencion',

    components: {
      //compartidos
        Bars,
      //detalle
        Atencion,
        Acompanante,
        FactoresRiesgo,
        CentroMedico,
      //de otros modulos
        SignosVitales,
        Pruebas,
        Tratamientos,
        Diagnosticos
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