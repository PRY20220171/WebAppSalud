export default class DiagnosticoxPruebaProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `diagnosticosxpruebas?page=${page}&take=${take}`);
    }
    getAll() {
        return this.axios.get(this.url + `diagnosticosxpruebas`);
    }
    getById(id) {
        return this.axios.get(this.url + `diagnosticosxpruebas/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`diagnosticosxpruebas`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`diagnosticosxpruebas/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`diagnosticosxpruebas/${id}`);
    }
  }