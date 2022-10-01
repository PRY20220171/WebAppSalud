<template>

    <v-card class="mb-12 elevation-4 mx-auto px-5 py-5"  id="SignosVitales">
      <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
        Signos Vitales
      </v-card-title>
      <v-divider class="ml-4"></v-divider>
  
      <v-card-text class="">
        <v-col >
          <v-row v-for="item in signosVitales">
            <h4 class="mr-5">{{item.sigla}}</h4>
            <p>{{item.val}}{{item.medicion}}</p>
          </v-row>
        </v-col>
        
      </v-card-text>
    </v-card>
  </template>
  
  <script src="../../../components/_indexes/SignosVitales"></script>