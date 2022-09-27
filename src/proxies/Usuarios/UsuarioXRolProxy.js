export default class UsusarioxRolProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `ususarioxrol?page=${page}&take=${take}`);
    }
    getById(id) {
        return this.axios.get(this.url + `ususarioxrol/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`ususarioxrol`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`ususarioxrol/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`ususarioxrol/${id}`);
    }
  }