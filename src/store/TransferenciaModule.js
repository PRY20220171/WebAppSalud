export const TransferenciaModule = {
    namespaced: true,
    state: () => ({
        transferencia: {},
        transferencias: []
    }),
    mutations: {
        listTransferencias(state, transferenciasAction) {
            state.transferencias = transferenciasAction
        },
        fillTransferencia(state, transferenciaAction) {
            state.transferencia = transferenciaAction
            console.log("se llenó la transferencia")
        }
    },
    actions: {
        getTransferencia: async function ({
            commit
        }, params) {
            let proxy = params.proxy;
            let id = params.id;
            let model = {
                id: "",
                fecharegistro:'',
                especialidadini:'',
                especialidadfin:'',
                descripcion:'',
                atencion:{                        
                    usuario:{
                        nombres:'',
                        apellidos:'',
                        docnum:'',
                        doctipo:'',
                        numcolegiatura:'',
                        centroMedico:{
                            nombre:'',
                            sector:'',
                            pais:'',
                            region:'',
                            provincia:'',
                            distrito:'',
                        }
                    },
                    paciente:{
                        nombres:'',
                        apellidos:'',
                        docnum:'',
                        doctipo:'',
                        sexo:'',
                        fecnac:'',
                        gruposang:'',
                        rh:'',
                        ocupacion: '',
                        estadocivil: '',
                    },
                    fecharegistro:'',
                    motivoconsulta:'',
                    observaciones:'',
                    especialidad:'',
                },
              }
            if (!id) {
                console.log("we here tr")
                commit('fillTransferencia', model);
            } else {
                proxy.getById(id)
                    .then(x => {
                        let model = x.data;
                        console.log('model:', model);
                        commit('fillTransferencia', model)
                    })
                    .catch(() => {});
            }
        }
    }
}