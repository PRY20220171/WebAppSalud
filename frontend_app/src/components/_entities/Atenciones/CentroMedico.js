export default {
    name: 'CentroMedico',

    components: {
    },
    
    data () {
      return {
        
        model:{
            idcentromedic: '',
            idubicacion: '',
            nombre: '',
            sector: '',
        },

        dialog: false,
        tipo_centro: ['privado','estatal'],
        items:[ 'Niño Jesús','Mediplus','Clínica Dental' ],
        loading: false,
        search: '',
        selected: "",
      }
    },

    methods: {
      addCentro(){
        this.dialog = false
        this.items.push(this.model.nombre)
        this.selected=this.model.nombre
      },
      handleChange(value) {
        var searchWord = value.srcElement._value
        if (this.items.filter(value => value.startsWith(searchWord)).length === 0) {
          if(searchWord != null)
           if(searchWord.length>0)this.dialog=true;
        }
      }
    },
  }