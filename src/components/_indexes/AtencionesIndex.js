import DiagnosticosAtencionIndex from '@/views/_indexes/Diagnosticos/DiagnosticosIndexInAtencionEdit.vue';
import PruebasAtencionIndex from '@/views/_indexes/Pruebas/PruebasIndexInAtencion.vue';
import ResultadosAtencionIndex from '@/views/_indexes/Resultados/ResultadosIndexAtencion.vue';
import TratamientosAtencionIndex from '@/views/_indexes/Resultados/TratamientoIndexAtencion.vue';
import {mapState,mapActions} from 'vuex'

export default {
    name: "ListaAtenciones",

    components: {
        DiagnosticosAtencionIndex,
        PruebasAtencionIndex,
        ResultadosAtencionIndex,
        TratamientosAtencionIndex,
    },
    mounted() {
        this.getAll(1);
    },
    data() {
        return {
            dialog1:false,
            dialog2:false,
            dialog3:false,
            dialog4:false,

            expanded: [],
            singleExpand: false,
            searchText: "",
            searchBoxClosed: true,
            isLoading: false,
            search: "",
            pacienteHeaders: {
                base: [
                    { text: "Paciente", value: "nombrecomp" },
                    { text: "Lo registró", value: "nombreusarioreg" },
                    { text: "Centro Médico", value: "centromedico.nombre" },
                    { text: "Fecha de Registro", value: "fecharegistro" },
                    { text: "Motivo de la consulta", value: "motivoconsulta" },
                    { text: "Actions", sortable: false, value: "actions" },
                    { text: "Diagnosticos", sortable: false, value: "diagnosticos" },
                    { text: "Pruebas", sortable: false, value: "pruebas" },
                    { text: "Resultados", sortable: false, value: "resultados" },
                    { text: "Tratamientos", sortable: false, value: "tratamientos" },
                ],
                atencionDetail: [
                    {
                        text: "Detalles de la consulta",
                        value: "detalle",
                        detail: [
                            { text: "Observaciones", value: "observaciones" },
                            { text: "Tiempo de la enfermedad", value: "tiempoenfermedad" },
                            { text: "Forma de inicio", value: "formainicio" },
                            { text: "Curso de la enfermedad:", value: "curso" },
                        ],
                    },
                ],
            },
            collection: {
                hasItems: false,
                items: [
                    {
                        pacienteid: null,
                        paciente: {
                            id: null,
                            nombres: null,
                        },
                        acompanante: null,
                        centromedico: null,
                    },
                ],
                total: 0,
                page: 1,
                pages: 0,
            },
            ids: [],
        };
    },
    computed: {
      ...mapState('atencionModule', ['atencion']),
    },
    watch:{
       // async dialog() { console.log('dialog'); await this.clickRow},
    },
    methods: {
        ...mapActions('atencionModule', ['getAtencion']),
        getAll(page) {
            this.isLoading = true;
            this.$proxies.atencionProxy
                .getAll()
                .then((x) => {
                    this.collection.items = x.data;
                    if (this.collection.items.length > 0) this.collection.hasItems = true;
                    this.collection.total = this.collection.items.length;
                    this.collection.items.forEach((x) => {
                        x.nombrecomp = x.paciente.nombres + " " + x.paciente.apellidos;
                        x.nombreusarioreg = "Dr. X"; //+ x.usuario.nombres + ' ' + x.usuario.apellidos;
                        x.detalle = {
                            observaciones: x.observaciones,
                            tiempoenfermedad: x.tiempoenfermedad,
                            formainicio: x.formainicio,
                            curso: x.curso,
                        };
                    });
                    this.isLoading = false;
                })
                .catch(() => {
                    this.isLoading = false;
                });
        },

        clickRow(item, event) {
            console.log('clickRow');
            console.log(item);
            console.log(event);
            if (event.isExpanded) {
                const indexExpanded = this.expanded.findIndex((i) => i === item);
                this.expanded.splice(indexExpanded, 1);
            } else {
                this.expanded.push(item);
                if(!this.getAtencion.id)
                    this.getAtencion({
                    id: item.id,
                    proxy: this.$proxies.atencionProxy
                });
                console.log(item.id,'getAtencion',this.atencion,'x--x');
            }
        },

        remove(atencionId) {
            this.isLoading = true;
            this.$proxies.atencionProxy
                .remove(atencionId)
                .then(() => {
                    this.getAll(1);
                })
                .catch(() => {
                    this.isLoading = false;
                });
        },
    },
};
