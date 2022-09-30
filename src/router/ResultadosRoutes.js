export function RegistrarResultadosRoute() {
    return {
        path: '/resultados/create',
        name: 'Registro Resultado',
        component: () => import( '../views/_createOrUpdate/Resultados/_RegistrarResultado.vue')
        //beforeEnter: SellerAuthorization
    };
}
export function EditarResultadosRoute() {
    return {
        path: '/resultados/update/:id',
        name: 'Editar Resultado',
        component: () => import("../views/_createOrUpdate/Resultados/_RegistrarResultado.vue"),
        //beforeEnter: SellerAuthorization
    };
}
export function ListarResultadossRoute() {
    return {
        path: '/resultados',
        name: 'Resultados',
        component: () => import( '../views/_indexes/Resultados/ResultadosIndex.vue')
        //beforeEnter: SellerAuthorization
    };
}