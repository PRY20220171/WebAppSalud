import Bars from '../../views/Shared/Bars.vue';
import Diagnostico from '../../views/_createOrUpdate/Diagnosticos/DiagnosticoView';

export default {
    name: 'DiagnosticoIndex',
    components: {
        Bars,
        Diagnostico
    },
    mounted() {
        this.getAll(1);
    },
    data() {
        return {}
    }
}