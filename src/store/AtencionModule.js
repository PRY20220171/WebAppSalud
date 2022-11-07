export const AtencionModule = {
  namespaced: true,
  state: () => ({
    atencion: {}
  }),
  mutations: {
    fillAtencion(state, atencionAction) {
      state.atencion = atencionAction
      console.log("se llenó la atencion",state.atencion)
    }
  },
  actions: {
    uuidv4() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
      );
    },
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
        },
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
      let id_Atencion= ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
          (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
          ).toString(16)
        );
      let model = {
        id: id_Atencion,
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
        },
        signosvitales:{
          temperatura:'',
          presionArterial:'',
          frecuenciaCardiaca:'',
          factoresReumatoides:'',
          peso:'',
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