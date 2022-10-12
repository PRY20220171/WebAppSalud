export const DiagnosticoModule = {
    state: () => ({ 
        diagnostico:{},
        diagnosticos : []
    }),
    mutations: {
        listDiagnosticos(state, diagnosticosAction){
            state.diagnosticos=diagnosticosAction
        },
        fillDiagnostico(state, diagnosticoAction){
            state.diagnostico=diagnosticoAction
        }
    },
    actions: {
        getDiagnosticos: async function ({commit}){
            const data = await fetch ('algo.json')
            const diagnosticos = await data.json();
            commit('listDiagnosticos',diagnosticos)
        },
        getDiagnostico: async function ({commit}){
            const data = await fetch ('algo.json')
            const diagnostico = await data.json();
            commit('fillDiagnostico',diagnostico)
        }
    }
}