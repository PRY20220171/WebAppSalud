


import CentroMedico from '@/views/_createOrUpdate/Usuarios/CentroMedicoView.vue';
import {mapState, mapActions} from 'vuex'

  export default {
    name: 'RegistrarUsuario',
    components: {
      CentroMedico,
    },
    data () {
      return {
        token_usuariotem:1,
       /* usuario : {
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
        },*/
        rules:{
          usuario:{
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
              name:this.usuario.doctipo,
              valor:this.usuario.docnum,
              icon:'mdi-card-account-details'
            },{
              name:'Correo',
              valor:this.usuario.correo,
              icon:'mdi-email'
            },{
              name:'Telefono',
              valor:this.usuario.telefono,
              icon:'mdi-phone'
            },{
              name:'Dirección',
              valor:this.usuario.direccion,
              icon:'mdi-city'
            },{
              name:'Procedencia (Nacionalidad)',
              valor:this.usuario.procedencia,
              icon:'mdi-map-marker'
            },{
              name:'Número de colegiatura',
              valor:this.usuario.numcolegiatura,
              icon:'mdi-medical-bag'
            },{
              name:'Especialidades',
              valor:this.usuario.especialidad,
              icon:'mdi-account-tie'
            },
          ]
        },
    },
    watch:{
      'usuario.roles'(val){
        console.log(val)
      }
    },
    created() {
      let id = this.$route.params.id;
      this.getUsuario({
        id: id,
        proxy: this.$proxies.userProxy
      });
      console.log(id, this.usuario)
     // this.getUsuario(this.usuario.id);
    },
    methods:{
      
      ...mapActions('UsuarioModule', ['getUsuario']),
      async checkUserExists() {
        try {
          const response = await this.$proxies.userProxy.getByCorreo(this.usuario.correo);
          //const response = await axios.get(`/api/users?email=${this.email}`);
          //console.log(response);
          if (response.data.length !== 0){
            this.rules.usuario.correoExists = true; // Assuming the server responds with an "exists" property indicating user existence
          } else {
            this.rules.usuario.correoExists = false;
          }
          //console.log(this.rules.usuario.correoExists);
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
        console.log(this.usuario)
        if(this.usuario.nombres==''|| this.usuario.apellidos==''|| this.usuario.docnum==''|| this.usuario.doctipo=='' ||
          this.usuario.roles[0].rol.descripcion==''){

          this.alertType='warning',
          this.mensaje='Falta informacion obligatoria'
          //|| this.usuario.password==''
        }
        else{
          if ((this.usuario.roles[0].rol.descripcion=='medico' || this.usuario.roles[0].rol.descripcion=='enfermero') && this.usuario.numcolegiatura=='') {

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
                this.$proxies.userProxy.register(this.usuario)
            .then(x => {})
            .catch(() => { });
            }
            else{
              console.log('usuario:',this.usuario)
             console.log('user:',this.$proxies.userProxy.getById(this.$route.params.id) )
                 this.$proxies.userProxy.update(this.$route.params.id,this.usuario)
                .then(x => {})
                .catch(() => { });
            }
            this.alertType='success',
            this.mensaje='Se guardó con éxito'
          }
        }
      },
      getUser() {
            let id = ''

            if(this.esPerfil)
              id=localStorage.getItem("access_token").toString();
            else
              id=this.$route.params.id

            if(!id) return;
/*
            this.$proxies.userProxy.getById(id)
            .then(x => {
                this.usuario = x.data;
                console.log('usuario:',this.usuario, "user", this.usuario);
            })
            .catch(() => { });*/
      }
    },
    mounted(){
      //console.log(this.$route)
      this.token_usuariotem = localStorage.getItem("access_token").toString();
      if(this.$route.path== '/perfil/editar') this.esPerfil=true

      this.getUser()
      //this.usuario.rol = this.usuario.roles[0].rol.descripcion
    }

  }
