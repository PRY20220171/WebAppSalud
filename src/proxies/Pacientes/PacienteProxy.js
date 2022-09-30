export default class PacienteProxy {
  constructor(axios, url) {
      this.axios = axios;
      this.url = url;
  }
  getAll() {
    return this.axios.get(this.url + `pacientes`);
    // return this.axios.get(this.url + `pacientes?page=${page}&take=${take}`);
  }/*
  getAllSimple(page, take){
      return this.axios.get(this.url + `pacientes/simple?page=${page}&take=${take}`);
  }
  getAllAdmin(page, take) {
      return this.axios.get(this.url + `pacientes/admin?page=${page}&take=${take}`);
  }
  getByPruebaId(id) {
      return this.axios.get(this.url + `pacientes/prueba=${id}`);
  }*/
  getById(id) {
      return this.axios.get(this.url + `pacientes/${id}`);
  }
  register(model){
      return this.axios.post(this.url+`pacientes`,model);
  }
  update(id, model){
      return this.axios.put(this.url+`pacientes/${id}`,model);
  }
  remove(id){
      return this.axios.delete(this.url+`pacientes/${id}`);
  }
}