export default class TratamientoXResultadoProxyProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `tratamientoxresultadoproxy?page=${page}&take=${take}`);
    }
    getById(id) {
        return this.axios.get(this.url + `tratamientoxresultadoproxy/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`tratamientoxresultadoproxy`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`tratamientoxresultadoproxy/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`tratamientoxresultadoproxy/${id}`);
    }
  }