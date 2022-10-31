
import {mapActions,mapState} from 'vuex'
export default {
    name: 'PacienteUneditable',
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
        }
    },
    computed:{
        ...mapState('pacienteModule',['paciente']),
      datosPaciente(){
        return {
            'Datos del paciente':[
                {
                    text: 'Información básica',
                    detail: [
                        { text: 'Nombres',value: this.paciente.nombres+" "+this.paciente.apellidos },
                        { text: this.paciente.doctipo, value: this.paciente.docnum },
                        { text: 'Tipo de Sangre', value: this.paciente.rh+" "+this.paciente.gruposang },
                    ]
                },
                {
                    text: 'Información básica adicional',
                    detail: [
                        { text: 'telefono', value: this.paciente.telefono },
                        { text: 'Fec. nacimiento',  value: this.paciente.fecnac },
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
                        { text: 'Tuberculosis', value:this.transformarFamiliar(this.paciente.antecedentefam.tbc)},
                        { text: 'VIH/SIDA', value:this.transformarFamiliar(this.paciente.antecedentefam.vihsida)},
                        { text: 'diabetes', value:this.transformarFamiliar(this.paciente.antecedentefam.diabetes)},
                        { text: 'epilepsia', value:this.transformarFamiliar(this.paciente.antecedentefam.epilepsia)},
                        { text: 'alergia a medic.', value:this.transformarFamiliar(this.paciente.antecedentefam.alergiamedic)},
                        { text: 'violencia fam.', value:this.transformarFamiliar(this.paciente.antecedentefam.violenciafam)},
                        { text: 'alcoholismo', value:this.transformarFamiliar(this.paciente.antecedentefam.alcoholismo)},
                        { text: 'drogradiccion', value:this.transformarFamiliar(this.paciente.antecedentefam.drogradiccion)},
                        { text: 'hepatitisb', value:this.transformarFamiliar(this.paciente.antecedentefam.hepatitisb)}
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
    },
    methods: {
        transformarFamiliar(value){
            let arr =[]
            for (let i = 0; i < value.length; i++) {
                //console.log(i,' ',value[i], ' ',this.familiares[value[i]] )
                arr.push(this.familiares[value[i]])   
            }
            //console.log(arr)
            return arr.join()
        }
    }
}