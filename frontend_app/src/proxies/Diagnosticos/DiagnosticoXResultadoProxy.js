export default class DiagnosticoxResultadoProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `diagnosticoxresultado?page=${page}&take=${take}`);
    }
    getById(id) {
        return this.axios.get(this.url + `diagnosticoxresultado/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`diagnosticoxresultado`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`diagnosticoxresultado/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`diagnosticoxresultado/${id}`);
    }
  }