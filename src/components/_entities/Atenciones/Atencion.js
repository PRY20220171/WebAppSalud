import Sintoma from '../../../views/_createOrUpdate/Atenciones/SintomaView.vue';
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
    name: 'Atencion',

    components: {
      Sintoma,
    },

    data () {
      return {
        //model:{
        //    idatencion: '',
        //    pacienteid: '',
        //    usuarioregistroid: '',
        //    idsignosvitales: '',
        //    fecharegistro: '',
        //    motivoconsulta: '',
        //    observaciones: '',
        //    tiempoenfermedad: '',
        //    formainicio: '',
        //    curso: '',
        //    signossintomas: '',
        //    idacompanante: '',
        //    idfacriesgo: '',
        //    idcentromedic: '',
        //},

      }
    },
    computed:{
      ...mapState('atencionModule',['atencion']),
    },
    created() {
      this.getAtencion({
        id:this.$route.params.id,
        proxy:this.$proxies.atencionProxy
      });
    },
    methods:{
      ...mapActions('atencionModule',['getAtencion','updatePacienteOnCreate']),
      //initialize() {
      //  let id = this.$route.params.id;
      //  if (!id) return;
      //  this.isLoading = true;
      //  this.$proxies.atencionProxy.getById(id)
      //      .then(x => {
      //          this.model = x.data;
      //          this.model.usuarioregistroid = this.model.usuarioregistroid
      //          this.model.fecharegistro = this.model.fecharegistro
      //          this.model.motivoconsulta = this.model.motivoconsulta
      //          this.model.tiempoenfermedad = this.model.tiempoenfermedad
      //          this.model.curso = this.model.curso
      //          this.model.formainicio = this.model.formainicio
//
      //          this.model.sexo=this.convertTypeSex(this.model.sexo)
      //          this.model.rh=this.convertTypeRH(this.model.rh)
      //          this.model.gruposang=this.model.gruposang.toUpperCase()
      //          this.isLoading = false;
      //      })
      //      .catch(() => {
      //          this.isLoading = false; 
      //          /* this.$notify({
      //              group: "global",
      //              type: "is-danger",
      //              text: 'Ocurrió un error inesperado'
      //          }); */
      //      });
      //  
      //},
      /*save() {
        console.log("guardar paciente")

              if (this.model.id) {
                  this.$proxies.pacienteProxy.update(this.model.id, this.model)
              } else {
                  this.$proxies.pacienteProxy.register(this.model)
              }
      }*/
    }
  }