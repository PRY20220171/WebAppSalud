export function RegistrarPruebaRoute() {
    return {
        path: '/Pruebas/create',
        name: 'RegistroPrueba',
        component: () => import( '../views/_createOrUpdate/Pruebas/_RegistrarPrueba.vue')
        //beforeEnter: SellerAuthorization
    };
}
export function EditarPruebaRoute() {
    return {
        path: '/Pruebas/update/:id',
        name: 'ActualizarPrueba',
        component: () => import("../views/_createOrUpdate/Pruebas/_RegistrarPrueba.vue"),
        //beforeEnter: SellerAuthorization
    };
}
export function ListarPruebasRoute() {
    return {
        path: '/Pruebas',
        name: 'Pruebas',
        component: () => import( '../views/_indexes/PruebasIndex.vue')
        //beforeEnter: SellerAuthorization
    };
}