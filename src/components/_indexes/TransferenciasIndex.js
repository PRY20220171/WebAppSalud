export default {
    name: 'TransferenciaIndex',
    components: {
        //Loader, Pager,Bars
    },
    mounted() {
        this.getAll(1);
    },
    data() {
        return {
            
            dialog: false,
            expanded: [],
            singleExpand: false,
            searchText: "",
            searchBoxClosed: true,
            isLoading: false,
            search: "",
            headers: {
                base: [
                    { text: "Paciente", value: "nombrecomp" },
                    { text: "Lo registró", value: "nombreusarioreg" },
                    { text: "Fecha de Registro", value: "fecharegistro" },
                    { text: "Descripción", value: "descripcion" },
                    { text: "Especialidad inicial", value: "especialidadIni" },
                    { text: "Especialidad a derivar", value: "especialidadFin" },
                    { text: "Actions", sortable: false, value: "actions" },
                ],
            },
                transferenciaDetail: [
                            { text: "Fecha de registro", value: "registro" },
                            { text: "Descripcion", value: "descripcion" },
                            { text: "Estado", value: "estado" },
                        ],
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
    methods: {
        async getAll() {
            this.isLoading = true;
            this.$proxies.transferenciaProxy
                .getAll()
                .then((x) => {
                    this.collection.items = x.data;
                    if (this.collection.items.length > 0) this.collection.hasItems = true;
                    this.collection.total = this.collection.items.length;
                    this.collection.items.forEach((x) => {
                        x.nombrecomp = x.atencion.paciente.nombres + " " + x.atencion.paciente.apellidos;
                        x.nombreusarioreg = x.atencion.usuario.nombres + " " + x.atencion.usuario.apellidos;
                    });
                    this.isLoading = false;
                })
                .catch(() => {
                    this.isLoading = false;
                });
        },

        clickRow(item, event) {
            console.log(item);
            console.log(event);
            if (event.isExpanded) {
                const indexExpanded = this.expanded.findIndex((i) => i === item);
                this.expanded.splice(indexExpanded, 1);
            } else {
                this.expanded.push(item);
            }
        },

        remove(transferenciaId) {
            this.isLoading = true;
            this.$proxies.transferenciaProxy
                .remove(transferenciaId)
                .then(() => {
                    this.getAll(1);
                })
                .catch(() => {
                    this.isLoading = false;
                });
        },
    },
}