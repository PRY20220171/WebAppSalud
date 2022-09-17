<template>
  <div>
    <TopBar></TopBar>
      <v-stepper v-model="e1" >
          <v-stepper-header class="v-app-bar fixed_top">

            <v-stepper-step :complete="e1 > 1" step="1">
              Datos Generales
            </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">
              Antecedentes
            </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step step="3">
              Información Adicional
            </v-stepper-step>

          </v-stepper-header>
    <v-main>
        <v-container>

          <v-stepper-items>

            <v-stepper-content step="1">
              <v-card class="mb-12" >
                <v-form>
                  <v-text-field label="Nombres" name="Nombres"
                    prepend-icon="mdi-email" type="text" color="main_color"/>
                    
                  <v-text-field label="Apellidos" name="Apellidos"
                    prepend-icon="mdi-email" type="text" color="main_color"/>

                  <v-text-field label="DNI" name="DNI" 
                    prepend-icon="mdi-email" type="text" color="main_color"/>

                  <v-text-field label="CUI" name="CUI"
                    prepend-icon="mdi-email" type="text" color="main_color"/>

                  <v-text-field label="Sexo" name="Sexo"
                    prepend-icon="mdi-email" type="text" color="main_color"/>

                  <v-text-field label="Fecha de nacimiento" name="Fecha de nacimiento"
                    prepend-icon="mdi-email" type="text" color="main_color"/>

                  <v-text-field label="Grupo Sanguíneo" name="Grupo Sanguíneo"
                    prepend-icon="mdi-email" type="text" color="main_color"/>

                  <v-text-field label="RH" name="RH"
                    prepend-icon="mdi-email" type="text" color="main_color"/>

                  <v-text-field label="telefono" name="telefono" 
                    prepend-icon="mdi-email" type="text" color="main_color"/>

                  <v-text-field label="grado de instrucción" name="grado de instrucción" 
                    prepend-icon="mdi-email" type="text" color="main_color"/>

                  <v-text-field label="centro educativo" name="centro educativo" 
                    prepend-icon="mdi-email" type="text" color="main_color"/>

                  <v-text-field label="ocupacion" name="ocupacion" 
                    prepend-icon="mdi-email" type="text" color="main_color"/>
                    
                  <v-text-field label="estado civil" name="estado civil" 
                    prepend-icon="mdi-email" type="text" color="main_color"/>
                </v-form>
              
              </v-card>

              <v-btn
                color="primary"
                @click="e1 = 2"
              >
                Continue
              </v-btn>

              <v-btn text>
                Cancel
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
              ></v-card>

              <v-btn
                color="primary"
                @click="e1 = 3"
              >
                Continue
              </v-btn>

              <v-btn
                color="main_color"
                @click="e1 = 1"
              >
                Anterior
              </v-btn>

              <v-btn text>
                Cancel
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
              ></v-card>

              <v-btn
                color="primary"
                @click="e1 = 1"
              >
                Continue
              </v-btn>

              <v-btn
                color="main_color"
                @click="e1 = 2"
              >
                Anterior
              </v-btn>

              <v-btn text>
                Cancel
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-container>
    </v-main>
      </v-stepper>
  </div>
</template>

<script>
import TopBar from '../Bars/TopBar.vue';
// import TopBar from '../Bars/TopBar.vue';
// import TopBar from '../Bars/TopBar.vue';
  export default {
    name: 'Home',
    components: {
    TopBar,
   // TopBar,
   // TopBar
},
    data () {
      return {
        e1: 1,
      }
    },
  }

</script>