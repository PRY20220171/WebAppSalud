  <template>
    <div id="RegistrarPaciente" class="fill-height">
      <Bars/>
      <v-main class="fill-height grey lighten-4 ">
        <v-row class="mt-5 mb-0 mx-5">
              <v-col>
                <v-text-field label="Fecha de registro" name="fecharegistro" 
                prepend-icon="mdi-email" type="date" color="main_color" hide-details="auto" />
              </v-col>
              <v-col class="d-flex align-center">
                <v-text-field label="Nombre del paciente" value="" disabled ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="Nombre del médico" value="" disabled ></v-text-field>
              </v-col>
        </v-row>
        <v-stepper v-model="e1" class="grey lighten-4 fill-height" >
            <v-stepper-header class="stepper_plus">
  
              <v-stepper-step :complete="e1 > 1" step="1" >
                Datos Generales
              </v-stepper-step>
              <v-divider></v-divider>
  
              <v-stepper-step :complete="e1 > 2" step="2" >
                Diagnóstico y Tratamiento
              </v-stepper-step>
              <v-divider></v-divider>
  
            </v-stepper-header>
  
              <v-form>
            <v-stepper-items>
  
                <v-stepper-content step="1">
                  <v-row>
                    <v-col cols="12"  md="4"><Acompanante/></v-col>
                    <v-col cols="12"  md="4"><Atencion/></v-col>
                    <v-col cols="12"  md="4">
                      <FactoresRiesgo/>
                      <CentroMedico/>
                    </v-col>
                  </v-row>
                  <v-btn color="primary" @click="e1 = 2">  Continue </v-btn>
                  <v-btn text> Cancel </v-btn>
                </v-stepper-content>
  
                <v-stepper-content step="2">
                  <v-row>
                    <v-col cols="12"  md="2"> <SignosVitales/> </v-col>
                    <v-col cols="12"  md="10"> <Tratamientos/> </v-col>
                    <v-col cols="12"  > <Diagnosticos/> </v-col>
                    <v-col cols="12"  > <Pruebas/> </v-col>
                  </v-row>
                  <v-btn color="main_color darken-1" @click="e1 = 1" dark> Anterior </v-btn>
                  <v-btn color="primary" @click="e1 = 1" > Continue </v-btn>
                  <v-btn text> Cancel </v-btn>
                </v-stepper-content>
  
            </v-stepper-items>
              </v-form>
        </v-stepper>
        
      </v-main>
    </div>
  </template>
  
  <script src="../../../components/_entities/Atenciones/_Atencion">
import SignosVitales from "../Pruebas/SignosVitales.vue";
import TratamientoIndex from '@/views/_indexes/Pruebas/TratamientoIndex.vue';
import DiagnosticosIndex from '@/views/_indexes/DiagnosticosIndex.vue';</script>