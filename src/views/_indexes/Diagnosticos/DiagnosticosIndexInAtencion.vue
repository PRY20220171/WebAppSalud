<template>

    <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined id="Nino">
      <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
        Diagnostico(s)
      </v-card-title>
      <v-divider class="ml-4"></v-divider>
      <v-card-text class="">
        <v-row class="py-0 my-0 ">
            <v-col class="py-0 my-0" cols="3">Fec. Registro</v-col>
            <v-col class="py-0 my-0">Descripcion</v-col>
            <v-col class="py-0 my-0" cols="2">Estado</v-col>
            <v-col class="py-0 my-0" cols="2" >Etapa</v-col>
        </v-row>
        <v-divider></v-divider>
        <Diagnostico/>
        <Diagnostico/>
        <Diagnostico/>
        <Diagnostico/>
      </v-card-text>
    </v-card>
  </template>
  
  <script src="../../../components/_indexes/DiagnosticosIndex.js">