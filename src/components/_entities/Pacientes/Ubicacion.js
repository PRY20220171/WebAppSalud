
export default {
    name: 'Ubicacion',

    components: {
    },
    
    data () {
      return {
        model:{
          id:'',
          pais:'',
          region:'',
          provincia:'',
          distrito:'',
          direccion:''
        },
        lugarnac: {},
        domicilioact:{},

      }
    },
    beforemount(){
      this.lugarnac=this.model
      this.domicilioact=this.model
    },
    mounted() {
      this.initialize();
    },
    methods:{
        getUbication(id){
          let ubication=this.model

          this.$proxies.ubicacionProxy.getById(id)
          .then(x => {
            ubication = x.data;
          })
          .catch(() => {
          });
          //console.log(this.ubication)
          return ubication
        },
      initialize() {
            let id = this.$route.params.id;
            if (!id) return;
            this.isLoading = true;
            this.$proxies.ubicacionProxy.getById(id)
                .then(x => {
                    this.lugarnac = x.data;
                    this.domicilioact = x.data;
                    this.isLoading = false;
                    
                })
                .catch(() => {
                    this.isLoading = false; /*
                     this.$notify({
                        group: "global",
                        type: "is-danger",
                        text: 'Ocurrió un error inesperado'
                    }); */
                });
        },
    }
  }