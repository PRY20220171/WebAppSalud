export default class CentroMedicoProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `centromedico?page=${page}&take=${take}`);
    }
    getById(id) {
        return this.axios.get(this.url + `centromedico/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`centromedico`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`centromedico/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`centromedico/${id}`);
    }
  }