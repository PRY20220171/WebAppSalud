import {mapState, mapMutations, mapActions} from 'vuex'

export default {
    name: 'Transferencia',

    components: {
    },

    data () {
      return {
        model:{
            //id: "",
            fecharegistro:'',
            especialidadini:'',
            especialidadfin:'',
            atencion:{                        
                usuario:{
                    nombres:'',
                    apellidos:'',
                    docnum:'',
                    doctipo:'',
                    numcolegiatura:'',
                    centroMedico:{
                        nombre:'',
                        sector:'',
                        pais:'',
                        region:'',
                        provincia:'',
                        distrito:'',
                    }
                },
                paciente:{
                    nombres:'',
                    apellidos:'',
                    docnum:'',
                    doctipo:'',
                    sexo:'',
                    fecnac:'',
                    gruposang:'',
                    rh:'',
                    ocupacion: '',
                    estadocivil: '',
                },
                fecharegistro:'',
                motivoconsulta:'',
                observaciones:'',
                especialidad:'',
            },
            descripcion:'',
            atencion:'',
          },

      }
    },
    computed:{
      ...mapState('atencionModule',['transferencia']),
      ...mapState('transferenciaModule',['transferencia']),
    },
    created() {/*
      this.getAtencion({
        id:this.$route.params.id,
        proxy:this.$proxies.atencionProxy
      });*/
    },
    methods:{
      ...mapActions('atencionModule',['getAtencion']),
      ...mapActions('transferenciaModule',['getTransferencia']),
      
    }
  }
  