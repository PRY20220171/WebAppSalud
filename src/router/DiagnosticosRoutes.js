export function RegistrarDiagnosticoRoute() {
    return {
        path: '/Diagnosticos/create',
        name: 'RegistroDiagnostico',
        component: () => import( '../views/_createOrUpdate/Diagnosticos/_RegistrarDiagnostico.vue')
        //beforeEnter: SellerAuthorization
    };
}
export function EditarDiagnosticoRoute() {
    return {
        path: '/Diagnosticos/update/:id',
        name: 'ActualizarDiagnostico',
        component: () => import("../views/_createOrUpdate/Diagnosticos/_RegistrarDiagnostico.vue"),
        //beforeEnter: SellerAuthorization
    };
}
export function ListarDiagnosticosRoute() {
    return {
        path: '/Diagnosticos',
        name: 'Diagnosticos',
        component: () => import( '../views/_indexes/DiagnosticosIndex.vue')
        //beforeEnter: SellerAuthorization
    };
}