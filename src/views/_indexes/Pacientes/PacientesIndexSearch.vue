<template>
    <v-container id="PacientesIndex" class="fill-height" fluid>
        <v-row justify="center">
            <v-col cols="12"  lg="8">
            <v-card class="px-5 pb-5 pt-6" >
                <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
                    Buscar Paciente
                </v-card-title>
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
                                <v-btn  justify="center" color="primary" outlined x-small fab @click="selected(item.id)">
                                   <v-icon  class=" text-primary">mdi-eye</v-icon>
                                </v-btn>
                            </template>
                        </v-data-table>
                    </v-col>
                </v-row>
            </v-card>
            </v-col>
            <v-col cols="8"  xl="4">
                <PacienteUneditable/>
            </v-col>
        </v-row>
    </v-container>
</template>
<script src="@/components/_indexes/PacientesIndexSearch.js">
</script>