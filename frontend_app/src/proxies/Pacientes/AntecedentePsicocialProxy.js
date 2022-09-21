export default class AntecedentePsicocialProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `antecedentepsicocial?page=${page}&take=${take}`);
    }
    getById(id) {
        return this.axios.get(this.url + `antecedentepsicocial/${id}`);
    }
    register(model){
        return this.axios.post(this.url+`antecedentepsicocial`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`antecedentepsicocial/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`antecedentepsicocial/${id}`);
    }
  }