export default class RolProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `roles?page=${page}&take=${take}`);
    }
    getAll() {
        return this.axios.get(this.url + `roles`);
    }
    getById(id) {
        return this.axios.get(this.url + `roles/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`roles`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`roles/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`roles/${id}`);
    }
  }