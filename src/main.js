import { createApp } from 'vue';

// includes
import router from './includes/routes';
import pinia from './includes/pinia';
import i18n from './includes/i18n';
import primevue from './includes/primevue';

// styles
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import './styles/index.scss';

// app-component
import App from './App.vue';

// z start
createApp(App)
    .use(router)
    .use(pinia)
    .use(i18n)
    .use(primevue).mount('#app');
