<template>
    <div id="VerUsuario" class="fill-height">
        
      <v-main class="fill-height grey lighten-4 align-center ">
        <v-col v-if="esPerfil">
            <v-row class="mt-15 justify-center">
                <div class="text-h2"> Bienvenido <b>{{model.apellidos}}, {{model.nombres}}</b>!</div>
            </v-row>
            <v-row class="justify-center pa-0 mb-10">
                <div class="mt-4 text-h3 main_color--text text--darken-1 text-capitalize"> Rol: <b>{{model.roles[0].rol.descripcion}}</b></div>
            </v-row>
        </v-col>
        <v-row class="justify-center mt-0">
            <v-col cols="10" md="6" class="">
                <v-card v-if="typeof model.id!='undefined'" class="elevation-4 px-5 py-5">
                    <v-row v-if="!esPerfil" class="justify-center align-center my-5">
                            <span class="text-h4 mr-5"> <b>{{model.apellidos}}, {{model.nombres}}</b>!</span>
                            <span class="text-h4 main_color--text text--darken-1 text-capitalize"> ({{model.roles[0].rol.descripcion}}) </span>
                    </v-row>
                    <v-row v-for="item in datosUsuario">
                        <v-col  class="">
                            <v-icon class="pr-2" left>{{item.icon}}</v-icon>
                            <span>{{item.name}}</span>
                        </v-col>
                        <v-col class="align-end text-end">
                            <v-chip-group active-class="primary--text" column v-if="item.name=='Especialidades'">
                                <v-chip v-for="subitem in item.valor"  color="second_0" outlined> {{ subitem }} </v-chip>
                            </v-chip-group>
                            <span v-else  class="second_0--text ">{{item.valor}}</span>
                        </v-col>
                        <v-col cols="12" class="py-0"><v-divider></v-divider></v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mb-5 justify-center">
            <router-link :to="{name: 'Editar Perfil'}" class="btn primary ">
                <v-btn left color="primary"> Editar </v-btn>
            </router-link>
        </v-row>
        </v-main>
    </div>
  </template>
  
  <script src="@/components/_entities/Usuarios/Usuario.js"> </script>