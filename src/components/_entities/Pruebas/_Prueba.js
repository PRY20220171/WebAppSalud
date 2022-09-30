import CategoriaPrueba from '../../../views/_createOrUpdate/Pruebas/CategoriaPruebaView.vue';
import Medida from '../../../views/_createOrUpdate/Pruebas/MedidaView.vue';
import Prueba from '../../../views/_createOrUpdate/Pruebas/PruebaView.vue';
import TipoPrueba from '../../../views/_createOrUpdate/Pruebas/TipoPruebaView.vue';

export default {
    name: 'RegistrarCategoriaPrueba',

    components: {
      //compartidos
      //inf. general
        CategoriaPrueba,
        Medida,
        Prueba,
        TipoPrueba,
    },
    
    data () {
      return {
      //  user: this.$store.state.user,
      //  isLoading: false,
        e1: 1,
      }
    },
    mounted(){
      console.log(this.paciente)
    },
    methods:{
    }
  }