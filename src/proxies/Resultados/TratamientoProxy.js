export default class TratamientoProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `tratamiento?page=${page}&take=${take}`);
    }
    getById(id) {
        return this.axios.get(this.url + `tratamiento/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`tratamiento`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`tratamiento/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`tratamiento/${id}`);
    }
  }