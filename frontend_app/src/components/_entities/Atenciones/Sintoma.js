export default {
    name: 'Sintoma',

    components: {
    },
    
    data () {
      return {
        
        model:{
            idsintoma: '',
            idatencion: '',
            signossintomas: '',
        },
        items:[
            'Fiebre','Diarrea','Fatiga','Dolores musculares','Tos'
        ],
        loading: false,
        search: '',
        selected: [],
      }
    },
    
    methods: {
      addSintoma(value){
        this.items.push({value})
      }
    },
  }