import	axios from	"axios";
import {mapState,mapActions} from 'vuex'
import Transferencia from '../../views/_createOrUpdate/Transferencias/TransferenciaView.vue'

export default {
    name: 'TransferenciasAtencionIndex',
    components: {
        Transferencia
    },
    data() {
        return {
            dialog:false,
            searchText:'',
            searchBoxClosed: true,
            isLoading: false,
            search: '',
            headers:  [
                    { text: 'registro',value: 'fecharegistro'},
                    { text: 'descripcion',value: 'descripcion'},
                    { text: 'estado', value: 'estado' },
                    { text: '', sortable: false, value: 'actions'},
                ],
            collection: {
                hasItems: false,
                items: [],
                total: 0,
                page: 1,
                pages: 0
            },
            estados: ['en proceso', 'esperando pruebas','finalizado'],
            tipos: ['final','inicial','medio'],
            ids: [],
            Transferencia:{
                id:'',
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
            editedIndex: -1,
            saved:[false],
            editedItem: {
                id:'0',
                registro:'',
                descripcion:'',
                estado:'',
                tratamientos:[{
                    motivo:'',
                    tratamiento:'',
                    id:'',
                    medicamento:'',
                    descripcion:'',
                },{
                    motivo:'',
                    tratamiento:'',
                    id:'',
                    medicamento:'',
                    descripcion:'',
                    }
                ]
            },
            defaultItem: {
                id:'0',
                registro:'',
                descripcion:'',
                estado:'',
                tratamientos:[{
                    motivo:'',
                    tratamiento:'',
                    id:'',
                    medicamento:'',
                    descripcion:'',
                },{
                    motivo:'',
                    tratamiento:'',
                    id:'',
                    medicamento:'',
                    descripcion:'',
                    }
                ]
            },
            interval:{},
            loadAtencion:0,
        }
    },
    mounted() {
        this.interval=setInterval(() => {
          this.loadAtencion += 1
          //console.log(this.loadAtencion)
        }, 10)
        setTimeout(() => {
          clearInterval(this.interval)
          this.loadAtencion= 100,
          this.getAll(1)
        },1000);
    },
     computed:{
       //...mapState('TransferenciaModule',['Transferencia']),
       ...mapState('TransferenciaModule',['Transferencias']),
     },
     watch:{
        collection:{
            handler(val){
                for(let item in val.items){
                    item = {item, paciente:this.atencion.paciente}
                }
                console.log(val.items)
            },
            deep: true,
            flush: 'post'
        }
    },
    methods: {
        addTransferencia(){
            let d = new Date


              if(this.Transferencia.id=='') {
                this.Transferencia.id=d.getTime()
                this.Transferencias.push(this.Transferencia)
                this.saved=true
                this.dialog=false
              }else {
                let i = this.Transferencias.findIndex(x => x.id = this.Transferencia.id);
                this.Transferencias[i]=this.Transferencia
              }
          },
          deleteTransferencia(){
            let i = this.Transferencias.findIndex(x => x.id = this.Transferencia.id);
            delete this.Transferencias[i]
          },
        getAll(page) {
            this.isLoading = true;
                this.$proxies.TransferenciaProxy
                //.getAll()
                .getByAtencionId(this.atencion.id)
                .then(x => {
                    //this.collection = x.data;
                    this.collection.items = x.data;
                    if (this.collection.items.length>0)
                        this.collection.hasItems=true;
                    this.collection.total=this.collection.items.length

                    this.isLoading = false;
                }).catch(() => {
                    this.isLoading = false;
                });
            //console.log(this.$proxies.pacienteProxy.getAll())
            //console.log(this.collection)
        },
        getPaciente(idPaciente) {
                this.isLoading = true;

                    this.$proxies.pacienteProxy.getById(idPaciente)
                    .then(x => {
                        this.paciente = x.data;
                        this.isLoading = false;
                    }).catch(() => {
                        this.isLoading = false;
                    });
                       console.log(this.paciente)
                return this.paciente;
        },
        changeview(){
            this.detailed = !this.detailed;
            this.getAll(this.collection.page);
        },
        uuidv4() {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        },
        editItem(item) {
            this.editedIndex = this.collection.items.indexOf(item);
            this.editedItem = Object.assign({}, item);
        },

        async deleteItem(item) {
            let x = window.confirm('¿Está seguro de eliminar el Transferencia?');
            if(x){
                const result = await this.$proxies.transferenciaProxy.remove(item.id);
                console.log(result);
                alert("Transferencia eliminado");
            }
            const index = this.collection.items.indexOf(item);
            if (item.descripcion != '' || item.estado != '' || item.registro != '') {
               this.collection.items.splice(index, 1);
            } else {
                this.collection.items.splice(index, 1);
            }
        },
        close() {
            setTimeout(() => {
                let item = this.collection.items.at(this.editedIndex);
                if (item.descripcion == '' && item.estado == '' && item.registro == '') {
                    this.collection.items.splice(this.editedIndex, 1);
                }
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            }, 300)
        },
        addNew() {
            const addObj = Object.assign({}, this.defaultItem);
            addObj.id = this.uuidv4();
            addObj.idatencion = this.atencion.id;
            addObj.fecregistro = new Date().toLocaleDateString();
            //addObj.id = this.collection.items.length + 1;
            this.collection.items.unshift(addObj);
            this.editItem(addObj);
        },
        async save() {
            try{
                const new_Transferencia= await axios.post(
                    'http://localhost:3000/Transferencias',{
                        id: this.uuidv4(),
                        registro: new Date().toLocaleDateString(),
                        descripcion: this.editedItem.descripcion,
                        estado: this.editedItem.estado,
                        tratamientos: this.editedItem.tratamientos                    })
            }
            catch(error){
                console.log(error)
            }
            this.close();
            /*if (this.editedIndex > -1) {
                Object.assign(this.collection.items[this.editedIndex], this.editedItem)
            }
            this.close()*/
        },
    }
}