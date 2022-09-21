export function RegistrarAtencionRoute() {
    return {
        path: '/Atencions/create',
        name: 'RegistroAtencion',
        component: () => import( '../views/_createOrUpdate/Atencions/_RegistrarAtencion.vue')
        //beforeEnter: SellerAuthorization
    };
}
export function EditarAtencionRoute() {
    return {
        path: '/Atencions/update/:id',
        name: 'ActualizarAtencion',
        component: () => import("../views/_createOrUpdate/Atencions/_RegistrarAtencion.vue"),
        //beforeEnter: SellerAuthorization
    };
}
export function ListaAtencionesRoute() {
    return {
        path: '/Atenciones',
        name: 'Atenciones',
        component: () => import( '../views/_indexes/AtencionesIndex.vue')
        //beforeEnter: SellerAuthorization
    };
}