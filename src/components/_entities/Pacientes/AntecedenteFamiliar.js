export default {
    name: 'AntecedenteFamiliar',

    components: {
    },
    
    data () {
      return {
        
        model:{
          id: '',
            tbc: '',
            vihsida: '',
            diabetes: '',
            epilepsia: '',
            alergiamedic: '',
            violenciafam: '',
            alcoholismo: '',
            drogradiccion: '',
            hepatitisb: '',
        },

        familiares: [
            {show:'Padre', val:'P'},
            {show:'Madre', val:'M'},
            {show:'Hermano(s)', val:'H'},
            {show:'Abuelo(s)', val:'A'},
            {show:'Otros', val:'O'},
        ],
        select_icons:[ 'mdi-close-box', 'mdi-checkbox-blank-outline'],
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
          this.$proxies.antecedenteFamiliarProxy.getById(id)
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