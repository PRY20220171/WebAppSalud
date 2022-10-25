

  import {mapState} from 'vuex'

  export default {
    name: 'RegistrarUsuario',
    data () {
      return {
        token_usuariotem:1,
        model : {
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

        tipos_alerta:{
            s:'success',
            i:'info',
            w:'warning',
            e:'error'
          },
          alertType:'info',
          mensaje:'Por favor completar la información necesaria antes de guardar',

        cambiar_pass:false,
        password_verif:'',
        nueva_password:'',
        nueva_password_verif:'',

        esPerfil:false,

        tipo_doc: ['DNI', 'Carnet de Extranjería', 'Pasaporte'],
        roles: [
          {value:'administrador',nombre:'Administrador',descripcion:'Acceso completo al sistema'},
          {value:'medico',nombre:'Médico',descripcion:'Acceso parcial al sistema'},
          {value:'enfermero',nombre:'Enfermero',descripcion:'Acceso parcial al sistema'}
        ],
        
      }
    },
    computed:{
        ...mapState('UsuarioModule',['usuario']),
        ...mapState('UsuarioModule',['especialidades']),
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
      save(){
        let id = ''

        if(this.esPerfil)
            id=localStorage.getItem("access_token").toString();
        else 
            this.$route.params.id
        
        if(!id) {
            this.$proxies.userProxy.register(this.model)
        .then(x => {})
        .catch(() => { });
        }
        else{
            this.$proxies.userProxy.update(id,this.model)
            .then(x => {})
            .catch(() => { });
        }
        this.alertType='success',
        this.mensaje='Se guardó con éxito'
      },
      getUsuario() {
            let id = ''

            if(this.esPerfil)
              id=localStorage.getItem("access_token").toString();
            else 
              id=this.$route.params.id
            
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
      this.token_usuariotem = localStorage.getItem("access_token").toString();
      if(this.$route.path== '/perfil/editar') this.esPerfil=true

      this.getUsuario()
      this.model.rol = this.model.roles[0].rol.descripcion
    }

  }
