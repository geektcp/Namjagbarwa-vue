import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

// import router from './router'

const routes = [
  { path: '/a', component: () => import('@/components/HelloWorld'), },
  { path: '/a', component: () => import('@/components/HelloWorldS'), },
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
