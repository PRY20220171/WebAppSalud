export default class PacienteProxy {
  constructor(axios, url) {
      this.axios = axios;
      this.url = url;
  }
  getAll(page, take) {
      return this.axios.get(this.url + `paciente?page=${page}&take=${take}`);
  }/*
  getAllSimple(page, take){
      return this.axios.get(this.url + `paciente/simple?page=${page}&take=${take}`);
  }
  getAllAdmin(page, take) {
      return this.axios.get(this.url + `paciente/admin?page=${page}&take=${take}`);
  }
  getByPruebaId(id) {
      return this.axios.get(this.url + `paciente/prueba=${id}`);
  }*/
  getById(id) {
      return this.axios.get(this.url + `paciente/${id}`);
  }
  register(model){
      return this.axios.post(this.url+`paciente`,model);
  }
  update(id, model){
      return this.axios.put(this.url+`paciente/${id}`,model);
  }
  remove(id){
      return this.axios.delete(this.url+`paciente/${id}`);
  }
}