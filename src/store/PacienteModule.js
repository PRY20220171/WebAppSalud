
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
        }
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
        ogetPaciente: async function ({commit}, params){
            let proxy = params.proxy;
            let id = params.id;
            let model = {}
            console.log('proxy');
            console.log(proxy)
            console.log('id: ',id);
            console.log('en vuex 1');
            //let id = this.$route.params.id;
            if (!id) return;
            
            proxy.getById(id)
                .then(x => {
                    model = x.data;
                    console.log('model:');
                    console.log(model);
                })
                .catch(() => { });
                

            const paciente = await proxy.getById(id);
            console.log("en vuex 2", paciente)

            commit('fillPaciente',paciente)
        },
        setPaciente: async function ({commit}, value){
            const paciente = await value;
            console.log("set paciente")
            console.log(paciente)
            commit('fillPaciente',paciente)
        }
    }
}