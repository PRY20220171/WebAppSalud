<template>

  <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined id="AntecedentePerinatal">
    <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
      Antecedentes Perinatales
    </v-card-title>
    <v-divider class="ml-4"></v-divider>

    <v-card-text class="">
      <v-row >
        <v-col  cols="12" md="6" class='px-6'>
          <v-row class="py-2">
            <v-radio-group row label="Tipo de embarazo" v-model="paciente.antecedenteperi.tipoembarazo"
            prepend-icon="mdi-human-pregnant" color="main_color" hide-details="auto" >
              <v-radio v-for="item in tipo_embarazo" :label="item" :value="item" class="col px-0 py-0"></v-radio>
            </v-radio-group>
          </v-row>
          <v-row class="py-2">
            <v-radio-group row label="¿Embarazo de riesgo?" v-model="paciente.antecedenteperi.embarazoriesgo" 
            prepend-icon="mdi-heart-pulse" color="main_color" hide-details="auto" >
              <v-radio v-for="item in tipo_riesgo" :label="item" :value="item" ></v-radio>
            </v-radio-group>
          </v-row>
          <v-row class="py-2">
            <v-radio-group row label="¿Hubo control prenatal?" v-model="paciente.antecedenteperi.controlprenatal"
            prepend-icon="mdi-scale-bathroom" color="main_color" hide-details="auto" >
              <v-radio v-for="item in tipo_control" :label="item" :value="item" ></v-radio>
            </v-radio-group>
          </v-row>
          <v-row class="py-2">
            <v-textarea label="Respiracion o llanto al nacer" name="Respllanto" v-model="paciente.antecedenteperi.respllanto"
              prepend-icon="mdi-seat-flat-angled"  color="main_color" hide-details="auto"  no-resize rows="2"
              hint="Observaciones sobre la respiracion o llanto al nacer" class="pr-4">
            </v-textarea>
          </v-row>
        </v-col>
        
        <v-col cols="12" md="6" class='px-6'>
          <v-row class="py-3">
            <v-text-field label="Número de embarazo" name="Nroembarazo" v-model="paciente.antecedenteperi.nroembarazo"
            prepend-icon="mdi-baby-buggy" type="number" color="main_color" hide-details="auto" oninput="if(this.value < 0) this.value = 0;"/>
          </v-row>
          <v-row class="py-3">
            <v-text-field label="Edad gest. al nacer" name="Edadgestalnac" v-model="paciente.antecedenteperi.edadgestalnac" 
            prepend-icon="mdi-cake-variant" type="number" color="main_color" hide-details="auto" suffix=" sem" oninput="if(this.value < 0) this.value = 0;"/>
          </v-row>
          <v-row class="py-3">
            <v-text-field label="Peso al nacer" name="Pesoalnac" v-model="paciente.antecedenteperi.pesoalnac" 
            prepend-icon="mdi-scale" type="number" color="main_color" hide-details="auto" suffix=" kg" oninput="if(this.value < 0) this.value = 0;"/>
          </v-row>
          <v-row class="py-3">
            <v-text-field label="Talla al nacer" name="Tallaalnac" v-model="paciente.antecedenteperi.tallaalnac" 
            prepend-icon="mdi-ruler" type="number" color="main_color" hide-details="auto" suffix=" cm" oninput="if(this.value < 0) this.value = 0;"/>
          </v-row>
          <v-row class="py-3">
            <v-text-field label="Perimetro cefálico al nacer" name="Perimcefalico" v-model="paciente.antecedenteperi.perimcefalico" 
            prepend-icon="mdi-math-compass" type="number" color="main_color" hide-details="auto" suffix=" cm" oninput="if(this.value < 0) this.value = 0;"/>
          </v-row>
          
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script src="../../../components/_entities/Pacientes/AntecedentePerinatal.js"></script>