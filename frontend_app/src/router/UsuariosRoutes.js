export function RegistrarUsuarioRoute() {
    return {
        path: '/Usuarios/create',
        name: 'RegistroUsuario',
        component: () => import( '../views/_createOrUpdate/Usuarios/_RegistrarUsuario.vue')
        //beforeEnter: SellerAuthorization
    };
}export function VerPerfilRoute() {
    return {
        path: '/perfil',
        name: 'Mi Perfil',
        component: () => import( '../views/Usuario/PerfilView.vue')
        //beforeEnter: SellerAuthorization
    };
}
export function EditarUsuarioRoute() {
    return {
        path: '/Usuarios/update/:id',
        name: 'ActualizarUsuario',
        component: () => import("../views/_createOrUpdate/Usuarios/_RegistrarUsuario.vue"),
        //beforeEnter: SellerAuthorization
    };
}
export function EditarPerfilRoute() {
    return {
        path: '/Usuarios/update/:id',
        name: 'ActualizarUsuario',
        component: () => import("../views/Usuario/EditarPerfilView.vue"),
        //beforeEnter: SellerAuthorization
    };
}
export function ListarUsuariosRoute() {
    return {
        path: '/Usuarios',
        name: 'Usuarios',
        component: () => import( '../views/_indexes/UsuariosIndex.vue')
        //beforeEnter: SellerAuthorization
    };
}