<template>

  <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined id="Paciente">
    <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
      Informacion General
    </v-card-title>
    <v-divider class="ml-4"></v-divider>

    <v-card-text class="">

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field label="Nombres" name="Nombres" v-model="paciente.nombres" 
            prepend-icon="mdi-account" type="text" color="main_color" hide-details="auto"/>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="Apellidos" name="Apellidos" v-model="paciente.apellidos" 
            prepend-icon="mdi-account-group" type="text" color="main_color" hide-details="auto"/>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6">
            <v-select :items="tipo_doc" label="Tipo de Documento" name="tipo_doc" v-model="paciente.doctipo" 
            prepend-icon="mdi-card-bulleted-settings" color="main_color" hide-details="auto"></v-select>
          </v-col>
          <v-col  cols="12" sm="6">
            <v-text-field label="Número de documento" name="num_doc" v-model="paciente.docnum" 
            prepend-icon="mdi-card-account-details" type="text" color="main_color" hide-details="auto"/>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field label="telefono" name="telefono" v-model="paciente.telefono" 
            prepend-icon="mdi-phone" type="text" color="main_color" hide-details="auto" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select :items="tipo_sexo" label="Sexo" name="tipo_sexo" v-model="paciente.sexo"
            prepend-icon="mdi-gender-male-female" color="main_color" hide-details="auto" 
            item-text="show" item-value="val">
            </v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col >
            <v-text-field label="Fecha de nacimiento" name="fecnac"  v-model="paciente.fecnac" 
            prepend-icon="mdi-cake-variant" type="date" color="main_color" hide-details="auto" />
          </v-col>
          <v-col  class="align-self-end">
            <p class="my-2">
              <v-icon class="mr-2">mdi-cake-variant-outline</v-icon>
              <span> Edad: {{edad.text}}</span>
            </p>
          </v-col>
        </v-row>

        <v-row>
          <v-col sm="6">
            <v-select :items="tipo_sangre" label="Grupo Sanguíneo" name="grup_sang" v-model="paciente.gruposang" 
            prepend-icon="mdi-water" color="main_color" hide-details="auto"></v-select>
          </v-col>
          <v-col sm="6">
            <v-select :items="tipo_rh" label="RH" name="RH" item-text="show" item-value="val"
            prepend-icon="mdi-water-remove" v-model="paciente.rh" color="main_color" hide-details="auto"></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="6">
            <v-select :items="tipo_ecivil" label="estado civil" name="estado_civil" v-model="paciente.estadocivil" 
            prepend-icon="mdi-account-multiple" color="main_color" hide-details="auto"></v-select>
          </v-col>
          <v-col md="6">
            <v-select :items="tipo_educ" label="grado de instrucción" name="grado_instr" v-model="paciente.gradoinstruccion" 
            prepend-icon="mdi-school" color="main_color" hide-details="auto"></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="ocupacion" name="ocupacion" v-model="paciente.ocupacion"
            prepend-icon="mdi-briefcase" type="text" color="main_color" hide-details="auto" />
          </v-col>
        </v-row>

    </v-card-text>
  </v-card>
</template>

<script src="../../../components/_entities/Pacientes/Paciente.js"></script>