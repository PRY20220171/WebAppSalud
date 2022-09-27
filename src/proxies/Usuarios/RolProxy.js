export default class RolProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `rol?page=${page}&take=${take}`);
    }
    getById(id) {
        return this.axios.get(this.url + `rol/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`rol`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`rol/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`rol/${id}`);
    }
  }