import Vue from 'vue';
import App from './App.vue';
import router from "@router";
import store from "@store";

import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');