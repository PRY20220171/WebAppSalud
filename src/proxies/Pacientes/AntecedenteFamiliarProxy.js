export default class AntecedenteFamiliarProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `antecedentesfamiliares?page=${page}&take=${take}`);
    }
    getById(id) {
        return this.axios.get(this.url + `antecedentesfamiliares/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`antecedentesfamiliares`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`antecedentesfamiliares/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`antecedentesfamiliares/${id}`);
    }
  }