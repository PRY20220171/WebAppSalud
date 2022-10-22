export default class AntecedentePerinatalProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `antecedenteperinatales?page=${page}&take=${take}`);
    }
    getAll() {
        return this.axios.get(this.url + `antecedenteperinatales`);
    }
    getById(id) {
        return this.axios.get(this.url + `antecedenteperinatales/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`antecedenteperinatales`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`antecedenteperinatales/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`antecedenteperinatales/${id}`);
    }
  }