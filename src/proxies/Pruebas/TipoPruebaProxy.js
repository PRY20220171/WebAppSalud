export default class TipoPruebaProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `tipoprueba?page=${page}&take=${take}`);
    }
    getById(id) {
        return this.axios.get(this.url + `tipoprueba/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`tipoprueba`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`tipoprueba/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`tipoprueba/${id}`);
    }
  }