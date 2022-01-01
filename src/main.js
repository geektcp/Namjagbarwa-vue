import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

// import router from './router'

// const routes = [
//   { path: '/a', component: () => import('@/components/HelloWorldA'), },
//   { path: '/b', component: () => import('@/components/HelloWorldB'), },
// ]

import HelloWorldA from '@/components/HelloWorldA'
import HelloWorldB from "@/components/HelloWorldB";
const routes = [
    { path: '/a',  component: HelloWorldA  },
    { path: '/b',  component: HelloWorldB }

]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
