export default class TratamientoProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `tratamientos?page=${page}&take=${take}`);
    }
    getAll() {
        return this.axios.get(this.url + `tratamientos`);
    }
    getById(id) {
        return this.axios.get(this.url + `tratamientos/${id}`);
    }
    getByAtencionId(id) {
        return this.axios.get(this.url + `tratamientos?idatencion=${id}`);
    }
    register(model){
        return this.axios.post(this.url+`tratamientos`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`tratamientos/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`tratamientos/${id}`);
    }
  }