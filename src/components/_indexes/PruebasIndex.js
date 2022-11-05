export default {
    name: 'ResultadoIndex',
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
                    { text: "Categoría", value: "tipoprueba.categoriaprueba.nombre" },
                    { text: "Tipo", value: "tipoprueba.nombre" },
                    { text: "medida", value: "tipoprueba.medida.nombre" },
                    { text: "Fecha de Registro", value: "fecprueba" },
                    { text: "Fecha de resultado", value: "fecresultado" },
                    { text: "resultado", value: "resultado_detail" },
                    { text: "observacion", value: "observacion" },
                    { text: "estado", value: "estado" },
                    { text: "Actions", sortable: false, value: "actions" },
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
    methods: {
        async getAll(page) {
            this.isLoading = true;
            this.$proxies.pruebaProxy
                .getAll()
                .then((x) => {
                    this.collection.items = x.data;
                    if (this.collection.items.length > 0) this.collection.hasItems = true;
                    this.collection.total = this.collection.items.length;
                    this.collection.items.forEach((x) => {
                        x.nombrecomp = x.paciente.nombres + " " + x.paciente.apellidos;
                        x.nombreusarioreg = x.usuarioregistro.nombres + " " + x.usuarioregistro.apellidos;
                        x.resultado_detail = x.resultado +' '+x.tipoprueba.medida.nombre
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

        remove(atencionId) {
            this.isLoading = true;
            this.$proxies.pruebaProxy
                .remove(atencionId)
                .then(() => {
                    this.getAll(1);
                })
                .catch(() => {
                    this.isLoading = false;
                });
        },
    },
}