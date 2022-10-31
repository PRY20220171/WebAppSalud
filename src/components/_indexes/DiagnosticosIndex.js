export default {
    name: 'DiagnosticoIndex',
    components: {
        //Loader, Pager,Bars
    },
    mounted() {
        this.getAll(1);
    },
    data() {
        return {
            
        familiares: [
            {show:'Padre', val:'P'},
            {show:'Madre', val:'M'},
            {show:'Hermano(s)', val:'H'},
            {show:'Abuelo(s)', val:'A'},
            {show:'Otros', val:'O'},
            {show:'No sabe', val:'U'},
            {show:'Ninguno', val:'N'},
        ],
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
                    { text: "Motivo de la consulta", value: "motivoconsulta" },
                    { text: "Actions", sortable: false, value: "actions" },
                ],
            },
                diagnosticoDetail: [
                            { text: "Fecha de registro", value: "fecregistro" },
                            { text: "Descripcion", value: "descripcion" },
                            { text: "Estado", value: "estado" },
                            { text: "Estado", value: "tipo" },
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
        async getAll(page) {
            this.isLoading = true;
            this.$proxies.atencionProxy
                .getAll()
                .then((x) => {
                    this.collection.items = x.data;
                    if (this.collection.items.length > 0) this.collection.hasItems = true;
                    this.collection.total = this.collection.items.length;
                    this.collection.items.forEach((x) => {
                        x.nombrecomp = x.paciente.nombres + " " + x.paciente.apellidos;
                        x.nombreusarioreg = x.usuarioregistro.nombres + " " + x.usuarioregistro.apellidos;
                    });
                    this.isLoading = false;
                })
                .catch(() => {
                    this.isLoading = false;
                });
        },

        async clickRow(item, event) {
            console.log(item);
            console.log(event);
            if (event.isExpanded) {
                const indexExpanded = this.expanded.findIndex((i) => i === item);
                this.expanded.splice(indexExpanded, 1);
            } else {
                
              await  this.expanded.push(item);
                    this.$proxies.diagnosticoProxy.getByAtencionId(item.id).then((x) => {
                        item.diagnosticos = x.data;
                        console.log('s',item)
                    })
                    .catch(() => {
                    });
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
}