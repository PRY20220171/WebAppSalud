export function RegistrarPruebaRoute() {
    return {
        path: '/pruebas/create',
        name: 'Registro Prueba',
        component: () => import( '../views/_createOrUpdate/Pruebas/_RegistrarPrueba.vue')
        //beforeEnter: SellerAuthorization
    };
}
export function EditarPruebaRoute() {
    return {
        path: '/pruebas/update/:id',
        name: 'Editar Prueba',
        component: () => import("../views/_createOrUpdate/Pruebas/_RegistrarPrueba.vue"),
        //beforeEnter: SellerAuthorization
    };
}
export function ListarPruebasRoute() {
    return {
        path: '/pruebas',
        name: 'Pruebas',
        component: () => import( '../views/_indexes/Pruebas/PruebasIndex.vue')
        //beforeEnter: SellerAuthorization
    };
}