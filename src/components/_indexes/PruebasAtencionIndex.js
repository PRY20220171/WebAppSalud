import {mapState,mapActions} from 'vuex'
import Prueba from '../../views/_createOrUpdate/Pruebas/PruebaView.vue'

export default {
    name: 'PruebasAtencionIndex',
    components: {
        Prueba
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
                    { text: 'tipoprueba',value: 'tipoprueba.nombre'},
                    { text: 'medida',value: 'tipoprueba.medida.nombre'},
                    { text: 'Fecha de prueba', value: 'fecprueba' },
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
            prueba:{
                id: "",
                idtipoprueba: "",
                tipoprueba: {
                  id: "",
                  idmedida: "",
                  medida: {
                    id: "",
                    nombre: "",
                    descripcion: ""
                  },
                  idcategoriaprueba: "",
                  categoriaprueba: {
                    id: "",
                    nombre: "",
                    descripcion: ""
                  },
                  nombre: "",
                  descripcion: ""
                },
                fecresultado: "",
                fecprueba: "",
                resultado: 0,
                observacion: "",
            },
            tipo_prueba: [
                {
                    "id": "bae18399-7e28-48aa-b226-2aad74224531",
                    "idmedida": "36032de1-e4b2-4408-855a-71cf56c6c9d8",
                    "medida": {
                      "id": "36032de1-e4b2-4408-855a-71cf56c6c9d8",
                      "nombre": "m3",
                      "descripcion": "metros cubicos"
                    },
                    "idcategoriaprueba": "36032de1-e4b2-4408-855a-71cf56c6c9d8",
                    "categoriaprueba": {
                      "id": "36032de1-e4b2-4408-855a-71cf56c6c9d8",
                      "nombre": "laboratorio",
                      "descripcion": "descripcion de categoria"
                    },
                    "nombre": "glucosa",
                    "descripcion": "descripcion de tipoprueba"
                  },
                  {
                      "id": "bae18399-7e28-48aa-b226-2aad742333333",
                      "idmedida": "36032de1-e4b2-4408-855a-742333333",
                      "medida": {
                        "id": "36032de1-e4b2-4408-855a-742333333",
                        "nombre": "x 109/L",
                        "descripcion": "metros cubicos"
                      },
                      "idcategoriaprueba": "36032de1-e4b2-4408-855a-71cf56c6c9d8",
                      "categoriaprueba": {
                        "id": "36032de1-e4b2-4408-855a-71cf56c6c9d8",
                        "nombre": "laboratorio",
                        "descripcion": "descripcion de categoria"
                      },
                      "nombre": "leucositos",
                      "descripcion": "descripcion de tipoprueba"
                    },
            ],
            saved:[false],
            editedIndex: -1,
            editedItem: {
                id: '0',
                fecregistro: '',
                descripcion: '',
                estado: '',
                tipo: '',
                idatencion: '',
                resultados: [{
                    id: '',
                    registro: '',
                    descripcion: '',
                    estado: '',
                }],
            },
            defaultItem: {
                id: '0',
                fecregistro: '',
                descripcion: '',
                estado: '',
                tipo: '',
                idatencion: '',
                resultados: [{
                    id: '',
                    registro: '',
                    descripcion: '',
                    estado: '',
                }],
            }
        }
    },
    beforeMount() {
        // console.log(this.$proxies)
         this.getAll(1);
     },
     computed:{
       //...mapState('PruebaModule',['prueba']),
       ...mapState('pruebaModule',['pruebas']),
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
        addPrueba(){
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
          deletePrueba(){
            let i = this.pruebas.findIndex(x => x.id = this.prueba.id);
            delete this.pruebas[i]
          },
        getAll(page) {
            this.isLoading = true;
                this.$proxies.pruebaProxy.getAll()
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
        },/*
        remove(pacienteid){
            this.isLoading = true;
            this.$proxies.pacienteProxy.remove(pacienteid)
            .then(() =>{
                this.getAll(1);
            }).catch(()=>{
                this.isLoading = false;
            })
        },
        collapse(id){
            let index = this.ids.indexOf(id);
            if(index == -1){
                //Hacemos la peticion get para ese paciente:
                this.$proxies.pacienteProxy.getById(id)
                .then(x => {
                    //Aqui tenemos que empujar los datos adicionales al paciente
                    let aux = this.collection.items.find(element => element.pacienteId === id);
                    aux.details = x.data;
                    this.ids.push(id);
                })
                .catch(() => {
                    this.$notify({
                        group: "global",
                        type: "is-danger",
                        text: 'Ocurrió un error inesperado'
                    });
                });
            }
            else{
                let aux = this.collection.items.find(element=>element.pacienteId===id);
                aux.details = null;
                this.ids.splice(index,1);
            }

        },
        infiniteHandler($state){
            if(this.collection.page > this.collection.pages){
                $state.complete();
                return;
            }
            this.$proxies.pacienteProxy.getAll(this.collection.page+1, 10)
                .then(x => {
                    if(this.collection.page <= x.data.pages){
                        this.collection.page+=1;
                        x.data.items.forEach(element => {
                            this.collection.items.push(element);
                        });
                        this.collection.total = x.data.total;
                        this.collection.pages = x.data.pages;
                        $state.loaded();
                    }
                    else{
                        $state.complete();
                    }
                }).catch(cod => {
                    this.$notify({
                        group: "global",
                        type: "is-danger",
                        text: 'Ocurrió un error inesperado, codigo de error: '+ cod
                    });
                });
        }*/
    }
}