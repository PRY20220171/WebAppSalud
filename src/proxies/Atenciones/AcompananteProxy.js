export default class AcompananteProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `acompanante?page=${page}&take=${take}`);
    }
    getById(id) {
        return this.axios.get(this.url + `acompanante/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`acompanante`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`acompanante/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`acompanante/${id}`);
    }
  }