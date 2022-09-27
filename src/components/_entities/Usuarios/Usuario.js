import Bars from '../../../views/Shared/Bars.vue';

export default {
    name: 'Usuario',

    components: {
      Bars,
    },
    
    data () {
      return {
        
        model:{
            idusuario:'',
            nombres:'',
            apellidos:'',
            password:'',
            docnum:'',
            doctipo:'',
            correo:'',
            telefono:'',
            direccion:'',
            procedencia:'',
            rol:"",
            numcolegiatura:"",
            especialidad:"",
        },
        rol:{
            idrol:'',
            descripcion:'',
        },

        tipo_doc: ['DNI', 'Carnet de Extranjería', 'Pasaporte'],
        roles: ['Administrador', 'Médico','Enfermero'],
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
    
    methods:{
    }
  }
