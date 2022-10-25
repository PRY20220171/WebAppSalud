

   export default {
    name: 'Usuario',
    data () {
      return {

        esPerfil:false,

        model:{
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
          ]
      },

        tipo_doc: ['DNI', 'Carnet de Extranjería', 'Pasaporte'],
        roles: [
          {nombre:'Administrador',descripcion:'Acceso completo al sistema'},
          {nombre:'Médico',descripcion:'Acceso parcial al sistema'},
          {nombre:'Enfermero',descripcion:'Acceso parcial al sistema'}
        ],
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
        
      }
    },
    computed:{
        datosUsuario(){
          return [{
              name:this.model.doctipo,
              valor:this.model.docnum,
              icon:'mdi-card-account-details'
            },{
              name:'Correo',
              valor:this.model.correo,
              icon:'mdi-email'
            },{
              name:'Telefono',
              valor:this.model.telefono,
              icon:'mdi-phone'
            },{
              name:'Dirección',
              valor:this.model.direccion,
              icon:'mdi-city'
            },{
              name:'Procedencia (Nacionalidad)',
              valor:this.model.procedencia,
              icon:'mdi-map-marker'
            },{
              name:'Número de colegiatura',
              valor:this.model.numcolegiatura,
              icon:'mdi-medical-bag'
            },{
              name:'Especialidades',
              valor:this.model.especialidad,
              icon:'mdi-account-tie'
            },
          ]
        },
    },
    methods:{
      cancel(){
        window.history.back()
      },
      getUsuario() {
            let id = ''

            if(this.esPerfil)
              id=localStorage.getItem("access_token").toString();
            else 
              this.$route.params.id
            
            if(!id) return;

            this.$proxies.userProxy.getById(id)
            .then(x => {
                this.model = x.data;
                console.log('model:',this.model);
            })
            .catch(() => { });
      }
    },
    mounted(){
      //console.log(this.$route)
      if(this.$route.path== '/perfil') this.esPerfil=true

      this.getUsuario()
      this.model.rol = this.model.roles[0].rol.descripcion
      this.token_usuariotem = localStorage.getItem("access_token").toString();
    }

  }
