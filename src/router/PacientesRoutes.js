export function RegistrarPacienteRoute() {
    return {
        path: '/pacientes/create',
        name: 'Registro Paciente',
        component: () => import( '../views/_createOrUpdate/Pacientes/_RegistrarPaciente.vue')
        //beforeEnter: SellerAuthorization
    };
}
export function EditarPacienteRoute() {
    return {
        path: '/pacientes/update/:id',
        name: 'Editar Paciente',
        component: () => import("../views/_createOrUpdate/Pacientes/_RegistrarPaciente.vue"),
        //beforeEnter: SellerAuthorization
    };
}
export function ListarPacientesRoute() {
    return {
        path: '/pacientes',
        name: 'Pacientes',
        component: () => import( '../views/_indexes/Pacientes/PacientesIndex.vue')
        //beforeEnter: SellerAuthorization
    };
}
export function ListarPacientesSinEditarRoute() {
    return {
        path: '/pacientes',
        name: 'Pacientes',
        component: () => import( '../views/_indexes/Pacientes/PacientesIndexSearch.vue')
        //beforeEnter: SellerAuthorization
    };
}