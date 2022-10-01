import Bars from '../../views/Shared/Bars.vue';
import Tratamiento from '../../views/_createOrUpdate/Resultados/TratamientoView';

export default {
    name: 'TratamientoIndex',
    components: {
        Bars,
        Tratamiento
    },
    mounted() {
        //this.getAll(1);
    },
    data() {
        return {
            headers: [
                { text: 'Nombre',value: 'nombre'},
                { text: 'Tiempo',value: 'tiempo'},
                { text: 'Dosis',value: 'dosis'},
                { text: 'Descripcion',value: 'descripcion'},
            ], 
            collection: {
                hasItems: false,
                items: [],
                total: 0,
                page: 1,
                pages: 0
            },
        }
    }
}