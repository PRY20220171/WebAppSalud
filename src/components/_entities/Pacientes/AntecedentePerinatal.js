import {mapState} from 'vuex'
export default {
    name: 'AntecedentePerinatal',

    components: {
    },
    
    data () {
      return {
        

        tipo_embarazo: ['Normal', 'complicado'],
        tipo_riesgo: ['Si', 'No'],
        tipo_control: ['Si', 'No'],

      }
    },
    computed:{
      ...mapState('pacienteModule',['paciente']),
    },
    mounted() {
    },
    methods:{
        save() {
          let id=''
          console.log("guardar antecedentes perinatales")
  
                if (this.model.id) {
                    this.$proxies.antecedentePerinatalProxy.update(this.model.id, this.model)
                } else {
                    this.$proxies.antecedentePerinatalProxy.register(this.model)
                      .then(x => {
                        this.model.id = x.data.id;
                        id = x.data.id;
                      })
                }
          return id;
        },
    }
  }

