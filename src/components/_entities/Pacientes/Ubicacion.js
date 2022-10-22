import {mapState} from 'vuex'

export default {
    name: 'Ubicacion',

    components: {
    },
    
    data () {
      return {

        list_paises:[],
        list_nac_regiones:[],
        list_nac_provincias:[],
        list_dom_regiones:[],
        list_dom_provincias:[],

      }
    },
    computed:{
      ...mapState('pacienteModule',['paciente']),
    },
    watch: {
      'paciente.domicilioact': {
        async handler(domicilioact) {
          if (domicilioact) {
            this.getPaises()
            this.getRegiones('nac')
            this.getRegiones('dom')
            this.getProvincias('nac')
            this.getProvincias('dom')
          } 
        },
        immediate: true
      }
    },
    mounted() {
     // this.initialize(null,null);
     //this.getRegiones();
     //this.getProvincias("Peru","Lima")
    },
    methods:{
      getPaises(){
        //console.log('set Paises')
        fetch('https://countriesnow.space/api/v0.1/countries/iso')
        .then(response => response.json())
        .then(countries => {
            this.list_paises = countries.data
        })
      },
      getRegiones(tipo_lugar){
        //console.log('set regiones')
        var data = {country:''}
        switch(tipo_lugar){
          case 'nac': data.country= this.paciente.lugarnac.pais; break;
          case 'dom': data.country= this.paciente.domicilioact.pais; break;
        }
        var requestOptions = {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json',},
          redirect: 'follow'
        };
        //console.log(tipo_lugar, requestOptions)

        fetch("https://countriesnow.space/api/v0.1/countries/states", requestOptions)
          .then(response => response.json())
          .then(result =>{
            //console.log( result.data)
            switch(tipo_lugar){
              case 'nac': this.list_nac_regiones= result.data.states; break;
              case 'dom': this.list_dom_regiones= result.data.states; break;
            }
          }).catch(error => console.log('error', error));
        
      },
      getProvincias(tipo_lugar){
        //console.log('set Provincias')
        var data = {country:'', state:''}
        switch(tipo_lugar){
          case 'nac': 
            data.country= this.paciente.lugarnac.pais;
            data.state= this.paciente.lugarnac.region;
            break;
          case 'dom': 
            data.country= this.paciente.domicilioact.pais;
            data.state= this.paciente.domicilioact.region;
            break;
        }
        var requestOptions = {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json',},
          redirect: 'follow'
        };
        //console.log(tipo_lugar, requestOptions)

        fetch("https://countriesnow.space/api/v0.1/countries/state/cities", requestOptions)
          .then(response => response.json())
          .then(result =>{
            //console.log('prov', result.data)
            switch(tipo_lugar){
              case 'nac': this.list_nac_provincias= result.data; break;
              case 'dom': this.list_dom_provincias= result.data; break;
            }
          }).catch(error => console.log('error', error));
        
      },
        save() {
          console.log("guardar lugares")
  
                if (this.model.id) {
                    this.$proxies.ubicacionProxy.update(this.paciente.lugarnac.id, this.paciente.lugarnac)
                    this.$proxies.ubicacionProxy.update(this.paciente.domicilioact.id, this.paciente.domicilioact)
                } else {
                    this.$proxies.ubicacionProxy.register(this.paciente.lugarnac)
                    this.$proxies.ubicacionProxy.register(this.paciente.domicilioact)
                }
        },
    }
  }