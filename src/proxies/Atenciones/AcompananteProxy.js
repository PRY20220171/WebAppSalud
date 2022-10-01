export default class AcompananteProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `acompanantes?page=${page}&take=${take}`);
    }
    getAll() {
        return this.axios.get(this.url + `acompanantes`);
    }
    getById(id) {
        return this.axios.get(this.url + `acompanantes/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`acompanantes`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`acompanantes/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`acompanantes/${id}`);
    }
  }