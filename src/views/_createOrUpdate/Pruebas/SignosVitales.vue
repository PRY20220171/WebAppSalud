<template>

  <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" id="SignosVitales">
    <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
      Signos Vitales
    </v-card-title>
    <v-divider class="ml-4"></v-divider>
    <v-card-text class="">
      <v-col>
        <v-row>
          <v-text-field suffix="°C" prefix="Temperatura" name="temperatura" type="text" color="main_color"
            hide-details="auto" dense />
        </v-row>
        <v-row>
          <v-text-field suffix="" prefix="Presion Arterial" name="presionArterial" type="text" color="main_color"
            hide-details="auto" dense />
        </v-row>
        <v-row>
          <v-text-field suffix="" prefix="Frecuencia Cardiaca" name="frecuenciaCardiaca" type="text" color="main_color"
            hide-details="auto" dense />
        </v-row>
        <v-row>
          <v-text-field suffix="kg" prefix="Peso" name="peso" type="text" color="main_color" hide-details="auto"
            dense />
        </v-row>
        <v-row>
          <v-text-field suffix="cm" prefix="Talla" name="talla" type="text" color="main_color" hide-details="auto"
            dense />
        </v-row>
      </v-col>
    </v-card-text>
  </v-card>
</template>
<script src="../../../components/_indexes/SignosVitales.js"></script>