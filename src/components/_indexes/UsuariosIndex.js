/*import Loader from '../../shared/Loader'
import Pager from '../../shared/Pager'*/
import Bars from '../../views/Shared/Bars.vue';
import Usuario from '../../views/_createOrUpdate/Usuarios/UsuarioView.vue';

export default {
    nombres: 'UserIndex',
    components: {
       // Loader, Pager,
       Bars,
        Usuario
    },
    mounted() {
        this.getAll(1);
    },
    data() {
        return {
            search: '',
            headers: [
                {
                  text: 'Nombres',value: 'nombres',
                },
                { text: 'doctipo', value: 'doctipo' },
                { text: 'docnum', value: 'docnum' },
                { text: 'correo', value: 'email' },
                { text: 'telefono', value: 'telefono' },
                { text: 'numcolegiatura', value: 'numcolegiatura' },
                { text: 'especialidades', value: 'especialidades' },
              ],
              desserts: [
                {
                    "nombres": "Harrison Clements",
                    "doctipo": "DNI",
                    "docnum": "22940213-7",
                    "email": "sapien.nunc@aol.net",
                    "telefono": "912401774",
                    "numcolegiatura": "361346-1",
                    "especialidades": "Donec Foundation"
                },
                {
                    "nombres": "Mufutau Juarez",
                    "doctipo": "DNI",
                    "docnum": "3437712-K",
                    "email": "ut.nulla.cras@icloud.com",
                    "telefono": "950918062",
                    "numcolegiatura": "2884858-7",
                    "especialidades": "Duis A Limited"
                },
                {
                    "nombres": "Nolan Hubbard",
                    "doctipo": "CE",
                    "docnum": "47162566-3",
                    "email": "ac.facilisis@google.edu",
                    "telefono": "947474272",
                    "numcolegiatura": "28220467-3",
                    "especialidades": "Aliquam Auctor Velit Institute"
                },
                {
                    "nombres": "Angelica Ford",
                    "doctipo": "CE",
                    "docnum": "867506-6",
                    "email": "aliquam.tincidunt.nunc@aol.ca",
                    "telefono": "924059981",
                    "numcolegiatura": "13503205-0",
                    "especialidades": "Fringilla Porttitor Institute"
                },
                {
                    "nombres": "Cassidy Glass",
                    "doctipo": "DNI",
                    "docnum": "6536734-3",
                    "email": "consectetuer.mauris@icloud.edu",
                    "telefono": "914887271",
                    "numcolegiatura": "43222381-7",
                    "especialidades": "Sed Pede Cum LLP"
                },
                {
                    "nombres": "Gareth Garcia",
                    "doctipo": "DNI",
                    "docnum": "48809941-8",
                    "email": "quisque@icloud.org",
                    "telefono": "944487186",
                    "numcolegiatura": "3793847-5",
                    "especialidades": "Dui Semper LLC"
                },
                {
                    "nombres": "Sara Weber",
                    "doctipo": "CE",
                    "docnum": "18431250-6",
                    "email": "ornare.tortor.at@aol.com",
                    "telefono": "956411121",
                    "numcolegiatura": "2945750-6",
                    "especialidades": "Et Magnis Company"
                },
                {
                    "nombres": "Daryl Benson",
                    "doctipo": "CE",
                    "docnum": "46362971-4",
                    "email": "augue.scelerisque@google.edu",
                    "telefono": "976818160",
                    "numcolegiatura": "4379270-9",
                    "especialidades": "Amet Consectetuer PC"
                },
                {
                    "nombres": "Herman Summers",
                    "doctipo": "DNI",
                    "docnum": "6880929-0",
                    "email": "egestas.fusce@icloud.edu",
                    "telefono": "935594064",
                    "numcolegiatura": "35274717-3",
                    "especialidades": "Erat Vivamus PC"
                },
                {
                    "nombres": "Owen Ayers",
                    "doctipo": "DNI",
                    "docnum": "42821418-8",
                    "email": "molestie@protonmail.com",
                    "telefono": "968442180",
                    "numcolegiatura": "41506428-4",
                    "especialidades": "Phasellus Foundation"
                },
                {
                    "nombres": "Brielle Taylor",
                    "doctipo": "CE",
                    "docnum": "39540493-8",
                    "email": "amet@aol.ca",
                    "telefono": "924747208",
                    "numcolegiatura": "9530664-0",
                    "especialidades": "Non Lobortis Limited"
                },
                {
                    "nombres": "Joshua Gilmore",
                    "doctipo": "CE",
                    "docnum": "45790941-1",
                    "email": "proin@outlook.net",
                    "telefono": "913724527",
                    "numcolegiatura": "1762480-6",
                    "especialidades": "Phasellus Dapibus Incorporated"
                },
                {
                    "nombres": "Carol Moody",
                    "doctipo": "DNI",
                    "docnum": "2993867-9",
                    "email": "erat.etiam.vestibulum@outlook.couk",
                    "telefono": "916199419",
                    "numcolegiatura": "34102165-0",
                    "especialidades": "Faucibus Orci LLP"
                },
                {
                    "nombres": "Jenette Craig",
                    "doctipo": "DNI",
                    "docnum": "13361363-3",
                    "email": "augue.ac@icloud.edu",
                    "telefono": "978032838",
                    "numcolegiatura": "35955764-7",
                    "especialidades": "Porta Elit Limited"
                },
                {
                    "nombres": "Sandra Lucas",
                    "doctipo": "CE",
                    "docnum": "15959671-0",
                    "email": "curae.donec.tincidunt@icloud.couk",
                    "telefono": "977614427",
                    "numcolegiatura": "11901368-2",
                    "especialidades": "Urna Justo Faucibus LLC"
                },
                {
                    "nombres": "Alana Goff",
                    "doctipo": "CE",
                    "docnum": "2341013-3",
                    "email": "maecenas.malesuada@google.ca",
                    "telefono": "956146605",
                    "numcolegiatura": "46834406-8",
                    "especialidades": "Est Ac Mattis LLC"
                },
                {
                    "nombres": "Shelly Burch",
                    "doctipo": "DNI",
                    "docnum": "42892281-6",
                    "email": "augue.ut@protonmail.com",
                    "telefono": "978459223",
                    "numcolegiatura": "2963189-1",
                    "especialidades": "In Faucibus Industries"
                },
                {
                    "nombres": "Davis Wagner",
                    "doctipo": "DNI",
                    "docnum": "14960876-1",
                    "email": "vivamus.molestie.dapibus@yahoo.com",
                    "telefono": "959137414",
                    "numcolegiatura": "17474513-7",
                    "especialidades": "Aliquet Molestie Tellus Corp."
                },
                {
                    "nombres": "Kasper Abbott",
                    "doctipo": "CE",
                    "docnum": "4755355-5",
                    "email": "eget@protonmail.net",
                    "telefono": "957828504",
                    "numcolegiatura": "7388948-0",
                    "especialidades": "Quis Ltd"
                },
                {
                    "nombres": "Emma Gamble",
                    "doctipo": "CE",
                    "docnum": "19315684-3",
                    "email": "id@aol.com",
                    "telefono": "940324684",
                    "numcolegiatura": "39876953-8",
                    "especialidades": "Hendrerit Id Ante LLC"
                }
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
            collapseId: []
        }
    },
    methods: {/*
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
        }*/
    }
}