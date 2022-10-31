<template>
  <div id="RegistrarDiagnostico" class="fill-height">
    
      <v-row class="mt-5 mb-0 mx-5">
            <v-col>
              <v-text-field label="Fecha de registro" name="fecharegistro" v-model="atencion.fecharegistro"
              prepend-icon="mdi-email" type="date" color="main_color" hide-details="auto" />
            </v-col>
            <v-col class="d-flex align-center">
              <v-text-field label="Nombre del atencion" :value="atencion.paciente.nombres+' '+atencion.paciente.apellidos" disabled ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field label="Nombre del médico" :value="usuario.nombres" disabled ></v-text-field>
            </v-col>
      </v-row>
                <v-row>
                  <v-col cols="12"><AtencionesIndexSearch/></v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <DiagnosticosAtencionIndex class="py-2"/>
                  </v-col>
                </v-row>
  </div>
</template>
<script src="@/components/_entities/Diagnosticos/_Diagnostico.js"></script>