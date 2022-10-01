export default class CentroMedicoProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `centrosmedicos?page=${page}&take=${take}`);
    }
    getAll() {
        return this.axios.get(this.url + `centrosmedicos`);
    }
    getById(id) {
        return this.axios.get(this.url + `centrosmedicos/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`centrosmedicos`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`centrosmedicos/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`centrosmedicos/${id}`);
    }
  }