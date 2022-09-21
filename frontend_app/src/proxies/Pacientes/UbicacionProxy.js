export default class UbicacionProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `ubicacion?page=${page}&take=${take}`);
    }
    getById(id) {
        return this.axios.get(this.url + `ubicacion/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`ubicacion`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`ubicacion/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`ubicacion/${id}`);
    }
  }