
import {mapState} from 'vuex'
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
        centros:[
          {
            id: '1',
            ubicacionid: '',
            ubicacion: {
              id:  "",
              pais: "Peru",
              region: "Lima",
              provincia: "Lima",
              distrito:  "Cercado",
              direccion:  "Av. 123",
            },
            nombre: 'Niño Jesús',
            sector: 'estatal',
          },{
            id: '2',
            ubicacionid: '',
            ubicacion: {
              id:  "",
              pais: "Peru",
              region: "Lima",
              provincia: "Lima",
              distrito:  "Miraflores",
              direccion:  "Av. 12345",
            },
            nombre: 'Mediplus',
            sector: 'privado',
          },{
            id: '3',
            ubicacionid: '',
            ubicacion: {
              id:  "",
              pais: "Peru",
              region: "Lima",
              provincia: "Lima",
              distrito:  "La molina",
              direccion:  "Av. 123",
            },
            nombre: 'Clínica Liset',
            sector: 'privado',
          },{
            "id": "bdca4305-2306-4398-b840-438a735d1963",
            "ubicacionid": "40477407-308d-4fa4-aa62-dcddcc5a0b39",
            "ubicacion": {
              "id": "40477407-308d-4fa4-aa62-dcddcc5a0b39",
              "pais": "Peru",
              "region": "Lima",
              "provincia": "Lima",
              "distrito": "Lima",
              "direccion": "Av. Alfonso Ugarte 825"
            },
            "nombre": "Hospital Nacional Dos de Mayo",
            "sector": "estatal"
          }
        ],
        loading: false,
        search: '',
        selected: "",
      }
    },
    computed:{
      ...mapState('atencionModule',['atencion']),
    },
    mounted() {
      //this.initialize();
    },

    methods: {
      initialize() {
        let id = this.$route.params.id;
        if (!id) return;
        this.isLoading = true;
        this.$proxies.atencionProxy.getById(id)
            .then(x => {
                this.model = x.data;
                this.model.sexo=this.convertTypeSex(this.model.sexo)
                this.model.rh=this.convertTypeRH(this.model.rh)
                this.model.gruposang=this.model.gruposang.toUpperCase()
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
        //this.selected=this.model.nombre
        this.atencion.centromedico=this.model
      },
      handleChange(value) {
        var searchWord = value.srcElement._value
        if (this.items.filter(value => value.startsWith(searchWord)).length === 0) {
          if(searchWord != null)
           if(searchWord.length>0)this.dialog=true;
        }
        this.setCentro()
      },
      setCentro(){
        this.atencion.centromedico=this.model
      }
    },
  }