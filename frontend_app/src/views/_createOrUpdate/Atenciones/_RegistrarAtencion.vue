  <template>
    <div id="RegistrarPaciente" class="fill-height">
      <Bars/>
      <v-main class="fill-height">
        <v-stepper v-model="e1" class="grey lighten-4 fill-height" >
            <v-stepper-header class="stepper_plus">
  
              <v-stepper-step :complete="e1 > 1" step="1" >
                Datos Generales
              </v-stepper-step>
              <v-divider></v-divider>
  
              <v-stepper-step :complete="e1 > 2" step="2" >
                Pruebas y tratamientos
              </v-stepper-step>
              <v-divider></v-divider>
  
            </v-stepper-header>
  
              <v-form>
            <v-stepper-items>
  
                <v-stepper-content step="1">
                  <v-row>
                    <v-col cols="12"  md="6"><Acompanante/></v-col>
                    <v-col cols="12"  md="6"><Atencion/></v-col>
                  </v-row>
                  <v-btn color="primary" @click="e1 = 2">  Continue </v-btn>
                  <v-btn text> Cancel </v-btn>
                </v-stepper-content>
  
                <v-stepper-content step="2">
                  <v-row>
                    <v-col cols="12"  md="6"> </v-col>
                  </v-row>
                  <v-btn color="main_color darken-1" @click="e1 = 1" dark> Anterior </v-btn>
                  <v-btn color="primary" @click="e1 = 3" > Continue </v-btn>
                  <v-btn text> Cancel </v-btn>
                </v-stepper-content>
  
            </v-stepper-items>
              </v-form>
        </v-stepper>
        
      </v-main>
    </div>
  </template>
  
  <script src="../../../components/_entities/Atenciones/_Atencion"></script>