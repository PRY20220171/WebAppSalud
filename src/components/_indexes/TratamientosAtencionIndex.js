import {mapState,mapActions} from 'vuex'
//import Tratamiento from '../../views/_createOrUpdate/Tratamientos/TratamientoView.vue'

export default {
    name: 'TratamientosAtencionIndex',
    components: {
        //Tratamiento
    },
    mounted() {
        this.getAll(1);
    },
    data() {
        return {
            dialog:false,
            searchText:'',
            searchBoxClosed: true,
            isLoading: false,
            search: '',
            headers:  [
                    { text: 'tipotratamiento',value: 'tipotratamiento.nombre'},
                    { text: 'medida',value: 'tipotratamiento.medida.nombre'},
                    { text: 'Fecha de tratamiento', value: 'fectratamiento' },
                    { text: 'Fecha de resultado', value: 'fecresultado' },
                    { text: 'observacion', sortable: false, value: 'observacion'},
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
            tratamiento:{
                "id": "",
                "medicamento": "",
                "descripcion": ""
              },
            saved:[false],
        }
    },
    beforeMount() {
        // console.log(this.$proxies)
         this.getAll(1);
     },
     computed:{
       //...mapState('TratamientoModule',['tratamiento']),
       ...mapState('tratamientoModule',['tratamientos']),
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
    methods: {
        addTratamiento(){
            let d = new Date
            
            
              if(this.tratamiento.id=='') {
                this.tratamiento.id=d.getTime()
                this.tratamientos.push(this.tratamiento)
                this.saved=true
                this.dialog=false
              }else {
                let i = this.tratamientos.findIndex(x => x.id = this.tratamiento.id);
                this.tratamientos[i]=this.tratamiento
              }
          },
          deleteTratamiento(){
            let i = this.tratamientos.findIndex(x => x.id = this.tratamiento.id);
            delete this.tratamientos[i]
          },
        getAll(page) {
            this.isLoading = true;
                this.$proxies.tratamientoProxy.getAll()
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
    }
}