export default class DiagnosticoxPruebaProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `diagnosticoxprueba?page=${page}&take=${take}`);
    }
    getById(id) {
        return this.axios.get(this.url + `diagnosticoxprueba/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`diagnosticoxprueba`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`diagnosticoxprueba/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`diagnosticoxprueba/${id}`);
    }
  }