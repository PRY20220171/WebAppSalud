export default {
    name: 'Nino',

    components: {
    },
    
    data () {
      return {
        
        model:{
          ninoId:'',
            Tipoembarazo: '',
            Embarazoriesgo: '',
            Controlprenatal: '',
            Nroembarazo: '',
            Edadgestalnac: '',
            Pesoalnac: '',
            Tallaalnac: '',
            Perimcefalico: '',
            Respllanto: '',
        },

        tipo_embarazo: ['Normal', 'complicado'],
        tipo_riesgo: ['Si', 'No'],
        tipo_control: ['Si', 'No'],

      }
    },
    
    methods:{
    }
  }

