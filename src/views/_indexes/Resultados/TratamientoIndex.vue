<template>

    <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined >
      <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
        Tratamiento(s)
      </v-card-title>
      <v-divider class="ml-4"></v-divider>
      <v-card-text class="">
        
        <v-row class="py-0 my-0 ">
            <v-col class="py-0 my-0" cols="2">Nombre</v-col>
            <v-col class="py-0 my-0" cols="2">Tiempo</v-col>
            <v-col class="py-0 my-0" cols="2">Dosis</v-col>
            <v-col class="py-0 my-0">Descripcion</v-col>
        </v-row>
        <v-divider></v-divider>
        <Tratamiento/>
        <Tratamiento/>
        <Tratamiento/>
        <Tratamiento/>
      </v-card-text>
    </v-card>
  </template>
  
  <script src="../../../components/_indexes/TratamientoIndex.js">