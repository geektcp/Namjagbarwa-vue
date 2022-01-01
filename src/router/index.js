import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import HelloWorldA from '@/view/HelloWorldA'
import HelloWorldB from "@/view/HelloWorldB";

const routes = [
    { path: '/',   component: HelloWorldA },
    { path: '/a',  component: HelloWorldA  },
    { path: '/b',  component: HelloWorldB }

]


const router = new VueRouter({
    routes: routes
})

export default router
