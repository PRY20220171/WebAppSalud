import {mapState,mapActions} from 'vuex'
export default {
    name: 'Diagnostico',

    components: {
    },
    props: {
     diagnostico:{
            id: '',
            fecregistro: '',
            descripcion: '',
            estado: '',
            tipo: '',
        },
    },
    data () {
      return {
        model:{
            id: '',
            fecregistro: '',
            descripcion: '',
            estado: '',
            tipo: '',
        },
        
        saved:false,
        estados: ['en proceso', 'esperando pruebas','finalizado'],
        tipos: ['final','inicial','medio'],
      }
    },
    computed:{
      //...mapState('DiagnosticoModule',['diagnostico']),
      ...mapState('DiagnosticoModule',['diagnosticos']),
    },
    mounted(){
      //this.model=this.diagnostico
    },
    
    methods:{
      
      //...mapActions('DiagnosticoModule',['addDiagnostico']),
      addDiagnostico(){
        let d = new Date
        
        if(this.model.fecregistro==''){
          console.log('here',this.model)
          var todayDate = new Date().toISOString().slice(0, 10);
          this.model.fecregistro=todayDate
        }
        if (this.model.descripcion!='') {
          if(this.model.id=='') {
            this.model.id=d.getTime()
            this.diagnosticos.push(this.model)
            //this.addDiagnostico(this.model)
            //console.log('here',this.diagnosticos)
            this.saved=true
          }else {
            let i = this.diagnosticos.findIndex(x => x.id = this.model.id);
            this.diagnosticos[i]=this.model
          }
        }
      },
      deleteDiagnostico(){
        let i = this.diagnosticos.findIndex(x => x.id = this.model.id);
        delete this.diagnosticos[i]
      }
    }
  }
