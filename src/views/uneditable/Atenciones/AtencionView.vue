<template>

  <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined id="Atencion">
    <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
      Motivo de Consulta
    </v-card-title>
    <v-divider class="ml-4"></v-divider>

    <v-card-text class="">
        <span v-for="item in items" >{{item}}, </span>
      <v-row >
        <v-col  cols="12" class='px-6'>
          <v-row class="py-2 justify-start">
            <v-icon class="mr-5">mdi-equal-box</v-icon>
            <h4 class="mr-5">Motivo de la consulta</h4>
          </v-row>
            <p>{{model.motivoconsulta}}</p>
          <v-row class="py-2 justify-start">
            <v-icon class="mr-5">mdi-note-multiple</v-icon>
            <h4 class="mr-5">Observaciones</h4>
          </v-row>
            <p>{{model.observaciones}}</p>
          <v-row class="py-2 justify-start">
            <v-icon class="mr-5">mdi-timer</v-icon>
            <h4 class="mr-5">Tiempo de la enfermedad</h4>
            <p>{{model.tiempoenfermedad}}</p>
          </v-row>
          <v-row class="py-2 justify-start">
            <v-icon class="mr-5">mdi-note-multiple</v-icon>
            <h4 class="mr-5">Forma de inicio</h4>
          </v-row>
            <p>{{model.formainicio}}</p>
          <v-row class="py-2 justify-start">
            <v-icon class="mr-5">mdi-timetable</v-icon>
            <h4 class="mr-5">Curso de la enfermedad</h4>
          </v-row>
            <p>{{model.curso}}</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script src="../../../components/_entities/Atenciones/Sintoma"></script>
<script src="../../../components/_entities/Atenciones/Atencion.js">';</script>