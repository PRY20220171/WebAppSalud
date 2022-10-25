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
            estados: ['en proceso', 'esperando pruebas','finalizado'],
            tipos: ['final','inicial','medio'],
        }
    },
    beforeMount() {
       // console.log(this.$proxies)
        this.getAll(1);
    },
    watch:{
        collection:{
            handler(val){
                for(let item in val.items){
                    item = {item, paciente:this.getPaciente('d5775113-ed08-4de0-8945-d3c977d504f5')}
                }
                console.log(val.items)
            },
            deep: true,
            flush: 'post'
        }
    },
    computed:{
      //...mapState('DiagnosticoModule',['diagnostico']),
      ...mapState('DiagnosticoModule',['diagnosticos']),
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
        getPaciente(idPaciente) {
                this.isLoading = true;
    
                    this.$proxies.pacienteProxy.getById(idPaciente)
                    .then(x => {
                        this.paciente = x.data;
                        this.isLoading = false;
                    }).catch(() => {
                        this.isLoading = false;
                    });
                       console.log(this.paciente)
                return this.paciente;
        },
        changeview(){
            this.detailed = !this.detailed;
            this.getAll(this.collection.page);
        },
        addDiagnostico(){
            let d = new Date           
            
              if(this.prueba.id=='') {
                this.prueba.id=d.getTime()
                this.pruebas.push(this.prueba)
                this.saved=true
                this.dialog=false
              }else {
                let i = this.pruebas.findIndex(x => x.id = this.prueba.id);
                this.pruebas[i]=this.prueba
              }
          },
          deleteDiagnostico(){
            let i = this.pruebas.findIndex(x => x.id = this.prueba.id);
            delete this.pruebas[i]
          },
    }
}