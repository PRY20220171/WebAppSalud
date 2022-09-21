export default {
    name: 'Diagnostico',

    components: {
    },
    
    data () {
      return {
        
        model:{
            iddiagnostico: '',
            fecregistro: '',
            descripcion: '',
            estado: '',
            tipo: '',
        },

        estados: ['en proceso', 'esperando pruebas','finalizado'],
        tipos: ['final','inicial','medio'],
      }
    },
    
    methods:{
    }
  }
