export default class NinoProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `nino?page=${page}&take=${take}`);
    }
    getById(id) {
        return this.axios.get(this.url + `nino/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`nino`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`nino/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`nino/${id}`);
    }
  }