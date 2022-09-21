export default class PruebaProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `prueba?page=${page}&take=${take}`);
    }
    getById(id) {
        return this.axios.get(this.url + `prueba/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`prueba`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`prueba/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`prueba/${id}`);
    }
  }