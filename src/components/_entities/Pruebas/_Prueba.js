import CategoriaPrueba from '../../../views/_createOrUpdate/Pruebas/CategoriaPruebaView.vue';
import Medida from '../../../views/_createOrUpdate/Pruebas/MedidaView.vue';
import Prueba from '../../../views/_createOrUpdate/Pruebas/PruebaView.vue';
import TipoPrueba from '../../../views/_createOrUpdate/Pruebas/TipoPruebaView.vue';

import Atencion from '../../../views/uneditable/Atenciones/AtencionView.vue';
import Acompanante from '../../../views/uneditable/Atenciones/AcompananteView.vue';
import FactoresRiesgo from '../../../views/uneditable/Atenciones/FactoresRiesgoView.vue';
import CentroMedico from '../../../views/uneditable/Atenciones/CentroMedicoView.vue';

import SignosVitales from '../../../views/uneditable/Pruebas/SignosVitales';
import Tratamientos from '../../../views/_indexes/Resultados/TratamientoIndexInAtencion';
import Pruebas from '../../../views/_indexes/Pruebas/PruebasIndexInAtencion.vue';
import DiagnosticosEdit from '../../../views/_indexes/Diagnosticos/DiagnosticosIndexInAtencionEdit.vue';

export default {
    name: 'RegistrarCategoriaPrueba',

    components: {
      //compartidos
      //inf. general
        CategoriaPrueba,
        Medida,
        Prueba,
        TipoPrueba,
      //detalle
        Atencion,
        Acompanante,
        FactoresRiesgo,
        CentroMedico,
      //de otros modulos
        SignosVitales,
        Pruebas,
        Tratamientos,
        DiagnosticosEdit,
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