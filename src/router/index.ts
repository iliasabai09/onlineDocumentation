import {createRouter, createWebHistory} from 'vue-router'
import Detail from "../pages/detail.vue";

const routes: any = [
    // {path: '/', component: HomeView},
    {path: '/detail/:id', component: Detail},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
