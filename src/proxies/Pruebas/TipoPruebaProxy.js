export default class TipoPruebaProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `tipospruebas?page=${page}&take=${take}`);
    }
    getAll() {
        return this.axios.get(this.url + `tipospruebas`);
    }
    getById(id) {
        return this.axios.get(this.url + `tipospruebas/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`tipospruebas`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`tipospruebas/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`tipospruebas/${id}`);
    }
  }