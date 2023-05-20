import Paciente from '../../../views/_createOrUpdate/Pacientes/PacienteView.vue';
import Ubicacion from '../../../views/_createOrUpdate/Pacientes/UbicacionView.vue';
import Consentimiento from '../../../views/_createOrUpdate/Pacientes/ConsentimientoView.vue';

import AntecedenteFamiliar from '../../../views/_createOrUpdate/Pacientes/AntecedenteFamiliarView.vue';
import AntecedentePatologico from '../../../views/_createOrUpdate/Pacientes/AntecedentePatologicoView.vue';
import AntecedentePsicocial from '../../../views/_createOrUpdate/Pacientes/AntecedentePsicocialView.vue';
import AntecedentePerinatal from '../../../views/_createOrUpdate/Pacientes/AntecedentePerinatalView.vue';

import {mapState, mapMutations, mapActions} from 'vuex'

export default {
    name: 'RegistrarPaciente',

    components: {
      //compartidos
      //inf. general
        Paciente,
        Ubicacion,
      //antecedentes
        AntecedentePerinatal,
        AntecedenteFamiliar,
        AntecedentePatologico,
        AntecedentePsicocial,
        Consentimiento,
    },

    data () {
      return {
      //  user: this.$store.state.user,
      //  isLoading: false,
        e1: 1,
        stepRules:[
          [(value) => true],
          [(value) => true],
          [(value) => true]
        ],
        stepComplete:[
          false,false
        ],
        stepAlert:[
          [0,''],
          [0,''],
          [0,''],
        ],
        tipos_alerta:{
          s:'success',
          i:'info',
          w:'warning',
          e:'error'
        },
        alertType:'info',
        mensaje:'Por favor completar la información necesaria antes de guardar',
        cancelar:'Cancelar',
      }
    },
    computed:{
      ...mapState('pacienteModule',['paciente'])
    },
    watch: {
      'e1': {
        handler(newValue, oldValue) {
          this.camposCompletos(newValue-1)
          console.log('a:', newValue,' desde:', oldValue, ' ',this.stepAlert[oldValue-1])
        },
        deep: true
      },
      'paciente': {
        handler(val) {
          this.cancelar='Cancelar'
        },
        deep: true
      }
    },
    beforeMount(){
    },
    mounted(){
    },
    updated(){
    },
    methods:{
      validarStep1(){
        if(this.paciente.nombres== "") this.stepAlert[0][0]++
        if(this.paciente.apellidos== "") this.stepAlert[0][0]++
        if(this.paciente.docnum== "") this.stepAlert[0][0]++
        if(this.paciente.doctipo== "") this.stepAlert[0][0]++
        if(this.paciente.sexo== "") this.stepAlert[0][0]++
        if(this.paciente.gruposang== "") this.stepAlert[0][0]++
        if(this.paciente.rh== "") this.stepAlert[0][0]++
        if(this.paciente.telefono== "") this.stepAlert[0][0]++
        if(this.paciente.gradoinstruccion== "") this.stepAlert[0][0]++
        if(this.paciente.ocupacion== "") this.stepAlert[0][0]++
        if(this.paciente.estadocivil== "") this.stepAlert[0][0]++
        if(this.paciente.fecnac== "") this.stepAlert[0][0]++

        for (let i in this.paciente.lugarnacc){
          if(i!='id' && this.paciente.lugarnacc[i]== "") this.stepAlert[0][0]++
        }
        for (let i in this.paciente.domicilioact){
          if(i!='id' && this.paciente.domicilioact[i]== "") this.stepAlert[0][0]++
        }
        //console.log('completo s1',this.stepAlert[0][0]<1)
          this.stepRules[0]=[(value) => this.stepAlert[0][0]<1]
      },
      validarStep2(){
          //console.log('antecedenteperi')
            for (let i in this.paciente.antecedenteperi){
              if(i!='id' && this.paciente.antecedenteperi[i]== "") this.stepAlert[1][0]++
             // console.log(i,':',this.paciente.antecedenteperi[i])
            }
          //console.log('antecedentepsico')
            for (let i in this.paciente.antecedentepsico){
              if(i!='id' && this.paciente.antecedentepsico[i]== "") this.stepAlert[1][0]++
             // console.log(i,':',this.paciente.antecedentepsico[i])
            }
          //console.log('antecedentepato')
            for (let i in this.paciente.antecedentepato){
              if(i!='id' && this.paciente.antecedentepato[i]== "") this.stepAlert[1][0]++
             // console.log(i,':',this.paciente.antecedentepato[i])
          }
          //console.log('antecedentefam')
            for (let i in this.paciente.antecedentefam){
              if(i!='id' && this.paciente.antecedentefam[i]!='otros' ) {
                for (let j = 0; j < this.paciente.antecedentefam[i].length; j++) {
                  if(this.paciente.antecedentefam[i][j]== "") {
                    this.stepAlert[1][0]++
                  }//console.log(i,j,':',this.paciente.antecedentefam[i][j])
                }
              }
            }
            //console.log('completo s2',this.stepAlert[1][0]<1)
          this.stepRules[1]=[(value) => this.stepAlert[1][0]<1]
      },
      setAlerta(val){
        if (this.stepAlert[val][0]>0){
          this.stepAlert[val][1]='Falta '+this.stepAlert[val][0]+' campo(s)'
          this.stepComplete[val]=false
        } else {
          this.stepAlert[val][1]='Datos completos'
          this.stepComplete[val]=true
        }
      },
      camposCompletos(val){
        this.stepAlert[val][0]=0
        switch (val) {
          case 0:
            this.validarStep1()
            this.setAlerta(0)
            break;
          case 1:
            this.validarStep2()
            this.setAlerta(1)
            break;
          case 2:
            this.validarStep1()
            this.validarStep2()
            this.setAlerta(0)
            this.setAlerta(1)
            break;
          default:
            break;
        }
        console.log('errores',this.stepAlert )
        if(this.stepAlert[0][0]+this.stepAlert[1][0]>0){
          this.alertType = this.tipos_alerta.w
        }else
        this.alertType = this.tipos_alerta.i

      },
      Cancel(){
        this.$router.push('/pacientes');
      },
      crearConsulta(){
        this.$router.push('/consultas/create');
      },
      registrar(){
        let id = this.$route.params.id;
        let paciente= this.paciente
        delete paciente.edad;

        if (!id){
          this.$proxies.pacienteProxy.getByNroDoc(paciente.docnum).then(x => {
            if (x.data.length>0){
              this.alertType = this.tipos_alerta.e
              this.mensaje = "Nro de documento ya registrado"
              this.isLoading = false;
            }
            else{
              this.$proxies.pacienteProxy.register(paciente)
                .then(x => {
                    this.alertType = this.tipos_alerta.s
                    this.mensaje = "Paciente creado con éxito"
                    this.cancelar = 'Ir a lista de pacientes'
                    this.isLoading = false;
                    this.$router.push({name: 'Pacientes'});
                }).catch(() => {
                    this.alertType = this.tipos_alerta.e
                    this.mensaje = "No se pudo crear paciente"
                    this.isLoading = false;
                });
            }
          }).catch(() => {
            this.alertType = this.tipos_alerta.e
            this.mensaje = "Error al momento de verificar el nro de documento"
            this.isLoading = false;
          });


        }else{
          this.$proxies.pacienteProxy.update(id,paciente)
          .then(x => {
              this.alertType = this.tipos_alerta.s
              this.mensaje = "Paciente actualizado con éxito"
              this.cancelar = 'Ir a lista de pacientes'
              this.isLoading = false;
              this.$router.push({name: 'Pacientes'});
          }).catch(() => {
              this.alertType = this.tipos_alerta.e
              this.mensaje = "No se pudo actualizar paciente"
              this.isLoading = false;
          });
        }
      }
    }
  }