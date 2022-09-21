import Loader from '../../shared/Loader'
import Pager from '../../shared/Pager'
export default {
    name: 'UserIndex',
    components: {
        Loader, Pager
    },
    mounted() {
        this.getAll(1);
    },
    data() {
        return {
            user: this.$store.state.user,
            isLoading: false,
            collection: {
                hasItems: false,
                items: [],
                total: 0,
                page: 1,
                pages: 0
            },          
            collapseId: []
        }
    },
    methods: {
        getAll(page) {
            this.isLoading = true;
            this.$proxies.userProxy.getAll(page, 10)
                .then(x => {
                    this.collection = x.data;
                    this.collection.items.forEach(element => {
                        element.roles.forEach((aux, index) => {
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
                    this.isLoading = false;                    
                }).catch(() => {
                    this.isLoading = false;
                });
        },
        remove(id){
            this.isLoading = true;
            this.$proxies.userProxy.delete(id)
            .then(() => {
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
            })
        },
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
        }
    }
}