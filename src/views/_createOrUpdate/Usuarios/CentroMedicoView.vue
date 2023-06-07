<template>
  
      <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined id="CentroMedico">
      <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
        Centro Médico
      </v-card-title>
      <v-divider class="ml-4"></v-divider>
  
      <v-card-text class="">
        <v-row class="align-center">
          <v-col cols="4" class="text-capitalize">
            <spam class="main_color--text text--darken-2"> Sector </spam> {{model.sector}}</v-col>
          <v-col cols="8">
            <v-autocomplete v-model="model" :items="centros" item-text="nombre" return-object
            :rules="[() => !!model || 'This field is required']"
            @click="handleChange" v-on:keyup.enter="handleChange" required >
          
            <template v-slot:append-item>
              <v-list-item
                title="Nuevo"
                @click="dialog=true"
              >Nuevo
              </v-list-item>

              <v-divider class="mt-2"></v-divider>
            </template>
          
          </v-autocomplete>
          </v-col>
        </v-row>
          <v-row> <v-icon>mdi-home-city</v-icon>
            <span class='mr-5'> | {{model.ubicacion.pais}}</span>
            <span class='mr-5'> | {{model.ubicacion.region}}</span>
            <span class='mr-5'> | {{model.ubicacion.provincia}}</span>
            <span class='mr-5'> | {{model.ubicacion.distrito}}</span>
          </v-row>
          <v-row>
            <v-icon>mdi-map-marker</v-icon> <span class='mr-5'> {{model.ubicacion.direccion}}</span>
          </v-row>

      <v-row justify="center">
      <v-dialog v-model="dialog"  persistent max-width="600px" >
        <v-card>
          <v-card-title>
            <span class="text-h5">Añadir Centro médico</span>
          </v-card-title>
          <v-card-text>
                  <v-row class="mx-4 mt-1 main_color--text text--darken-1 align-end">
                      <v-icon class="main_color--text text--darken-1">mdi-information</v-icon>
                      <h4 class="ml-2 font-weight-regular"> Información general </h4>
                  </v-row>      
                  <v-text-field label="nombre" required v-model="model.nombre"></v-text-field>
                  <v-select :items="tipo_centro" label="Tipo" required v-model="model.sector"></v-select>
                   <v-divider class="ml-4"></v-divider>
                  <v-row class="mx-4 mt-1 main_color--text text--darken-1 align-end">
                      <v-icon class="main_color--text text--darken-1">mdi-home</v-icon>
                      <h4 class="ml-2 font-weight-regular"> Ubicación actual </h4>
                  </v-row>                  
                  <v-row>
                      <v-col cols="12" sm="6">
                          <v-text-field label="Pais" name="nac_Pais" v-model="model.ubicacion.pais"
                          prepend-icon="mdi-earth" type="text" color="main_color" hide-details="auto" >
                          </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                          <v-text-field label="Region" name="nac_Region" v-model="model.ubicacion.region"
                          prepend-icon="mdi-map" type="text" color="main_color" hide-details="auto">
                          </v-text-field>
                      </v-col>
                  </v-row>
                  <v-row>
                      <v-col cols="12" sm="6">
                          <v-text-field label="Provincia" name="nac_Provincia" v-model="model.ubicacion.provincia" 
                          prepend-icon="mdi-city" type="text" color="main_color" hide-details="auto">
                          </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                          <v-text-field label="Distrito" name="nac_Distrito" v-model="model.ubicacion.distrito" 
                          prepend-icon="mdi-home-city" type="text" color="main_color" hide-details="auto"/>
                      </v-col>
                  </v-row>
          
                  <v-row>
                      <v-col >
                          <v-text-field label="Direccion" name="nac_Direccion" v-model="model.ubicacion.direccion" 
                          prepend-icon="mdi-map-marker" type="text" color="main_color" hide-details="auto"/>
                      </v-col>
                  </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false" > Cancelar</v-btn>
            <v-btn color="blue darken-1" text @click="addCentro" > Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
      </v-card-text>
    </v-card>
</template>

<script src="../../../components/_entities/Usuarios/CentroMedico.js"></script>