export default {
    name: 'AntecedentePsicosocial',

    components: {
    },
    
    data () {
      return {
        
        model:{
          id:'',
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
    
    mounted() {
      //this.initialize(null);
      this.getAntecedentePsicosocial();
    },
    
    methods:{
      initialize(id) {
          if (!id) return;
          this.isLoading = true;
          this.$proxies.antecedentePsicocialProxy.getById(id)
              .then(x => {
                  this.model = x.data;
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
      save() {
        console.log("guardar antecedente psicocial")

              if (this.model.id) {
                  this.$proxies.antecedentePsicocialProxy.update(this.model.id, this.model)
              } else {
                  this.$proxies.antecedentePsicocialProxy.register(this.model)
              }
      },
      getAntecedentePsicosocial(){
        let id = this.$route.params.id;
        if (!id) return;
        this.isLoading = true;
        console.log(id)
        this.$proxies.pacienteProxy.getById(id)
            .then(x => {
                this.model = x.data.antecedenteperi;
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
