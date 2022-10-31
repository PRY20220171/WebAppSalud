<template>
  <v-container id="PruebasIndex" class="fill-height" fluid>
      <v-row justify="center">
          <v-card class="px-5 pb-5 pt-6">
              <v-row class="align-items-center px-5">
                  <h3>Pruebas</h3>
              </v-row>
              <v-row class="align-items-center px-5">
                  <v-col>
                      <router-link :to="{ name: 'Registro Prueba' }">
                          <v-btn color="primary">
                              <v-icon left>mdi-account-plus</v-icon>
                              Registrar Prueba
                          </v-btn>
                      </router-link>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col>
                      <v-text-field class="py-0" v-model="search" append-icon="mdi-magnify" label="Search" single-line
                          hide-details></v-text-field>
                  </v-col>
              </v-row>
              <br>
              <!--comienzo del data table-->
              <v-data-table :headers="headers.base" :items="collection.items" :expanded.sync="expanded"
                  :search="search" @click:row="clickRow">
                  <template v-slot:expanded-item="{ headers, item }" >
                      <td :colspan="headers.length" class="py-4  grey lighten-4">
                        <v-col cols="6" class="mx-auto">
                            <v-row >
                              <h4> Categoría </h4> <v-spacer></v-spacer> <span>{{item.tipoprueba.categoriaprueba.nombre}}</span>
                            </v-row>
                            <v-row>
                              <h4> Descripción de Categoría </h4> <v-spacer></v-spacer> <span>{{item.tipoprueba.categoriaprueba.descripcion}}</span>
                            </v-row>
                            <v-row>
                              <h4> Descripcion </h4> <v-spacer></v-spacer> <span>{{item.tipoprueba.descripcion}}</span>
                            </v-row>
                            <v-row>
                              <h4> Medida </h4> <v-spacer></v-spacer> <span>{{item.tipoprueba.medida.descripcion}}</span>
                            </v-row>
                          </v-col>
                          <!-- {{item}} -->
                      </td>
                  </template>

                  <template #[`item.actions`]="{ item }">
                      <v-row justify="center">
                          <router-link :to="'/consultas/update/' + item.id">
                              <v-btn color="primary" outlined x-small fab>
                                  <v-icon>mdi-pencil</v-icon>
                              </v-btn>
                          </router-link>
                          <v-btn color="error" outlined x-small fab>
                              <v-icon class=" text-danger">mdi-delete</v-icon>
                          </v-btn>
                      </v-row>
                  </template>

              </v-data-table>
          </v-card>
      </v-row>
  </v-container>
</template>
<script src="@/components/_indexes/PruebasIndex.js">
</script>
<style scoped>
.v-input.expanding-search {
  transition: max-width 0.5s;
}

.v-input.expanding-search.closed {
  max-width: 70px;
}
</style>