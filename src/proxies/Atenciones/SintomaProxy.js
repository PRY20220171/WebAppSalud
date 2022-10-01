export default class SintomaProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `sintomas?page=${page}&take=${take}`);
    }
    getAll(page, take) {
        return this.axios.get(this.url + `sintomas`);
    }
    getById(id) {
        return this.axios.get(this.url + `sintomas/${id}`);
    }
    getByAtencionId(id) {
        return this.axios.get(this.url + `sintomas?idatencion=${id}`);
    }
    register(model){
        return this.axios.post(this.url+`sintomas`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`sintomas/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`sintomas/${id}`);
    }
  }