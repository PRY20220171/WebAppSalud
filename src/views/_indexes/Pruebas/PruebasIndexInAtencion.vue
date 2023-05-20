<template>
  <v-container id="PacientesIndex" class="ma-0 pa-0 fill-height" fluid>
    <v-container class="ma-0 max-width" fluid>
      <v-card class="px-5 pb-2 pt-6">
        <v-col class="max-width">
          <v-row class="align-items-center px-5">
            <h3>Pruebas</h3>
          </v-row>
          <v-row class="align-items-center px-5">
            <v-col>
              <v-btn color="primary" @click="addNew">
                <v-icon left>mdi-account-plus</v-icon>
                Registrar prueba
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
              <v-text-field class="py-0" v-model="search" append-icon="mdi-magnify" label="Buscar" single-line
                hide-details></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-progress-circular indeterminate color="primary" :value="loadAtencion" v-if="loadAtencion<100"></v-progress-circular>
            <v-card-text outlined v-if="loadAtencion==100">
              <v-data-table :headers="headers" :items="collection.items" fixed-header>
                <v-divider inset></v-divider>
                <template v-slot:[`item.tipoprueba.nombre`]="{ item }">
                  <v-select :items="tipo_prueba" item-text="nombre" required v-model="editedItem.tipoprueba" return-object
                  :hide-details="true" dense single-line :autofocus="true" v-if="item.id === editedItem.id"
                  v-on:input="setMedida(editedItem)">
                  </v-select>
                  <span v-else>{{item.tipoprueba.nombre}}</span>
                </template>
                <template v-slot:[`item.tipoprueba.medida.nombre`]="{ item }">
                  <span  v-if="item.id === editedItem.id">{{editedItem.tipoprueba.medida.nombre}}</span>
                  <span v-else>{{item.tipoprueba.medida.nombre}}</span>
                </template>
                <template v-slot:[`item.estado`]="{ item }">
                  <v-select :items="estados"  v-model="editedItem.estado" :hide-details="true" dense single-line :autofocus="true"
                    v-if="item.id === editedItem.id"></v-select>
                  <span v-else>{{item.estado}}</span>
                </template>
                <template v-slot:[`item.fecprueba`]="{ item }" >
                  <v-text-field v-model="editedItem.fecprueba" :hide-details="true" dense single-line
                    :autofocus="true" v-if="item.id === editedItem.id"></v-text-field>
                  <span v-else-if="item.estado=='en proceso' || item.estado=='finalizada'">{{item.fecprueba}}</span>
                  <span v-else>-</span>
                </template>
                <template v-slot:[`item.fecresultado`]="{ item }">
                    <v-text-field v-model="editedItem.fecresultado" :hide-details="true" dense single-line :autofocus="true"
                      v-if="item.id === editedItem.id"></v-text-field>
                    <span v-else-if="item.estado=='en proceso' || item.estado=='finalizada'">{{item.fecresultado}}</span>
                  <span v-else>-</span>
                </template>
                <template v-slot:[`item.resultado`]="{ item }">
                    <v-text-field v-model="editedItem.resultado" :hide-details="true" dense single-line :autofocus="true"
                      v-if="item.id === editedItem.id"></v-text-field>
                    <span v-else-if="item.estado=='en proceso' || item.estado=='finalizada'">{{item.resultado}}</span>
                  <span v-else>-</span>
                </template>
                <template v-slot:[`item.observacion`]="{ item }">
                  <v-text-field v-model="editedItem.observacion" :hide-details="true" dense single-line :autofocus="true"
                    v-if="item.id === editedItem.id"></v-text-field>
                  <span v-else>{{item.observacion}}</span>
                </template>
                <template #[`item.actions`]="{ item }">
                  <div v-if="item.id === editedItem.id">
                    <v-btn color="primary" outlined x-small fab @click="save">
                      <v-icon>mdi-content-save</v-icon>
                    </v-btn>
                    <v-btn color="error" outlined x-small fab @click="close">
                      <v-icon class=" text-danger">mdi-window-close</v-icon>
                    </v-btn>
                  </div>
                  <div v-else>
                    <v-btn color="primary" outlined x-small fab @click="editItem(item)">
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn color="error" outlined x-small fab @click="deleteItem(item)">
                      <v-icon class=" text-danger">mdi-delete</v-icon>
                    </v-btn>
                  </div>
                </template>
              </v-data-table>
            </v-card-text>
          </v-row>
        </v-col>
      </v-card>
    </v-container>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Añadir prueba</span>
        </v-card-title>
        <v-card-text>
          <v-row class="mx-4 mt-1 main_color--text text--darken-1 align-end">
            <v-icon class="main_color--text text--darken-1">mdi-information</v-icon>
            <h4 class="ml-2 font-weight-regular"> Información general </h4>
          </v-row>


          <v-select :items="tipo_prueba" label="Tipo" item-text="nombre" required v-model="prueba.tipoprueba"
            return-object></v-select>

          <v-text-field name="fecprueba" label="fec. prueba" v-model="prueba.fecprueba" type="date" color="main_color"
            hide-details="auto" />

          <v-text-field name="fecresultado" label="fec. resultado" v-model="prueba.fecresultado" type="date"
            color="main_color" hide-details="auto" />

          <v-text-field name="resultado" label="resultado" v-model="prueba.resultado" type="text" color="main_color"
            hide-details="auto" />

          <v-text-field name="observacion" label="observacion" v-model="prueba.observacion" type="text"
            color="main_color" hide-details="auto" />

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"> Cancelar</v-btn>
          <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script src="../../../components/_indexes/PruebasAtencionIndex.js">
</script>