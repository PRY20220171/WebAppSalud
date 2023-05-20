<template>
    <v-container id="PacientesIndex" class="fill-height" fluid>
        <Loader v-if="isLoading" />
        <template v-else>
        <v-row align="center" justify="center">
            <v-col>
            <v-card class="px-5 pb-5 pt-6" >
                <v-row class="align-items-center px-5">
                    <h3>Pacientes</h3>
                </v-row>
                <v-row class="align-items-center px-5">
                    <v-col >
                        <router-link :to="{name: 'Registro Paciente'}" >
                            <v-btn color="primary">
                                <v-icon left>mdi-account-plus</v-icon>
                                Registrar paciente
                            </v-btn>
                        </router-link>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col>
                        <v-text-field class="py-0" v-model="search" append-icon="mdi-magnify"
                        label="Buscar" single-line hide-details ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-data-table :headers="pacienteHeaders.base" :items="collection.items" :expanded.sync="expanded" :search="search" @click:row="clickRow">
                            <template #[`item.gruposangrh`]="{ item }">{{ item.gruposang }} {{ item.rh }}</template>
                            <!--https://stackoverflow.com/questions/61344980/v-slot-directive-doesnt-support-any-modifier-->
                            <template #[`item.actions`]="{ item }">
                                <router-link :to="'/pacientes/update/'+item.id">
                                    <v-btn color="primary" outlined x-small fab>
                                        <v-icon>mdi-pencil</v-icon>
                                    </v-btn>
                                </router-link>
                                <v-btn  color="error" outlined x-small fab @click="remove(item.id)">
                                        <v-icon class=" text-danger">mdi-delete</v-icon>
                                </v-btn>
                            </template>
                        </v-data-table>
                    </v-col>
                </v-row>
            </v-card></v-col>
        <v-col>     <PacienteUneditable/></v-col>
        </v-row>
        </template>
    </v-container>
</template>
<script src="@/components/_indexes/PacientesIndex.js">
</script>
<style scoped>
.v-input.expanding-search {
  transition: max-width 0.5s; }
  .v-input.expanding-search.closed {
    max-width: 70px; }
</style>