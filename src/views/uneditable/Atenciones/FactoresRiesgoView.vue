<template>

  <v-card class="mb-8 elevation-4 mx-auto px-5 py-5" outlined id="AntecedentePatologico">
    <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
      Factores de Riesgo
    </v-card-title>
    <v-divider class="ml-4"></v-divider>

    <v-card-text class="">
      <v-row >
        <v-col cols="12"  class="px-4">
          <v-row class="py-3">
            <v-icon class="mr-5">mdi-account</v-icon>
            <h4 class="mr-5">Cuidador</h4>
            <p>{{model.cuidador}}</p>
          </v-row>
          <v-row class="py-3">
            <v-icon class="mr-5">mdi-food-apple</v-icon>
            <h4 class="mr-5">apetito</h4>
            <p>{{model.apetito}}</p>
          </v-row>
          <v-row class="py-3">
            <v-icon class="mr-5">mdi-cup</v-icon>
            <h4 class="mr-5">sed</h4>
            <p>{{model.sed}}</p>
          </v-row>
          <v-row class="py-3">
            <v-icon class="mr-5">mdi-sleep</v-icon>
            <h4 class="mr-5">sueño</h4>
            <p>{{model.sueno}}</p>
          </v-row>
          
          <v-row class="py-3">
            <v-icon class="mr-5">mdi-emoticon-happy</v-icon>
            <h4 class="mr-5">apetito</h4>
            <p>{{model.estadoanimo}}</p>
          </v-row>
          <v-row class="py-3">
            <v-icon class="mr-5">mdi-cup-water</v-icon>
            <h4 class="mr-5">orina</h4>
            <p>{{model.orina}}</p>
          </v-row>
          <v-row class="py-3">
            <v-icon class="mr-5">mdi-emoticon-poop</v-icon>
            <h4 class="mr-5">deposiciones</h4>
            <p>{{model.deposiciones}}</p>
          </v-row>
          <v-row class="py-3">
            <v-icon class="mr-5">mdi-water-alert</v-icon>
            <h4 class="mr-5">Fecha de última regla</h4>
            <p>{{model.fecultregla}}</p>
          </v-row>
        </v-col>
        
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script src="../../../components/_entities/Atenciones/FactoresRiesgo"></script>