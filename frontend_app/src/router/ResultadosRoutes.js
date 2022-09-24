export function RegistrarResultadosRoute() {
    return {
        path: '/Resultados/create',
        name: 'RegistroResultados',
        component: () => import( '../views/_createOrUpdate/Resultados/_RegistrarResultado.vue')
        //beforeEnter: SellerAuthorization
    };
}
export function EditarResultadosRoute() {
    return {
        path: '/Resultados/update/:id',
        name: 'ActualizarResultados',
        component: () => import("../views/_createOrUpdate/Resultados/_RegistrarResultado.vue"),
        //beforeEnter: SellerAuthorization
    };
}
export function ListarResultadossRoute() {
    return {
        path: '/Resultados',
        name: 'Resultados',
        component: () => import( '../views/_indexes/Resultados/ResultadosIndex.vue')
        //beforeEnter: SellerAuthorization
    };
}