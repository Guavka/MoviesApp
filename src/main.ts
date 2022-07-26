import App from './App.vue';
import router from './router'
import './assets/media.scss'
import './assets/reset.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App);

app.use(createPinia());
app.use(router)

app.mount('#app');
