<template>

    <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined id="AntecedentePsicosocial">
      <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
        Antecedentes Psicocial
      </v-card-title>
      <v-divider class="ml-4"></v-divider>
  
      <v-card-text class="">
        
        <v-row>
          <v-col cols="12" md="6">
              <v-radio-group row label="Apoyo familiar en el embarazo" v-model="model.apoyofam"
              prepend-icon="mdi-email" color="main_color" hide-details="auto" >
                <v-radio v-for="item in tipo_apoyo" :label="item" :value="item" ></v-radio>
              </v-radio-group>
          </v-col>
          <v-col cols="12" md="6">
              <v-text-field label="Edad de la persona gestante" name="edadgestante" v-model="model.edadgestante"
              prepend-icon="mdi-email" type="number" color="main_color" hide-details="auto" suffix=' años' />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6" >
              <v-radio-group row label="Embarazos espaciados" v-model="model.embarazoespac"
              prepend-icon="mdi-email" color="main_color" hide-details="auto" >
                <v-radio v-for="item in tipo_emb_espac" :label="item" :value="item" ></v-radio>
              </v-radio-group>
          </v-col>
          <v-col cols="12" md="6">
              <v-text-field label="Nro. de hijos" name="nrohijos" v-model="model.nrohijos"
              prepend-icon="mdi-email" type="number" color="main_color" hide-details="auto" suffix=" hijos" />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-select :items="tipo_trabajo" label="Vida laboral, trabajo" name="tipotrabajo" v-model="model.tipotrabajo" 
            prepend-icon="mdi-water" color="main_color" hide-details="auto"></v-select>
          </v-col>
          <v-col cols="12" md="6">
              <v-radio-group row label="¿Sufre violencia Ocupacional?" v-model="model.violenciaocupacional" 
              prepend-icon="mdi-email" color="main_color" hide-details="auto" >
                <v-radio v-for="item in tipo_violencia_ocp" :label="item" :value="item" ></v-radio>
              </v-radio-group>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-select :items="tipo_social" label="Vida social" name="vidaSocial" v-model="model.vidaSocial" 
            prepend-icon="mdi-water" color="main_color" hide-details="auto"></v-select>
          </v-col>
          <v-col cols="12" md="6">
              <v-radio-group row label="¿Pertenece a una org.?" v-model="model.perteneceorg"
              prepend-icon="mdi-email" color="main_color" hide-details="auto" >
                <v-radio v-for="item in tipo_pertenece_org" :label="item" :value="item" ></v-radio>
              </v-radio-group>
          </v-col>
        </v-row>

      </v-card-text>
    </v-card>
  </template>
  
  <script src="../../../components/_entities/Pacientes/AntecedentePsicocial.js"></script>