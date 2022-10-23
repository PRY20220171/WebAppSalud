
import {mapState} from 'vuex'

export default {
    name: 'Acompanante',

    components: {
    },
    
    data () {
      return {
        
        model:{
            idacompanante: '',
            nombres: '',
            apellidos: '',
            docnum: '',
            doctipo: '',
            fecnac: '',
            telefono: '',
            gradoinstruccion: '',
            ocupacion: '',
            parentezco: '',
        },

        tipo_doc: ['DNI', 'Carnet de Extranjería', 'Pasaporte'],
        tipo_educ: ['Inicial','Primario','Secundario','Técnica','Superior','Especial'],
        tipo_parentezco: ['Padre', 'Madre','Hermano(a)','Tío(a)','Primo(a)','Hijo(a)','Nieto(a)','Sobrino(a)','Ninguno'],
      }
    },
    computed:{/* 
      edad_acompanante(){
        let edadp=this.$calcEdad(this.model.fecnac)
        console.log('new edad',this.edadp)
        return edadp
      }, */
    },
    mounted(){
    },
    methods:{
    },
    watch: {/* 
      'model.fecnac': {
        deep: true,
        handler (antf,nuevaf) {
            console.log('de ',antf,' a ', nuevaf)
            console.log(this.edad_acompanante)
            this.edad_acompanante=this.$calcEdad(nuevaf)
        }
      }, */
    },
  }