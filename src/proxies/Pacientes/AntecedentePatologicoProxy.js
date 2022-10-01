export default class AntecedentePatologicoProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `antecedentespatologicos?page=${page}&take=${take}`);
    }
    getAll() {
        return this.axios.get(this.url + `antecedentespatologicos`);
    }
    getById(id) {
        return this.axios.get(this.url + `antecedentespatologicos/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`antecedentespatologicos`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`antecedentespatologicos/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`antecedentespatologicos/${id}`);
    }
  }