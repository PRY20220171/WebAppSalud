
  export default {
    mounted() {
      this.__testfunction();
    },
    data() {
      return {
        route: '',
        mainroute: '',
        subroute: '',
      drawer: false,
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
      menu:[
        {
          name: ['Usuarios','mdi-badge-account-horizontal'],
          submenus: [
            ['Mi perfil','mdi-account-circle-outline','Mi Perfil'],
            ['Registrar usuario','mdi-account-plus-outline','Registro Usuario'],
            ['Ver usuarios','mdi-account-multiple-outline','Usuarios']
          ]
        },{
          name: ['Pacientes','mdi-account-supervisor-circle'],
          submenus: [
            ['Registrar paciente','mdi-account-plus-outline','Registro Paciente'],
            ['Ver pacientes','mdi-account-multiple-outline','Pacientes']
          ]
        },{
          name: ['Consultas','mdi-book-account'],
          submenus: [
            ['Registrar consulta','mdi-file-plus-outline','Registro Consulta'],
            ['Ver consultas','mdi-file-multiple-outline','Consultas']
          ]
        },{
          name: ['Diagnósticos','mdi-medical-bag'],
          submenus: [
            ['Registrar diagnóstico','mdi-file-plus-outline','Registro Diagnostico'],
            ['Ver diagnósticos','mdi-file-multiple-outline','Diagnosticos']
          ]
        }, {
          name: ['Pruebas','mdi-needle'],
          submenus: [
            ['Registrar prueba','mdi-file-plus-outline','Registro Prueba'],
            ['Ver pruebas','mdi-file-multiple-outline','Pruebas']
          ]
        }, {
          name: ['Resultados','mdi-clipboard-pulse-outline'],
          submenus: [
            ['Registrar resultados','mdi-file-plus-outline','Registro Resultado'],
            ['Ver resultados','mdi-file-multiple-outline','Resultados']
          ]
        }, {
          name: ['Transferencias','mdi-transfer'],
          submenus: [
            ['Registrar transferencias','mdi-file-plus-outline','Registro Transferencia'],
            ['Ver transferencias','mdi-file-multiple-outline','Transferencias']
          ]
        }
      ]
    }
    },
    methods:{
      logout() {
        console.log('logged out');
        localStorage.removeItem("access_token");
        this.$parent.$parent.isLoggedIn = false;
        //this.$proxies.identityProxy
        //  .logout()
        //  .then(() => {
        //    localStorage.removeItem("access_token");
        //    this.$parent.isLoggedIn = false;
        //  })
        //  .catch(() => {
        //    this.$notify({
        //      group: "global",
        //      type: "is-danger",
        //      text: "Ocurrió un error inesperado",
        //    });
        //  });
      },
      __testfunction(){
        this.$router.onReady(()=>{
          this.route = this.$route.name;
          console.log(this.route);
          if (this.route==='Mi Perfil') {
            //No se puere partir el nombre de la ruta
            this.mainroute = this.route;
          }
          else if(this.route.split(' ').length >= 2){
            // console.log(this.route.split(' '))
            this.mainroute = this.route.split(' ',2)[1];
            this.subroute = this.route.split(' ')[0];
          }
          else{
            this.mainroute = this.route;
          }
        })
      },
    }
  }