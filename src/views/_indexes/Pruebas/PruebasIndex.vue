<template>

    <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined id="Nino">
      <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
        Prueba(s)
                        <router-link :to="{name: 'Registro Prueba'}" >
                            <v-btn color="primary">
                                <v-icon left>mdi-account-plus</v-icon>
                                Registrar pr
                            </v-btn>
                        </router-link>
      </v-card-title>
      <v-divider class="ml-4"></v-divider>
      <v-card-text class="">
        
        <v-row class="py-0 my-0 ">
            <v-col class="py-0 my-0" cols="2">fecresultado</v-col>
            <v-col class="py-0 my-0" cols="2">fecprueba</v-col>
            <v-col class="py-0 my-0" >resultado</v-col>
            <v-col class="py-0 my-0">observacion</v-col>
        </v-row>
        <v-divider></v-divider>
        <Prueba/>
        <Prueba/>
        <Prueba/>
        <Prueba/>
      </v-card-text>
    </v-card>
  </template>
  
  <script src="../../../components/_indexes/PruebasIndex.js">