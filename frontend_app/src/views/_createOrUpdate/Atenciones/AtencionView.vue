<template>

    <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined >
      <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
        Detalles generales
      </v-card-title>
      <v-divider class="ml-4"></v-divider>
  
      <v-card-text class="">
        <v-row >
          <v-col  cols="12" class='px-6'>
            <v-row>
              <v-col>
                <v-text-field label="Fecha de registro" name="fecharegistro" v-model="model.fecharegistro"
                prepend-icon="mdi-email" type="date" color="main_color" hide-details="auto" />
              </v-col>
              <v-col>
                <v-select :items="tipo_centro" label="Institución médica" name="grado_instr" v-model="model.Gradoinstruccion" 
                prepend-icon="mdi-school" color="main_color" hide-details="auto" ></v-select>
              </v-col>
            </v-row>
            <v-row class="py-2">
              <v-textarea label="Motivo de la consulta" name="motivoconsulta" v-model="model.motivoconsulta"
                prepend-icon="mdi-email"  color="main_color" hide-details="auto" auto-grow  no-resize rows="1" class="pr-4">
              </v-textarea>
            </v-row>
            <v-row class="py-2">
              <v-textarea label="Observaciones" name="observaciones" v-model="model.observaciones"
                prepend-icon="mdi-email"  color="main_color" hide-details="auto" auto-grow  no-resize rows="1" class="pr-4">
              </v-textarea>
            </v-row>
            <v-row class="py-3">
              <v-text-field label="Tiempo de la enfermedad" name="tiempoenfermedad" v-model="model.tiempoenfermedad"
              prepend-icon="mdi-email" type="number" color="main_color" hide-details="auto" auto-grow />
            </v-row>
            <v-row class="py-2">
              <v-textarea label="Forma de inicio" name="formainicio" v-model="model.formainicio"
                prepend-icon="mdi-email"  color="main_color" hide-details="auto" auto-grow  no-resize rows="1" class="pr-4">
              </v-textarea>
            </v-row>
            <v-row class="py-3">
              <v-textarea label="Curso de la enfermedad" name="curso" v-model="model.curso"
                prepend-icon="mdi-email"  color="main_color" hide-details="auto" auto-grow  no-resize rows="2" class="pr-4">
              </v-textarea>
            </v-row>
            <v-row class="py-2">
              <v-textarea label="Signos o sintomas" name="signossintomas" v-model="model.signossintomas"
                prepend-icon="mdi-email"  color="main_color" hide-details="auto" auto-grow  no-resize rows="2" class="pr-4">
              </v-textarea>
            </v-row>            
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </template>
  
  <script src="../../../components/_entities/Atenciones/Atencion.js"></script>
  <script src="../../../components/_entities/Atenciones/CentroMedico.js"></script>