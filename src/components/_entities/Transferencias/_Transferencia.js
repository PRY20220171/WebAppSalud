import Transferencia from '@/views/_createOrUpdate/Transferencias/TransferenciaView.vue';
import AtencionesIndexSearch from '@/views/_indexes/Atenciones/AtencionesIndexSearch.vue';

import {mapState, mapMutations, mapActions} from 'vuex'
export default {
    name: 'RegistrarTransferencia',

    components: {
      //compartidos
      //inf. general
        Transferencia,
        AtencionesIndexSearch,
    },
    
    data () {
      return {
      //  user: this.$store.state.user,
      //  isLoading: false,
        e1: 1,
        usuario:{
          id:localStorage.getItem("access_token"),
          nombres: localStorage.getItem("nombres"),
          rol:localStorage.getItem("rol")
        },
        tipos_alerta:{
          s:'success',
          i:'info',
          w:'warning',
          e:'error'
        },
        alertType:'info',
        mensaje:'Por favor completar la información necesaria antes de guardar',
        cancelar:'Cancelar',

        
        

        estados: ['en proceso', 'esperando pruebas','finalizado'],
        }
    },
    computed:{
      ...mapState('atencionModule',['atencion']),
      ...mapState('pacienteModule',['paciente']),
      ...mapState('transferenciaModule',['transferencia']),
        registrar(){
         if (this.$route.params.id) {
          return "Registrar"
         } else {
          return "Actualizar"
         }
        }
    },
    mounted(){
      console.log(this.paciente)
      this.getAtencion({id:null, proxy:this.$proxies.atencionProxy});
      this.getPaciente({id:null, proxy:this.$proxies.pacienteProxy});
      console.log(this.atencion)
    },
    
    created() {
      let id = this.$route.params.id;
      this.getAtencion({
        id: id,
        proxy: this.$proxies.atencionProxy
      });
      this.getIdAtencion(this.atencion.id);
    },
    methods:{
      ...mapActions('atencionModule',['getAtencion']),
      ...mapActions('pacienteModule',['getPaciente']),
      ...mapActions('pacienteModule',['getTransferencia']),

      
      Cancel(){
        this.$router.push('/transferencia');
      },
      crearConsulta(){
        this.$router.push('/consultas/create');
      },
      registrar() {
        let id = this.$route.params.id;
        console.log("transd")
        this.transferencia.atencion = {
          atencion:{                        
            usuario:{
                id : this.atencion.usuarioregistro.id,
                nombres: this.atencion.usuarioregistro.nombres,
                apellidos:this.atencion.usuarioregistro.apellidos,
                docnum:this.atencion.usuarioregistro.docnum,
                doctipo:this.atencion.usuarioregistro.doctipo,
                numcolegiatura:this.atencion.usuarioregistro.numcolegiatura,
                centroMedico:{
                    nombre:this.atencion.centromedico.nombre,
                    sector:this.atencion.centromedico.sector,
                    pais:this.atencion.centromedico.ubicacion.pais,
                    region:this.atencion.centromedico.ubicacion.region,
                    provincia:this.atencion.centromedico.ubicacion.provincia,
                    distrito:this.atencion.centromedico.ubicacion.distrito,
                }
            },
            paciente:{
                id:this.atencion.paciente.nombres,
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
            fecharegistro:this.atencion.fecharegistro,
            motivoconsulta:this.atencion.motivoconsulta,
            observaciones:this.atencion.observaciones,
            //especialidad:this.atencion.especialidad,
        },
        }
        if (!id) {
          this.$proxies.transferenciaProxy.register(this.transferencia)
            .then(() => {
              this.alertType = this.tipos_alerta.s
              this.mensaje = "transferencia creado con éxito"
              this.cancelar = 'Ir a lista de transferencias'
              this.isLoading = false;
            }).catch(() => {
              this.alertType = this.tipos_alerta.e
              this.mensaje = "No se pudo crear transferencia"
              this.isLoading = false;
            });
        } else {
          this.$proxies.transferenciaProxy.update(id, this.transferencia)
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