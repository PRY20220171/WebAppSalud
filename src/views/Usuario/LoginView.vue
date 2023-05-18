<template>
  <!-- https://github.com/zakaria-29-dev/Vuejs-Vuetify-Login-Application-Moden/blob/main/src/views/Home.vue -->

  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8">
        <v-card class="elevation-12">
          <v-alert type="error" v-if="wrong"> Por favor, ingresar datos correctos</v-alert>
          <v-row>

            <v-col cols="12" md="8" class="">
              <v-card-title class="main_color--text text--darken-1 justify-center">
                Iniciar sesión
              </v-card-title>
              <v-divider class="ml-4"></v-divider>
              <v-form ref="form" @submit.prevent="authenticate">
                <v-card-text class="">
                  <h4 class="text-center mt-4">Por favor, ingresa tus datos</h4>
                    <v-text-field label="Correo" name="Correo" v-model="loginData.email" prepend-icon="mdi-email" type="text" color="main_color" />
                    <v-text-field label="Contraseña" name="Password" v-model="loginData.password" prepend-icon="mdi-lock" type="password"
                      color="main_color" />
                </v-card-text>
                <v-card-actions class="justify-center mb-6">
                  <v-btn rounded color="main_color" dark class="px-5" type="submit">
                    <v-icon>mdi-login </v-icon> Ingresar
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-col>

            <v-col cols="12" md="4" class="main_color white--text">
              <v-card-title class="">
                <v-icon class="display-2" dark>mdi-star-shooting</v-icon>
                <h3 class="display-2 font-weight-bold">¡Bien <br> venido!</h3>
              </v-card-title>
              <v-divider class="" color="white" dark></v-divider>

              <v-card-text class="mt-6">
                <p class="text-center">Inicia sesión para acceder a la información requerida</p>
                <p class="text-center text-h6  mt-4">¿Olvidaste tu contraseña?</p>
              </v-card-text>
              <v-card-actions class="row justify-center pt-0 pb-5">
                <v-btn rounded outlined dark @click.stop="forget=true">Sí, la olvidé</v-btn>
                <v-alert  colored-border color="main_color" type="success" v-model="enviado" dismissible class="mt-3"> Se envió correo </v-alert>
              </v-card-actions>
            </v-col>

          </v-row>
          <v-alert :type="alertType">
            {{mensaje}}
          </v-alert>
        </v-card>
      </v-col>
            <v-dialog v-model="forget" max-width="350">
              <v-card>
                <v-card-title class="main_color--text text--darken-1 justify-center">
                  Olvidé mi contraseña
                </v-card-title>
                <v-divider class="ml-4"></v-divider>
                <v-card-text><p></p>
                  <p>Se le proporcionará una nueva contraseña.</p>
                  <p>Por favor, ingrese su correo</p>
                  <v-text-field label="Correo" name="Correo" prepend-icon="mdi-email" type="text" color="main_color" />
                  <v-row class="justify-center mb-6">
                    <v-btn rounded color="main_color" dark class="px-5" @click="solicitar = true">
                      <v-icon>mdi-login </v-icon> Enviar solicitud de cambio
                    </v-btn>
                  </v-row>
                  <v-progress-linear :active="solicitar" :indeterminate="solicitar"  bottom color="second_0"></v-progress-linear>
                </v-card-text>
              </v-card>
            </v-dialog>
    </v-row>
  </v-container>

</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    name: 'LoginPage',
    data() {
            return {
              loginData: {
                email: null,
                password: null,
                loading: false
              },
              wrong:false,
              forget:false,
              solicitar:false,
              enviado: false,

              alertType:'info',
              mensaje:'Por favor completar la información necesaria',
                  //isLoggedIn: false
            };
      },
    watch: {
      solicitar (val) {
        if (!val) return
        setTimeout(() => (
          this.solicitar = false,
          this.forget = false,
          this.enviado = true
        ), 3000)
      },
      usuario(val){
        console.log("viendo user")
        
        console.log('l1',localStorage.access_token)
            
              this.$parent.$parent.isLoggedIn = true;
              this.alertType= 'success'
              this.mensaje='Usuario correcto'
          location.reload();
      }
    },
    computed:{
      ...mapState('UsuarioModule',['usuario']),
    },
    methods: {
      ...mapActions('UsuarioModule',['getUsuarioByAutentificacion']),
      authenticate() {
        //console.log("authenticated",this.$proxies.userProxy);
        if (!this.loginData.email || !this.loginData.password) {
          this.alertType= 'warning'
          this.mensaje='Por favor completar todos los campos'
        }else{

          this.getUsuarioByAutentificacion({
          correo:this.loginData.email,
          password:this.loginData.password,
          proxy:this.$proxies.userProxy
        });}
        console.log('usuario:',this.usuario)
        /*
                this.login.loading = true;
                this.$proxies.identityProxy
                  .login(this.login)
                  .then(x => {
                    let token = x.data.split(".");
                    let user = atob(token[1]);
                    user;

                    this.login.loading = false;
                    this.$parent.isLoggedIn = true;

                    this.$notify({
                      group: "global",
                      type: "is-success",
                      text: "Su acceso ha sido validado correctamente."
                    });

                    localStorage.setItem("access_token", x.data);
                    this.$user.initialize();
                  })
                  .catch(x => {
                    if (x.response.status === 400) {
                      this.$notify({
                        group: "global",
                        type: "is-warning",
                        text: x.response.data
                      });
                    }
                    this.login.loading = false;
                  });*/
        /*
        if(!this.usuario || this.usuario==[]) {
          wrong=true
          console.log('not pass')
        }*/
        
        if (!localStorage.getItem("access_token")) {
              this.alertType= 'error'
              this.mensaje='Usuario no se encuentra registrado'
              console.log('l2',localStorage.access_token, this.alertType, this.mensaje)
            }
          
        //this.$refs.form.validate();
      },
      addNewUser() {
        console.log('tbd')
        /*
                this.register.loading = true;
                this.$proxies.identityProxy
                  .register(this.register)
                  .then(() => {
                    this.register.email = null;
                    this.register.password = null;
                    this.register.firstNames = null;
                    this.register.lastNames = null;
                    this.$notify({
                      group: "global",
                      type: "is-success",
                      text: "Su cuenta ha sido creada con éxito"
                    });
                    this.register.loading = false;
                  })
                  .catch(x => {
                    if (x.response.status === 400) {
                      this.$notify({
                        group: "global",
                        type: "is-warning",
                        text: x.response.data
                      });
                    }
                    this.register.loading = false;
                  });*/
      }
    }
  };
</script>