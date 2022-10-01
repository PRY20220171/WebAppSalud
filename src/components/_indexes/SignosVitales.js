import Bars from '../../views/Shared/Bars.vue';
export default {
    name: 'SignosVitales',
    components: {
        Bars,
    },
    mounted() {
        this.getAll(1);
    },
    data() {
        return {
            signosVitales:[
                {
                    nombre:'temperatura',
                    sigla:'PA',
                    medicion:'°C',
                    val:''
                },
                {
                    nombre:'presionArterial',
                    sigla:'PA',
                    medicion:'',
                    val:''
                },
                {
                    nombre:'frecuenciaCardiaca',
                    sigla:'FC',
                    medicion:'',
                    val:''
                },
                {
                    nombre:'factoresReumatoides',
                    sigla:'FR',
                    medicion:'PA',
                    val:''
                },
                {
                    nombre:'peso',
                    sigla:'Peso',
                    medicion:'kg',
                    val:''
                },
                {
                    nombre:'talla',
                    sigla:'talla',
                    medicion:'cm',
                    val:''
                },
            ]
            
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