import Loader from '../../shared/Loader'
import Pager from '../../shared/Pager'

export default {
    name: 'AdminCreateOrUpdate',
    components: {
        Loader, Pager
    },
    mounted() {
        this.initialize();
    },
    validators: {
        'model.firstNames'(value) {
            return this.$validator
                .value(value)
                .required()
                .minLength(4);
        },
        'model.lastNames'(value) {
            return this.$validator
                .value(value)
                .required()
                .minLength(4);
        },
        'model.email'(value) {
            return this.$validator
                .value(value)
                .required()
                .minLength(6);
        },
        'model.password'(value) {
            if(this.model.id==null)
            return this.$validator
                .value(value)
                .required()
                .minLength(6);
        },
        'model.role'(value) {
            return this.$validator
                .value(value)
                .required();
        }
    },
    data() {
        return {
            user: this.$store.state.user,
            isLoading: false,
            model: {
                id: null,
                firstNames: null,
                lastNames: null,
                email: null,
                password: null,
                role: "USER"
            },
            roles:[
                {value: "ADMIN", view: "Administrador"},
                {value: "SELLER", view: "Ventas"},
                {value: "USER", view: "Usuario común"},
            ]
        }
    },
    methods: {
        initialize() {
            let id = this.$route.params.id;
            if (!id) return;
            this.isLoading = true;
            this.$proxies.userProxy.getById(id)
                .then(x => {                   
                    this.model = x.data;
                    this.model.role = x.data.roles[0];
                    if(this.model.role == undefined){
                        this.model.role = "UNDEFINED"
                    }                    
                    this.isLoading = false;
                })
                .catch(() => {
                    this.isLoading = false;
                    this.$notify({
                        group: "global",
                        type: "is-danger",
                        text: 'Ocurrió un error inesperado'
                    });
                })
        },
        save() {
            this.$validate().then(success => {
                if (!success) return;
                this.isLoading = true;
                if (this.model.id) {
                    this.$proxies.userProxy.update(this.model.id, this.model)
                        .then(() => {
                            this.$notify({
                                group: "global",
                                type: "is-success",
                                text: 'Usuario actualizado con éxito'
                            });
                            this.$router.push('/users');
                        })
                        .catch(() => {
                            this.isLoading = false;
                            this.$notify({
                                group: "global",
                                type: "is-danger",
                                text: 'Ocurrió un error inesperado'
                            });
                        });
                } else {
                    this.$proxies.userProxy.registerAdmin(this.model)
                        .then(() => {
                            this.$notify({
                                group: "global",
                                type: "is-success",
                                text: 'Usuario creado con éxito'
                            });
                            this.$router.push('/users');
                        })
                        .catch(() => {
                            this.isLoading = false;
                            this.$notify({
                                group: "global",
                                type: "is-danger",
                                text: 'Ocurrió un error inesperado'
                            });
                        });
                }
            })
        }
    }
}