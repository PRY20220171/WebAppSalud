export function RegistrarPacienteRoute() {
    return {
        path: '/pacientes/create',
        name: 'RegistroPaciente',
        component: () => import( '../views/_createOrUpdate/Pacientes/_RegistrarPaciente.vue')
        //beforeEnter: SellerAuthorization
    };
}
export function EditarPacienteRoute() {
    return {
        path: '/pacientes/update/:id',
        name: 'ActualizarPaciente',
        component: () => import("../views/_createOrUpdate/Pacientes/_RegistrarPaciente.vue"),
        //beforeEnter: SellerAuthorization
    };
}
export function ListarPacientesRoute() {
    return {
        path: '/pacientes',
        name: 'pacientes',
        component: () => import( '../views/_indexes/PacientesIndex.vue')
        //beforeEnter: SellerAuthorization
    };
}