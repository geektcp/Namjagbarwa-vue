import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import HelloWorldA from '@/view/hello-world/HelloWorldA'
import HelloWorldB from "@/view/hello-world/HelloWorldB";
import app1 from "@/view/app-example/app1";
import app2 from "@/view/app-example/app2";
import app3 from "@/view/app-example/app3";
import app4 from "@/view/app-example/app4";
import app5 from "@/view/app-example/app5";
import app6 from "@/view/app-example/app6";
import app7 from "@/view/app-example/app7";

const routes = [
    { path: '/',   component: HelloWorldA },
    { path: '/a',  component: HelloWorldA  },
    { path: '/b',  component: HelloWorldB },
    { path: '/app1',  component: app1 },
    { path: '/app2',  component: app2},
    { path: '/app3',  component: app3 },
    { path: '/app4',  component: app4 },
    { path: '/app5',  component: app5 },
    { path: '/app6',  component: app6 },
    { path: '/app7',  component: app7 },
]


const router = new VueRouter({
    routes: routes
})

export default router
