import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Products from '../views/Products.vue';
import Dashboard from '../views/admin/Home.vue';

const routes = [
    {path: '/', component: Home},
    {path: '/products', component: Products},
    {path: '/about', component: About},
    {path: '/dashboard', component: Dashboard}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;