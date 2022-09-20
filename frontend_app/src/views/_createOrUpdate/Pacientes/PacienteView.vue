<template>

  <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined id="PacienteView">
    <v-card-title class="main_color--text text--darken-1">
      Informacion General
    </v-card-title>
    <v-divider class="ml-4"></v-divider>

    <v-card-text class="">
      <v-form>

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field label="Nombres" name="Nombres" v-model="model.Nombres" prepend-icon="mdi-email" type="text" color="main_color"/>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="Apellidos" name="Apellidos" v-model="model.Apellidos" prepend-icon="mdi-email" type="text" color="main_color"/>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-select :items="tipo_doc" label="Tipo de Documento" name="tipo_doc" v-model="model.Doctipo" prepend-icon="mdi-email" color="main_color"></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="Número de documento" name="num_doc" v-model="model.Docnum" prepend-icon="mdi-email" type="text" color="main_color"/>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-text-field label="Fecha de nacimiento" name="Fecha de nacimiento"  v-model="model.fec_nac"
            prepend-icon="mdi-email" type="date" color="main_color" @input="clacEdad" />
          </v-col>
          <v-col cols="12" md="4" class="align-self-center">
            <p filled>Edad: {{model.edad}}</p>
          </v-col>
          <v-col md="4">
            <!-- <v-radio-group row label="Sexo">
                        <v-radio v-for="item in tipo_sexo" :label="item" :value="item" ></v-radio>
                      </v-radio-group> -->
            <v-select :items="tipo_sexo" label="Sexo" name="tipo_sexo" v-model="model.Sexo" prepend-icon="mdi-email" color="main_color" >
            </v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-select :items="tipo_sangre" label="Grupo Sanguíneo" name="grup_sang" v-model="model.Gruposang" prepend-icon="mdi-email"
              color="main_color"></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-select :items="tipo_rh" label="RH" name="RH" prepend-icon="mdi-email" v-model="model.Rh" color="main_color"></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field label="telefono" name="telefono" v-model="model.Telefono" prepend-icon="mdi-email" type="text" color="main_color" />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-select :items="tipo_educ" label="grado de instrucción" name="grado_instr" v-model="model.Gradoinstruccion" prepend-icon="mdi-email"
              color="main_color"></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field label="ocupacion" name="ocupacion" v-model="model.Ocupacion" prepend-icon="mdi-email" type="text" color="main_color" />
          </v-col>
          <v-col cols="12" md="4">
            <v-select :items="tipo_ecivil" label="estado civil" name="estado_civil" v-model="model.Estadocivil" prepend-icon="mdi-email"
              color="main_color"></v-select>
          </v-col>
        </v-row>

      </v-form>
    </v-card-text>
  </v-card>
</template>

<script src="../../../components/_entities/Pacientes/Paciente.js"></script>