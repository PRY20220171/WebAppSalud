export const DiagnosticoModule = {
    namespaced: true,
    state: () => ({
        diagnostico: {},
        diagnosticos: []
    }),
    mutations: {
        listDiagnosticos(state, diagnosticosAction) {
            state.diagnosticos = diagnosticosAction
        },
        fillDiagnostico(state, diagnosticoAction) {
            state.diagnostico = diagnosticoAction
            console.log("se llenó el diagnostico")
        },
        addDiagnostico(state, diagnosticoAction) {
            state.diagnosticos.push (diagnosticoAction)
            console.log("se llenó el diagnostico")
        }
    },
    actions: {
        getDiagnosticos: async function ({
            commit
        }, params) {
            const data = await fetch('algo.json')
            const diagnosticos = await data.json();
            commit('listDiagnosticos', diagnosticos)
        },
        addDiagnostico: async function ({commit}, params) {
            console.log('module',params)
            commit('addDiagnostico', params)
        },
        getDiagnostico: async function ({
            commit
        }, params) {
            let proxy = params.proxy;
            let id = params.id;
            let model = {
                id: "",
                fecregistro: "",
                descripcion: "",
                estado: "",
                tipo: "",
                idatencion: "",
                resultados: [{
                    id: "",
                    registro: "",
                    descripcion: "",
                    estado: ""
                }],
                pruebas: [{
                    id: "",
                    idtipoprueba: "",
                    idpaciente: "",
                    fecresultado: "",
                    fecprueba: "",
                    resultado: 0,
                    observacion: "",
                    signosvitales: ""
                }]
            }
            if (!id) {
                commit('fillDiagnostico', model);
            } else {
                proxy.getById(id)
                    .then(x => {
                        let model = x.data;
                        console.log('model:', model);
                        commit('fillDiagnostico', model)
                    })
                    .catch(() => {});
            }
        }
    }
}