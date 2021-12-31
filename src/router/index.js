import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import HelloWorldS from '../components/HelloWorldS'
import HelloWorld from "../components/HelloWorld";
const routes = [
    { path: '/foo', component: HelloWorld },
    { path: '/bar', component: HelloWorldS }
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router