export default {
    name: 'PacienteIndex',
    components: {},
    data() {
        return {
            expanded: [],
            singleExpand: false,
            isLoading: false,
            search: '',
            pacienteHeaders: {
                base:[
                    { text: 'Nombres',value: "nombrecomp"},
                    { text: 'Doc. Identidad', value: 'doc' },
                    { text: 'Gruposang', value: 'gruposangrh' },
                    { text: 'telefono', value: 'telefono' },
                    { text: 'Fec. nacimiento', value: 'fecnac' },
                    { text: 'Actions', sortable: false, value: 'actions'},
                ],
                ubicacionDetail:[
                    {
                        text: 'Lugar de nacimiento',
                        value: 'lugarnac',
                        detail: [
                            { text: 'Procedencia', value: 'pais' },
                            { text: 'Region', value: 'region' },
                            { text: 'Provincia', value: 'provincia' },
                            { text: 'Distrito', value: 'distrito' }
                        ]
                    },
                    {
                        text: 'Ubicación actual',
                        value: 'domicilioact',
                        detail: [
                            { text: 'Procedencia', value: 'pais' },
                            { text: 'Region', value: 'region' },
                            { text: 'Provincia', value: 'provincia' },
                            { text: 'Distrito', value: 'distrito' }
                        ]
                    }],
                antecedentesDetail:[
                    {
                        text: 'Antecedentes perinatales:',
                        value: 'antecedenteperi',
                        detail: [
                            { text: 'a', value:'tipoembarazo'},
                            { text: 'a', value:'embarazoriesgo'},
                            { text: 'a', value:'controlprenatal'},
                            { text: 'a', value:'nroembarazo'},
                            { text: 'a', value:'edadgestalnac'},
                            { text: 'a', value:'pesoalnac'},
                            { text: 'a', value:'tallaalnac'},
                            { text: 'a', value:'perimcefalico'},
                            { text: 'a', value:'respllanto'}
                        ]
                    },
                    {
                        text: 'Antecedentes psicologicos:',
                        value: 'antecedentepsico',
                        detail: [
                            { text: 'a', value:"apoyofam"},
                            { text: 'a', value:"edadgestante"},
                            { text: 'a', value:"nrohijos"},
                            { text: 'a', value:"embarazoespac"},
                            { text: 'a', value:"tipotrabajo"},
                            { text: 'a', value:"violenciaocupacional"},
                            { text: 'a', value:"vidasocial"},
                            { text: 'a', value:"perteneceorg"}
                        ]
                    },
                    {
                        text: 'Antecedentes familiares:',
                        value: 'antecedentefam',
                        detail: [
                            { text: 'a', value:'tipoembarazo'},
                            { text: 'a', value:'embarazoriesgo'},
                            { text: 'a', value:'controlprenatal'},
                            { text: 'a', value:'nroembarazo'},
                            { text: 'a', value:'edadgestalnac'},
                            { text: 'a', value:'pesoalnac'},
                            { text: 'a', value:'tallaalnac'},
                            { text: 'a', value:'perimcefalico'},
                            { text: 'a', value:'respllanto'}
                        ]
                    },
                    {
                        text: 'Antecedentes patologicos:',
                        value: 'antecedentepato',
                        detail: [
                            { text: 'a', value:'tipoembarazo'},
                            { text: 'a', value:'embarazoriesgo'},
                            { text: 'a', value:'controlprenatal'},
                            { text: 'a', value:'nroembarazo'},
                            { text: 'a', value:'edadgestalnac'},
                            { text: 'a', value:'pesoalnac'},
                            { text: 'a', value:'tallaalnac'},
                            { text: 'a', value:'perimcefalico'},
                            { text: 'a', value:'respllanto'}
                        ]
                    }
                ]
            },
            collection: {
                hasItems: false,
                items: [],
                total: 0,
                page: 1,
                pages: 0
            },
        }
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
        clickRow(item, event) {
            console.log(item);
            console.log(event);
            if(event.isExpanded) {
              const indexExpanded = this.expanded.findIndex(i => i === item);
              this.expanded.splice(indexExpanded, 1)
            } else {
              this.expanded.push(item);
            }
          },
        remove(pacienteid){
            this.isLoading = true;
            this.$proxies.pacienteProxy.remove(pacienteid)
            .then(() =>{
                this.getAll(1);
            }).catch(()=>{
                this.isLoading = false;
            })
        }
    }
}