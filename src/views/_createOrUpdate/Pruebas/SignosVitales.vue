<template>

  <v-card class="elevation-4 mx-auto px-5 py-5" id="SignosVitales">
    <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
      Signos Vitales
    </v-card-title>
    <v-divider class="ml-4"></v-divider>
    <v-card-text class="">
      <v-row>
        <v-col cols='6'>
          <v-text-field  v-model='atencion.signosvitales.presionArterial' suffix="mm Hg" label="Presion Arterial" type="number" color="main_color"
            hide-details />
        </v-col>
        <v-col cols='6'>
          <v-text-field  v-model='atencion.signosvitales.frecuenciaCardiaca' suffix="ppm" label="Frecuencia Cardiaca" type="number" color="main_color"
            hide-details />
        </v-col>
        <v-col cols='4'>
          <v-text-field  v-model='atencion.signosvitales.temperatura' suffix="°C" label="Temperatura" type="number" color="main_color"
            hide-details />
        </v-col>
        <v-col cols='4'>
          <v-text-field  v-model='atencion.signosvitales.peso' suffix="kg" label="Peso"  type="number" color="main_color" hide-details/>
        </v-col>
        <v-col cols='4'>
          <v-text-field  v-model='atencion.signosvitales.talla' suffix="cm" label="Talla"  type="number" color="main_color" hide-details/>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script src="../../../components/_indexes/SignosVitales.js"></script>