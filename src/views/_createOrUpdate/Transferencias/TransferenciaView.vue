<template>
    <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined id="Transferencia">
                      <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
                        Informacion de Transferencia
                      </v-card-title>
                      <v-divider class="ml-4"></v-divider>
                  
                      <v-card-text class="">
                  
                          <v-row>
                              <v-text-field label="descripcion" name="descripcion" v-model="transferencia.descripcion" 
                              prepend-icon="mdi-text-box-edit-outline" type="text" color="main_color" hide-details="auto"/>
                          </v-row>
                  
                          <v-row>
                            <v-col cols="12" sm="6">
                              <v-select label="Especialidad Inicial" :items="especialidades" name="especialidadIni" 
                              v-model="transferencia.especialidadini" prepend-icon="mdi-medication" color="main_color" hide-details="auto"/>                              
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-select label="Especialidad a derivar" :items="especialidades" name="especialidadFin" 
                              v-model="transferencia.especialidadfin" prepend-icon="mdi-medication-outline" color="main_color" hide-details="auto"/>                              
                            </v-col>
                          </v-row>
                  
                          <v-row>
                            <v-col >
                              <v-text-field label="Fecha de registro" name="fecharegistro"  v-model="transferencia.fecharegistro" 
                              prepend-icon="mdi-calendar-range" type="date" color="main_color" hide-details="auto" />
                            </v-col>
                          </v-row>
                  
                          <v-row>
                            <v-col>
                                  <v-btn color="primary" @click="registrar" > Guardar </v-btn>
                                  <v-btn color="error"   @click="eliminar"> Eliminar </v-btn>
                            </v-col>
                          </v-row>
                      </v-card-text>
                      <v-alert :type="alertType">
            {{mensaje}}
          </v-alert>
                    </v-card>
</template>
<script src="@/components/_entities/Transferencias/Transferencia.js"></script>