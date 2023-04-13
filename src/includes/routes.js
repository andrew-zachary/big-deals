import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Products from '../views/Products.vue';
import Account from '../views/Account.vue';
import Login from '../components/Forms/Login.vue';
import Register from '../components/Forms/Register.vue';

const routes = [
    {path: '/', component: Home},
    {path: '/products', component: Products},
    {path: '/about', component: About},
    {
        path: '/account', 
        component: Account,
        children: [
            {
                path:'',
                component: Login
            },
            {
                path:'register',
                component: Register
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;