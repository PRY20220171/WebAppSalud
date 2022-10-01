export default class TratamientoXResultadoProxyProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `tratamientosxresultadosproxy?page=${page}&take=${take}`);
    }
    getAll() {
        return this.axios.get(this.url + `tratamientosxresultadosproxy`);
    }
    getById(id) {
        return this.axios.get(this.url + `tratamientosxresultadosproxy/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`tratamientosxresultadosproxy`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`tratamientosxresultadosproxy/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`tratamientosxresultadosproxy/${id}`);
    }
  }