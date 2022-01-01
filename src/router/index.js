import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import HelloWorldA from '../components/HelloWorldA'
import HelloWorldB from "../components/HelloWorldB";
// const routes = [
//     { path: '/a',  component: HelloWorldA  },
//     { path: '/b',  component: HelloWorldB }
//
// ]

const routes = [
    { path: '/a',  component: () => import('@/components/HelloWorldA')  },
    { path: '/b',  component: () => import('@/components/HelloWorldB')  }

]



const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router
