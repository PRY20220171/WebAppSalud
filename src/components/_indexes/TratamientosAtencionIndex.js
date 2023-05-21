import {mapState,mapActions} from 'vuex'
//import Tratamiento from '../../views/_createOrUpdate/Tratamientos/TratamientoView.vue'

export default {
    name: 'TratamientosAtencionIndex',
    components: {
        //Tratamiento
    },
    data() {
        return {
            dialog:false,
            searchText:'',
            searchBoxClosed: true,
            isLoading: false,
            search: '',
            headers:  [
                    //{ text: 'fec. de registro',value: 'registro'},
                    { text: 'Tratamiento',value: 'medicamento'},
                    { text: 'Descripcion',value: 'descripcion'},
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
                id: "",
                medicamento: "",
                descripcion: "",
                //idresultado: ""
                idatencion: ""
              },
            saved:[false],
            editedIndex: -1,
            editedItem: {
                id: "0",
                medicamento: "",
                descripcion: "",
                //idresultado: ""
                idatencion: ""
              },
            defaultItem: {
                id: "0",
                medicamento: "",
                descripcion: "",
                //idresultado: ""
                idatencion: ""
              },
              interval:{},
              loadAtencion:0,
        }
    },
    mounted() {
        // console.log(this.$proxies)
        this.interval=setInterval(() => {
            this.loadAtencion += 1
            //console.log(this.loadAtencion)
        }, 10)
        setTimeout(() => {
            clearInterval(this.interval)
            this.loadAtencion= 100,
            this.getAll(1)
        },1000);
     },
     computed:{
       //...mapState('TratamientoModule',['tratamiento']),
       ...mapState('tratamientoModule',['tratamientos']),
       ...mapState('atencionModule', ['atencion']),
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
                this.$proxies.tratamientoProxy
                //.getAll()
                .getByAtencionId(this.atencion.id)
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
        uuidv4() {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        },
        editItem(item) {
            this.editedIndex = this.collection.items.indexOf(item);
            this.editedItem = Object.assign({}, item);
        },

        deleteItem(item) {
            //console.log(item);
            const index = this.collection.items.indexOf(item);
            if (item.descripcion != '' || item.medicamento != '') {
                confirm('Are you sure you want to delete this item?') && this.collection.items.splice(index, 1);
            } else {
                this.collection.items.splice(index, 1);
            }
        },
        close() {
            setTimeout(() => {
                let item = this.collection.items.at(this.editedIndex);
                if (item.descripcion == '' && item.medicamento == '') {
                    this.collection.items.splice(this.editedIndex, 1);
                }
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            }, 300)
        },
        addNew() {
            const addObj = Object.assign({}, this.defaultItem);
            addObj.id = this.uuidv4();
            //addObj.fecregistro = new Date().toLocaleDateString();
            //addObj.id = this.collection.items.length + 1;
            this.collection.items.unshift(addObj);
            this.editItem(addObj);
        },
        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.collection.items[this.editedIndex], this.editedItem)
            }
            this.close()
        },
    }
}