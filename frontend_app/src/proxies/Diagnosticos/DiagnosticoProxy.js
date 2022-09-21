export default class DiagnosticoProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `diagnostico?page=${page}&take=${take}`);
    }
    getById(id) {
        return this.axios.get(this.url + `diagnostico/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`diagnostico`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`diagnostico/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`diagnostico/${id}`);
    }
  }