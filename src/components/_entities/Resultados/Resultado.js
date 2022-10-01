export default {
    name: 'Resultado',

    components: {
    },
    
    data () {
      return {
        
        model:{
            idresultado:'',
            registro:'',
            descripcion:'',
            estado:'',
        },

        estados: ['en proceso', 'esperando pruebas','finalizado'],
        tipos: ['final','inicial','medio'],
      }
    },
    
    methods:{
      
    }
  }
