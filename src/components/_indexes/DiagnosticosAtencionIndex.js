import Diagnostico from '../../views/_createOrUpdate/Diagnosticos/DiagnosticoView';
import {mapState,mapActions} from 'vuex'
export default {
    name: 'DiagnosticosAtencionIndex',
    components: {
        Diagnostico
    },
    data() {
        return {
            dialog:false,
            searchText:'',
            searchBoxClosed: true,
            isLoading: false,
            search: '',
            headers:  [
                    { text: 'fecregistro',value: 'fecregistro'},
                    { text: 'descripcion',value: 'descripcion'},
                    { text: 'estado', value: 'estado' },
                    { text: 'tipo', value: 'tipo' },
                    { text: '', sortable: false, value: 'actions'},
                ],
            collection: {
                hasItems: false,
                items: [],
                total: 0,
                page: 1,
                pages: 0
            },
            ids: [], 
            diagnostico:{
                id:'',
                fecregistro:'',
                descripcion:'',
                estado:'',
                tipo:'',
                idatencion:'',
                resultados:[
                    {
                        id:'',
                        registro:'',
                        descripcion:'',
                        estado:'',
                    }
                ],
            },
            estados: ['en proceso', 'esperando diagnosticos','finalizado'],
            tipos: ['final','inicial','medio'],
        }
    },
    beforeMount() {
       // console.log(this.$proxies)
        this.getAll(1);
    },
    computed:{
      //...mapState('DiagnosticoModule',['diagnostico']),
      ...mapState('DiagnosticoModule',['diagnosticos']),
      ...mapState('atencionModule',['atencion']),
      //...mapState('pacienteModule',['paciente']),
    },
    
    mounted(){
        /*
        console.log(this.collection)
        console.log(this.collection.items)*/
    },
    methods: {
        getAll(page) {
            this.isLoading = true;
                this.$proxies.diagnosticoProxy.getAll()
                .then(x => {
                    //this.collection = x.data;
                    this.collection.items = x.data;
                    if (this.collection.items.length>0)
                        this.collection.hasItems=true;
                    this.collection.total=this.collection.items.length

                    this.isLoading = false;
                }).catch(() => {
                    this.isLoading = false;
                });
            //console.log(this.$proxies.pacienteProxy.getAll())
            //console.log(this.collection)
        },
          addDiagnostico(){
            this.diagnostico.idatencion = this.atencion.id
            if (this.diagnostico.id==''){
              this.$proxies.diagnosticoProxy.register(this.diagnostico)
              .then(x => {
                this.diagnosticos.push(x)
                this.saved=true
                this.dialog=false
              }).catch(() => {
              });
            }else{
              this.$proxies.diagnosticoProxy.update(id,this.diagnostico)
              .then(x => {
                let i = this.diagnosticos.findIndex(x => x.id = this.diagnostico.id);
                this.diagnosticos[i]=this.diagnostico
              }).catch(() => {
              });
            }
          },
          deleteDiagnostico(){
            let i = this.diagnosticos.findIndex(x => x.id = this.diagnostico.id);
            delete this.diagnosticos[i]
          },
    }
}