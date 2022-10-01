export default class DiagnosticoxResultadoProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `diagnosticosxresultados?page=${page}&take=${take}`);
    }
    getAll() {
        return this.axios.get(this.url + `diagnosticosxresultados`);
    }
    getById(id) {
        return this.axios.get(this.url + `diagnosticosxresultados/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`diagnosticosxresultados`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`diagnosticosxresultados/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`diagnosticosxresultados/${id}`);
    }
  }