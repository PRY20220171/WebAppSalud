export default class CategoriaPruebaProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `categoriaspruebas?page=${page}&take=${take}`);
    }
    getAll() {
        return this.axios.get(this.url + `categoriaspruebas`);
    }
    getById(id) {
        return this.axios.get(this.url + `categoriaspruebas/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`categoriaspruebas`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`categoriaspruebas/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`categoriaspruebas/${id}`);
    }
  }