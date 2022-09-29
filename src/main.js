import Vue from 'vue'
import App from './App.vue'
import router from './router/_indexRoutes'
import store from './store/index'
import vuetify from './plugins/vuetify'
//import proxyConfig from './proxies/_config';
import './assets/styles.css'
import 'vuetify/dist/vuetify.min.css'
Vue.config.productionTip = false
// Vue.use({
//   install(Vue) {
//     Object.defineProperty(Vue.prototype, '$user', {
//       value: {
//         initialize() {
//           let token = localStorage.getItem("access_token").split("."),
//             user = JSON.parse(
//               decodeURIComponent(
//                 atob(token[1])
//                   .split("")
//                   .map(c => {
//                     return (
//                       "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
//                     );
//                   })
//                   .join("")
//               )
//             );

//           store.state.user = {
//             id: user.nameid,
//             name: user.unique_name,
//             lastName: user.family_name,
//             email: user.email,
//             roles: user.role
//           };
//         }
//       }
//     })
//   }
// });
// Vue.use({
//   install(Vue) {
//     Object.defineProperty(Vue.prototype, '$proxies', {
//       value: proxyConfig
//     })
//   }
// });
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
