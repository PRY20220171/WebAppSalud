export default class FactoresRiesgoProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `factoresriesgo?page=${page}&take=${take}`);
    }
    getAll() {
        return this.axios.get(this.url + `factoresriesgo`);
    }
    getById(id) {
        return this.axios.get(this.url + `factoresriesgo/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`factoresriesgo`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`factoresriesgo/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`factoresriesgo/${id}`);
    }
  }