const routes = [
    {
        path: "/",
        name: 'Home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: "/register",
        name: 'Register',
        component: () => import('../views/Register.vue'),
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('../views/404.vue')
    }
]

export default routes