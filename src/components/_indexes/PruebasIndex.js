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
            headers: [
                { text: 'Nombres',value: 'fecresultado'},
                { text: 'Apellidos',value: 'fecprueba'},
                { text: 'resultado',value: 'resultado'},
                { text: 'observacion',value: 'observacion'},
            ], 
            collection: {
                hasItems: false,
                items: [],
                total: 0,
                page: 1,
                pages: 0
            },
            /*
            user: this.$store.state.user,
            isLoading: false,
            collection: {
                hasItems: false,
                items: [],
                total: 0,
                page: 1,
                pages: 0
            }*/  
        }
    },
    methods: {
        getAll(page) {/*
            this.isLoading = true;
            if(this.user.roles.includes('ADMIN')){
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
            */
        },
        remove(insumoId){/*
            this.isLoading = true;
            this.$proxies.insumoProxy.remove(insumoId)
            .then(() =>{
                this.getAll(1);
            }).catch(()=>{
                this.isLoading = false;
            })*/
        }
    }
}