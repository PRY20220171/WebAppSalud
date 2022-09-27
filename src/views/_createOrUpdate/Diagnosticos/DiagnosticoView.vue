<template>
    <v-row class="py-0 my-0 ">
        <v-col class="py-0 my-0" cols="3">
            <v-text-field name="fecregistro"  v-model="model.fecregistro"
            type="date" color="main_color" hide-details="auto" />
        </v-col>
        <v-col class="py-0 my-0" >
            <v-text-field  v-model="model.Descripcion" hide-details="auto" color="main_color" >
            </v-text-field>
        </v-col>
        <v-col class="py-0 my-0" cols="2">
            <v-select :items="estados" name="estado" v-model="model.estado" 
               color="main_color" hide-details="auto"></v-select>
        </v-col>
        <v-col class="py-0 my-0" cols="2">
            <v-select :items="tipos" name="etapa" v-model="model.tipo" 
               color="main_color" hide-details="auto"></v-select>
        </v-col>
    </v-row>
</template>
<script src="../../../components/_entities/Diagnosticos/Diagnostico.js">