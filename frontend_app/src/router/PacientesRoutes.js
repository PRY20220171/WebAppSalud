export function PacienteRoute() {
    return {
        path: '/registrar_paciente',
        name: 'registrar_paciente',
        component: () => import( '../views/_createOrUpdate/Pacientes/_RegistrarPaciente.vue')
    };
}
export function ListaPacientesRoute() {
    return {
        path: '/listar_pacientes',
        name: 'listar_pacientes',
        component: () => import( '../views/_indexes/PacientesIndex.vue')
    };
}
