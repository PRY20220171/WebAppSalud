<template>
  <div id="RegistrarPaciente" class="fill-height">
   <p>{{paciente.id}}AQUI</p>
      <v-stepper v-model="e1" class="grey lighten-4 fill-height" >
          <v-stepper-header class="stepper_plus">

            <v-stepper-step :complete="e1 > 1" step="1" >
              Datos Generales
            </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2" >
              Antecedentes
            </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step step="3" >
              Información Adicional
            </v-stepper-step>

          </v-stepper-header>

            <v-form>
          <v-stepper-items>

              <v-stepper-content step="1">
                <v-row>
                  <v-col cols="12"  md="6"><Paciente ref="Paciente"/></v-col>
                  <v-col cols="12"  md="6"><Ubicacion ref="Ubicacion"/></v-col>
                </v-row>
                <v-btn color="primary" @click="nextStep">  Continue </v-btn>
                <v-btn text @click="Cancel"> Cancel </v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-row>
                  <v-col cols="12"  md="6"><Nino ref="Nino"/></v-col>
                  <v-col cols="12"  md="6"><AntecedentePsicocial ref="AntecedentePsicocial"/></v-col>
                  <v-col cols="12"  md="6"><AntecedentePatologico ref="AntecedentePatologico"/></v-col>
                  <v-col cols="12"  md="6"><AntecedenteFamiliar ref="AntecedenteFamiliar"/></v-col>
                </v-row>
                <v-btn color="main_color darken-1" @click="e1 = 1" dark> Anterior </v-btn>
                <v-btn color="primary" @click="nextStep" > Continue </v-btn>
                <v-btn text @click="Cancel"> Cancel </v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                  <v-col class="justify-center"><Consentimiento/></v-col>
                <v-btn color="main_color darken-1" @click="e1 = 2" dark> Anterior </v-btn>
                <v-btn color="primary" @click="registrar" > ACEPTO </v-btn>
                <v-btn text @click="Cancel"> Cancel </v-btn>
              </v-stepper-content>

          </v-stepper-items>
            </v-form>
      </v-stepper>
      
  </div>
</template>

<script src="../../../components/_entities/Pacientes/_Paciente.js"></script>