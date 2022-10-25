<template>

    <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined id="Nino">
      <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
        <v-icon class="mr-5">test-tube</v-icon> Prueba(s)
      </v-card-title>
      <v-divider class="ml-4"></v-divider>
      <v-card-text class="">
        <v-data-table :headers="headers" :items="collection.items" ></v-data-table>
      </v-card-text>
    </v-card>
  </template>
  
  <script src="@/components/_indexes/PruebasIndex.js">