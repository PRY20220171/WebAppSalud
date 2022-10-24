<template>
    <v-container id="PacientesIndex" class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12"  lg="8">
            <v-card class="px-5 pb-5 pt-6" >
                <v-row class="align-items-center px-5">
                    <h3>Pacientes</h3>
                </v-row>
                <v-row class="align-items-center px-5">
                    <v-col>
                        <v-text-field class="py-0" v-model="search" append-icon="mdi-magnify"
                        label="Search" single-line hide-details ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-data-table :headers="pacienteHeaders" :items="collection.items" :search="search" >                            
                            <template #[`item.gruposangrh`]="{ item }">{{ item.gruposang }} {{ item.rh }}</template>                     
                            <template #[`item.sexo`]="{ item }"> {{tipo_sexo[item.sexo]}} </template>
                            <template #[`item.actions`]="{ item }">
                                <v-btn  color="primary" outlined x-small fab @click="selected(item.id)">
                                   <v-icon class=" text-primary">mdi-eye</v-icon>
                                </v-btn>
                            </template>
                        </v-data-table>
                    </v-col>
                </v-row>
            </v-card>
            </v-col>
            <v-col cols="12"  lg="4">
            <v-card class="px-5 pb-5 pt-6" >
                <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
                    {{paciente.nombres}} {{paciente.apellidos}}
                </v-card-title>
                <v-card-text class="" v-if="typeof paciente.id!='undefined' ">
                    <v-row>
                        <v-col cols='6' lg='4' v-for="(item,i) in datosPaciente">
                            <v-list-item >
                                <v-list-item-content >
                                    <v-list-item-title>{{i}}</v-list-item-title>
                                    <v-list-item-subtitle>{{item}}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script src="@/components/_indexes/PacientesIndexSearch.js">
</script>