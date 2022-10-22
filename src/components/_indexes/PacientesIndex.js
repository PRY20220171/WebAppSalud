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
                            { text: 'Tipo de embarazo', value:'tipoembarazo'},
                            { text: 'Embarazo de riesgo', value:'embarazoriesgo'},
                            { text: '¿Hubo control prenatal?', value:'controlprenatal'},
                            { text: 'nro. de embarazo', value:'nroembarazo'},
                            { text: 'Nacio a la semana:', value:'edadgestalnac'},
                            { text: 'peso al nacer', value:'pesoalnac'},
                            { text: 'tallaalnac al nacer', value:'tallaalnac'},
                            { text: 'perimcefalico al nacer', value:'perimcefalico'},
                            { text: 'respllanto al nacer', value:'respllanto'}
                        ]
                    },
                    {
                        text: 'Antecedentes psicologicos:',
                        value: 'antecedentepsico',
                        detail: [
                            { text: 'apoyo fam', value:"apoyofam"},
                            { text: 'edad gestante', value:"edadgestante"},
                            { text: 'nro de hijos', value:"nrohijos"},
                            { text: 'embarazoespac', value:"embarazoespac"},
                            { text: 'tipo de trabajo', value:"tipotrabajo"},
                            { text: 'sufre violencia ocupacional', value:"violenciaocupacional"},
                            { text: 'vida social', value:"vidasocial"},
                            { text: 'pertenece a org.', value:"perteneceorg"}
                        ]
                    },
                    {
                        text: 'Antecedentes familiares:',
                        value: 'antecedentefam',
                        detail: [
                            { text: 'Tuberculosis', value:'tbc'},
                            { text: 'VIH/SIDA', value:'vihsida'},
                            { text: 'diabetes', value:'diabetes'},
                            { text: 'epilepsia', value:'epilepsia'},
                            { text: 'alergia a medic.', value:'alergiamedic'},
                            { text: 'violencia fam.', value:'violenciafam'},
                            { text: 'alcoholismo', value:'alcoholismo'},
                            { text: 'drogradiccion', value:'drogradiccion'},
                            { text: 'hepatitisb', value:'hepatitisb'}
                        ]
                    },
                    {
                        text: 'Antecedentes patologicos:',
                        value: 'antecedentepato',
                        detail: [
                            { text: 'Tuberculosis', value:'tbc'},
                            { text: 'SOBA/ASMA', value:'sobasma'},
                            { text: 'transf. sanguínea', value:'transfsangre'},
                            { text: 'padec. neurologico', value:'neurologico'},
                            { text: 'alergia a medic.', value:'alergiamedic'},
                            { text: 'otros', value:'otros'},
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