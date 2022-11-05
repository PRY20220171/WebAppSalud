export default class PruebaProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `pruebas?page=${page}&take=${take}`);
    }
    getAll() {
        return this.axios.get(this.url + `pruebas`);
    }
    getById(id) {
        return this.axios.get(this.url + `pruebas/${id}`);
    }
    getByAtencionId(id) {
        return this.axios.get(this.url + `pruebas?idatencion=${id}`);
    }
    register(model){
        return this.axios.post(this.url+`pruebas`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`pruebas/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`pruebas/${id}`);
    }
  }