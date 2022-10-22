<template>
  <div id="RegistrarPaciente" class="fill-height">
<!--    <p>{{paciente.lugarnac}}AQUI</p>
   <p>{{paciente.domicilioact}}AQUI</p> -->
          <v-alert :type="alertType">
            {{mensaje}}
          </v-alert>
      <v-stepper v-model="e1" class="grey lighten-4 fill-height" >
          <v-stepper-header class="stepper_plus">

            <v-stepper-step :complete="stepComplete[0]" step="1" editable :rules="stepRules[0]">
              Datos Generales
              <small>{{stepAlert[0][1]}}</small>
            </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step :complete="stepComplete[1]" step="2" editable :rules="stepRules[1]">
              Antecedentes
              <small>{{stepAlert[1][1]}}</small>
            </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step step="3" editable :rules="stepRules[2]">
              Información Adicional
              <small>{{stepAlert[2][1]}}</small>
            </v-stepper-step>

          </v-stepper-header>

            <v-form>
          <v-stepper-items>

              <v-stepper-content step="1">
                <v-row>
                  <v-col cols="12"  md="6"><Paciente ref="Paciente"/></v-col>
                  <v-col cols="12"  md="6"><Ubicacion ref="Ubicacion"/></v-col>
                </v-row>
                <v-btn color="primary" @click="e1=2">  Continue </v-btn>
                <v-btn color="third_0" dark @click="crearConsulta" v-if="cancelar!='Cancelar'"> Crear Consulta </v-btn>
                <v-btn text @click="Cancel"> {{cancelar}} </v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-row>
                  <v-col cols="12"  md="6"><AntecedentePerinatal ref="AntecedentePerinatal"/></v-col>
                  <v-col cols="12"  md="6"><AntecedentePsicocial ref="AntecedentePsicocial"/></v-col>
                  <v-col cols="12"  md="6"><AntecedentePatologico ref="AntecedentePatologico"/></v-col>
                  <v-col cols="12"  md="6"><AntecedenteFamiliar ref="AntecedenteFamiliar"/></v-col>
                </v-row>
                <v-btn color="main_color darken-1" @click="e1=1" dark> Anterior </v-btn>
                <v-btn color="primary" @click="e1=3" > Continue </v-btn>
                <v-btn color="third_0" dark @click="crearConsulta" v-if="cancelar!='Cancelar'"> Crear Consulta </v-btn>
                <v-btn text @click="Cancel"> {{cancelar}} </v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                  <v-col class="justify-center"><Consentimiento/></v-col>
                <v-btn color="main_color darken-1" @click="e1=2" dark> Anterior </v-btn>
                <v-btn color="primary" @click="registrar" > ACEPTO </v-btn>
                <v-btn color="third_0" dark @click="crearConsulta" v-if="cancelar!='Cancelar'"> Crear Consulta </v-btn>
                <v-btn text @click="Cancel"> {{cancelar}} </v-btn>
              </v-stepper-content>

          </v-stepper-items>
            </v-form>
      </v-stepper>
      
  </div>
</template>

<script src="../../../components/_entities/Pacientes/_Paciente.js"></script>