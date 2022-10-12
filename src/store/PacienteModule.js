export const PacienteModule = {
    namespaced: true,
    state: () => ({ 
        pacientex:{},
        pacientes : []
    }),
    mutations: {
        listPacientes(state, pacientesAction){
            state.pacientes=pacientesAction
        },
        fillPaciente(state, pacienteAction){
            state.pacientex=pacienteAction
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
            //const pacientex = await data.json();
            let model = {}
            
            console.log( 'here',$route)
            let id = this.$route.params.id;
            if (!id) return;
            
            this.$proxies.pacienteProxy.getById(id)
                .then(x => {
                    model = x.data;
                })
                .catch(() => { });
                

            const pacientex = await model;
            console.log("en vuex", model)

            commit('fillPaciente',pacientex)
        }
    }
}