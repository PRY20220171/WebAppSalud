<template>

    <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined id="Acompanante">
      <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
        Informacion de Acompañante
      </v-card-title>
      <v-divider class="ml-4"></v-divider>
  
      <v-card-text class="">
  
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field label="Nombres" name="Nombres" v-model="atencion.acompanante.nombres" 
              prepend-icon="mdi-account" type="text" color="main_color" hide-details="auto"/>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Apellidos" name="Apellidos" v-model="atencion.acompanante.apellidos" 
              prepend-icon="mdi-account-group" type="text" color="main_color" hide-details="auto"/>
            </v-col>
          </v-row>
  
          <v-row>
            <v-col cols="12" sm="6">
              <v-select :items="tipo_doc" label="Tipo de Documento" name="tipo_doc" v-model="atencion.acompanante.doctipo" 
              prepend-icon="mdi-card-bulleted-settings" color="main_color" hide-details="auto"></v-select>
            </v-col>
            <v-col  cols="12" sm="6">
              <v-text-field label="Número de documento" name="num_doc" v-model="atencion.acompanante.docnum" 
              prepend-icon="mdi-card-account-details" type="text" color="main_color" hide-details="auto"/>
            </v-col>
          </v-row>
  
          <v-row>
            <v-col >
              <v-text-field label="Fecha de nacimiento" name="fec_nac"  v-model="atencion.acompanante.fecnac" 
              prepend-icon="mdi-cake-variant" type="date" color="main_color" hide-details="auto" />
            </v-col>
            <!--<v-col  class="align-self-end">
              <p class="my-2">
                <v-icon class="mr-2">mdi-cake-variant-outline</v-icon>
                 <span> Edad: {{edad_acompanante.text}}{{atencion.acompanante.fec_nac}}</span>
              </p>
            </v-col> -->
          </v-row>
  
          <v-row>
            <v-col >
              <v-text-field label="telefono" name="telefono" v-model="atencion.acompanante.telefono" 
              prepend-icon="mdi-phone" type="text" color="main_color" hide-details="auto" oninput="if(this.value < 0) this.value = 0;"/>
            </v-col>            
            <v-col cols="12" md="6">
              <v-select :items="tipo_parentezco" label="parentezco" name="parentezco" v-model="atencion.acompanante.parentezco" 
              prepend-icon="mdi-school" color="main_color" hide-details="auto"></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col >
              <v-select :items="tipo_educ" label="grado de instrucción" name="grado_instr" v-model="atencion.acompanante.gradoinstruccion" 
              prepend-icon="mdi-school" color="main_color" hide-details="auto"></v-select>
            </v-col>
            <v-col  cols="12" sm="6">
              <v-text-field label="Ocupación" name="ocupacion" v-model="atencion.acompanante.ocupacion" 
              prepend-icon="mdi-briefcase" type="text" color="main_color" hide-details="auto"/>
            </v-col>
          </v-row>
  
      </v-card-text>
    </v-card>
  </template>
  
  <script src="../../../components/_entities/Atenciones/Acompanante.js"></script>