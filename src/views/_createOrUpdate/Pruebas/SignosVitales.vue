<template>

  <v-card class="elevation-4 mx-auto px-5 py-5" id="SignosVitales">
    <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
      Signos Vitales
    </v-card-title>
    <v-divider class="ml-4"></v-divider>
    <v-card-text class="">
      <v-row>
        <v-col cols='3'>
          <v-text-field  v-model='atencion.signosvitales.temperatura' suffix="°C" prefix="Temperatura" name="temperatura" type="number" color="main_color"
            hide-details="auto" dense />
        </v-col>
        <v-col cols='3'>
          <v-text-field  v-model='atencion.signosvitales.presionArterial' suffix="mm Hg" prefix="Presion Arterial" name="presionArterial" type="number" color="main_color"
            hide-details="auto" dense />
        </v-col>
        <v-col cols='4'>
          <v-text-field  v-model='atencion.signosvitales.frecuenciaCardiaca' suffix="ppm" prefix="Frecuencia Cardiaca" name="frecuenciaCardiaca" type="number" color="main_color"
            hide-details="auto" dense />
        </v-col>
        <v-col cols='3'>
          <v-text-field  v-model='atencion.signosvitales.peso' suffix="kg" prefix="Peso" name="peso" type="number" color="main_color" hide-details="auto"
            dense />
        </v-col>
        <v-col cols='3'>
          <v-text-field  v-model='atencion.signosvitales.talla' suffix="cm" prefix="Talla" name="talla" type="number" color="main_color" hide-details="auto"
            dense />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script src="../../../components/_indexes/SignosVitales.js"></script>