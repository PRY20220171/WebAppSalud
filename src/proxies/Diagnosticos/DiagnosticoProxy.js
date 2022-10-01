export default class DiagnosticoProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `diagnosticos?page=${page}&take=${take}`);
    }
    getAll() {
        return this.axios.get(this.url + `diagnosticos`);
    }
    getAll() {
        return this.axios.get(this.url + `diagnosticos`);
    }
    getById(id) {
        return this.axios.get(this.url + `diagnosticos/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`diagnosticos`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`diagnosticos/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`diagnosticos/${id}`);
    }
  }