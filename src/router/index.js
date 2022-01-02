import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/layout'

import HelloWorldA from '@/views/hello-world/HelloWorldA'
import HelloWorldB from "@/views/hello-world/HelloWorldB";
import app1 from "@/views/app-example/app1";
import app2 from "@/views/app-example/app2";
import app3 from "@/views/app-example/app3";
import app4 from "@/views/app-example/app4";
import app5 from "@/views/app-example/app5";
import app6 from "@/views/app-example/app6";
import app7 from "@/views/app-example/app7";

const routes = [
    {
        path: '/',
        component: Layout,
        redirect: 'dashboard',
        children: [
            {
                path: 'dashboard',
                component: HelloWorldA,
                name: 'Dashboard',
                meta: {title: 'Dashboard', icon: 'dashboard', affix: true}
            }
        ]
    },
    {
        path: '/hello',
        component: Layout,
        children: [
            {path: '/a', component: HelloWorldA},
            {path: '/b', component: HelloWorldB},
            {
                path: 'index',
                component: () => import('@/views/theme/index'),
                name: 'Theme',
                meta: { title: 'Theme', icon: 'theme' }
            }
        ]
    },
    {
        path: '/app',
        component: Layout,
        children: [
            {path: '/app1', component: app1},
            {path: '/app2', component: app2},
            {path: '/app3', component: app3},
            {path: '/app4', component: app4},
            {path: '/app5', component: app5},
            {path: '/app6', component: app6},
            {path: '/app7', component: app7},
        ]
    },

]


const router = new VueRouter({
    routes: routes
})

export default router
