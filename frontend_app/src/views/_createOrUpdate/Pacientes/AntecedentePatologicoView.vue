<template>

    <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined id="AntecedentePatologico">
      <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
        Antecedentes Patológicos
      </v-card-title>
      <v-divider class="ml-4"></v-divider>
  
      <v-card-text class="">
        <v-row >
          <v-col  cols="12" md='6' class='px-6'>
            <v-row class="py-2">
              <v-radio-group row label="Tuberculosis" v-model="model.tbc"
              prepend-icon="mdi-email" color="main_color" hide-details="auto" >
                <v-radio v-for="item in tipo_rpta" :label="item" :value="item" ></v-radio>
              </v-radio-group>
            </v-row>
            <v-row class="py-2">
              <v-radio-group row label="SOBA/Asma" v-model="model.sobasma" 
              prepend-icon="mdi-email" color="main_color" hide-details="auto" >
                <v-radio v-for="item in tipo_rpta" :label="item" :value="item" ></v-radio>
              </v-radio-group>
            </v-row>
            <v-row class="py-2">
              <v-radio-group row label="Transf. sanguínea" v-model="model.transfsangre"
              prepend-icon="mdi-email" color="main_color" hide-details="auto" >
                <v-radio v-for="item in tipo_rpta" :label="item" :value="item" ></v-radio>
              </v-radio-group>
            </v-row>
          </v-col>
          <v-col cols="12" md='6'>
            <v-row class="py-3">
              <v-text-field label="Neurologico" name="neurologico" v-model="model.neurologico"
              prepend-icon="mdi-email" type="text" color="main_color" hide-details="auto" />
            </v-row>
            <v-row class="py-3">
              <v-text-field label="Alergia a medicamento" name="alergiamedic" v-model="model.alergiamedic"
              prepend-icon="mdi-email" type="text" color="main_color" hide-details="auto" />
            </v-row>
            <v-row class="py-3">
              <v-text-field label="Otros antecedentes" name="otros" v-model="model.otros"
              prepend-icon="mdi-email" type="text" color="main_color" hide-details="auto" />
            </v-row>
          </v-col>
          
        </v-row>
      </v-card-text>
    </v-card>
  </template>
  
  <script src="../../../components/_entities/Pacientes/AntecedentePatologico.js"></script>