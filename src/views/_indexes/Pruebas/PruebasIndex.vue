<template>
  <v-container id="PacientesIndex" class="fill-height" fluid>
      <v-row align="center" justify="center">
          <v-card class="px-5 pb-5 pt-6">
              <v-row class="align-items-center px-5">
                  <h3>Pruebas</h3>
              </v-row>
              <v-row class="align-items-center px-5">
                  <v-col >
                      <router-link :to="{name: 'Registro Prueba'}" >
                          <v-btn color="primary">
                              <v-icon left>mdi-account-plus</v-icon>
                              Registrar pruebas
                          </v-btn>
                      </router-link>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col>
                      <v-text-field class="py-0" v-model="search" append-icon="mdi-magnify"
                      label="Search" single-line hide-details ></v-text-field>
                  </v-col>
              </v-row>
              <v-row>
                  <v-col>
                      <v-data-table :headers="pacienteHeaders.base" :items="collection.items" 
                      :expanded.sync="expanded" :search="search" :item-key="collection.items.id">
                          <template v-slot:expanded-item="{ headers, item }">
                            <td :colspan="headers.length" class="py-2" >
                              <v-row class="align-items-center px-5">
                                  <v-col v-for="header in pacienteHeaders.locationDetail" v-bind:key="header.value"> 
                                      <b>{{header.text}}:</b> 
                                      <div v-for="subheader in header.detail" v-bind:key="subheader.value">
                                          {{subheader.text}}: {{item[header.value][subheader.value]}}
                                      </div>
                                  </v-col>
                              </v-row>
                              <!--{{item}}-->
                            </td>
                          </template>
                          <template #[`item.gruposangrh`]="{ item }">{{ item.gruposang }} {{ item.rh }}</template>
                          <template #[`item.nombres`]="{ item }">{{ item.paciente }}</template>
                          <!--https://stackoverflow.com/questions/61344980/v-slot-directive-doesnt-support-any-modifier-->
                          <template #[`item.actions`]="{ item }">
                              <router-link :to="'/pruebas/update/'+item.id">
                                  <v-btn color="primary" outlined x-small fab> 
                                      <v-icon>mdi-pencil</v-icon>
                                  </v-btn>
                              </router-link>
                              <v-btn  color="error" outlined x-small fab>
                                      <v-icon class=" text-danger">mdi-delete</v-icon>
                                  </v-btn>
                          </template>
                      </v-data-table>
                  </v-col>
              </v-row>
          </v-card>
      </v-row>
  </v-container>
</template>
<script src="../../../components/_indexes/PruebasIndex.js">
</script>
<style scoped>
.v-input.expanding-search {
transition: max-width 0.5s; }
.v-input.expanding-search.closed {
  max-width: 70px; }
</style>