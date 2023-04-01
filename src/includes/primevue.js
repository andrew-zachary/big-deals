import PrimeVue from 'primevue/config';

import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import Sidebar from 'primevue/sidebar';

export default {
    install(app) {
        app.use(PrimeVue);

        app.component('Sidebar', Sidebar);
        app.component('Button', Button);
        app.component('Dropdown', Dropdown);
    }
};