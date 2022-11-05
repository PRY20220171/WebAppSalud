
import {mapActions,mapState} from 'vuex'
export default {
    name: 'SignosVitales',
    components: {
    },
    mounted() {
        //this.getAll(1);
    },
    data() {
        return {
            signosVitales:{
                temperatura:{
                    nombre:'temperatura',
                    sigla:'PA',
                    medicion:'°C',
                    val:''
                },
                temperatura:{
                    nombre:'presionArterial',
                    sigla:'PA',
                    medicion:'',
                    val:''
                },
                frecuenciaCardiaca:{
                    nombre:'frecuenciaCardiaca',
                    sigla:'FC',
                    medicion:'',
                    val:''
                },
                factoresReumatoides:{
                    nombre:'factoresReumatoides',
                    sigla:'FR',
                    medicion:'PA',
                    val:''
                },
                peso:{
                    nombre:'peso',
                    sigla:'Peso',
                    medicion:'kg',
                    val:''
                },
                nombre:{
                    nombre:'talla',
                    sigla:'talla',
                    medicion:'cm',
                    val:''
                },
            }
            
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
    computed:{
        ...mapState('atencionModule',['atencion']),
    },
}