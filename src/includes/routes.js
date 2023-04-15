import { createRouter, createWebHistory } from "vue-router";

import useUserStore from "../stores/user";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Products from "../views/Products.vue";
import Account from "../views/Account.vue";
import Dashboard from "../views/admin/Home.vue";

import Login from "../components/Forms/Login.vue";
import Register from "../components/Forms/Register.vue";
import ForgotPassword from "../components/Forms/ForgotPassword.vue";

const routes = [
    {path: '/', component: Home, name: 'home', meta: {requiresAuth: false} },
    {path: '/products', component: Products, name: 'products', meta: {requiresAuth: false} },
    {path: '/about', component: About, name: 'about', meta: {requiresAuth: false} },
    {
        path: '/account', 
        component: Account,
        name: 'account',
        children: [
            {
                path:'',
                component: Login,
                name: 'login'
            },
            {
                path:'register',
                component: Register,
                name: 'register'
            },
            {
                path: 'forgot-password',
                component: ForgotPassword,
                name: 'forgot-password'
            }
        ]
    },
    { path: '/dashboard', component: Dashboard, name: 'dashboard', meta: {requiresAuth: true} }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeEach( (to, _) => {

    const userStore = useUserStore();

    if(to.name !== 'dashboard' && userStore.user.authed) {

        return {name: 'dashboard'};

    } else if(to.name === 'dashboard' && !userStore.user.authed) {

        return {name: 'home'};

    } else {

        return true;
    }

});

export default router;