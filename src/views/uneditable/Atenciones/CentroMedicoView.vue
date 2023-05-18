<template>
  
      <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined id="CentroMedico">
      <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
        Centro Médico
      </v-card-title>
      <v-divider class="ml-4"></v-divider>
  
      <v-card-text class="">
        <v-row justify="center">
          <v-icon class="mr-5">mdi-hand-heart</v-icon>
          <p> {{model.nombre }} Nombre del centro| <span class="main_color--text text--darken-1"> {{model.segmento }} Nombre del segmento</span></p> 
        </v-row>
      </v-card-text>
    </v-card>
</template>

<script src="../../../components/_entities/Usuarios/CentroMedico.js"></script>