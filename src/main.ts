import { createApp } from 'vue';
import '@/assets/css/reset.scss';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(router);

const pinia = createPinia();
app.use(pinia);

app.use(ElementPlus); // 完整引入

app.mount('#app');
