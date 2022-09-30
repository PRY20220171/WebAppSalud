import Axios from 'axios';
import IdentityProxy from './IdentityProxy';
import UserProxy from './Usuarios/UsuarioProxy';

import PacienteProxy from './Pacientes/PacienteProxy';
import UbicacionProxy from './Pacientes/UbicacionProxy';
import NinoProxy from './Pacientes/NinoProxy';
import AntecedentePsicocialProxy from './Pacientes/AntecedentePsicocialProxy';
import AntecedenteFamiliarProxy from './Pacientes/AntecedenteFamiliarProxy';
import AntecedentePatologicoProxy from './Pacientes/AntecedentePatologicoProxy';

/*
import AtencionProxy from './Atenciones/AtencionProxy';
import PruebaProxy from './Pruebas/PruebaProxy';
import DiagnosticoProxy from './Diagnosticos/DiagnosticoProxy';
import ResultadoProxy from './Resultados/ResultadoProxy';
*/

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
//let url = 'http://ec2-54-196-169-244.compute-1.amazonaws.com:5000/';
//let url = 'http://localhost:5000/'; //->Para conexion local
let url='http://localhost:3000/'

export default {/*
    identityProxy: new IdentityProxy(Axios,url),
    userProxy: new UserProxy(Axios,url),
    atencionProxy: new AtencionProxy(Axios,url),    
    pruebaProxy: new PruebaProxy(Axios, url),
    diagnosticoProxy: new DiagnosticoProxy(Axios,url),
    resultadoProxy: new ResultadoProxy(Axios,url),*/
    pacienteProxy: new PacienteProxy(Axios,url),
    ubicacionProxy: new UbicacionProxy(Axios,url),
    ninoProxy: new NinoProxy(Axios,url),
    antecedentePsicocialProxy: new AntecedentePsicocialProxy(Axios,url),
    antecedenteFamiliarProxy: new AntecedenteFamiliarProxy(Axios,url),
    antecedentePatologicoProxy: new AntecedentePatologicoProxy(Axios,url),
}