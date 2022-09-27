<template>
    <v-row class="py-0 my-0 ">
        <v-col class="py-0 my-0" cols="2">
            <v-text-field  v-model="model.nombre" hide-details="auto" color="main_color" >
            </v-text-field>
        </v-col>
        <v-col class="py-0 my-0" cols="1">
            <v-text-field  v-model="model.tiempo" hide-details="auto" color="main_color" >
            </v-text-field>
        </v-col>
        <v-col class="py-0 my-0" cols="3">
            <v-text-field  v-model="model.dosis" hide-details="auto" color="main_color" >
            </v-text-field>
        </v-col>
        <v-col class="py-0 my-0">
            <v-text-field  v-model="model.descripcion" hide-details="auto" color="main_color" >
            </v-text-field>
        </v-col>
    </v-row>
</template>
<script src="../../../components/_entities/Resultados/Tratamiento">