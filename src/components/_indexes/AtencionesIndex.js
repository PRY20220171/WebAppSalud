// import Bars from '../../../views/Shared/Bars.vue';
//import Loader from '../../../views/Shared/Loader.vue';
//import Pager from '../../../views/Shared/Pager.vue';

export default {
    name: 'ListaAtenciones',

    components: {
        //Loader, Pager,Bars
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
                    { text: 'Tipo de Doc.', value: 'doctipo' },
                    { text: 'Num. de Doc', value: 'docnum' },
                    { text: 'Gruposang', value: 'gruposangrh' },
                    { text: 'telefono', value: 'telefono' },
                    { text: 'Fec. nacimiento', value: 'fecnac' },
                    { text: 'Actions', sortable: false, value: 'actions'},
                ],
                locationDetail:[
                    {
                        text: 'Lugar de nacimiento',
                        value: 'lugarnac',
                        detail: [
                            { text: 'Procedencia', value: 'pais' },
                            { text: 'Region natal', value: 'region' },
                            { text: 'Provincia natal', value: 'provincia' },
                            { text: 'Distrito natal', value: 'distrito' }
                        ]
                    },
                    {
                        text: 'Ubicación actual',
                        value: 'domicilioact',
                        detail: [
                            { text: 'Procedencia', value: 'pais' },
                            { text: 'Region natal', value: 'region' },
                            { text: 'Provincia natal', value: 'provincia' },
                            { text: 'Distrito natal', value: 'distrito' }
                        ]
                    }
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
        }
    },
    methods: {
        getAll(page) {
            this.isLoading = true;
            if(/*this.user.roles.includes('ADMIN')*/ true){
                this.isLoading = true;
                this.$proxies.insumoProxy.getAllAdmin(page, 10)
                .then(x => {
                    this.collection = x.data;
                    this.isLoading = false;
                }).catch(() => {
                    this.isLoading = false;
                });
            }
            else{
                this.$proxies.insumoProxy.getAll(page, 10)
                .then(x => {
                    this.collection = x.data;
                    this.isLoading = false;
                }).catch(() => {
                    this.isLoading = false;
                });
            }

        },/*
        remove(insumoId){
            this.isLoading = true;
            this.$proxies.atencionesProxy.remove(insumoId)
            .then(() =>{
                this.getAll(1);
            }).catch(()=>{
                this.isLoading = false;
            })
        }*/
    }
  }