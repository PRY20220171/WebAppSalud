<template> <!-- https://github.com/zakaria-29-dev/Vuejs-Vuetify-Login-Application-Moden/blob/main/src/views/Home.vue -->

      <v-container class="fill-height" fluid id="login">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="8">
              <v-card class="elevation-12">
                <v-row>

                      <v-col cols="12" md="8" class="">
                        <v-card-title class="main_color--text text--darken-1 justify-center">
                          Iniciar sesión
                        </v-card-title>
                        <v-divider class="ml-4"></v-divider>

                        <v-card-text class="">
                          <h4 class="text-center mt-4" >Por favor, ingresa tus datos</h4>
                          <v-form>
                            <v-text-field
                              label="Correo" name="Correo"
                              prepend-icon="mdi-email"
                              type="text" color="main_color"
                            />
  
                            <v-text-field
                              id="password" label="Contraseña" name="password"
                              prepend-icon="mdi-lock"
                              type="password" color="main_color"
                            />
                          </v-form>
                        </v-card-text>
                        <v-card-actions class="justify-center mb-6">
                          <v-btn rounded color="main_color" dark class="px-5">
                           <v-icon>mdi-login  </v-icon> Ingresar
                          </v-btn>
                        </v-card-actions>
                      </v-col>

                      <v-col cols="12" md="4" class="main_color white--text">
                        <v-card-title class="">
                          <v-icon class="display-2" dark>mdi-star-shooting</v-icon>
                          <h3 class="display-2 font-weight-bold" >¡Bien <br> venido!</h3>
                        </v-card-title>
                        <v-divider class="" color="white" dark></v-divider>

                        <v-card-text class="mt-6">
                          <p class="text-center">Inicia sesión para acceder a la información requerida</p>
                          <p class="text-center text-h6  mt-4">¿Olvidaste tu contraseña?</p>
                        </v-card-text>
                        
                        <v-card-actions class="justify-center pt-0 pb-5">
                          <v-btn rounded outlined dark>Sí, la olvidé</v-btn>
                        </v-card-actions>
                      </v-col>

                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        
  </template>
  
  <script>
  export default {
    name:'Login',
    data: () => ({
      
    }),
    props: {
      //source: String
    }
  };
  </script>