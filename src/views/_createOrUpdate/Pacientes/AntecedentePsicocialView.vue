<template>

  <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined id="AntecedentePsicosocial">
    <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
      Antecedentes Psicocial
    </v-card-title>
    <v-divider class="ml-4"></v-divider>

    <v-card-text class="">
      
      <v-row>
        <v-col cols="12" md="6">
            <v-radio-group row label="Apoyo familiar en el embarazo" v-model="paciente.antecedentepsico.apoyofam"
            prepend-icon="mdi-home" color="main_color" hide-details="auto" >
              <v-radio v-for="item in tipo_apoyo" :label="item" :value="item" ></v-radio>
            </v-radio-group>
        </v-col>
        <v-col cols="12" md="6">
            <v-text-field label="Edad de la persona gestante" name="edadgestante" v-model="paciente.antecedentepsico.edadgestante"
            prepend-icon="mdi-cake-variant" type="number" color="main_color" hide-details="auto" suffix=' años' oninput="if(this.value < 0) this.value = 0;"/>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6" >
            <v-text-field label="Embarazos espaciados"  name="embarazoespac" v-model="paciente.antecedentepsico.embarazoespac"
            prepend-icon="mdi-timetable" type="number" color="main_color" hide-details="auto" prefix='' suffix='años' oninput="if(this.value < 0) this.value = 0;"/>
        </v-col>
        <v-col cols="12" md="6">
            <v-text-field label="Nro. de hijos" name="nrohijos" v-model="paciente.antecedentepsico.nrohijos"
            prepend-icon="mdi-baby-buggy" type="number" color="main_color" hide-details="auto" suffix=" hijos" oninput="if(this.value < 0) this.value = 0;"/>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-select :items="tipo_trabajo" label="Vida laboral" name="tipotrabajo" v-model="paciente.antecedentepsico.tipotrabajo" 
          prepend-icon="mdi-sitemap" color="main_color" hide-details="auto"></v-select>
        </v-col>
        <v-col cols="12" md="6">
            <v-radio-group row label="¿Sufre violencia Ocupacional?" v-model="paciente.antecedentepsico.violenciaocupacional" 
            prepend-icon="mdi-account-alert" color="main_color" hide-details="auto" >
              <v-radio v-for="item in tipo_violencia_ocp" :label="item" :value="item" ></v-radio>
            </v-radio-group>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-select :items="tipo_social" label="Vida social" name="vidaSocial" v-model="paciente.antecedentepsico.vidasocial" 
          prepend-icon="mdi-bus" color="main_color" hide-details="auto"></v-select>
        </v-col>
        <v-col cols="12" md="6">
            <v-radio-group row label="¿Pertenece a una org.?" v-model="paciente.antecedentepsico.perteneceorg"
            prepend-icon="mdi-web" color="main_color" hide-details="auto" >
              <v-radio v-for="item in tipo_pertenece_org" :label="item" :value="item" ></v-radio>
            </v-radio-group>
        </v-col>
      </v-row>

    </v-card-text>
  </v-card>
</template>

<script src="../../../components/_entities/Pacientes/AntecedentePsicocial.js"></script>