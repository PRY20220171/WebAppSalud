<template>

    <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined id="PacienteView">
      <v-card-title class="main_color--text text--darken-1">
        Informacion General
      </v-card-title>
      <v-divider class="ml-4"></v-divider>
  
      <v-card-text class="">
        <v-form>
  
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field label="Tipoembarazo" name="Tipoembarazo" v-model="model.Tipoembarazo" prepend-icon="mdi-email" type="text" color="main_color"/>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Embarazoriesgo" name="Embarazoriesgo" v-model="model.Embarazoriesgo" prepend-icon="mdi-email" type="text" color="main_color"/>
            </v-col>
          </v-row>
  
          <v-row>
            <v-col cols="12" md="6">
              <v-select :items="tipo_doc" label="Tipo de Documento" name="tipo_doc" v-model="model.Controlprenatal" prepend-icon="mdi-email" color="main_color"></v-select>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Número de documento" name="num_doc" v-model="model.Nroembarazo" prepend-icon="mdi-email" type="text" color="main_color"/>
            </v-col>
          </v-row>
    
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field label="Edadgestalnac" name="Edadgestalnac" v-model="model.Edadgestalnac" prepend-icon="mdi-email" type="text" color="main_color" />
            </v-col>
          </v-row>
  
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field label="Tallaalnac" name="Tallaalnac" v-model="model.Tallaalnac" prepend-icon="mdi-email" type="text" color="main_color" />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field label="Perimcefalico" name="Perimcefalico" v-model="model.Perimcefalico" prepend-icon="mdi-email" type="text" color="main_color" />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field label="Respllanto" name="Respllanto" v-model="model.Respllanto" prepend-icon="mdi-email" type="text" color="main_color" />
            </v-col>
          </v-row>
  
        </v-form>
      </v-card-text>
    </v-card>
  </template>
  
  <script src="../../../components/_entities/Pacientes/Nino.js"></script>