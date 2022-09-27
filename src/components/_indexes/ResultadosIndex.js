import Bars from '../../views/Shared/Bars.vue';
import Resultado from '../../views/_createOrUpdate/Resultados/ResultadoView';

export default {
    name: 'ResultadoIndex',
    components: {
        Bars,
        Resultado
    },
    mounted() {
        this.getAll(1);
    },
    data() {
        return {}
    }
}