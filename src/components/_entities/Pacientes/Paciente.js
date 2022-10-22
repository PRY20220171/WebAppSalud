import {mapState, mapMutations, mapActions} from 'vuex'

export default {
    name: 'Paciente',

    components: {
    },
    
    data () {
      return {
        
        tipo_doc: ['DNI', 'Carnet de Extranjería', 'Pasaporte'],
        tipo_sexo: [{show:'masculino', val:'m'},{show:'femenino', val:'f'},{show:'intersexual masculino', val:'im'},{show:'intersexual femenino', val:'fm'}],
        tipo_sangre: ['O','A','B','AB'],
        tipo_rh:[{show:'negativo', val:'-'},{show:'positivo', val:'+'},{show:'nulo', val:'0'}],
        tipo_educ: ['Inicial','Primaria','Secundaria','Técnica','Superior','Especial'],
        tipo_ecivil: [ 'Soltero', 'Casado', 'Divorciado', 'En separación', 'Viudo', 'Concubinato']
      }
    },
    computed:{
      ...mapState('pacienteModule',['paciente']),
      
      edad(){
        let edadp=this.$calcEdad(this.paciente.fecnac)
        this.paciente.edad=edadp;
        return edadp
    },
      
    },

    validators: {
        'model.Nombres'(value) {
            return this.$validator
                .value(value)
                .required();
        },
        'model.Apellidos'(value) {
            return this.$validator
                .value(value)
                .required();
        },
        'model.Docnum'(value) {
            return this.$validator
                .value(value)
                .required();
        },
    },

    created() {
        //this.initialize();
        this.getPaciente({id:this.$route.params.id, proxy:this.$proxies.pacienteProxy});
    },
    methods:{
        ...mapActions('pacienteModule',['getPaciente']),
       save() {
        console.log("guardar paciente")

              if (this.model.id) {
                  this.$proxies.pacienteProxy.update(this.model.id, this.model)
              } else {
                  this.$proxies.pacienteProxy.register(this.model)
              }
      }
      
    }
  }