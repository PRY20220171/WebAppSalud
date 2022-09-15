import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
//import Vuetify from 'vuetify/lib/framework';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#007BFF',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',

        // colores de la marca
        main_color: '#1CE8B6', // turquesa
        second_0: '#2E9EFF', // azul claro
        second_1: '#33FF35', // verde limon
        third_0: '#6245F5',//violeta
        third_1: '#E8FF00',//amarillo
      },
    },
  },
  icons:{
    iconfont: 'mdi'
  },
});
