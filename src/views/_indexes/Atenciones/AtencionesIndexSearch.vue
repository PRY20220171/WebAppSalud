<template>
    <v-container id="AtencionsIndex" class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12"  lg="8">
            <v-card class="px-5 pb-5 pt-6" >
                <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
                    Buscar Atencion
                </v-card-title>
                <v-row class="align-items-center px-5">
                    <v-col>
                        <v-text-field class="py-0" v-model="search" append-icon="mdi-magnify"
                        label="Buscar" single-line hide-details ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-data-table :headers="atencionHeaders" :items="collection.items" :search="search" :footer-props="{'items-per-page-text':'Registros por página'}">
                            <template #[`item.actions`]="{ item }">
                                <v-btn  color="primary" outlined x-small fab @click="selected(item.id, item.paciente.id)">
                                   <v-icon class=" text-primary">mdi-eye</v-icon>
                                </v-btn>
                            </template>
                        </v-data-table>
                    </v-col>
                </v-row>
            </v-card>
            </v-col>
            <v-col cols="10" md="5" >
                <PacienteUneditable/>
            </v-col>
            <v-col cols="12"  md="8">
                <AtencionUneditable/>
            </v-col>
        </v-row>
    </v-container>
</template>
<script src="@/components/_indexes/AtencionesIndexSearch.js">
</script>