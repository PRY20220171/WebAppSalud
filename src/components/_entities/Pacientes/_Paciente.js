import Paciente from '../../../views/_createOrUpdate/Pacientes/PacienteView.vue';
import Ubicacion from '../../../views/_createOrUpdate/Pacientes/UbicacionView.vue';
import Consentimiento from '../../../views/_createOrUpdate/Pacientes/ConsentimientoView.vue';

import AntecedenteFamiliar from '../../../views/_createOrUpdate/Pacientes/AntecedenteFamiliarView.vue';
import AntecedentePatologico from '../../../views/_createOrUpdate/Pacientes/AntecedentePatologicoView.vue';
import AntecedentePsicocial from '../../../views/_createOrUpdate/Pacientes/AntecedentePsicocialView.vue';
import Nino from '../../../views/_createOrUpdate/Pacientes/NinoView.vue';

import {mapState, mapMutations, mapActions} from 'vuex'

export default {
    name: 'RegistrarPaciente',

    components: {
      //compartidos
      //inf. general
        Paciente,
        Ubicacion,
      //antecedentes
        Nino,
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
        paciente: {},
        lugarnac: {},
        domicilioact: {},
        nino: {},
        antecedenteFamiliar: {},
        antecedentePatologico: {},
        antecedentePsicocial: {},
      }
    },
    computed:{
      ...mapState('pacienteModule',['pacientex'])
      //...mapState(['vaal'])
    },
    mounted(){
      this.ogetPaciente({id:this.$route.params.id, proxy:this.$proxies.pacienteProxy});
      console.log(this.pacientex);
      //console.log(this.vaal)
      //this.updateSection();
      //console.log(this.paciente.id)  
    },
    updated(){
      //this.updateSection();
    },
    methods:{//...mapState(['vaal']),
      ...mapActions('pacienteModule',['ogetPaciente']),
      async updateSection(){
        this.paciente=this.$refs.Paciente.model;
        this.lugarnac=this.$refs.Ubicacion.lugarnac;
        this.domicilioact=this.$refs.Ubicacion.domicilioact ;
        this.nino=this.$refs.Nino.model;
        this.antecedenteFamiliar=this.$refs.AntecedenteFamiliar.model;
        this.antecedentePatologico=this.$refs.AntecedentePatologico.model ;
        this.antecedentePsicocial=this.$refs.AntecedentePsicocial.model ;
        await nextTick();
        console.log('sssssssssssssssssssssss');
        console.log(this.paciente);
        console.log(this.lugarnac);
        console.log(this.nino);
        console.log(this.antecedenteFamiliar);
        console.log(this.antecedentePatologico);
        console.log(this.antecedentePsicocial);
        
      },
      nextStep(){
        switch (this.e1) {
          case 1: 
            this.e1=2
            break;
          case 2: 
              this.e1=3
              break;     
          default:
            break;
        }
      },
      Cancel(){
        this.$router.push('/pacientes');
      },
      registrar(){
        let id = this.$route.params.id;
/*
        this.$refs.Ubicacion.save()
        this.nino.id=this.$refs.Nino.save()
        this.$refs.AntecedenteFamiliar.save()
        this.$refs.AntecedentePatologico.save()
        this.$refs.AntecedentePsicocial.save()
*/
        this.updateSection()
        /*
        console.log(this.nino)
        console.log(this.nino.id)
        this.paciente.lugarnacid= this.lugarnac.id;
        this.paciente.domicilioactid= this.domicilioact.id;
        this.paciente.idnino= this.nino.id;
        this.paciente.idantecedenteperi= this.antecedentePsicocial.id;
        this.paciente.idantecedentefam= this.antecedenteFamiliar.id;
        this.paciente.idantecedentepato= this.antecedentePatologico.id;

        this.paciente.lugarnac= this.lugarnac;
        this.paciente.domicilioact= this.lugarnac;
        this.paciente.nino= this.nino;
        this.paciente.antecedenteFamiliar= this.antecedenteFamiliar;
        this.paciente.antecedentePatologico= this.antecedentePatologico;
        this.paciente.antecedentePsicocial= this.antecedentePsicocial;
        */

        console.log(this.paciente)
        //this.$refs.Paciente.save()
      }
    }
  }