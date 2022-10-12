export default {
    name: 'Nino',

    components: {
    },
    
    data () {
      return {
        
        model:{
            id:'',
            tipoembarazo: '',
            embarazoriesgo: '',
            controlprenatal: '',
            nroembarazo: '',
            edadgestalnac: '',
            pesoalnac: '',
            tallaalnac: '',
            perimcefalico: '',
            respllanto: '',
        },

        tipo_embarazo: ['Normal', 'complicado'],
        tipo_riesgo: ['Si', 'No'],
        tipo_control: ['Si', 'No'],

      }
    },
    mounted() {
     // this.initialize(null);
     this.getNino();
    },
    methods:{
      initialize(id){
        if(!id) return;

          this.isLoading = true;
          this.$proxies.ninoProxy.getById(id)
          .then(x => {
            this.model = x.data;
          })
          .catch(() => {
          });
        },
        save() {
          let id=''
          console.log("guardar antecedentes perinatales")
  
                if (this.model.id) {
                    this.$proxies.ninoProxy.update(this.model.id, this.model)
                } else {
                    this.$proxies.ninoProxy.register(this.model)
                      .then(x => {
                        this.model.id = x.data.id;
                        id = x.data.id;
                      })
                }
          return id;
        },
        
        getNino(){
          let id = this.$route.params.id;
          if (!id) return;
          this.isLoading = true;
          console.log(id)
          this.$proxies.pacienteProxy.getById(id)
              .then(x => {
                  this.model = x.data.nino;
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

