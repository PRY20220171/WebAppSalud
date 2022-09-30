export default class NinoProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `ninos?page=${page}&take=${take}`);
    }
    getById(id) {
        return this.axios.get(this.url + `ninos/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`ninos`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`ninos/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`ninos/${id}`);
    }
  }