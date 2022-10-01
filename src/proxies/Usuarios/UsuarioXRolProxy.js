export default class UsusarioxRolProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `ususariosxroles?page=${page}&take=${take}`);
    }
    getAll() {
        return this.axios.get(this.url + `ususariosxroles`);
    }
    getById(id) {
        return this.axios.get(this.url + `ususariosxroles/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`ususariosxroles`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`ususariosxroles/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`ususariosxroles/${id}`);
    }
  }