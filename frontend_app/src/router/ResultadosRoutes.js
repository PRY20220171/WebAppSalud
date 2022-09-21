export function RegistrarResultadosRoute() {
    return {
        path: '/Resultadoss/create',
        name: 'RegistroResultados',
        component: () => import( '../views/_createOrUpdate/Resultadoss/_RegistrarResultados.vue')
        //beforeEnter: SellerAuthorization
    };
}
export function EditarResultadosRoute() {
    return {
        path: '/Resultadoss/update/:id',
        name: 'ActualizarResultados',
        component: () => import("../views/_createOrUpdate/Resultadoss/_RegistrarResultados.vue"),
        //beforeEnter: SellerAuthorization
    };
}
export function ListarResultadossRoute() {
    return {
        path: '/Resultadoss',
        name: 'Resultadoss',
        component: () => import( '../views/_indexes/ResultadossIndex.vue')
        //beforeEnter: SellerAuthorization
    };
}