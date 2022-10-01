<template>
    
    <v-container fill-height fluid>
        <v-form class="flex">
            <v-row class="mx-auto justify-center my-10">
                <v-col cols="12" md="5" class="">
                    <v-card class="mb-12 elevation-4 px-5 py-5" outlined id="Nino">
                        <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
                            Información general
                        </v-card-title>
                        <v-divider class="ml-4"></v-divider>
                        <v-card-text class="">
                            <v-row class="py-3">
                                <v-text-field label="Nombre(s)" name="nombres" v-model="model.nombres"
                                    prepend-icon="mdi-account" type="text" color="main_color" hide-details="auto" />
                            </v-row>
                            <v-row class="py-3">
                                <v-text-field label="Apellido(s)" name="apellidos" v-model="model.apellidos"
                                    prepend-icon="mdi-account-group" type="text" color="main_color" hide-details="auto" />
                            </v-row>
                            <v-row class="py-3">
                                <v-text-field label="Contraseña" name="password" v-model="model.password"
                                    prepend-icon="mdi-email" type="password" color="main_color" hide-details="auto" />
                            </v-row>
                            <v-row class="py-3">
                                <v-col cols="12" sm="6" class="px-0">
                                    <v-select :items="tipo_doc" label="Tipo de Documento" name="tipo_doc"
                                        v-model="model.Doctipo" prepend-icon="mdi-card-bulleted-settings"
                                        color="main_color" hide-details="auto"></v-select>
                                </v-col>
                                <v-col cols="12" sm="6" class="px-0">
                                    <v-text-field label="Número de documento" name="num_doc" v-model="model.Docnum"
                                        prepend-icon="mdi-card-account-details" type="text" color="main_color"
                                        hide-details="auto" />
                                </v-col>
                            </v-row>
                            <v-row class="py-3">
                                <v-text-field label="Correo" name="correo" v-model="model.correo"
                                    prepend-icon="mdi-email" type="mail" color="main_color" hide-details="auto" />
                            </v-row>
                            <v-row class="py-3">
                                <v-text-field label="Teléfono" name="correo" v-model="model.telefono"
                                    prepend-icon="mdi-phone" type="number" color="main_color" hide-details="auto" />
                            </v-row>
                            <v-row class="py-3">
                                <v-text-field label="Dirección actual" name="correo" v-model="model.direccion"
                                    prepend-icon="mdi-map-marker" type="text" color="main_color" hide-details="auto" />
                            </v-row>
                            <v-row class="py-3">
                                <v-text-field label="Procedencia (Nacionalidad)" name="correo"
                                    v-model="model.procedencia" prepend-icon="mdi-earth" type="text" color="main_color"
                                    hide-details="auto" />
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="5">
                    <v-card class="mb-12 elevation-4 px-5 py-5" outlined id="Nino">
                        <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
                            Información específica
                        </v-card-title>
                        <v-divider class="ml-4"></v-divider>
                        <v-card-text class="">
                            <v-row class="py-3">
                                <v-radio-group label="Por favor, seleccionar rol del usuario" v-model="model.rol"
                                    prepend-icon="mdi-account" color="main_color" hide-details="auto">
                                    <v-radio v-for="rol in roles" :value="rol.nombre" :key="rol.nombre" :label="rol.nombre">
                                    </v-radio>
                                </v-radio-group>
                            </v-row>
                            <v-row class="py-3">
                                <v-text-field label="Número de Colegiatura" name="numcolegiatura"
                                    v-model="model.numcolegiatura" prepend-icon="mdi-medical-bag" type="number"
                                    color="main_color" hide-details="auto" />
                            </v-row>
                            <v-row class="py-3">
                                <v-select v-model="model.especialidad" :items="especialidades" chips
                                    label="Especialidades" multiple prepend-icon="mdi-school" color="main_color">
                                </v-select>
                            </v-row>
                        </v-card-text>
                    </v-card>
                    <v-btn color="primary" @click="e1 = 1"> Registrar </v-btn>
                    <v-btn text> Cancel </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
    
</template>

<script src="../../../components/_entities/Usuarios/Usuario.js"></script>