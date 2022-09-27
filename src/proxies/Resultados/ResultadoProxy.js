export default class ResultadoProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `resultado?page=${page}&take=${take}`);
    }
    getById(id) {
        return this.axios.get(this.url + `resultado/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`resultado`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`resultado/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`resultado/${id}`);
    }
  }