<template>
    <div id="UsuariosIndex">
        <Bars/>
        <v-main>
            <v-container>
                <v-row class="align-items-center">
                    <v-col class="py-5">Usuarios</v-col>
                    <v-spacer></v-spacer>
                    <v-col>
                        <v-text-field v-model="search" append-icon="mdi-magnify"
                        label="Search" single-line hide-details ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>
<script src="../../components/_indexes/UsuariosIndex">
import Bars from '../Shared/Bars.vue';</script>