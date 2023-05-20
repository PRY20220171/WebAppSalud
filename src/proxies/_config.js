import Axios from 'axios';
import IdentityProxy from './IdentityProxy';
import UserProxy from './Usuarios/UsuarioProxy';
import RolProxy from './Usuarios/RolProxy';
import UsuarioXRolProxy from './Usuarios/UsuarioXRolProxy';

import PacienteProxy from './Pacientes/PacienteProxy';
import UbicacionProxy from './Pacientes/UbicacionProxy';
import AntecedentePerinatalProxy from './Pacientes/AntecedentePerinatalProxy';
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
import TransferenciaProxy from './Transferencias/TransferenciaProxy';

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
       /* if (status === 404 && error.config.method === 'get') {
            return Promise.resolve({ data: false });
          }*/
        return Promise.reject(error);
    }
);
let url = 'http://localhost:3000/'; //->Para conexion local
//let url='http://a0cf87b4b3dbe4e5a94c43389efa8cb5-1064006626.us-east-1.elb.amazonaws.com:8188/'; //->Para conexion cloud

export default {

    userProxy: new UserProxy(Axios,url),
    rolProxy: new RolProxy(Axios,url),
    usuarioXRolProxy: new UsuarioXRolProxy(Axios,url),

    pacienteProxy: new PacienteProxy(Axios,url),
    ubicacionProxy: new UbicacionProxy(Axios,url),
    antecedentePerinatalProxy: new AntecedentePerinatalProxy(Axios,url),
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
    transferenciaProxy: new TransferenciaProxy(Axios,url),
}