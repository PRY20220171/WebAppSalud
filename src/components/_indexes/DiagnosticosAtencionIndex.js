import axios from "axios";
import Diagnostico from "../../views/_createOrUpdate/Diagnosticos/DiagnosticoView";
import { mapState, mapMutations, mapActions } from "vuex";
import { id_Paciente, id_Atencion } from "../_entities/Atenciones/_Atencion.js";

export default {
  name: "DiagnosticosAtencionIndex",
  components: {
    Diagnostico,
  },
  data() {
    return {
      //datos: null,
      dialog: false,
      searchText: "",
      searchBoxClosed: true,
      isLoading: false,

      interval:{},
      loadAtencion:0,

      search: "",
      headers: [
        {
          text: "fecregistro",
          value: "fecregistro",
        },
        {
          text: "descripcion",
          value: "descripcion",
        },
        {
          text: "estado",
          value: "estado",
        },
        {
          text: "tipo",
          value: "tipo",
        },
        {
          text: "",
          sortable: false,
          value: "actions",
        },
      ],
      collection: {
        hasItems: false,
        items: [],
        total: 0,
        page: 1,
        pages: 0,
      },
      ids: [],
      diagnostico: {
        id: "",
        fecregistro: "",
        descripcion: "",
        estado: "",
        tipo: "",
        idatencion: "",
        resultados: [
          {
            id: "",
            registro: "",
            descripcion: "",
            estado: "",
          },
        ],
      },
      estados: ['inicial',"en proceso", "esperando pruebas", "finalizado"],
      tipos: ["final", "inicial", "medio"],
      editedIndex: -1,
      editedItem: {
        id: "0",
        fecregistro: "",
        descripcion: "",
        estado: "",
        tipo: "",
        idatencion: "",
        resultados: [
          {
            id: "",
            registro: "",
            descripcion: "",
            estado: "",
          },
        ],
      },
      defaultItem: {
        id: "0",
        fecregistro: "",
        descripcion: "",
        estado: "",
        tipo: "",
        idatencion: "",
        resultados: [
          {
            id: "",
            registro: "",
            descripcion: "",
            estado: "",
          },
        ],
      },
    };
  },
  beforeMount() {
    // console.log(this.$proxies)
  },
  computed: {
    //...mapState('DiagnosticoModule',['diagnostico']),
    ...mapState("DiagnosticoModule", ["diagnosticos"]),
    ...mapState("atencionModule", ["atencion"]),
    //...mapState('pacienteModule',['paciente']),
  },
  watch: {
    collection: {
      handler(val) {
        for (let item in val.items) {
          item = {
            item,
            //paciente: this.getPaciente("d5775113-ed08-4de0-8945-d3c977d504f5"),
            paciente: this.atencion.paciente,
          };
        }
        console.log('watch',val.items);
      },
      deep: true,
      flush: "post",
    },
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
    /*
            console.log(this.collection)
            console.log(this.collection.items)*/
  },
  methods: {
    /* ---------------------------------PRUEBA DE AXIOS--------------------------------
            async get_usuario(id){
                let response = await axios.get(`http://localhost:3000/usuarios/${id}`)
                console.log(response.data.nombres)
                RECOLECTA BIEN LA DATA 
                this.datos= await axios.get(`http://localhost:3000/usuarios/${id}`);
            },
            */
     getAll(page) {
        console.log('diagnostico befor')
      this.isLoading = true;
      this.$proxies.diagnosticoProxy
        //.getAll()
        .getByAtencionId(this.atencion.id)
        .then((x) => {
          //this.collection = x.data;
          this.collection.items = x.data;
          if (this.collection.items.length > 0) this.collection.hasItems = true;
          this.collection.total = this.collection.items.length;

          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
      //console.log(this.$proxies.pacienteProxy.getAll())
      //console.log(this.collection)
    },
    getPaciente(idPaciente) {
      this.isLoading = true;
      this.$proxies.pacienteProxy
        .getById(idPaciente)
        .then((x) => {
          this.paciente = x.data;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
      console.log(this.paciente);
      return this.paciente;
    },
    changeview() {
      this.detailed = !this.detailed;
      this.getAll(this.collection.page);
    },
    uuidv4() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
      );
    },
    addDiagnostico() {
      //let d = new Date;
      if (this.prueba.id == "") {
        this.prueba.id = uuidv4();
        this.pruebas.push(this.prueba);
        this.saved = true;
        this.dialog = false;
      } else {
        let i = this.pruebas.findIndex((x) => (x.id = this.prueba.id));
        this.pruebas[i] = this.prueba;
      }
    },
    deleteDiagnostico() {
      let i = this.pruebas.findIndex((x) => (x.id = this.prueba.id));
      delete this.pruebas[i];
    },
    editItem(item) {
        this.editedIndex = this.collection.items.indexOf(item);
        this.editedItem = Object.assign({}, item);
    },

    async deleteItem(item) {
        let x = window.confirm("¿Está seguro de eliminar el diagnostico?");
        if (x) {
            const diagnost = await axios.delete(
                `http://localhost:3000/diagnosticos/${item.id}`
            );
            
            console.log(diagnost);
            alert("Diagnostico eliminado");
        }
        const index = this.collection.items.indexOf(item);
        if (item.descripcion != "" || item.estado != "" || item.tipo != "") {
          this.collection.items.splice(index, 1);
        } else {
            this.collection.items.splice(index, 1);
        }
    },
    close() {
      setTimeout(() => {
        let item = this.collection.items.at(this.editedIndex);
        if (item.descripcion == "" && item.estado == "" && item.tipo == "") {
          this.collection.items.splice(this.editedIndex, 1);
        }
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    addNew() {
      const addObj = Object.assign({}, this.defaultItem);
      addObj.id = this.uuidv4();
      addObj.idatencion = this.atencion.id;
      addObj.fecregistro = new Date().toLocaleDateString();
      //addObj.id = this.collection.items.length + 1;
      //this.collection.items.unshift(addObj);
      this.collection.items.push(addObj);
      this.editItem(addObj);
    },
    async save() {
        try{
            const new_diagnostico= await axios.post(
                'http://localhost:3000/diagnosticos',
                {
                    id: this.uuidv4(),
                    fecregistro: new Date().toLocaleDateString(),
                    descripcion: this.editedItem.descripcion,
                    estado: this.editedItem.estado,
                    tipo: this.editedItem.tipo,
                    idatencion: this.atencion.id,
                    idpaciente: this.atencion.idpaciente,
                })
        }
        catch(error){
            console.log(error);
        }
        this.close();
        /*
      if (this.editedIndex > -1) {
        Object.assign(this.collection.items[this.editedIndex], this.editedItem);
      }
      this.close();*/
    },
  },
  created() {
    //this.get_usuario('04e77d02-1a3b-428b-83f0-bef1aa426020')
  },
};
