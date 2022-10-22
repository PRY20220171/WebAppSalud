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
                    <v-select :items="list_paises" label="Pais" name="nac_Pais" v-model="paciente.lugarnac.pais"
                    prepend-icon="mdi-earth" color="main_color" hide-details="auto" 
                    item-text="name" item-value="name" v-on:input="getRegiones('nac')">
                    </v-select>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-select :items="list_nac_regiones" label="Region" name="nac_Region" v-model="paciente.lugarnac.region"
                    prepend-icon="mdi-map" color="main_color" hide-details="auto"
                    item-text="name" item-value="name" v-on:change="getProvincias('nac')">
                    </v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-select :items="list_nac_provincias" label="Provincia" name="nac_Provincia" v-model="paciente.lugarnac.provincia" 
                    prepend-icon="mdi-city" color="main_color" hide-details="auto"
                    item-text="name" item-value="name">
                    </v-select>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field label="Distrito" name="nac_Distrito" v-model="paciente.lugarnac.distrito" 
                    prepend-icon="mdi-home-city" type="text" color="main_color" hide-details="auto"/>
                </v-col>
            </v-row>
    
            <v-row>
                <v-col >
                    <v-text-field label="Direccion" name="nac_Direccion" v-model="paciente.lugarnac.direccion" 
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
                    <v-select :items="list_paises" label="Pais" name="dom_Pais" v-model="paciente.domicilioact.pais"
                    prepend-icon="mdi-earth" color="main_color" hide-details="auto" 
                    item-text="name" item-value="name" v-on:input="getRegiones('dom')">
                    </v-select>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-select :items="list_dom_regiones" label="Region" name="dom_Region" v-model="paciente.domicilioact.region"
                    prepend-icon="mdi-map" color="main_color" hide-details="auto"
                    item-text="name" item-value="name" v-on:change="getProvincias('dom')">
                    </v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-select :items="list_dom_provincias" label="Provincia" name="dom_Provincia" v-model="paciente.domicilioact.provincia" 
                    prepend-icon="mdi-city" color="main_color" hide-details="auto"
                    item-text="name" item-value="name">
                    </v-select>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field label="Distrito" name="dom_Distrito" v-model="paciente.domicilioact.distrito" 
                    prepend-icon="mdi-home-city" type="text" color="main_color" hide-details="auto"/>
                </v-col>
            </v-row>
    
            <v-row>
                <v-col >
                    <v-text-field label="Direccion" name="dom_Direccion" v-model="paciente.domicilioact.direccion" 
                    prepend-icon="mdi-map-marker" type="text" color="main_color" hide-details="auto"/>
                </v-col>
            </v-row>
        </div>
        
      </v-card-text>
    </v-card>
  </template>
  
  <script src="../../../components/_entities/Pacientes/Ubicacion.js"></script>