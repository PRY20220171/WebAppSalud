<template>
    <v-container id="PacientesIndex" class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-card class="px-5 pb-5 pt-6">
                <v-row class="align-items-center px-5">
                    <h3>Resultados</h3>
                </v-row>
                <v-row class="align-items-center px-5">
                    <v-col >
                            <v-btn color="primary" @click="dialog=true">
                                <v-icon left>mdi-account-plus</v-icon>
                                Registrar resultados
                            </v-btn>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col>
                        <v-text-field class="py-0" v-model="search" append-icon="mdi-magnify"
                        label="Search" single-line hide-details ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
        <v-card-text class="">
          <v-data-table :headers="headers" :items="collection.items" >
                      <template #[`item.actions`]="{ item }">
                                      <v-btn color="primary" outlined x-small fab> 
                                          <v-icon>mdi-pencil</v-icon>
                                      </v-btn>
                                  <v-btn  color="error" outlined x-small fab>
                                          <v-icon class=" text-danger">mdi-delete</v-icon>
                                      </v-btn>
                              </template>
          </v-data-table>
        </v-card-text>
                </v-row>
            </v-card>
        </v-row>
        
        <v-dialog v-model="dialog"  persistent max-width="600px" >
          <v-card>
            <v-card-title class="mx-4 mt-1 main_color--text text--darken-1 align-end">
              <span class="text-h5">Añadir resultado</span>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                    <v-select :items="estados" label="estados" required v-model="resultado.estado" ></v-select>
  
                      <v-text-field name="fecresultado"  label="fec. resultado" v-model="resultado.registro"
                      type="date" color="main_color" hide-details="auto" />
  
                      <v-text-field name="descripcion" label="descripcion"  v-model="resultado.descripcion"
                      type="text" color="main_color" hide-details="auto" />
  
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false" > Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="addResultado" > Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-container>
  </template>
  <script src="../../../components/_indexes/ResultadosAtencionIndex.js">
  </script>