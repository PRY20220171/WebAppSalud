  <template>
    <div id="RegistrarAtencion" class="fill-height">
        <v-row class="mt-5 mb-0 mx-5">
              <v-col>
                <v-text-field label="Fecha de registro" name="fecharegistro" v-model="atencion.fecharegistro"
                prepend-icon="mdi-date" type="date" color="main_color" hide-details="auto" />
              </v-col>
              <v-col class="d-flex align-center">
                <v-text-field label="Nombre del paciente" :value="paciente.nombres+' '+paciente.apellidos" disabled ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="Nombre del médico" :value="usuario.nombres" disabled ></v-text-field>
              </v-col>
        </v-row>
        <v-stepper v-model="e1" class="grey lighten-4 fill-height" >
            <v-stepper-header class="stepper_plus">
              <v-stepper-step :complete="e1 > 1" step="1" >
                Seleccionar Paciente
              </v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="e1 > 2" step="2" >
                Datos Generales
              </v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="e1 > 3" step="3" >
                Diagnóstico y Tratamiento
              </v-stepper-step>
              <v-divider></v-divider>
            </v-stepper-header>
              <v-form>
            <v-stepper-items>
                <v-stepper-content step="1">
                  <v-row>
                    <v-col cols="12"><PacientesIndexSearch/></v-col>
                  </v-row>
                  <v-btn color="primary" @click="e1 = 2" v-if="paciente.nombres">  Continue </v-btn>
                  <v-btn text @click="$router.push('/consultas')"> Cancel </v-btn>
                </v-stepper-content>
                <v-stepper-content step="2">
                  <v-row>
                    <v-col cols="12"  md="4"><Acompanante/></v-col>
                    <v-col cols="12"  md="4"><Atencion/></v-col>
                    <v-col cols="12"  md="4">
                      <FactoresRiesgo/>
                    <SignosVitales/>
                    </v-col>
                  </v-row>
                  <v-btn color="main_color darken-1" @click="e1 = 1" dark> Anterior </v-btn>
                  <v-btn color="primary" @click="e1 = 3" :disabled="!saved">  Continue </v-btn>
                  <v-btn color="primary" @click="registrar" > Registrar </v-btn>
                  <v-btn text @click="$router.push('/consultas')" > Cancel </v-btn>
                </v-stepper-content>
                <v-stepper-content step="3">
                  <v-container class="ma-0 pa-0 fill-height" fluid>
                    <DiagnosticosAtencionIndex class="py-2"/>
                    <PruebasAtencionIndex class="py-2"/>
                    <ResultadosAtencionIndex class="py-2"/>
                    <TratamientosAtencionIndex class="py-2"/>
                    <Transferencia class="py-2"/>
                  </v-container>
                  <v-btn color="main_color darken-1" @click="e1 = 2" dark> Anterior </v-btn>
                <v-btn color="primary" @click="registrar" > Registrar </v-btn>
                  <v-btn text @click="$router.push('/consultas')"> Cancel </v-btn>
                  <v-btn text @click="$router.push('/consultas')"> Regresar a lista </v-btn>
                  
                </v-stepper-content>
          <v-alert :type="alertType">
            {{mensaje}}
          </v-alert>
            </v-stepper-items>
              </v-form>
        </v-stepper>
    </div>
  </template>
  <script src="../../../components/_entities/Atenciones/_Atencion.js">
import SignosVitales from "../Pruebas/SignosVitales.vue";
import TratamientoIndex from '@/views/_indexes/Pruebas/TratamientoIndex.vue';
import DiagnosticosIndex from '@/views/_indexes/DiagnosticosIndex.vue';</script>