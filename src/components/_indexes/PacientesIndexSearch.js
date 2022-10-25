
import {mapActions,mapState} from 'vuex'
export default {
    name: 'PacientesIndexSearch',
    components: {},
    data() {
        return {
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
      datosPaciente(){
        return {
            'Datos del paciente':[
                {
                    text: 'Información básica',
                    detail: [
                        { text: 'Nombres',value: this.paciente.nombres+" "+this.paciente.apellidos },
                        { text: 'Doc. Identidad', value: this.paciente.doctipo+': '+this.paciente.docnum },
                        { text: 'Tipo de Sangre', value: this.paciente.rh+" "+this.paciente.gruposang },
                        { text: 'telefono', value: this.paciente.telefono },
                        { text: 'Fec. nacimiento',  value: this.paciente.fecnac },
                        { text: ' ', sortable: false, value: ''}
                    ]
                }
            ],
            'Detalles de ubicación':[
                {
                    text: 'Lugar de nacimiento',
                    detail: [
                        { text: 'Procedencia', value: this.paciente.lugarnac.pais },
                        { text: 'Region', value: this.paciente.lugarnac.region },
                        { text: 'Provincia', value: this.paciente.lugarnac.provincia },
                        { text: 'Distrito', value: this.paciente.lugarnac.distrito }
                    ]
                },
                {
                    text: 'Ubicación actual',
                    detail: [
                        { text: 'Procedencia', value: this.paciente.domicilioact.pais },
                        { text: 'Region', value: this.paciente.domicilioact.region },
                        { text: 'Provincia', value: this.paciente.domicilioact.provincia },
                        { text: 'Distrito', value: this.paciente.domicilioact.distrito }
                    ]
                }
            ],
            'Detalles de antecedentes':[
                {
                    text: 'Antecedentes perinatales:',
                    detail: [
                        { text: 'Tipo de embarazo', value:this.paciente.antecedenteperi.tipoembarazo},
                        { text: 'Embarazo de riesgo', value:this.paciente.antecedenteperi.embarazoriesgo},
                        { text: '¿Hubo control prenatal?', value:this.paciente.antecedenteperi.controlprenatal},
                        { text: 'nro. de embarazo', value:this.paciente.antecedenteperi.nroembarazo},
                        { text: 'Nacio a la semana:', value:this.paciente.antecedenteperi.edadgestalnac},
                        { text: 'peso al nacer', value:this.paciente.antecedenteperi.pesoalnac},
                        { text: 'tallaalnac al nacer', value:this.paciente.antecedenteperi.tallaalnac},
                        { text: 'perimcefalico al nacer', value:this.paciente.antecedenteperi.perimcefalico},
                        { text: 'respllanto al nacer', value:this.paciente.antecedenteperi.respllanto}
                    ]
                },{
                    text: 'Antecedentes psicologicos:',
                    detail: [
                        { text: 'apoyo fam', value:this.paciente.antecedentepsico.apoyofam},
                        { text: 'edad gestante', value:this.paciente.antecedentepsico.edadgestante},
                        { text: 'nro de hijos', value:this.paciente.antecedentepsico.nrohijos},
                        { text: 'embarazoespac', value:this.paciente.antecedentepsico.embarazoespac},
                        { text: 'tipo de trabajo', value:this.paciente.antecedentepsico.tipotrabajo},
                        { text: 'sufre violencia ocupacional', value:this.paciente.antecedentepsico.violenciaocupacional},
                        { text: 'vida social', value:this.paciente.antecedentepsico.vidasocial},
                        { text: 'pertenece a org.', value:this.paciente.antecedentepsico.perteneceorg}
                    ]
                },{
                    text: 'Antecedentes familiares:',
                    detail: [
                        { text: 'Tuberculosis', value:this.paciente.antecedentefam.tbc},
                        { text: 'VIH/SIDA', value:this.paciente.antecedentefam.vihsida},
                        { text: 'diabetes', value:this.paciente.antecedentefam.diabetes},
                        { text: 'epilepsia', value:this.paciente.antecedentefam.epilepsia},
                        { text: 'alergia a medic.', value:this.paciente.antecedentefam.alergiamedic},
                        { text: 'violencia fam.', value:this.paciente.antecedentefam.violenciafam},
                        { text: 'alcoholismo', value:this.paciente.antecedentefam.alcoholismo},
                        { text: 'drogradiccion', value:this.paciente.antecedentefam.drogradiccion},
                        { text: 'hepatitisb', value:this.paciente.antecedentefam.hepatitisb}
                    ]
                },
                {
                    text: 'Antecedentes patologicos:',
                    detail: [
                        { text: 'Tuberculosis', value:this.paciente.antecedentepato.tbc},
                        { text: 'SOBA/ASMA', value:this.paciente.antecedentepato.sobasma},
                        { text: 'transf. sanguínea', value:this.paciente.antecedentepato.transfsangre},
                        { text: 'padec. neurologico', value:this.paciente.antecedentepato.neurologico},
                        { text: 'alergia a medic.', value:this.paciente.antecedentepato.alergiamedic},
                        { text: 'otros', value:this.paciente.antecedentepato.otros},
                    ]
                }
            ]
        }
        },
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
            this.getPaciente({id:idpaciente, proxy:this.$proxies.pacienteProxy});

        }
    }
}