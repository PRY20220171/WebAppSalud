export const ResultadoModule = {
    namespaced: true,
    state: () => ({
      resultado: {}
    }),
    mutations: {
      fillAtencion(state, resultadoAction) {
        state.resultado = resultadoAction
        console.log("se llenó el resultado")
      }
    },
    actions: {
      updatePacienteOnCreate: async function ({
        commit
      }, params) {
        console.log('params');
        console.log(params);
        let model = {
          id: "",
          idpaciente: params.idpaciente,
          paciente: {},
          idusuarioregistro: "",
          fecharegistro: "",
          motivoconsulta: "",
          observaciones: "",
          tiempoenfermedad: "",
          formainicio: "",
          curso: "",
          idacompanante: "",
          acompanante: {
            id: "",
            nombres: "",
            apellidos: "",
            docnum: "",
            doctipo: "",
            fecnac: "",
            telefono: "",
            gradoinstruccion: "",
            ocupacion: "",
            parentezco: ""
          },
          idfacriesgo: "",
          facriesgo: {
            id: "",
            cuidador: "",
            apetito: "",
            sed: "",
            sueno: "",
            orina: "",
            deposiciones: "",
            estadoanimo: "",
            fecultregla: ""
          },
          idcentromedico: "",
          centromedico: {
            id: "",
            ubicacionid: "",
            ubicacion: {
              id: "",
              pais: "",
              region: "",
              provincia: "",
              distrito: "",
              direccion: ""
            },
            nombre: "",
            sector: ""
          }
        };
        params.pacienteProxy.getById(params.idpaciente)
          .then(x => {
            let pacientemodel = x.data;
            model.paciente = pacientemodel;
            console.log('model:', model);
            commit('fillAtencion', model)
          })
          .catch(() => {});
      },
      getAtencion: async function ({
        commit
      }, params) {
        let proxy = params.proxy;
        let id = params.id;
        let model = {
          id: "",
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
          idusuarioregistro: "",
          fecharegistro: "",
          motivoconsulta: "",
          observaciones: "",
          tiempoenfermedad: "",
          formainicio: "",
          curso: "",
          idacompanante: "",
          acompanante: {
            id: "",
            nombres: "",
            apellidos: "",
            docnum: "",
            doctipo: "",
            fecnac: "",
            telefono: "",
            gradoinstruccion: "",
            ocupacion: "",
            parentezco: ""
          },
          idfacriesgo: "",
          facriesgo: {
            id: "",
            cuidador: "",
            apetito: "",
            sed: "",
            sueno: "",
            orina: "",
            deposiciones: "",
            estadoanimo: "",
            fecultregla: ""
          },
          idcentromedico: "",
          centromedico: {
            id: "",
            ubicacionid: "",
            ubicacion: {
              id: "",
              pais: "",
              region: "",
              provincia: "",
              distrito: "",
              direccion: ""
            },
            nombre: "",
            sector: ""
          }
        };
        if (!id) {
          commit('fillAtencion', model);
        } else {
          proxy.getById(id)
            .then(x => {
              let model = x.data;
              console.log('model:', model);
              commit('fillAtencion', model)
            })
            .catch(() => {});
        }
  
      },
    }
  }