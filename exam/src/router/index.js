import { createRouter, createWebHistory } from "vue-router";
import RepoPage from '../views/RepoPage.vue'
import DetailsPage from '../views/DetailsPage.vue'
import NotFound from '../views/NotFound'

const routes = [
    {
        path: '/',
        name: 'RepoPage',
        component: RepoPage
    },
    {
        path: '/details',
        name: 'DetailsPage',
        component: DetailsPage
    },
    {
        path: '/:catchAll(.*)',
        name : 'NotFound',
        component: NotFound
    }
]

const router = createRouter ({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router;