export default class UsuarioProxy {
    constructor(axios, url) {
        this.axios = axios;
        this.url = url;
    }
    getAll(page, take) {
        return this.axios.get(this.url + `usuarios?page=${page}&take=${take}`);
    }
    getAll() {
        return this.axios.get(this.url + `usuarios`);
    }
    getAllByCentro(centroid) {
        console.log(this.url + 'usuarios?centromedico.id='+centroid+'')
        return this.axios.get(this.url + 'usuarios?centromedico.id='+centroid   );
    }
    getById(id) {
        return this.axios.get(this.url + `usuarios/${id}`);
    }
    getByCorreoAndPassword(correo,password) {
        console.log(this.url + 'usuarios?correo='+correo+'&password='+password)
        return this.axios.get(this.url + 'usuarios?correo='+correo+'&password='+password);
    }
    getByCorreo(correo) {
        console.log(this.url + 'usuarios?correo='+correo)
        return this.axios.get(this.url + 'usuarios?correo='+correo);
    }
    register(model){
        return this.axios.post(this.url+`usuarios`,model);
    }
    update(id, model){
        return this.axios.put(this.url+`usuarios/${id}`,model);
    }
    remove(id){
        return this.axios.delete(this.url+`usuarios/${id}`);
    }
  }