import { createApp } from 'vue';

// includes
import router from './includes/routes';
import pinia from './includes/pinia';

import './style.scss';

import App from './App.vue';

createApp(App).use(router).use(pinia).mount('#app');
