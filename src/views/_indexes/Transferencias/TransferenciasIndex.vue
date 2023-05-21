    <template>
        <v-container id="AtencionesIndex" class="fill-height" fluid>
            <v-row justify="center">
                <v-card class="px-5 pb-5 pt-6">
                    <v-row class="align-items-center px-5">
                        <h3>Transferencias</h3>
                    </v-row>
                    <v-row class="align-items-center px-5">
                        <v-col>
                            <router-link :to="{ name: 'Registro Transferencia' }">
                                <v-btn color="primary">
                                    <v-icon left>mdi-account-plus</v-icon>
                                    Registrar Transferencia
                                </v-btn>
                            </router-link>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col>
                            <v-text-field class="py-0" v-model="search" append-icon="mdi-magnify" label="Buscar" single-line
                                hide-details></v-text-field>
                        </v-col>
                    </v-row>
                    <br>
                    <!--comienzo del data table-->
                    <v-data-table :footer-props="{'items-per-page-text':'Registros por página'}" :headers="headers.base" :items="collection.items" :expanded.sync="expanded"
                        :search="search" @click:row="clickRow">
                        <template v-slot:expanded-item="{ headers, item }" >
                            <td :colspan="headers.length" class="py-4  grey lighten-4">
                                <v-data-table :headers="transferenciaDetail" :items="item" class="elevation-1 outlined"  hide-default-footer >

                                </v-data-table>
                                <!-- {{item}} -->
                            </td>
                        </template>

                        <template #[`item.actions`]="{ item }">
                            <v-row justify="center">
                                <router-link :to="'/transferencias/update/' + item.id">
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
    <script src="@/components/_indexes/TransferenciasIndex.js">
    </script>
    <style scoped>
    .v-input.expanding-search {
        transition: max-width 0.5s;
    }

    .v-input.expanding-search.closed {
        max-width: 70px;
    }
    </style>