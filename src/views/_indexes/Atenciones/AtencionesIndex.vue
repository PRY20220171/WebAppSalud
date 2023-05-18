
import Transferencia from '@/components/_entities/Transferencias/Transferencia';

<!--
    Diagnósticos','mdi-medical-bag
    'Pruebas','mdi-needle'
    'Resultados','mdi-clipboard-pulse-outline' -->
    
<template>
    <v-container>
        <v-container id="AtencionesIndex" class="fill-height" fluid>
            <v-row justify="center">
                <v-card class="px-5 pb-5 pt-6">
                    <v-row class="align-items-center px-5">
                        <h3>Consultas</h3>
                    </v-row>
                    <v-row class="align-items-center px-5">
                        <v-col>
                            <router-link :to="{ name: 'Registro Consulta' }">
                                <v-btn color="primary">
                                    <v-icon left>mdi-account-plus</v-icon>
                                    Registrar Consulta
                                </v-btn>
                            </router-link>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col>
                            <v-text-field class="py-0" v-model="search" append-icon="mdi-magnify" label="Search"
                                single-line hide-details></v-text-field>
                        </v-col>
                    </v-row>
                    <br>
                    <!--comienzo del data table-->

                    <v-data-table :headers="pacienteHeaders.base" :items="collection.items" :expanded.sync="expanded"
                        :search="search" @click:row="clickRow">
                        <template v-slot:expanded-item="{ headers, item }">
                            <td :colspan="headers.length" class="py-2">
                                <v-row class="align-items-center px-5">
                                    <v-col v-for="header in pacienteHeaders.atencionDetail" v-bind:key="header.value">
                                        <b>{{ header.text }}:</b>
                                        <div v-for="subheader in header.detail" v-bind:key="subheader.value">
                                            {{ subheader.text }}: {{ item[header.value][subheader.value] }}
                                        </div>
                                    </v-col>
                                </v-row>
                                <!-- {{item}} -->
                            </td>
                        </template>

                        <template #[`item.gruposangrh`]="{ item }">{{ item.gruposang }} {{ item.rh }}</template>
                        <!--https://stackoverflow.com/questions/61344980/v-slot-directive-doesnt-support-any-modifier-->

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

                        <template #[`item.diagnosticos`]>
                            <v-row justify="center">
                                <v-btn 
                                color="main_color  darken-2"
                                @click="dialog1 = true"
                                x-small 
                                fab>
                                    <v-icon>mdi-medical-bag</v-icon>
                                </v-btn>
                            </v-row>
                        </template>

                        <template #[`item.pruebas`]>
                            <v-row justify="center">
                                <v-btn 
                                color="main_color  darken-2" 
                                @click="dialog2 = true" 
                                x-small 
                                fab>
                                    <v-icon>mdi-needle</v-icon>
                                </v-btn>
                            </v-row>
                        </template>

                        <template #[`item.resultados`]>
                            <v-row justify="center">
                                <v-btn 
                                color="main_color  darken-2" 
                                @click="dialog3=true" 
                                x-small 
                                fab>
                                    <v-icon>mdi-clipboard-pulse-outline</v-icon>
                                </v-btn>
                            </v-row>
                        </template>

                        <template #[`item.tratamientos`]>
                            <v-row justify="center">
                                <v-btn 
                                color="main_color  darken-2" 
                                @click="dialog4=true" 
                                x-small 
                                fab>
                                    <v-icon>mdi-pill</v-icon>
                                </v-btn>
                            </v-row>
                        </template>
                        <template #[`item.trasferencia`]>
                            <v-row justify="center">
                                <v-btn 
                                color="main_color  darken-2" 
                                @click="dialog5=true" 
                                x-small 
                                fab>
                                    <v-icon>mdi-transfer</v-icon>
                                </v-btn>
                            </v-row>
                        </template>

                    </v-data-table>
                </v-card>
            </v-row>
        </v-container>
        
        <v-dialog v-model="dialog1" persistent max-width="1000px">
            <v-card>
                <v-col>
                    <v-row>
                        <DiagnosticosAtencionIndex></DiagnosticosAtencionIndex> 
                    </v-row>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-btn color="red" text @click="dialog1 = false">Cerrar</v-btn>
                    </v-row>
                </v-col>
            </v-card>
        </v-dialog>

        <v-dialog v-model="dialog2" persistent max-width="1000px">
            <v-card>
                <v-col>
                    <v-row>
                        <PruebasAtencionIndex></PruebasAtencionIndex>
                    </v-row>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-btn color="red" text @click="dialog2= !dialog2">Cerrar</v-btn>
                    </v-row>
                </v-col>
            </v-card>
        </v-dialog>

        
        <v-dialog v-model="dialog3" persistent max-width="1000px">
            <v-card>
                <v-col>
                    <v-row>
                        <ResultadosAtencionIndex></ResultadosAtencionIndex>
                    </v-row>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-btn color="red" text @click="dialog3= !dialog3">Cerrar</v-btn>
                    </v-row>
                </v-col>
            </v-card>
        </v-dialog>

        
        <v-dialog v-model="dialog4" persistent max-width="1000px">
            <v-card>
                <v-col>
                    <v-row>
                        <TratamientosAtencionIndex></TratamientosAtencionIndex>
                    </v-row>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-btn color="red" text @click="dialog4= !dialog4">Cerrar</v-btn>
                    </v-row>
                </v-col>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog5" persistent max-width="1000px">
            <v-card>
                <v-col>
                    <v-row>
                        <br>
                    </v-row>
                    <v-row>
                        <Transferencia></Transferencia>
                    </v-row>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-btn color="red" text @click="dialog5= !dialog5">Cerrar</v-btn>
                    </v-row>
                </v-col>
            </v-card>
        </v-dialog>
    </v-container>

</template>
<script src="@/components/_indexes/AtencionesIndex.js">
</script>
<style scoped>
.v-input.expanding-search {
    transition: max-width 0.5s;
}

.v-input.expanding-search.closed {
    max-width: 70px;
}
</style>