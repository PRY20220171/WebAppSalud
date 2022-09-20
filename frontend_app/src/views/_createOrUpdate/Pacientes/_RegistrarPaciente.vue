<template>
  <div id="RegistrarPaciente">
    <TopBar/>
    <v-main>
      <v-stepper v-model="e1" class="grey lighten-4" >
          <v-stepper-header class="stepper_plus">

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

          <v-stepper-items>

            <v-stepper-content step="1">
              
              <PacienteView/>

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
          
      </v-stepper>
    </v-main>
  </div>
</template>

<script src="../../../components/_entities/Pacientes/_Paciente.js"></script>