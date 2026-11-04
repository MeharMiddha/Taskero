import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import SignUpView from "@/views/SignUpView.vue";
import HomeView from "@/views/HomeView.vue";
import TodoPage from "@/components/TodoPage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/todos',
        name: 'Todos',
        component: TodoPage
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUpView
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;