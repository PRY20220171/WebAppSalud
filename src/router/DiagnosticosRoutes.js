export function RegistrarDiagnosticoRoute() {
    return {
        path: '/diagnosticos/create',
        name: 'Registro Diagnostico',
        component: () => import( '../views/_createOrUpdate/Diagnosticos/_RegistrarDiagnostico.vue')
        //beforeEnter: SellerAuthorization
    };
}
export function EditarDiagnosticoRoute() {
    return {
        path: '/diagnosticos/update/:id',
        name: 'Editar Diagnostico',
        component: () => import("../views/_createOrUpdate/Diagnosticos/_RegistrarDiagnostico.vue"),
        //beforeEnter: SellerAuthorization
    };
}
export function ListarDiagnosticosRoute() {
    return {
        path: '/diagnosticos',
        name: 'Diagnosticos',
        component: () => import( '../views/_indexes/Diagnosticos/DiagnosticosIndex.vue')
        //beforeEnter: SellerAuthorization
    };
}