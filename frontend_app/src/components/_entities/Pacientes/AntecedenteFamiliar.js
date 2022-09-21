export default {
    name: 'AntecedenteFamiliar',

    components: {
    },
    
    data () {
      return {
        
        model:{
          antecedenteFamiliarId: '',
            tbc: '',
            vihsida: '',
            diabetes: '',
            epilepsia: '',
            alergiamedic: '',
            violenciafam: '',
            alcoholismo: '',
            drogradiccion: '',
            hepatitisb: '',
        },

        familiares: [
            {show:'Padre', val:'P'},
            {show:'Madre', val:'M'},
            {show:'Hermano(s)', val:'H'},
            {show:'Abuelo(s)', val:'A'},
            {show:'Otros', val:'O'},
        ],
        select_icons:[ 'mdi-close-box', 'mdi-checkbox-blank-outline'],
      }
    },
    
    methods:{
    }
  }