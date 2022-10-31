
import {mapActions,mapState} from 'vuex'
export default {
    name: 'AtencionUneditable',
    components: {},
    data() {
        return {
            isLoading: false,
            tipo_sexo: { 'm':'masculino','f':'femenino','im':'intersexual masculino','fm':'intersexual femenino'},
            
            familiares: {
                P:'Padre',
                M:'Madre',
                H:'Hermano(s)',
                A:'Abuelo(s)',
                O:'Otros',
                U:'No sabe',
                N:'Ninguno',
            },
            listas:{
            resultados:{
                headers:[
                    { text: 'registro',value: 'registro'},
                    { text: 'descripcion',value: 'descripcion'},
                    { text: 'estado',value: 'estado'},
                    { text: 'tipo',value: 'tipo'},
                    { text: 'tratamientos',value: 'tratamientos'},
                ],
                items:[]
            },
            diagnosticos:{
                headers:[
                    { text: 'fecregistro',value: 'fecregistro'},
                    { text: 'descripcion',value: 'descripcion'},
                    { text: 'estado',value: 'estado'},
                    { text: 'tipo',value: 'tipo'},
                ],
                items:[]
            },
            pruebas:{
                headers:[
                    { text: 'fecresultado',value: 'fecresultado'},
                    { text: 'fecprueba',value: 'fecprueba'},
                    { text: 'resultado',value: 'resultado'},
                    { text: 'observacion',value: 'observacion'},
                    { text: 'estado',value: 'estado'},
                ],
                items:[]
            },
        }
        }
    },
    computed:{
        ...mapState('atencionModule',['atencion']),
      datosAtencion(){
        return {
            'Datos del atencion':[
                {
                    text: 'Información básica',
                    detail: [
                        { text: 'fecha registro',value: this.atencion.fecharegistro },
                        { text: 'motivo consulta', value: this.atencion.motivoconsulta },
                        { text: 'observaciones', value: this.atencion.observaciones },
                    ]
                },
                {
                    text: 'Información sobre enfermedad',
                    detail: [
                        { text: 'tiempo enfermedad', value: this.atencion.tiempoenfermedad },
                        { text: 'forma inicio',  value: this.atencion.fecnformainicioac },
                        { text: 'curso',  value: this.atencion.curso },
                    ]
                }
            ],
            'Detalles del acompanante':[
                {
                    text: '',
                    detail: [
                        { text: 'Nombres', value: this.atencion.acompanante.nombres+' '+this.atencion.acompanante.apellidos },
                        { text: this.atencion.acompanante.doctipo, value: this.atencion.acompanante.docnum },
                        { text: 'fec nac', value: this.atencion.acompanante.fecnac },
                        { text: 'parentezco', value: this.atencion.acompanante.parentezco }
                    ]
                },
                {
                    text: ' ',
                    detail: [
                        { text: 'grado instruccion', value: this.atencion.acompanante.gradoinstruccion },
                        { text: 'ocupacion', value: this.atencion.acompanante.ocupacion },
                        { text: 'telefono', value: this.atencion.acompanante.telefono },
                    ]
                }
            ],
            'Factores de riesgo':[
                {
                    text: '',
                    detail: [
                        { text: 'cuidador', value:this.atencion.facriesgo.cuidador},
                        { text: 'apetito', value:this.atencion.facriesgo.apetito},
                        { text: 'sed', value:this.atencion.facriesgo.sed},
                        { text: 'sueno', value:this.atencion.facriesgo.sueno},
                    ]
                },{
                    text: '',
                    detail: [
                        { text: 'orina', value:this.atencion.facriesgo.orina},
                        { text: 'deposiciones', value:this.atencion.facriesgo.deposiciones},
                        { text: 'estado de animo', value:this.atencion.facriesgo.estadoanimo},
                        { text: 'fec. ultima regla', value:this.atencion.facriesgo.fecultregla},
                    ]
                }
            ],
            'centro medico':[
                {
                    text: 'Información general:',
                    detail: [
                        { text: 'nombre', value:this.atencion.centromedico.nombre},
                        { text: 'sector', value:this.atencion.centromedico.sector},
                    ]
                },{
                    text: 'Detalles de ubicación',
                    detail: [
                        { text: 'pais', value:this.atencion.centromedico.ubicacion.pais},
                        { text: 'region', value:this.atencion.centromedico.ubicacion.region},
                        { text: 'provincia', value:this.atencion.centromedico.ubicacion.provincia},
                        { text: 'distrito', value:this.atencion.centromedico.ubicacion.distrito},
                        { text: 'direccion', value:this.atencion.centromedico.ubicacion.direccion},
                    ]
                }
            ],
        }
        },
    },
    mounted() {
        this.getDiagnosticos()
        this.getPruebas()
        this.getResultados()
    },
    methods: {
        getDiagnosticos() {
            this.isLoading = true;
                this.$proxies.diagnosticoProxy.getAll()
                .then(x => {
                    this.listas.diagnosticos.items = x.data
                    this.isLoading = false;
                }).catch(() => {
                    this.isLoading = false;
                });
        },
        getPruebas() {
            this.isLoading = true;
                this.$proxies.pruebaProxy.getAll()
                .then(x => {
                    this.listas.pruebas.items = x.data
                    this.isLoading = false;
                }).catch(() => {
                    this.isLoading = false;
                });
        },
        getResultados() {
            this.isLoading = true;
                this.$proxies.resultadoProxy.getAll()
                .then(x => {
                    this.listas.resultados.items = x.data
                    this.listas.resultados.items.tratamientos = x.data.tratamientos
                    this.isLoading = false;
                }).catch(() => {
                    this.isLoading = false;
                });
        },
    }
}