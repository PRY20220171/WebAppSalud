export default class AtencionProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `atencion?page=${page}&take=${take}`);
    }
    getAll() {
        return this.axios.get(this.url + `atencion`);
    }
    getById(id) {
        return this.axios.get(this.url + `atencion/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`atencion`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`atencion/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`atencion/${id}`);
    }
  }