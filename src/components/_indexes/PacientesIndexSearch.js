
import {mapActions,mapState} from 'vuex'
export default {
    name: 'PacientesIndexSearch',
    components: {},
    data() {
        return {
            isLoading: false,
            search: '',
            pacienteHeaders: [
                    { text: 'Nombres',value: "nombrecomp"},
                    { text: 'Doc. Identidad', value: 'doc' },
                    { text: 'Sexo', value: 'sexo' },
                    { text: 'Tipo Sangre', value: 'gruposangrh' },
                    { text: 'telefono', value: 'telefono' },
                    { text: 'Fec. nacimiento', value: 'fecnac' },
                    { text: 'Seleccionar', sortable: false, value: 'actions'},
                ],
            collection: {
                hasItems: false,
                items: [],
                total: 0,
                page: 1,
                pages: 0
            },
            tipo_sexo: { 'm':'masculino','f':'femenino','im':'intersexual masculino','fm':'intersexual femenino'}
        }
    },
    computed:{
      ...mapState('pacienteModule',['paciente']),
      datosPaciente(){
        return {
            'Tipo de documento': this.paciente.doctipo,
            'Documento': this.paciente.docnum,
            'Sexo': this.tipo_sexo[this.paciente.sexo],
            'Tipo de Sangre': this.paciente.gruposang+' '+ this.paciente.rh,
            'Telefono': this.paciente.telefono,
            'Nivel académico': this.paciente.gradoinstruccion,
            'Ocupación': this.paciente.ocupacion,
            'Estado civil': this.paciente.estadocivil,
            'Fecha de Nacimiento': this.paciente.fecnac,
        }
      }
    },
    mounted() {
        this.getAll();
    },
    methods: {
        getAll() {
            this.isLoading = true;
                this.$proxies.pacienteProxy.getAll()
                .then(x => {
                    //this.collection = x.data;
                    this.collection.items = x.data;
                    if (this.collection.items.length>0)
                        this.collection.hasItems=true;
                    this.collection.total=this.collection.items.length
                    this.collection.items.forEach(x => {
                        x.nombrecomp = x.nombres + ' ' + x.apellidos;
                        x.doc = x.doctipo + ': ' + x.docnum;
                    });
                    this.isLoading = false;
                }).catch(() => {
                    this.isLoading = false;
                });
            //console.log(this.$proxies.pacienteProxy.getAll())
            console.log(this.collection)
        },
        ...mapActions('pacienteModule',['getPaciente']),
        selected(idpaciente){
            console.log(idpaciente)
            this.getPaciente({id:idpaciente, proxy:this.$proxies.pacienteProxy});
        }
    }
}