import PrimeVue from "primevue/config";

import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import Sidebar from "primevue/sidebar";
import Progressspinner from "primevue/progressspinner";
import Dialog from 'primevue/dialog';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';

import BadgeDirective from 'primevue/badgedirective';

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

export default {
    install(app) {
        app.use(PrimeVue);

        app.component('Sidebar', Sidebar);
        app.component('Button', Button);
        app.component('Dropdown', Dropdown);
        app.component('Progressspinner', Progressspinner);
        app.component('Dialog', Dialog);
        app.component('InputSwitch', InputSwitch);
        app.component('InputText', InputText);
        
        app.directive('badge', BadgeDirective);
    }
};