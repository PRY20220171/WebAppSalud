
export default {
    name: 'Ubicacion',

    components: {
    },
    
    data () {
      return {
        model:{
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