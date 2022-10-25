<template>

  <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined id="Atencion">
    <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
      Motivo de Consulta
    </v-card-title>
    <v-divider class="ml-4"></v-divider>

    <v-card-text class="">
              <v-row ><Sintoma/></v-row>
      <v-row >
        <v-col  cols="12" class='px-6'>
          <v-row class="py-2">
            <v-textarea label="Motivo de la consulta" name="motivoconsulta" v-model="atencion.motivoconsulta"
              prepend-icon="mdi-equal-box"  color="main_color" hide-details="auto" auto-grow  no-resize rows="1" class="pr-4">
            </v-textarea>
          </v-row>
          <v-row class="py-2">
            <v-textarea label="Observaciones" name="observaciones" v-model="atencion.observaciones"
              prepend-icon="mdi-note-multiple"  color="main_color" hide-details="auto" auto-grow  no-resize rows="1" class="pr-4">
            </v-textarea>
          </v-row>
          <v-row class="py-3">
            <v-text-field label="Tiempo de la enfermedad" name="tiempoenfermedad" v-model="atencion.tiempoenfermedad"
            prepend-icon="mdi-timer" type="text" color="main_color" hide-details="auto" auto-grow />
          </v-row>
          <v-row class="py-2">
            <v-textarea label="Forma de inicio" name="formainicio" v-model="atencion.formainicio"
              prepend-icon="mdi-note-multiple"  color="main_color" hide-details="auto" auto-grow  no-resize rows="1" class="pr-4">
            </v-textarea>
          </v-row>
          <v-row class="py-3">
            <v-textarea label="Curso de la enfermedad" name="curso" v-model="atencion.curso"
              prepend-icon="mdi-timetable"  color="main_color" hide-details="auto" auto-grow  no-resize rows="2" class="pr-4">
            </v-textarea>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script src="../../../components/_entities/Atenciones/Atencion.js"></script>