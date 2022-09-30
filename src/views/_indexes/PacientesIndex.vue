<template>
    <v-container id="PacientesIndex" class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-card class="px-5 pb-5 pt-6">
                <v-row class="align-items-center px-5">
                    <v-col class="py-5">
                        <h3>Pacientes</h3>
                        </v-col>
                    <v-spacer></v-spacer>
                    <v-col>
                        <v-text-field v-model="search" append-icon="mdi-magnify"
                        label="Search" single-line hide-details class="py-0"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-data-table :headers="headers" :items="pacientes" :search="search"></v-data-table>
                    </v-col>
                </v-row>
            </v-card>
        </v-row>
    </v-container>
</template>
<script src="../../components/_indexes/PacientesIndex">
import Bars from '../Shared/Bars.vue';</script>