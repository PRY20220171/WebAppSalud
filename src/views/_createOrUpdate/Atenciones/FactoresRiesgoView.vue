<template>

  <v-card class="mb-8 elevation-4 mx-auto px-5 py-5" outlined id="AntecedentePatologico">
    <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
      Factores de Riesgo
    </v-card-title>
    <v-divider class="ml-4"></v-divider>

    <v-card-text class="">
      <v-row >
        <v-col cols="12" md='6' class="px-4">
          <v-row class="py-3">
              <v-select :items="tipo_parentezco" label="Cuidador " name="cuidador" v-model="atencion.facriesgo.cuidador" 
              prepend-icon="mdi-account" color="main_color" hide-details="auto"></v-select>
          </v-row>
          <v-row class="py-3">
            <v-text-field label="apetito" name="apetito" v-model="atencion.facriesgo.apetito"
            prepend-icon="mdi-food-apple" type="text" color="main_color" hide-details="auto" />
          </v-row>
          <v-row class="py-3">
            <v-text-field label="sed" name="sed" v-model="atencion.facriesgo.sed"
            prepend-icon="mdi-cup" type="text" color="main_color" hide-details="auto" />
          </v-row>
          <v-row class="py-3">
            <v-text-field label="sueno" name="sueno" v-model="atencion.facriesgo.sueno"
            prepend-icon="mdi-sleep" type="text" color="main_color" hide-details="auto" />
          </v-row>
        </v-col>
        <v-col cols="12" md='6' class="px-4">
          <v-row class="py-3">
            <v-text-field label="estadoanimo" name="estadoanimo" v-model="atencion.facriesgo.estadoanimo"
            prepend-icon="mdi-emoticon-happy" type="text" color="main_color" hide-details="auto" />
          </v-row>
          <v-row class="py-3">
            <v-text-field label="orina" name="orina" v-model="atencion.facriesgo.orina"
            prepend-icon="mdi-cup-water" type="text" color="main_color" hide-details="auto" />
          </v-row>
          <v-row class="py-3">
            <v-text-field label="deposiciones" name="deposiciones" v-model="atencion.facriesgo.deposiciones"
            prepend-icon="mdi-emoticon-poop" type="text" color="main_color" hide-details="auto" />
          </v-row>
          <v-row class="py-3">
              <v-text-field label="Fecha de última regla" name="Fecha de última regla"  v-model="atencion.facriesgo.fecultregla"
              prepend-icon="mdi-cake-variant" type="date" color="main_color" hide-details="auto" />
          </v-row>
        </v-col>
        
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script src="../../../components/_entities/Atenciones/FactoresRiesgo"></script>