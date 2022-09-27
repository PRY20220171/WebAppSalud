<template>
    <v-row class="py-0 my-0 ">
        <v-col class="py-0 my-0" cols="2">
            <v-text-field name="fecresultado"  v-model="model.fecresultado"
            type="date" color="main_color" hide-details="auto" />
        </v-col>
        <v-col class="py-0 my-0" cols="2">
            <v-text-field name="fecprueba"  v-model="model.fecprueba"
            type="date" color="main_color" hide-details="auto" />
        </v-col>
        <v-col class="py-0 my-0" >
            <v-text-field  v-model="model.resultado" name="resultado" hide-details="auto" color="main_color" >
            </v-text-field>
        </v-col>
        <v-col class="py-0 my-0" >
            <v-text-field  v-model="model.observacion" name="observacion" hide-details="auto" color="main_color" >
            </v-text-field>
        </v-col>
    </v-row>
</template>
<script src="../../../components/_entities/Pruebas/Prueba.js">