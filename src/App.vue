<template>
      <v-app>
            <Bars v-if="isLoggedIn"/>
            <v-main class="fill-height" fluid>
              <router-view v-if="isLoggedIn"/>
              <Login v-else/>
            </v-main>
      </v-app>
</template>

<script>

    import Login from './views/Usuario/LoginView.vue';
    import Bars from './views/Shared/Bars.vue';
    
    export default {
      name: 'app',
      mounted() {
        this.__isLoggedIn();
      },
      components: {
            Bars,
            Login,
      },
      data() {
            return {
                  isLoggedIn: false
            };
      },
      methods: {
            __isLoggedIn() {
                  if (localStorage.getItem("access_token") != null) { /*
                        let token = localStorage.getItem("access_token").split("."),
                              user = JSON.parse(
                              decodeURIComponent(
                              atob(token[1])
                                    .split("")
                                    .map(function(c) {
                                    return (
                                    "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
                                    );
                                    })
                                    .join("")
                              )
                              );*/
                        //user;
                        //this.$user.initialize();
                        this.isLoggedIn = true;
                  }
            }
      }
};
</script>