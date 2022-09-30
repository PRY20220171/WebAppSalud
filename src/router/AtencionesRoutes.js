export function RegistrarAtencionRoute() {
    return {
        path: '/consultas/create',
        name: 'Registro Consulta',
        component: () => import( '../views/_createOrUpdate/Atenciones/_RegistrarAtencion.vue')
        //beforeEnter: SellerAuthorization
    };
}
export function EditarAtencionRoute() {
    return {
        path: '/consultas/update/:id',
        name: 'Editar Consulta',
        component: () => import("../views/_createOrUpdate/Atenciones/_RegistrarAtencion.vue"),
        //beforeEnter: SellerAuthorization
    };
}
export function ListaAtencionesRoute() {
    return {
        path: '/consultas',
        name: 'Consultas',
        component: () => import( '../views/_indexes/Atenciones/AtencionesIndex.vue'),
        //beforeEnter: SellerAuthorization
    };
}