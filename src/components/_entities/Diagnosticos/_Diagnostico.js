import Diagnostico from '../../../views/_createOrUpdate/Diagnosticos/DiagnosticoView.vue';
import DiagnosticoXPrueba from '../../../views/_createOrUpdate/Diagnosticos/DiagnosticoXPruebaView.vue';
import DiagnosticoXResultado from '../../../views/_createOrUpdate/Diagnosticos/DiagnosticoXResultadoView.vue';

import Atencion from '../../../views/uneditable/Atenciones/AtencionView.vue';
import Acompanante from '../../../views/uneditable/Atenciones/AcompananteView.vue';
import FactoresRiesgo from '../../../views/uneditable/Atenciones/FactoresRiesgoView.vue';
import CentroMedico from '../../../views/uneditable/Atenciones/CentroMedicoView.vue';

import SignosVitales from '../../../views/uneditable/Pruebas/SignosVitales';
import Tratamientos from '../../../views/_indexes/Resultados/TratamientoIndexInAtencion';
import Pruebas from '../../../views/_indexes/Pruebas/PruebasIndexInAtencion.vue';
import DiagnosticosEdit from '../../../views/_indexes/Diagnosticos/DiagnosticosIndexInAtencionEdit.vue';

export default {
    name: 'RegistrarDiagnostico',

    components: {
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
        search: '',
        consultaHeaders: [
                { text: 'Nombres',value: 'paciente.nombres'},
                { text: 'Apellidos',value: 'paciente.apellidos'},
                { text: 'Nombres',value: 'nombres'},
                { text: 'Apellidos',value: 'apellidos'},
                { text: 'Fecha de diagnostico', value: 'fecharegistro' },
                { text: 'Fecha de consulta', value: 'fecharegistro' },
                { text: 'Descripcion', value: 'centromedico.nombre' },
                { text: '', value: 'action' },
            ], 
            collectionConsulta: {
                hasItems: false,
                items: [],
                total: 0,
                page: 1,
                pages: 0
            },
      }
    },
    mounted(){
      this.getAllConsultas(1)
    },
    methods:{
      
      getAllConsultas(page) {
        this.isLoading = true;
        this.$proxies.atencionProxy.getAll()
            .then(x => {
                //this.collection = x.data;
                this.collectionConsulta.items = x.data;
                if (this.collectionConsulta.items.length>0)
                    this.collectionConsulta.hasItems=true;
                this.collectionConsulta.total=this.collectionConsulta.items.length
                this.isLoading = false;
            }).catch(() => {
                this.isLoading = false;
            });
    },
    }
  }