import axios from "axios";
import { mapState, mapActions } from "vuex";
import Prueba from "../../views/_createOrUpdate/Pruebas/PruebaView.vue";

export default {
  name: "PruebasAtencionIndex",
  components: {
    Prueba,
  },
  data() {
    return {
      dialog: false,
      searchText: "",
      searchBoxClosed: true,
      isLoading: false,
      search: "",
      estados: ['solicitado', 'en proceso','finalizado'],
      headers: [
        { text: "tipoprueba", value: "tipoprueba.nombre" },
        { text: "medida", value: "tipoprueba.medida.nombre" },
        { text: "Estado", value: "estado" },
        { text: "Fecha de prueba", value: "fecprueba" },
        { text: "Fecha de resultado", value: "fecresultado" },
        { text: "observacion", sortable: false, value: "observacion" },
        { text: "", sortable: false, value: "actions" },
      ],
      collection: {
        hasItems: false,
        items: [],
        total: 0,
        page: 1,
        pages: 0,
      },
      ids: [],
      prueba: {
        id: "",
        idtipoprueba: "",
        tipoprueba: {
          id: "",
          idmedida: "",
          medida: {
            id: "",
            nombre: "",
            descripcion: "",
          },
          idcategoriaprueba: "",
          categoriaprueba: {
            id: "",
            nombre: "",
            descripcion: "",
          },
          nombre: "",
          descripcion: "",
        },
        fecresultado: "",
        fecprueba: "",
        resultado: 0,
        observacion: "",
        estado: "",
      },
      tipo_prueba: [
        {
          id: "bae18399-7e28-48aa-b226-2aad74224531",
          idmedida: "36032de1-e4b2-4408-855a-71cf56c6c9d8",
          medida: {
            id: "36032de1-e4b2-4408-855a-71cf56c6c9d8",
            nombre: "m3",
            descripcion: "metros cubicos",
          },
          idcategoriaprueba: "36032de1-e4b2-4408-855a-71cf56c6c9d8",
          categoriaprueba: {
            id: "36032de1-e4b2-4408-855a-71cf56c6c9d8",
            nombre: "laboratorio",
            descripcion: "descripcion de categoria",
          },
          nombre: "glucosa",
          descripcion: "descripcion de tipoprueba",
        },
        {
          id: "bae18399-7e28-48aa-b226-2aad742333333",
          idmedida: "36032de1-e4b2-4408-855a-742333333",
          medida: {
            id: "36032de1-e4b2-4408-855a-742333333",
            nombre: "x 109/L",
            descripcion: "metros cubicos",
          },
          idcategoriaprueba: "36032de1-e4b2-4408-855a-71cf56c6c9d8",
          categoriaprueba: {
            id: "36032de1-e4b2-4408-855a-71cf56c6c9d8",
            nombre: "laboratorio",
            descripcion: "descripcion de categoria",
          },
          nombre: "leucositos",
          descripcion: "descripcion de tipoprueba",
        },
      ],
      saved: [false],
      editedIndex: -1,
      editedItem: {
        id: "0",
        idtipoprueba: "",
        tipoprueba: {
          id: "",
          idmedida: "",
          medida: {
            id: "",
            nombre: "",
            descripcion: "",
          },
          idcategoriaprueba: "",
          categoriaprueba: {
            id: "",
            nombre: "",
            descripcion: "",
          },
          nombre: "",
          descripcion: "",
        },
        fecresultado: "",
        fecprueba: "",
        resultado: 0,
        observacion: "",
        estado: "",
      },
      defaultItem: {
        id: "0",
        idtipoprueba: "",
        tipoprueba: {
          id: "",
          idmedida: "",
          medida: {
            id: "",
            nombre: "",
            descripcion: "",
          },
          idcategoriaprueba: "",
          categoriaprueba: {
            id: "",
            nombre: "",
            descripcion: "",
          },
          nombre: "",
          descripcion: "",
        },
        fecresultado: "",
        fecprueba: "",
        resultado: 0,
        observacion: "",
        estado: "",
      },
      interval:{},
      loadAtencion:0,
    };
  },
  mounted() {
    // console.log(this.$proxies)
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
  computed: {
    //...mapState('PruebaModule',['prueba']),
    ...mapState("pruebaModule", ["pruebas"]),
    ...mapState('atencionModule', ['atencion']),
  },
  watch: {
    collection: {
      handler(val) {
        for (let item in val.items) {
          item = {
            item,
            paciente: this.getPaciente("d5775113-ed08-4de0-8945-d3c977d504f5"),
          };
        }
        console.log(val.items);
      },
      deep: true,
      flush: "post",
    },
  },
  methods: {
    addPrueba() {
      let d = new Date();

      if (this.prueba.id == "") {
        this.prueba.id = d.getTime();
        this.pruebas.push(this.prueba);
        this.saved = true;
        this.dialog = false;
      } else {
        let i = this.pruebas.findIndex((x) => (x.id = this.prueba.id));
        this.pruebas[i] = this.prueba;
      }
    },
    deletePrueba() {
      let i = this.pruebas.findIndex((x) => (x.id = this.prueba.id));
      delete this.pruebas[i];
    },
    async  getAll(page) {
      this.isLoading = true;
      this.$proxies.pruebaProxy
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
    editItem(item) {
      this.editedIndex = this.collection.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },
    uuidv4() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
      );
    },
    async deleteItem(item) {
      let x = window.confirm("¿Está seguro de eliminar la prueba?");
      if (x) {
        const prueba = await axios.delete(
          `http://localhost:3000/pruebas/${item.id}`
        );
        console.log(prueba);
        alert("Prueba eliminada");
      }

      const index = this.collection.items.indexOf(item);
      if (item.resultado != "" || item.observacion != "") {
        this.collection.items.splice(index, 1);
      } else {
        this.collection.items.splice(index, 1);
      }
    },
    close() {
      setTimeout(() => {
        let item = this.collection.items.at(this.editedIndex);
        if (item.resultado == "" && item.observacion == "") {
          this.collection.items.splice(this.editedIndex, 1);
        }
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    addNew() {
      const addObj = Object.assign({}, this.defaultItem);
      addObj.id = this.uuidv4();
      addObj.fecprueba = new Date().toLocaleDateString();
      //addObj.id = this.collection.items.length + 1;
      this.collection.items.unshift(addObj);
      this.editItem(addObj);
    },
    async save() {
      try {
        const new_prueba = await axios.post("http://localhost:3000/pruebas", {
          id: this.uuidv4(),
          idtipoprueba: this.editedItem.tipoprueba.id,
          tipoprueba: this.editedItem.tipoprueba,
          idpaciente: this.atencion.idpaciente,
          paciente: this.atencion.paciente,
          fecresultado: this.editedItem.fecresultado,
          fecprueba: new Date().toLocaleDateString(),
          resultado: this.editedItem.resultado,
          observacion: this.editedItem.observacion,
          idatencion: this.atencion.id,
          estado: this.editedItem.estado,
        });
      } catch (e) {
        console.log(e);
      }
      this.close();
      /*
            if (this.editedIndex > -1) {
                Object.assign(this.collection.items[this.editedIndex], this.editedItem)
            }
            this.close()*/
    },
    setMedida(item){
      console.log('tipoprueba',item.tipoprueba)
    }
  },
};
