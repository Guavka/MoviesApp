import App from './App.vue';
import router from './router'
import './assets/media.scss'
import './assets/reset.scss'

const app = createApp(App);

app.use(createPinia());
app.use(router)

app.mount('#app');
