import Bars from '../../../views/Shared/Bars.vue';
import Bars from '../../../views/Shared/Loader.vue';
import Bars from '../../../views/Shared/Pager.vue';

export default {
    name: 'ListaAtenciones',

    components: {
        Loader, Pager,Bars
    },
    mounted() {
        this.getAll(1);
    },
    data() {
        return {
            user: this.$store.state.user,
            isLoading: false,
            collection: {
                hasItems: false,
                items: [],
                total: 0,
                page: 1,
                pages: 0
            }       
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