import App from './App.vue';
import './assets/media.scss'
import './assets/reset.scss'

const app = createApp(App);

app.use(createPinia());

app.mount('#app');
