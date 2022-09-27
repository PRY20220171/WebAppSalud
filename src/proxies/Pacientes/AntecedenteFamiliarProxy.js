export default class AntecedenteFamiliarProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `antecedentefamiliar?page=${page}&take=${take}`);
    }
    getById(id) {
        return this.axios.get(this.url + `antecedentefamiliar/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`antecedentefamiliar`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`antecedentefamiliar/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`antecedentefamiliar/${id}`);
    }
  }