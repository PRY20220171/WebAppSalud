export function RegistrarTransferenciasRoute() {
    return {
        path: '/Transferencias/create',
        name: 'Registro Transferencia',
        component: () => import( '../views/_createOrUpdate/Transferencias/_RegistrarTransferencia.vue')
        //beforeEnter: SellerAuthorization
    };
}
export function EditarTransferenciasRoute() {
    return {
        path: '/Transferencias/update/:id',
        name: 'Editar Transferencia',
        component: () => import("../views/_createOrUpdate/Transferencias/_RegistrarTransferencia.vue"),
        //beforeEnter: SellerAuthorization
    };
}
export function ListarTransferenciasRoute() {
    return {
        path: '/Transferencias',
        name: 'Transferencias',
        component: () => import( '../views/_indexes/Transferencias/TransferenciasIndex.vue')
        //beforeEnter: SellerAuthorization
    };
}