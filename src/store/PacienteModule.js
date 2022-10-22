
export const PacienteModule = {
    namespaced: true,
    state: () => ({ 
        paciente:{},
        pacientes : []
    }),
    mutations: {
        listPacientes(state, pacientesAction){
            state.pacientes=pacientesAction
        },
        fillPaciente(state, pacienteAction){
            state.paciente=pacienteAction
            console.log("se llenó el paciente")
        },
    },
    actions: {
        ogetPacientes: async function ({commit}){
            //const data = await fetch ('algo.json')
            //const pacientes = await data.json();

            this.$proxies.pacienteProxy.getAll()
                .then(x => {
                    //this.collection = x.data;
                    this.collection.items = x.data;
                    if (this.collection.items.length>0)
                        this.collection.hasItems=true;
                    this.collection.total=this.collection.items.length

                    this.isLoading = false;
                }).catch(() => {
                    this.isLoading = false;
                });

            commit('listPacientes',pacientes)
        },
        getPaciente: async function ({commit}, params){
            let proxy = params.proxy;
            let id = params.id;
            let model_edad={
                anios:0,
                meses:0,
                dias:0,
                text:''
            }
            let antecedentefam={
              id: '',
                tbc: [],
                vihsida: [],
                diabetes: [],
                epilepsia: [],
                alergiamedic: [],
                violenciafam: [],
                alcoholismo: [],
                drogradiccion: [],
                hepatitisb: [],
                otros: '',
            }
            let antecedentepato={
              id:'',
                tbc: '',
                sobasma: '',
                transfsangre: '',
                neurologico: '',
                alergiamedic: '',
                otros: '',
            }
            let antecedenteperi={
                id:'',
                tipoembarazo: '',
                embarazoriesgo: '',
                controlprenatal: '',
                nroembarazo: '',
                edadgestalnac: '',
                pesoalnac: '',
                tallaalnac: '',
                perimcefalico: '',
                respllanto: '',
            }
            let antecedentepsico ={
              id:'',
                apoyofam: '',
                edadgestante: '',
                nrohijos: '',
                embarazoespac: '',
                tipotrabajo: '',
                violenciaocupacional: '',
                vidasocial: '',
                perteneceorg: '',
            }
            let ubicacion={
                id:  "",
                pais: "Peru",
                region: "Lima",
                provincia: "Lima",
                distrito:  "",
                direccion:  "",
            }

            let model = {
                id: "",
                nombres:  "",
                apellidos:  "",
                docnum:  "",
                doctipo:  "",
                sexo:  "",
                gruposang:  "",
                rh:  "",
                telefono:  "",
                gradoinstruccion:  "",
                ocupacion:  "",
                estadocivil:  "",
                fecnac:  "",
                edad:model_edad,
                idlugarnac:  "",
                lugarnac: ubicacion,
                iddomicilioact:  "",
                domicilioact: ubicacion,
                idantecedenteperi:  "",
                antecedenteperi: antecedenteperi,
                idantecedentepsico:  "",
                antecedentepsico: antecedentepsico,
                idantecedentefam:  "",
                antecedentefam: antecedentefam,
                idantecedentepato:  "",
                antecedentepato: antecedentepato
            }
            console.log('proxy');
            console.log(proxy)
            console.log('id: ',id);
            console.log('en vuex 1');
            //let id = this.$route.params.id;
            if (!id) 
                commit('fillPaciente',model);
            else {
                proxy.getById(id)
                    .then(x => {
                        model = x.data;
                        model.edad=model_edad
                        console.log('model:',model);
                        commit('fillPaciente',model)
                    })
                    .catch(() => { });
            }
        },
    }
}