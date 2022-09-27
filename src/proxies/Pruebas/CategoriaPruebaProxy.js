export default class CategoriaPruebaProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `categoriaprueba?page=${page}&take=${take}`);
    }
    getById(id) {
        return this.axios.get(this.url + `categoriaprueba/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`categoriaprueba`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`categoriaprueba/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`categoriaprueba/${id}`);
    }
  }