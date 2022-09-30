export default {
    name: 'PacienteIndex',
    components: {
        Bars,
        //Paciente
        //Usuario
    },
    data() {
        return {
            isLoading: false,
            search: '',
            headers: [
                { text: 'Nombres',value: 'nombres'},
                { text: 'Apellidos',value: 'apellidos'},
                { text: 'Tipo de Doc.', value: 'doctipo' },
                { text: 'Num. de Doc', value: 'docnum' },
                { text: 'Gruposang', value: 'gruposangrh' },
                { text: 'telefono', value: 'telefono' },
                { text: 'Fec. nacimiento', value: 'date' },
                { text: 'Procedencia', value: 'lugarnac.pais' },
                { text: 'Region natal', value: 'lugarnac.region' },
                { text: 'Provincia natal', value: 'v.provincia' },
               // { text: 'Distrito natal', value: 'lugarnac.distrito' },
                { text: 'Region actual', value: 'domicilioact.region' },
                { text: 'Provincia actual', value: 'domicilioact.provincia' },
                { text: 'Distrito actual', value: 'domicilioact.distrito' },
                { text: 'Actions', sortable: false, value: 'actions',
                },
              ],
            collection: {
                hasItems: false,
                items: [],
                total: 0,
                page: 1,
                pages: 0
            },
            ids: [], 
        }
    },
    mounted() {
       // console.log(this.$proxies)
        this.getAll(1);
    },
    methods: {
        getPlace(id){
            let pais ='';
            let region ='';
            let provincia ='';
            let distrito ='';

            this.isLoading = true;
                this.$proxies.ubicacionProxy.getById(id)
                .then(x => {
                    pais = x.data;
                    this.isLoading = false;
                }).catch(() => {
                    this.isLoading = false;
                });
            console.log(pais)
        },
        getAll(page) {
            this.isLoading = true;
                this.$proxies.pacienteProxy.getAll()
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
            console.log(this.collection)
        },
        changeview(){
            this.detailed = !this.detailed;
            this.getAll(this.collection.page);
        },
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
        }
    }
}