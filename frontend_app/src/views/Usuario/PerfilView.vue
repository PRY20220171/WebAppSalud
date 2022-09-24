<template>
    <div id="RegistrarPaciente" class="fill-height">
      <Bars/>
      <v-main class="fill-height grey lighten-4 ">
        <v-row class="my-15 justify-center">
            <h2 class="text-h1">¡Hola! ¿Qué tal,</h2>
        </v-row>
        <v-row class="my-15 justify-center">
            <h2 class="text-h2"> {{model.nombres}}Samael Veritas {{model.apellidos}}?</h2>
            <v-icon>mdi-account</v-icon>
            <h2 class="text-h3 main_color--text text--darken-1"> {{model.rol}}Administrador</h2>
        </v-row>
        <v-row class="mx-auto justify-center">
            <v-col cols="8"  md="4" class="">
                <v-card class="mb-12 elevation-4 px-5 py-5" outlined >                
                    <v-card-text class="">

                            <v-row class="py-3 align-start">
                                <v-icon class="pr-2">mdi-email</v-icon> 
                                <p>{{model.Doctipo}}: </p>
                                 <span class='pa-1 rounded-pill accent lighten-4'>{{model.Docnum}}</span>
                            </v-row>
                            <v-row class="py-3 align-start">
                                <v-icon class="pr-2">mdi-email</v-icon>
                                <p>Correo: </p>
                                 <span class='pa-1 rounded-pill accent lighten-4'>{{model.correo}}@</span>
                            </v-row>
                            <v-row class="py-3 align-start">
                                <v-icon class="pr-2">mdi-email</v-icon>
                                <p>Teléfono: </p>
                                 <span class='pa-1 rounded-pill accent lighten-4'>{{model.telefono}}</span>
                            </v-row>
                            <v-row class="py-3 align-start">
                                <v-icon class="pr-2">mdi-email</v-icon>
                                <p>Dirección: </p>
                                 <span class='pa-1 rounded-pill accent lighten-4'>{{model.direccion}}</span>
                            </v-row>
                            <v-row class="py-3 align-start">
                                <v-icon class="pr-2">mdi-email</v-icon>
                                <p>Procedencia (Nacionalidad): </p>
                                 <span class='pa-1 rounded-pill accent lighten-4'>{{model.procedencia}}</span>
                            </v-row>
                            <v-row class="py-3 align-start">
                                <v-icon class="pr-2">mdi-email</v-icon>
                                <p>Especialidad(es)): </p>
                                 <span class='pa-1 rounded-pill accent lighten-4'>{{model.especialidad}}</span>
                            </v-row>
                            
                    </v-card-text>
                    </v-card>
                    
                    <router-link to="/pacientes/create"  class="btn primary ">Editar</router-link>

                    <v-btn color="primary" @click="e1 = 1" > Editar </v-btn>
            </v-col>
            </v-row>
        </v-main>
    </div>
  </template>
  
  <script src="../../components/_entities/Usuarios/Usuario.js"></script>