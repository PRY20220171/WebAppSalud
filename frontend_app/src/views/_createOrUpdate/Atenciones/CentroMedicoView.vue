<template>
  
      <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined id="CentroMedico">
      <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
        Centro Médico
      </v-card-title>
      <v-divider class="ml-4"></v-divider>
  
      <v-card-text class="">

        <v-autocomplete v-model="selected" :items="items"
          :rules="[() => !!selected || 'This field is required']"
          @click="handleChange" v-on:keyup.enter="handleChange" required ></v-autocomplete>

      <v-row justify="center">
      <v-dialog v-model="dialog"  persistent max-width="600px" >
        <v-card>
          <v-card-title>
            <span class="text-h5">Añadir Centro médico</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field label="nombre" required v-model="model.nombre"></v-text-field>
                </v-col>
                <v-col>
                  <v-select :items="tipo_centro" label="Tipo" required v-model="model.sector"></v-select>
                </v-col>
              </v-row>
            </v-container>
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

<script src="../../../components/_entities/Atenciones/CentroMedico.js"></script>