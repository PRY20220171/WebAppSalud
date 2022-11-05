<template>
    <v-container id="UsuariosIndex" class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-card class="px-5 pb-5 pt-6" >
                <v-row class="align-items-center px-5">
                    <h3>Usuarios</h3>
                </v-row>
                <v-row class="align-items-center px-5">
                    <v-col >
                        <router-link :to="{name: 'Registro Usuario'}" >
                            <v-btn color="primary">
                                <v-icon left>mdi-account-plus</v-icon>
                                Registrar usuario
                            </v-btn>
                        </router-link>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col>
                        <v-text-field class="py-0" v-model="search" append-icon="mdi-magnify"
                        label="Search" single-line hide-details ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-data-table :headers="usuarioHeaders" :items="collection.items" :search="search">
                           
                            <template #[`item.actions`]="{ item }">
                                <router-link :to="'/usuarios/update/'+item.id">
                                    <v-btn color="primary" outlined x-small fab> 
                                        <v-icon>mdi-pencil</v-icon>
                                    </v-btn>
                                </router-link>
                                <v-btn  color="error" outlined x-small fab>
                                        <v-icon class=" text-danger">mdi-delete</v-icon>
                                    </v-btn>
                            </template>
                        </v-data-table>
                    </v-col>
                </v-row>
            </v-card>
        </v-row>
    </v-container>
</template>
<script src="@/components/_indexes/UsuariosIndex.js">
</script>