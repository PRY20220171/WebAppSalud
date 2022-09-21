<template>

    <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined id="Nino">
      <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
        Antecedentes Perinatales
      </v-card-title>
      <v-divider class="ml-4"></v-divider>
  
      <v-card-text class="">
        <v-row >
          <v-col  cols="12" md="6" class='px-6'>
            <v-row class="py-2">
              <v-radio-group row label="Tipo de embarazo" v-model="model.Tipoembarazo"
              prepend-icon="mdi-email" color="main_color" hide-details="auto" >
                <v-radio v-for="item in tipo_embarazo" :label="item" :value="item" class="col px-0 py-0"></v-radio>
              </v-radio-group>
            </v-row>
            <v-row class="py-2">
              <v-radio-group row label="¿Embarazo de riesgo?" v-model="model.Embarazoriesgo" 
              prepend-icon="mdi-email" color="main_color" hide-details="auto" >
                <v-radio v-for="item in tipo_riesgo" :label="item" :value="item" ></v-radio>
              </v-radio-group>
            </v-row>
            <v-row class="py-2">
              <v-radio-group row label="¿Hubo control prenatal?" v-model="model.Controlprenatal"
              prepend-icon="mdi-email" color="main_color" hide-details="auto" >
                <v-radio v-for="item in tipo_control" :label="item" :value="item" ></v-radio>
              </v-radio-group>
            </v-row>
            <v-row class="py-2">
              <v-textarea label="Respiracion o llanto al nacer" name="Respllanto" v-model="model.Respllanto"
                prepend-icon="mdi-email"  color="main_color" hide-details="auto"  no-resize rows="2"
                hint="Observaciones sobre la respiracion o llanto al nacer" class="pr-4">
              </v-textarea>
            </v-row>
          </v-col>
          
          <v-col cols="12" md="6" class='px-6'>
            <v-row class="py-3">
              <v-text-field label="Número de embarazo" name="Nroembarazo" v-model="model.Nroembarazo"
              prepend-icon="mdi-email" type="number" color="main_color" hide-details="auto" />
            </v-row>
            <v-row class="py-3">
              <v-text-field label="Edad gest. al nacer" name="Edadgestalnac" v-model="model.Edadgestalnac" 
              prepend-icon="mdi-email" type="number" color="main_color" hide-details="auto" suffix=" sem"/>
            </v-row>
            <v-row class="py-3">
              <v-text-field label="Peso al nacer" name="Pesoalnac" v-model="model.Pesoalnac" 
              prepend-icon="mdi-email" type="number" color="main_color" hide-details="auto" suffix=" kg"/>
            </v-row>
            <v-row class="py-3">
              <v-text-field label="Talla al nacer" name="Tallaalnac" v-model="model.Tallaalnac" 
              prepend-icon="mdi-email" type="number" color="main_color" hide-details="auto" suffix=" cm"/>
            </v-row>
            <v-row class="py-3">
              <v-text-field label="Perimetro cefálico al nacer" name="Perimcefalico" v-model="model.Perimcefalico" 
              prepend-icon="mdi-email" type="number" color="main_color" hide-details="auto" suffix=" cm"/>
            </v-row>
            
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </template>
  
  <script src="../../../components/_entities/Pacientes/Nino.js"></script>