
export const UsuarioModule = {
    namespaced: true,
    state: () => ({ 
        usuario:{},
        especialidades:[
          "Alergología",
          "Cardiología",
          "Cirugía de Cabeza y Cuello",
          "Cirugía de Torax y Cardiovascular",
          "Cirugía General y Laparoscópica",
          "Cirugía Oncológica",
          "Cirugía Pediátrica",
          "Dermatología",
          "Ecografía",
          "Enfermería",
          "Endocrinología",
          "Gastroenterología",
          "Geriatría",
          "Ginecología Oncológica",
          "Ginecología y Obstetricia",
          "Hematología",
          "Mastología",
          "Medicina Física y Rehabilitación",
          "Medicina General",
          "Medicina Interna",
          "Nefrología",
          "Neumología",
          "Neurocirugía",
          "Neurología",
          "Nutrición",
          "Odontología",
          "Oftalmología",
          "Otorrinolaringología",
          "Pediatría",
          "Psicología",
          "Radiología",
          "Reumatologia",
          "Salud Mental",
          "Traumatologia y Ortopedia",
          "Urología",
        ],
        centros:[
            {
              id: '1',
              ubicacionid: '',
              ubicacion: {
                id:  "",
                pais: "Peru",
                region: "Lima",
                provincia: "Lima",
                distrito:  "Cercado",
                direccion:  "Av. 123",
              },
              nombre: 'Niño Jesús',
              sector: 'estatal',
            },{
              id: '2',
              ubicacionid: '',
              ubicacion: {
                id:  "",
                pais: "Peru",
                region: "Lima",
                provincia: "Lima",
                distrito:  "Miraflores",
                direccion:  "Av. 12345",
              },
              nombre: 'Mediplus',
              sector: 'privado',
            },{
              id: '3',
              ubicacionid: '',
              ubicacion: {
                id:  "",
                pais: "Peru",
                region: "Lima",
                provincia: "Lima",
                distrito:  "La molina",
                direccion:  "Av. 123",
              },
              nombre: 'Clínica Liset',
              sector: 'privado',
            },{
              "id": "bdca4305-2306-4398-b840-438a735d1963",
              "ubicacionid": "40477407-308d-4fa4-aa62-dcddcc5a0b39",
              "ubicacion": {
                "id": "40477407-308d-4fa4-aa62-dcddcc5a0b39",
                "pais": "Peru",
                "region": "Lima",
                "provincia": "Lima",
                "distrito": "Lima",
                "direccion": "Av. Alfonso Ugarte 825"
              },
              "nombre": "Hospital Nacional Dos de Mayo",
              "sector": "estatal"
            }
          ],
    }),
    mutations: {
        fillUsuario(state, usuarioAction){
            state.usuario=usuarioAction
        },
    },
    actions: {
        getUsuario: async function ({commit}, params){
            let proxy = params.proxy;
            let id = params.id;
            
            let model = {
                id: '',
                nombres:'',
                apellidos: '',
                password: '',
                docnum: 0,
                doctipo: '',
                correo: '',
                telefono: 0,
                direccion: '',
                procedencia: '',
                numcolegiatura: '',
                especialidad: [],
                roles: [
                    {   rol: {
                            id: '',
                            descripcion: ''
                        }
                    }
                ],centromedico: {
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
            }
            if (!id) 
                commit('fillUsuario',model);
            else {
                proxy.getById(id)
                    .then(x => {
                        model = x.data;
                        model.edad=model_edad
                        console.log('model:',model);
                        commit('fillUsuario',model)
                    })
                    .catch(() => { });
            }
        },
        getUsuarioByAutentificacion: async function ({commit}, params){
            if (!params.correo || !params.password){
                console.log('whuy')
                //commit('fillUsuario',{});
            }
            else {
                console.log('s.s')
                params.proxy.getByCorreoAndPassword(params.correo, params.password)
                    .then(x => {
                        console.log(params,'\n',x.data)
                        if(x.data.length==0) {
                            console.log('ta vacio')
                            //localStorage.setItem("access_token", "error");
                        }
                        else{
                            localStorage.setItem("access_token", x.data[0].id);
                            localStorage.setItem("nombres", x.data[0].nombres+' '+x.data[0].apellidos);
                            localStorage.setItem("rol", x.data[0].roles[0].rol.descripcion);
                            commit('fillUsuario',x.data)
                        }
                    })
                    .catch(() => { });
            }
        },
    }
}