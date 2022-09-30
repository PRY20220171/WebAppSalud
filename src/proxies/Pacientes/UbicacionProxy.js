export default class UbicacionProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `ubicaciones?page=${page}&take=${take}`);
    }
    getById(id) {
        return this.axios.get(this.url + `ubicaciones/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`ubicaciones`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`ubicaciones/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`ubicaciones/${id}`);
    }
  }