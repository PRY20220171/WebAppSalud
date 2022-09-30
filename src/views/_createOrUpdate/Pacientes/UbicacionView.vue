<template>

    <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined id="Ubicacion">
      <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
        Ubicaciones
      </v-card-title>
      <v-divider class="ml-4"></v-divider>
  
      <v-card-text class="">
        
        <div class="">
            <v-row class="mx-4 mt-1 main_color--text text--darken-1 align-end">
                <v-icon class="main_color--text text--darken-1">mdi-baby-carriage</v-icon>
                <h4 class="ml-2 font-weight-regular"> Lugar de Nacimiento </h4>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field label="Pais" name="nac_Pais" v-model="lugarnac.pais" 
                    prepend-icon="mdi-earth" type="text" color="main_color" hide-details="auto"/>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field label="Region" name="nac_Region" v-model="lugarnac.region"
                    prepend-icon="mdi-map" type="text" color="main_color" hide-details="auto"/>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field label="Provincia" name="nac_Provincia" v-model="lugarnac.provincia" 
                    prepend-icon="mdi-city" type="text" color="main_color" hide-details="auto"/>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field label="Distrito" name="nac_Distrito" v-model="lugarnac.distrito" 
                    prepend-icon="mdi-home-city" type="text" color="main_color" hide-details="auto"/>
                </v-col>
            </v-row>
    
            <v-row>
                <v-col >
                    <v-text-field label="Direccion" name="nac_Direccion" v-model="lugarnac.direccion" 
                    prepend-icon="mdi-map-marker" type="text" color="main_color" hide-details="auto"/>
                </v-col>
            </v-row>
        </div>
        <v-divider class="mb-4 mt-1"></v-divider>
        <div class="">
            <v-row class="mx-4 mt-1 main_color--text text--darken-1 align-end">
                <v-icon class="main_color--text text--darken-1">mdi-home</v-icon>
                <h4 class="ml-2 font-weight-regular"> Ubicación actual </h4>
            </v-row>
            
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field label="Pais" name="dom_Pais" v-model="domicilioact.pais" 
                    prepend-icon="mdi-earth" type="text" color="main_color" hide-details="auto"/>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field label="Region" name="dom_Region" v-model="domicilioact.region" 
                    prepend-icon="mdi-map" type="text" color="main_color" hide-details="auto"/>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field label="Provincia" name="dom_Provincia" v-model="domicilioact.provincia"
                    prepend-icon="mdi-city" type="text" color="main_color" hide-details="auto"/>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field label="Distrito" name="dom_Distrito" v-model="domicilioact.distrito" 
                    prepend-icon="mdi-home-city" type="text" color="main_color" hide-details="auto"/>
                </v-col>
            </v-row>
    
            <v-row>
                <v-col >
                    <v-text-field label="Direccion" name="dom_Direccion" v-model="domicilioact.direccion" 
                    prepend-icon="mdi-map-marker" type="text" color="main_color" hide-details="auto"/>
                </v-col>
            </v-row>
        </div>
        
      </v-card-text>
    </v-card>
  </template>
  
  <script src="../../../components/_entities/Pacientes/Ubicacion.js"></script>