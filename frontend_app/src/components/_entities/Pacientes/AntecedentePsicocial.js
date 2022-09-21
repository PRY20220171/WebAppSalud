export default {
    name: 'AntecedentePsicosocial',

    components: {
    },
    
    data () {
      return {
        
        model:{
            apoyofam: '',
            edadgestante: '',
            nrohijos: '',
            embarazoespac: '',
            tipotrabajo: '',
            violenciaocupacional: '',
            vidaSocial: '',
            perteneceorg: '',
        },

        tipo_apoyo: ['Si', 'No'],
        tipo_emb_espac: ['<2', '2a5','>6'],
        tipo_trabajo: [
          'Remunerado - t. completo - estable',
          'Remunerado - t. completo - inestable',
          'Remunerado - t. medio - estable',
          'Remunerado - t. medio - inestable',
          'No remunerado - t. completo - estable',
          'No remunerado - t. completo - inestable',
          'No remunerado - t. medio - estable',
          'No remunerado - t. medio - inestable',
        ],
        tipo_violencia_ocp: ['Si', 'No'],
        tipo_social: ['es aceptado', 'es ignorado','algo aceptado'],
        tipo_pertenece_org: ['Si', 'No'],

      }
    },
    
    methods:{
    }
  }
