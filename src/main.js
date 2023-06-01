import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import WidgetComponent from "./components/WidgetComponent.vue";

const routes = [
    {
        name: 'Home',
        path: '/',
        component: WidgetComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App)


app.use(router)

app.mount('#root')
