import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import '../src/assets/styles/main.scss';
import 'primeicons/primeicons.css'
import {db} from "./firebase.ts";

import 'prismjs';
import 'prismjs/themes/prism-okaidia.min.css';

const app = createApp(App)

console.log(db)
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app')
