<template>

  <v-container fill-height fluid>
    <v-row max-height="200">
      <v-col>
        <div class="text-h2 text-center">
          Bienvenido a Salud++
        </div>
      </v-col>
    </v-row>
    <v-row fill-height>
      <v-col cols="12" md="6">
        <v-row :column="$vuetify.breakpoint.mdAndDown">
          <v-col cols="12">
            <router-link :to="{name: 'Pacientes'}">
              <v-btn block elevation="3" fab tile x-large>
                <v-icon left>
                  mdi-account-supervisor-circle
                </v-icon>
                Modulo de pacientes
              </v-btn>
            </router-link>
          </v-col>
          <v-col cols="12">
            <router-link :to="{name: 'Consultas'}">
            <v-btn block elevation="3" fab tile x-large>
                <v-icon left>
                  mdi-book-account
                </v-icon>
                Modulo de Consultas
              </v-btn>
            </router-link>
          </v-col>
          <v-col cols="12">
            <router-link :to="{name: 'Diagnosticos'}">
              <v-btn block elevation="3" fab tile x-large>
                <v-icon left>
                  mdi-medical-bag
                </v-icon>Modulo de Diagnosticos
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <v-row :column="$vuetify.breakpoint.mdAndDown">
          <v-col cols="12">
            <router-link :to="{name: 'Pruebas'}">
              <v-btn block elevation="3" fab tile x-large>
                <v-icon left>
                  mdi-needle
                </v-icon>Modulo de pruebas
              </v-btn>
            </router-link>
          </v-col>
          <v-col cols="12">
            <router-link :to="{name: 'Resultados'}">
              <v-btn block elevation="3" fab tile x-large>
                <v-icon left>
                  mdi-clipboard-pulse-outline
                </v-icon>Modulo de Resultados
              </v-btn>
            </router-link>
          </v-col>
          <v-col cols="12">
            <router-link :to="{name: 'Usuarios'}">
              <v-btn block elevation="3" fab tile x-large>
                <v-icon left>
                  mdi-badge-account-horizontal
                </v-icon>Modulo de Usuarios
              </v-btn>
            </router-link>
            </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Login from './LoginView.vue';
  export default {
    name: 'HomePage',
    components: {
      //HelloWorld,
      Login,
    },
    data() {
      return {
        isLogged: true,
      }
    },
  }
</script>
<style scoped>
a {
    text-decoration: none;
}
</style>