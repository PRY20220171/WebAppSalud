export default {
    name: 'AntecedentePatologico',

    components: {
    },
    
    data () {
      return {
        
        model:{
          id:'',
            tbc: '',
            sobasma: '',
            transfsangre: '',
            neurologico: '',
            alergiamedic: '',
            otros: '',
        },

        tipo_rpta: ['Si', 'No','No sé'],

      }
    },
    
    mounted() {
      this.initialize();
    },
    
    methods:{
      initialize() {
          let id = this.$route.params.id;
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
    }
  }