export default class MedidaProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `medidas?page=${page}&take=${take}`);
    }
    getAll() {
        return this.axios.get(this.url + `medidas`);
    }
    getById(id) {
        return this.axios.get(this.url + `medidas/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`medidas`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`medidas/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`medidas/${id}`);
    }
  }