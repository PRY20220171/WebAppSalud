export default class TransferenciaProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `transferencias?page=${page}&take=${take}`);
    }
    getAll() {
        return this.axios.get(this.url + `transferencias`);
    }
    getById(id) {
        return this.axios.get(this.url + `transferencias/${id}`);
    }/*
    getByAtencionId(id) {
        return this.axios.get(this.url + `transferencias?idatencion=${id}`);
    }*/
    register(model){
        return this.axios.post(this.url+`transferencias`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`transferencias/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`transferencias/${id}`);
    }
  }