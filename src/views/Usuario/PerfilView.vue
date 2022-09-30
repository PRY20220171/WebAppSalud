<template>
    <div id="RegistrarPaciente" class="fill-height">
        
      <v-main class="fill-height grey lighten-4 ">
        <v-row class="my-15 justify-center">
            <div class="text-h2"> Bienvenido <b>{{model.apellidos}}, {{model.nombres}}</b>.</div>
        </v-row>
        <v-row class="justify-center pa-0 mb-0">
            <div class="mt-4 text-h3 main_color--text text--darken-1"> Rol: <b>{{model.rol}}</b></div>
        </v-row>
        <v-row class="justify-center mt-0">
            <v-col cols="8" md="4" class="">
                <v-card class="elevation-4 px-5 py-5" outlined>
                    <v-card-text class="">
                        <v-row class="py-3 align-start">
                            <v-icon class="pr-2" left>mdi-card-account-details</v-icon>
                            <p>{{model.doctipo}}: </p>
                            <span class='pl-3 rounded-pill accent lighten-4'>{{model.docnum}}</span>
                        </v-row>
                        <v-row class="py-3 align-start">
                            <v-icon class="pr-2" left>mdi-email</v-icon>
                            <p>Correo: </p>
                            <span class='pl-3  rounded-pill accent lighten-4'>{{model.correo}}</span>
                        </v-row>
                        <v-row class="py-3 align-start">
                            <v-icon class="pr-2" left>mdi-phone</v-icon>
                            <p>Teléfono: </p>
                            <span class='pl-3  rounded-pill accent lighten-4'>{{model.telefono}}</span>
                        </v-row>
                        <v-row class="py-3 align-start">
                            <v-icon class="pr-2" left>mdi-city</v-icon>
                            <p>Dirección: </p>
                            <span class='pl-3  rounded-pill accent lighten-4'>{{model.direccion}}</span>
                        </v-row>
                        <v-row class="py-3 align-start">
                            <v-icon class="pr-2" left>mdi-map-marker</v-icon>
                            <p>Procedencia (Nacionalidad): </p>
                            <span class='pl-3  rounded-pill accent lighten-4'>{{model.procedencia}}</span>
                        </v-row>
                        <v-row class="py-3 align-start">
                            <v-icon class="pr-2" left>mdi-account-tie</v-icon>
                            <p>Especialidad(es): </p>
                            <span class='pl-3  rounded-pill accent lighten-4'>{{model.especialidad}}</span>
                        </v-row>
                    </v-card-text>
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
  
  <script>
export default {
    name: 'MiPerfil',
    data () {
      return {
        model:{
            idusuario:'1',
            nombres:'Samael',
            apellidos:'Veritas',
            password:'',
            docnum:'12345678',
            doctipo:'DNI',
            correo:'sveritas@salud.com',
            telefono:'987654321',
            direccion:'Psje. 123',
            procedencia:'Peruano',
            rol:"Administrador",
            numcolegiatura:"123456",
            especialidad:"Cardiología",
        },
        rol:{
            idrol:'',
            descripcion:'',
        },

        tipo_doc: ['DNI', 'Carnet de Extranjería', 'Pasaporte'],
        roles: [
          {nombre:'Administrador',descripcion:'Acceso completo al sistema'},
          {nombre:'Médico',descripcion:'Acceso parcial al sistema'},
          {nombre:'Enfermero',descripcion:'Acceso parcial al sistema'}
        ],
        especialidades:[
          "Alergología",
          "Cardiología",
          "Cirugía de Cabeza y Cuello",
          "Cirugía de Torax y Cardiovascular",
          "Cirugía General y Laparoscópica",
          "Cirugía Oncológica",
          "Cirugía Pediátrica",
          "Dermatología",
          "Ecografía",
          "Endocrinología",
          "Gastroenterología",
          "Geriatría",
          "Ginecología Oncológica",
          "Ginecología y Obstetricia",
          "Hematología",
          "Mastología",
          "Medicina Física y Rehabilitación",
          "Medicina General",
          "Medicina Interna",
          "Nefrología",
          "Neumología",
          "Neurocirugía",
          "Neurología",
          "Nutrición",
          "Odontología",
          "Oftalmología",
          "Otorrinolaringología",
          "Pediatría",
          "Psicología",
          "Radiología",
          "Reumatologia",
          "Salud Mental",
          "Traumatologia y Ortopedia",
          "Urología",
        ]
      }
    },
  }

  </script>