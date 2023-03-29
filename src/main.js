import { createApp } from 'vue';

// includes
import router from './includes/routes';

import './style.scss';

import App from './App.vue';

createApp(App).use(router).mount('#app');
