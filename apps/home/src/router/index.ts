import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            component: () => import('../views/index.vue'),
            name: 'home',
            path: '/',
        }
    ],
});