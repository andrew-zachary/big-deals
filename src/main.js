import { createApp } from 'vue';

// includes
import router from './includes/routes';
import pinia from './includes/pinia';
import i18n from './includes/i18n';

import './style.scss';

import App from './App.vue';

createApp(App).use(router).use(pinia).use(i18n).mount('#app');
