import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/post',
        name: 'post',
        component: () => import('../views/post.vue')

    },
    {
        path: '/axios4',
        name: '随便起',
        component: () => import('../views/axios4.vue')
    }
    ,
    {
        path: '/axios5',
        name: '随便起',
        component: () => import('../views/axios5.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
