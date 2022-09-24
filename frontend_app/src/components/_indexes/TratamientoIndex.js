import Bars from '../../views/Shared/Bars.vue';
import Tratamiento from '../../views/_createOrUpdate/Resultados/TratamientoView';

export default {
    name: 'TratamientoIndex',
    components: {
        Bars,
        Tratamiento
    },
    mounted() {
        this.getAll(1);
    },
    data() {
        return {}
    }
}