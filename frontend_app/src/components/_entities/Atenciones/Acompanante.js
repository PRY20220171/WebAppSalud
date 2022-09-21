export default {
    name: 'Acompanante',

    components: {
    },
    
    data () {
      return {
        
        model:{
            idacompanante: '',
            nombres: '',
            apellidos: '',
            docnum: '',
            doctipo: '',
            fecnac: '',
            telefono: '',
            gradoinstruccion: '',
            ocupacion: '',
            parentezco: '',
        },

        tipo_parentezco: ['Padre', 'Madre','Hermano(a)','Tío(a)','Primo(a)','Hijo(a)','Nieto(a)','Sobrino(a)','Ninguno'],

      }
    },
    
    methods:{
    }
  }