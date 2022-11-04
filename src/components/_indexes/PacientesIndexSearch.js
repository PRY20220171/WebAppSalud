
import {mapActions,mapState} from 'vuex'
import PacienteUneditable from '@/views/uneditable/Pacientes/PacienteUneditableView.vue';

import {idAtencion} from '@/components/_entities/Atenciones/_Atencion.js';
 
export default {
    name: 'PacientesIndexSearch',

    components: {
        PacienteUneditable
    },
    data() {
        return {
            id_Paciente: '',
            isLoading: false,
            search: '',
            panel: [0, 1],
            pacienteHeaders: [
                    { text: 'Nombres',value: "nombrecomp"},
                    { text: 'Doc. Identidad', value: 'doc' },
                    { text: 'Sexo', value: 'sexo' },
                    { text: 'Tipo Sangre', value: 'gruposangrh' },
                    { text: 'telefono', value: 'telefono' },
                    { text: 'Fec. nacimiento', value: 'fecnac' },
                    { text: 'Seleccionar', sortable: false, value: 'actions'},
                ],
            collection: {
                hasItems: false,
                items: [],
                total: 0,
                page: 1,
                pages: 0
            },
            tipo_sexo: { 'm':'masculino','f':'femenino','im':'intersexual masculino','fm':'intersexual femenino'}
        }
    },
    computed:{
      ...mapState('pacienteModule',['paciente']),
      ...mapState('atencionModule',['atencion']),
    },
    mounted() {
        this.getAll();
    },
    methods: {
        getAll() {
            this.isLoading = true;
                this.$proxies.pacienteProxy.getAll()
                .then(x => {
                    //this.collection = x.data;
                    this.collection.items = x.data;
                    if (this.collection.items.length>0)
                        this.collection.hasItems=true;
                    this.collection.total=this.collection.items.length
                    this.collection.items.forEach(x => {
                        x.nombrecomp = x.nombres + ' ' + x.apellidos;
                        x.doc = x.doctipo + ': ' + x.docnum;
                    });
                    this.isLoading = false;
                }).catch(() => {
                    this.isLoading = false;
                });
            //console.log(this.$proxies.pacienteProxy.getAll())
            console.log(this.collection)
        },
        ...mapActions('pacienteModule',['getPaciente']),
        ...mapActions('atencionModule',['updatePacienteOnCreate']),
        selected(idpaciente){
            console.log(idpaciente)
            this.id_Paciente = idpaciente;
            this.getPaciente({id:idpaciente, proxy:this.$proxies.pacienteProxy});
            idAtencion(idpaciente);
        }
    }
}