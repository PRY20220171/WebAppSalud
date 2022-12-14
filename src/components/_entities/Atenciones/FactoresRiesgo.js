import {mapState} from 'vuex'
export default {
    name: 'FactoresRiesgo',

    components: {
    },
    
    data () {
      return {
        
        model:{
            idfacriesgo: '',
            cuidador: '',
            apetito: '',
            sed: '',
            sueno: '',
            orina: '',
            deposiciones: '',
            estadoanimo: '',
            fecultregla: '',
        },
        
        tipo_parentezco: ['Padre', 'Madre','Hermano(a)','Tío(a)','Primo(a)','Hijo(a)','Nieto(a)','Sobrino(a)','Sin parentezco','Sin cuidador'],

      }
    },
    
    computed:{
      ...mapState('atencionModule',['atencion']),
    },
    methods:{
    }
  }