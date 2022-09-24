export function RegistrarAtencionRoute() {
    return {
        path: '/Consultas/create',
        name: 'RegistroConsulta',
        component: () => import( '../views/_createOrUpdate/Atenciones/_RegistrarAtencion.vue')
        //beforeEnter: SellerAuthorization
    };
}
export function EditarAtencionRoute() {
    return {
        path: '/Consultas/update/:id',
        name: 'ActualizarConsulta',
        component: () => import("../views/_createOrUpdate/Atenciones/_RegistrarAtencion.vue"),
        //beforeEnter: SellerAuthorization
    };
}
export function ListaAtencionesRoute() {
    return {
        path: '/Consultas',
        name: 'Consultas',
        component: () => import( '../views/_indexes/Atenciones/AtencionesIndex.vue')
        //beforeEnter: SellerAuthorization
    };
}