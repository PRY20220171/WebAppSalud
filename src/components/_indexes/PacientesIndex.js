
import {mapActions,mapState} from 'vuex'
import PacienteUneditable from '@/views/uneditable/Pacientes/PacienteUneditableView.vue'

export default {
    name: 'PacienteIndex',
    components: {PacienteUneditable},
    data() {
        return {
            expanded: [],
            singleExpand: false,
            isLoading: false,
            search: '',
            pacienteHeaders: {
                base:[
                    { text: 'Nombres',value: "nombrecomp"},
                    { text: 'Doc. Identidad', value: 'doc' },
                    { text: 'Gruposang', value: 'gruposangrh' },
                    { text: 'telefono', value: 'telefono' },
                    { text: 'Fec. nacimiento', value: 'fecnac' },
                    { text: 'Actions', sortable: false, value: 'actions'},
                ]
            },
            collection: {
                hasItems: false,
                items: [],
                total: 0,
                page: 1,
                pages: 0
            },
        }
    },
    computed:{
      ...mapState('pacienteModule',['paciente']),
    },
    mounted() {
        this.getAll();
    },
    methods: {
        ...mapActions('pacienteModule',['getPaciente']),
        selected(idpaciente){
            console.log(idpaciente)
            this.getPaciente({id:idpaciente, proxy:this.$proxies.pacienteProxy});
        },
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
        clickRow(item, event) {
            console.log('item',item);
            if(item){
                this.paciente.antecedentefam=item.antecedentefam
            }
            console.log(event);

            this.getPaciente({id:item.id, proxy:this.$proxies.pacienteProxy});
            if(event.isExpanded) {
              const indexExpanded = this.expanded.findIndex(i => i === item);
              this.expanded.splice(indexExpanded, 1)
            } else {
              this.expanded.push(item);
            }
          },
        remove(pacienteid){
            this.isLoading = true;
            this.$proxies.pacienteProxy.remove(pacienteid)
            .then(() =>{
                this.getAll(1);
            }).catch(()=>{
                this.isLoading = false;
            })
        }
    }
}