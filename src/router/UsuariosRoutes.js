export function RegistrarUsuarioRoute() {
    return {
        path: '/usuarios/create',
        name: 'Registro Usuario',
        component: () => import( '../views/_createOrUpdate/Usuarios/_RegistrarUsuario.vue')
        //beforeEnter: SellerAuthorization
    };
}
export function VerPerfilRoute() {
    return {
        path: '/perfil',
        name: 'Mi Perfil',
        component: () => import( '../views/Usuario/PerfilView.vue')
        //beforeEnter: SellerAuthorization
    };
}
export function EditarPerfilRoute() {
    return {
        path: '/perfil/editar',
        name: 'Editar Perfil',
        component: () => import("../views/_createOrUpdate/Usuarios/_RegistrarUsuario.vue"),
      };
}
export function EditarUsuarioRoute() {
    return {
        path: '/usuarios/update/:id',
        name: 'Editar Usuario',
        component: () => import("../views/_createOrUpdate/Usuarios/_RegistrarUsuario.vue"),
        //beforeEnter: SellerAuthorization
    };
}
// export function EditarPerfilRoute() {
    // es igual a EditarPerfilRoute (linea 17)
//     return {
//         path: '/usuarios/update/:id',
//         name: 'ActualizarUsuario',
//         component: () => import("../views/Usuario/EditarPerfilView.vue"),
//         //beforeEnter: SellerAuthorization
//     };
// }
export function ListarUsuariosRoute() {
    return {
        path: '/usuarios',
        name: 'Usuarios',
        component: () => import( '../views/_indexes/UsuariosIndex.vue')
        //beforeEnter: SellerAuthorization
    };
}