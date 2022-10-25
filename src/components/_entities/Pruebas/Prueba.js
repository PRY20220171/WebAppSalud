import {mapState, mapMutations, mapActions} from 'vuex'
export default {
    name: 'Prueba',

    components: {
    },
    
    data () {
      return {
        
        model : {
          id: "",
          idtipoprueba: "",
          tipoprueba: {
            id: "",
            idmedida: "",
            medida: {
              id: "",
              nombre: "",
              descripcion: ""
            },
            idcategoriaprueba: "",
            categoriaprueba: {
              id: "",
              nombre: "",
              descripcion: ""
            },
            nombre: "",
            descripcion: ""
          },
          idpaciente: "",
          paciente: {
            id: "",
            nombres: "",
            apellidos: "",
            docnum: "",
            doctipo: "",
            sexo: "",
            gruposang: "",
            rh: "",
            telefono: "",
            gradoinstruccion: "",
            ocupacion: "",
            estadocivil: "",
            fecnac: "",
            idlugarnac: "",
            iddomicilioact: "",
            idantecedenteperi: "",
            idantecedentepsico: "",
            idantecedentefam: "",
            idantecedentepato: ""
          },
          fecresultado: "",
          fecprueba: "",
          resultado: 0,
          observacion: "",
          signosvitales: ""
        }
      }
    },
    computed:{
      ...mapState('PruebaModule',['prueba']),
    },
    methods:{
    }
  }