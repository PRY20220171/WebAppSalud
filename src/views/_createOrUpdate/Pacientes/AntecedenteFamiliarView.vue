<template>

    <v-card class="mb-12 elevation-4 mx-auto px-5 py-5" outlined id="AntecedenteFamiliar">
      <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
        Antecedentes Familiares
      </v-card-title>
      <v-divider class="ml-4"></v-divider>
  
      <v-card-text class="">
        <v-row >
          <v-col  cols="12" md='6' class='px-6'>
            
            <v-row class="py-0">
                <v-select v-model="paciente.antecedentefam.tbc" :items="familiares" item-value="val" item-text="show" 
                chips label="Tuberculosis" multiple hide-details="auto" >
                    <template v-slot:item="{item}">
                        ({{item.val}}) {{item.show}}
                    </template>
                    <template v-slot:selection="{item}">
                        <v-chip>{{item.val}}</v-chip>
                    </template>
                </v-select>
            </v-row>
            
            <v-row class="py-0">
                <v-select v-model="paciente.antecedentefam.vihsida" :items="familiares"  item-value="val" item-text="show" 
                chips label="VIH / SIDA" multiple hide-details="auto">
                    <template v-slot:item="{item}">
                        ({{item.val}}) {{item.show}}
                    </template>
                    <template v-slot:selection="{item}">
                        <v-chip>{{item.val}}</v-chip>
                    </template>
                </v-select>
            </v-row>
            <v-row class="py-0">
                <v-select v-model="paciente.antecedentefam.diabetes" :items="familiares"  item-value="val" item-text="show" 
                chips label="Diabetes" multiple hide-details="auto">
                    <template v-slot:item="{item}">
                        ({{item.val}}) {{item.show}}
                    </template>
                    <template v-slot:selection="{item}">
                        <v-chip>{{item.val}}</v-chip>
                    </template>
                </v-select>
            </v-row>
            <v-row class="py-0">
                <v-select v-model="paciente.antecedentefam.epilepsia" :items="familiares"  item-value="val" item-text="show" 
                chips label="Epilepsia" multiple hide-details="auto">
                    <template v-slot:item="{item}">
                        ({{item.val}}) {{item.show}}
                    </template>
                    <template v-slot:selection="{item}">
                        <v-chip>{{item.val}}</v-chip>
                    </template>
                </v-select>
            </v-row>
            <v-row class="py-0">
                <v-select v-model="paciente.antecedentefam.hepatitisb" :items="familiares"  item-value="val" item-text="show" 
                chips label="Hepatitis B" multiple hide-details="auto">
                    <template v-slot:item="{item}">
                        ({{item.val}}) {{item.show}}
                    </template>
                    <template v-slot:selection="{item}">
                        <v-chip>{{item.val}}</v-chip>
                    </template>
                </v-select>
            </v-row>
          </v-col>
          
          <v-col  cols="12" md='6' class='px-6'>
            <v-row class="py-0">
                <v-select v-model="paciente.antecedentefam.alergiamedic" :items="familiares"  item-value="val" item-text="show" 
                chips label="Alergias médicas" multiple hide-details="auto">
                    <template v-slot:item="{item}">
                        ({{item.val}}) {{item.show}}
                    </template>
                    <template v-slot:selection="{item}">
                        <v-chip>{{item.val}}</v-chip>
                    </template>
                </v-select>
            </v-row>
            <v-row class="py-0">
                <v-select v-model="paciente.antecedentefam.violenciafam" :items="familiares"  item-value="val" item-text="show" 
                chips label="Violencia familiar" multiple hide-details="auto">
                    <template v-slot:item="{item}">
                        ({{item.val}}) {{item.show}}
                    </template>
                    <template v-slot:selection="{item}">
                        <v-chip>{{item.val}}</v-chip>
                    </template>
                </v-select>
            </v-row>
            <v-row class="py-0">
                <v-select v-model="paciente.antecedentefam.alcoholismo" :items="familiares"  item-value="val" item-text="show" 
                chips label="Alcoholismo" multiple hide-details="auto">
                    <template v-slot:item="{item}">
                        ({{item.val}}) {{item.show}}
                    </template>
                    <template v-slot:selection="{item}">
                        <v-chip>{{item.val}}</v-chip>
                    </template>
                </v-select>
            </v-row>
            <v-row class="py-0">
                <v-select v-model="paciente.antecedentefam.drogradiccion" :items="familiares"  item-value="val" item-text="show" 
                chips label="Drogradiccion" multiple hide-details="auto">
                    <template v-slot:item="{item}">
                        ({{item.val}}) {{item.show}}
                    </template>
                    <template v-slot:selection="{item}">
                        <v-chip>{{item.val}}</v-chip>
                    </template>
                </v-select>
            </v-row>
            <v-row>
                <v-text-field label="Otros antecedentes" name="otros" v-model="paciente.antecedentefam.otros"
                prepend-icon="mdi-note-multiple" type="text" color="main_color" hide-details="auto" />
            </v-row>
          </v-col>
          
        </v-row>
      </v-card-text>
    </v-card>
  </template>
  
  <script src="../../../components/_entities/Pacientes/AntecedenteFamiliar.js"></script>