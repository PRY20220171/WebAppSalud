export default class ResultadoProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `resultados?page=${page}&take=${take}`);
    }
    getAll() {
        return this.axios.get(this.url + `resultados`);
    }
    getById(id) {
        return this.axios.get(this.url + `resultados/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`resultados`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`resultados/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`resultados/${id}`);
    }
  }