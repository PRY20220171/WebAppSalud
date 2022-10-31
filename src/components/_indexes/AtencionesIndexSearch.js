
import {mapActions,mapState} from 'vuex'
import AtencionUneditable from '@/views/uneditable/Atenciones/AtencionUneditable.vue';
import PacienteUneditable from '@/views/uneditable/Pacientes/PacienteUneditableView.vue'

export default {
    name: 'AtencionesIndexSearch',
    components: {
        AtencionUneditable,
        PacienteUneditable
    },
    data() {
        return {
            isLoading: false,
            search: '',
            panel: [0, 1],
            atencionHeaders: [
                { text: "Paciente", value: "nombrecomp" },
                { text: "Lo registró", value: "nombreusarioreg" },
                { text: "Centro Médico", value: "centromedico.nombre" },
                { text: "Fecha de Registro", value: "fecharegistro" },
                { text: "Motivo de la consulta", value: "motivoconsulta" },
                { text: "observaciones", sortable: false, value: "observaciones" },
                { text: "forma de inicio", sortable: false, value: "formainicio" },
                { text: "curso", sortable: false, value: "curso" },
                { text: "tiempoenfermedad", value: "tiempoenfermedad" },
                { text: " ", value: "actions" },
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
      ...mapState('atencionModule',['atencion']),
      ...mapState('pacienteModule',['paciente']),
    },
    mounted() {
        this.getAll();
    },
    methods: {
        getAll() {
            this.isLoading = true;
                this.$proxies.atencionProxy.getAll()
                .then(x => {
                    //this.collection = x.data;
                    this.collection.items = x.data;
                    if (this.collection.items.length>0)
                        this.collection.hasItems=true;
                    this.collection.total=this.collection.items.length
                    this.collection.items.forEach(x => {
                        x.nombrecomp = x.paciente.nombres + ' ' + x.paciente.apellidos;
                        x.nombreusarioreg = x.usuarioregistro.nombres + ' ' + x.usuarioregistro.apellidos;
                        x.doc = x.doctipo + ': ' + x.docnum;
                    });
                    this.isLoading = false;
                }).catch(() => {
                    this.isLoading = false;
                });
            //console.log(this.$proxies.atencionProxy.getAll())
            console.log(this.collection)
        },
        ...mapActions('atencionModule',['getAtencion']),
        ...mapActions('pacienteModule',['getPaciente']),
        selected(idatencion, idpaciente){
            console.log(idatencion)
            this.getAtencion({id:idatencion, proxy:this.$proxies.atencionProxy});
            this.getPaciente({id:idpaciente, proxy:this.$proxies.pacienteProxy});

        }
    }
}