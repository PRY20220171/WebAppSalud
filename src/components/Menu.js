
  export default {
    data() {
      return {
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
          name: ['Usuarios','mdi-account-circle'],
          submenus: [
            ['Mi perfil','mdi-account-outline','/perfil'],
            ['Registrar usuario','mdi-account-plus-outline','/Usuarios/create'],
            ['Ver usuarios','mdi-account-multiple-outline','/Usuarios']
          ]
        },{
          name: ['Pacientes','mdi-account-circle'],
          submenus: [
            ['Registrar paciente','mdi-account-plus-outline','/pacientes/create'],
            ['Ver pacientes','mdi-account-multiple-outline','/pacientes']
          ]
        },{
          name: ['Consultas','mdi-file'],
          submenus: [
            ['Registrar consulta','mdi-file-plus-outline','/Consultas/create'],
            ['Ver consultas','mdi-file-multiple-outline','/Consultas']
          ]
        },{
          name: ['Diagnósticos','mdi-file'],
          submenus: [
            ['Registrar diagnóstico','mdi-file-plus-outline','/Diagnosticos/create'],
            ['Ver diagnósticos','mdi-file-multiple-outline','/Diagnosticos']
          ]
        }, {
          name: ['Pruebas','mdi-file'],
          submenus: [
            ['Registrar prueba','mdi-file-plus-outline','/Pruebas/create'],
            ['Ver pruebas','mdi-file-multiple-outline','/Pruebas']
          ]
        }, {
          name: ['Resultados','mdi-file'],
          submenus: [
            ['Registrar resultados','mdi-file-plus-outline','/Resultados/create'],
            ['Ver resultados','mdi-file-multiple-outline','/Resultados']
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
    }
  }