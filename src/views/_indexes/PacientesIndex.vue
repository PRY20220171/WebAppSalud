<template>
    <v-container id="PacientesIndex" class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-card class="px-5 pb-5 pt-6">
                <v-row class="align-items-center px-5">
                    <v-col class="py-5">
                        <v-row>
                            <h3 >Pacientes</h3>
                            <router-link to="/pacientes/create" class="px-5">
                                <v-btn color="primary"> 
                                    Agregar paciente
                                    <v-icon>mdi-account-plus</v-icon>
                                </v-btn>
                            </router-link>
                        </v-row>
                    </v-col>
                    <v-col class="py-5">
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col>
                        <v-text-field v-model="search" append-icon="mdi-magnify"
                        label="Search" single-line hide-details class="py-0"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-data-table :headers="headers" :items="collection.items" :search="search">
                            <template #item.gruposangrh="{ item }">{{ item.gruposang }} {{ item.rh }}</template>
                            <template #item.actions="{ item }">
                                <router-link :to="'/pacientes/update/'+item.id">
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
<script src="../../components/_indexes/PacientesIndex">
import Bars from '../Shared/Bars.vue';</script>