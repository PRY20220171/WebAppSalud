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
        ogetPaciente: async function ({commit}){
            //const data = await fetch ('algo.json')
            //const paciente = await data.json();
            let model = {}
            /*
            let id = this.$route.params.id;
            if (!id) return;
            
            this.$proxies.pacienteProxy.getById(id)
                .then(x => {
                    model = x.data;
                })
                .catch(() => { });
                */

            const paciente = await model;
            console.log("en vuex", paciente)

            commit('fillPaciente',paciente)
        }
    }
}