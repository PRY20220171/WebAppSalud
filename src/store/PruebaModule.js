export const PruebaModule = {
    namespaced: true,
    state: () => ({
        prueba: {},
        pruebas: []
    }),
    mutations: {
        listPruebas(state, pruebasAction) {
            state.pruebas = pruebasAction
        },
        fillPrueba(state, pruebaAction) {
            state.prueba = pruebaAction
            console.log("se llenó la prueba")
        }
    },
    actions: {
        getPrueba: async function ({
            commit
        }, params) {
            let proxy = params.proxy;
            let id = params.id;
            let model = {
                id: "",
                idtipoprueba: "",
                tipoprueba: {
                  id: "",
                  idmedida: "",
                  medida: {
                    id: "",
                    nombre: "",
                    descripcion: ""
                  },
                  idcategoriaprueba: "",
                  categoriaprueba: {
                    id: "",
                    nombre: "",
                    descripcion: ""
                  },
                  nombre: "",
                  descripcion: ""
                },
                idpaciente: "",
                paciente: {
                  id: "",
                  nombres: "",
                  apellidos: "",
                  docnum: "",
                  doctipo: "",
                  sexo: "",
                  gruposang: "",
                  rh: "",
                  telefono: "",
                  gradoinstruccion: "",
                  ocupacion: "",
                  estadocivil: "",
                  fecnac: "",
                  idlugarnac: "",
                  iddomicilioact: "",
                  idantecedenteperi: "",
                  idantecedentepsico: "",
                  idantecedentefam: "",
                  idantecedentepato: ""
                },
                fecresultado: "",
                fecprueba: "",
                resultado: 0,
                observacion: "",
                signosvitales: ""
              }
            if (!id) {
                commit('fillPrueba', model);
            } else {
                proxy.getById(id)
                    .then(x => {
                        let model = x.data;
                        console.log('model:', model);
                        commit('fillPrueba', model)
                    })
                    .catch(() => {});
            }
        }
    }
}