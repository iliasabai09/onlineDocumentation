import {createRouter, createWebHistory} from 'vue-router'

const routes: any = [
    // {path: '/', component: HomeView},
    // {path: '/about', component: AboutView},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
