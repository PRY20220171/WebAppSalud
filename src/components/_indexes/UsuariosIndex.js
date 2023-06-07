import Loader from '@/views/Shared/Loader';
/*import Pager from '../../shared/Pager'*/
import Bars from '../../views/Shared/Bars.vue';
import Usuario from '../../views/_createOrUpdate/Usuarios/UsuarioView.vue';

export default {
    nombres: 'UserIndex',
    components: {
        Loader,
       // Pager,
       Bars,
        Usuario
    },
    mounted() {
        this.getAll(1);
    },
    data() {
        return {
            search: '',
            centroid: '',
            usuarioHeaders: [
                { text: 'Nombres',value: 'nombres', },
                { text: 'Apellidos',value: 'apellidos', },
                { text: 'doctipo', value: 'doctipo' },
                { text: 'docnum', value: 'docnum' },
                { text: 'correo', value: 'correo' },
                { text: 'telefono', value: 'telefono' },
                { text: 'numcolegiatura', value: 'numcolegiatura' },
                { text: 'especialidades', value: 'especialidad' },
                { text: '', value: 'actions' },
              ],
            user: this.$store.state.user,
            isLoading: false,
            collection: {
                hasItems: false,
                items: [],
                total: 0,
                page: 1,
                pages: 0
            },
            collapseId: [],
            alertType:false,
            mensaje:'',
        }
    },
    watch: {
      'centroid': {
        handler(val) {
            console.log('centroid w',val)
            this.getAll(1)
        },
        deep: true
      }
    },
    methods: {
        getAll(page) {
            this.isLoading = true;
            
            this.$proxies.userProxy.getById(localStorage.getItem("access_token"))
            .then(x => {
                this.centroid = x.data.centromedico.id;
            }).catch(() => {
            });

                console.log('centroid',this.centroid)
            if(localStorage.getItem("rol")=='administrador principal'){
                this.$proxies.userProxy.getAll()
                    .then(x => {
                        this.collection.items = x.data;
                        console.log(this.collection.items)
                        this.isLoading = false;
                    }).catch(() => {
                        this.isLoading = false;
                    });
            }else{
                this.$proxies.userProxy.getAllByCentro(this.centroid+'')
                    .then(x => {
                        this.collection.items = x.data;
                        console.log(x, 'bycentro', this.centroid)
                        this.isLoading = false;
                    }).catch(() => {
                        this.isLoading = false;
                    });
            }

        },
        remove(id){
            this.isLoading = true;
            console.log('id',id);
            this.$proxies.userProxy.remove(id).then(() => {
                this.isLoading = false;
                this.getAll(1);
            }).catch(() => {
                this.isLoading = false;
            });

            /*.then(() => {
                this.$notify({
                    group: "global",
                    type: "is-success",
                    text: 'Usuario eliminado'
                });
                this.getAll(1);
            }).catch(x => {
                this.isLoading = false;
                this.$notify({
                    group: "global",
                    type: "is-danger",
                    text: 'Ocurrió un error inesperado'+ x
                });
            })*/
        },/*
        collapse(id){
            id;
            // let index = this.collapseId.indexOf(id)
            // if(index == -1){
            //     this.collapseId.push(id);
            // }
            // else{
            //     this.collapseId.splice(index,1);
            // }
        },
        infiniteHandler($state){
            if(this.collection.page > this.collection.pages){
                $state.complete();
                return;
            }
            this.$proxies.userProxy.getAll(this.collection.page+1, 10)
            .then(x => {
                if(this.collection.page <= x.data.pages){
                    this.collection.page+=1;
                    x.data.items.forEach(element => {
                        this.collection.items.push(element);
                        this.collection.items[this.collection.items.length-1].roles.forEach((aux, index) => {
                            switch (aux) {
                                case "USER":
                                    element.roles[index] = "Usuario común";
                                    break;
                                case "ADMIN":
                                    element.roles[index] = "Administrador";
                                    break;
                                case "SELLER":
                                    element.roles[index] = "Ventas";
                                    break;
                                default:
                                    element.roles[index] = "Rol no identificado"
                                    break;
                            }
                        });
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
                    text: 'Ocurrió un error inesperado, codigo de error:'+ cod
                });
            });
        }*/
    }
}