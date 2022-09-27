export default class SintomaProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `sintoma?page=${page}&take=${take}`);
    }
    getById(id) {
        return this.axios.get(this.url + `sintoma/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`sintoma`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`sintoma/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`sintoma/${id}`);
    }
  }