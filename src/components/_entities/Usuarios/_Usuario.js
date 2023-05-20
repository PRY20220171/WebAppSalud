


import CentroMedico from '@/views/_createOrUpdate/Usuarios/CentroMedicoView.vue';
import {mapState} from 'vuex'

  export default {
    name: 'RegistrarUsuario',
    components: {
      CentroMedico,
    },
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
        rules:{
          model:{
            nombres: [
              (v) => !!v || 'Nombre es obligatorio',
            ],
            apellidos: [ (v) => !!v || 'Apellido es obligatorio',],
            password: [ (v) => !!v || 'Contraseña es obligatoria',],
            correo: [
              (v) => !!v || 'Correo es obligatorio',
              (v) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v) || 'Correo no valido',
            ],
            correoExists: false,
            docnum: [
              (v) => !!v || 'Nro de documento es obligatorio',
            ],
            telefono:[
              (v) => !!v || 'Telefono es obligatorio',
            ]
          }
        },
       // medical:false,
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
          {value:'enfermero',nombre:'Enfermero',descripcion:'Acceso parcial al sistema'},
          {value:'operador',nombre:'Operador',descripcion:'Acceso parcial al sistema'}
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
    watch:{
      'model.roles'(val){
        console.log(val)
      }
    },
    methods:{
      async checkUserExists() {
        try {
          const response = await this.$proxies.userProxy.getByCorreo(this.model.correo);
          //const response = await axios.get(`/api/users?email=${this.email}`);
          //console.log(response);
          if (response.data.length !== 0){
            this.rules.model.correoExists = true; // Assuming the server responds with an "exists" property indicating user existence
          } else {
            this.rules.model.correoExists = false;
          }
          //console.log(this.rules.model.correoExists);
        } catch (error) {
          console.error(error);
          // Handle error case, e.g., show an error message
        }
      },
      cancel(){
        window.history.back()
      },
      save(){
        let id = ''
        console.log(this.model)
        if(this.model.nombres==''|| this.model.apellidos==''|| this.model.docnum==''|| this.model.doctipo=='' ||
          this.model.roles[0].rol.descripcion==''){

          this.alertType='warning',
          this.mensaje='Falta informacion obligatoria'
          //|| this.model.password==''
        }
        else{
          if ((this.model.roles[0].rol.descripcion=='medico' || this.model.roles[0].rol.descripcion=='enfermero') && this.model.numcolegiatura=='') {

            this.alertType='warning',
            this.mensaje='Falta informacion obligatoria'
          }
          else{
            if(this.esPerfil)
                id=localStorage.getItem("access_token").toString();
            else {
                this.$route.params.id
                console.log(this.$route.params, 'params')
              }

            if(!this.$route.params.id) {
                this.$proxies.userProxy.register(this.model)
            .then(x => {})
            .catch(() => { });
            }
            else{
              console.log('model:',this.model)
             console.log('user:',this.$proxies.userProxy.getById(this.$route.params.id) )
                 this.$proxies.userProxy.update(this.$route.params.id,this.model)
                .then(x => {})
                .catch(() => { });
            }
            this.alertType='success',
            this.mensaje='Se guardó con éxito'
          }
        }
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
