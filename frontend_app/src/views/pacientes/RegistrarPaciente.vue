<template>
  <div>
    <TopBar></TopBar>
    <v-main>
      <v-stepper v-model="e1" >
          <v-stepper-header class="stepper_plus">

            <v-stepper-step :complete="e1 > 1" step="1">
              Datos Generales
            </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">
              Antecedentes
            </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step step="3">
              Información Adicional
            </v-stepper-step>

          </v-stepper-header>

          <v-stepper-items>

            <v-stepper-content step="1">
              
              <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined>
                <v-card-title class="main_color--text text--darken-1">
                  Informacion General
                </v-card-title>
                <v-divider class="ml-4"></v-divider>

                <v-card-text class="">
                <v-form>
                  
                  <v-row>
                    <v-text-field label="Nombres" name="Nombres"
                        prepend-icon="mdi-email" type="text" color="main_color"/>
                  </v-row>
                  <v-row>
                      <v-text-field label="Apellidos" name="Apellidos"
                        prepend-icon="mdi-email" type="text" color="main_color"/>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="6">
                      <v-select :items="tipo_doc" label="Tipo de Documento" name="tipo_doc" 
                      prepend-icon="mdi-email" color="main_color" ></v-select>
                    </v-col>
                    <v-col cols="12" md="6">
                    <v-text-field label="Número de documento" name="num_doc"
                      prepend-icon="mdi-email" type="text" color="main_color"/>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="4">
                      <v-text-field label="Fecha de nacimiento" name="Fecha de nacimiento"
                      prepend-icon="mdi-email" type="date" color="main_color"
                      v-model="fec_nac" @input="clacEdad"/>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field label="edad" name="edad" type="text" disabled v-model="edad" filled/>
                    </v-col>
                    <v-col md="4">
                      <v-radio-group row label="Sexo">
                        <v-radio v-for="item in sexo" :label="item" :value="item" ></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                  
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-select :items="tipo_sangre" label="Grupo Sanguíneo" name="grup_sang"
                      prepend-icon="mdi-email" color="main_color" ></v-select>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-select :items="tipo_rh" label="RH" name="RH"
                      prepend-icon="mdi-email" color="main_color" ></v-select>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field label="telefono" name="telefono" 
                      prepend-icon="mdi-email" type="text" color="main_color"/>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="4">
                      <v-select :items="tipo_educ" label="grado de instrucción" name="grado_instr" 
                      prepend-icon="mdi-email" color="main_color" ></v-select>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field label="ocupacion" name="ocupacion" 
                      prepend-icon="mdi-email" type="text" color="main_color"/>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-select :items="tipo_ecivil" label="estado civil" name="estado_civil" 
                      prepend-icon="mdi-email" color="main_color" ></v-select>
                    </v-col>
                  </v-row>
                  
                </v-form>
                </v-card-text>
              </v-card>

              <v-btn
                color="primary"
                @click="e1 = 2"
              >
                Continue
              </v-btn>

              <v-btn text>
                Cancel
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
              ></v-card>

              <v-btn
                color="primary"
                @click="e1 = 3"
              >
                Continue
              </v-btn>

              <v-btn
                color="main_color"
                @click="e1 = 1"
              >
                Anterior
              </v-btn>

              <v-btn text>
                Cancel
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
              ></v-card>

              <v-btn
                color="primary"
                @click="e1 = 1"
              >
                Continue
              </v-btn>

              <v-btn
                color="main_color"
                @click="e1 = 2"
              >
                Anterior
              </v-btn>

              <v-btn text>
                Cancel
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
          
      </v-stepper>
    </v-main>
  </div>
</template>

<script>
import TopBar from '../Bars/TopBar.vue';
// import TopBar from '../Bars/TopBar.vue';
// import TopBar from '../Bars/TopBar.vue';
  export default {
    name: 'RegistrarPaciente',
    components: {
    TopBar,
   // TopBar,
   // TopBar
},
    data () {
      return {
        e1: 1,
        fec_nac:'',
        edad:'',
        tipo_doc: ['DNI', 'Carnet de Extranjería', 'Pasaporte'],
        sexo: ['masculino','femenino'],
        tipo_sangre: ['O','A','B','AB'],
        tipo_rh:['negativo','positivo','nulo'],
        tipo_educ: ['Inicial','Primario','Secundario','Técnica','Superior','Especial'],
        tipo_ecivil: [ 'soltero', 'casado', 'divorciado', 'en separación', 'viudo', 'concubinato']
      }
    },
    methods:{
      clacEdad: function(){
        var fecha=this.fec_nac;
        var ultimoDiaMes = new Date();
        
        var values = fecha.split("-");
        var dia = values[2];
        var mes = values[1];
        var ano = values[0];

        // cogemos los valores actuales
        var fecha_hoy = new Date();
        var ahora_ano = fecha_hoy.getYear();
        var ahora_mes = fecha_hoy.getMonth() + 1;
        var ahora_dia = fecha_hoy.getDate();

        // realizamos el calculo
        var edad = (ahora_ano + 1900) - ano;
        if (ahora_mes < mes) {
            edad--;
        }
        if ((mes == ahora_mes) && (ahora_dia < dia)) {
            edad--;
        }
        if (edad > 1900) {
            edad -= 1900;
        }

        // calculamos los meses
        var meses = 0;

        if (ahora_mes > mes && dia > ahora_dia)
            meses = ahora_mes - mes - 1;
        else if (ahora_mes > mes)
            meses = ahora_mes - mes
        if (ahora_mes < mes && dia < ahora_dia)
            meses = 12 - (mes - ahora_mes);
        else if (ahora_mes < mes)
            meses = 12 - (mes - ahora_mes + 1);
        if (ahora_mes == mes && dia > ahora_dia)
            meses = 11;

        // calculamos los dias
        var dias = 0;
        if (ahora_dia > dia)
            dias = ahora_dia - dia;
        if (ahora_dia < dia) {
            ultimoDiaMes = new Date(ahora_ano, ahora_mes - 1, 0);
            dias = ultimoDiaMes.getDate() - (dia - ahora_dia);
        }
        if(edad > 0)
          this.edad = 'ERROR'
        else
          this.edad = edad + " años, " + meses + " meses y " + dias + " días";
      }
    }
  }

</script>