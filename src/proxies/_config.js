import Axios from 'axios';
import IdentityProxy from './IdentityProxy';
import UserProxy from './Usuarios/UsuarioProxy';
import RolProxy from './Usuarios/RolProxy';
import UsuarioXRolProxy from './Usuarios/UsuarioXRolProxy';

import PacienteProxy from './Pacientes/PacienteProxy';
import UbicacionProxy from './Pacientes/UbicacionProxy';
import NinoProxy from './Pacientes/NinoProxy';
import AntecedentePsicocialProxy from './Pacientes/AntecedentePsicocialProxy';
import AntecedenteFamiliarProxy from './Pacientes/AntecedenteFamiliarProxy';
import AntecedentePatologicoProxy from './Pacientes/AntecedentePatologicoProxy';

import AtencionProxy from './Atenciones/AtencionProxy';
import AcompananteProxy from './Atenciones/AcompananteProxy';
import CentroMedicoProxy from './Atenciones/CentroMedicoProxy';
import FactoresRiesgoProxy from './Atenciones/FactoresRiesgoProxy';
import SintomaProxy from './Atenciones/SintomaProxy';

import PruebaProxy from './Pruebas/PruebaProxy';
import CategoriaPruebaProxy from './Pruebas/CategoriaPruebaProxy';
import MedidaProxy from './Pruebas/MedidaProxy';
import TipoPruebaProxy from './Pruebas/TipoPruebaProxy';

import DiagnosticoProxy from './Diagnosticos/DiagnosticoProxy';
import DiagnosticoXPruebaProxy from './Diagnosticos/DiagnosticoXPruebaProxy';
import DiagnosticoXResultadoProxy from './Diagnosticos/DiagnosticoXResultadoProxy';

import ResultadoProxy from './Resultados/ResultadoProxy';
import TratamientoProxy from './Resultados/TratamientoProxy';
import TratamientoXResultadoProxy from './Resultados/TratamientoXResultadoProxy';

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
let url='http://localhost:3000/';

export default {
    
    userProxy: new UserProxy(Axios,url),
    rolProxy: new RolProxy(Axios,url),
    usuarioXRolProxy: new UsuarioXRolProxy(Axios,url),

    pacienteProxy: new PacienteProxy(Axios,url),
    ubicacionProxy: new UbicacionProxy(Axios,url),
    ninoProxy: new NinoProxy(Axios,url),
    antecedentePsicocialProxy: new AntecedentePsicocialProxy(Axios,url),
    antecedenteFamiliarProxy: new AntecedenteFamiliarProxy(Axios,url),
    antecedentePatologicoProxy: new AntecedentePatologicoProxy(Axios,url),

    atencionProxy: new AtencionProxy(Axios,url),
    acompananteProxy: new AcompananteProxy(Axios,url),
    centroMedicoProxy: new CentroMedicoProxy(Axios,url),
    factoresRiesgoProxy: new FactoresRiesgoProxy(Axios,url),
    sintomaProxy: new SintomaProxy(Axios,url),

    diagnosticoProxy: new DiagnosticoProxy(Axios,url),
    diagnosticoXPruebaProxy: new DiagnosticoXPruebaProxy(Axios,url),
    diagnosticoXResultadoProxy: new DiagnosticoXResultadoProxy(Axios,url),
    
    categoriaPruebaProxy: new CategoriaPruebaProxy(Axios,url),
    medidaProxy: new MedidaProxy(Axios,url),
    pruebaProxy: new PruebaProxy(Axios,url),
    tipoPruebaProxy: new TipoPruebaProxy(Axios,url),

    resultadoProxy: new ResultadoProxy(Axios,url),
    tratamientoProxy: new TratamientoProxy(Axios,url),
    tratamientoXResultadoProxy: new TratamientoXResultadoProxy(Axios,url),
}