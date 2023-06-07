<template>

    <v-container fill-height fluid>
        <v-form class="flex">
          <v-alert :type="alertType" fluid>
            {{mensaje}}
          </v-alert>
            <v-row class="mx-auto justify-center my-10">
                <v-col cols="12" md="5" class="">
                    <v-card class="mb-12 elevation-4 px-5 py-5" outlined >
                        <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
                            Información general
                        </v-card-title>
                        <v-divider class="ml-4"></v-divider>
                        <v-card-text class="">
                            <v-row class="py-3">
                                <v-text-field label="Nombre(s)*" name="nombres" v-model="usuario.nombres"
                                :rules="rules.usuario.nombres"
                                    prepend-icon="mdi-account" type="text" color="main_color" hide-details="auto" />
                            </v-row>
                            <v-row class="py-3">
                                <v-text-field label="Apellido(s)*" name="apellidos" v-model="usuario.apellidos"
                                :rules="rules.usuario.apellidos"
                                    prepend-icon="mdi-account-group" type="text" color="main_color" hide-details="auto" />
                            </v-row>
                            <v-row class="py-3">
                                <v-col cols="12" sm="6" class="px-0">
                                    <v-select :items="tipo_doc" label="Tipo de Documento*" name="tipo_doc"
                                        v-model="usuario.doctipo" prepend-icon="mdi-card-bulleted-settings"
                                        color="main_color" hide-details="auto"></v-select>
                                </v-col>
                                <v-col cols="12" sm="6" class="px-0">
                                    <v-text-field label="Número de documento*" name="num_doc" v-model="usuario.docnum"
                                    :rules="rules.usuario.docnum"
                                        prepend-icon="mdi-card-account-details" type="text" color="main_color"
                                        hide-details="auto" />
                                </v-col>
                            </v-row>
                            <v-row class="py-3">
                                <v-text-field label="Correo" name="correo" v-model="usuario.correo" :rules="rules.usuario.correo"
                                @blur="checkUserExists"
                                    prepend-icon="mdi-email" type="mail" color="main_color" hide-details="auto" />
                                    <div v-if="rules.usuario.correoExists">Correo ya registrado!</div>
                            </v-row>
                            <v-row class="py-3">
                                <v-text-field label="Teléfono" name="correo" v-model="usuario.telefono"
                                :rules="rules.usuario.telefono"
                                    prepend-icon="mdi-phone" type="number" color="main_color" hide-details="auto" oninput="if(this.value < 0) this.value = 0;"/>
                            </v-row>
                            <v-row class="py-3">
                                <v-text-field label="Dirección actual" name="correo" v-model="usuario.direccion"
                                    prepend-icon="mdi-map-marker" type="text" color="main_color" hide-details="auto" />
                            </v-row>
                            <v-row class="py-3">
                                <v-text-field label="Procedencia (Nacionalidad)" name="correo"
                                    v-model="usuario.procedencia" prepend-icon="mdi-earth" type="text" color="main_color"
                                    hide-details="auto" />
                            </v-row>
                        </v-card-text>
                    </v-card>
                    <v-card class="mb-12 elevation-4 px-5 py-4 mt-0" outlined v-if="!usuario.id">
                        <v-card-text >
                            <v-row class="">
                                <v-text-field label="Por favor, colocar contraseña" name="password" v-model="usuario.password"
                                    prepend-icon="mdi-email" type="password" color="main_color" hide-details="auto"  />
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="5">
                    <v-card class="mb-12 elevation-4 px-5 py-4" outlined >
                        <v-card-title class="main_color--text text--darken-1 text-subtitle-1">
                            Información específica
                        </v-card-title>
                        <v-divider class="ml-4"></v-divider>
                        <v-card-text class="">
                            <v-row class="py-3">
                                <v-radio-group label="Por favor, seleccionar rol del usuario*" v-model="usuario.roles[0].rol.descripcion"
                                    prepend-icon="mdi-account" color="main_color" hide-details="auto">
                                    <v-radio v-for="rol in roles" :value="rol.value" :label="rol.nombre">
                                    </v-radio>
                                </v-radio-group>
                            </v-row>
                            <v-row class="py-3">
                                <v-text-field label="Número de Colegiatura *" name="numcolegiatura"
                                    v-model="usuario.numcolegiatura" prepend-icon="mdi-medical-bag" type="number" hint="(obligatorio para personal médico)"
                                    color="main_color" persistent-hint />
                            </v-row>
                            <v-row class="py-3">
                                <v-select v-model="usuario.especialidad" :items="especialidades" chips
                                    label="Especialidades" multiple prepend-icon="mdi-school" color="main_color">
                                </v-select>
                            </v-row>
                        </v-card-text>
                    </v-card>
                    <v-card class="mb-12 elevation-4 px-5 py-4 mt-0" outlined v-if="usuario.id == token_usuariotem">
                        <v-card-title class="align-center ">
                            <v-checkbox v-model="cambiar_pass" hide-details="auto" label="Cambiar Contraseña" color="main_color"></v-checkbox>
                        </v-card-title>
                        <v-divider class="ml-4"></v-divider>
                        <v-card-text v-if="cambiar_pass">
                            <v-row class="">
                                <v-text-field label="Por favor, colocar contraseña actual" name="password" v-model="password_verif"
                                    prepend-icon="mdi-email" type="password" color="main_color" hide-details="auto" :disabled="!cambiar_pass" />
                            </v-row>
                            <v-row class="">
                                <v-text-field label="Nueva Contraseña" name="password" v-model="nueva_password"
                                    prepend-icon="mdi-email" type="password" color="main_color" hide-details="auto" :disabled="!cambiar_pass" />
                            </v-row>
                            <v-row class="">
                                <v-text-field label="Por favor, repetir nueva contraseña" name="password_verif" v-model="nueva_password_verif "
                                    prepend-icon="mdi-email" type="password" color="main_color" hide-details="auto" :disabled="!cambiar_pass"/>
                            </v-row>
                        </v-card-text>
                    </v-card>
                    <CentroMedico/>
                    <v-btn color="primary" @click="save"> Registrar </v-btn>
                    <v-btn text @click="cancel" v-if="alertType!='success'"> Cancelar </v-btn>
                    <v-btn text @click="cancel" v-else> Regresar </v-btn>
                </v-col>
            </v-row>
        </v-form>

    </v-container>

</template>

<script src="@/components/_entities/Usuarios/_Usuario.js"></script>