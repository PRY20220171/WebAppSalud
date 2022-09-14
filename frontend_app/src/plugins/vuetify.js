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

        // colores creados
        rojo: '#E3371E',
        naranja: '#FF7A48',
        turquesa: '#0593A2',
        azul: '#103778',
        humo: '#F9FAFC',
      },
    },
  },
  icons:{
    iconfont: 'mdi'
  },
});
