
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
     // this.initialize(null,null);
     this.getPlaces();
    },
    methods:{
        getUbication(id){
          this.isLoading = true;
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
        initialize(lugarnacid, domicilioactid) {
            if (lugarnacid)
              this.lugarnac = this.getUbication(lugarnacid);
            if (domicilioactid)
              this.domicilioact = this.getUbication(domicilioactid);
        },
        save() {
          console.log("guardar lugares")
  
                if (this.model.id) {
                    this.$proxies.ubicacionProxy.update(this.lugarnac.id, this.lugarnac)
                    this.$proxies.ubicacionProxy.update(this.domicilioact.id, this.domicilioact)
                } else {
                    this.$proxies.ubicacionProxy.register(this.lugarnac)
                    this.$proxies.ubicacionProxy.register(this.domicilioact)
                }
        },
        getPlaces(){
          let id = this.$route.params.id;
          if (!id) return;
          this.isLoading = true;
          console.log(id)
          this.$proxies.pacienteProxy.getById(id)
              .then(x => {
                  this.lugarnac = x.data.lugarnac;
                  this.domicilioact = x.data.domicilioact;
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
        }
    }
  }