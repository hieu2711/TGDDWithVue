
import './assets/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import '@fortawesome/fontawesome-free/css/all.css';
import PrimeVue from "primevue/config";
import Carousel from 'primevue/carousel';
const app = createApp(App)
app.use(router)
app.use(Antd);

app.use(PrimeVue, {
    unstyled: true
});
app.component('Carousel', Carousel);
app.mount('#app')
