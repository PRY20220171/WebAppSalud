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
          tipos_alerta: {
            s: 'success',
            i: 'info',
            w: 'warning',
            e: 'error'
          },
          alertType: 'info',
          mensaje: 'Por favor completar la información necesaria antes de guardar',
          id: ''
      }
    },
    computed:{      
      ...mapState('atencionModule',['atencion']),
      ...mapState('pacienteModule',['paciente']),
      ...mapState('UsuarioModule',['especialidades']),
      ...mapState('transferenciaModule',['transferencia']),
      
    },
    watch: {
      'atencion': {
        handler(val) {
          
          console.log('transferencia de', this.atencion)
          this.getTransferencia({
            id: this.atencion.id,
            proxy: this.$proxies.transferenciaProxy
          });
        },
        deep: true
      }
    },
    beforeDestroy() {
      this.transferencia={}
    },
    created() {  
      if(this.transferencia.fecharegistro==''){
        this.transferencia.fecharegistro= new Date().toLocaleDateString();
      }
    },
    methods:{
      ...mapActions('atencionModule',['getAtencion']),
      ...mapActions('pacienteModule',['getPaciente']),
      ...mapActions('transferenciaModule',['getTransferencia']),
      
      Cancel(){
        this.$router.push('/transferencia');
      },
      eliminar(){
        //let id = this.$route.params.id;
        console.log("trans e")
        
          this.$proxies.transferenciaProxy.remove(this.transferencia.id)
            .then(() => {
              
              this.transferencia.descripcion = ""
              this.transferencia.especialidadini = ""
              this.transferencia.especialidadfin = ""
              this.transferencia.fecharegistro= ''
            }).catch(() => {
            });
        
      },
      registrar() {
        //this.id = this.$route.params.id;
        this.transferencia.id=this.atencion.id
        console.log("trans G", this.id)
        this.transferencia.atencion = {
          usuario:{
                id : this.atencion.usuarioregistro.id,
                nombres: this.atencion.usuarioregistro.nombres,
                apellidos:this.atencion.usuarioregistro.apellidos,
                docnum:this.atencion.usuarioregistro.docnum,
                doctipo:this.atencion.usuarioregistro.doctipo,
                numcolegiatura:this.atencion.usuarioregistro.numcolegiatura,
               /* centroMedico:{
                    nombre:this.atencion.centromedico.nombre,
                    sector:this.atencion.centromedico.sector,
                    pais:this.atencion.centromedico.ubicacion.pais,
                    region:this.atencion.centromedico.ubicacion.region,
                    provincia:this.atencion.centromedico.ubicacion.provincia,
                    distrito:this.atencion.centromedico.ubicacion.distrito,
                }*/
            },
            paciente:{
                id:this.atencion.paciente.id,
                nombres:this.atencion.paciente.nombres,
                apellidos:this.atencion.paciente.apellidos,
                docnum:this.atencion.paciente.docnum,
                doctipo:this.atencion.paciente.doctipo,
                sexo:this.atencion.paciente.sexo,
                fecnac:this.atencion.paciente.fecnac,
                gruposang:this.atencion.paciente.gruposang,
                rh:this.atencion.paciente.rh,
                ocupacion:this.atencion.paciente.ocupacion,
                estadocivil:this.atencion.paciente.estadocivil,
            },
            idatencion:this.atencion.id,
            fecharegistro:this.atencion.fecharegistro,
            motivoconsulta:this.atencion.motivoconsulta,
            observaciones:this.atencion.observaciones,
        }
        console.log(this.transferencia)
        if (this.id=='' || !this.id) {
          this.$proxies.transferenciaProxy.register(this.transferencia)
            .then(() => {
              this.alertType = this.tipos_alerta.s
              this.mensaje = "transferencia creado con éxito"
              this.cancelar = 'Ir a lista de transferencias'
              this.isLoading = false;
              this.id= this.transferencia.id
            }).catch(() => {
              this.$proxies.transferenciaProxy.update(this.transferencia.id,this.transferencia)
              .then(() => {
                this.alertType = this.tipos_alerta.s
                this.mensaje = "transferencia actualizada con éxito"
                this.cancelar = 'Ir a lista de transferencias'
                this.isLoading = false;
                this.id= this.transferencia.id
              }).catch(() => {
                this.alertType = this.tipos_alerta.e
                this.mensaje = "No se pudo crear transferencia"
                this.isLoading = false;
              });
            });
        } else {
          this.$proxies.transferenciaProxy.update(this.id, this.transferencia)
            .then(() => {
              this.alertType = this.tipos_alerta.s
              this.mensaje = "transferencia actualizado con éxito"
              this.cancelar = 'Ir a lista de transferencias'
              this.isLoading = false;
              this.registrar='Actualizar'
            }).catch(() => {
              this.alertType = this.tipos_alerta.e
              this.mensaje = "No se pudo actualizar transferencia"
              this.isLoading = false;
            });
        }
      },
    }
  }
  