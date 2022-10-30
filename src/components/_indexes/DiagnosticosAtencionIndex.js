import Diagnostico from '../../views/_createOrUpdate/Diagnosticos/DiagnosticoView';
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
    name: 'DiagnosticosAtencionIndex',
    components: {
        Diagnostico
    },
    data() {
        return {
            dialog: false,
            searchText: '',
            searchBoxClosed: true,
            isLoading: false,
            search: '',
            headers: [{
                    text: 'fecregistro',
                    value: 'fecregistro'
                },
                {
                    text: 'descripcion',
                    value: 'descripcion'
                },
                {
                    text: 'estado',
                    value: 'estado'
                },
                {
                    text: 'tipo',
                    value: 'tipo'
                },
                {
                    text: '',
                    sortable: false,
                    value: 'actions'
                },
            ],
            collection: {
                hasItems: false,
                items: [],
                total: 0,
                page: 1,
                pages: 0
            },
            ids: [],
            diagnostico: {
                id: '',
                fecregistro: '',
                descripcion: '',
                estado: '',
                tipo: '',
                idatencion: '',
                resultados: [{
                    id: '',
                    registro: '',
                    descripcion: '',
                    estado: '',
                }],
            },
            estados: ['en proceso', 'esperando pruebas', 'finalizado'],
            tipos: ['final', 'inicial', 'medio'],
            editedIndex: -1,
            editedItem: {
                id: '0',
                fecregistro: '',
                descripcion: '',
                estado: '',
                tipo: '',
                idatencion: '',
                resultados: [{
                    id: '',
                    registro: '',
                    descripcion: '',
                    estado: '',
                }],
            },
            defaultItem: {
                id: '0',
                fecregistro: '',
                descripcion: '',
                estado: '',
                tipo: '',
                idatencion: '',
                resultados: [{
                    id: '',
                    registro: '',
                    descripcion: '',
                    estado: '',
                }],
            }
        }
    },
    beforeMount() {
        // console.log(this.$proxies)
        this.getAll(1);
    },
    watch: {
        collection: {
            handler(val) {
                for (let item in val.items) {
                    item = {
                        item,
                        paciente: this.getPaciente('d5775113-ed08-4de0-8945-d3c977d504f5')
                    }
                }
                console.log(val.items)
            },
            deep: true,
            flush: 'post'
        }
    },
    computed: {
        //...mapState('atencionModule',['atencion']),
        ...mapState('DiagnosticoModule', ['diagnosticos']),
    },

    mounted() {
        /*
        console.log(this.collection)
        console.log(this.collection.items)*/
    },
    methods: {
        getAll(page) {
            this.isLoading = true;
            this.$proxies.diagnosticoProxy.getAll()
                .then(x => {
                    //this.collection = x.data;
                    this.collection.items = x.data;
                    if (this.collection.items.length > 0)
                        this.collection.hasItems = true;
                    this.collection.total = this.collection.items.length

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
        changeview() {
            this.detailed = !this.detailed;
            this.getAll(this.collection.page);
        },
        uuidv4() {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        },
        addDiagnostico() {
            //let d = new Date;
            if (this.prueba.id == '') {
                this.prueba.id = uuidv4();
                this.pruebas.push(this.prueba)
                this.saved = true
                this.dialog = false
            } else {
                let i = this.pruebas.findIndex(x => x.id = this.prueba.id);
                this.pruebas[i] = this.prueba
            }
        },
        deleteDiagnostico() {
            let i = this.pruebas.findIndex(x => x.id = this.prueba.id);
            delete this.pruebas[i]
        },
        editItem(item) {
            this.editedIndex = this.collection.items.indexOf(item);
            this.editedItem = Object.assign({}, item);
        },

        deleteItem(item) {
            //console.log(item);
            const index = this.collection.items.indexOf(item);
            if (item.descripcion != '' || item.estado != '' || item.tipo != '') {
                confirm('Are you sure you want to delete this item?') && this.collection.items.splice(index, 1);
            } else {
                this.collection.items.splice(index, 1);
            }
        },
        close() {
            setTimeout(() => {
                let item = this.collection.items.at(this.editedIndex);
                if (item.descripcion == '' && item.estado == '' && item.tipo == '') {
                    this.collection.items.splice(this.editedIndex, 1);
                }
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            }, 300)
        },
        addNew() {
            const addObj = Object.assign({}, this.defaultItem);
            addObj.id = this.uuidv4();
            addObj.fecregistro = new Date().toLocaleDateString();
            //addObj.id = this.collection.items.length + 1;
            this.collection.items.unshift(addObj);
            this.editItem(addObj);
        },
        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.collection.items[this.editedIndex], this.editedItem)
            }
            this.close()
        },
    }
}