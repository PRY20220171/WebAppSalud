import {mapState} from 'vuex'
export default {
    name: 'AntecedenteFamiliar',

    components: {
    },
    
    data () {
      return {
        
        familiares: [
            {show:'Padre', val:'P'},
            {show:'Madre', val:'M'},
            {show:'Hermano(s)', val:'H'},
            {show:'Abuelo(s)', val:'A'},
            {show:'Otros', val:'O'},
            {show:'No sabe', val:'U'},
            {show:'Ninguno', val:'N'},
        ],
        select_icons:[ 'mdi-close-box', 'mdi-checkbox-blank-outline'],
      }
    },
    computed:{
      ...mapState('pacienteModule',['paciente']),
    },
    mounted() {
       // this.initialize(null);
       this.getAntecedenteFamiliar();
    },
    
    methods:{
      initialize(id) {
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
      save() {
        console.log("guardar antecedente familiar")

              if (this.model.id) {
                  this.$proxies.antecedenteFamiliarProxy.update(this.model.id, this.model)
              } else {
                  this.$proxies.antecedenteFamiliarProxy.register(this.model)
              }
      },
      getAntecedenteFamiliar(){
        let id = this.$route.params.id;
        if (!id) return;
        this.isLoading = true;
        console.log(id)
        this.$proxies.pacienteProxy.getById(id)
            .then(x => {
                this.model = x.data.antecedentefam;
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