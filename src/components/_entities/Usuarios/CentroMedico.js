
import {mapState, mapActions } from 'vuex'
export default {
    name: 'CentroMedico',

    components: {
    },
    
    data () {
      return {
        
        model:{
            idcentromedic: '',
            idubicacion: '',
            "ubicacion": {
              "id": "",
              "pais": "Peru",
              "region": "Lima",
              "provincia": "Lima",
              "distrito": "",
              "direccion": ""
            },
            nombre: '',
            sector: '',
        },

        dialog: false,
        tipo_centro: ['privado','estatal'],
        items:[ 'Niño Jesús','Mediplus','Clínica Dental' ],
        
        loading: false,
        search: '',
        selected: "",
      }
    },
    computed:{
      
      ...mapState('UsuarioModule',['usuario']),
      ...mapState('UsuarioModule',['centros']),
    },
    mounted() {
      //this.initialize();
      //this.model=this.usuario.centromedico
    },

    methods: {
      ...mapActions('UsuarioModule', ['getUsuario']),
      initialize() {
        let id = this.$route.params.id;
        if (!id) return;
        this.isLoading = true;
        this.$proxies.atencionProxy.getById(id)
            .then(x => {
                this.model = x.data;
                this.isLoading = false;
            })
            .catch(() => {
                this.isLoading = false; 
                /* this.$notify({
                    group: "global",
                    type: "is-danger",
                    text: 'Ocurrió un error inesperado'
                }); */
            });
        
      },
      addCentro(){
        this.dialog = false
        this.items.push(this.model.nombre)
        this.centros.push(this.model)
        //this.selected=this.model.nombre
        this.usuario.centromedico=this.model
        console.log(this.items,this.usuario.centromedico)
      },
      handleChange(value) {
        var searchWord = value.srcElement._value
        /*if (this.items.filter(value => value.startsWith(searchWord)).length === 0) {
          if(searchWord != null)
           if(searchWord.length>0)this.dialog=true;
        }*/
        this.setCentro()
      },
      setCentro(){
        this.usuario.centromedico=this.model
      },
      selectCenterbyRol(){
      return  localStorage.getItem('rol')!='administrador principal'
      }
    },
  }