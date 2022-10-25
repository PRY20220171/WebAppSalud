import {mapState,mapActions} from 'vuex'
import Resultado from '../../views/_createOrUpdate/Resultados/ResultadoView.vue'

export default {
    name: 'ResultadosAtencionIndex',
    components: {
        Resultado
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
                    { text: 'registro',value: 'registro'},
                    { text: 'descripcion',value: 'descripcion'},
                    { text: 'estado', value: 'estado' },
                    { text: 'Fecha de resultado', value: 'fecresultado' },
                    { text: '', sortable: false, value: 'actions'},
                ],
            collection: {
                hasItems: false,
                items: [],
                total: 0,
                page: 1,
                pages: 0
            },
            estados: ['en proceso', 'esperando pruebas','finalizado'],
            tipos: ['final','inicial','medio'],
            ids: [], 
            resultado:{
                "id":'',
                "registro":'',
                "descripcion":'',
                "estado":'',
                "tratamientos":[{
                    "motivo":'',
                    "tratamiento":'',
                    "id":'',
                    "medicamento":'',
                    "descripcion":'',
                },{
                    "motivo":'',
                    "tratamiento":'',
                    "id":'',
                    "medicamento":'',
                    "descripcion":'',
                    }
                ]
            },
            tipo_resultado: [
                {
                    "id": "bae18399-7e28-48aa-b226-2aad74224531",
                    "idmedida": "36032de1-e4b2-4408-855a-71cf56c6c9d8",
                    "medida": {
                      "id": "36032de1-e4b2-4408-855a-71cf56c6c9d8",
                      "nombre": "m3",
                      "descripcion": "metros cubicos"
                    },
                    "idcategoriaresultado": "36032de1-e4b2-4408-855a-71cf56c6c9d8",
                    "categoriaresultado": {
                      "id": "36032de1-e4b2-4408-855a-71cf56c6c9d8",
                      "nombre": "laboratorio",
                      "descripcion": "descripcion de categoria"
                    },
                    "nombre": "glucosa",
                    "descripcion": "descripcion de tiporesultado"
                  },
                  {
                      "id": "bae18399-7e28-48aa-b226-2aad742333333",
                      "idmedida": "36032de1-e4b2-4408-855a-742333333",
                      "medida": {
                        "id": "36032de1-e4b2-4408-855a-742333333",
                        "nombre": "x 109/L",
                        "descripcion": "metros cubicos"
                      },
                      "idcategoriaresultado": "36032de1-e4b2-4408-855a-71cf56c6c9d8",
                      "categoriaresultado": {
                        "id": "36032de1-e4b2-4408-855a-71cf56c6c9d8",
                        "nombre": "laboratorio",
                        "descripcion": "descripcion de categoria"
                      },
                      "nombre": "leucositos",
                      "descripcion": "descripcion de tiporesultado"
                    },
            ],
            saved:[false],
        }
    },
    beforeMount() {
        // console.log(this.$proxies)
         this.getAll(1);
     },
     computed:{
       //...mapState('ResultadoModule',['resultado']),
       ...mapState('ResultadoModule',['resultados']),
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
        addResultado(){
            let d = new Date
            
            
              if(this.resultado.id=='') {
                this.resultado.id=d.getTime()
                this.resultados.push(this.resultado)
                this.saved=true
                this.dialog=false
              }else {
                let i = this.resultados.findIndex(x => x.id = this.resultado.id);
                this.resultados[i]=this.resultado
              }
          },
          deleteResultado(){
            let i = this.resultados.findIndex(x => x.id = this.resultado.id);
            delete this.resultados[i]
          },
        getAll(page) {
            this.isLoading = true;
                this.$proxies.resultadoProxy.getAll()
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