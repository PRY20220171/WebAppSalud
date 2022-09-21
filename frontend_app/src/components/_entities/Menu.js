
  export default {
    data: () => ({
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
            ['Mi perfil','mdi-account-outline','/'],
            ['Registrar usuario','mdi-account-plus-outline','/registrar_paciente'],
            ['Ver usuarios','mdi-account-multiple-outline','/registrar_paciente']
          ]
        },{
          name: ['Pacientes','mdi-account-circle'],
          submenus: [
            ['Registrar paciente','mdi-account-plus-outline','/registrar_paciente'],
            ['Ver pacientes','mdi-account-multiple-outline','/registrar_paciente']
          ]
        },{
          name: ['Consultas','mdi-file'],
          submenus: [
            ['Registrar consulta','mdi-file-plus-outline','/registrar_paciente'],
            ['Ver consultas','mdi-file-multiple-outline','/registrar_paciente']
          ]
        },{
          name: ['Diagnósticos','mdi-file'],
          submenus: [
            ['Registrar diagnóstico','mdi-file-plus-outline','/registrar_paciente'],
            ['Ver diagnósticos','mdi-file-multiple-outline','/registrar_paciente']
          ]
        }, {
          name: ['Pruebas','mdi-file'],
          submenus: [
            ['Registrar prueba','mdi-file-plus-outline','/registrar_paciente'],
            ['Ver pruebas','mdi-file-multiple-outline','/registrar_paciente']
          ]
        }, {
          name: ['Resultados','mdi-file'],
          submenus: [
            ['Registrar resultados','mdi-file-plus-outline','/registrar_paciente'],
            ['Ver resultados','mdi-file-multiple-outline','/registrar_paciente']
          ]
        },{
          name: ['Cerrar Sesión','mdi-account'],
          submenus: [
            ['Cerrar','mdi-door','/']
          ]
        },
      ]
    }),
  }