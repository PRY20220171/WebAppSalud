
export default {
    name: 'Ubicacion',

    components: {
    },
    
    data () {
      return {
        model:{
          ubicacionId:'',
            Pais:'',
            Region:'',
            Provincia:'',
            Distrito:'',
            Direccion:''
        },
        lugarnac: {},
        domicilioact:{},

      }
    },
    beforemount(){
      this.lugarnac=this.model
      this.domicilioact=this.model
    },
    methods:{
    }
  }