export default class MedidaProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `medida?page=${page}&take=${take}`);
    }
    getById(id) {
        return this.axios.get(this.url + `medida/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`medida`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`medida/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`medida/${id}`);
    }
  }