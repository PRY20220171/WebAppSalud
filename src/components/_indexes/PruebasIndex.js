import Bars from '../../views/Shared/Bars.vue';
import Prueba from '../../views/_createOrUpdate/Pruebas/PruebaView.vue'

export default {
    name: 'PruebaIndex',
    components: {
        Bars,
        Prueba
    },
    mounted() {
        this.getAll(1);
    },
    data() {
        return {
            expanded: [],
            singleExpand: false,
            searchText:'',
            searchBoxClosed: true,
            isLoading: false,
            search: '',
            pacienteHeaders: {
                base:[
                    { text: 'Nombres',value: 'nombres'},
                    { text: 'Apellidos',value: 'apellidos'},
                    { text: 'Fecha de prueba', value: 'fecprueba' },
                    { text: 'Fecha de resultado', value: 'fecresultado' },
                    { text: 'Actions', sortable: false, value: 'actions'},
                ],
                locationDetail:[

                    // {
                    //     text: 'Lugar de nacimiento',
                    //     value: 'lugarnac',
                    //     detail: [
                    //         { text: 'Procedencia', value: 'pais' },
                    //         { text: 'Region natal', value: 'region' },
                    //         { text: 'Provincia natal', value: 'provincia' },
                    //         { text: 'Distrito natal', value: 'distrito' }
                    //     ]
                    // },
                    // {
                    //     text: 'Ubicación actual',
                    //     value: 'domicilioact',
                    //     detail: [
                    //         { text: 'Procedencia', value: 'pais' },
                    //         { text: 'Region natal', value: 'region' },
                    //         { text: 'Provincia natal', value: 'provincia' },
                    //         { text: 'Distrito natal', value: 'distrito' }
                    //     ]
                    // }
                ]
            },
            collection: {
                hasItems: false,
                items: [],
                total: 0,
                page: 1,
                pages: 0
            },
            ids: [], 
            paciente:{},
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
    methods: {
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