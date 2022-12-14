import {mapState} from 'vuex'
export default {
    name: 'AntecedentePatologico',

    components: {
    },
    
    data () {
      return {
        

        tipo_rpta: ['Si', 'No','No sé'],

      }
    },
    computed:{
      ...mapState('pacienteModule',['paciente']),
    },
    
    mounted() {
      //this.initialize(null);
      this.getAntecedentePatologico();
    },
    
    methods:{
      initialize(id) {
          if (!id) return;
          this.isLoading = true;
          this.$proxies.antecedentePatologicoProxy.getById(id)
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
        console.log("guardar antecedente patológico")

              if (this.model.id) {
                  this.$proxies.antecedentePatologicoProxy.update(this.model.id, this.model)
              } else {
                  this.$proxies.antecedentePatologicoProxy.register(this.model)
              }
      },
      getAntecedentePatologico(){
        let id = this.$route.params.id;
        if (!id) return;
        this.isLoading = true;
        console.log(id)
        this.$proxies.pacienteProxy.getById(id)
            .then(x => {
                this.model = x.data.antecedentepato;
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