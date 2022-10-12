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
    mounted() {
      this.initialize();
    },

    methods: {
      initialize() {
        let id = this.$route.params.id;
        if (!id) return;
        this.isLoading = true;
        this.$proxies.atencionProxy.getById(id)
            .then(x => {
                this.model = x.data;
                this.model.sexo=this.convertTypeSex(this.model.sexo)
                this.model.rh=this.convertTypeRH(this.model.rh)
                this.model.gruposang=this.model.gruposang.toUpperCase()
                this.isLoading = false;
            })
            .catch(() => {
                this.isLoading = false; 
                /* this.$notify({
                    group: "global",
                    type: "is-danger",
                    text: 'Ocurrió un error inesperado'
                }); */
            });
        
      },
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