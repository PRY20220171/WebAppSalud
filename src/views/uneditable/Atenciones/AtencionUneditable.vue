<template>
    
    <v-card class="px-5 pb-5 pt-6" >
        <v-card-title>
           <h4>Atención</h4>  <v-spacer></v-spacer>
           <span class="text-subtitle-1">{{atencion.fecharegistro}} | Motivo: {{atencion.motivoconsulta}}</span>
        </v-card-title>
        <v-card-text v-if="typeof atencion.id!='undefined'">
                <v-expansion-panels class="py-2 px-4" focusable >
                    <v-expansion-panel cols='6' v-for="(item,i) in datosAtencion" class="">
                        <v-expansion-panel-header  class="text-center main_color--text text--darken-1">
                            <b>{{i}}</b>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content >
                            <v-row>
                                <v-col cols="6" class="py-7 px-5" v-for="subcategoria in item">
                                    <v-row><b>{{subcategoria.text}}</b></v-row>
                                    <v-row v-for="subitem in subcategoria.detail">
                                        <v-col>{{subitem.text}}</v-col>
                                        <v-col class="align-end text-end">{{subitem.value}}</v-col>
                                        <v-col cols="12" class="py-0 my-0"><v-divider></v-divider></v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-content>
                        <v-divider></v-divider>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-divider></v-divider>
                
                <v-expansion-panels class="py-2 px-4" focusable >{{listas.resultados.items.tratamientos}}
                    <v-expansion-panel cols='6' class="" v-for="(item,i) in listas">
                        <v-expansion-panel-header  class="text-center main_color--text text--darken-1">
                            <b>{{i}}</b>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content >
                            <template>
                            <v-data-table :headers="item.headers" :items="item.items" hide-default-footer class="elevation-1" >
                                <template v-slot:item.tratamientos="{ item }">
                                    <v-row v-for="subitem in item.tratamientos">
                                        {{ subitem.medicamento }} | descripcion
                                    </v-row>
                                </template>
                            </v-data-table>
                            </template>
                        </v-expansion-panel-content>
                        <v-divider></v-divider>
                    </v-expansion-panel>
                </v-expansion-panels>
        </v-card-text>
    </v-card>
</template>
<script src="@/components/_entities/Atenciones/AtencionUneditable.js">
</script>