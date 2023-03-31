import PrimeVue from 'primevue/config';

import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';

export default {
    install(app) {
        app.use(PrimeVue);

        app.component('Button', Button);
        app.component('Dropdown', Dropdown);
    }
};