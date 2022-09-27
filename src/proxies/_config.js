import Axios from 'axios';
import IdentityProxy from './IdentityProxy';
import UserProxy from './UserProxy';
import PacienteProxy from './Pacientes/PacienteProxy';
import AtencionProxy from './AtencionProxy';
import PruebaProxy from './PruebaProxy';
import DiagnosticoProxy from './DiagnosticoProxy';
import ResultadoProxy from './ResultadoProxy';
// Axios default behavior
Axios.defaults.headers.common.Accept = 'application/json';

// Token
Axios.interceptors.request.use(
    config => {
        let token = localStorage.getItem('access_token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    error => Promise.reject(error)
);

Axios.interceptors.response.use(
    response => response,
    error => {
        const { status } = error.response;
        if (status === 401) {
            localStorage.removeItem('access_token');
            window.location.reload(true);
        }
        return Promise.reject(error);
    }
);
//La url es la ip de la VM donde se expone el servicio
//let url = 'http://54.196.169.244:5000/';
//En caso querramos poner la direccion con DNS de la computadora, esta direccion es más permanente:
let url = 'http://ec2-54-196-169-244.compute-1.amazonaws.com:5000/';
//let url = 'http://localhost:5000/'; //->Para conexion local
export default {
    identityProxy: new IdentityProxy(Axios,url),
    userProxy: new UserProxy(Axios,url),
    pacienteProxy: new PacienteProxy(Axios,url),
    atencionProxy: new AtencionProxy(Axios,url),    
    pruebaProxy: new PruebaProxy(Axios, url),
    diagnosticoProxy: new DiagnosticoProxy(Axios,url),
    resultadoProxy: new ResultadoProxy(Axios,url),
}