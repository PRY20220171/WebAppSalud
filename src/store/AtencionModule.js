
export const AtencionModule = {
    namespaced: true,
    state: () => ({ 
        atencion:{},
    }),
    mutations: {
        fillAtencion(state, atencionAction){
            state.atencion=atencionAction
            console.log("se llenó el atencion")
        },
    },
    actions: {
        getAtencion: async function ({commit}, params){
            let proxy = params.proxy;
            let id = params.id;
            let acompanante={
                id: '',
                nombres: '',
                apellidos: '',
                docnum: '',
                doctipo: '',
                fecnac: '',
                telefono: '',
                gradoinstruccion: '',
                ocupacion: '',
                parentezco: '',
            }
            let centromedico={
                id: '',
                idubicacion: '',
                nombre: '',
                sector: '',
            }
            let facriesgo={
                id:'',
                cuidador: '',
                apetito: '',
                sed: '',
                sueno: '',
                orina: '',
                deposiciones: '',
                estadoanimo: '',
                fecultregla: '',
            }
            let sintoma ={
              id:'',
              idatencion: '',
              signossintomas: '',
            }

            let model = {
                id: '',
                pacienteid: '',
                usuarioregistroid: '',
                idsignosvitales: '',
                fecharegistro: '',
                motivoconsulta: '',
                observaciones: '',
                tiempoenfermedad: '',
                formainicio: '',
                curso: '',
                signossintomas: '',
                idacompanante: '',
                idfacriesgo: '',
                idcentromedic: '',

                paciente:params.paciente,
                acompanante:acompanante,
                facriesgo:facriesgo,
                centromedico:centromedico
            }
            console.log('proxy');
            console.log(proxy)
            console.log('id: ',id);
            console.log('en vuex 1');
            //let id = this.$route.params.id;
            if (!id) 
                commit('fillAtencion',model);
            else {
                proxy.getById(id)
                    .then(x => {
                        model = x.data;
                        console.log('model:',model);
                        commit('fillAtencion',model)
                    })
                    .catch(() => { });
            }
        },
    }
}