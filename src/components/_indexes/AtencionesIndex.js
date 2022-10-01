// import Bars from '../../../views/Shared/Bars.vue';
//import Loader from '../../../views/Shared/Loader.vue';
//import Pager from '../../../views/Shared/Pager.vue';

export default {
    name: 'ListaAtenciones',

    components: {
        //Loader, Pager,Bars
    },
    mounted() {
        this.getAll(1);
    },
    data() {
        return {
            expanded: [],
            singleExpand: false,
            searchText:'',
            searchBoxClosed: true,
            isLoading: false,
            search: '',
            pacienteHeaders: {
                base:[
                    { text: 'Paciente',value: 'paciente.nombres'},
                    { text: 'Lo registró',value: 'usuario.nombres'},
                    { text: 'Centro Médico', value: 'centromedico.nombre' },
                    { text: 'Fecha de Registro',value: 'fecharegistro'},
                    { text: 'Motivo de la consulta',value: 'motivoconsulta'},
                    { text: 'Actions', sortable: false, value: 'actions'},
                ],
                atencionDetail:[
                    {
                        text: 'Detalles de la enfermedad',
                        value: 'this',
                        detail: [
                            { text: 'Observaciones', value: 'observaciones' },
                            { text: 'Tiempo de la enfermedad', value: 'tiempoenfermedad' },
                            { text: 'Forma de inicio', value: 'formainicio' },
                            { text: 'curso', value: 'curso' }
                        ]
                    },
                    {
                        text: 'Síntomas',
                        value: 'sintomas',
                        detail: [
                            { text: '', value: 'signossintomas' }
                        ]
                    }
                ]
            },
            collection: {
                hasItems: false,
                items: [{
                    pacienteid: null,
                    paciente: {
                        id: null,
                        nombres: null,
                    },
                    acompanante: null,
                    centromedico: null,
                }],
                total: 0,
                page: 1,
                pages: 0
            },
            ids: [],
        }
    },
    methods: {
        async getAll(page) {
            this.isLoading = true;
            this.$proxies.atencionProxy.getAll()
                .then(x => {
                    //this.collection = x.data;
                    this.collection.items = x.data;
                    if (this.collection.items.length>0)
                        this.collection.hasItems=true;
                    this.collection.total=this.collection.items.length
                    // this.collection.items.forEach(x => {
                    //     if(x.pacienteid!==null){
                    //         x.paciente={};
                    //         x.paciente.nombres='';
                    //         this.$proxies.pacienteProxy.getById(x.pacienteid)
                    //             .then(xy=>{
                    //                 //console.log(xy.data);
                    //                 x.paciente={};
                    //                 x.paciente.nombres=xy.data.nombres;
                    //                 //console.log(x.paciente)
                    //             }
                    //             );
                    //     }
                    //     //this.$proxies.acompananteProxy.getById(x.acompananteid).then(xy=>{
                    //     //        x.acompanante=xy.data;
                    //     //    }
                    //     //    );
                    //     this.$proxies.centroMedicoProxy.getById(x.centromedicid).then(xy=>{
                    //             x.centromedico=xy.data;
                    //         }
                    //         );
                    //     //console.log(x);
                    //     //x.usuario=this.getUsuario(x.usuarioregistroid);
                    //     //x.acompanante=this.getAcompanante(x.acompananteid);
                    //     //x.centromedico=this.getCentro(x.centromedicid);
                    //     //x.sintomas=this.getAllSintomas(x.id);
                    //     //console.log(x)
                    // });
                    this.isLoading = false;
                }).catch(() => {
                    this.isLoading = false;
                });
        },
        // getPaciente(idPaciente) {
        //     let paciente={}
        //     this.isLoading = true;

        //         this.$proxies.pacienteProxy.getById(idPaciente)
        //         .then(x => {
        //             //console.log(x.data);
        //             paciente = x.data;
        //             this.isLoading = false;
        //             return paciente;
        //         }).catch(() => {
        //             this.isLoading = false;
        //         });
        //         //    console.log(paciente)
        //     //return paciente;
        // },
        // getAcompanante(idAcompanante) {
        //     let acompanante={}
        //     this.isLoading = true;

        //         this.$proxies.acompananteProxy.getById(idAcompanante)
        //         .then(x => {
        //             //console.log(x.data);
        //             acompanante = x.data;
        //             this.isLoading = false;
        //         }).catch(() => {
        //             this.isLoading = false;
        //         });
        //     return acompanante;
        //     //console.log(this.$proxies.pacienteProxy.getAll())
        // },
        // getUsuario(idUsuario) {
        //     let usuario={}
        //     this.isLoading = true;

        //         this.$proxies.userProxy.getById(idUsuario)
        //         .then(x => {
        //             usuario = x.data;
        //             this.isLoading = false;
        //         }).catch(() => {
        //             this.isLoading = false;
        //         });
        //     return usuario;
        //     //console.log(this.$proxies.pacienteProxy.getAll())
        // },
        // getCentro(idcentro) {
        //     let centro={}
        //     this.isLoading = true;

        //         this.$proxies.centroMedicoProxy.getById(idcentro)
        //         .then(x => {
        //             centro = x.data;
        //             this.isLoading = false;
        //         }).catch(() => {
        //             this.isLoading = false;
        //         });
        //         return centro;
        //     //console.log(this.$proxies.pacienteProxy.getAll())
        // },
        // getAllSintomas(idatencion) {
        //     let sintomas=[]
        //     this.isLoading = true;
            
        //         this.$proxies.sintomaProxy.getByAtencionId(idatencion)
        //         .then(x => {
        //             //this.collection = x.data;
        //             this.collection.items.sintomas = x.data;
        //             this.isLoading = false;
        //         }).catch(() => {
        //             this.isLoading = false;
        //         });
        //         return sintomas;
        //     //console.log(this.$proxies.pacienteProxy.getAll())
        // },
        changeview(){
            this.detailed = !this.detailed;
            this.getAll(this.collection.page);
        },
        clickRow(item, event) {
            console.log(item);
            console.log(event);
            if(event.isExpanded) {
              const indexExpanded = this.expanded.findIndex(i => i === item);
              this.expanded.splice(indexExpanded, 1)
            } else {
              this.expanded.push(item);
            }
          },
        remove(atencionId){
            this.isLoading = true;
            this.$proxies.atencionProxy.remove(atencionId)
            .then(() =>{
                this.getAll(1);
            }).catch(()=>{
                this.isLoading = false;
            })
        },
        collapse(id){
            let index = this.ids.indexOf(id);
            if(index == -1){
                //Hacemos la peticion get para ese paciente:
                this.$proxies.atencionProxy.getById(id)
                .then(x => {
                    //Aqui tenemos que empujar los datos adicionales al paciente
                    let aux = this.collection.items.find(element => element.pacienteId === id);
                    aux.details = x.data;
                    this.ids.push(id);
                })
                .catch(() => {
                    this.$notify({
                        group: "global",
                        type: "is-danger",
                        text: 'Ocurrió un error inesperado'
                    });
                });
            }
            else{
                let aux = this.collection.items.find(element=>element.pacienteId===id);
                aux.details = null;
                this.ids.splice(index,1);
            }

        },
        infiniteHandler($state){
            if(this.collection.page > this.collection.pages){
                $state.complete();
                return;
            }
            this.$proxies.atencionProxy.getAll(this.collection.page+1, 10)
                .then(x => {
                    if(this.collection.page <= x.data.pages){
                        this.collection.page+=1;
                        x.data.items.forEach(element => {
                            this.collection.items.push(element);
                        });
                        this.collection.total = x.data.total;
                        this.collection.pages = x.data.pages;
                        $state.loaded();
                    }
                    else{
                        $state.complete();
                    }
                }).catch(cod => {
                    this.$notify({
                        group: "global",
                        type: "is-danger",
                        text: 'Ocurrió un error inesperado, codigo de error: '+ cod
                    });
                });
        }
    }
  }